/**
 * Site Search Functionality
 * Uses Fuse.js for fuzzy search on static content
 */
(function() {
  'use strict';

  let searchIndex = null;
  let fuse = null;
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const searchResultsList = document.getElementById('search-results-list');

  // Initialize search when the page loads
  function initSearch() {
    // Fetch the search index
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        searchIndex = data;
        
        // Configure Fuse.js options
        const options = {
          keys: [
            { name: 'title', weight: 0.5 },
            { name: 'content', weight: 0.3 },
            { name: 'tags', weight: 0.2 }
          ],
          threshold: 0.4,
          includeScore: true,
          minMatchCharLength: 2,
          ignoreLocation: true
        };
        
        // Initialize Fuse with the search index
        fuse = new Fuse(searchIndex, options);
        
        console.log('Search index loaded with', searchIndex.length, 'posts');
      })
      .catch(error => {
        console.error('Error loading search index:', error);
      });
  }

  // Perform search
  function performSearch(query) {
    if (!fuse || !query || query.trim().length < 2) {
      searchResults.style.display = 'none';
      return;
    }

    const results = fuse.search(query);
    displayResults(results, query);
  }

  // Display search results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResultsList.innerHTML = '<div class="search-no-results"><p>No results found for "' + escapeHtml(query) + '"</p></div>';
      searchResults.style.display = 'block';
      return;
    }

    let html = '<div class="search-results-header"><h4>Search Results (' + results.length + ')</h4></div>';
    html += '<div class="search-results-items">';

    // Limit to top 10 results
    results.slice(0, 10).forEach(result => {
      const item = result.item;
      const score = result.score;
      
      html += '<div class="search-result-item">';
      
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
        item.tags.slice(0, 3).forEach(tag => {
          html += '<span class="badge badge-secondary">' + escapeHtml(tag) + '</span> ';
        });
        html += '</div>';
      }
      
      html += '</div>';
      html += '</div>';
    });

    html += '</div>';
    searchResultsList.innerHTML = html;
    searchResults.style.display = 'block';
  }

  // Escape HTML to prevent XSS
  function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Event listeners
  if (searchInput) {
    // Search as user types (with debounce)
    let searchTimeout;
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function() {
        performSearch(searchInput.value);
      }, 300);
    });

    // Prevent form submission
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch(searchInput.value);
      });
    }
  }

  // Initialize on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
  } else {
    initSearch();
  }

})();
