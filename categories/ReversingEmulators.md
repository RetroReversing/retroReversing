---
layout: post
tags: 
- reversingEmulator
title: Reversing Emulators
thumbnail: /public/consoles/Sega Saturn.png
permalink: /Reversing-Emulators
breadcrumbs:
  - name: Home
    url: /
  - name: Reversing Emulators
    url: #
recommend: reversingEmulator
editlink: ../categories/ReversingEmulators.md
redirect_from:
  -  /reversingemulator
  -  /reversingEmulator
image: /public/images/reversingEmulator/Reversing emulators.jpg
twitterimage: https://www.retroreversing.com/public/images/reversingEmulator/Reversing emulators.jpg
updatedAt: '2020-10-17'
---

# What is a Reversing Emulator?
To put it simply a Reversing emulator is a standard emulator that has been modified to add additional debugging and tracing functionality useful for reverse engineers.

# Why use a Reversing Emulator?
There are a few use cases where you would want to use a reversing emulator rather than a standard emulator, these include:
* Cheat creation (e.g Game genie/Action replay codes)
* Creating Tool-Assisted-Superplays (TASing)
* Game Modding (adding new content to existing games)
* Full game reverse engineering (re-creating the source code of a game)
    * Porting games to other platforms
* Debugging glitches and other bugs in a game
* Learning how a feature in a game was implemented
* Asset ripping (exporting images/sounds/models etc from a game)
* Re-mastering games with higher quality assets

---
# libRetroReversing
In order to provide a consistent user experience and shared functionality across different console generations a new library was created to encapsulate common functionality.

The C/C++ library is called **libRetroReversing** due to it being based on **libRetro** and adding reverse engineering functionality to the libRetro cores.

Thus **libRetroReversing** enabled cores can run on any libRetro frontend such as RetroArch.

## Creating your own Reversing Emulator
If an existing Reversing Emulator does not exist for your favourite console you can follow our guide to create your own based on an existing libRetro core.

{% include link-to-other-post.html post="/create-reversing-emulator" description="For more information check out this post." %}

---
# Available Consoles
More and more consoles are becoming supported with the aim of most of the Sega/Nintendo/Sony LibRetro cores being supported by the end of 2021.

## Nintendo 64
{% include link-to-other-post.html post="/mupen64RE" description="For more information about the N64 Reversing emulator based on Mupen64 check out this post." %}

## Sega Saturn
{% include link-to-other-post.html post="/Sega-Saturn-Reversing-Emulator" description="For more information about the Sega Saturn emulator based on Beetle check out this post." %}

## Nintendo GameBoy (DMG & GBC)
{% include link-to-other-post.html post="/GameBoy-Reversing-Emulator" description="For more information about the Game Boy and Game Boy Color reversing emulator based on Sameboy check out this post." %}

## Pokemon Mini
{% include link-to-other-post.html post="//" description="For more information about the Pokemon Mini reversing emulator based on Pokemini check out this post." %}
