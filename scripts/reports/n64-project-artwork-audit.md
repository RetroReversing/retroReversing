# N64 project artwork audit

Checked 18 November 2026. All 13 previously missing covers were found in the Libretro thumbnail collections. Each URL returned HTTP 200, `image/png`, a PNG signature and `Access-Control-Allow-Origin: *` with the RetroReversing origin supplied. The stored dimensions come from the PNG header. These are original game covers, not screenshots of the ports or evidence that a port supports that particular ROM revision.

## Catalogue scope corrections

[Evo's Space Adventures](https://github.com/mkst/esa#readme) explicitly targets PlayStation, so its project and row moved to the PlayStation catalogue, with the European PlayStation cover. Build metadata and repository activity were preserved.

[SM64 Scratch](https://github.com/naegoxdev/sm64-scratch#provenance) describes a reimplementation of selected gameplay systems. It moved to the separate Nintendo 64 reimplementation catalogue, retaining its original game cover. It is excluded from the decompilation guide.

[Kirby64Recomp](https://github.com/Kirby64Ret/Kirby64Recomp), [Rush 2 Recompiled](https://github.com/bryantmh/rush2recompiled) and [Super Robot Wars 64 Recomp](https://github.com/dyzz/srw64-recomp) identify themselves as recompilations. Their type labels were corrected so the generated guide places them under Recompilations.

The current source catalogue contains repeated rows. Artwork and type corrections apply to every occurrence; the generated page deduplicates repositories without deleting unrelated duplicate source rows.

## Covers

The original game artwork is linked below:

Project | Cover | Catalogue
---|---|---
animal-forest-animal-forest-psp | [Animal Forest original Nintendo 64 box art (Japan)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Doubutsu%20no%20Mori%20%28Japan%29.png) | Nintendo 64 decompilations
evo-s-space-adventures | [Evo's Space Adventures PlayStation box art (Europe)](https://raw.githubusercontent.com/libretro-thumbnails/Sony_-_PlayStation/master/Named_Boxarts/Evo%27s%20Space%20Adventures%20%28Europe%29%20%28En%2CFr%2CDe%2CEs%2CIt%29.png) | PlayStation decompilations
kirby-and-the-crystal-shards | [Kirby 64 The Crystal Shards original Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Kirby%2064%20-%20The%20Crystal%20Shards%20%28USA%29.png) | Nintendo 64 decompilations
mabecs-international-superstar-soccer-2000 | [International Superstar Soccer 2000 original Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/International%20Superstar%20Soccer%202000%20%28USA%29%20%28En%2CEs%29.png) | Nintendo 64 decompilations
n64-classic-rush-2 | [Rush 2 Extreme Racing USA original Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Rush%202%20-%20Extreme%20Racing%20USA%20%28USA%29.png) | Nintendo 64 decompilations
destruction-derby-64 | [Destruction Derby 64 Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Destruction%20Derby%2064%20%28USA%29.png) | Nintendo 64 decompilations
rugrats-scavenger-hunt | [Rugrats Scavenger Hunt Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Rugrats%20-%20Scavenger%20Hunt%20%28USA%29.png) | Nintendo 64 decompilations
super-mario-64-in-scratch-sm64-scratch | [Super Mario 64 original Nintendo 64 box art (USA), the game reimplemented in Scratch](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Super%20Mario%2064%20%28USA%29.png) | Nintendo 64 reimplementations
super-robot-wars-64 | [Super Robot Wars 64 original Nintendo 64 box art (Japan)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Super%20Robot%20Taisen%2064%20%28Japan%29.png) | Nintendo 64 decompilations
virtual-pro-wrestling-2 | [Virtual Pro Wrestling 2 Oudou Keishou original Nintendo 64 box art (Japan)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Virtual%20Pro%20Wrestling%202%20-%20Oudou%20Keishou%20%28Japan%29.png) | Nintendo 64 decompilations
the-world-is-not-enough-i-could-have-given-you-the-world | [The World Is Not Enough original Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/007%20-%20The%20World%20Is%20Not%20Enough%20%28USA%29.png) | Nintendo 64 decompilations
the-legend-of-zelda-ocarina-of-time-ship-of-harkinian | [The Legend of Zelda Ocarina of Time original Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Ocarina%20of%20Time%20%28USA%29.png) | Nintendo 64 decompilations
the-legend-of-zelda-majora-s-mask-2-ship-2-harkinian | [The Legend of Zelda Majora's Mask original Nintendo 64 box art (USA)](https://raw.githubusercontent.com/libretro-thumbnails/Nintendo_-_Nintendo_64/master/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Majora%27s%20Mask%20%28USA%29.png) | Nintendo 64 decompilations
