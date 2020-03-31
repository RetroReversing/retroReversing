---
layout: post
tags: 
- switch
title: Nintendo Switch File Formats
image:  /public/consoles/Nintendo Switch.png
thumbnail: /public/consoles/Nintendo Switch.png
permalink: /SwitchFileFormats
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Switch
    url: /switch
  - name: Nintendo Switch File Formats
    url: #
recommend: switch
editlink: /switch/SwitchFileFormats.md
updatedAt: 31st March 2020
---
The Nintendo Switch development scene has introduced a lot of new file formats, some completely new and others are extensions of what had been used on the Wii and Wii U.

# Full Game Files
Full Game files come in two standard formats depending if they are game cartridges (XCI) or EShop downloads (NSP).

## XCI - Xecutor Images
The XCI format was created by `Team Xecutor` as a way to dump game cartridges on their custom firmware known as `SX OS`.

You can dump game cartridges if you are using SXOS using the homebrew app `SX Dumper`.

XCI files are encrypted using the firmware specific master key and so can be run on any switch, just like game cartridges [^2].

## NSP - Nintendo Submission Package
NSP files is the format for games downloaded from the Switch EShop, similar to .apk on Android or .app on iOS.

NSP files are encrypted using master keys and rightsId keys and are encrypted for a specific user [^2].

---
# References
[^1]: [RELEASE - ExeFSManager - A Simple ExeFS Manager | GBAtemp.net - The Independent Video Game Community](https://gbatemp.net/threads/exefsmanager-a-simple-exefs-manager.526794/)
[^2]: [differences between nsp and xci files? | GBAtemp.net - The Independent Video Game Community](https://gbatemp.net/threads/differences-between-nsp-and-xci-files.511776/)
