# Search Feature Documentation

## Overview
This document describes the static site search feature implemented for the RetroReversing GitHub Pages site.

## Implementation Details

The search feature is a client-side, static search implementation that allows users to search through all posts by title, content, and tags without requiring a backend server.

### Components

#### 1. Search Index (`search.json`)
- **Location**: `/search.json`
- **Purpose**: Jekyll-generated JSON file containing searchable content from all posts
- **Generated**: Automatically by Jekyll during site build
- **Content**: 
  - Post title
  - Post URL
  - Post content (stripped of HTML)
  - Post excerpt (first 50 words)
  - Tags
  - Thumbnail/image
  - Console category

#### 2. Search JavaScript (`public/js/search.js`)
- **Location**: `/public/js/search.js`
- **Library**: Uses [Fuse.js](https://fusejs.io/) v6.6.2 for fuzzy search
- **Features**:
  - Fuzzy search with configurable threshold
  - Weighted search (title: 50%, content: 30%, tags: 20%)
  - Debounced input (300ms delay)
  - Real-time results as user types
  - XSS protection via HTML escaping
  - Displays up to 10 results

#### 3. Search CSS (`public/css/search.css`)
- **Location**: `/public/css/search.css`
- **Purpose**: Styling for search bar and results
- **Features**:
  - Responsive design
  - Result cards with thumbnails
  - Tag badges
  - Mobile-optimized layout

#### 4. HTML Integration
- **Search Bar**: Added to `_includes/header.html`
  - Search icon in top-right corner
  - Toggle button to show/hide search bar
  - Input field with autocomplete disabled
  - Close button
  - Results display area

- **Dependencies**: Added to `_includes/footer.html`
  - Fuse.js library from CDN
  - search.js script

- **Styles**: Added to `_includes/head.html`
  - search.css stylesheet

## How It Works

1. **Page Load**:
   - When a page loads, `search.js` fetches `/search.json`
   - The search index is parsed and loaded into Fuse.js
   - Console logs the number of posts indexed

2. **User Interaction**:
   - User clicks the search icon (magnifying glass) in the top-right corner
   - Search bar slides down from the header
   - User types a search query
   - After 300ms of no typing (debounce), search is performed

3. **Search Execution**:
   - Query is sent to Fuse.js
   - Fuse.js performs fuzzy matching against:
     - Post titles (highest weight)
     - Post content
     - Post tags
   - Results are scored and sorted by relevance

4. **Results Display**:
   - Top 10 results are displayed below the search bar
   - Each result shows:
     - Thumbnail image (if available)
     - Post title (clickable link)
     - Excerpt (first 50 words)
     - Up to 3 tags
   - If no results found, displays "No results found" message

5. **Closing Search**:
   - User clicks the X button
   - Search bar slides up
   - Results are cleared

## Configuration

### Fuse.js Options
Located in `public/js/search.js`:

```javascript
const options = {
  keys: [
    { name: 'title', weight: 0.5 },      // 50% weight on title matches
    { name: 'content', weight: 0.3 },    // 30% weight on content matches
    { name: 'tags', weight: 0.2 }        // 20% weight on tag matches
  ],
  threshold: 0.4,                         // Lower = more strict matching
  includeScore: true,
  minMatchCharLength: 2,                  // Minimum 2 characters to search
  ignoreLocation: true                    // Search entire string, not just beginning
};
```

### Customization

To adjust search behavior:

1. **Change weights**: Modify the `weight` values in the `keys` array
2. **Stricter matching**: Decrease `threshold` (range: 0.0 to 1.0)
3. **Looser matching**: Increase `threshold`
4. **More results**: Change `results.slice(0, 10)` to higher number
5. **Debounce delay**: Modify `setTimeout` delay in search.js (currently 300ms)

## Browser Compatibility

- **Modern Browsers**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Requirements**: JavaScript enabled
- **Fallback**: None (search feature requires JavaScript)

## Performance

- **Initial Load**: ~50KB for Fuse.js library
- **Search Index**: Size depends on number of posts (~100-500KB typically)
- **Search Speed**: Near-instantaneous for <1000 posts
- **Memory**: Minimal impact (index held in memory)

## Testing

The search feature has been tested with:
- ✅ Searches by post title (e.g., "Nintendo")
- ✅ Searches by content keywords (e.g., "GDB")
- ✅ Searches by tags (e.g., "tutorial")
- ✅ Fuzzy matching (handles typos)
- ✅ Real-time results as typing
- ✅ No results scenario
- ✅ Toggle open/close functionality

## Future Enhancements

Potential improvements:
- Add search history (localStorage)
- Add filters (by console, by tag)
- Add keyboard shortcuts (Ctrl+K to open search)
- Add search analytics
- Add "did you mean" suggestions
- Highlight matching text in results

## Troubleshooting

### Search not working
1. Check browser console for errors
2. Verify `/search.json` is accessible
3. Verify Fuse.js CDN is loading
4. Check if JavaScript is enabled

### No results appearing
1. Check if `/search.json` has content
2. Verify Jekyll processed the search.json file correctly
3. Check browser console for JavaScript errors

### Search bar not appearing
1. Check if Font Awesome is loading (search icon uses FA)
2. Verify CSS files are loading
3. Check for JavaScript errors preventing toggle functionality
