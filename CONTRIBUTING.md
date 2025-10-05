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
editlink: /CONTRIBUTING.md
---

Thank you for your interest in contributing to RetroReversing! This guide explains some of the formatting guidelines and some of the features you can use to make the posts on the page more engaging.

# Site Princpiles
The following are the main principles of the site and can help decide not only how to write the posts but also if content is applicable to this site or would be better on a different wiki.

## Audience
The target audience for the site are technically literate readers who likely already know how to program with modern programming languages but may be beginners when it comes to reverse engineering or programming in older languages and environments such as DOS. Bare this in mind when writing the posts and try to reference any sources to back up claims. 

## The Content
The content of the site is specifically on the **development process** and **technology** of video games from the **1980s** until around **2010**, with reverse engineering a core aspect of the site due to it being the cornerstone of **digital archeology**.

### Types of content we want
This can include:
* Delving deep into a specific game or game engine - looking at the game files and decompiling the executable code
* General articles about a piece of software and its use in retro game development - e.g 3D Studio Max, Deluxe Paint, Software Development Kits
* Articles about the hardware used to develop games - e.g console development kits, arcade hardware, cheat devices and even how the retail hardware works
* Tutorials on reverse engineering or writing emulators
* Research Material related to the Game Industry - e.g Content of Games Industry Conferences, programming/software books, game industry magazines or even just game magazines from the past that contain interviews with game developers.

### Types of content we don't want
We don't want to duplicate the content of other sites, we want to contribute to them where possible, we specifically focus on the more technical aspect of retro game development, there may be a better home for certain content.

Although there are plenty of exceptions to these rules the kind of content we are trying to avoid having on this site:
* Content about cut content in games - Please contribute to the excellent [The Cutting Room Floor](https://tcrf.net/The_Cutting_Room_Floor) and then link where applicable instead

### Link to high quality website articles rather than duplicate
Please try to link out to other sites first that have high quality information on a particular topic rather than re-writing the same content on this site, content on this site either links together sources from multiple places on the web into a cohesive article or has content that is not available elsewhere on the net.

But please have at least a brief description of the page you are linking to and the content that it contains just before the reference so that readers know when clicking on it would be of benefit, the page here should still form a cohesive narrative without the reader having knowledge from the other pages, or if critical then tell the user to read before continuing.

### Reference when possible
We want to avoid spreading mis-information as much as possible, which can be tricky when looking into old software tooling as there can be contradicting information so please try to reference any sources so that they can be used to help the reader verify if information is correct or not. You can use Wikipedia as a source but keep it as a last resort only if there is no other websites that have the information.

---
## Formatting Guidlines
Posts are written in [GitHub Flavored Markdown](https://github.github.com/gfm/) but also have some additional Jekyll includes that can be used for more advanced components.

## Writing Style rules
For the writing style think of each article as a technical handbook with references, not blog post, some general rules are below:
* **Avoid over-explaining** - Introduce only the key concept first, then provide practical examples or lists.
* **Use short paragraphs** - Break up long text with additional elements such as images, subheadings, lists, code blocks or other features.
* **Avoid giant sentances** - Keep use of commas and semi-colons to a minimum, focus on short readble sentences, have newlines after sentances too to break them up.
* **Tone**: Technically detailed, slightly conversational, but not casual. Avoid corporate, sales, or overly enthusiastic tone. You may inject mild enthusiasm or analogies when it aids understanding, but always return to clear, factual language.
* **Non-linear order** - Never assume the reader will follow linear order, each section should be stand alone so they can just read the parts their are interested in.
* **Present then explain** - Present terminology as factual first, then justify or contextualize ("What is it?", then "Why is it useful?").
* **Encourage hands-on experimentation** - suggest trying tools, running commands, or inspecting files

### Character Rules
When copying and pasting between different programs the ASCII/UTF characters can sometimes be changed, we try to have consistent characters if possible:
* Never use the slanted “ character, instead use the standard " for quotes
* Don't use characters that are not on standard keyboards! 
* For dash always use "-" and never use "—" or emdash

### Lists Rules
Lists can be great for readability for situations where it makes sense but should not be over used, we mainly use unordered lists (markdown: `*`), only use ordered lists (markdown: `-`) if there is a reason to do so.

We have a preffered format for using lists where each list item has a short part in bold giving followed by a dash (-) then more information:
```markdown
First we have a short sentance giving content about the list:
* **item title is bold** - More information about the item
```

However if the list is too long (e.g items more than 10) then use a markdown table instead as we have code the runs on the site to allow markdown table searching etc, which is not useful for short lists but ideal for long tables.

### Table Rules
* NEVER use excessive spacing in markdown tables 
* Rows in Markdown tables do not need to start or end with with '|' as markdown handles this.

### Markdown Rules
* **Don't bold headings** - In Markdown Headings never use ** to make the text bold in H1-H5 as the CSS takes care of this for us.
* **Use HR before Major section** - Make sure to add a markdown HR (`---`)  when starting a new major section
* **Never use numbered lists** - Just use `*` for all unordered lists.
* **Short Inline code** - If the code is short it is wrapped with backticks (e.g. `eax, 0x00`).


## Referencing format
We use the footnote markdown format for references like so, if its a link make sure its a valid markdown link so its clickable:
```markdown
[^1]: [Reference Name](https://...)
```

## Linking to other RetroReversing pages
You don't need to reference posts from RetroReversing.com, instead just link to the relevant page with the handly include (the permalink needs to match the post exactly or it will not display):
```
{% include link-to-other-post.html post="/permalink-goes-here" %}
```

## Rules for Code Examples
For code that could be useful to run interactivly in the browser give the code example in typescript, otherwise use python for any scripts that would be run be the user on their computer.

Keep code examples in the standard markdown format so backticks with the language name to apply formatting for the language.

---
# Tips for making the pages more visually engaging and readable
The last thing we want are our pages to be boarding or a chore to read, we are writing about games it should be fun and visual, this section contains components you can use to help make sure the posts are not giant walls of text.

## For Sections about a specific game
When a section is about a specific video game, try to find an image of the box art e.g from **MobyGames** and use the format below to make it more visualy appealing as it includes a like to Moby for more information when clicking the caption:
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

This can save hosting all the images in this git repository and it also links back to **MobyGames** who's bandwidth we are using for the images.

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
