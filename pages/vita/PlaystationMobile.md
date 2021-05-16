---
layout: post
tags:
- sony
- vita
- android
title: Playstation Mobile (Suite)
thumbnail: /public/consoles/Sony PSVita.png
image: /public/consoles/Sony PSVita.png
permalink: /playstation-mobile/
breadcrumbs:
  - name: Home
    url: /
  - name: Playstation Vita
    url: /vita
  - name: Sony Playstation Mobile (PSM)
    url: #
recommend: vita
editlink: /vita/PlaystationMobile.md
---

Playstation Mobile was an environment for PSTV, Vita and select Android devices based on the Mono Framework. It has its own specific App Store and all games were required to be compiled with a specific Software Development Kit known as the PSM SDK. Most games were written using C# but any .NET compatible programming language could technically be used to develop games for the platform.

# Supported Devices
It wasn't just Sony devices that supported Playstation Mobile Apps, they allowed third party devices to become **Playstation certified** for a fee which granted users access to a new App store called the **PS Store**.

## The Sony Ericsson Xperia Play
In this video from Modern Vintage gamer he takes us through a brief history of mobile phone game console hybrids and then gives an in-depth look at the Sony Ericsson Xperia Play, it is well worth a watch:
<iframe width="560" height="315" src="https://www.youtube.com/embed/BGpt8E3YmNw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

As you can see from the video the huge advantage of the Xperia Play was the ability to play Playstation One games using an official Sony emulator developed for the Android device.

The main limitation of the Xperia Play was that it couldn't play PSP games, most likely due to not having enough hardware power to emulate the PSPs hardware.

---
# Playstation Mobile Environment
Instead of using an existing App Store such as Google's Play store, Sony wanted its own completely separate environment all the way down to how applications were compiled (for .NET rather than Java).

## PS Store - Playstation Mobile App Store
The PSM App Store was yet android Android App Store but only officially available for Playstation certified devices.

The Community also managed to get the PSM app store to load on other non-certified android devices [^1].

## PSM Runtime
Similar to how Java applications require the Java Runtime Environment, Playstation Mobile is based on the open source .net environment known as Mono. So in order to run Playstation Mobile games a **PSM Runtime** needs to be installed to execute any games compiled with the PSM SDK.

This also makes it easier to decompile Playstation Mobile games because .net decompilers can pretty much convert any compiled .net executable back into c# source code (minus all the source code comments that get stripped during compilation).

The PSM Runtime also has some DRM (PSMDRM) to help prevent piracy of Playstation Mobile games [^2].

## Unity Runtime for Playstation Mobile
The Game Engine Unity officially provided an additional Runtime package on top of PSM to allow Unity games to be developed for the platform [^3].

---
# Playstation Mobile Development
Development of Playstation Mobile titles was different compared to Vita or PSP games, it has its own SDK that was specifically tailored towards Indie game developers.

## PlayStation Mobile GameJam - GDC 2013 Edition
At the Game Developers Conference (GDC) 2013, Sony hosted a Game Jam to create a game for the Playstation Mobile platform using the PSM SDK (C# Mono). 
You can see the highlights of this in the official video by Sony:
<iframe width="560" height="315" src="https://www.youtube.com/embed/wAWba0u85r4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## PSM Software Development Kit
There was a separate SDK specifically for Playstation Mobile Applications based on the Mono compiler toolchain with additional Sony provided libraries. The SDK was a free download that allowed indie game developers to write smaller C# based games that didn't have full access to the device hardware. This is much cheaper compared to the standard Vita SDK which was expensive and required development hardware to use. Also as Mono/.Net is platform independent it allowed the games to run on a variety of devices rather than be natively compiled for a single device.

### PSM Studio IDE
PSM Studio IDE is a fork of **MonoDevelop** a very popular editor for .NET based programming, especially C# development. This is a natural fit as PSM itself is based on the Mono environment.



---
# References
[^1]: [Install Playstation Mobile On Any Android Devices - YouTube](https://www.youtube.com/watch?v=dcVht_J386c)
[^2]: [PSM Runtime - Vita Dev Wiki](https://playstationdev.wiki/psvitadevwiki/index.php?title=PSM_Runtime)
[^3]: [Unity for PlayStation®Mobile - full release! - Unity Technologies Blog](https://blogs.unity3d.com/2014/06/20/unity-for-playstationmobile-full-release/)
