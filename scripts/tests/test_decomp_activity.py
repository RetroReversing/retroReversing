import datetime as dt
import importlib.util
import json
from pathlib import Path
import re
import unittest
from unittest.mock import patch
from urllib.error import HTTPError

spec = importlib.util.spec_from_file_location('activity', Path(__file__).resolve().parents[1] / 'update-decomp-activity.py')
activity = importlib.util.module_from_spec(spec)
spec.loader.exec_module(activity)
NOW = dt.datetime(2026, 10, 11, tzinfo=dt.timezone.utc)


class FixtureClient:
    def __init__(self, responses):
        self.responses = list(responses)
        self.urls = []

    def get(self, url, host):
        self.urls.append(url)
        result = self.responses.pop(0)
        if isinstance(result, Exception):
            raise result
        return result


class ActivityTests(unittest.TestCase):
    def test_catalog_references_and_evidence(self):
        catalog = json.loads(activity.DEFAULT_DATA.read_text())
        page = (activity.ROOT / 'pages/SourceCode/DecompiledRetailConsoleGames.md').read_text()
        consoles = re.findall(r'include decomp-table.html console="([^"]+)"', page)
        self.assertTrue(consoles)
        for key in consoles:
            self.assertIn(key, catalog['consoles'])
            table = catalog['consoles'][key]
            self.assertTrue(table['rows'])
            for row in table['rows']:
                self.assertIn(row['project'], catalog['projects'])
                self.assertTrue(row['name_markdown'])
                percent = row['completion_percent']
                self.assertTrue(percent is None or (isinstance(percent, (int, float)) and 0 <= percent <= 100))
                self.assertIn(row['completion_qualifier'], ('', '>'))
                self.assertIn(row['completion_metric'], ('completion', 'functional', 'accuracy'))
                self.assertIsInstance(row['ports'], list)
                for port in row['ports']:
                    self.assertTrue(port['name'])
                    self.assertTrue(port['url'].startswith(('https://', 'http://')))
                    self.assertIsInstance(port['platforms'], list)
                for image in row['images']:
                    self.assertTrue(image['url'].startswith(('https://', 'http://', '/')))
        for project in catalog['projects'].values():
            evidence = project['activity']
            if evidence.get('last_commit_at'):
                activity.timestamp(evidence['last_commit_at'])
                self.assertTrue(evidence['last_commit_url'].startswith('https://'))

    def test_http_rate_limit_detection(self):
        error = HTTPError('https://api.github.com/repos/o/r', 403, 'Forbidden', {'X-RateLimit-Remaining': '0'}, None)
        with patch.object(activity, 'urlopen', side_effect=error):
            with self.assertRaises(activity.FetchError) as raised:
                activity.Client().get('https://api.github.com/repos/o/r', 'github.com')
        self.assertTrue(raised.exception.rate_limited)

    def test_calendar_cutoff_and_archived(self):
        self.assertEqual(activity.activity_status('2025-10-11T00:00:00Z', False, NOW), 'Active')
        self.assertEqual(activity.activity_status('2025-10-10T23:59:59Z', False, NOW), 'Inactive')
        self.assertEqual(activity.activity_status('2026-10-10T00:00:00Z', True, NOW), 'Inactive')
        leap_day = dt.datetime(2024, 2, 29, tzinfo=dt.timezone.utc)
        self.assertEqual(activity.activity_status('2023-02-28T00:00:00Z', False, leap_day), 'Active')

    def test_provider_endpoints_and_timezone_normalization(self):
        cases = [
            ('https://github.com/owner/repo/tree/main/game',
             {'default_branch': 'dev/next', 'archived': True},
             [{'commit': {'committer': {'date': '2026-10-10T22:00:00-02:00'}}, 'html_url': 'https://github.com/owner/repo/commit/abc'}],
             'https://api.github.com/repos/owner/repo/commits?per_page=1&sha=dev%2Fnext'),
            ('https://gitlab.com/group/subgroup/repo/-/tree/main',
             {'default_branch': 'main'},
             [{'committed_date': '2026-10-11T00:00:00Z', 'web_url': 'https://gitlab.com/group/subgroup/repo/-/commit/abc'}],
             'https://gitlab.com/api/v4/projects/group%2Fsubgroup%2Frepo/repository/commits?per_page=1&ref_name=main'),
            ('https://codeberg.org/owner/repo',
             {'default_branch': 'master'},
             [{'commit': {'committer': {'date': '2026-10-11T02:00:00+02:00'}}, 'html_url': 'https://codeberg.org/owner/repo/commit/abc'}],
             'https://codeberg.org/api/v1/repos/owner/repo/commits?limit=1&sha=master'),
        ]
        for url, meta, commits, endpoint in cases:
            with self.subTest(url=url):
                client = FixtureClient([meta, commits])
                result = activity.fetch_repository(url, client)
                self.assertEqual(client.urls[-1], endpoint)
                self.assertEqual(result['last_commit_at'], '2026-10-11T00:00:00Z')

    def test_transient_failure_preserves_evidence_and_completion(self):
        old = {'status': 'Active', 'last_commit_at': '2026-09-01T00:00:00Z', 'last_commit_url': 'https://github.com/o/r/commit/abc', 'last_success_at': '2026-09-02T00:00:00Z'}
        project = {'name': 'Game', 'repository_url': 'https://github.com/o/r', 'completion_status': 'Completed', 'activity': dict(old)}
        data = {'projects': {'game': project}}
        activity.refresh(data, FixtureClient([activity.FetchError('HTTP 503')]), NOW)
        for key, value in old.items():
            self.assertEqual(project['activity'][key], value)
        self.assertEqual(project['completion_status'], 'Completed')
        self.assertEqual(project['activity']['check_error'], 'HTTP 503')

    def test_rate_limit_stops_remaining_requests(self):
        data = {'projects': {str(i): {'name': 'Game', 'repository_url': 'https://github.com/o/r' + str(i), 'activity': {}} for i in range(3)}}
        client = FixtureClient([activity.FetchError('API rate limit reached', True)])
        self.assertEqual(activity.refresh(data, client, NOW), (1, 1))
        self.assertEqual(len(client.urls), 1)
        self.assertEqual(data['projects']['0']['activity']['status'], 'Unverified')
        self.assertEqual(data['projects']['1']['activity'], {})

    def test_shared_repository_is_checked_once(self):
        data = {'projects': {str(i): {'name': 'Game', 'repository_url': 'https://github.com/o/r/tree/main/game' + str(i)} for i in range(2)}}
        client = FixtureClient([{'default_branch': 'main'}, [{'commit': {'committer': {'date': '2026-10-10T00:00:00Z'}}, 'html_url': 'https://github.com/o/r/commit/abc'}]])
        self.assertEqual(activity.refresh(data, client, NOW, limit=1), (1, 0))
        self.assertEqual(len(client.urls), 2)
        self.assertEqual(data['projects']['0']['activity'], data['projects']['1']['activity'])

    def test_refresh_preserves_console_content(self):
        data = {'projects': {'game': {'name': 'Game', 'repository_url': 'https://github.com/o/r'}},
                'consoles': {'ds': {'columns': ['Name', 'Project Type', 'Status'],
                                    'rows': [{'project': 'game', 'name_markdown': '[Game](https://github.com/o/r)',
                                              'images': [{'url': 'https://example.com/cover.png', 'alt': 'Game box art', 'width': 100}],
                                              'project_type': 'Decompilation', 'notes_markdown': 'Completed',
                                              'completion_percent': 80, 'completion_qualifier': '', 'completion_metric': 'completion',
                                              'ports': [{'name': 'Browser port', 'url': 'https://example.com/play', 'platforms': ['Browser'], 'description_markdown': ''}]}]}}}
        original = json.dumps(data['consoles'], sort_keys=True)
        client = FixtureClient([{'default_branch': 'main'}, [{'commit': {'committer': {'date': '2026-10-10T00:00:00Z'}}, 'html_url': 'https://github.com/o/r/commit/abc'}]])
        activity.refresh(data, client, NOW)
        self.assertEqual(json.dumps(data['consoles'], sort_keys=True), original)


if __name__ == '__main__':
    unittest.main()
