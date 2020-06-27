---
layout: post
tags: 
- tools
title: Diaphora - Binary Executable Difference Tool
image: https://img.youtube.com/vi/dAwXrUKaUsw/0.jpg
videocarousel:
  - title: Diaphora
    image: https://img.youtube.com/vi/dAwXrUKaUsw/0.jpg
    youtube: 'dAwXrUKaUsw'
thumbnail: /public/consoles/Nintendo 64.png
permalink: /Diaphora
breadcrumbs:
  - name: Home
    url: /
  - name: Tools
    url: /tools
  - name: Diaphora - Binary Executable Difference Tool
    url: #
recommend: tools
editlink: /tools/Diaphora.md
---

# Introduction to Diaphora
Diaphora is a tool that can plugin to a disassembler such as Radare2 or IDA Pro that gives the ability to DIFF two different executables.

This has a number of advantages for reverse engineering:
1. Move symbols such as function names from a unstripped executable to a stripped executable
2. Move symbols from an older version of an executable to a newer version
3. View the changes made in a newer version of an executable

So for example this can be very useful for comparing a beta build of a game that contains symbols with a retail version of a game that is stripped of symbols.

It can also be interesting to see what bugs have been fixed between different versions of games and they can give hints as to how the game works, especially useful if you also have the release Notes.

# Installing Diaphora

# Using Diaphora
