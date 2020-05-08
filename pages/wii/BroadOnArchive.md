---
layout: post
tags: 
- n64
- sdk
- leak
- wii
- ique
title: BroadOn Archive - Nintendo May 2020 Leak (4Chan)
thumbnail: /public/consoles/Nintendo Wii.png
image: /public/Wii/Nintendo Wii May 2020 Source Code Leak.jpg
permalink: /broadon-archive
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Wii
    url: /wii
  - name: BroadOn Archive
    url: #
recommend: n64
editlink: /wii/BroadOnArchive.md
updatedAt: 8th May 2020
twitterimage: https://www.retroreversing.com/public/N64/N64 BroadOn Archive.jpg
---

In early May 2020 a leak of Nintendo Source Code hit the popular image board 4chan. The material contained in this leak was obtained by a young hacker known as Zammis Clark.

# The Uploads 
The material itself was uploaded twice, the first upload was named `unsorted.zip`. The problem with this archive was that it contained many files with the extension `,v` (comma intentional).

The archive was then re-uploaded with the CVS files fixed and called it "unsorted-nocvs.zip".

## What are CVS Files
Concurrent Versions System or CVS is a version control system which predates both Git and SVN and was based on the Revision Control System (RCS).

When the files were downloaded from the Nintendo server they were in a CVS repository. 

A CVS repository is file-based, where the version history, file contents and commit messages are stored in a `,v` file.

Thus the original leak of the files were not the raw files. Each file was wrapped in a container that had the additional version control information.

In order to view the actual file you would need to use a VCS or RCS command to get the latest version of the file.

## To CVS or not to CVS?
If you are just interested in browsing the files then it is highly recommended you download the noCVS version as it is not just a case of removing the `,v` from the filename, you need to use CVS or RCS commands to fix the files.

However the advantage of the CVS version is that it contains the commit history of the files which can be very interesting!

# Contents of the Archive
Whether you have the original or the NOCVS fixed version you will get 3 different tar files in the archive:
* rvl-factory.tar - 111.3MB (Not affected by CVS)
* depot.tar -  2.9GB
* depotrvl.tar - 533.9MB

---
# References
[^1]: [Revision Control System - Wikipedia](https://en.wikipedia.org/wiki/Revision_Control_System#Second_generation)
