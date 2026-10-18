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

    const meter = visual.querySelector('[data-meter-range]');
    if (meter) {
      const updateMeter = () => {
        const elapsed = Number(meter.value);
        const max = Number(meter.max);
        const warning = Number(meter.dataset.warningStart);
        const remaining = elapsed <= warning ? 100 : Math.max(0, Math.round(((max - elapsed) / (max - warning)) * 100));
        const note = visual.querySelector('[data-meter-note]');
        const phase = elapsed >= max ? 'danger' : elapsed > warning ? 'warning' : 'early';
        visual.querySelector('[data-meter-value]').textContent = `${elapsed} ${meter.dataset.unit}`;
        visual.querySelector('[data-meter-label]').textContent = note.dataset[`${phase}Label`];
        visual.querySelector('[data-meter-percent]').textContent = `${remaining}%`;
        visual.querySelector('[data-meter-fill]').style.width = `${remaining}%`;
        visual.querySelector('[data-meter-track]').setAttribute('aria-valuenow', String(remaining));
        visual.querySelector('[data-meter-track]').setAttribute('aria-hidden', String(phase === 'early'));
        note.textContent = note.dataset[`${phase}Copy`];
        visual.dataset.meterPhase = phase;
      };
      meter.addEventListener('input', updateMeter);
      updateMeter();
    }

    const collection = [...visual.querySelectorAll('[data-collection-bit]')];
    const updateCollection = () => {
      if (!collection.length) return;
      const chosen = collection.filter((button) => button.getAttribute('aria-pressed') === 'true');
      const mask = chosen.reduce((value, button) => value | Number(button.dataset.collectionBit), 0);
      const note = visual.querySelector('[data-collection-note]');
      visual.querySelector('[data-collection-count]').textContent = `${chosen.length} / ${collection.length}`;
      visual.querySelector('[data-collection-mask]').textContent = `0x${mask.toString(16).padStart(2, '0').toUpperCase()}`;
      note.textContent = chosen.length === collection.length ? note.dataset.completeNote : note.dataset.initialNote;
    };
    updateCollection();

    const updateSun = (button) => {
      const mask = button?.dataset.sunMask;
      if (!mask) return;
      const points = [...visual.querySelectorAll('[data-sun-samples] i')];
      const scene = visual.querySelector('.rr-game-visual__occlusion');
      const focusIndex = Number(scene.dataset.focusIndex);
      const focusWeight = Number(scene.dataset.focusWeight) || 1;
      points.forEach((point, index) => point.classList.toggle('is-clear', mask[index] === '1'));
      const clearNeighbors = [...mask].reduce((sum, digit, index) => sum + (index === focusIndex ? 0 : Number(digit)), 0);
      const totalWeight = points.length - 1 + focusWeight;
      const visibility = (clearNeighbors + (mask[focusIndex] === '1' ? focusWeight : 0)) / totalWeight;
      visual.querySelector('[data-sun-result]').textContent = `${visibility.toFixed(1)} / 1.0`;
      visual.querySelector('.rr-game-visual__sun-disc').style.opacity = String(0.12 + visibility * 0.88);
      visual.dataset.sunState = button.dataset.visualChoice;
    };
    updateSun(visual.querySelector('[data-sun-mask]'));

    visual.addEventListener('click', (event) => {
      const piece = event.target.closest('[data-collection-bit]');
      if (piece && visual.contains(piece)) {
        piece.setAttribute('aria-pressed', String(piece.getAttribute('aria-pressed') !== 'true'));
        updateCollection();
        return;
      }
      const collectionReset = event.target.closest('[data-collection-reset]');
      if (collectionReset && visual.contains(collectionReset)) {
        collection.forEach((button) => button.setAttribute('aria-pressed', 'false'));
        updateCollection();
        return;
      }
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
        updateSun(choice);
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
