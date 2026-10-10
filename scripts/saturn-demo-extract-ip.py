#!/usr/bin/env python3
"""Extract Saturn IP.BIN headers (and optionally game executables) from demo dumps.

Important: IP.BIN / *_IP.BIN are boot/header metadata (title, product, version, date).
SDK banners, source paths, and leftover debug strings usually live in game executables
(.PRG, 0.BIN, etc.), not in IP headers. Use --mode exe or --mode both for that.

Copies files into an output folder with names:

  {demo}__{game}__{original_name}

so you can batch-process headers/binaries without keeping full disc images around.

Default exe output folder: /Volumes/Data/SaturnDemoExes

Supports loose cue/bin folders, .zip, and .7z (via bsdtar).
"""

from __future__ import annotations

import argparse
import csv
import re
import shutil
import struct
import subprocess
import tempfile
import zipfile
from pathlib import Path

HW_MAGIC = b"SEGA SEGASATURN "
SECTOR = 2352
USER = 2048
USER_OFF = 16

# Hard matches: almost always boot/loadable code.
EXE_HARD_RE = re.compile(
    r"(?:"
    r"^0(?:\.BIN)?$|"
    r"^1(?:\.BIN)?$|"
    r"^1ST(?:_READ)?\.(?:BIN|PRG)$|"
    r"^MAIN\.(?:BIN|PRG)$|"
    r"^PROGRAM\.BIN$|"
    r"^LOWCODE\.BIN$|"
    r"^0?KRNL.*\.BIN$|"
    r"\.PRG$|"
    r"\.AAA$|"  # WipEout-style odd extension used as 0.BIN stand-in
    r"^SL[A-Z]{2}[_.].+\.BIN$"
    r")",
    re.I,
)

# Soft name hints used with size checks (avoid bare "1ST" — matches R1START etc.).
EXE_SOFT_RE = re.compile(
    r"(?:^|_)(?:GAMEPRG|MENUPRG|CPKPRG|HSPRG|RSLTPRG|PROGRAM|LOWCODE)(?:_|\.|$)|"
    r"(?:PRG|PROG|CODE|KRNL|KERNEL|BOOT)(?:\.[A-Za-z0-9]+)?$",
    re.I,
)

# Obvious non-code payloads to skip even if they end in .BIN.
EXE_SKIP_RE = re.compile(
    r"(?:"
    r"(^|_)IP\.BIN$|"
    r"CNF\.BIN$|"
    r"\.(?:CPK|AIF|AIFF|WAV|PCM|SAD|SAT|SND|SPR|DAT|TXT|CNS|DA|CD)$|"
    r"^(?:CG_|MDL_|SCR|SND|COLOR|SPRTBL|SJIS|FILM|VOICE)"
    r")",
    re.I,
)

SKIP_DIR_NAMES = {
    "SYSTEM",
    "ABS",
    "BIB",
    "CPY",
    "DATA",
    "SOUND",
    "SOUNDS",
    "TITLE",
    "FMV",
    "OTHER",
    "WADS",
    "INTRO",
    "MAINMENU",
    "DEMOMENU",
    "VIDPROC",
    "VOICE",
    "KAO3X4",
    "KAO6X7",
    "PENA_CG",
    "RSLT_CG",
    "BDROPS",
    "BLOCKS",
    "LEVELS",
    "LANG",
    "SCL",
}


def sanitize(name: str, max_len: int = 80) -> str:
    name = re.sub(r"[^\w.\-+]+", "_", name.strip(), flags=re.ASCII)
    name = re.sub(r"_+", "_", name).strip("._")
    return (name or "unknown")[:max_len]


def format_date(raw: str) -> str:
    raw = raw.strip()
    if len(raw) == 8 and raw.isdigit():
        yyyy, mm, dd = raw[0:4], raw[4:6], raw[6:8]
        if yyyy.startswith(("19", "20")) and 1 <= int(mm) <= 12 and 1 <= int(dd) <= 31:
            return f"{yyyy}-{mm}-{dd}"
        mm, dd, yyyy = raw[0:2], raw[2:4], raw[4:8]
        if yyyy.startswith(("19", "20")) and 1 <= int(mm) <= 12 and 1 <= int(dd) <= 31:
            return f"{yyyy}-{mm}-{dd}"
    return raw


def parse_ip(ip: bytes) -> dict[str, str] | None:
    if ip[:16] != HW_MAGIC:
        idx = ip.find(HW_MAGIC)
        if idx < 0:
            return None
        ip = ip[idx:]
    if len(ip) < 0xD0:
        return None

    def field(start: int, size: int) -> str:
        return ip[start : start + size].decode("ascii", "replace").replace("\0", "").strip()

    date_raw = field(0x30, 8)
    title = re.sub(r"[^\x20-\x7E]+", " ", field(0x60, 0x70))
    title = re.sub(r"\s+", " ", title).strip()
    if not title:
        return None
    return {
        "maker": field(0x10, 16),
        "product": field(0x20, 10),
        "version": field(0x2A, 6),
        "date_raw": date_raw,
        "date": format_date(date_raw),
        "device": field(0x38, 8),
        "title": title,
    }


def raw_to_user(raw: bytes) -> bytes:
    if len(raw) >= SECTOR and len(raw) % SECTOR == 0:
        user = bytearray()
        for i in range(len(raw) // SECTOR):
            off = i * SECTOR
            user.extend(raw[off + USER_OFF : off + USER_OFF + USER])
        return bytes(user)
    return raw


def read_lbas(track_bin: Path, start_lba: int, count: int) -> bytes:
    with track_bin.open("rb") as f:
        f.seek(start_lba * SECTOR)
        raw = f.read(count * SECTOR)
    if len(raw) < SECTOR:
        raise OSError(f"Could not read LBA {start_lba} from {track_bin}")
    # Some dumps are already 2048-byte user sectors.
    if len(raw) == count * USER or (len(raw) % USER == 0 and len(raw) % SECTOR != 0):
        return raw[: count * USER]
    if len(raw) % SECTOR == 0:
        return raw_to_user(raw)
    # Mixed / truncated: try MODE1 strip if first sector looks cooked.
    with track_bin.open("rb") as f:
        f.seek(0)
        peek = f.read(SECTOR)
    if len(peek) == SECTOR and peek[16:32] == HW_MAGIC:
        return raw_to_user(raw)
    return raw[: count * USER]


def both_endian_u32(buf: bytes, offset: int) -> int:
    return struct.unpack_from("<I", buf, offset)[0]


def parse_iso_dir_data(data: bytes) -> list[tuple[str, bool, int, int]]:
    pos = 0
    entries: list[tuple[str, bool, int, int]] = []
    while pos < len(data):
        length = data[pos]
        if length == 0:
            nxt = ((pos // USER) + 1) * USER
            if nxt <= pos or nxt >= len(data):
                break
            pos = nxt
            continue
        if pos + length > len(data):
            break
        flags = data[pos + 25]
        name_len = data[pos + 32]
        name = data[pos + 33 : pos + 33 + name_len]
        extent_lba = both_endian_u32(data, pos + 2)
        file_size = both_endian_u32(data, pos + 10)
        if name not in (b"\x00", b"\x01"):
            decoded = name.decode("ascii", "replace").split(";")[0]
            entries.append((decoded, bool(flags & 0x02), extent_lba, file_size))
        pos += length
    return entries


def list_iso_dir(user: bytes, extent: int, size: int) -> list[tuple[str, bool, int, int]]:
    return parse_iso_dir_data(user[extent * USER : extent * USER + size])


def list_iso_dir_at(track_bin: Path, extent: int, size: int) -> list[tuple[str, bool, int, int]]:
    sectors = max(1, (size + USER - 1) // USER)
    return parse_iso_dir_data(read_lbas(track_bin, extent, sectors)[:size])


def root_entries(track_bin: Path) -> list[tuple[str, bool, int, int]]:
    head = read_lbas(track_bin, 0, 1024)
    pvd = head[16 * USER : 17 * USER]
    if pvd[1:6] != b"CD001":
        raise OSError(f"No ISO9660 PVD found in {track_bin}")
    root = pvd[156 : 156 + 34]
    root_extent = both_endian_u32(root, 2)
    root_size = both_endian_u32(root, 10)
    need = root_extent + (root_size + USER - 1) // USER + 4
    if need > 1024:
        head = read_lbas(track_bin, 0, need)
    return list_iso_dir(head, root_extent, root_size)


def looks_like_sh2_binary(header: bytes) -> bool:
    """Saturn SH-2 binaries often begin with big-endian SP/PC in Work RAM."""
    if len(header) < 8:
        return False
    sp, pc = struct.unpack_from(">II", header, 0)
    def in_work(addr: int) -> bool:
        return 0x06000000 <= addr <= 0x061FFFFF
    def in_romish(addr: int) -> bool:
        return 0x02000000 <= addr <= 0x060FFFFF
    return in_work(sp) or in_work(pc) or (in_romish(sp) and in_romish(pc))


def peek_file_header(track: Path, extent: int, size: int, nbytes: int = 16) -> bytes:
    take = min(size, nbytes)
    if take <= 0:
        return b""
    sectors = max(1, (take + USER - 1) // USER)
    return read_lbas(track, extent, sectors)[:take]


def is_likely_exe(
    name: str,
    size: int,
    header: bytes,
    max_bytes: int,
    *,
    at_root: bool,
    vacuum_root_bins: bool,
) -> bool:
    if size <= 0 or size > max_bytes:
        return False
    if EXE_SKIP_RE.search(name):
        return False
    if EXE_HARD_RE.search(name):
        return size >= 256
    # Soft name hints (GAMEPRG, MENUPRG, APROG, …) anywhere on the disc.
    if size >= 8 * 1024 and EXE_SOFT_RE.search(name):
        return True
    if not at_root:
        return False
    ext = Path(name).suffix.upper()
    if ext == "" and re.fullmatch(r"0+", name) and size >= 256:
        return True
    # Magazine / sampler roots often use FOO.BIN loaders without a vector table.
    if vacuum_root_bins and ext in {".BIN", ".AAA", ".ELF", ".COF", ".ABS", ".RX"} and size >= 32 * 1024:
        return True
    # Extensionless oddballs with SH-2 vectors (when not already handled).
    if ext == "" and looks_like_sh2_binary(header):
        return True
    return False


def walk_iso_files(
    track: Path,
    entries: list[tuple[str, bool, int, int]],
    *,
    max_depth: int = 3,
) -> list[tuple[str, str, int, int]]:
    """Return (dir_label, name, extent, size) for files under root."""
    out: list[tuple[str, str, int, int]] = []

    def walk(dir_entries: list[tuple[str, bool, int, int]], label: str, depth: int) -> None:
        for name, is_dir, extent, size in dir_entries:
            if is_dir:
                if depth >= max_depth:
                    continue
                if name.upper() in SKIP_DIR_NAMES:
                    continue
                try:
                    sub = list_iso_dir_at(track, extent, size)
                except OSError:
                    continue
                child_label = name if label in {"", "ROOT"} else label
                # Prefer first path component as game/slot label (G1, FIGHTING, …).
                if label in {"", "ROOT"}:
                    child_label = name
                walk(sub, child_label, depth + 1)
                continue
            out.append((label or "ROOT", name, extent, size))

    walk(entries, "ROOT", 0)
    return out


def resolve_game_label(
    dir_label: str,
    file_name: str,
    disc_title: str,
    game_titles: dict[str, str],
) -> str:
    stem = Path(file_name).stem.upper()
    for ip_name, title in game_titles.items():
        if stem and stem in ip_name:
            return title
    upper = dir_label.upper()
    if upper not in {"", "ROOT"}:
        # G1_IP.BIN / folder G1
        for ip_name, title in game_titles.items():
            if upper and upper in ip_name:
                return title
        return dir_label
    return disc_title


def is_game_ip_name(name: str) -> bool:
    return bool(re.search(r"(^|_)IP\.BIN$", name.upper()))


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


def discover_dumps(root: Path) -> list[Path]:
    if root.is_file() and root.suffix.lower() in {".zip", ".7z"}:
        return [root]

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


def materialize_track(dump: Path, work: Path) -> Path | None:
    if dump.is_dir():
        return find_track1_path(list(dump.rglob("*")))

    if dump.suffix.lower() == ".zip":
        with zipfile.ZipFile(dump) as zf:
            member = choose_track_member([n for n in zf.namelist() if not n.endswith("/")])
            if not member:
                return None
            out = work / Path(member).name
            with zf.open(member) as src, out.open("wb") as dst:
                shutil.copyfileobj(src, dst, length=1024 * 1024)
            return out

    if dump.suffix.lower() == ".7z":
        out_dir = work / "x"
        out_dir.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            ["bsdtar", "-xf", str(dump), "-C", str(out_dir)],
            check=False,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        return find_track1_path(list(out_dir.rglob("*")))

    return None


def extract_file(track: Path, extent: int, size: int, dest: Path, max_bytes: int | None = None) -> int:
    take = size if max_bytes is None else min(size, max_bytes)
    sectors = max(1, (take + USER - 1) // USER)
    payload = read_lbas(track, extent, sectors)[:take]
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_bytes(payload)
    return len(payload)


def unique_path(dest_dir: Path, filename: str) -> Path:
    candidate = dest_dir / filename
    if not candidate.exists():
        return candidate
    stem = candidate.stem
    suffix = candidate.suffix
    for i in range(2, 1000):
        alt = dest_dir / f"{stem}__{i}{suffix}"
        if not alt.exists():
            return alt
    raise OSError(f"Too many collisions for {filename}")


def process_track(
    track: Path,
    demo_name: str,
    out_dir: Path,
    mode: str,
    max_exe_mb: int,
) -> list[dict[str, str | int]]:
    rows: list[dict[str, str | int]] = []
    demo = sanitize(demo_name, 100)

    disc_ip_raw = read_lbas(track, 0, 16)
    disc = parse_ip(disc_ip_raw)
    disc_title = disc["title"] if disc else "DISC"

    if mode in {"ip", "both"}:
        dest = unique_path(out_dir, f"{demo}__{sanitize(disc_title)}__DISC_IP.BIN")
        dest.write_bytes(disc_ip_raw[: 16 * USER])
        rows.append(
            {
                "demo": demo_name,
                "game": disc_title,
                "kind": "disc_ip",
                "source_name": "IP.BIN@LBA0",
                "output": dest.name,
                "bytes": dest.stat().st_size,
                "product": disc["product"] if disc else "",
                "version": disc["version"] if disc else "",
                "date": disc["date"] if disc else "",
            }
        )

    try:
        entries = root_entries(track)
    except OSError as exc:
        rows.append(
            {
                "demo": demo_name,
                "game": disc_title,
                "kind": "error",
                "source_name": "",
                "output": "",
                "bytes": 0,
                "product": "",
                "version": "",
                "date": str(exc),
            }
        )
        return rows

    # Map basename -> title from per-game IP files for exe naming.
    game_titles: dict[str, str] = {}
    per_game_ips: list[tuple[str, int, int, dict[str, str]]] = []

    for name, is_dir, extent, size in entries:
        if is_dir or not is_game_ip_name(name):
            continue
        sectors = max(1, (min(size, 32768) + USER - 1) // USER)
        payload = read_lbas(track, extent, sectors)[:size]
        meta = parse_ip(payload)
        if not meta:
            continue
        per_game_ips.append((name, extent, size, meta))
        game_titles[name.upper()] = meta["title"]

    if mode in {"ip", "both"}:
        for name, extent, size, meta in per_game_ips:
            game = sanitize(meta["title"])
            # Keep the original ISO basename (already ends in .BIN).
            dest = unique_path(out_dir, f"{demo}__{game}__{sanitize(Path(name).stem)}.BIN")
            # Prefer exact file bytes from ISO.
            nbytes = extract_file(track, extent, size, dest)
            rows.append(
                {
                    "demo": demo_name,
                    "game": meta["title"],
                    "kind": "game_ip",
                    "source_name": name,
                    "output": dest.name,
                    "bytes": nbytes,
                    "product": meta["product"],
                    "version": meta["version"],
                    "date": meta["date"],
                }
            )

    if mode in {"exe", "both"}:
        max_bytes = max_exe_mb * 1024 * 1024
        walked = walk_iso_files(track, entries, max_depth=3)
        root_bin_count = 0
        has_zero_dot_bin = False
        for dir_label, name, _extent, size in walked:
            if dir_label not in {"", "ROOT"}:
                continue
            upper = name.upper()
            if upper == "0.BIN":
                has_zero_dot_bin = True
            if Path(name).suffix.upper() not in {".BIN", ".AAA", ".ELF", ".COF", ".ABS", ".RX"}:
                continue
            if EXE_SKIP_RE.search(name) or EXE_HARD_RE.search(name) or EXE_SOFT_RE.search(name):
                continue
            if 32 * 1024 <= size <= max_bytes:
                root_bin_count += 1
        # Magazine discs have a handful of FOO.BIN loaders; games with 0.BIN already have a boot file.
        vacuum_root_bins = (not has_zero_dot_bin) and root_bin_count <= 24

        seen: set[tuple[int, int]] = set()
        for dir_label, name, extent, size in walked:
            key = (extent, size)
            if key in seen:
                continue
            at_root = dir_label in {"", "ROOT"}
            header = b""
            needs_header = at_root and not (
                EXE_HARD_RE.search(name) or EXE_SOFT_RE.search(name) or EXE_SKIP_RE.search(name)
            )
            if needs_header:
                try:
                    header = peek_file_header(track, extent, size)
                except OSError:
                    header = b""
            if not is_likely_exe(
                name,
                size,
                header,
                max_bytes,
                at_root=at_root,
                vacuum_root_bins=vacuum_root_bins,
            ):
                continue
            seen.add(key)
            game_label = resolve_game_label(dir_label, name, disc_title, game_titles)
            dest = unique_path(
                out_dir,
                f"{demo}__{sanitize(game_label)}__{sanitize(name)}",
            )
            try:
                nbytes = extract_file(track, extent, size, dest, max_bytes=max_bytes)
            except OSError as exc:
                rows.append(
                    {
                        "demo": demo_name,
                        "game": game_label,
                        "kind": "error",
                        "source_name": name,
                        "output": "",
                        "bytes": 0,
                        "product": "",
                        "version": "",
                        "date": str(exc),
                    }
                )
                continue
            rows.append(
                {
                    "demo": demo_name,
                    "game": game_label,
                    "kind": "exe",
                    "source_name": f"{dir_label}/{name}" if dir_label not in {"", "ROOT"} else name,
                    "output": dest.name,
                    "bytes": nbytes,
                    "product": "",
                    "version": "",
                    "date": "root_bin" if (at_root and vacuum_root_bins and not EXE_HARD_RE.search(name)) else "",
                }
            )

    return rows


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "root",
        nargs="?",
        default="/Volumes/Demos/Demo Discs/Saturn ",
        type=Path,
        help="Demo archive root",
    )
    parser.add_argument(
        "-o",
        "--output-dir",
        type=Path,
        default=Path("/Volumes/Data/SaturnDemoExes"),
        help="Folder to write extracted files into",
    )
    parser.add_argument(
        "--manifest",
        type=Path,
        default=None,
        help="CSV manifest path (default: <output-dir>/manifest.csv)",
    )
    parser.add_argument(
        "--mode",
        choices=("ip", "exe", "both"),
        default="ip",
        help="ip=headers only (default), exe=game binaries, both=all",
    )
    parser.add_argument(
        "--max-exe-mb",
        type=int,
        default=24,
        help="Skip executables larger than this (default 24)",
    )
    parser.add_argument("--limit", type=int, default=0, help="Process only first N dumps (0=all)")
    args = parser.parse_args()

    root: Path = args.root
    if not root.exists():
        raise SystemExit(f"Root not found: {root}")

    out_dir: Path = args.output_dir
    out_dir.mkdir(parents=True, exist_ok=True)
    manifest_path = args.manifest or (out_dir / "manifest.csv")

    dumps = discover_dumps(root)
    if args.limit:
        dumps = dumps[: args.limit]

    all_rows: list[dict[str, str | int]] = []
    tmp_root = Path(tempfile.mkdtemp(prefix="saturn-extract-"))
    try:
        for i, dump in enumerate(dumps, 1):
            try:
                rel = str(dump.relative_to(root))
            except ValueError:
                rel = str(dump)
            demo_name = dump.stem if dump.is_file() else dump.name
            print(f"[{i}/{len(dumps)}] {rel}", flush=True)
            work = tmp_root / f"d{i}"
            work.mkdir(parents=True, exist_ok=True)
            try:
                track = materialize_track(dump, work)
                if not track:
                    all_rows.append(
                        {
                            "demo": demo_name,
                            "game": "",
                            "kind": "error",
                            "source_name": "",
                            "output": "",
                            "bytes": 0,
                            "product": "",
                            "version": "",
                            "date": "no_track1",
                        }
                    )
                    continue
                rows = process_track(track, demo_name, out_dir, args.mode, args.max_exe_mb)
                all_rows.extend(rows)
            except Exception as exc:  # noqa: BLE001
                all_rows.append(
                    {
                        "demo": demo_name,
                        "game": "",
                        "kind": "error",
                        "source_name": "",
                        "output": "",
                        "bytes": 0,
                        "product": "",
                        "version": "",
                        "date": f"{type(exc).__name__}:{exc}",
                    }
                )
            finally:
                shutil.rmtree(work, ignore_errors=True)
    finally:
        shutil.rmtree(tmp_root, ignore_errors=True)

    fields = ["demo", "game", "kind", "source_name", "output", "bytes", "product", "version", "date"]
    with manifest_path.open("w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        w.writerows(all_rows)

    ok = sum(1 for r in all_rows if r["kind"] not in {"error"})
    err = sum(1 for r in all_rows if r["kind"] == "error")
    print(f"Wrote {ok} files to {out_dir} ({err} errors)", flush=True)
    print(f"Manifest: {manifest_path}", flush=True)


if __name__ == "__main__":
    main()
