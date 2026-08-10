# file-lab-kaitai-viewer

File Lab plugin that parses binary files with [Kaitai Struct](https://kaitai.io/) and visualizes the decoded structure in an interactive tree view. The UI is built with [Lit](https://lit.dev/).

Bundled formats (from the [Kaitai format gallery](https://formats.kaitai.io/)):

**Executables**

* PE (Windows `.exe`, `.dll`, `.sys`)
* ELF (Linux/Unix `.elf`, `.so`, `.o`)
* Mach-O and Mach-O Fat (macOS `.dylib`, universal binaries)
* DOS MZ (legacy `.exe`, `.com`)
* DEX (Android `.dex`)
* Java Class (`.class`)
* UEFI TE (`.te`, `.efi`)
* SWF (`.swf`)
* Python 2.7 PYC (`.pyc`)
* Android nanoapp header

**Media**

* GIF, WAV, BMP
* ILBM / IFF / LBM (Amiga interleaved bitmap, Deluxe Paint)

Auto-detection uses magic bytes first (e.g. `MZ` + `PE\0\0` for PE, `\x7FELF` for ELF), then falls back to file extension.

## Repository layout

This directory is intended to be used as a **git submodule** inside [retroReversing](https://github.com/retroreversing/retroReversing):

```
public/js/file-lab/plugins/kaitai-viewer/   ← this repo
├── formats/          # .ksy source definitions
├── src/              # Lit plugin source
├── src/parsers/      # Kaitai-compiled JS (committed)
├── dist/             # Vite production bundle (committed for GitHub Pages)
└── package.json
```

## Submodule setup

From the retroReversing repo root (after creating this repository on GitHub):

```bash
git submodule add https://github.com/YOUR_ORG/file-lab-kaitai-viewer.git public/js/file-lab/plugins/kaitai-viewer
git submodule update --init --recursive
```

`plugins.json` already references:

```json
{
  "id": "kaitai-viewer",
  "module": "/public/js/file-lab/plugins/kaitai-viewer/dist/index.js",
  "css": "plugin.css"
}
```

Clone with submodules:

```bash
git clone --recurse-submodules https://github.com/retroreversing/retroReversing.git
```

## Development

Requirements: Node.js 20+

```bash
npm install
npm run build
```

Build steps:

1. `compile:formats` - compiles `.ksy` files with `kaitai-struct-compiler` into `src/parsers/`
2. `export:parsers` - wraps UMD parsers as browser ES modules in `src/parsers-esm/`
3. `vite build` - bundles Lit UI, parsers, and `kaitai-struct` runtime into `dist/`

Watch mode:

```bash
npm run dev
```

## Adding a format

1. Drop a `.ksy` file into `formats/` (pull dependencies into `formats/` as needed, e.g. `formats/common/riff.ksy`).
2. Import the compiled parser in `src/format-registry.js` and add a catalog entry with magic bytes / extensions.
3. Run `npm run build` and commit `src/parsers/` + `dist/`.

## File Lab plugin API

The built `dist/index.js` exports a default object compatible with File Lab's plugin registry:

* `matches(ctx)` - returns true when magic bytes or extension match a bundled format
* `activate(ctx, panel)` - mounts the `<kaitai-viewer>` Lit element
* `deactivate(panel)` - tears down the panel

## License

Kaitai Struct compiler output is GPL-3.0-or-later (see `kaitai-struct-compiler` license). Format definitions in `formats/` are CC0-1.0 from the Kaitai format gallery. Plugin source in `src/` follows the retroReversing repository license.
