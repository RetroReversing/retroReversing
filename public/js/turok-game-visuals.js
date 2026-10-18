(() => {
  'use strict';
  const choose = (root, selector, key, value) => {
    root.querySelectorAll(selector).forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset[key] === value));
    });
  };
  const put = (root, selector, value) => {
    const node = root.querySelector(selector);
    if (node) node.textContent = value;
  };

  const audio = document.querySelector('[data-turok-audio]');
  if (audio) {
    const sets = {
      format: [['AIFF source', 4406], ['N64 VADPCM', 628]],
      duration: [['Under 0.5 s', 168], ['0.5-1 s', 991], ['1-2 s', 2942], ['2-5 s', 884], ['5 s or longer', 49]]
    };
    audio.addEventListener('click', (event) => {
      const button = event.target.closest('[data-audio-view]');
      if (!button || !audio.contains(button)) return;
      const view = button.dataset.audioView;
      choose(audio, '[data-audio-view]', 'audioView', view);
      const peak = Math.max(...sets[view].map((row) => row[1]));
      audio.querySelector('[data-audio-bars]').replaceChildren(...sets[view].map(([label, count]) => {
        const row = document.createElement('div');
        row.className = 'rr-turok-bars__row';
        const name = document.createElement('span'); name.textContent = label;
        const track = document.createElement('span'); track.className = 'rr-turok-bars__track';
        const bar = document.createElement('i'); bar.style.width = `${100 * count / peak}%`;
        track.append(bar);
        const number = document.createElement('strong'); number.textContent = count.toLocaleString('en-GB');
        row.append(name, track, number);
        return row;
      }));
    });
  }

  const boss = document.querySelector('[data-turok-boss]');
  if (boss) {
    const modes = {
      entrance: ['Protected entrance', 'The elevator idle and rage modes carry an invincibility flag while the encounter opens.', 'BF_INVINCIBLE | BF_ENTER_MODE'],
      hunt: ['Turn, run, bite', 'Running and turning modes track Turok. A separate run-bite animation calls its own attack routine.', 'BF_RUNNING_MODE | BF_HEAD_TRACK_TUROK'],
      fire: ['Flame sequence', 'Breath-fire setup leads into fire-in, looping, and fire-out modes. The table marks these with a flame flag.', 'BF_FLAME_MODE'],
      cave: ['The cave changes the moves', 'Cave modes include a stoop, look, bite, nose hit, rage, and tail slam.', 'TRex_Code_CaveAttack']
    };
    boss.addEventListener('click', (event) => {
      const button = event.target.closest('[data-boss]');
      if (!button || !boss.contains(button)) return;
      const mode = button.dataset.boss;
      choose(boss, '[data-boss]', 'boss', mode);
      boss.querySelector('.rr-turok-boss__scene').dataset.mode = mode;
      put(boss, '[data-boss-title]', modes[mode][0]);
      put(boss, '[data-boss-copy]', modes[mode][1]);
      put(boss, '[data-boss-code]', modes[mode][2]);
    });
  }

  const map = document.querySelector('[data-turok-map]');
  if (map) map.addEventListener('click', (event) => {
    const button = event.target.closest('[data-map-action]');
    if (!button || !map.contains(button)) return;
    const open = button.dataset.mapAction === 'gate';
    map.querySelectorAll('.rr-turok-map__grid span').forEach((room, index) => {
      room.classList.toggle('is-revealed', open || index < 2);
      room.classList.toggle('is-gate', index === 2 && !open);
      if (index === 2) room.innerHTML = open ? 'GATE<br>OPEN' : 'GATE<br>CLOSED';
    });
    put(map, '[data-map-status]', open ? 'With the open-door flag set, the reveal can pass into neighboring regions.' : 'The closed door keeps the next connected region hidden.');
  });

  const attract = document.querySelector('[data-turok-attract]');
  if (attract) {
    const beats = [
      ['Starting point', 'The header selects a warp and records how many frames the demo spans.', 'warp ID + total frames'],
      ['Stick changes', 'The X and Y axes have their own bit streams. A change is followed by a frame duration.', 'stick X / stick Y + time'],
      ['Jump held', 'Button bits reproduce a controller state; the duration says how long it persists.', 'R button + frame count'],
      ['Fire held', 'Playback reads the next packed button state, then advances by its stored duration.', 'Z trigger + frame count']
    ];
    attract.addEventListener('click', (event) => {
      const button = event.target.closest('[data-beat]');
      if (!button || !attract.contains(button)) return;
      const beat = button.dataset.beat;
      choose(attract, '[data-beat]', 'beat', beat);
      put(attract, '[data-attract-title]', beats[beat][0]);
      put(attract, '[data-attract-copy]', beats[beat][1]);
      put(attract, '[data-attract-code]', beats[beat][2]);
    });
  }

  const mechanisms = document.querySelector('[data-turok-mechanisms]');
  if (mechanisms) {
    const models = {
      platform: [['Triggered', 'Waits for delay', 'Moves away', 'Resets'], 'A collapsing platform changes its region, waits, moves to its destination, then returns after another timer.'],
      pressure: [['Starts', 'Waits for message', 'Plays action', 'Restarts'], 'The pressure-action routine tests its interactive message timer before it enters the active animation.'],
      portal: [['Triggered', 'Makes warp', 'Raises effect', 'Stops'], 'The portal routine makes its region a warp and ramps an effect value upward while active.']
    };
    mechanisms.addEventListener('click', (event) => {
      const button = event.target.closest('[data-mechanism]');
      if (!button || !mechanisms.contains(button)) return;
      const mode = button.dataset.mechanism;
      choose(mechanisms, '[data-mechanism]', 'mechanism', mode);
      mechanisms.querySelectorAll('[data-step]').forEach((node, index) => { node.textContent = models[mode][0][index]; });
      put(mechanisms, '[data-mechanism-copy]', models[mode][1]);
    });
  }

  const weapons = document.querySelector('[data-turok-weapons]');
  if (weapons) {
    const paths = {
      arrow: ['Tek Bow update', 'Explosive arrow', 'Two arrow swooshes'],
      chrono: ['Chronoscepter update', 'Chronoscepter particle', 'Two chrono swooshes'],
      rocket: ['Rocket update', 'Rocket particle', 'Rocket swoosh']
    };
    weapons.addEventListener('click', (event) => {
      const button = event.target.closest('[data-weapon]');
      if (!button || !weapons.contains(button)) return;
      const shot = button.dataset.weapon;
      choose(weapons, '[data-weapon]', 'weapon', shot);
      ['a', 'b', 'c'].forEach((part, index) => put(weapons, `[data-weapon-${part}]`, paths[shot][index]));
    });
  }

  const training = document.querySelector('[data-turok-training]');
  if (training) {
    const cards = {
      english: ['#ifdef ENGLISH', 'jumping', 'press the r\nbutton to jump.'],
      german: ['#ifdef GERMAN', 'springen', 'zum springen\nknopf r dr/cken.'],
      kanji: ['#ifdef KANJI', '2C 3D 27 35 27 29', '2C 3D 27 36 64\nE9 13 22 28 41 33 0F 27']
    };
    training.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language]');
      if (!button || !training.contains(button)) return;
      const language = button.dataset.language;
      choose(training, '[data-language]', 'language', language);
      put(training, '[data-training-branch]', cards[language][0]);
      put(training, '[data-training-title]', cards[language][1]);
      put(training, '[data-training-copy]', cards[language][2]);
      training.querySelector('.rr-turok-training__screen').dataset.language = language;
    });
  }
})();
