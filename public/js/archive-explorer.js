(() => {
  const formatSize = (bytes) => bytes < 1024 ? `${bytes.toLocaleString()} B` :
    bytes < 1048576 ? `${(bytes / 1024).toFixed(1)} KiB` : `${(bytes / 1048576).toFixed(1)} MiB`;
  const basename = (path) => path.split('/').pop();
  const parent = (path) => path.includes('/') ? path.slice(0, path.lastIndexOf('/')) : '';
  const articleLinks = (entry) => {
    const value = entry && entry.article;
    if (!value) return [];
    return (Array.isArray(value) ? value : [value]).filter((item) => item && item.href && item.title);
  };
  const appendArticleLinks = (detail, links) => {
    if (!links.length) return;
    const wrap = document.createElement('p');
    wrap.className = 'rr-archive__article';
    const label = document.createElement('span');
    label.className = 'rr-archive__article-label';
    label.textContent = 'On this page';
    wrap.append(label);
    links.forEach((item) => {
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.title;
      wrap.append(link);
    });
    detail.append(wrap);
  };

  function initialize(root, manifest) {
    if (manifest.version !== 1 || !Array.isArray(manifest.files) || !Array.isArray(manifest.folders)) {
      throw new Error('Unsupported archive data');
    }
    const rootName = manifest.root || 'Archive';
    const visible = (path) => !path.split('/').some((part) => part.toLowerCase() === '.ds_store');
    const visibleFolders = manifest.folders.filter(visible);
    const visibleFiles = manifest.files.filter((entry) => visible(entry.path));
    const folders = new Set(['', ...visibleFolders]);
    const children = new Map([...folders].map((path) => [path, { folders: [], files: [] }]));
    const fileMap = new Map(visibleFiles.map((entry) => [entry.path, entry]));
    const folderDescriptionMap = new Map((manifest.folderDescriptions || [])
      .filter((entry) => entry && folders.has(entry.path))
      .map((entry) => [entry.path, entry]));
    visibleFolders.forEach((path) => children.get(parent(path)).folders.push(path));
    visibleFiles.forEach((entry) => children.get(parent(entry.path)).files.push(entry));
    children.forEach((group) => {
      group.folders.sort((a, b) => basename(a).localeCompare(basename(b)));
      group.files.sort((a, b) => basename(a.path).localeCompare(basename(b.path)));
    });

    const list = root.querySelector('[data-archive-list]');
    const detail = root.querySelector('[data-archive-detail]');
    const breadcrumbs = root.querySelector('[data-archive-breadcrumbs]');
    const status = root.querySelector('[data-archive-status]');
    const search = root.querySelector('[data-archive-search]');
    const back = root.querySelector('[data-archive-back]');
    const up = root.querySelector('[data-archive-up]');
    const pager = root.querySelector('[data-archive-pager]');
    const previousPage = root.querySelector('[data-archive-prev]');
    const nextPage = root.querySelector('[data-archive-next]');
    const pageLabel = root.querySelector('[data-archive-page]');
    const locations = root.querySelector('[data-archive-locations]');
    const note = root.querySelector('[data-archive-note]');
    const history = [];
    let current = folders.has(manifest.initialPath) ? manifest.initialPath : '';
    let selected = null;
    let page = 0;
    const pageSize = 120;

    function button(label, className, onClick) {
      const element = document.createElement('button');
      element.type = 'button';
      element.className = className;
      element.textContent = label;
      element.addEventListener('click', onClick);
      return element;
    }

    (manifest.locations || []).filter((location) => folders.has(location.path)).forEach((location) => {
      locations.append(button(location.label, 'rr-archive__location', () => navigate(location.path)));
    });
    if (manifest.note) {
      note.textContent = manifest.note;
      note.hidden = false;
    }

    function renderDetail() {
      detail.replaceChildren();
      const entry = selected ? fileMap.get(selected) : null;
      const folderEntry = !entry ? folderDescriptionMap.get(current) : null;
      const eyebrow = document.createElement('span');
      eyebrow.className = 'rr-archive__detail-eyebrow';
      eyebrow.textContent = entry ? 'FILE CARD' : folderEntry ? 'FOLDER GUIDE' : 'ARCHIVE GUIDE';
      detail.append(eyebrow);
      if (folderEntry) {
        const heading = document.createElement('h4');
        heading.textContent = current ? basename(current) : rootName;
        const path = document.createElement('p');
        path.className = 'rr-archive__detail-path';
        path.textContent = current ? `${rootName}/${current}` : rootName;
        const copy = document.createElement('p');
        copy.textContent = folderEntry.description;
        const group = children.get(current);
        const metadata = document.createElement('dl');
        const facts = [
          ['Contains', `${group.folders.length.toLocaleString()} ${group.folders.length === 1 ? 'folder' : 'folders'} and ${group.files.length.toLocaleString()} ${group.files.length === 1 ? 'file' : 'files'}`]
        ];
        if (folderEntry.basis) facts.push(['Description basis', folderEntry.basis]);
        facts.forEach(([term, value]) => {
          const dt = document.createElement('dt');
          dt.textContent = term;
          const dd = document.createElement('dd');
          dd.textContent = value;
          metadata.append(dt, dd);
        });
        detail.append(heading, path, copy);
        appendArticleLinks(detail, articleLinks(folderEntry));
        detail.append(metadata);
        return;
      }
      if (!entry) {
        const heading = document.createElement('h4');
        heading.textContent = 'Choose a file';
        const copy = document.createElement('p');
        copy.textContent = 'Select a file to see its description and size. File contents are never loaded.';
        detail.append(heading, copy);
        return;
      }
      const heading = document.createElement('h4');
      heading.textContent = basename(selected);
      const path = document.createElement('p');
      path.className = 'rr-archive__detail-path';
      path.textContent = `${rootName}/${selected}`;
      const copy = document.createElement('p');
      copy.textContent = entry.description || 'Purpose not documented in this archive index.';
      const metadata = document.createElement('dl');
      const facts = [['Size', `${entry.size.toLocaleString()} bytes`]];
      if (entry.md5) facts.push(['MD5', entry.md5]);
      if (entry.basis) facts.push(['Description basis', entry.basis]);
      facts.forEach(([term, value]) => {
        const dt = document.createElement('dt');
        dt.textContent = term;
        const dd = document.createElement('dd');
        dd.textContent = value;
        metadata.append(dt, dd);
      });
      detail.append(heading, path, copy);
      appendArticleLinks(detail, articleLinks(entry));
      detail.append(metadata);
    }

    function renderBreadcrumbs() {
      breadcrumbs.replaceChildren();
      const parts = current ? current.split('/') : [];
      [''].concat(parts.map((_, index) => parts.slice(0, index + 1).join('/'))).forEach((path, index) => {
        if (index) {
          const separator = document.createElement('span');
          separator.className = 'rr-archive__crumb-divider';
          separator.textContent = '/';
          breadcrumbs.append(separator);
        }
        const crumb = button(index ? parts[index - 1] : rootName, 'rr-archive__crumb', () => navigate(path));
        if (path === current) crumb.setAttribute('aria-current', 'location');
        breadcrumbs.append(crumb);
      });
    }

    function fileRow(entry, isSearch) {
      const path = entry.path;
      const row = button('', 'rr-archive__row', () => {
        selected = path;
        renderDetail();
        list.querySelectorAll('.rr-archive__row').forEach((item) => item.classList.remove('is-selected'));
        row.classList.add('is-selected');
      });
      if (path === selected) row.classList.add('is-selected');
      const links = articleLinks(entry);
      if (links.length) {
        row.classList.add('has-article');
        row.title = `On this page: ${links.map((item) => item.title).join(', ')}`;
        row.setAttribute('aria-label', `${isSearch ? path : basename(path)}, explained on this page`);
      }
      const icon = document.createElement('span');
      icon.className = 'rr-archive__icon rr-archive__icon--file';
      icon.setAttribute('aria-hidden', 'true');
      const name = document.createElement('span');
      name.className = 'rr-archive__name';
      name.textContent = isSearch ? path : basename(path);
      const size = document.createElement('span');
      size.className = 'rr-archive__size';
      size.textContent = formatSize(entry.size);
      row.append(icon, name, size);
      return row;
    }

    function folderRow(path) {
      const row = button('', 'rr-archive__row', () => navigate(path));
      const folderEntry = folderDescriptionMap.get(path);
      if (folderEntry) {
        const links = articleLinks(folderEntry);
        row.title = folderEntry.description;
        row.setAttribute('aria-label', `${basename(path)} folder. ${folderEntry.description}`);
        if (links.length) row.classList.add('has-article');
      }
      const icon = document.createElement('span');
      icon.className = 'rr-archive__icon rr-archive__icon--folder';
      icon.setAttribute('aria-hidden', 'true');
      const name = document.createElement('span');
      name.className = 'rr-archive__name';
      name.textContent = basename(path);
      const size = document.createElement('span');
      size.className = 'rr-archive__size';
      size.textContent = 'Folder';
      row.append(icon, name, size);
      return row;
    }

    function renderList() {
      list.replaceChildren();
      const query = search.value.trim().toLocaleLowerCase();
      const fragment = document.createDocumentFragment();
      let items;
      if (query) {
        const matches = visibleFiles.filter((entry) => entry.path.toLocaleLowerCase().includes(query));
        items = matches.map((entry) => ({ type: 'file', entry }));
      } else {
        const group = children.get(current);
        items = [
          ...group.folders.map((path) => ({ type: 'folder', path })),
          ...group.files.map((entry) => ({ type: 'file', entry }))
        ];
      }
      const pages = Math.max(1, Math.ceil(items.length / pageSize));
      page = Math.min(page, pages - 1);
      const first = page * pageSize;
      items.slice(first, first + pageSize).forEach((item) => {
        fragment.append(item.type === 'folder' ? folderRow(item.path) : fileRow(item.entry, Boolean(query)));
      });
      pager.hidden = pages === 1;
      previousPage.disabled = page === 0;
      nextPage.disabled = page === pages - 1;
      pageLabel.textContent = `Page ${page + 1} of ${pages}`;
      const range = items.length ? ` | showing ${first + 1}-${Math.min(first + pageSize, items.length)} of ${items.length.toLocaleString()}` : '';
      if (query) {
        status.textContent = `${items.length.toLocaleString()} matching files${range}. Search covers the full archive.`;
      } else {
        const group = children.get(current);
        status.textContent = `${rootName}${current ? `/${current}` : ''} | ${group.folders.length} ${group.folders.length === 1 ? 'folder' : 'folders'} | ${group.files.length} ${group.files.length === 1 ? 'file' : 'files'}${range}`;
      }
      if (!fragment.childNodes.length) {
        const empty = document.createElement('p');
        empty.className = 'rr-archive__empty';
        empty.textContent = 'No files found.';
        fragment.append(empty);
      }
      list.append(fragment);
      back.disabled = history.length === 0;
      up.disabled = current === '';
      renderBreadcrumbs();
    }

    function navigate(path, remember = true) {
      if (!folders.has(path)) return;
      if (remember && path !== current) history.push(current);
      current = path;
      selected = null;
      page = 0;
      search.value = '';
      list.scrollTop = 0;
      renderDetail();
      renderList();
    }

    back.addEventListener('click', () => {
      if (history.length) navigate(history.pop(), false);
    });
    up.addEventListener('click', () => navigate(parent(current)));
    search.addEventListener('input', () => {
      selected = null;
      page = 0;
      renderDetail();
      renderList();
    });
    function changePage(direction) {
      page += direction;
      selected = null;
      list.scrollTop = 0;
      renderDetail();
      renderList();
    }
    previousPage.addEventListener('click', () => changePage(-1));
    nextPage.addEventListener('click', () => changePage(1));
    renderDetail();
    renderList();
  }

  document.querySelectorAll('[data-rr-archive-explorer]').forEach((root) => {
    if (root.dataset.archiveInitialized) return;
    root.dataset.archiveInitialized = 'true';
    fetch(root.dataset.manifest, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
      })
      .then((manifest) => initialize(root, manifest))
      .catch(() => {
        root.querySelector('[data-archive-status]').textContent = 'The archive index could not be loaded.';
      });
  });
})();
