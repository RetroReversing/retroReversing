---
layout: post
tags: 
- ps2
- xbox
- gamecube
- leak
title: The Simpsons Hit & Run Source Code Leak  
thumbnail: /public/consoles/Sony PS2.png
image: /public/images/leaks/SimpsonsHitAndRun.jpg
twitterimage: https://www.retroreversing.com/public/images/leaks/SimpsonsHitAndRun.jpg
permalink: /simpsons-hit-and-run-source-code
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: The Simpsons Hit & Run Source Code Leak
    url: #
recommend: 
- leak
- ps2
- xbox
- gamecube
editlink: /leaks/SimpsonsHitAndRun.md

---

# Introduction
On the **21st August 2021** the full source code to the classic GTA clone staring The Simpsons was released online. This included both the C++ source code plus the editable asset files in Maya format!

This post will cover the contents of the leak in order for you to decide if it is worth downloading, but no links will be provided on this site for where to download the content.

## Files Leaked
* **shr.tar** - TAR archive containing all the source code for the Simpsons Hit and Run

---
# Main Content (shr.tar)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">shr.tar</div>
  <div markdown="1" class="rr-post-markdown">
 The root folder of the TAR archive is neatly organised into the following folders:
* **tools** - 
* **Art** - All the Maya 3D assets for the Characters and their animations
* **documents** - All the documents created during the process of game development
* **game** - C/C++ source code for all the versions of the game (PS2/Xbox/GC/PC)
* **tools** - Tools used to edit the worlds, assets, create DVD images etc

Each of these folders will be covered in the sections below, use the Table of Contents to jump to a particular location of interest.
  </div>
</section> 

---
# Character Models (Art/Character-models)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Character-models</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the 3D Character models in Maya binary format (*.mb) for all the player and non-player characters in the game, including a few unused characters such as Pootchy.

It is possible that these were initially created for the Simpsons road rage and have been carrier over to Hit and Run.

Each model has its own directory named after the character it contains the models for:
* **Agnus Skinner** - Agnus (Seymour Skinner's Mother)
* **Apu** - 
* **Apu American** - Apu wearing patriotic american clothing
* **Apu Army** - Apu in Army uniform
* **Apu_besharp** - Apu wearing the uniform from the BeSharps musical group
* **Barney** - Default Barny
* **Barny_uniform** - 
* **Bart** - Default Bart
* **Bart football** - 
* **Bart_hugo** - 
* **Bart_military** - 
* **Bart_ninja** - Bart dressed like a Ninja
* **Bart_tall** - 
* **Bartman** - Bart dresses as Bart-man (superhero)
* **Bee-man** - Bumble Bee Man
* **Brockman** - 
* **Burns** - 
* **CBG** - 
* **Carl** - 
* **Cletus** - 
* **Dolph** - 
* **Dr Hibbert** - 
* **Dr Nick Riviera** - 
* **Eddie** - 
* **Frink** - 
* **Gil** - 
* **Grandpa** - 
* **Halloween** - Special Haloween characters such as Frankenstein and Witch
* **Hans Moleman** - 
* **Homer** - 
* **Homer_donut** - 
* **Homer_evil** - Evil Homer Model
* **Homer_fat** - Even fatter Homer!
* **Homer_scuzzy** - 
* **Homer_stonecut** - 
* **Homer_underwear** - Homer just in his underwear
* **Itchy** - 
* **Jasper** - 
* **Jimbo** - 
* **Kang** - 
* **Kearney** - 
* **Kodos** - 
* **Krusty** - 
* **Lenny** - 
* **Lisa** - 
* **Lisa_cool** - 
* **Lisa_florida** - 
* **Lisa_jersey** - 
* **Lou** - 
* **Louie** - 
* **Maggie** - Maggie model
* **Marge** - Default Marge character
* **Marge_pink** - 
* **Marge_police** - Marge in police uniform
* **Marge_prison** - Marge in Florida prisoners uniform
* **Master_skeleton** - The master skeleton that all of the models need to support, used for animation
* **Milhouse** - 
* **Moe** - 
* **Mouse** - 
* **Ned** - 
* **Nelson** - 
* **Otto** - 
* **Patty** - 
* **Pedestrians** - Models for all the nameless pedestrians that walk about
* **Pootchy** - 
* **Props** - 
* **Quimby** - 
* **Ralph** - 
* **Scratchy** - 
* **Sea Captain** - 
* **Selma** - 
* **Skinner** - 
* **Smithers** - 
* **Snake** - 
* **Squeeky Voiced Teen** - 
* **Trex** - 
* **Truckasaurus** - 
* **Wiggum** - 
* **Willie** - 
* **Zombie** - 
* **npc** - Contains 2 Non-player character models Marge and Jasper
* **wasp** - 

There is one file in the root directory called **characters.xls** which contains a list of all the character models and their poly count Low/Medium/High and the Milestones they are to be created for.

Each character has a target upper poly count for each level of detail that they must stay below in order to keep the game running smoothly.

In the spreadsheet there are also multiple model types such as:
* FMV - Models only used for FMV cutscenes (no poly limits)
* D - Detailed, has a higher poly limit as its likely to be one of the major characters in a scene
* P - ? Maybe playable, has a standard poly limit
* B - Boss (has a much larger poly count, e.g Truckasaurus)
* F - ? Has a very low poly limit (725)

Most characters have a High, Medium and Low version used in the game for optimizing with LOD (Level of Detail), so it can spawn in a lower poly model when the model is further from the screen.
  </div>
</section>  


---
# Character Animations (Art/Character-animations)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Character-animations</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the Animation skeletons for the 3D Character models in P3D binary format (*.p3d) and Maya animation format (*.ma) for all the player and non-player characters in the game.

The animations have been broken down in to a number of categories based on the type of movement that a character can perform:
* **Child** - Animations for the children such as Bart and Lisa
* **Fat** - Animations for fat characters such as Barney
* **Normal** - Animations for the rest of the characters
* **Old** - Animations for old characters such as Grandpa
* **Truckasaurus** - Animations for the Truckasaurus
* **Woman** - Animations for the female characters such as Marge

  </div>
</section>  
---

---
#  Documentation (/documents)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **CSA** - Critical Stage Analaysis documents
* **Difficulty Tuning** - Documents related to changing the difficulty of the game based on play testers feedback
* **Play Testing** - Documents the process for play testing the game and the results
* **Project Management** - Project management documents such as milestones and  deliverables
* **QA** - Documents related to Quality Assurance (Technical testing of the game)
* **Sound** - 
* **art** - 
* **design** - 
* **exportart** - 
* **localization** - 
* **technical** - 

The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
Game Names | .xls | Spreadsheet containing ?
Simpsons 2 Org Chart | .vsd | Microsoft Visio file containing ?
SimpsonsCheats | .txt | Text file containing ?
SimpsonsCredits | .doc, .txt | 


---
## Critical Stage Analysis (/CSA)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/CSA</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...


The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
S2 Milestone  8 Critical Stage Analysis-Team | .doc | Document containing ?
S2 Milestone 10 Critical Stage Analysis-Team | .doc | Document containing ?
S2 Milestone 11 Critical Stage Analysis-Team Summary | .doc | Document containing ?
S2 Milestone 12 Critical Stage Analysis-Team Summary | .doc | Document containing ?
S2 Milestone 14 Critical Stage Analysis team final | .doc | Document containing ?
S2 Milestone 6 Critical Stage Analysis-Team | .doc | Document containing ?
S2 Milestone 7 Critical Stage Analysis-Team | .doc | Document containing ?
S2 Milestone 9 Critical Stage Analysis- Team | .doc | Document containing ?
SR Milestone 13 Critical Stage Analysis - Team | .doc | Document containing ?


---
## Difficulty tuning (/Difficulty Tuning)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Difficulty Tuning</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...


The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
DiffArc | .xls | Spreadsheet containing ?
Level 1 Difficulty Tuning | .xls | Spreadsheet containing ?
Level 2 Difficulty Tuning | .xls | Spreadsheet containing ?
Level 3 Difficulty Tuning | .xls | Spreadsheet containing ?
Level 4 Difficulty Tuning | .xls | Spreadsheet containing ?
Level 5 Difficulty Tuning | .xls | Spreadsheet containing ?
Level 6 Difficulty Tuning | .xls | Spreadsheet containing ?
Level 7 Difficulty Tuning | .xls | Spreadsheet containing ?


---
## Play testing (/Play Testing)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Play Testing</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

This folder also contains the following sub-directories:
* **Forms And Sheets** - 
* **Notes** - 
* **Reports By Level** - 
* **Schedule** - 

The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
All Levels -- Audio Quality Assessment | .doc | Document containing ?
All Levels -- Continues Required | .doc | Document containing ?
All Levels -- Enjoyment of Missions | .doc | Document containing ?
All Levels -- Hindrances | .doc | Document containing ?
All Levels -- Perceived Difficulty | .doc | Document containing ?
Level 1 Test Data | .xls | Spreadsheet containing ?
Level 2 Test Data | .xls | Spreadsheet containing ?
Level 3 Test Data | .xls | Spreadsheet containing ?
Level 4 Test Data | .xls | Spreadsheet containing ?
Level 5 Test Data | .xls | Spreadsheet containing ?
Level 6 Test Data | .xls | Spreadsheet containing ?
Level 7 Test Data | .xls | Spreadsheet containing ?
Vehicle Testing Data | .xls | Spreadsheet containing ?


---
### Forms and sheets (/Play Testing/Forms And Sheets)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Forms And Sheets</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...


The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
Simpsons Driving Sheet (Studio) | .xls | Spreadsheet containing ?
Simpsons Focus Test Sheet | .xls | Spreadsheet containing ?
Simpsons Focus Test Sheet (Studio) | .xls | Spreadsheet containing ?
Simpsons Mission And Race Names | .doc | Document containing ?
Simpsons Post Beta Focus Test Sheet | .xls | Spreadsheet containing ?


---
### Notes (/Play Testing/Notes)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Notes</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...


The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
Template Focus Test Notes | .doc | Document containing ?
W1 Focus Test Notes | .doc | Document containing ?
W2 Focus Test Notes | .doc | Document containing ?
W3 Focus Test Notes | .doc | Document containing ?
W4 Focus Test Notes | .doc | Document containing ?
W5 Focus Test Notes | .doc | Document containing ?
W6 Focus Test Notes | .doc | Document containing ?
W6-P2 Focus Test Notes | .doc | Document containing ?
W7 Focus Test Notes | .doc | Document containing ?
W7-P2 Focus Test Notes | .doc | Document containing ?
W8 Focus Test Notes | .doc | Document containing ?


---
### Reports by level (/Play Testing/Reports By Level)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Reports By Level</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...


The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
L1 Report -- Rating Charts | .doc | Document containing ?
L2 Report -- Rating Charts | .doc | Document containing ?
L3 Report -- Rating Charts | .doc | Document containing ?
L4 Report -- Rating Charts | .doc | Document containing ?
L5 Report -- Rating Charts | .doc | Document containing ?
L6 Report -- Rating Charts | .doc | Document containing ?
L7 Report -- Rating Charts | .doc | Document containing ?


---
### Schedule (/Play Testing/Schedule)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/Schedule</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...


The files in this folder are described in the table below:
  </div>
</section>  

File Name | Extension | Description
---|---|---
play testing schedule Simpsons | .xls | Spreadsheet containing ?

