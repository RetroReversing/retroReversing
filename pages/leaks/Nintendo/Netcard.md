---
layout: post
tags:
- gba
- leak
- pokemon
title: Netcard - Cancelled GBA Online Peripheral
category: 
- leak
- gba
permalink: /netcard
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Netcard - Cancelled GBA Online Peripheral
    url: #
recommend:
- gba
- leak
- pokemon
editlink: /leaks/Nintendo/Netcard.md
updatedAt: '2026-03-30'
---

The `netcard` folder from the Gigaleak contains the documentation, SDKs, and design specifications for an officially scoped but ultimately cancelled online gaming peripheral for the Game Boy Advance. 

{% capture netcard_body %}
The folder preserves `gba.tar` (a 2.3 GB toolkit archive) and `nc_stuff.7z`, but the most revealing contents are internal design documents written in late 2004 by BroadOn (the networking company Nintendo later partnered with heavily for the Wii). They outline a fully structured project to bring Pokémon online via a WAN (Wide Area Network).
{% endcapture %}

{% capture netcard_items %}
- NetworkingPokemonDesign.doc - Proposes the 3rd Floor of the Pokémon Center
- NetworkingPokemonRequirement.doc - Details the VNG matchmaking API
- OnlinePokemonProject_Design.ppt - Internal PowerPoint presentation
- PokemonExplained.doc - 2004 BroadOn overview of multiplayer modes
- gba.tar - Massive 2.3 GB GBA SDK/toolchain archive
- iqgba.tar - Secondary 532 MB archive
- nc_stuff.7z - Miscellaneous Netcard utilities
{% endcapture %}

{% include connected-folder-tree.html folder="netcard" path="netcard/" body=netcard_body version="Gigaleak import" content=netcard_items %}

---
## The 3rd Floor (3F) of the Pokémon Center
According to the `NetworkingPokemonDesign.doc` engineering document, developers planned to add a massive new **3F (Third Floor)** to all in-game Pokémon Centers, acting as the dedicated hub for global internet connectivity.

The design called for a **Communication Lobby** that merged the abilities of the wireless Union Room and link-cable Direct Corner into one global environment:

* **Matchmaking & Buddy Lists** - Players could search for specific global communication lobbies based on criteria or check a dedicated "Buddy List" to track exactly which lobby their friends were already sitting in.
* **Global Trade Board** - An asynchronous trading post where players could register Pokémon they wanted to trade with a visual Lobby Administrator. This heavily foreshadows the GTS (Global Trade Station) introduced a full hardware generation later in Pokémon Diamond & Pearl!
* **Multiplayer Battle Board** - A lobby management space specifically designated for coordinating 2 VS 2 online global battles. 

---
## The VNG Matchmaking API
Behind the scenes, `NetworkingPokemonRequirement.doc` details an underlying C-style networking and matchmaking API designated `VNG`. 

The documentation reveals an ambitious server-client topology utilizing functions like `VNG_RegisterGame()`, `VNG_SearchGames()`, and `VNG_GetBuddyStatus()`. Interestingly, it notes that a public communication lobby would be hosted by a "dedicated Pokemon server running on Linux at IDC," while private lobbies would function on a peer-to-peer level where the host game creates a Virtual Network (VN) dynamically.

---
## The iQue Multimedia Player Features
Digging into the `ncclient` C++ MFC source code itself reveals that the PC client wasn't just built for matchmaking—it was also an iTunes-style synchronization hub for turning the Game Boy Advance into a portable media center!

The `ncDlg.h` and `ncDlg.cpp` interface declarations expose explicit file management systems for three core non-gaming media types:
* **MUSIC:** The client includes an `MCIMP3` audio player implementation and specifically checks file types to sync `.mp3`, `.wav`, and `.raw` audio files onto the Netcard's storage.
* **PICTURE:** There are handlers to view and transfer image directories (`OnListPicture()`).
* **EBOOK:** Explicit buttons and lists exist (`OnListBook()`) for loading and reading text documents directly on the GBA screen.

The UI code tracks SD/Flash storage capacity using `m_freespace` and `m_cardspace` tracking variables, confirming the Netcard itself possessed internal memory meant to be managed over USB/link by this desktop client.

---
## The PC Client & 3D Colosseum Mode
Perhaps the most striking reveal in the `OnlinePokemonProject_Design.ppt` pitch deck and the `nc_stuff.7z` archive is that the GBA was planned to connect directly to a Windows PC Client managed by **iQue** (Nintendo's Chinese subsidiary).

The archive actually contains the active source code for the `ncclient` Windows application—a C++ MFC tool meant to bridge the GBA to the internet and parse Netcard firmware.

The 2004 design slides detail that while all controls and basic offline progression would remain on the Game Boy Advance, the `ncclient` PC software would be used to handle high-definition 3D rendering:

* **Online Tournament Mode** - Players would battle online using the GBA purely as a controller. But exactly like *Pokémon Stadium* or *Pokémon Colosseum*, the actual battle animations and 3D models would be rendered on the PC monitor! The documents specify this was to be built directly "based on Coliseum code and 3D model library."
* **Online Catching Events** - iQue planned dedicated "Online Pokemon Capture and Treasure Hunt" map events where "additional Pokemon / treasure shall be released on the network for capturing / hunting." This massive early "live-service" event would have been visually rendered entirely on the PC screen.

---
## Structural Offline Limitations
Because this Netcard infrastructure required constant server-side connectivity and validation, the design specified making radical changes to the vanilla *FireRed* & *LeafGreen* game mechanics whenever the Game Boy Advance was disconnected from the internet:

1. **Disabled Hatching System** - You could not hatch eggs offline.
2. **Restricted PC Storage** - Players could only access exactly 36 Pokémon in offline mode (6 in the party, and exactly 30 stored in a single PC box). The rest were likely intended to be securely stored online on the IDC Linux servers to prevent offline cheating modification.
3. **Disabled Local Wireless** - Despite keeping Link Cable trades functional, the standard wireless Union Room was actively disabled offline to push players exclusively towards the new 3F Online Communication Lobby.
