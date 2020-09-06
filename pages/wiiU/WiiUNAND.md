---
layout: post
tags: 
- wiiU
title: WiiU NAND Flash
image: /public/wiiU/WiiUnandFlash.jpg
twitterimage: https://www.retroreversing.com/public/wiiU/WiiUnandFlash.jpg
thumbnail: /public/consoles/Nintendo WiiU.png
permalink: /WiiUNAND
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiU
  - name: WiiU NAND Flash
    url: #
recommend: wiiU
editlink: /wiiU/WiiUNAND.md
updatedAt: '2019-03-02'
---

# What is NAND?
NAND Flash Memory is the built in memory of the Wii console. It houses save data, downloaded channels, and the Wii U Menu [^3].

# Physical NAND chips
The Wii U has 2 NAND chips. The MLC, which stores Wii U data, and the SLC, which has 2 separate sections ("banks" if you will), one that stores vWii data only and one that stores the rest of the Wii U data.
All of these are accessed as separate partitions by the Wii U [^2].

## Caution changing NAND!
Be very careful with NAND changes as the wiiU has no way of fixing the NAND if it breaks, so basically it bricks your console.

## NAND Backup
Every NAND backup is unique and only belongs to the system it came from. Every console has it's own unique soul you can say [^1].
So you can’t use someone else’s NAND backup for your own wiiU!

## redNAND (Redirected NAND)
Imagine you could use your SD card instead of the internal system NAND, that means you could modify it as much as you want and when it bricks you just fix the files on SD card. Well that is exactly what redNAND does!

# References
[^1]: https://www.reddit.com/r/WiiUHacks/comments/7ihoql/is_there_any_type_of_recovery_boot_mode/ 
[^2]: https://gbatemp.net/threads/nand-wiiu-which-is-what.465750/  
[^3]: https://dolphin-emu.org/docs/guides/nand-usage-guide/ 
