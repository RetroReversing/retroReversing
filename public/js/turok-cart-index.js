(() => {
  const names = [
    'Graphic objects', 'Object attributes', 'Object types', 'Texture sets',
    'Particle effects', 'Sound effects', 'Levels', 'Persistent counts',
    'Warp destinations', 'Binaries', 'Binary types'
  ];

  // Root offsets from src/PR/cartdata.dat. Asset payloads are not embedded here.
  const sample = {
    name: 'Sample: PR/cartdata.dat',
    length: 6489336,
    offsets: [56, 2380456, 2389960, 2391320, 4291512, 4303232,
      4313056, 6423792, 6424240, 6429264, 6489272, 6489336]
  };

  function parseIndex(header, length, name) {
    if (header.byteLength < 8) throw new Error('File is too short for an indexed set.');
    const view = new DataView(header);
    const count = view.getUint32(0, false);
    if (count !== names.length) {
      throw new Error(`Expected ${names.length} root blocks; found ${count}. Choose a root cartdata.dat file.`);
    }
    const indexBytes = 4 + 4 * (count + 1);
    if (header.byteLength < indexBytes) throw new Error('The index is incomplete.');
    const offsets = Array.from({ length: count + 1 }, (_, i) => view.getUint32(4 + 4 * i, false));
    const alignedIndexBytes = (indexBytes + 7) & ~7;
    if (offsets[0] < alignedIndexBytes || offsets[count] > length ||
        offsets.some((value, i) => i > 0 && value < offsets[i - 1])) {
      throw new Error('Offsets are outside the file or out of order.');
    }
    return { name, length, offsets };
  }

  function render(root, data) {
    const rows = root.querySelector('[data-rr-turok-rows]');
    const status = root.querySelector('[data-rr-turok-status]');
    rows.replaceChildren();
    status.textContent = `${data.name}: ${data.length.toLocaleString()} bytes, ${names.length} root blocks. Bars show stored bytes, including any compressed data.`;

    names.forEach((name, i) => {
      const size = data.offsets[i + 1] - data.offsets[i];
      const row = document.createElement('div');
      row.className = 'rr-turok-index__row';
      const title = document.createElement('strong');
      title.textContent = `${i}. ${name}`;
      const offset = document.createElement('code');
      offset.textContent = `0x${data.offsets[i].toString(16).toUpperCase().padStart(8, '0')}`;
      offset.title = 'Start offset';
      const amount = document.createElement('span');
      amount.textContent = `${size.toLocaleString()} bytes`;
      const bar = document.createElement('progress');
      bar.max = data.length;
      bar.value = size;
      bar.setAttribute('aria-label', `${name}: ${size.toLocaleString()} stored bytes`);
      row.append(title, offset, amount, bar);
      rows.append(row);
    });
  }

  function initialize() {
    const root = document.querySelector('[data-rr-turok-index]');
    if (!root) return;
    render(root, sample);
    root.querySelector('[data-rr-turok-reset]').addEventListener('click', () => {
      root.querySelector('input[type="file"]').value = '';
      render(root, sample);
    });
    root.querySelector('input[type="file"]').addEventListener('change', async (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      try {
        // Read only the root header. The remainder never leaves the local file.
        const header = await file.slice(0, 64).arrayBuffer();
        render(root, parseIndex(header, file.size, file.name));
      } catch (error) {
        root.querySelector('[data-rr-turok-status]').textContent = error.message;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }
})();
