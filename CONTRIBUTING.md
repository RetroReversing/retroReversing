---
layout: post
hidden: true
title: Guide to contributing to RetroReversing
permalink: /contributing
breadcrumbs:
  - name: Home
    url: /
  - name: Contributing to RetroReversing
    url: /contributing
recommend: 
  - introduction
editlink: ../../CONTRIBUTING.md
---

Thank you for your interest in contributing to RetroReversing! This guide explains some of the formatting guidelines and features you can use to make the posts on the page more engaging.

# Site Principles
The following are the main principles of the site and can help decide not only how to write the posts but also if content is applicable to this site or would be better suited to a different wiki.

## Audience
The target audience for the site are technically literate readers who likely already know how to program with modern programming languages but may be beginners when it comes to reverse engineering or programming in older languages and environments such as DOS. Bear this in mind when writing posts and try to reference any sources to back up claims. 

## The Content
The content of the site focuses on the **development process** and **technology** of video games from the **1980s** until around **2010**, with reverse engineering as a core aspect of the site, being the cornerstone of **digital archaeology**.

### Types of content we want
This can include:
* Delving deep into a specific game or game engine - looking at the game files and decompiling the executable code
* General articles about a piece of software and its use in retro game development - e.g. 3D Studio Max, Deluxe Paint, Software Development Kits
* Articles about the hardware used to develop games - e.g. console development kits, arcade hardware, cheat devices, and even how retail hardware works
* Tutorials on reverse engineering or writing emulators
* Research material related to the game industry - e.g. content of game industry conferences, programming/software books, game industry magazines, or even just game magazines from the past that contain interviews with game developers

### Types of content we don't want
We don't want to duplicate the content of other sites; we aim to contribute to them where possible. We specifically focus on the more technical aspects of retro game development - there may be a better home for certain content.

Although there are exceptions to these rules, the kind of content we aim to avoid on this site includes:
* Content about cut content in games - please contribute to the excellent [The Cutting Room Floor](https://tcrf.net/The_Cutting_Room_Floor) and then link where applicable instead

### Link to high-quality website articles rather than duplicate
Please try to link out to other sites that have high-quality information on a particular topic rather than rewriting the same content here. Content on this site should either link together sources from multiple places on the web into a cohesive article or include content not available elsewhere online.

However, please provide at least a brief description of the page you are linking to and its content before the reference so readers understand the relevance. The page here should still form a cohesive narrative even without the reader following the external links. If an external page is critical, tell the user to read it before continuing.

### Reference when possible
We want to avoid spreading misinformation as much as possible, which can be tricky when researching old software tools since there can be conflicting information. Please reference sources so readers can verify whether the information is correct. You may use Wikipedia as a source but only as a last resort if no other websites have the information.

---
## Formatting Guidelines
Posts are written in [GitHub Flavored Markdown](https://github.github.com/gfm/) but also support additional Jekyll includes that can be used for more advanced components.

## Writing Style Rules
For the writing style, think of each article as a technical handbook with references, not a blog post. Some general rules are below:
* **Avoid over-explaining** - Introduce only the key concept first, then provide practical examples or lists.
* **Use short paragraphs** - Break up long text with additional elements such as images, subheadings, lists, code blocks, or other features.
* **Avoid giant sentences** - Keep use of commas and semicolons to a minimum. Focus on short, readable sentences. Add newlines after sentences to break them up.
* **Tone**: Technically detailed, slightly conversational, but not casual. Avoid corporate, sales, or overly enthusiastic tones. You may include mild enthusiasm or analogies when they aid understanding but always return to clear, factual language.
* **Non-linear order** - Never assume the reader will follow a linear order. Each section should be standalone so they can read only the parts they are interested in.
* **Present then explain** - Present terminology as factual first, then justify or contextualize ("What is it?" then "Why is it useful?").
* **Encourage hands-on experimentation** - Suggest trying tools, running commands, or inspecting files.

### Character Rules
When copying and pasting between programs, ASCII/UTF characters can sometimes change. We try to maintain consistent characters:
* Never use the slanted “ character; instead use the standard " for quotes.
* Don't use characters that are not on standard keyboards. 
* For dashes, always use `-` and never `—` (em dash).

### List Rules
Lists improve readability when used appropriately but should not be overused. We mainly use unordered lists (Markdown: `*`); only use ordered lists (Markdown: `-`) if there is a specific reason to do so.

We have a preferred format for lists where each list item has a short bold part followed by a dash (-) and more information:
```markdown
First we have a short sentence introducing the list:
* **Item title in bold** - More information about the item
````

However, if the list is too long (e.g. more than 10 items), use a Markdown table instead. The site supports searching within Markdown tables, which is not useful for short lists but ideal for long ones.

### Table Rules

* NEVER use excessive spacing in Markdown tables.
* Rows in Markdown tables do not need to start or end with '|' as Markdown handles this automatically.

### Markdown Rules

* **Don't bold headings** - In Markdown, never use ** to make the text bold in H1–H5 headings, as CSS handles this.
* **Use HR before major sections** - Add a Markdown HR (`---`) when starting a new major section.
* **Never use numbered lists** - Just use `*` for all unordered lists.
* **Short inline code** - If the code is short, wrap it with backticks (e.g. `eax, 0x00`).

## Referencing Format

We use the footnote Markdown format for references. If it's a link, ensure it's a valid Markdown link so it's clickable:

```markdown
[^1]: [Reference Name](https://...)
```

## Linking to other RetroReversing pages

You don't need to reference posts from RetroReversing.com. Instead, just link to the relevant page using the handy include (the permalink must match the post exactly or it will not display):

```
{% include link-to-other-post.html post="/permalink-goes-here" %}
```

## Rules for Code Examples

For code that could be useful to run interactively in the browser, provide the example in TypeScript. Otherwise, use Python for any scripts intended to run locally.

Keep code examples in the standard Markdown format, using backticks with the language name to apply syntax highlighting.

---

# Tips for making the pages more visually engaging and readable

The last thing we want is for our pages to be boring or a chore to read. We are writing about games so it should be fun and visual! This section lists components you can use to ensure posts are not giant walls of text.

## For sections about a specific game

When a section is about a specific video game, try to find an image of the box art (e.g. from **MobyGames**) and use the format below to make it more visually appealing. It includes a link to MobyGames for more information when clicking the caption:

```
## Section related to a Game
<figure>
  <img src="https://www.mobygames.com/images/covers/l/84474-k-c-munchkin-odyssey-2-front-cover.jpg" alt="K.C. Munchkin! Odyssey 2 Cover">
  <figcaption>
    <a href="https://www.mobygames.com/game/27443/kc-munchkin/">K.C. Munchkin! (1981) - Odyssey 2</a>
  </figcaption>
</figure>
Text for the section...
```

This saves hosting all the images in this Git repository and links back to **MobyGames**, whose bandwidth we are using for the images.

---
# Technical implementation
This section is for lower level details about how some of the features on the site work.

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
