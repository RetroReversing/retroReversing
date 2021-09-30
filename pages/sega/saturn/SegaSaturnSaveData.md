---
layout: post
tags:
- saturn
- sega
title: Sega Saturn Save Game Data
thumbnail: /public/consoles/Sega Saturn.png
image: /public/images/saturn/Sega Saturn Save RAM.jpg
twitterimage: https://www.retroreversing.com/public/images/saturn/Sega Saturn Save RAM.jpg
permalink: /sega-saturn-save-data/
breadcrumbs:
  - name: Home
    url: /
  - name: Sega Saturn
    url: /saturn
  - name: Sega Saturn Save Data
    url: #
recommend: saturn
updatedAt: '2021-09-28'
editlink: /sega/saturn/SegaSaturnSaveData.md
---

The Sega Saturn has multiple ways to persist game data across play throughs. This includes built in memory on the Saturn console itself and official and 3rd party cartridges that acted as memory cards.

Note that these are not the same as "Save States" that emulators produce as these are specifically written by the game developers to store certain data such as High scores or progress but Save States store the entire console memory.

# Saturn Save Data Storage Options

## Internal Saturn Memory
Since the Sega Saturn was CD-based it was not possible to add additional hardware to a specific game such as battery backed save files as was common on the Sega Mega Drive. 

Instead the Sega Saturn was one of the first consoles to have built in storage for game saves, although it was rather small at 32KB, it means that users didn't need to buy an external memory card if they just played a few games.

## External Cartridge Memory
Similar to other consoles such as the Nintendo 64 and Playstation, it was possible to buy official memory cards known as "Power Memory" from Sega which offered additional space for games to save their state.

These cartridges fit into the standard Saturn cartridge slot and offered up to 512KB of space for game saves!

Third party manufacturers such as Blaze and Datel also started to create their own save cartridges that could store as much as 1MB of game saves.

Third parties also bundles additional features in these cartridges such as Cheat Engines (Action Replay) and region unlocking.

{% include link-to-other-site.html url="https://segaretro.org/Saturn_third-party_memory_cartridges" description="You can find an excellent page on all the third party memory cartridges over at SegaRetro" image="https://segaretro.org/images/thumb/f/fc/MemoryCardBlazer_Saturn_Box_Front.jpg/265px-MemoryCardBlazer_Saturn_Box_Front.jpg" title="Saturn third-party memory cartridges"  %}

## Saturn Floppy Drive
If you have a Japanese console there is a third alternative to the above two options, the Saturn Floppy Drive! 

It supports up to 1.44MB of game save data which is many times more than the official cartridge memory and certainly more than the internal console RAM.

Unfortunately however, very few games supported the peripheral which limited its appeal.

{% include link-to-other-site.html url="https://segaretro.org/Saturn_Floppy_Drive" description="SegaRetro has an excellent page on the Saturn Floppy Drive" image="https://segaretro.org/images/9/9d/Saturn_HSS-0128.jpg" title="Saturn Floppy Drive - Sega Retro"  %}

## Optical Disk Emulators (ODEs)
A number of Sega Saturn ODEs allow for the backing up of save game data to SD card. This includes the Fenrir, MODE, and Satiator ODEs. 

## Netlink
The Sega Saturn Netlink is a 28.8k modem that plugs into the cartridge port of the Saturn. It allowed for the ability to e-mail game saves. 

---
# Backing up and Recovering Saves
One problem with Sega Saturn Save Data storage was that not all games supported saving to memory cartridges and management of the saves such as deletion and duplication was not easy.

Thankfully developers have created a few useful Homebrew tools to help manage game save data on the Sega Saturn. These are split into two different categories:
* Copy Saves from Saturn to PC - useful for backing up your game data and sharing your own game saves
* Copy Saves from PC to Saturn - useful for restoring your game data and loading other peoples game saves

## Copy Saves from Saturn to PC
Your own game saves stored on the internal Saturn RAM or on external Saturn cartridges will not last forever, so backing up to PC is vital to preserve any data you are specifically proud of or just nostalgic over.

There are a couple of tools which provide this functionality but for both you will need a Saturn capable of supporting Homebrew code.

### Save Game Extractor
One difficulty that springs to mind when trying to get save data from the Saturn is how is it possible? 

The Saturn doesn't have the ability to write to a CD-R or external HD, so the solution isn't obvious. Also most peripherals use the cartridge slot itself, meaning that you wouldn't be able to dump cartridge-based save data.

This is where one clever solution comes in, transfer the data directly from the SATURN TO PC via sound! All you need is a Stereo audio Y cable adapter and a CDR.

{% include link-to-other-site.html url="https://github.com/slinga-homebrew/Save-Game-Extractor" description="View the project on Github" image="https://github.com/slinga-homebrew/Save-Game-Extractor/raw/master/screenshots/main.png" title="Save-Game-Extractor: Transmit Sega Saturn save game files as audio"  %}

It is based on the `minimodem` project, which is a very clever tool to send data over audio, it isn't the fastest method of transfer but it is very effective for use cases such as this [^1].

### Sega Saturn Save Parser
Once you have the save data copied over from the Saturn to your PC you may want to edit the data. The Sega Saturn Save Parser provides a GUI for exactly that purpose, it can load in a number of formats:
* Power Memory data
* Internal RAM raw image
* Datel Compressed Saves

This tool has the ability to delete, extract and insert saves back into the raw image [^2].

{% include link-to-other-site.html url="https://github.com/hitomi2500/ss-save-parser" description="View the SS Save Parser project on Github" title="Parser for Sega Saturn images of various save media"  %}

---
## Copy Saves from PC to Saturn
Whether you want to restore your own save game data, try other peoples or even experiment with hacked saves you will need a tool to move the saves from your PC to the console.

Thankfully a few developers have created some tools exactly for this job.

### Save Data Manager
Save Data Manager by `cafe-alpha` is the most advanced tool of its type for the Sega Saturn. It's compatible with all standard memory devices and supports all of the features found in the stock memory manager, with the added benefit of being able to perform operations in bulk (e.g. delete multiple save files at once). It also boasts compatibility with Action Replay cartridges and Fenrir ODE for save data import/export, supports a plethora of save data formats, can dump the system BIOS and cartridge ROM, and includes a firmware flasher utility for use with many different cartridges. Support for Satiator ODE is coming soon [^4].

Note regarding Action Replay compatibility; save data can be exported from Action Replay to internal memory and supported ODEs, but it's currently not possible to import save data to Action Replay.

{% include link-to-other-site.html url="https://ppcenter.webou.net/pskai/#download" description="Included in the Pseudo Saturn Kai archive" title="Saturn Save Data Manager"  %}

### SaveRepack
SaveRepack by `cafe-alpha` is a Windows application that allows you to inject save files into the Save Data Manager utility described above. Thanks to this, it's possible to copy save data from PC to Saturn without the use of expensive hardware; all that's needed is blank CD-R media, a disc drive for burning the ISO file generated by SaveRepack, and a method of running CD-R discs (Pseudo Saturn cartridge, modchip, or swap trick). 

{% include link-to-other-site.html url="https://ppcenter.webou.net/pskai/#download" description="Included in the Pseudo Saturn Kai archive" title="SaveRepack"  %}

### Save Game Copier
Save Game Copier is a tool that allows the user copy Sega Saturn save game files to and/or from internal memory, cartridge memory, external devices (e.g. Sega Saturn Floppy Disk Drive), Satiator ODE, MODE, and CD. It consists of a Sega Saturn homebrew application with a simple text menu.

{% include link-to-other-site.html url="https://github.com/slinga-homebrew/Save-Game-Copier" description="View the project on Github" image="https://github.com/slinga-homebrew/Save-Game-Copier/blob/master/menu.png?raw=true" title="Save-Game-Copier: Sega Saturn Save Game Copier"  %}

### Save Game Manager
Save Game Manager by `Rockin'-B` is a very useful tool that allows you to manage save games on the Saturn itself. You can copy save games from the burned CD and save it into the internal RAM or the external cartridge RAM, and you can even export save files as base64 strings. It can also dump and update Action Replay firmware [^3].

Due to its age, it has less features than its more contemporary counterparts discussed above.

{% include link-to-other-site.html url="http://www.rockin-b.de/saturn-savegamemanager.html" description="Download the code and executables on the official website" image="http://www.rockin-b.de/saturn/savegamemanager/SGM_help.jpg" title="The Rockin'-B : Save Game Manager"  %}

# .BUP File Format
A number of Sega Saturn homebrew applications have standardized on the [.BUP file header](https://github.com/slinga-homebrew/Save-Game-BUP-Scripts). The 64-byte header contains the metadata of the raw save followed by the save itself. 

---
# References
[^1]: [GitHub - slinga-homebrew/Save-Game-Extractor: Transmit Sega Saturn save game files as audio. Based on minimodem](https://github.com/slinga-homebrew/Save-Game-Extractor)
[^2]: [GitHub - hitomi2500/ss-save-parser: Parser for Sega Saturn images of various save media.](https://github.com/hitomi2500/ss-save-parser)
[^3]: [The Rockin'-B : Save Game Manager](http://www.rockin-b.de/saturn-savegamemanager.html)
[^4]: [August Activity 2021/08/31 : cafe-alpha on Patreon](https://www.patreon.com/posts/august-activity-55575271)
