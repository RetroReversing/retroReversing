---
layout: post
permalink: /Android
title: Android
breadcrumbs:
  - name: Home
    url: /
  - name: Android
    url:
editlink: ../categories/consoles/Android.md
recommend:
  - android
  - introduction
_image: /public/images/Android.jpg
_twitterimage: https://www.retroreversing.com/public/images/Android.jpg
tags:
  - android
updatedAt: '2026-11-18'
---

# Reverse Engineering Android Games
An Android game's APK is a ZIP archive, but its code and data are not all in one place. `classes.dex` holds managed bytecode, `lib/` can hold native `.so` libraries for different processor architectures, and `assets/` contains files the game reads through Android's asset manager [^1]. The package layout gives you a useful first question: is the behavior you want to understand in DEX, native code, or game data?

---
## Where is the game code in an APK?
The [Android APK structure guide](https://developer.android.com/topic/performance/reduce-apk-size#understand_the_apk_structure) maps `classes.dex`, `lib/`, `assets/`, `resources.arsc` and the binary `AndroidManifest.xml` [^1]. `classes.dex` is the right starting point for Java or Kotlin code compiled to DEX. Native game code can instead be in `lib/<abi>/lib<name>.so`; the [Android NDK ABI guide](https://developer.android.com/ndk/guides/abis) explains why an APK can contain several builds of the same library [^2]. A Java decompiler will not reveal the instructions in those `.so` files.

For older large games distributed through Google Play, the APK may be only part of the release. Google's [APK expansion-file guide](https://developer.android.com/google/play/expansion-files) describes `main` and `patch` OBB files stored under `Android/obb/<package-name>/`; an OBB can contain data in a format chosen by the developer [^3]. Check for these files before concluding that art, audio or levels are absent from an APK. This is a legacy APK distribution scheme; [app bundles](https://developer.android.com/guide/app-bundle/app-bundle-format) can instead deliver split APKs and separate asset packs [^4].

---
## Tools for inspecting code and packages
Start with the package layout, then choose a tool for the code or metadata you need.

### How can you read DEX code?
[JADX](https://github.com/skylot/jadx) decompiles DEX bytecode into Java-like source and offers command-line and graphical interfaces. Its search and cross-reference views help trace calls across an APK; its name-renaming options can make obfuscated code easier to navigate, but cannot recover original source names without a mapping [^5].

{% include link-to-other-site.html url="https://github.com/skylot/jadx" description="Decompile DEX code and trace classes and calls in a graphical interface." image="https://opengraph.githubassets.com/1/skylot/jadx" title="skylot/jadx: Dex to Java decompiler" %}

### jadx-magic-strings Plugin
[0rShemesh's jadx-magic-strings plugin](https://github.com/0rShemesh/jadx-magic-strings) extracts method names, class references and source-file paths left in DEX string constants. Those clues can help name code that JADX otherwise shows with short obfuscated identifiers [^6].

{% include link-to-other-site.html url="https://github.com/0rShemesh/jadx-magic-strings" description="Find source paths, class references and method-name clues in DEX strings." image="https://opengraph.githubassets.com/1/0rShemesh/jadx-magic-strings" title="jadx-magic-strings: JADX plugin for extracting metadata from strings" %}

### How can you inspect package metadata?
Google's [apkanalyzer reference](https://developer.android.com/tools/apkanalyzer) lists commands for the manifest, DEX classes, resources and files inside an APK [^7]. It is useful when you need to identify a package and its entry points before opening code in a decompiler.

[apk-info](https://github.com/delvinru/apk-info) is a Rust parser with Python bindings. Its README documents main-activity and minimum-SDK extraction, binary XML and resource parsing, and APK signature schemes including v1, v2, v3 and v3.1 [^8].

{% include link-to-other-site.html url="https://github.com/delvinru/apk-info" description="Inspect an APK's metadata, binary XML, resources and signing schemes." image="https://opengraph.githubassets.com/1/delvinru/apk-info" title="delvinru/apk-info: APK full-featured parser" %}

---
# Magazine Interviews
The magazine index collects developer interviews tagged for this system across all indexed magazines.

{% include interview-table.html platform="Android" %}

---
# References
[^1]: [Android Developers, Understand the APK structure](https://developer.android.com/topic/performance/reduce-apk-size#understand_the_apk_structure).
[^2]: [Android Developers, Android ABIs](https://developer.android.com/ndk/guides/abis), native-library paths and architecture selection.
[^3]: [Android Developers, APK Expansion Files](https://developer.android.com/google/play/expansion-files), file naming and storage location.
[^4]: [Android Developers, The Android App Bundle format](https://developer.android.com/guide/app-bundle/app-bundle-format), split APKs and asset packs.
[^5]: [skylot, JADX](https://github.com/skylot/jadx), decompiler features and name-mapping options.
[^6]: [0rShemesh, jadx-magic-strings](https://github.com/0rShemesh/jadx-magic-strings), extracted string clues.
[^7]: [Android Developers, apkanalyzer](https://developer.android.com/tools/apkanalyzer), APK inspection commands.
[^8]: [delvinru, apk-info](https://github.com/delvinru/apk-info), parser capabilities and signing-scheme list.
