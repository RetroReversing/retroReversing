---
layout: post
tags: 
- introduction
title: Legality of Reverse Engineering & Clean Room Reversing
category: introduction
image: /public/images/clean-room-reversing.jpg
twitterimage: https://www.retroreversing.com/public/images/clean-room-reversing.jpg
permalink: /clean-room-reversing
breadcrumbs:
  - name: Home
    url: /
recommend: 
  - introduction
updatedAt: '2026-10-22'
editlink: /Introduction/Legality.md
---

The legal questions around reverse engineering a commercial game depend on what a project copies, how it obtains access, what it publishes, and the jurisdiction. US fair use and the specific interoperability provisions in 17 U.S.C. section 1201(f) address different questions; neither gives every game-port project automatic permission to distribute original material [^2] [^3].

# Changing the format does not erase copyright
Disassembling machine code changes its representation, but that change alone does not determine whether publishing the result is permitted. A project's own annotations can add original work without transferring ownership of the underlying game code. The rights and exceptions that apply depend on the material and use at issue [^2].

## What about annotated disassemblies?
Many projects add comments, variable names, and function names to disassembly. Those annotations may be original contributions, while the accompanying instruction listing can still reproduce game material. The status of a particular release cannot be decided from the presence of annotations alone.

## Keep annotations separate
One release design is to publish original notes and a *symbol table* separately from the disassembly. The table can associate researched names with addresses in a particular game revision, leaving users to analyze their own copy. This can reduce the amount of game-derived material distributed, although it does not itself settle every copyright question.

The [catalogue of retail-game decompilations](/source-code/decompiled-retail-console-games) includes projects that publish different combinations of source, disassembly, symbol files, and native ports.

{% include_cached link-to-other-post.html post="/source-code/decompiled-retail-console-games" description="Compare decompilations, source ports, and static recompilations across consoles." %}

The [Copyright Office's summary of *Sega v. Accolade*](https://www.copyright.gov/fair-use/summaries/segaenters-accolade-9thcir1992.pdf) describes a US decision in which disassembly to learn otherwise inaccessible functional elements for compatible, independently written games was fair use. That holding addresses the facts of that case; it is not a general ruling on publishing a game's annotated disassembly [^2].

# Reimplementations, Remasters and Remakes
Decompilations, static recompilations, and new implementations can publish different kinds and amounts of original game material. Assessing a release requires looking at its actual code, assets, build inputs, and output rather than its project label.

The [N64 recomp guide](/how-to-create-an-n64-recomp) explains the technical distinction between static recompilation, matching decompilation, and a source port.

---
## Why emulation matters for preservation
[Nerrel](https://www.youtube.com/watch?v=f35i5AVzpsg) examines what a world without emulation would lose. The video supplies preservation context for this discussion rather than legal advice about a particular project.

<iframe width="560" height="315" src="https://www.youtube.com/embed/f35i5AVzpsg" title="Let&#x27;s Imagine a World Without Emulation" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="max-width:100%;height:auto;aspect-ratio:16/9;"></iframe>

## Keep original assets out of public releases
Game art, music, and other extracted assets raise a separate distribution question from a project's own code. Many community ports require users to provide a compatible game image and read assets locally rather than placing them in a public repository or release [^4]. Check source control history and packaged binaries as well as the visible file list: deleting a committed asset from the latest revision may leave it in earlier commits.

## Choose what the project distributes
A project's distribution model determines which game-derived material leaves the developer's machine. These common approaches have different technical outputs:

Model | Published output | User-supplied input
---|---|---
Research metadata | Original notes, symbols, and build scripts | Game image for local analysis
Runtime ROM loading | Native program that reads game data at launch | Compatible game image
Delta patch | Difference file and patching instructions | Exact base image
User-side translation | Tools and runtime that translate code locally | Compatible game image

[Zelda64Recomp](https://github.com/Zelda64Recomp/Zelda64Recomp) says its repository and releases contain no game assets and require the original game. [GoldenEye64Recomp](https://github.com/cblock85/GoldenEye64Recomp) documents an optional build that translates game functions from the user's ROM at launch [^4] [^6]. These are technical distribution choices, not legal guarantees. A delta patch can still contain copyrighted data, and requiring a user-supplied ROM does not establish that every method of obtaining or using one is lawful.

US law also has a conditional interoperability provision for circumvention in section 1201(f). It applies to identifying and analyzing elements necessary for interoperability under the statute's stated conditions. It does not serve as blanket permission to distribute a game ROM or extracted assets [^3].

For emulation and preservation work, the [RED-Project wiki](https://github.com/farmerbb/RED-Project/wiki) is a useful external reference because it focuses on obtaining ROMs from officially released products rather than downloading loose files from the internet.

{% include link-to-other-site.html url="https://github.com/farmerbb/RED-Project/wiki" description="Documentation for legally obtaining ROMs from game compilations, mini classic consoles, and other officially released products for use with compatible emulators." title="ROM Extraction Documentation Project" %}

---
# Legality of approaches for Reverse Engineering Code
Now what about the code for the re-implementation or any compiled executables built from that source code?

These project descriptions explain how an implementation was produced. They are not legal categories or a ranking of which project is lawful:
* **Clean room** - One group documents observable behavior; an independent group implements from that specification.
* **Same-team reimplementation** - Researchers inspect the original program and also write replacement code.
* **Matching decompilation or static recompilation** - A project reconstructs or translates original game instructions and supplies the resulting code or build steps.

## Clean Room Reversing
In a strict clean-room process, the implementation team works from a functional specification instead of copied source or disassembly. This separation can help document independent development, but it is not a requirement announced by the *Sega v. Accolade* decision. That case found fair use for intermediate copying and disassembly under its particular interoperability facts [^2].

One team may inspect the original executable and document observable behavior. The implementation team then writes code from that documentation without access to the original implementation.

Calling a project "clean room" also requires evidence of that separation. Machine-translating the original instructions into C is static recompilation, not independent implementation merely because the output language differs.

An open project that accepts outside contributions needs a clear way to record which contributors saw the original implementation if it describes its process as clean room.

## Same-team reimplementation
A small team may inspect the original program and write replacement behavior itself. Documenting observed interfaces and retaining evidence of independent design can make the process easier to understand, but no chosen language or team arrangement decides fair use by itself [^2].

## Matching decompilation and static recompilation
A matching decompilation aims to reproduce the original binary from reconstructed source. A static recompilation translates the original instructions into host-compilable code. Both can involve game-derived material, so the contents of a published repository and release matter separately from the private analysis process.

The [Super Mario 64 decompilation](https://github.com/n64decomp/sm64) is a matching project: its build process reconstructs supported game images from C, assembly, and extracted assets supplied by the user [^5].

---
# History of Reverse engineering in the Games Industry
Reverse engineering is nothing new in the games industry and can go all the way back to the first Arcade games, with developers trying to figure out how their competitors managed to pull off the seemingly impossible in their new games.

## SEGA vs EA
Former SEGA of America CEO **Tom Kalinske** was in charge when EA reverse-engineered the [Sega Mega Drive](/megadrive). He was furious and famously said: 
> "Trip [Hawkins], didn't your mother ever teach you the difference between right and wrong?"

This may have got the meeting off to a rough start but in the end SEGA got **John Madden football** and EA got favoured licensing rights.

So reverse engineering the Sega Mega Drive certainly brought benefits to both EA and SEGA at the time!

### How Sega bet against Reverse Engineering...and lost
[Modern Vintage Gamer](https://www.youtube.com/watch?v=-aLfKnJAe0Y) covers reverse engineering on the Sega Genesis, including Electronic Arts and Accolade. For the legal holding in the Accolade case, use the court decision summarized by the Copyright Office rather than treating a video's characterization of the method as the rule [^2].

<iframe width="560" height="315" src="https://www.youtube.com/embed/-aLfKnJAe0Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Rare Reverse Engineered the NES to get an Official Nintendo License
The British company **Rare** made gaming history by becoming the first non-Japanese licensed game developer for the NES, securing the license from Nintendo through an ingenious demonstration of their skills by reverse engineering the console and showcasing the game "Slalom" as a convincing demo to Nintendo in 1986 [^1].

---
# References
[^1]: Retro Gamer Issue 84 from December 2010 pages 34-35.
[^2]: [US Copyright Office summary of *Sega Enterprises Ltd. v. Accolade*](https://www.copyright.gov/fair-use/summaries/segaenters-accolade-9thcir1992.pdf), holding and facts of the fair-use decision.
[^3]: [17 U.S.C. section 1201(f)](https://www.law.cornell.edu/uscode/text/17/1201), conditional interoperability provisions concerning circumvention.
[^4]: [Zelda64Recomp README](https://github.com/Zelda64Recomp/Zelda64Recomp), original-game requirement and asset-distribution statement.
[^5]: [Super Mario 64 decompilation README](https://github.com/n64decomp/sm64), project build process and required user-provided inputs.
[^6]: [GoldenEye64Recomp README](https://github.com/cblock85/GoldenEye64Recomp), documented standard and user-side translation build modes.
