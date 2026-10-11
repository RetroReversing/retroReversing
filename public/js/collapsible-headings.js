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
      body.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (heading) {
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
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
}());
