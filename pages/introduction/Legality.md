---
layout: post
tags: 
- introduction
title: Legality of Reverse Engineering & Clean Room Reversing
thumbnail: /public/images/RetroReversingLogoSmall.png
image: /public/images/clean-room-reversing.jpg
twitterimage: https://www.retroreversing.com/public/images/clean-room-reversing.jpg
permalink: /clean-room-reversing
breadcrumbs:
  - name: Home
    url: /
recommend: 
  - introduction
updatedAt: '2022-09-23'
editlink: /introduction/Legality.md
---
Reverse Engineering of commercial Games and Applications straddles a fine line of legality. Whether a Reverse Engineering project is legal or not completely depends on how it was accomplished.

# Conversion from one from to another is still under copyright
For example simply disassembling a compiled binary and releasing it is equivalent to converting a copyrighted photograph from one image format to another (e.g PNG to JPG), it *is still* under the copyright of the original creator.

## What about annotated disassemblies?
Most reverse engineering projects don't just convert a binary executable to a direct assembly source file, they add annotations to the assembly such as comments, variable and function names. You could argue (in court) that these annotations have created a *derivative work* if the annotations are substantial enough to justify such a claim.  

## Keep anotations seperate
The safest way legally speaking would be to distribute the annotations (comments, variable/function names) separate from the source material (disassembled code). One example of this is releasing a *symbol table* which contains the variable/function names along with their position in the original executable, it would then be up to the end-user to disassemble and join the symbol table to the output.

Some impressive examples of disassembly annotations that are available on Github are covered in our post: 
{% include link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="For more information check out this post." %}

Some release both the disassembled code and a symbol file which can be attached to a debugger.

Bare in mind this is not a criticism of Github projects containing both the disassembly along with the annotations, we are not passing judgement saying these are illegal, we are not lawyers, we simply don't have evidence of court cases where this was put to the test. Although we do personally hope that it never does get put to the test in a court of law, there are so many impressive reverse engineering projects that would be impacted if the ruling was negative.

# Reimplementations, Remasters and Remakes
So far we have discussed reverse engineering projects that are educational in nature, annotating what functions and variables are used for. But what about decompilation or re-implementations where the purpose is porting to a new platform or modernization? This is where it gets even more risky.

For simplicity in the rest of this post will will refer to decompilation/remasters/remakes that are based on the original source but written in a higher level language (such as C/C++) simply as re-implementations.

## Never distribute original Assets
First of all it is important to make sure no original game assets (sprites, sounds, 3d models etc) are distributed with the re-implementation, this is a no-brainer as they are original unmodified copyrighted works so fair use would not apply. This means you need to be extra careful when developing and don't * accidentally* commit assets to source control (and if you do, don't forget to purge the history after deleting). 

## Potentially supports the source material
This also has the added benefit that any users for your re-implementation will need to own a copy of the original game in order to obtain the assets, supporting the original copyrighted work in the process. Although note that this in no way will prevent the copyright holder from pursuing legal action and would not be a strong defense in court, but it can help your case and not doing it would most definitely harm your case.

---
# Legality of approaches for Reverse Engineering Code
Now what about the code for the re-implementation or any compiled executables built from that source code?

For this we have three options:
* Clean Room Reverse Engineering (The Best way)
* Dusty Room Reverse Engineering (Never tested in court, risky)
* Dirty Room Reverse Engineering (Impressive but also the least protected way)

## Clean Room Reversing
Clean Room Reverse Engineering is the only method that has successfully stood up in court (see SEGA vs Accolade). However it is also the hardest to accomplish and requires separate teams of people.

One team have access to the original executable and reversing software such as disassemblers, decompilers, Hex Editors etc but has no access to write code. The other team has absolutely no access to the original product and has to rely on the documentation created from the first team to write the code.

Note that using Clean Room Reversing does not mean that you won't get sued, it just means that if you do then you will have a stronger defense than without using it.

You may also need to prove that the implementors did not have access to the original implementation, this could be near impossible on a public project that accepts Pull Requests from the general public. 

## Dusty Room Reversing
The difficulty of Clean Room reversing is it requires multiple teams of people including people that have never seen any details of the original executable.

A small team of 1 would never be able to accomplish that and thus would need access to the original executable and write the implementation themselves.

One way to make the work more transformative is to write it in a higher level language that the original program would have been written in. For example re-implementing a native PS2 game in the high-level language Javascript. The resulting implementation would have to be vastly different from the original and would be closer to the definition of a transformative work.

## Dirty Room Reversing
The least legally sound method of reverse engineering (but arguably the most impressive) are reversing projects that have re-written the assembly into the original high-level language that the game was written in and are able to compile an almost byte-identical executable from it.

The Super Mario 64 Decompilation project is an example of this as they have managed to write C code that compiles with the original compiler into the exact same binary as was released on the ROM cartridge. This took many years to achieve and many talented reverse engineers working via trial and error with the original compile technology.

---
# History of Reverse engineering in the Games Industry
Reverse engineering is nothing new in the games industry and can go all the way back to the first Arcade games, with developers trying to figure out how their competitors managed to pull off the seemingly impossible in their new games.

## SEGA vs EA

Former SEGA of America CEO **Tom Kalinske** was in charge when EA reverse-engineered the Sega Mega Drive. He was furious and famously said: 
> "Trip [Hawkins], didn't your mother ever teach you the difference between right and wrong?"

This may have got the meeting off to a rough start but in the end SEGA got **John Madden football** and EA got favoured licensing rights.

So reverse engineering the Sega Mega Drive certainly brought benefits to both EA and SEGA at the time!

## Rare Reverse Engineered the NES to get an Official Nintendo License
The British company **Rare** made gaming history by becoming the first non-Japanese licensed game developer for the NES, securing the license from Nintendo through an ingenious demonstration of their skills by reverse engineering the console and showcasing the game "Slalom" as a convincing demo to Nintendo in 1986 [^1].

---
# References
[^1]: Retro Gamer Issue 84 from December 2010 pages 34–35.
