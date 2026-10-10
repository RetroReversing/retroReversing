(function () {
  'use strict';

  function initCodeBlocks() {
    document.querySelectorAll('.post pre > code').forEach(function (code, index) {
      var pre = code.parentElement;
      if (pre.classList.contains('rr-code-collapsible') ||
          code.matches('.language-mermaid, .lang-mermaid') ||
          pre.closest('.gist, .mermaid')) return;

      // Ignore the final newline added by Markdown renderers, but count blank lines.
      var lineCount = code.textContent.replace(/\r\n?/g, '\n').replace(/\n$/, '').split('\n').length;
      if (lineCount <= 10) return;

      if (!pre.id) {
        var id = 'rr-code-block-' + index;
        while (document.getElementById(id)) id += '-code';
        pre.id = id;
      }

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'rr-code-toggle';
      button.setAttribute('aria-controls', pre.id);

      function setExpanded(expanded) {
        pre.classList.toggle('rr-code-collapsed', !expanded);
        button.setAttribute('aria-expanded', String(expanded));
        button.textContent = expanded ? 'Show fewer lines' : 'Show all ' + lineCount + ' lines';
      }

      button.addEventListener('click', function () {
        var expanded = button.getAttribute('aria-expanded') !== 'true';
        setExpanded(expanded);
        if (!expanded && button.getBoundingClientRect().top < 0) {
          button.scrollIntoView({ block: 'center' });
        }
      });

      pre.classList.add('rr-code-collapsible');
      pre.insertAdjacentElement('afterend', button);
      setExpanded(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCodeBlocks);
  } else {
    initCodeBlocks();
  }
})();
