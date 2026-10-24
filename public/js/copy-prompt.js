(function () {
  'use strict';

  document.querySelectorAll('[data-copy-prompt]').forEach(function (button) {
    if (button.dataset.copyPromptReady) return;
    button.dataset.copyPromptReady = 'true';
    var code = document.getElementById(button.dataset.copyPrompt);
    var status = button.parentElement.querySelector('[role="status"]');
    if (!code || !status) return;

    button.addEventListener('click', async function () {
      try {
        await navigator.clipboard.writeText(code.textContent);
        status.textContent = 'Prompt copied. Paste it in Codex or Claude Code.';
      } catch (error) {
        // Keep the prompt usable when the browser denies clipboard access.
        code.parentElement.classList.remove('rr-code-collapsed');
        var range = document.createRange();
        range.selectNodeContents(code);
        var selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
        status.textContent = 'Select the prompt and press Ctrl+C or Command+C to copy.';
      }
    });
  });
})();
