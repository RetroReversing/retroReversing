---
permalink: /hardware/cheatcartridge/
layout: post
console: cheatcartridge
title: Cheat Cartridges & Discs
recommend: hardware
recommendTitle: All Hardware Posts
editlink: ../categories/hardware/CheatCartridges.md
breadcrumbs:
  - name: Home
    url: /
  - name: Hardware
    url: /hardware
  - name: Cheat Cartridges & Discs
    url: #
redirect_from:
  - /cheat
  - /cheating
  - /cheatcartridge
  - /cheat-cartridge
  - /cartridge
  - /hardware/cheatdevices
---

# Action Replay (Datel)
**Datel** first developed their **Action Replay** cartridges for the Commodore 64 in 1986 [^2].

---
# Multiface (Romantic Robot)
**Romantic Robot** released their Multiface One for the ZX Spectrum in 1986 [^3] which allowed Memory Dumps similar to save states in modern emulators, cheats could then be applied to these memory dumps with the **POKE** command.

---
# Game Genie (Codemasters)
The **Game Genie** was one of the first Cheat Code cartridges to be developed for **home consoles** as they realised their first version for the Nintendo Entertainment System (NES) in 1990.

Nintendo feared that this would either cause harm to their brand or make game piracy even easier and thus decided to sue Codemasters.

Codemasters eventually won the court case after four long years and got a nice bonus out of it: $140 million! This cash injection more than covered their court fees and allowed Codemasters to expand and develop more games [^1].

## How were Game Genie's created?
In an interview with **GSHI** (a now defunct website) **Richard Aplin** who worked on the Game Genie line of products as a hardware engineer had the following to say [^4]:
> We had no way to get any info on the hardware or software of the consoles (and we had a very litigious relatonship w/Nintendo) , so we did it "the hard way" by reverse-engineering them - by literally going to a store, buying a few systems, tearing them apart, and attaching a logic analyser to them.
> A logic analyser is basically like a digital oscilloscope (shows you what high-speed signals are doing in real time) but typically has lots of separate channels (32-48).
> You connect each channel to signals/chip pins that look "interesting" inside your console, run the analyzer, then spend some time figuring out what all the signals are doing and what the hell is going on.
>
> Once you've got the basic signals figured out (typically you want to figure out the pinout of the cartridge connector) - found the address and data bus of the CPU and the basic control lines (Read, Write, etc) then you've got to the point where you can typically build a 'dev board'.
> We'd build a PCB (with suitable cartridge edge connector on it) that contained an EPROM, an FPGA, a bunch of SRAM, a high-speed parallel port, and typically for fun a 2-line LCD display and some lights.
> The eprom contained whatever boot code was required to get the console booted, then it entered a monitor program where you could remotely view/change the console memory using the parallel port on the board.
> The parallel port always used the ubiquitous "PDS" style interface (PDS= Programmers Development System, at the time a very widely used - and very fast - PC-based cross-assembling system by Andrew Glaister and others) so everything was fairly standard.

## How were Game Genie Codes created officially?
In the same interview **Richard Aplin** explains that they created custom hardware and software running on a Commodore 64[^4]: 
> We usually used a custom PCB that had (typically) a parallel port, a passthru connector for the original cart, and basic byte-replacement hardware. Also a few simple tools running (I think) on a Commodore 64.

This software was presumably very similar to how "Cheat Engine" works, take a dump of memory, loose a life in the game, then take another dump and compare the memory addresses that have changed. For the ROM level cheats it would be harder, presumably they would take a full ROM dump and run it through a disassembler as best they could, then see what the program counter's value is at when it writes to the memory address you are interested in and find that in the disassembly.

Also I love this quote from the same interview, it shows just how time consuming it would be to support a whole book of codes for the NES library [^4]:
> They had teams of people making codes (a guy called Graham Rigby was the main Codemeister - he lived in a room full of nothing but shelves and racks of NES games - he had every NES game in every territory I think)

Presumably they has similar rooms with Game Boy, Game Gear and Sega Mega Drive games stacked high, I wonder what happened to all those games!

---
# References
[^1]: Retro Volume 1 (Page 54)
[^2]: [Action Replay - ReplayResources](https://rr.pokefinder.org/wiki/Action_Replay)
[^3]: [Sinclair User Magazine Issue 047 : Internet Archive](https://archive.org/details/sinclair-user-magazine-047/page/n104/mode/1up?view=theater)
[^4]: [Richard Aplin (Game Genie Developer) - Hackers of Lore Q&A; - GSHI](https://web.archive.org/web/20100616131921/http://www.thegshi.org/?s=qna&id=40)

---
# All Posts tagged with Cheat Cartridges

<div>
{% include console.html %}
</div>
