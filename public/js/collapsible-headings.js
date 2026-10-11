(function () {
  'use strict';

  function initialize() {
    var sections = [];
    function contentFor(heading) {
      var level = Number(heading.tagName.slice(1));
      var content = [];
      var next = heading.nextElementSibling;
      while (next && (!/^H[1-6]$/.test(next.tagName) || Number(next.tagName.slice(1)) > level)) {
        content.push(next);
        next = next.nextElementSibling;
      }
      return content;
    }

    document.querySelectorAll('.rr-post-body').forEach(function (body) {
      // Embedded cards and widgets have their own headings; only article sections collapse.
      body.querySelectorAll(':scope > h1, :scope > h2, :scope > h3, :scope > h4, :scope > h5, :scope > h6').forEach(function (heading) {
        if (heading.classList.contains('rr-collapsible-heading')) return;
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'rr-heading-toggle';
        button.setAttribute('aria-label', 'Toggle section: ' + heading.textContent.trim());
        button.setAttribute('aria-expanded', 'true');
        heading.classList.add('rr-collapsible-heading');
        heading.prepend(button);

        var section = { heading: heading, collapsed: false, expand: expand };
        function expand() {
          section.collapsed = false;
          button.setAttribute('aria-expanded', 'true');
        }

        heading.addEventListener('click', function (event) {
          // Keep links and other controls inside headings independently usable.
          if (event.target.closest('a, input, select, textarea, [role="button"], button') && !button.contains(event.target)) return;
          section.collapsed = !section.collapsed;
          button.setAttribute('aria-expanded', String(!section.collapsed));
          updateVisibility();
        });
        sections.push(section);
      });
    });

    function updateVisibility() {
      document.querySelectorAll('.rr-post-body .rr-section-hidden').forEach(function (element) {
        element.classList.remove('rr-section-hidden');
      });
      sections.forEach(function (section) {
        if (section.collapsed) contentFor(section.heading).forEach(function (element) {
          element.classList.add('rr-section-hidden');
        });
      });
      if (trail) scheduleTrail();
    }

    function reveal(hash) {
      if (!hash) return null;
      var id;
      try { id = decodeURIComponent(hash.slice(1)); } catch (error) { return null; }
      var target = document.getElementById(id);
      if (!target) return null;
      sections.forEach(function (section) {
        if (section.heading === target || contentFor(section.heading).some(function (element) {
          return element === target || element.contains(target);
        })) section.expand();
      });
      updateVisibility();
      return target;
    }

    // Capture before any existing smooth-scroll handlers measure the target.
    document.addEventListener('click', function (event) {
      var link = event.target.closest('a[href]');
      if (!link) return;
      var url = new URL(link.href, document.baseURI);
      if (url.origin === location.origin && url.pathname === location.pathname && url.search === location.search) reveal(url.hash);
    }, true);
    window.addEventListener('hashchange', function () {
      var target = reveal(location.hash);
      if (target) target.scrollIntoView();
    });
    reveal(location.hash);

    var trailHeadings = sections.map(function (section) { return section.heading; }).filter(function (heading) {
      return Number(heading.tagName.slice(1)) <= 3;
    });
    var parentByHeading = new Map();
    var ancestorByLevel = [];
    trailHeadings.forEach(function (heading) {
      var level = Number(heading.tagName.slice(1));
      var parent = null;
      for (var i = level - 2; i >= 0; i--) {
        if (ancestorByLevel[i]) { parent = ancestorByLevel[i]; break; }
      }
      parentByHeading.set(heading, parent);
      ancestorByLevel[level - 1] = heading;
      ancestorByLevel.length = level;
    });
    var post = document.querySelector('.post.post-single');
    var header = document.getElementById('header');
    if (!trailHeadings.length || !post || !header) return;

    var trail = document.createElement('nav');
    trail.className = 'rr-current-section-trail';
    trail.setAttribute('aria-label', 'Current article section');
    trail.hidden = true;
    post.appendChild(trail);
    var shown = [];
    var scheduled = false;

    function headingAnchor(heading) {
      if (!heading.id) {
        var base = 'rr-section-' + (trailHeadings.indexOf(heading) + 1);
        var id = base;
        var suffix = 2;
        while (document.getElementById(id)) id = base + '-' + (suffix++);
        heading.id = id;
      }
      return '#' + encodeURIComponent(heading.id);
    }

    function closeMenus(except) {
      trail.querySelectorAll('.rr-current-section-jump[open]').forEach(function (picker) {
        if (picker !== except) picker.open = false;
      });
    }

    function positionOpenMenu() {
      var picker = trail.querySelector('.rr-current-section-jump[open]');
      if (!picker) return;
      var menu = picker.querySelector('.rr-current-section-menu');
      var rect = picker.getBoundingClientRect();
      menu.style.top = (rect.bottom + 8) + 'px';
      menu.style.left = Math.max(12, Math.min(rect.left, window.innerWidth - menu.offsetWidth - 12)) + 'px';
    }

    function updateTrail() {
      scheduled = false;
      var headerBottom = header.getBoundingClientRect().bottom;
      var postRect = post.getBoundingClientRect();
      var firstTop = trailHeadings[0].getBoundingClientRect().top;
      var trailHeight = trail.offsetHeight || 36;
      var visible = firstTop < headerBottom && postRect.bottom > headerBottom + trailHeight;
      trail.hidden = !visible;
      if (!visible) { closeMenus(); return; }

      trail.style.top = headerBottom + 'px';
      trail.style.left = postRect.left + 'px';
      trail.style.width = postRect.width + 'px';
      positionOpenMenu();

      var active = [null, null, null];
      var cutoff = headerBottom + trail.offsetHeight + 8;
      trailHeadings.forEach(function (heading) {
        if (!heading.getClientRects().length || heading.getBoundingClientRect().top > cutoff) return;
        var level = Number(heading.tagName.slice(1)) - 1;
        for (var i = level; i < active.length; i++) active[i] = null;
        active[level] = heading;
      });
      var current = active.filter(Boolean);
      if (current.length === shown.length && current.every(function (heading, i) { return heading === shown[i]; })) return;
      shown = current;
      trail.replaceChildren();
      current.forEach(function (heading) {
        var item = document.createElement('div');
        item.className = 'rr-current-section-item';
        var link = document.createElement('a');
        link.href = headingAnchor(heading);
        link.className = 'rr-current-section-link';
        link.textContent = heading.textContent.trim();
        link.title = 'Jump to ' + link.textContent;
        item.appendChild(link);

        var picker = document.createElement('details');
        picker.className = 'rr-current-section-jump';
        var level = Number(heading.tagName.slice(1));
        var summary = document.createElement('summary');
        summary.setAttribute('aria-label', 'Jump to another H' + level + ' section');
        summary.title = 'Jump to another H' + level + ' section';
        picker.appendChild(summary);
        var menu = document.createElement('div');
        menu.className = 'rr-current-section-menu';
        var menuHeading = document.createElement('div');
        menuHeading.className = 'rr-current-section-menu-heading';
        menuHeading.textContent = 'Jump to an H' + level + ' section';
        menu.appendChild(menuHeading);
        var list = document.createElement('ul');
        list.className = 'rr-current-section-options';
        trailHeadings.forEach(function (candidate) {
          if (candidate.tagName !== heading.tagName || parentByHeading.get(candidate) !== parentByHeading.get(heading)) return;
          var entry = document.createElement('li');
          var option = document.createElement('a');
          option.className = 'rr-current-section-option';
          option.href = headingAnchor(candidate);
          option.textContent = candidate.textContent.trim();
          if (candidate === heading) option.setAttribute('aria-current', 'location');
          option.addEventListener('click', function () { picker.open = false; });
          entry.appendChild(option);
          list.appendChild(entry);
        });
        menu.appendChild(list);
        picker.appendChild(menu);
        picker.addEventListener('toggle', function () {
          if (!picker.open) return;
          closeMenus(picker);
          positionOpenMenu();
        });
        item.appendChild(picker);
        trail.appendChild(item);
      });
    }

    document.addEventListener('click', function (event) {
      if (!trail.contains(event.target)) closeMenus();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var picker = trail.querySelector('.rr-current-section-jump[open]');
      if (!picker) return;
      picker.open = false;
      picker.querySelector('summary').focus();
    });

    function scheduleTrail() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(updateTrail);
    }

    window.addEventListener('scroll', scheduleTrail, { passive: true });
    window.addEventListener('resize', scheduleTrail);
    scheduleTrail();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
}());
