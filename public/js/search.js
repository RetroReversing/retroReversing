/**
 * Site Search Functionality
 * Uses Fuse.js for fuzzy search on static content.
 * The Fuse index is shared via window.RRSearch (search-index.js).
 */
(function() {
  'use strict';

  let fuse = null;
  const desktopSearchForm = document.getElementById('desktop-search-form');
  const desktopSearchInput = document.getElementById('desktop-search-input');
  const desktopSearchSuggestions = document.getElementById('desktop-search-suggestions');
  const desktopSearchSuggestionsList = document.getElementById('desktop-search-suggestions-list');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchResultsList = document.getElementById('search-results-list');

  function getRelatedResultsUrl(query) {
    const normalized = query
      .trim()
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');

    return '/' + encodeURIComponent(normalized);
  }

  function whenSearchReady(callback, attemptsRemaining = 40) {
    if (window.RRSearch && typeof window.RRSearch.ready === 'function') {
      window.RRSearch.ready(callback);
      return;
    }

    if (attemptsRemaining <= 0) {
      console.warn('RRSearch is unavailable on this page.');
      return;
    }

    window.setTimeout(function() {
      whenSearchReady(callback, attemptsRemaining - 1);
    }, 50);
  }

  function initSearch() {
    whenSearchReady(function (fuseInstance) {
      fuse = fuseInstance;
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  const DEFAULT_SUGGESTION_IMAGE = '/public/images/RetroReversingLogoSmall.png';

  function getSuggestionImage(item) {
    return (item && item.image) ? item.image : DEFAULT_SUGGESTION_IMAGE;
  }

  function renderSuggestionItem(item) {
    let html = '<a href="' + escapeHtml(item.url) + '">';
    html += '<span class="navbar-search-suggestion-thumb">';
    html += '<img src="' + escapeHtml(getSuggestionImage(item)) + '" alt="" loading="lazy" onerror="this.src=\'' + DEFAULT_SUGGESTION_IMAGE + '\'">';
    html += '</span>';
    html += '<span class="navbar-search-suggestion-body">';
    html += '<span class="navbar-search-suggestion-title">' + escapeHtml(item.title) + '</span>';
    if (item.excerpt) {
      html += '<span class="navbar-search-suggestion-excerpt">' + escapeHtml(item.excerpt) + '</span>';
    }
    html += '</span></a>';
    return html;
  }

  function searchPosts(query, limit) {
    if (!fuse || !query || query.trim().length < 2) {
      return [];
    }

    return fuse.search(query, { limit: limit || 10 });
  }

  function renderFullResults(results, query) {
    if (!searchResults || !searchResultsList) return;

    if (results.length === 0) {
      searchResultsList.innerHTML = '<div class="search-no-results"><p>No results found for "' + escapeHtml(query) + '"</p></div>';
      searchResults.style.display = 'block';
      return;
    }

    let html = '<div class="search-results-header"><h4>Search Results (' + results.length + ')</h4></div>';
    html += '<div class="search-results-items">';

    results.slice(0, 10).forEach(function(result) {
      html += renderFullResultItem(result.item);
    });

    html += '</div>';
    searchResultsList.innerHTML = html;
    searchResults.style.display = 'block';
  }

  function renderFullResultItem(item) {
    let html = '<div class="search-result-item">';

    if (item.image) {
      html += '<div class="search-result-image">';
      html += '<img src="' + escapeHtml(item.image) + '" alt="' + escapeHtml(item.title) + '">';
      html += '</div>';
    }

    html += '<div class="search-result-content">';
    html += '<h5><a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + '</a></h5>';
    html += '<p>' + escapeHtml(item.excerpt) + '</p>';

    if (item.tags && item.tags.length > 0) {
      html += '<div class="search-result-tags">';
      item.tags.slice(0, 3).forEach(function(tag) {
        html += '<a href="/' + escapeHtml(tag) + '" class="badge badge-secondary">' + escapeHtml(tag) + '</a> ';
      });
      html += '</div>';
    }

    html += '</div></div>';
    return html;
  }

  function hideDesktopSuggestions() {
    if (!desktopSearchSuggestions || !desktopSearchInput) return;

    desktopSearchSuggestions.hidden = true;
    desktopSearchInput.setAttribute('aria-expanded', 'false');
    if (desktopSearchSuggestionsList) {
      desktopSearchSuggestionsList.innerHTML = '';
    }
  }

  function showDesktopSuggestions(results, query) {
    if (!desktopSearchSuggestions || !desktopSearchSuggestionsList || !desktopSearchInput) return;

    if (!query || query.trim().length < 2) {
      hideDesktopSuggestions();
      return;
    }

    if (results.length === 0) {
      desktopSearchSuggestionsList.innerHTML =
        '<li class="navbar-search-suggestion navbar-search-suggestion-empty" role="presentation">' +
          '<span>No results for "' + escapeHtml(query) + '"</span>' +
        '</li>';
      desktopSearchSuggestions.hidden = false;
      desktopSearchInput.setAttribute('aria-expanded', 'true');
      return;
    }

    let html = '';
    results.slice(0, 8).forEach(function(result, index) {
      const item = result.item;
      html += '<li class="navbar-search-suggestion" role="option" id="desktop-search-option-' + index + '">';
      html += renderSuggestionItem(item);
      html += '</li>';
    });

    html += '<li class="navbar-search-suggestion navbar-search-suggestion-more" role="presentation">';
    html += '<a href="' + escapeHtml(getRelatedResultsUrl(query)) + '">View all results for "' + escapeHtml(query) + '"</a>';
    html += '</li>';

    desktopSearchSuggestionsList.innerHTML = html;
    desktopSearchSuggestions.hidden = false;
    desktopSearchInput.setAttribute('aria-expanded', 'true');
  }

  function performOverlaySearch(query) {
    if (!searchResults) return;

    if (!query || query.trim().length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    renderFullResults(searchPosts(query, 10), query);
  }

  function performDesktopSearch(query) {
    showDesktopSuggestions(searchPosts(query, 8), query);
  }

  function syncSearchInputsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const query = (params.get('q') || '').trim();

    if (query && desktopSearchInput) {
      desktopSearchInput.value = query;
    }
  }

  if (searchInput) {
    let overlaySearchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(overlaySearchTimeout);
      overlaySearchTimeout = setTimeout(function() {
        performOverlaySearch(searchInput.value);
      }, 300);
    });

    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performOverlaySearch(searchInput.value);
      });
    }
  }

  if (desktopSearchForm && desktopSearchInput) {
    let desktopSearchTimeout;

    desktopSearchInput.addEventListener('input', function() {
      clearTimeout(desktopSearchTimeout);
      desktopSearchTimeout = setTimeout(function() {
        performDesktopSearch(desktopSearchInput.value);
      }, 200);
    });

    desktopSearchInput.addEventListener('focus', function() {
      if (desktopSearchInput.value.trim().length >= 2) {
        performDesktopSearch(desktopSearchInput.value);
      }
    });

    desktopSearchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        hideDesktopSuggestions();
        desktopSearchInput.blur();
      }
    });

    desktopSearchForm.addEventListener('submit', function (e) {
      const query = desktopSearchInput.value.trim();

      if (!query) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      hideDesktopSuggestions();
      window.location.href = getRelatedResultsUrl(query);
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.navbar-search-wrap')) {
        hideDesktopSuggestions();
      }
    });
  }

  initSearch();
  syncSearchInputsFromUrl();
})();
