#!/usr/bin/env python3
"""Catalogue unique Sega Saturn SDK library versions from extracted demo executables.

Scans a folder of binaries (default: /Volumes/Data/SaturnDemoExes) for embedded
library banners such as:

  GFS_SGL Version 2.11 1996-03-21

Writes one row per unique full banner (library + version + optional date), with
one example executable path and a hit count. Also writes a per-library summary.
"""

from __future__ import annotations

import argparse
import csv
import re
from collections import defaultdict
from pathlib import Path

# Known SEGALIB / SGL-SBL companion library name prefixes seen in binaries.
LIB_NAMES = (
    "GFS_SGL",
    "GFS_SBL",
    "STM_SGL",
    "STM_SBL",
    "CPK",
    "SYS",
    "BUP",
    "FLD",
    "PCM",
    "CDC",
    "DPSYS",
    "SPR",
    "SCL",
    "SND",
    "MTH",
    "DMA",
    "INT",
    "MEM",
    "MPG",
    "CMP",
    "DBG",
    "CSH",
    "BPL",
    "PER",
    "TIM",
)

LIB_ALT = "|".join(re.escape(n) for n in LIB_NAMES)

# Official banners use "Name Version X.YY [YYYY-MM-DD]".
LIB_BANNER = re.compile(
    rf"(?P<lib>{LIB_ALT})\s+Version\s+(?P<ver>\d+\.\d+)(?:\s+(?P<date>\d{{4}}-\d{{2}}-\d{{2}}))?",
    re.I,
)

# Some builds omit the word Version: "GFS_SGL 2.11 1996-03-21"
LIB_BANNER_SHORT = re.compile(
    rf"(?P<lib>{LIB_ALT})\s+(?P<ver>\d+\.\d+)(?:\s+(?P<date>\d{{4}}-\d{{2}}-\d{{2}}))?",
    re.I,
)


def normalize_banner(lib: str, ver: str, date: str | None) -> tuple[str, str, str, str]:
    lib_u = lib.upper()
    ver_n = ver.strip()
    date_n = (date or "").strip()
    if date_n:
        full = f"{lib_u} Version {ver_n} {date_n}"
    else:
        full = f"{lib_u} Version {ver_n}"
    return lib_u, ver_n, date_n, full


def extract_banners(data: bytes) -> set[tuple[str, str, str, str]]:
    text_chunks: list[str] = []
    # ASCII strings pass (faster than decoding whole file as text).
    cur = bytearray()
    for b in data:
        if 32 <= b < 127:
            cur.append(b)
        else:
            if len(cur) >= 8:
                text_chunks.append(cur.decode("ascii"))
            cur.clear()
    if len(cur) >= 8:
        text_chunks.append(cur.decode("ascii"))

    found: set[tuple[str, str, str, str]] = set()
    for s in text_chunks:
        for m in LIB_BANNER.finditer(s):
            found.add(normalize_banner(m.group("lib"), m.group("ver"), m.group("date")))
        # Only accept short form when a date is present, to avoid noise like "SYS 2.11".
        for m in LIB_BANNER_SHORT.finditer(s):
            if not m.group("date"):
                continue
            # Skip if the match is actually the longer "Version" form already handled.
            start = m.start()
            window = s[max(0, start - 10) : m.end()]
            if re.search(r"Version\s+" + re.escape(m.group("ver")), window, re.I):
                continue
            found.add(normalize_banner(m.group("lib"), m.group("ver"), m.group("date")))
    return found


def iter_exes(root: Path) -> list[Path]:
    files: list[Path] = []
    for p in sorted(root.iterdir()):
        if not p.is_file():
            continue
        if p.name.startswith("."):
            continue
        if p.name.lower() in {"manifest.csv", "sdk-versions.csv", "sdk-versions-by-lib.csv"}:
            continue
        if p.suffix.lower() == ".csv":
            continue
        files.append(p)
    return files


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "exes",
        nargs="?",
        type=Path,
        default=Path("/Volumes/Data/SaturnDemoExes"),
        help="Folder of extracted demo executables",
    )
    parser.add_argument(
        "-o",
        "--output",
        type=Path,
        default=None,
        help="CSV of unique banners (default: <exes>/sdk-versions.csv)",
    )
    parser.add_argument(
        "--by-lib",
        type=Path,
        default=None,
        help="CSV grouped by library (default: <exes>/sdk-versions-by-lib.csv)",
    )
    args = parser.parse_args()

    root: Path = args.exes
    if not root.is_dir():
        raise SystemExit(f"Not a directory: {root}")

    out_csv = args.output or (root / "sdk-versions.csv")
    by_lib_csv = args.by_lib or (root / "sdk-versions-by-lib.csv")

    # banner_full -> {count, example, lib, ver, date}
    catalog: dict[str, dict[str, str | int]] = {}
    files_with_hits = 0
    files = iter_exes(root)
    print(f"Scanning {len(files)} files in {root}", flush=True)

    for i, path in enumerate(files, 1):
        if i % 100 == 0 or i == len(files):
            print(f"  [{i}/{len(files)}]", flush=True)
        try:
            data = path.read_bytes()
        except OSError as exc:
            print(f"  skip {path.name}: {exc}", flush=True)
            continue
        banners = extract_banners(data)
        if not banners:
            continue
        files_with_hits += 1
        for lib, ver, date, full in banners:
            row = catalog.get(full)
            if row is None:
                catalog[full] = {
                    "library": lib,
                    "version": ver,
                    "date": date,
                    "banner": full,
                    "example_exe": path.name,
                    "example_path": str(path),
                    "hit_count": 1,
                }
            else:
                row["hit_count"] = int(row["hit_count"]) + 1

    rows = sorted(
        catalog.values(),
        key=lambda r: (str(r["library"]), str(r["version"]), str(r["date"]), str(r["banner"])),
    )

    fields = ["library", "version", "date", "banner", "hit_count", "example_exe", "example_path"]
    with out_csv.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)

    # Per-library rollup: unique version numbers, preferring dated banners as examples.
    by_lib: dict[str, list[dict[str, str | int]]] = defaultdict(list)
    for r in rows:
        by_lib[str(r["library"])].append(r)

    summary_rows: list[dict[str, str | int]] = []
    for lib in sorted(by_lib):
        # Collapse same version number: prefer entry that has a date, then highest hits.
        best_for_ver: dict[str, dict[str, str | int]] = {}
        for r in by_lib[lib]:
            ver = str(r["version"])
            prev = best_for_ver.get(ver)
            if prev is None:
                best_for_ver[ver] = r
                continue
            prev_dated = bool(prev["date"])
            cur_dated = bool(r["date"])
            if cur_dated and not prev_dated:
                best_for_ver[ver] = r
            elif cur_dated == prev_dated and int(r["hit_count"]) > int(prev["hit_count"]):
                best_for_ver[ver] = r
        for ver in sorted(best_for_ver, key=lambda v: [int(x) for x in v.split(".")]):
            r = best_for_ver[ver]
            summary_rows.append(
                {
                    "library": lib,
                    "version": ver,
                    "date": r["date"],
                    "banner": r["banner"],
                    "hit_count": r["hit_count"],
                    "example_exe": r["example_exe"],
                    "example_path": r["example_path"],
                }
            )

    with by_lib_csv.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(summary_rows)

    print(f"Files with SDK banners: {files_with_hits}/{len(files)}", flush=True)
    print(f"Unique full banners:    {len(rows)} -> {out_csv}", flush=True)
    print(f"Unique lib+version:     {len(summary_rows)} -> {by_lib_csv}", flush=True)
    print(flush=True)
    print("Versions by library:", flush=True)
    current = None
    for r in summary_rows:
        if r["library"] != current:
            current = r["library"]
            print(f"  {current}", flush=True)
        date = f"  {r['date']}" if r["date"] else ""
        print(
            f"    {r['version']}{date}  (n={r['hit_count']})  "
            f"e.g. {r['example_exe']}",
            flush=True,
        )


if __name__ == "__main__":
    main()
