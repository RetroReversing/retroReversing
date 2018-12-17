---
layout: post
tags: 
- n64
title: Reversing Games with Mupen64+
image:  /public/consoles/Nintendo 64.png
thumbnail: /public/consoles/Nintendo 64.png
permalink: /ReversingWithMupen64
breadcrumbs:
  - name: Home
    url: /
  - name: N64
    url: /n64
  - name: Reversing Games with Mupen64+
    url: #
recommend: n64
editlink: /n64/ReversingWithMupen64.md
---

This post covers how to Modify the Mupen64+ emulator to make reverse engineering an N64 game a breeze!

# Input Overwrite
I like to show my own interface when certain buttons are pressed, so you need to modify `eventloop.c`:
Original:
```c
void event_sdl_keydown(int keysym, int keymod)
{
    int slot;
```
My modification
```c
void cdl_keyevents(int keysym, int keymod);

void event_sdl_keydown(int keysym, int keymod)
{
    int slot;
    cdl_keyevents(keysym, keymod);

```

This allows you to create your own function (in this case its called `cdl_keyevents`) which can handle the sdl input, here is an example:
```c
void cdl_keyevents(int keysym, int keymod) {
    printf("event_sdl_keydown %d %d \n", keysym, keymod);
    // S key
    if (keysym == 115) {
        printf("Lets save! \n");
        main_state_save(0, NULL);
    }
    // L Key
    if (keysym == 108) {
        printf("Lets load! \n");
        main_state_load(NULL);
    }
}
```
