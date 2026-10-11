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

    function updateTrail() {
      scheduled = false;
      var headerBottom = header.getBoundingClientRect().bottom;
      var postRect = post.getBoundingClientRect();
      var firstTop = trailHeadings[0].getBoundingClientRect().top;
      var trailHeight = trail.offsetHeight || 36;
      var visible = firstTop < headerBottom && postRect.bottom > headerBottom + trailHeight;
      trail.hidden = !visible;
      if (!visible) return;

      trail.style.top = headerBottom + 'px';
      trail.style.left = postRect.left + 'px';
      trail.style.width = postRect.width + 'px';

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
        if (!heading.id) {
          var headingId = 'rr-section-' + (trailHeadings.indexOf(heading) + 1);
          while (document.getElementById(headingId)) headingId += '-section';
          heading.id = headingId;
        }
        var link = document.createElement('a');
        link.href = '#' + encodeURIComponent(heading.id);
        link.className = 'rr-current-section-link';
        link.textContent = heading.textContent.trim();
        link.title = 'Jump to ' + link.textContent;
        trail.appendChild(link);
      });
    }

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
