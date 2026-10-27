#!/usr/bin/env python3
"""Clone or fast-forward every GitHub repository in the decompilation catalog."""

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse


CATALOG_REPO = "https://github.com/RetroReversing/retroReversing.git"
DESTINATION = Path("/Volumes/Data/Decomps")


def github_repo(value):
    if not isinstance(value, str):
        return None
    parsed = urlparse(value)
    if parsed.scheme not in ("http", "https") or parsed.hostname != "github.com":
        return None
    parts = parsed.path.strip("/").split("/")
    if len(parts) < 2 or not parts[0] or not parts[1]:
        return None
    owner, name = parts[:2]
    name = name.removesuffix(".git")
    if not name or owner in (".", "..") or name in (".", ".."):
        return None
    return owner, name


def folder(value):
    return re.sub(r"[^a-z0-9._-]+", "-", value.lower()).strip(".-") or "unknown"


def is_port_or_recomp(project_type="", link_name=""):
    """Return whether a catalog entry describes a port or recompilation."""
    text = f"{project_type} {link_name}".casefold()
    return any(term in text for term in ("port", "recomp", "reimplementation", "remake"))


def repositories(catalog, overlay=None):
    found = {}
    files = sorted(catalog.glob("*.json"))
    if not files:
        raise RuntimeError(f"No catalog files found in {catalog}")
    for file in files:
        data = json.loads(file.read_text(encoding="utf-8"))
        if overlay:
            local_file = overlay / file.name
            if local_file.is_file():
                local_data = json.loads(local_file.read_text(encoding="utf-8"))
                for project_id, local_project in local_data.get("projects", {}).items():
                    project = data.get("projects", {}).get(project_id)
                    if project and local_project.get("repository_url") != project.get("repository_url"):
                        for key in ("name", "platforms", "repository_url", "project_type"):
                            if key in local_project:
                                project[key] = local_project[key]
        locations = {}
        for console_id, console in data.get("consoles", {}).items():
            for row in console.get("rows", []):
                project_id = row.get("project")
                if project_id:
                    project = data.get("projects", {}).get(project_id, {})
                    project_type = project.get("project_type", "")
                    bucket = "Ports and Recomps" if is_port_or_recomp(project_type) else ""
                    locations.setdefault(project_id, set()).add((bucket, console_id, project_id))
                for port in row.get("ports", []):
                    repo = github_repo(port.get("url"))
                    if repo:
                        key = tuple(part.lower() for part in repo)
                        found.setdefault(key, {"repo": repo, "locations": set()})["locations"].add(
                            (
                                "Ports and Recomps",
                                console_id,
                                project_id or folder(row.get("name_markdown", "unknown")),
                            )
                        )
        for project_id, project in data.get("projects", {}).items():
            repo = github_repo(project.get("repository_url"))
            if repo:
                key = tuple(part.lower() for part in repo)
                bucket = "Ports and Recomps" if is_port_or_recomp(project.get("project_type", "")) else ""
                found.setdefault(key, {"repo": repo, "locations": set()})["locations"].update(
                    locations.get(project_id, {(bucket, file.stem, project_id)})
                )
    return sorted(found.values(), key=lambda item: tuple(part.lower() for part in item["repo"]))


def run(*args):
    subprocess.run(args, check=True)


def download(item, destination, clone_only):
    owner, name = item["repo"]
    all_paths = sorted(
        destination / Path(*(folder(part) for part in location if part)) / owner / name
        for location in item["locations"]
    )
    port_paths = [path for path in all_paths if "ports-and-recomps" in path.parts]
    # If a repository is also linked as a port/recomp, keep its one real clone
    # in the dedicated folder instead of making the console/game path primary.
    paths = port_paths or all_paths
    target = paths[0]
    old_targets = [
        destination / folder(console) / folder(game) / owner / name
        for location in item["locations"]
        for console, game in [location[-2:]]
    ]
    old_targets.append(destination / owner / name)
    url = f"https://github.com/{owner}/{name}.git"
    try:
        # Earlier versions could leave a Ports/Recomps symlink pointing back to
        # a clone in the main tree. Relocate that clone when it is the target.
        if target.is_symlink():
            linked = Path(os.path.abspath(target.parent / target.readlink()))
            if linked in old_targets and (linked / ".git").exists():
                remote = subprocess.run(
                    ("git", "-C", str(linked), "remote", "get-url", "origin"),
                    stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True,
                )
                if remote.returncode and target.exists():
                    pass
                elif remote.returncode == 0 and github_repo(remote.stdout.strip()) == (owner, name):
                    target.unlink()
                    target.parent.mkdir(parents=True, exist_ok=True)
                    shutil.move(str(linked), str(target))
        if not target.exists():
            old_target = next(
                (candidate for candidate in old_targets
                 if candidate != target and candidate.is_dir() and (candidate / ".git").exists()),
                None,
            )
            if old_target:
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(old_target), str(target))
        if target.exists():
            if not (target / ".git").exists():
                return "skipped", f"{owner}/{name}: existing path is not a Git clone: {target}"
            if clone_only:
                result = "skipped"
            else:
                dirty = subprocess.run(
                    ("git", "-C", str(target), "status", "--porcelain", "--untracked-files=no"),
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors="replace"
                )
                if dirty.returncode:
                    return "failed", f"{owner}/{name}: {dirty.stdout.strip()}"
                if dirty.stdout.strip():
                    return "skipped", f"{owner}/{name}: has local tracked changes"

                fetched = subprocess.run(
                    ("git", "-C", str(target), "fetch", "--quiet", "--prune", "origin"),
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors="replace"
                )
                if fetched.returncode:
                    return "failed", f"{owner}/{name}: {fetched.stdout.strip()}"

                head = subprocess.run(
                    ("git", "-C", str(target), "rev-parse", "--verify", "HEAD"),
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors="replace"
                )
                upstream = subprocess.run(
                    ("git", "-C", str(target), "rev-parse", "--verify", "@{upstream}"),
                    stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors="replace"
                )
                if head.returncode or upstream.returncode:
                    detail = (head.stdout if head.returncode else upstream.stdout).strip()
                    return "failed", f"{owner}/{name}: cannot resolve HEAD/upstream: {detail}"
                if head.stdout.strip() == upstream.stdout.strip():
                    result = "unchanged"
                else:
                    counts = subprocess.run(
                        ("git", "-C", str(target), "rev-list", "--left-right", "--count",
                         f"{head.stdout.strip()}...{upstream.stdout.strip()}"),
                        stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors="replace"
                    )
                    if counts.returncode:
                        return "failed", f"{owner}/{name}: {counts.stdout.strip()}"
                    ahead, behind = (int(value) for value in counts.stdout.split())
                    if ahead:
                        return "failed", f"{owner}/{name}: local branch is {ahead} commit(s) ahead of upstream"
                    if behind:
                        merged = subprocess.run(
                            ("git", "-C", str(target), "merge", "--ff-only", upstream.stdout.strip()),
                            stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, errors="replace"
                        )
                        if merged.returncode:
                            return "failed", f"{owner}/{name}: {merged.stdout.strip()}"
                        result = "updated"
                    else:
                        result = "unchanged"
        else:
            target.parent.mkdir(parents=True, exist_ok=True)
            command = ("git", "clone", url, str(target))
            result = "cloned"
        if result == "cloned":
            completed = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
                                       text=True, errors="replace")
            if completed.returncode:
                return "failed", f"{owner}/{name}: {completed.stdout.strip()}"
        for alias in paths[1:]:
            if alias.is_symlink():
                linked = Path(os.path.abspath(alias.parent / alias.readlink()))
                if linked != target:
                    alias.unlink()
            if not alias.exists() and not alias.is_symlink():
                alias.parent.mkdir(parents=True, exist_ok=True)
                alias.symlink_to(os.path.relpath(target, alias.parent), target_is_directory=True)
        return result, f"{owner}/{name} -> {target}"
    except OSError as error:
        return "failed", f"{owner}/{name}: {error}"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--destination", type=Path, default=DESTINATION)
    parser.add_argument("--catalog", type=Path, help="Use local catalog directory instead of downloading the latest one")
    parser.add_argument("--no-local-overrides", action="store_true", help="Ignore local repository URL replacements")
    parser.add_argument("--clone-only", action="store_true", help="Leave existing clones untouched")
    parser.add_argument("--workers", type=int, default=6, help="Concurrent Git operations (default: 6)")
    args = parser.parse_args()

    destination = args.destination.expanduser().resolve()
    if destination == DESTINATION and not Path("/Volumes/Data").is_dir():
        parser.error("/Volumes/Data is not mounted")
    destination.mkdir(parents=True, exist_ok=True)

    if args.catalog:
        repos = repositories(args.catalog)
    else:
        with tempfile.TemporaryDirectory(prefix="decomp-catalog-") as temp:
            checkout = Path(temp) / "catalog"
            run("git", "clone", "--depth", "1", "--filter=blob:none", "--sparse", CATALOG_REPO, str(checkout))
            run("git", "-C", str(checkout), "sparse-checkout", "set", "_data/decompilations")
            local_catalog = Path(__file__).resolve().parents[1] / "_data" / "decompilations"
            overlay = local_catalog if local_catalog.is_dir() and not args.no_local_overrides else None
            repos = repositories(checkout / "_data" / "decompilations", overlay=overlay)
    print(f"Found {len(repos)} distinct GitHub repositories; destination: {destination}", flush=True)
    if args.workers < 1:
        parser.error("--workers must be at least 1")
    counts = {"cloned": 0, "updated": 0, "unchanged": 0, "skipped": 0, "failed": 0}
    with ThreadPoolExecutor(max_workers=args.workers) as pool:
        futures = [pool.submit(download, item, destination, args.clone_only) for item in repos]
        for index, future in enumerate(as_completed(futures), 1):
            status, detail = future.result()
            counts[status] += 1
            print(f"[{index}/{len(repos)}] {status.upper()}: {detail}", flush=True)

    print("Done: " + ", ".join(f"{count} {status}" for status, count in counts.items()), flush=True)
    return 1 if counts["failed"] else 0


if __name__ == "__main__":
    sys.exit(main())
