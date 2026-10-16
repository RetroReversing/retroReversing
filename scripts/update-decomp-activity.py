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
        headers = {'Accept': 'application/json', 'User-Agent': 'RetroReversing-decomp-activity'}
        token_name = {'github.com': 'GITHUB_TOKEN', 'gitlab.com': 'GITLAB_TOKEN', 'codeberg.org': 'CODEBERG_TOKEN'}[host]
        token = os.environ.get(token_name)
        if token:
            if host == 'gitlab.com':
                headers['PRIVATE-TOKEN'] = token
            else:
                headers['Authorization'] = ('token ' if host == 'codeberg.org' else 'Bearer ') + token
        try:
            with urlopen(Request(url, headers=headers), timeout=20) as response:
                return json.load(response)
        except HTTPError as error:
            rate_limited = error.code == 429 or (error.code == 403 and error.headers.get('X-RateLimit-Remaining') == '0')
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
    return {'last_commit_at': iso(timestamp(date)), 'last_commit_url': link,
            'default_branch': branch, 'archived': bool(meta.get('archived', False))}


def refresh(data, client, now, limit=None, selected=None):
    cache, attempts, failures = {}, 0, 0
    for key, project in data['projects'].items():
        if selected and key not in selected:
            continue
        try:
            identity = repository_identity(project['repository_url'])
        except ValueError:
            continue
        if identity not in cache:
            if limit is not None and attempts >= limit:
                continue
            attempts += 1
            try:
                cache[identity] = fetch_repository(project['repository_url'], client)
            except (FetchError, KeyError, IndexError, TypeError, ValueError) as error:
                cache[identity] = error
        result = cache[identity]
        activity = project.setdefault('activity', {})
        activity['checked_at'] = iso(now)
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
            activity['last_success_at'] = iso(now)
            activity['status'] = activity_status(result['last_commit_at'], result['archived'], now)
            activity.pop('check_error', None)
    return attempts, failures


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--data', type=Path, default=DEFAULT_DATA, help='Platform catalog directory or a single JSON file')
    parser.add_argument('--limit', type=int, help='Maximum distinct repositories to check')
    parser.add_argument('--project', action='append', help='Catalog project ID (repeatable)')
    parser.add_argument('--dry-run', action='store_true', help='Fetch and report without writing')
    args = parser.parse_args()
    if args.limit is not None and args.limit < 1:
        parser.error('--limit must be positive')
    try:
        data, sources = load_catalog(args.data)
    except (OSError, ValueError) as error:
        parser.error(str(error))
    if args.project and set(args.project) - data['projects'].keys():
        parser.error('Unknown project ID')
    attempts, failures = refresh(data, Client(), dt.datetime.now(dt.timezone.utc), args.limit, args.project)
    if not args.dry_run:
        save_catalog(sources)
    print('Checked {} repositories; {} failed checks{}'.format(attempts, failures, ' (dry run)' if args.dry_run else ''))
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main())
