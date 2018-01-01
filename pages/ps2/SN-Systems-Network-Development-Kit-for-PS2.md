---
title: SN Systems Network Development Kit for PS2
layout: post
author: amorri40
permalink: /sn-systems-network-development-kit-for-ps2/
tags:
- ps2
- snsystems
- sdk
thumbnail: /public/consoles/Sony PlayStation 2.png
image: /public/WpKsd53aOVPqARgF33wbqg_img_0.jpg
recommend: ps2

source-id: 13hjKlTlqNYhqYEVbVc3ELQZlqddl2YEpRDzyIVBJvr0
published: true
---
## History of the SN Systems NDK for PS2

First mentioned on the official SN Systems website on the 10th November 2000 the PS2 Network Development Kit (NDK) was a software development tool that allowed developers to add online networking features to their games.

Also a post from December 20th 2000 on Gamasutra mentions that the Analyzer features " packet dropping, reordering, corruption, and bandwidth simulation, to test for application robustness in the event of poor quality or error-prone communication links" [^1]

Mentioned in the March 2001 issue of the Game Developer Magazine in the front line tools section by Daniel Huebner. The tool contains a "TCP/IP" stack to help developers add in networking features to their Playstation 2 Games. The tool also contains a PS2 “Packet Analyzer” which runs on the connected windows PC and requires the PS2 DTL-T1000 development hardware [^2].

![image alt text]({{ site.url }}/public/WpKsd53aOVPqARgF33wbqg_img_0.jpg)

Image of SN Systems demonstrating their Network Development Kit for Playstation 2 at the 2002 Game Developer Conference [^5].

### First Online PS2 Game made possible with SN Systems NDK

On a post on their official website entitled "SN Systems supports the first PlayStation®2 online enabled game" (25th October 2001) they announce that “Tony Hawk's Pro Skater™ 3” used their Network Development Kit to become the first online PS2 Game! [^3]. It was developed By Neversoft Entertainment and also used the SN Systems ProDG development kit.

## NDK TCP/IP Stack

Diagram from the official website explaining how the TCP/IP stack works.

![image alt text]({{ site.url }}/public/WpKsd53aOVPqARgF33wbqg_img_1.jpg)

It all starts from the Socket or Modem/Device API in the Emotion Engine (EE), this is the API that the game developers will use to make network calls and thus is the public interface for the library. 

They have tried to make the library similar to the "BSD sockets" library but due to the nature of the Emotion Engine this was not easy. They needed to create a library which could be called by multiple threads simultaneously in the EE [^4].

The TCP/IP Stack runs on the Playstation 2's I/O Processor (IOP) rather than on the Emotion Engine CPUs in order to allow the game to use the 'precious emotion engine processing time’ rather than the networking library slowing the game down. It supports both blocking and non-blocking sockets but suggests using the non-blocking sockets from non-main-game-loop threads [^4].

### Memory impact of using the NDK

<table>
  <tr>
    <td></td>
    <td>IOP memory usage</td>
    <td>Emotion Engine memory usage</td>
  </tr>
  <tr>
    <td>Sony Computer Entertainment PlayStation®2 Network Adaptor (Ethernet)</td>
    <td>361k</td>
    <td>39k</td>
  </tr>
  <tr>
    <td>USB Ethernet adapter</td>
    <td>439k</td>
    <td>39k</td>
  </tr>
</table>


### Support for multiple Ethernet Adapters

One big bonus feature of the SN Systems NDK is that it actually supports not just the official Sony PS2 Ethernet adapter but also third party USB ethernet adapters too! This allowed gamers (and development studios) to purchase much cheaper hardware to play games using the NDK.

### Supported Protocols

According to the official specifications of the NDK it claims to support more than just TCP/IP [4]:

* TCP/IP - Transport Control Protocol / Internet Protocol 

* UDP - User Datagram Protocol 

* PPP - Point-to-Point Protocol (PPP is always built into the Stack irx file but will only be used when a modem driver is used) 

* PPPoE - PPP over Ethernet 

* ARP - Address Resolution Protocol (ARP will only be used when an Ethernet or DECI2 driver is loaded) 

* ICMP - Internet Control Message Protocol 

* DHCP - Dynamic Host Configuration Protocol 

* CHAP - Challenge-Handshake Authentication Protocol 

* PAP - Password Authentication Protocol

## NDK Analyzer

The SN Systems Network Development Kit Analyzer is a program that runs on the developers PC and can intercept all the network packets coming into and out from the Playstation 2 [^4]. 

It uses the DECI2 interface instead of relying on a PS2 ethernet adapter or usb modem. It seems to be able to test reliability by dropping network packets and simulating different levels of bandwidth, it can also show performance graphs, statistics etc [^6]. 

I presume this system worked very similar to Wireshark, it would be great to get a screenshot of it running.

## Games using SN Systems ProDG Network Development Kit

I wonder if there is a list of PS2 games built using the SN Systems NDK, it will be a subset of the games listed [here](https://en.wikipedia.org/wiki/List_of_PlayStation_2_online_games) and we know Tony Hawk 3, 4 and Underground are definitely using it according to the official website.

One way to look would be to search the game disk for an IRX in the modules folder that contains the NDK TCP/IP module (snstkrel.irx or wildcard sn****.irx). Even better would be to find a game with snstkdbg.irx as that would also have the debug information in it!

## IRX Files provided by NDK

These are the library files that you can dynamically link your application code to and will run on the IOP in the PS2. You should be able to find some of these in the MODULES folder of a PS2 disk that used the NDK!

<table>
  <tr>
    <td>IRX File</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>sndrv000.irx
</td>
    <td>DECI2 driver </td>
  </tr>
  <tr>
    <td>sndrv001.irx
</td>
    <td>USB-Ethernet (not PPPoE) driver </td>
  </tr>
  <tr>
    <td>snstkdbg.irx
snstkrel.irx</td>
    <td>TCP/IP Stack debug version - includes run-time debug logging 
TCP/IP Stack release version - no run-time debug logging</td>
  </tr>
  <tr>
    <td>snstfdbg.irx
snstfrel.irx</td>
    <td>Fast API IOP component - includes run-time debug logging 
Fast API IOP component - no run-time debug logging </td>
  </tr>
  <tr>
    <td>sndrv202.irx</td>
    <td>Wrapper driver for SCE Ethernet (PPPoE variant) driver </td>
  </tr>
  <tr>
    <td>sndrv201.irx</td>
    <td>USB-Ethernet (PPPoE variant) driver </td>
  </tr>
  <tr>
    <td>sndrv200.irx</td>
    <td>PPPoE support </td>
  </tr>
  <tr>
    <td>sndrv101.irx</td>
    <td>Wrapper driver for SCE modem driver </td>
  </tr>
  <tr>
    <td>sndrv100.irx</td>
    <td>Wrapper driver for SCE Ethernet (not PPPoE) driver </td>
  </tr>
  <tr>
    <td>sndrv003.irx</td>
    <td>Conexant chip set USB modem driver </td>
  </tr>
  <tr>
    <td>sndrv002.irx</td>
    <td>Lucent chip set USB modem driver </td>
  </tr>
</table>


Also you will need the following irx modules that are distributed by Sony in their Official SDK:

<table>
  <tr>
    <td>usbd.irx</td>
    <td>USBD library - low-level USB functions used by all USB drivers.</td>
  </tr>
  <tr>
    <td>dev9.irx</td>
    <td>HDD/Ethernet/modem adapter low-level library</td>
  </tr>
  <tr>
    <td>smap.irx</td>
    <td>Ethernet driver - for Sony network adaptor (Ethernet/modem) </td>
  </tr>
  <tr>
    <td>spduart.irx</td>
    <td>Modem driver - for Sony network adaptor (Ethernet/modem)</td>
  </tr>
  <tr>
    <td>ommodem.irx</td>
    <td>Omron modem driver</td>
  </tr>
</table>


## References

[^1]: Gamasutra Feature on NDK - [https://www.gamasutra.com/view/news/91158/SN_Systems_Brings_Internet_Gaming_Closer.php](https://www.gamasutra.com/view/news/91158/SN_Systems_Brings_Internet_Gaming_Closer.php)

[^2]: Game Developer Magazine - March 2001

[^3]: First PS2 Online Game (25th October 2001) [https://web.archive.org/web/20040817005855/http://www.snsys.com:80/news/25100101.htm](https://web.archive.org/web/20040817005855/http://www.snsys.com:80/news/25100101.htm) 

[^4]: Wayback Machine Archive for the Official SN Systems description of the NDK - [https://web.archive.org/web/20060220113243/http://snsys.com:80/PlayStation2/ndk.htm](https://web.archive.org/web/20060220113243/http://snsys.com:80/PlayStation2/ndk.htm) 

[^5]: GDC 2002 - [http://www.tmstation.scei.co.jp/ps2/public/Newsletter0006/nl06e-gdc.html#snsystems2](http://www.tmstation.scei.co.jp/ps2/public/Newsletter0006/nl06e-gdc.html#snsystems2) 

[^6]: The Game Developers Conference Report 2002 - [http://www.tmstation.scei.co.jp/ps2/public/Newsletter0006/nl06e-gdc.html](http://www.tmstation.scei.co.jp/ps2/public/Newsletter0006/nl06e-gdc.html) 

