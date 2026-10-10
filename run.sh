#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$repo_root"

# Ruby 3.2 is EOL. 3.3.x works with github-pages and is still supported.
PREFERRED_RUBY_SERIES="3.3"
DEFAULT_RUBY_VERSION="3.3.12"
HOMEBREW_RUBY_FORMULA="ruby@3.3"
PORT="${PORT:-4000}"
HOST="${HOST:-127.0.0.1}"

log() {
  echo "==> $*"
}

err() {
  echo "ERROR: $*" >&2
  exit 1
}

init_rbenv() {
  local rbenv_bin=""

  if command -v rbenv >/dev/null 2>&1; then
    rbenv_bin="$(command -v rbenv)"
  elif [[ -x "$HOME/.rbenv/bin/rbenv" ]]; then
    rbenv_bin="$HOME/.rbenv/bin/rbenv"
    export PATH="$HOME/.rbenv/bin:$PATH"
  elif [[ -x "/opt/homebrew/bin/rbenv" ]]; then
    rbenv_bin="/opt/homebrew/bin/rbenv"
    export PATH="/opt/homebrew/bin:$PATH"
  elif [[ -x "/usr/local/bin/rbenv" ]]; then
    rbenv_bin="/usr/local/bin/rbenv"
    export PATH="/usr/local/bin:$PATH"
  fi

  if [[ -n "$rbenv_bin" ]]; then
    eval "$("$rbenv_bin" init - bash 2>/dev/null || "$rbenv_bin" init - zsh 2>/dev/null || true)"
  fi
}

configure_xcode_toolchain() {
  if ! command -v xcrun >/dev/null 2>&1; then
    err "Xcode Command Line Tools are required. Install them, then run this script again:
  xcode-select --install"
  fi

  if ! xcrun --find clang >/dev/null 2>&1; then
    err "Apple clang was not found. Install or reset Xcode Command Line Tools:
  xcode-select --install
  sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer"
  fi

  export CC="$(xcrun --find clang)"
  export CXX="$(xcrun --find clang++)"
  if xcrun --find ld >/dev/null 2>&1; then
    export LD="$(xcrun --find ld)"
  fi
  export SDKROOT="$(xcrun --show-sdk-path)"
  export PATH="/usr/bin:/Applications/Xcode.app/Contents/Developer/usr/bin:${PATH}"
}

current_ruby_version() {
  ruby -e 'print RUBY_VERSION' 2>/dev/null || true
}

ruby_is_compatible() {
  local version="$1"
  [[ "$version" == 3.3.* ]]
}

check_compiler() {
  local probe
  probe="$(mktemp "${TMPDIR:-/tmp}/run-sh-clang.XXXXXX")"
  if ! "$CC" -x c - -o "$probe" >/dev/null 2>&1 <<<'int main(void) { return 0; }'; then
    rm -f "$probe"
    err "The active C compiler still cannot build programs.

This Mac often hits this when Homebrew LLVM points at a missing SDK such as MacOSX26.2.sdk.
This script forces Apple's Xcode clang, but your shell may still need a one-time fix:
  brew upgrade llvm
  sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
  sudo xcodebuild -license accept"
  fi
  rm -f "$probe"
}

resolve_ruby_version() {
  if command -v ruby-build >/dev/null 2>&1; then
    ruby-build --resolve "$PREFERRED_RUBY_SERIES" 2>/dev/null || true
  fi
}

find_installed_rbenv_ruby() {
  local version
  for version in $(rbenv versions --bare 2>/dev/null); do
    if ruby_is_compatible "$version"; then
      echo "$version"
      return 0
    fi
  done
  return 1
}

activate_rbenv_ruby() {
  local target_version="$1"
  export RBENV_VERSION="$target_version"
  init_rbenv
  ruby_is_compatible "$(current_ruby_version)"
}

homebrew_ruby_prefix() {
  if ! command -v brew >/dev/null 2>&1; then
    return 1
  fi
  brew --prefix "$HOMEBREW_RUBY_FORMULA" 2>/dev/null
}

activate_homebrew_ruby() {
  local prefix ruby_bin gem_bin
  prefix="$(homebrew_ruby_prefix)" || return 1
  ruby_bin="$prefix/bin/ruby"
  [[ -x "$ruby_bin" ]] || return 1

  gem_bin="$prefix/lib/ruby/gems/3.3.0/bin"
  export PATH="$prefix/bin:$gem_bin:$PATH"
  ruby_is_compatible "$(current_ruby_version)"
}

ensure_homebrew_ruby() {
  if activate_homebrew_ruby; then
    log "Using Homebrew Ruby $(current_ruby_version)"
    return 0
  fi

  if ! command -v brew >/dev/null 2>&1; then
    return 1
  fi

  log "Installing Homebrew $HOMEBREW_RUBY_FORMULA (prebuilt bottle, no compile needed)..."
  brew install "$HOMEBREW_RUBY_FORMULA"

  if activate_homebrew_ruby; then
    log "Using Homebrew Ruby $(current_ruby_version)"
    return 0
  fi

  return 1
}

ensure_rbenv_ruby() {
  init_rbenv
  if ! command -v rbenv >/dev/null 2>&1; then
    return 1
  fi

  local installed_version target_version
  if installed_version="$(find_installed_rbenv_ruby)"; then
    log "Switching to rbenv Ruby $installed_version"
    activate_rbenv_ruby "$installed_version"
    log "Using Ruby $(current_ruby_version)"
    return 0
  fi

  if ! command -v ruby-build >/dev/null 2>&1; then
    return 1
  fi

  target_version="$(resolve_ruby_version)"
  target_version="${target_version:-$DEFAULT_RUBY_VERSION}"

  log "Installing Ruby $target_version with rbenv (this may take a few minutes)..."
  if ! RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@3 2>/dev/null || true)" \
    rbenv install -s "$target_version"; then
    return 1
  fi

  activate_rbenv_ruby "$target_version"
  log "Using Ruby $(current_ruby_version)"
}

ensure_ruby() {
  configure_xcode_toolchain
  check_compiler

  local version
  version="$(current_ruby_version)"
  if ruby_is_compatible "$version"; then
    log "Using Ruby $version"
    return 0
  fi

  if ensure_homebrew_ruby; then
    return 0
  fi

  if ensure_rbenv_ruby; then
    return 0
  fi

  err "Could not activate Ruby 3.3.x (found ${version:-none}).

Fastest fix on macOS:
  brew install ruby@3.3
  ./run.sh

If you prefer rbenv, make sure Apple's compiler is used during the build:
  export CC=\"\$(xcrun --find clang)\"
  export CXX=\"\$(xcrun --find clang++)\"
  export SDKROOT=\"\$(xcrun --show-sdk-path)\"
  rbenv install $DEFAULT_RUBY_VERSION
  rbenv local $DEFAULT_RUBY_VERSION"
}

ensure_bundler() {
  if ! command -v bundle >/dev/null 2>&1; then
    log "Installing bundler..."
    gem install bundler
  fi
}

install_gems() {
  log "Installing Ruby gems into vendor/bundle..."
  bundle check >/dev/null 2>&1 || bundle install
}

serve_site() {
  log "Starting Jekyll preview at http://$HOST:$PORT"
  log "Using _config.dev.yml for faster local rebuilds"
  log "Press Ctrl+C to stop"
  exec bundle exec jekyll serve \
    --config _config.yml,_config.dev.yml \
    --host "$HOST" \
    --port "$PORT" \
    --livereload
}

ensure_ruby
ensure_bundler
install_gems
serve_site
