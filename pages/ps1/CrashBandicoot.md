---
layout: post
tags: 
- ps1
- games
- crashbandicoot
title: Crash Bandicoot
thumbnail: /public/consoles/Sony Playstation.png
image: https://img.youtube.com/vi/0HwvAjELuuM/hqdefault.jpg
permalink: /crash-bandicoot
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation
    url: /ps1
  - name: Crash Bandicoot 
    url: #
recommend: ps1
editlink: /ps1/CrashBandicoot.md
videocarousel:
  - image: https://img.youtube.com/vi/0HwvAjELuuM/maxresdefault.jpg
    youtube: '0HwvAjELuuM'
  - image: https://img.youtube.com/vi/C3zOzmI4oj8/maxresdefault.jpg
    youtube: C3zOzmI4oj8
references:
  - BehindTheScreens
  - DevsPlay
---
# Introduction to Crash Bandicoot
Crash bandicoot was one of the first 3d platformers that managed to deliver quality gameplay while looking impressive for its time. It was created by Andy Gavin and Jason Rubin for release on the original Playstation console.

---
# 3D Models
Technical limitations of the Sony Playstation 1 hardware and the limited small CRT's used to play games were a big part in shaping the game we know and love today.

## Crash's Design limitations
The design of Crash bandicoot was described by Rubin as 51% technical and visual necessity and 49% inspiration. As for the technical reasons, his colours were chosen based on what would look good on a 90s CRT television and the choice of bright orange meant that lava levels could not be present in the game as it would be too similar to the players colour [^1].

### Use of Untextured Polygons for Crash
It also turned out that the PlayStation was particularly good at rendering untextured but shaded polygons because of this it was decided that crash would be untextured which was a high enough polygon count that the details could be shown using just the colors of the polygons as well as rendering faster this had other advantages.

The bright colors of Crash would pop out on the screen and this also avoided the Playstations lack of texture perspective correction. This also helped with the cartoon vibe that the game was going for [^2].

---
# 3D World

## Level Design Limitations
The game was designed around the Playstation's limitations and so levels needed to be planned accordingly to fit in the limited memory and processing power the Playstation had available.

The levels ensured that there was never too much being shown on screen at once, if a polygon was obscured by something like a fern or a bush the game engine was smart enough to ignore that polygon entirely.

So if the developers ever had too many polygons on the screen they could actually just add in a bush to fix the problem [^1]! 

The PlayStation could not handle showing many enemies on the screen at one time as they were composed of too many
polygons so lots of woompa fruit was added as they are in fact 2d sprites so many of these could be rendered at once to make the levels a bit more interesting.

The Crates were also relatively low in terms of polygon count (6 if you only render what is facing the camera) so many could be added to make the levels feel more fleshed out [^1].

## Use of Fixed Camera Optimisations
The in-game camera moves on a fixed path through each level so a lot of things could be pre calculated before putting the game on the disc.

3D games need to calculate the correct order in which to render polygons on the fly, but the PlayStation had no easy way to do that.

So to optimise this Crash Bandicoot could pre-calculate the order as it would always be the same thanks to the fixed camera [^1].

---
# 3D Animation
<section class="postSection">
  <iframe width="560" height="315" class="wow slideInLeft postImage" src="https://www.youtube.com/embed/RYFVYHWcD8Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<div markdown="1">
The characters were also animated differently to most games, rather than giving a character bones and moving them around Naughty Dog's animators instead moved individual vertices around to create Crashes exaggerated expressions.

This was in an era where bone animations in games were primitive and characters were low poly, so this made Crash stand out from the crowd as an emotive cartoon character. Naughty Dog would use its technique to even greater effect later on in Jak and Daxter [^1].
</div>
</section>

---
# Coding Secrets

## Avoiding Playstation RAM limitations
One of the main technical limitations was taking many megabytes of data and placing it in the Playstation's limited RAM (2MB). To do this many parts of the level were pre-calculated. In fact some of these pre-calculations were so complex that it would take several hours for a single level to process even when that was being distributed over eight computers [^1]!

These techniques managed to compress levels that were 128 megabytes in size down to a measly 12 megabytes. While that is impressive, the levels however would then need to be dynamically loaded to fit into the Playstation's two megabytes of RAM.

This would have to be done seamlessly to keep the frame-rate stable and the developers even went as far as controlling the physical layout of the bytes on the cd-rom a large file exists in the game that serves no purpose but to push the game's data to the outside of the disk since this area of the disk moves faster data here could be read quicker so that everything could
be loaded by the time Crash ended up in those levels.

Other optimisations such as re-using the same variables to save individual bytes in memory were used to great effect and in the end Crash Bandicoot used up almost all of the 2MB of RAM but with just four bytes to spare [^1].

{% include link-to-other-site.html url="http://www.quora.com/How-did-game-developers-pack-entire-games-into-so-little-memory-twenty-five-years-ago/answer/Dave-Baggett?srid=z9ZA&share=1" description="See Dave-Baggett's excellent post on more optimisations made to Crash Bandicoot!" image="/public/consoles/Sony Playstation.png" title="More Memory Optimisations for Crash"  %}

## Secret Code from Sony?
Crash Bandicoot was a technical marvel boasting visuals so impressive that Naughty Dog were accused of being given secret libraries of code from Sony to make their game perform better than others [^1]!

However this was not true, Naughty Dog would often break Sony's reccomended development process by not using their provided libraries and instead program their own bespoke more efficient libraries to push the hardware to its limits.


---
# Unused content
As with most games that have a rushed development cycle, there are assets available on the disc which are never actually used in the retail game. For Crash Bandicoot this includes a full level known as `Stormy Ascent` which was deemed too hard and too time consuming to fix up before the release date.

{% include link-to-other-site.html url="https://tcrf.net/Crash_Bandicoot" description="The Cutting Room Floor has a very detailed page listing all of the unused assets available in the game and is highly recommended to check out" image="https://tcrf.net/images/e/e7/Crash1_-_GuardDog.png" title="Crash Bandicoot - The Cutting Room Floor"  %}

---
# References
[^1]: [Crash Bandicoots Design and Technical Achievement - Behind The Screens - YouTube](https://www.youtube.com/watch?feature=emb_logo)
[^2]: [Making Crash Bandicoot – part 3 « All Things Andy Gavin](https://blog.mascherato.com/2011/02/04/making-crash-bandicoot-part-3/)
