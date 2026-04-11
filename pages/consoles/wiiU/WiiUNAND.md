---
layout: post
tags: 
- wiiu
title: WiiU NAND Flash
image: /public/wiiU/WiiUnandFlash.jpg
twitterimage: https://www.retroreversing.com/public/wiiU/WiiUnandFlash.jpg
category: wiiu
permalink: /WiiUNAND
breadcrumbs:
  - name: Home
    url: /
  - name: WiiU
    url: /wiiu
  - name: WiiU NAND Flash
    url: #
recommend: wiiu
editlink: /consoles/wiiU/WiiUNAND.md
updatedAt: '2019-03-02'
---

The Wii U uses NAND flash memory as its **primary non-volatile storage**, meaning it retains data even when powered off. This is fundamental to how the system boots, operates, and stores user data. It houses save data, downloaded channels, and the Wii U Menu [^3].

## What is NAND?
NAND stands for **"NOT AND"**. It originates from Boolean algebra, where NAND is a type of **logic gate**.

NAND flash memory (like in the Wii U) is built using arrays of NAND logic gates:
* These gates store bits by trapping electrical charge
* Their structure allows **high-density storage**
* Cheaper and more compact than alternatives like NOR flash

So when you hear "NAND memory", it literally refers to memory built using **NAND (NOT AND) logic gate architecture**.

## Why does the Wii U use NAND?
Thw Wii U uses NAND because it:
* Retains data without power
* Is compact and soldered directly to the motherboard
* Has faster access than traditional HDDs for system-level operations

### Why NAND specifically (vs other storage)?
NAND flash is chosen because:
* No moving parts -> durability
* Lower power consumption
* High density for small form factor
* Sufficient speed for firmware execution

This makes it ideal for embedded systems like consoles.

---
## What is stored on the Wii U NAND?
NAND is used on the the Wii U to store:
* User profiles
* Save data
* System settings
* Installed titles (on Basic models especially)

### System firmware and boot process
The NAND contains the **entire operating system stack**, including:
* Bootloaders (early-stage code executed at power-on)
* System firmware (menu, system services)
* Security components (encryption keys, signature checks)

Without NAND, the console has **no instructions to execute**, so it cannot boot at all. Unlike systems that rely on removable storage, the Wii U’s internal NAND is mandatory for initialization.

### System updates and installed content
System updates are written directly to NAND:
* Firmware updates modify system titles in NAND
* Downloaded games (especially on 8GB models) are stored there
* Virtual Console and system apps reside in NAND

---
## How much NAND is available to the Wii U? 
The Wii U shipped in two variants:
* Basic model - 8GB MLC NAND (~3GB free after system files)
* Deluxe model - 32GB MLC NAND (~25GB free after system files)

In both cases the SLC is the same size at roughly 512MB.

---
# Wii U's NAND Hardware
Internally, the Wii U actually uses two types of NAND-based storage:
* **SLC** NAND - Stores critical system data (bootloaders, OS, security) (~512MB, fast, high durability)
* **MLC** NAND - Stores user data (games, saves, downloads) (8GB or 32GB, slower, cheaper)

The system **boots entirely from SLC first**, then mounts and uses MLC for user data.
All of these are accessed as separate partitions by the Wii U [^2].

## SLC (Single-Level Cell) NAND
The **SLC (Single-Level Cell) NAND** is the **critical system storage**. It is small (~512MB) but extremely important because it contains everything required to **boot, verify, and control the system**.

The SLC contains both Wii U and vWii system data, these are separated logically via filesystem structure and title IDs. So vWii operates in a sandboxed environment, but not on a physically separate NAND bank.

### Boot chain (lowest-level startup code)
The SLC contains the early boot stages:
* **boot0** - Hardcoded entry point (partially in ROM, partially tied to NAND), Initializes hardware and loads next stage
* **boot1** - Verified by boot0 (cryptographic check) then Loads further system components
* **boot2 / IOSU kernel loading** - Brings up the main system OS layer

If anything here is corrupted, the console **cannot boot at all** (hard brick).

### IOSU (system operating environment)
The Wii U runs a subsystem similar to the Wii’s IOS, called **IOSU** which handles:
* File system
* Permissions
* Hardware access
* Security enforcement

This lives primarily on SLC because:
* It must be **trusted**
* It must be **available immediately at boot**

### System titles and core modules
SLC stores essential system titles:
* System menu components
* Core libraries
* Background services (account handling, update services)

These are distinct from user-installed titles (which go on MLC).

---
### Security data and keys
This is one of the most important parts:
* **Console-unique encryption keys**
* Certificates
* Signing data used to verify software

These enforce Nintendo’s trust chain:
* Every executable must be signed
* Boot stages verify each other
* Prevents unauthorized code execution

---
### Configuration and critical system data
Includes:
* System configuration (region, settings)
* Internal databases for system operation
* Low-level logs and flags

### Why SLC is used for this
SLC NAND is chosen specifically because:
* **Higher reliability** (fewer bit errors)
* **Much higher write endurance**
* **Faster read/write latency**

This is essential for:
* Boot integrity
* System stability
* Preventing corruption in critical areas

### Failure implications
If SLC is damaged:
* No recovery through normal means
* System cannot initialize hardware or OS
* Requires NAND backup restoration, or Hardware-level repair

This is why in modding:
* **SLC dumps are the most critical backup**
* Corrupting SLC is far more dangerous than MLC

---
## MLC (Multi-Level Cell) NAND
The **MLC (Multi-Level Cell) NAND** is the **main bulk storage** of the system. This is the part that differs between the 8GB and 32GB models and is where almost all **user-facing data** lives.

### Installed games and applications
The MLC stores:
* eShop downloads
* Game updates and patches
* DLC content
* Virtual Console titles

These are stored as **titles** in a structured directory layout (similar concept to SLC, but much larger scale).

---
### User data
The MLC also stores:
* Save files
* User profiles
* Account-linked data (e.g. NNID)
* Game-specific settings

This is the data that changes frequently during gameplay.

---
### System data (non-critical)
MLC also holds less critical system components:
* Some system applications
* Update data before installation
* Cache data

Important distinction:
* If MLC data is corrupted → system may still boot
* If SLC is corrupted → system will not boot

---
## Filesystem and layout
The MLC uses a filesystem often referred to as the **WFS (Wii U File System)** which is encrypted per-console and structured into:
* `/usr/` - user data, saves, installs
* `/sys/` - system-related data (non-boot-critical)

Each installed title has:
* A title ID
* Its own directory structure
* Metadata and content files

### Performance and behavior
MLC is:
* Slower than SLC
* More prone to wear over time
* Managed by wear-leveling algorithms

This is why:
* Game installs can be relatively slow
* Heavy write usage (e.g. frequent saves) is managed carefully

### Failure characteristics
MLC issues are more common than SLC:
* Bad blocks can develop over time
* Filesystem corruption can occur

This Leads to missing games, save data loss and installation failures but typically the system still boots and data can sometimes be rebuilt or reinstalled

---
# Security and anti-piracy
The NAND plays a critical role in enforcing Nintendo’s security model:
* Stores **console-unique encryption keys**
* Holds signed system titles verified during boot
* Prevents unauthorized code execution

If NAND contents are corrupted or mismatched, the system can fail to boot (brick), because security checks fail.

So be very careful with NAND changes as the wiiU has no way of fixing the NAND if it breaks, so basically it bricks your console.

## Backing Up WiiU NAND
If the SLC NAND is:
* **Corrupted** -> system may brick
* **Removed** -> system cannot boot
* **Modified incorrectly** -> fails security checks

This is why SLC NAND backups are critical in modding communities.

MLC dumps on the other hand are large but **less critical than SLC**, in fact rebuilding MLC is sometimes possible if SLC is intact.

Many hacks interact with MLC:
  * Title installation
  * Save injection

### NAND Backup
Every NAND backup is unique and only belongs to the system it came from. Every console has it's own unique soul you can say [^1].
So you can't use someone else's NAND backup for your own wii U!

### redNAND (Redirected NAND)
Imagine you could use your SD card instead of the internal system NAND, that means you could modify it as much as you want and when it bricks you just fix the files on SD card. Well that is exactly what redNAND does!
[StroopwafelCFW/minute_minute: Wii U boot1 replacement](https://github.com/StroopwafelCFW/minute_minute)

---
# References
[^1]: https://www.reddit.com/r/WiiUHacks/comments/7ihoql/is_there_any_type_of_recovery_boot_mode/ 
[^2]: https://gbatemp.net/threads/nand-wiiu-which-is-what.465750/  
[^3]: https://dolphin-emu.org/docs/guides/nand-usage-guide/ 