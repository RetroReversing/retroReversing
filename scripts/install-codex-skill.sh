#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
skills_src_root="$repo_root/codex/skills"

codex_home="${CODEX_HOME:-$HOME/.codex}"
skills_dest_root="$codex_home/skills"

if [[ ! -d "$skills_src_root" ]]; then
  echo "Skills source directory not found: $skills_src_root" >&2
  exit 1
fi

mkdir -p "$skills_dest_root"

installed_count=0

for src_dir in "$skills_src_root"/*; do
  [[ -d "$src_dir" ]] || continue
  [[ -f "$src_dir/SKILL.md" ]] || continue

  skill_name="$(basename "$src_dir")"
  dest_dir="$skills_dest_root/$skill_name"

  mkdir -p "$dest_dir"

  if command -v rsync >/dev/null 2>&1; then
    rsync -a --delete "$src_dir/" "$dest_dir/"
  else
    rm -rf "$dest_dir"
    mkdir -p "$dest_dir"
    cp -R "$src_dir/." "$dest_dir/"
  fi

  echo "Installed Codex skill to: $dest_dir"
  installed_count=$((installed_count + 1))
done

if [[ "$installed_count" -eq 0 ]]; then
  echo "No skill directories containing SKILL.md were found in: $skills_src_root" >&2
  exit 1
fi

echo "Installed $installed_count Codex skill(s) from: $skills_src_root"
