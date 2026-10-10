meta:
  id: ilbm
  title: IFF ILBM (Interleaved Bitmap)
  file-extension:
    - ilbm
    - iff
    - lbm
  xref:
    wikidata: Q5988459
    mime: image/x-ilbm
  license: CC0-1.0
  endian: be
  encoding: ASCII
doc: |
  ILBM (Interleaved Bitmap) is an IFF FORM type for 2D raster graphics
  with an optional color map. It was defined by Electronic Arts in 1986
  and became the standard on the Commodore Amiga (Deluxe Paint .LBM)
  and in many PC games of the late 1980s and early 1990s.

  A file begins with a FORM wrapper whose form type is ILBM or PBM,
  followed by property chunks (BMHD, CMAP, ...) and a BODY chunk
  containing interleaved bitplane data. BODY data may be uncompressed
  or PackBits-compressed per scanline (compression type 1).

  Reference: EA IFF 85 supplement for FORM ILBM (Electronic Arts, 1986).
doc-ref:
  - https://wiki.amigaos.net/wiki/ILBM_IFF_Interleaved_Bitmap
  - https://en.wikipedia.org/wiki/ILBM
seq:
  - id: form
    type: form
types:
  form:
    seq:
      - id: magic
        contents: "FORM"
      - id: len
        type: u4
      - id: body
        type: form_body
        size: len
  form_body:
    seq:
      - id: form_type
        type: str
        size: 4
        encoding: ASCII
      - id: chunks
        type: ilbm_chunk
        repeat: eos
  ilbm_chunk:
    seq:
      - id: id
        type: u4
        enum: chunk_ids
      - id: len
        type: u4
      - id: body_slot
        type: body_slot
        size: len
      - id: pad
        size: len % 2
    types:
      body_slot: {}
    instances:
      body:
        io: body_slot._io
        pos: 0
        type:
          switch-on: id
          cases:
            chunk_ids::bmhd: bitmap_header
            chunk_ids::cmap: color_map
            chunk_ids::grab: point2d
            chunk_ids::dest: dest_merge
            chunk_ids::sprt: sprite_precedence
            chunk_ids::camg: camg_mode
            chunk_ids::crng: color_range
            chunk_ids::ccrt: cycle_info
            chunk_ids::dpi_: dpi_info
            chunk_ids::anno: text_data
            chunk_ids::auth: text_data
            chunk_ids::name: text_data
            chunk_ids::copy: text_data
            chunk_ids::body: body_data
            _: raw_data
  bitmap_header:
    -orig-id: BitMapHeader
    doc-ref: ILBM IFF supplement section 2 (BMHD)
    seq:
      - id: width
        type: u2
      - id: height
        type: u2
      - id: x
        type: s2
      - id: y
        type: s2
      - id: n_planes
        type: u1
      - id: masking
        type: u1
        enum: masking_type
      - id: compression
        type: u1
        enum: compression_type
      - id: pad1
        type: u1
      - id: transparent_color
        type: u2
      - id: x_aspect
        type: u1
      - id: y_aspect
        type: u1
      - id: page_width
        type: u2
      - id: page_height
        type: u2
    instances:
      row_bytes:
        value: ((width + 15) >> 4) << 1
        doc: Bytes per bitplane scanline (16-bit word aligned)
  color_map:
    seq:
      - id: entries
        type: color_register
        repeat: eos
  color_register:
    seq:
      - id: red
        type: u1
      - id: green
        type: u1
      - id: blue
        type: u1
  point2d:
    seq:
      - id: x
        type: s2
      - id: y
        type: s2
  dest_merge:
    seq:
      - id: dest_bit
        type: u1
      - id: op
        type: u1
      - id: reserved
        type: u1
      - id: src_mask
        type: u1
      - id: dest_mask
        type: u1
  sprite_precedence:
    seq:
      - id: precedence
        type: u4
  camg_mode:
    seq:
      - id: viewport_modes
        type: u4
    instances:
      ham:
        value: (viewport_modes & 0x800) != 0
      ehb:
        value: (viewport_modes & 0x80) != 0
      hires:
        value: (viewport_modes & 0x8000) != 0
      lace:
        value: (viewport_modes & 0x4) != 0
  color_range:
    seq:
      - id: pad
        type: u2
      - id: rate
        type: u2
      - id: flags
        type: u2
      - id: lower
        type: u1
      - id: upper
        type: u1
  cycle_info:
    seq:
      - id: direction
        type: u2
      - id: start
        type: u1
      - id: end
        type: u1
  dpi_info:
    seq:
      - id: dpi_x
        type: u2
      - id: dpi_y
        type: u2
  text_data:
    seq:
      - id: text
        type: str
        size-eos: true
        encoding: ASCII
  body_data:
    seq:
      - id: data
        size-eos: true
        doc: Raw interleaved bitplane data (may be PackBits compressed per row)
  raw_data:
    seq:
      - id: data
        size-eos: true
enums:
  chunk_ids:
    0x424d4844: bmhd # BMHD
    0x434d4150: cmap # CMAP
    0x47524142: grab # GRAB
    0x44455354: dest # DEST
    0x53505254: sprt # SPRT
    0x43414d47: camg # CAMG
    0x43524e47: crng # CRNG
    0x43435254: ccrt # CCRT
    0x44504920: dpi_ # DPI␠
    0x414e4e4f: anno # ANNO
    0x41555448: auth # AUTH
    0x4e414d45: name # NAME
    0x434f5059: copy # COPY
    0x424f4459: body # BODY
  masking_type:
    0: none
    1: has_mask
    2: has_transparent_color
    3: lasso
  compression_type:
    0: none
    1: byte_run1
