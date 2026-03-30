/**
 * Shared search index loader.
 *
 * Fetches /search.json once and creates a Fuse instance that any page can use.
 * Usage:
 *   window.RRSearch.ready(function(fuse) {
 *     var results = fuse.search('zelda');
 *   });
 */
(function () {
  'use strict';

  var callbacks = [];
  var fuse = null;
  var loaded = false;

  function notify() {
    callbacks.forEach(function (cb) { cb(fuse); });
    callbacks = [];
  }

  function load() {
    fetch('/search.json')
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.text();
      })
      .then(function (text) {
        var data = JSON.parse(text);
        fuse = new Fuse(data, {
          keys: [
            { name: 'title',   weight: 0.5 },
            { name: 'tags',    weight: 0.3 },
            { name: 'content', weight: 0.2 }
          ],
          threshold: 0.4,
          includeScore: true,
          minMatchCharLength: 2,
          ignoreLocation: true
        });
        loaded = true;
        notify();
      })
      .catch(function (err) {
        console.warn('RRSearch: could not load search index.', err);
        loaded = true; // don't leave callers hanging
        notify();
      });
  }

  window.RRSearch = {
    /**
     * Call cb(fuse) once the index is ready.
     * If already loaded, cb is called synchronously.
     */
    ready: function (cb) {
      if (loaded) {
        cb(fuse);
      } else {
        callbacks.push(cb);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
