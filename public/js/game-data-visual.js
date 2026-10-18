(() => {
  'use strict';

  document.querySelectorAll('[data-game-data-visual]').forEach((visual) => {
    visual.querySelectorAll('.rr-game-visual__bars').forEach((panel) => {
      const bars = [...panel.querySelectorAll('[data-bar-value]')];
      const peak = Math.max(1, ...bars.map((bar) => Number(bar.dataset.barValue) || 0));
      bars.forEach((bar) => {
        const value = Number(bar.dataset.barValue) || 0;
        bar.style.width = `${(value / peak) * 100}%`;
        const number = bar.closest('.rr-game-visual__bar-row')?.querySelector('strong');
        if (number) number.textContent = value.toLocaleString('en-GB');
      });
    });

    visual.addEventListener('click', (event) => {
      const choice = event.target.closest('[data-visual-choice]');
      if (choice && visual.contains(choice)) {
        const key = choice.dataset.visualChoice;
        visual.querySelectorAll('[data-visual-choice]').forEach((button, index) => {
          const active = button.dataset.visualChoice === key;
          button.setAttribute('aria-pressed', String(active));
          if (active) visual.dataset.activeIndex = String(index);
        });
        visual.querySelectorAll('[data-visual-panel]').forEach((panel) => {
          panel.hidden = panel.dataset.visualPanel !== key;
        });
        return;
      }

      const reveal = event.target.closest('[data-reveal-action]');
      if (!reveal || !visual.contains(reveal)) return;
      const opened = reveal.dataset.revealAction === 'reveal';
      visual.querySelectorAll('[data-map-cell]').forEach((cell) => {
        cell.classList.toggle('is-revealed', opened || cell.dataset.initiallyVisible === 'true');
        cell.classList.toggle('is-gate', !opened && Boolean(cell.dataset.revealedLabel));
        cell.textContent = opened && cell.dataset.revealedLabel ? cell.dataset.revealedLabel : cell.dataset.initialLabel;
      });
      const note = visual.querySelector('[data-reveal-note]');
      if (note) note.textContent = opened ? note.dataset.revealedNote : note.dataset.initialNote;
    });
  });
})();
