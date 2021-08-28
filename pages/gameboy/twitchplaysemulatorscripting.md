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
# Original Implementation
The original implementation of Twitch Plays Pokemon was developed in and was closed source (probably due to security concerns of having a twitch chat control your computer..). 

It was mainly implemented in python but a overlay was also developed with Javascript and the React Framework [^3].

So it consisted of a few main parts:
* Connection to twitch IRC chat (Python)
* Sending the button presses to the emulator (Python)
* Receiving emulator state from lua to the Javascript frontend overlay to display stats such as Pokemon health
* Streaming the overlay plus the emulator window to twitch (OBS and Chrome [^3])

In the original implementation it used the glob al keyboard event in the python win32 API like so:
```python
win32api.keybd_event(keymap[button], 0, 0, 0)
```
The downside of this is the window needs to be in focus to get the event, otherwise if the focus is changed it will start sending the input to other windows running in the OS, not ideal from a security standpoint.

This was later changed to directly interface with a Lua script running in the emulator that connects via HTTP, so the button presses go directly to the emulator and this also has a few advantages such as frame perfect timing.

According to the AMA (Ask Me Anything) thread on reddit with the creator it requires two servers, one to compress the video and the other to do everything else such as play the game and display the overlay. It would be interesting to find out what the video compression server is doing that couldn't be done with standard OBS on the same server.

---
# Python Brazil Keynote (Hacking a Gameboy with Python)
Sam Agnew who works at Twilio gave a keynote at the Python Brasil conference in 2012 discussing how to create a similar experience to TPP using Python!

The video starts of with introducing the speaker in Portuguese as the conference was hosted in Brazil, however if you don't understand Portuguese then don't worry the main content of the presentation is in English.

This contains:
  * How to script an emulator so that it accepts REST requests for player input 
  * How to use phone numbers to control REST requests
  * How to hook into Visual Boy Advance

The source code for everything covered in the Keynote is available on Github:
[sagnew/Twilio-IP-Messaging-Plays-Pokemon: A clone of the 2013 phenomenon "Twitch Plays Pokemon" using Twilio's new IP Messaging API.](https://github.com/sagnew/Twilio-IP-Messaging-Plays-Pokemon)

---
# How did the Pokemon games on Nintendo 3DS work?
Back in 2014 TwitchPlaysPokemon was completing game after game and soon the next in line would be a 3DS Pokemon game, but without good 3DS emulation back then how exactly would TPP continue?

The answer is custom hardware created by a hacker called **dekuNukem** who modified a retail 3DS console, added a capture card and streamed the 3DS game directly to twitch for the next year! [^1]

This hardware was named **3xtDS** and allows full control over all the buttons and even the touch screen over a standard USB interface [^2].

This means that any code running on the host PC can control the 3DS and see the result via the capture card, so no custom code needs to be written for the 3DS CPU itself, so the 3DS does not need to be jailbroken.

You can see the hardware in action in the video below:
<iframe width="560" height="315" src="https://www.youtube.com/embed/9PZrJH7Z8KE" title="3xtDS: A 3DS Streaming Console with External Control Interface" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can also see a close up of the device and hardware modifications in the Album on Imgur: [3xtDS - Imgur](https://imgur.com/a/ICxh5)

In the video you can see that text commands can be sent directly to the device to control the game using the USB interface, very impressive!

The source code is also available on Github if anyone has the necessary experience to create their own: [dekuNukem/3xtDS: 3DS Streaming Console with External Control Interface.](https://github.com/dekuNukem/3xtDS)

---
# Headless Streaming
When I first heard about Twitch Plays Pokemon and other similar projects I had presumed it was running a script which streams the emulator screen directly to twitch. However the more I look into it, it seems they all are running standard PCs with a GUI such as OBS for streaming.

This was a little disappointing as it would be nice to have some sort of container (such as a docker image) that could be deployed to a base server (or "the cloud") with minimal overhead.

So it begs the question, is it possible to create a completely headless (No GUI) version of TPP so its easy to host a very lightweigt version on fairly cheap hosting solutions?

So Twitch receives its streams in the **Real-Time Messaging Protocol** (RTMP) so if we can send data directly using this protocol from an emulator we could in theory cut out the middle man and not require a GUI desktop environment running on the server.

One solution could be using the **ffmpeg** command line interface, but the question is how exactly do we combine that with the output of our emulator...

To run a test stream from ffmpeg to twitch you can use the following command after adding your own stream key to it:
```bash
ffmpeg -re \
-f lavfi -i testsrc2=size=960x540 \
-f lavfi -i aevalsrc="sin(0*2*PI*t)" \
-vcodec libx264 \
-r 30 -g 30 \
-preset fast -vb 3000k -pix_fmt rgb24 \
-pix_fmt yuv420p \
-f flv \
rtmp://live-fra.twitch.tv/app/STREAMKEY
```

---
# References
[^1]: [Im dekuNukem aka twitch_plays_3ds, Ask Me Anything - twitchplayspokemon](https://www.reddit.com/r/twitchplayspokemon/comments/75wzlj/im_dekunukem_aka_twitch_plays_3ds_ask_me_anything/)
[^2]: [Say hello to 3xtDS, a device that makes TPP XY, αSapphire, ΩRuby, or any 3DS game a reality! : twitchplayspokemon](https://www.reddit.com/r/twitchplayspokemon/comments/255257/say_hello_to_3xtds_a_device_that_makes_tpp_xy/)
[^3]: [I am the creator of Twitch Plays Pokemon, AMA! : pokemon](https://www.reddit.com/r/pokemon/comments/5tlshm/i_am_the_creator_of_twitch_plays_pokemon_ama/ddnfda8/)
