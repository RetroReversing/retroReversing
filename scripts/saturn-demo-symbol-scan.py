#!/usr/bin/env python3
"""Rank Sega Saturn demo discs by leftover SDK / debug-ish strings.

Scans Track 1 (or loose data bins) under a demos root and writes a ranked CSV.
Uses a strings-first pass for speed, then matches SDK/debug patterns.
"""

from __future__ import annotations

import argparse
import csv
import io
import re
import shutil
import subprocess
import tempfile
import zipfile
from collections import Counter
from pathlib import Path

SECTOR = 2352
USER = 2048

LIB_BANNER = re.compile(
    r"(?:GFS_S(?:GL|BL)|STM_S(?:GL|BL)|CPK|SYS|BUP|FLD|PCM|CDC|DPSYS)\s+Version\s+\d+\.\d+(?:\s+\d{4}-\d{2}-\d{2})?",
    re.I,
)
VERSION_WORD = re.compile(r"\bVersion\s+\d+\.\d+(?:\s+\d{4}-\d{2}-\d{2})?", re.I)
ASSERT = re.compile(r"\bassert(?:ion)?\b|\bASSERT(?:ION)?\b")
SOURCE_PATH = re.compile(
    r"(?:[A-Za-z]:[\\/]|/(?:home|usr|src|proj|projects)/)[^\x00-\x1f\"']{3,160}\.(?:c|h|cpp|src|asm)",
    re.I,
)
C_REF = re.compile(r"(?:^|[\"'\\/])(?:[A-Za-z0-9_.-]+[\\/])*[A-Za-z0-9_.-]+\.(?:c|h|cpp|src)\b")
DEBUG_WORD = re.compile(r"\b(?:DEBUG|DbgPrint|TRACE|WATCHDOG)\b")
SYMBOL_FILE = re.compile(r"\.(?:COF|COFF|ELF|ABS|SYM|DWARF)\b", re.I)
PRINTF = re.compile(r"\bprintf\s*\(")

INTERESTING_EXT = {".cof", ".coff", ".elf", ".abs", ".sym", ".dbg"}


def discover_dumps(root: Path) -> list[Path]:
    dumps: list[Path] = []
    for p in sorted(root.rglob("*")):
        if p.name.startswith("."):
            continue
        if p.is_file() and p.suffix.lower() in {".zip", ".7z"}:
            dumps.append(p)
        elif p.is_dir() and (any(p.glob("*.cue")) or any(p.glob("*.CUE"))):
            dumps.append(p)

    dir_dumps = {d for d in dumps if d.is_dir()}
    out = []
    for d in dumps:
        if d.is_file() and any(parent in dir_dumps for parent in d.parents):
            continue
        out.append(d)
    return out


def choose_track_member(names: list[str]) -> str | None:
    bins = [n for n in names if n.lower().endswith(".bin")]
    if not bins:
        return None
    for n in bins:
        ln = n.lower()
        if "track 01" in ln or "track 1)" in ln or "(track 1)" in ln or "track01" in ln:
            return n
    non_track = [n for n in bins if "track" not in Path(n).name.lower()]
    if len(non_track) == 1:
        return non_track[0]
    if len(bins) == 1:
        return bins[0]
    return sorted(bins)[0]


def find_track1_path(files: list[Path]) -> Path | None:
    bins = [p for p in files if p.suffix.lower() == ".bin" and not p.name.startswith(".")]
    if not bins:
        return None
    by_name = {p.name: p for p in bins}
    member = choose_track_member([p.name for p in bins])
    if member and member in by_name:
        return by_name[member]
    for p in bins:
        n = p.name.lower()
        if "track 01" in n or "track 1)" in n or "(track 1)" in n:
            return p
    non_track = [p for p in bins if "track" not in p.name.lower()]
    return non_track[0] if len(non_track) == 1 else bins[0]


def extract_ascii_strings(data: bytes, min_len: int = 6) -> list[str]:
    out: list[str] = []
    cur = bytearray()
    for b in data:
        if 32 <= b < 127:
            cur.append(b)
        else:
            if len(cur) >= min_len:
                out.append(cur.decode("ascii"))
            cur.clear()
    if len(cur) >= min_len:
        out.append(cur.decode("ascii"))
    return out


def read_track_user_data(fp, max_bytes: int) -> bytes:
    """Read up to max_bytes of MODE1 user data, else raw bytes."""
    # Peek size via seek
    pos = fp.tell()
    fp.seek(0, io.SEEK_END)
    size = fp.tell()
    fp.seek(pos)

    buf = bytearray()
    if size % SECTOR == 0 and size >= SECTOR:
        while len(buf) < max_bytes:
            sec = fp.read(SECTOR)
            if len(sec) < SECTOR:
                break
            buf.extend(sec[16 : 16 + USER])
        return bytes(buf[:max_bytes])
    return fp.read(max_bytes)


def scan_strings(strings: list[str]) -> tuple[Counter[str], list[str], Counter[str]]:
    hits: Counter[str] = Counter()
    samples: dict[str, list[str]] = {
        "lib_banner": [],
        "source_path": [],
        "assert": [],
        "symbol_file": [],
        "c_ref": [],
        "version_word": [],
        "debug_word": [],
    }
    banners: Counter[str] = Counter()

    def add(kind: str, text: str) -> None:
        hits[kind] += 1
        if len(samples[kind]) < 8 and text not in samples[kind]:
            samples[kind].append(text[:160])

    for s in strings:
        for m in LIB_BANNER.finditer(s):
            text = re.sub(r"\s+", " ", m.group(0)).strip()
            banners[text] += 1
            add("lib_banner", text)
        if VERSION_WORD.search(s):
            add("version_word", s[:120])
        if ASSERT.search(s):
            add("assert", s[:120])
        if SOURCE_PATH.search(s):
            add("source_path", s[:160])
        elif C_REF.search(s):
            add("c_ref", s[:120])
        if DEBUG_WORD.search(s) or PRINTF.search(s):
            add("debug_word", s[:120])
        if SYMBOL_FILE.search(s):
            add("symbol_file", s[:120])

    sample_flat = [f"{k}:{v}" for k, vals in samples.items() for v in vals]
    return hits, sample_flat, banners


def archive_artifact_names(dump: Path) -> list[str]:
    found: list[str] = []
    if dump.is_file() and dump.suffix.lower() == ".zip":
        try:
            with zipfile.ZipFile(dump) as zf:
                for n in zf.namelist():
                    if Path(n).suffix.lower() in INTERESTING_EXT:
                        found.append(Path(n).name)
        except zipfile.BadZipFile:
            pass
    return found


def score_hits(hits: Counter[str]) -> int:
    weights = {
        "lib_banner": 5,
        "source_path": 8,
        "assert": 4,
        "symbol_file": 10,
        "c_ref": 1,
        "version_word": 2,
        "debug_word": 2,
    }
    return sum(hits[k] * weights.get(k, 1) for k in hits)


def scan_dump(dump: Path, tmp: Path, max_bytes: int) -> dict:
    rel_status = "ok"
    track_name = ""
    artifacts = archive_artifact_names(dump)
    data = b""

    try:
        if dump.is_dir():
            track = find_track1_path(list(dump.rglob("*")))
            if not track:
                rel_status = "no_track1"
            else:
                track_name = track.name
                with track.open("rb") as fp:
                    data = read_track_user_data(fp, max_bytes)
        elif dump.suffix.lower() == ".zip":
            with zipfile.ZipFile(dump) as zf:
                member = choose_track_member([n for n in zf.namelist() if not n.endswith("/")])
                if not member:
                    rel_status = "no_track1"
                else:
                    track_name = Path(member).name
                    with zf.open(member) as fp:
                        data = read_track_user_data(fp, max_bytes)
        elif dump.suffix.lower() == ".7z":
            out = tmp / "x"
            out.mkdir(parents=True, exist_ok=True)
            subprocess.run(
                ["bsdtar", "-xf", str(dump), "-C", str(out)],
                check=False,
                stdout=subprocess.DEVNULL,
                stderr=subprocess.DEVNULL,
            )
            track = find_track1_path(list(out.rglob("*")))
            if not track:
                rel_status = "no_track1"
            else:
                track_name = track.name
                with track.open("rb") as fp:
                    data = read_track_user_data(fp, max_bytes)
        else:
            rel_status = "unsupported"
    except Exception as exc:  # noqa: BLE001
        return {
            "rank_score": -1,
            "status": f"error:{type(exc).__name__}:{exc}",
            "track": track_name,
            "lib_banner": 0,
            "source_path": 0,
            "assert": 0,
            "symbol_file": len(artifacts),
            "c_ref": 0,
            "version_word": 0,
            "debug_word": 0,
            "unique_banners": "",
            "samples": "",
            "artifact_names": ";".join(artifacts),
        }

    if not data:
        return {
            "rank_score": 50 if artifacts else 0,
            "status": rel_status if rel_status != "ok" else "empty",
            "track": track_name,
            "lib_banner": 0,
            "source_path": 0,
            "assert": 0,
            "symbol_file": len(artifacts),
            "c_ref": 0,
            "version_word": 0,
            "debug_word": 0,
            "unique_banners": "",
            "samples": "",
            "artifact_names": ";".join(artifacts),
        }

    strings = extract_ascii_strings(data)
    hits, samples, banners = scan_strings(strings)
    if artifacts:
        hits["symbol_file"] += len(artifacts)

    return {
        "rank_score": score_hits(hits),
        "status": rel_status,
        "track": track_name,
        "lib_banner": hits["lib_banner"],
        "source_path": hits["source_path"],
        "assert": hits["assert"],
        "symbol_file": hits["symbol_file"],
        "c_ref": hits["c_ref"],
        "version_word": hits["version_word"],
        "debug_word": hits["debug_word"],
        "unique_banners": " | ".join(b for b, _ in banners.most_common(12)),
        "samples": " || ".join(samples[:12]),
        "artifact_names": ";".join(artifacts),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "root",
        nargs="?",
        default="/Volumes/Demos/Demo Discs/Saturn ",
        type=Path,
    )
    parser.add_argument("-o", "--output", type=Path, default=Path("/tmp/saturn-demo-symbol-hits.csv"))
    parser.add_argument("--max-track-mb", type=int, default=32)
    args = parser.parse_args()

    root: Path = args.root
    if not root.exists():
        raise SystemExit(f"Root not found: {root}")

    dumps = discover_dumps(root)
    rows = []
    tmp_root = Path(tempfile.mkdtemp(prefix="saturn-sym-"))
    max_bytes = args.max_track_mb * 1024 * 1024
    try:
        for i, dump in enumerate(dumps, 1):
            try:
                rel = str(dump.relative_to(root))
            except ValueError:
                rel = str(dump)
            print(f"[{i}/{len(dumps)}] {rel}", flush=True)
            work = tmp_root / f"d{i}"
            work.mkdir(parents=True, exist_ok=True)
            row = scan_dump(dump, work, max_bytes)
            row["dump"] = rel
            rows.append(row)
            shutil.rmtree(work, ignore_errors=True)
    finally:
        shutil.rmtree(tmp_root, ignore_errors=True)

    rows.sort(key=lambda r: (-int(r["rank_score"]), str(r["dump"]).lower()))
    fields = [
        "rank_score",
        "dump",
        "status",
        "track",
        "lib_banner",
        "source_path",
        "assert",
        "symbol_file",
        "c_ref",
        "version_word",
        "debug_word",
        "unique_banners",
        "samples",
        "artifact_names",
    ]
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with args.output.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(rows)

    print(f"Wrote {len(rows)} rows to {args.output}", flush=True)
    print("Top 25:", flush=True)
    for r in rows[:25]:
        print(
            f"  {r['rank_score']:5d}  banners={r['lib_banner']:3d} src={r['source_path']:2d} "
            f"assert={r['assert']:2d}  {r['dump']}",
            flush=True,
        )


if __name__ == "__main__":
    main()
