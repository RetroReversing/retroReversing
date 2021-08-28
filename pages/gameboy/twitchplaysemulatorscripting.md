---
layout: post
tags: 
- gameboy
- emulatorscripting
title: Create Twitch Plays Pokemon Emulator Script
thumbnail: /public/NintendoGameBoyThumb.png
youtube: "qQrQcyDZydY?time_continue=41"
image: https://img.youtube.com/vi/qQrQcyDZydY/maxresdefault.jpg
permalink: /twitchpokemonhack
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gameboy
    url: /gameboy
  - name: Create Twitch Plays Pokemon Emulator Script
    url: #
recommend: gameboy
editlink: /gameboy/twitchplaysemulatorscripting.md
---

Have you ever seen **Twitch Plays Pokemon** (TPP) and wondered how it actually works? How does typing comments in a twitch stream result in the player moving in the original Pokemon Games, how is the screen directly streaming to twitch 24/7? In this post we aim to provide a few answers to these questions and more.

If you have never seen TPP check it out live on twitch:
[TwitchPlaysPokemon - Twitch](https://www.twitch.tv/twitchplayspokemon)

---
# Python Brazil Keynote (Hacking a Gameboy with Python)
Sam Agnew who works at Twilio gave a keynote at the Python Brasil conference in 2012 discussing how to create a similar experience to TPP using Python!

The video starts of with introducing the speaker in Portuguese as the conference was hosted in Brazil, however if you don't understand Portuguese then don't worry the main content of the presentation is in English.

This contains:
  * How to script an emulator so that it accepts REST requests for player input 
  * How to use phone numbers to control REST requests
  * How to hook into Visual Boy Advance

---
# How did the Pokemon games on Nintendo 3DS work?
Back in 2014 TwitchPlaysPokemon was completing game after game and soon the next in line would be a 3DS Pokemon game, but without good 3DS emulation back then how exactly would TPP continue?

The answer is custom hardware created by a hacker called **dekuNukem** who modified a retail 3DS console, added a capture card and streamed the 3DS game directly to twitch for the next year! 

This hardware was named **3xtDS** and allows full control over all the buttons and even the touch screen over a standard USB interface.

This means that any code running on the host PC can control the 3DS and see the result via the capture card, so no custom code needs to be written for the 3DS CPU itself, so the 3DS does not need to be jailbroken.

You can see the hardware in action in the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/9PZrJH7Z8KE" title="3xtDS: A 3DS Streaming Console with External Control Interface" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In the video you can see that text commands can be sent directly to the device to control the game using the USB interface, very impressive!

--
# References
[^1]: [Im dekuNukem aka twitch_plays_3ds, Ask Me Anything - twitchplayspokemon](https://www.reddit.com/r/twitchplayspokemon/comments/75wzlj/im_dekunukem_aka_twitch_plays_3ds_ask_me_anything/)
