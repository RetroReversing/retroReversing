#!/usr/bin/env python3
"""Refresh public repository activity in the decompilation catalog (Python 3.9+)."""
import argparse
import calendar
import datetime as dt
import json
import os
from pathlib import Path
import sys
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urlsplit
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_DATA = ROOT / '_data/decompilations'


def load_catalog(path):
    """Combine platform files in memory, retaining their ownership for writes."""
    paths = sorted(path.glob('*.json')) if path.is_dir() else [path]
    if not paths:
        raise ValueError('Catalog directory contains no JSON files')
    catalog = {'schema_version': 1, 'projects': {}, 'consoles': {}}
    sources = {}
    for source in paths:
        data = json.loads(source.read_text(encoding='utf-8'))
        if data.get('schema_version') != 1 or not isinstance(data.get('projects'), dict):
            raise ValueError('Unsupported catalog schema: {}'.format(source))
        for section in ('projects', 'consoles'):
            entries = data.get(section, {})
            if not isinstance(entries, dict):
                raise ValueError('Invalid {} in {}'.format(section, source))
            duplicates = catalog[section].keys() & entries.keys()
            if duplicates:
                raise ValueError('Duplicate {} IDs: {}'.format(section, ', '.join(sorted(duplicates))))
            catalog[section].update(entries)
        sources[source] = (data, json.dumps(data, sort_keys=True))
    return catalog, sources


def save_catalog(sources):
    """Write only changed files; project objects are shared with the catalog."""
    for path, (data, original) in sources.items():
        if json.dumps(data, sort_keys=True) == original:
            continue
        temporary = path.with_suffix('.json.tmp')
        temporary.write_text(json.dumps(data, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
        temporary.replace(path)


def timestamp(value):
    return dt.datetime.fromisoformat(value.replace('Z', '+00:00')).astimezone(dt.timezone.utc)


def iso(value):
    return value.astimezone(dt.timezone.utc).isoformat(timespec='seconds').replace('+00:00', 'Z')


def activity_status(last_commit, archived, now):
    # Calendar months, rather than 365 days, also handle leap years.
    year = now.year - 1
    cutoff = now.replace(year=year, day=min(now.day, calendar.monthrange(year, now.month)[1]))
    return 'Inactive' if archived or timestamp(last_commit) < cutoff else 'Active'


def repository_identity(url):
    parts = urlsplit(url)
    path = parts.path.strip('/')
    if parts.scheme != 'https':
        raise ValueError('Repository URL must use HTTPS')
    if parts.netloc in ('github.com', 'codeberg.org'):
        path = '/'.join(path.split('/')[:2])
    elif parts.netloc == 'gitlab.com':
        path = path.split('/-/')[0]
    else:
        raise ValueError('Unsupported repository host')
    if len(path.split('/')) < 2:
        raise ValueError('Repository URL must include an owner and repository')
    return parts.netloc, path.removesuffix('.git')


class FetchError(Exception):
    def __init__(self, message, rate_limited=False):
        super().__init__(message)
        self.rate_limited = rate_limited


class Client:
    def get(self, url, host):
        return self.request(url, host)

    def graphql(self, query):
        return self.request('https://api.github.com/graphql', 'github.com', {'query': query})

    def request(self, url, host, payload=None):
        headers = {'Accept': 'application/json', 'User-Agent': 'RetroReversing-decomp-activity'}
        token_name = {'github.com': 'GITHUB_TOKEN', 'gitlab.com': 'GITLAB_TOKEN', 'codeberg.org': 'CODEBERG_TOKEN'}[host]
        token = os.environ.get(token_name) or (os.environ.get('GH_TOKEN') if host == 'github.com' else None)
        if token:
            if host == 'gitlab.com':
                headers['PRIVATE-TOKEN'] = token
            else:
                headers['Authorization'] = ('token ' if host == 'codeberg.org' else 'Bearer ') + token
        try:
            body = None if payload is None else json.dumps(payload).encode('utf-8')
            if body is not None:
                headers['Content-Type'] = 'application/json'
            with urlopen(Request(url, headers=headers, data=body), timeout=20) as response:
                return json.load(response)
        except HTTPError as error:
            rate_limited = error.code == 429 or (error.code == 403 and
                           (error.headers.get('X-RateLimit-Remaining') == '0' or error.headers.get('Retry-After')))
            raise FetchError('API rate limit reached' if rate_limited else 'HTTP {}'.format(error.code), rate_limited) from error
        except (URLError, TimeoutError, ValueError) as error:
            raise FetchError('Repository request failed ({})'.format(type(error).__name__)) from error


def fetch_repository(url, client):
    host, path = repository_identity(url)
    if host == 'github.com':
        base = 'https://api.github.com/repos/' + path
        meta = client.get(base, host)
        branch = meta['default_branch']
        commits = client.get(base + '/commits?per_page=1&sha=' + quote(branch, safe=''), host)
        commit = commits[0]
        date = commit['commit']['committer']['date']
        link = commit['html_url']
    elif host == 'gitlab.com':
        base = 'https://gitlab.com/api/v4/projects/' + quote(path, safe='')
        meta = client.get(base, host)
        branch = meta['default_branch']
        commits = client.get(base + '/repository/commits?per_page=1&ref_name=' + quote(branch, safe=''), host)
        date, link = commits[0]['committed_date'], commits[0]['web_url']
    else:
        base = 'https://codeberg.org/api/v1/repos/' + path
        meta = client.get(base, host)
        branch = meta['default_branch']
        commits = client.get(base + '/commits?limit=1&sha=' + quote(branch, safe=''), host)
        date, link = commits[0]['commit']['committer']['date'], commits[0]['html_url']
    if urlsplit(link).scheme != 'https':
        raise ValueError('Invalid commit URL')
    stars = meta['stargazers_count'] if host == 'github.com' else None
    if host == 'github.com' and (type(stars) is not int or stars < 0):
        raise ValueError('Invalid GitHub star count')
    return {'last_commit_at': iso(timestamp(date)), 'last_commit_url': link,
            'default_branch': branch, 'archived': bool(meta.get('archived', False)),
            'github_stars': stars}


def fetch_github_batch(identities, client):
    """Read default-branch commits and repository metadata in one query."""
    fields = []
    for index, (_, path) in enumerate(identities):
        owner, name = path.split('/')
        fields.append('r%d: repository(owner: %s, name: %s) { stargazerCount isArchived '
                      'defaultBranchRef { name target { ... on Commit { committedDate url } } } }'
                      % (index, json.dumps(owner), json.dumps(name)))
    response = client.graphql('query { ' + ' '.join(fields) + ' }')
    errors = response.get('errors', [])
    rate_limited = any(error.get('type') == 'RATE_LIMITED' for error in errors)
    nodes = response.get('data') or {}
    results = {}
    for index, identity in enumerate(identities):
        alias = 'r%d' % index
        try:
            if any((error.get('path') or [None])[0] == alias for error in errors):
                raise FetchError('GitHub GraphQL repository check failed', rate_limited)
            node = nodes.get(alias)
            if not node:
                raise FetchError('API rate limit reached' if rate_limited else
                                 'GitHub repository unavailable', rate_limited)
            branch = node['defaultBranchRef']
            commit = branch['target']
            stars = node['stargazerCount']
            if type(stars) is not int or stars < 0 or urlsplit(commit['url']).scheme != 'https':
                raise ValueError('Invalid GitHub repository metadata')
            results[identity] = {'last_commit_at': iso(timestamp(commit['committedDate'])),
                                 'last_commit_url': commit['url'], 'default_branch': branch['name'],
                                 'archived': bool(node['isArchived']), 'github_stars': stars}
        except (FetchError, KeyError, IndexError, TypeError, ValueError) as error:
            results[identity] = error
    return results


def refresh(data, client, now, limit=None, selected=None, github_graphql=False):
    cache, attempts, failures = {}, 0, 0
    planned = []
    for key, project in data['projects'].items():
        if selected and key not in selected:
            continue
        try:
            identity = repository_identity(project['repository_url'])
        except ValueError:
            continue
        if identity not in planned:
            planned.append(identity)
    if limit is not None:
        planned = planned[:limit]
    for key, project in data['projects'].items():
        if selected and key not in selected:
            continue
        try:
            identity = repository_identity(project['repository_url'])
        except ValueError:
            continue
        if identity not in planned:
            continue
        if identity not in cache:
            if github_graphql and identity[0] == 'github.com':
                batch = [item for item in planned if item[0] == 'github.com' and item not in cache][:50]
                attempts += len(batch)
                try:
                    cache.update(fetch_github_batch(batch, client))
                except (FetchError, KeyError, IndexError, TypeError, ValueError) as error:
                    cache.update({item: error for item in batch})
            else:
                attempts += 1
                try:
                    cache[identity] = fetch_repository(project['repository_url'], client)
                except (FetchError, KeyError, IndexError, TypeError, ValueError) as error:
                    cache[identity] = error
        result = cache[identity]
        activity = project.setdefault('activity', {})
        if isinstance(result, Exception):
            failures += 1
            activity['check_error'] = str(result)
            # Keep last successful evidence/status on transient failures.
            if not activity.get('last_commit_at'):
                activity['status'] = 'Unverified'
            print('{}: {}'.format(project['name'], result), file=sys.stderr)
            if isinstance(result, FetchError) and result.rate_limited:
                break
        else:
            activity.update(result)
            activity['status'] = activity_status(result['last_commit_at'], result['archived'], now)
            activity.pop('check_error', None)
    return attempts, failures


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data', type=Path, default=DEFAULT_DATA, help='Platform catalog directory or a single JSON file')
    parser.add_argument('--limit', type=int, help='Maximum distinct repositories to check')
    parser.add_argument('--project', action='append', help='Catalog project ID (repeatable)')
    parser.add_argument('--dry-run', action='store_true', help='Fetch and report without writing')
    parser.add_argument('--github-graphql', action='store_true', help='Batch GitHub checks (requires GITHUB_TOKEN or GH_TOKEN)')
    args = parser.parse_args()
    if args.limit is not None and args.limit < 1:
        parser.error('--limit must be positive')
    if args.github_graphql and not (os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')):
        parser.error('--github-graphql requires GITHUB_TOKEN or GH_TOKEN; no requests were made')
    try:
        data, sources = load_catalog(args.data)
    except (OSError, ValueError) as error:
        parser.error(str(error))
    if args.project and set(args.project) - data['projects'].keys():
        parser.error('Unknown project ID')
    if not args.github_graphql and not (os.environ.get('GITHUB_TOKEN') or os.environ.get('GH_TOKEN')):
        print('GitHub requests are unauthenticated. For daily runs use --github-graphql with a token.', file=sys.stderr)
    attempts, failures = refresh(data, Client(), dt.datetime.now(dt.timezone.utc), args.limit, args.project, args.github_graphql)
    if not args.dry_run:
        save_catalog(sources)
    print('Checked {} repositories; {} failed checks{}'.format(attempts, failures, ' (dry run)' if args.dry_run else ''))
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main())
