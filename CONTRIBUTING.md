---
layout: post
hidden: true
title: Post
permalink: /contributing
breadcrumbs:
  - name: Home
    url: /
  - name: Contributing to RetroReversing
    url: /contributing
recommend: 
  - introduction
editlink: /CONTRIBUTING.md
---

# Contributing to RetroReversing

Thank you for your interest in contributing to RetroReversing! This guide explains two important features—**Lazy Loading** and **Lightbox**—so you can use them correctly and know where to look if there are issues.

---

## 📷 Image Lazy Loading

To improve performance, this site uses a custom JavaScript-based lazy loading system for images.
**Lazy loading** ensures that images are only loaded when they are about to enter the viewport, reducing initial page load time.

### How it works

- Any `<img>` element with the class `lazy-load` and a `data-image-full` attribute will be lazy loaded.
- The `src` attribute is set dynamically by JavaScript when the image is about to come into view.
- The code for this functionality is in:
  **`public/js/main.js`**
  (See the `lazyLoad()` and `isInView()` functions.)

### How to use

```html
<img class="lazy-load" data-image-full="/images/highres.jpg" alt="Description">
```
- You may set a low-res or placeholder `src` if desired, or leave it blank.
- When the image scrolls into view, the script will set `src` to the value of `data-image-full`.

### Where it is used

- Home page cards (`_includes/home-card.html`)
- Post and site link includes (`_includes/link-to-other-post.html`, `_includes/link-to-other-site.html`)
- Placeholder images (`_includes/placeholder-post-image.html`)
- Directly in markdown files (e.g., `categories/misc/Books.md`)

### Troubleshooting

- If images are not loading as expected, check that:
  - The image has the `lazy-load` class.
  - The `data-image-full` attribute is set to a valid image URL.
  - The JavaScript in `public/js/main.js` is being loaded and there are no JS errors in the console.

---

## 🖼️ Lightbox Gallery

The site uses a jQuery-based lightbox plugin (`public/js/lightbox.js`) to display images in a modal overlay with optional gallery navigation.

### How it works

- Any image wrapped in an `<a>` tag with a `data-lightbox` attribute will trigger the lightbox when clicked.
- By default, all images with the class `postImage` are automatically wrapped in such a link by a script in `_includes/footer.html`.
- The lightbox supports galleries: images with the same `gallery` value in their `data-lightbox` attribute are grouped together for navigation.

### How to use

**Automatic (for post images):**
```html
<img class="postImage" src="/images/example.jpg" alt="Example">
```
- These will be auto-wrapped and grouped in a gallery.

**Manual (for custom galleries):**
```html
<a href="/images/photo1.jpg" data-lightbox='{"gallery": "holiday2024"}'>
  <img src="/images/thumb1.jpg" alt="Photo 1">
</a>
<a href="/images/photo2.jpg" data-lightbox='{"gallery": "holiday2024"}'>
  <img src="/images/thumb2.jpg" alt="Photo 2">
</a>
```

### Where it is set up

- **Plugin code:** `public/js/lightbox.js`
- **Initialization and auto-wrapping:** `_includes/footer.html`

### Troubleshooting

- If the lightbox is not working:
  - Ensure jQuery and `public/js/lightbox.js` are loaded.
  - Check that images are either auto-wrapped (by having the correct class/selector) or manually wrapped in a link with `data-lightbox`.
  - For gallery navigation, ensure all images in the group have the same `gallery` value in their `data-lightbox` attribute.

---

**If you encounter issues with either feature, start by checking the relevant files listed above.**
For further help, open an issue or contact the maintainers.
