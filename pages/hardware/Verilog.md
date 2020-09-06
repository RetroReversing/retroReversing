---
layout: post
tags: 
- hardware
- n64
- leak
title: Verilog
image: /public/images/hardware/Verilog Hardware Description Language.jpg
twitterimage: https://www.retroreversing.com/public/images/hardware/Verilog Hardware Description Language.jpg
permalink: /verilog
breadcrumbs:
  - name: Home
    url: /
  - name: Hardware
    url: /hardware
  - name: Verilog
    url: #
recommend: 
- hardware
- leak
editlink: /hardware/Verilog.md
updatedAt: '2020-05-08'
twitterimage: https://www.retroreversing.com/public/Hardware/Verilog.jpg
---
<section class="postSection">
    <img src="/public/images/hardware/Verilog Hardware Description Language.jpg" style="width:inherit;" class="wow slideInLeft postImage" />
<div markdown="1">
Verilog (Verify Logic) is a hardware definition programming language, this means that it is a text representation of a Digital circuit. So if you wanted to design your own hardware or program a FPGA you would use this language to develop all the logic before the final board is printed.

There are a number of reasons why Verilog is interesting to us at RetroReversing, one of them is due to the leaks of the official Verilog source code by Nintendo for a variety of their consoles.

The other reason is that it opens the door to much more efficient emulation devices based on FPGAs such as a MiSTer.
</div>
</section>

# How does it work
At first glance Verilog source code looks very similar to a traditional programming language such as Python or C/C++. However instead of being compiled down into machine code and run on a CPU, Verilog source code gets `synthesised` into the FPGA which re-configured the logic blocks of the FPGA [^1]. 

---
# Official Verilog Source code
Nintendo designed the hardware for most of their consoles using Verilog and luckily for us some of the source code for these components were released to the internet in the last few decade.

## Nintendo 64 Architecture in Verilog
The Nintendo 64 has been notoriously hard to emulate due to the complexity of the Reality Co-processor (RCP). 

In late 1999 a rouge SGI developer leaked what became known as the `Oman Archive`, this was an archive of most of the source code used during the development of the N64 Hardware. 

This included the full Verilog source code for both the retail console and the development hardware!

{% include link-to-other-post.html post="/oman-archive" description="For more information about the Oman Archive Nintendo 64 Leak click here." %}

## Nintendo Wii Components in Verilog
More recently in May 2020, the official Verilog source code for a few of the Wii (Codename Revolution) chips were released to the internet.

The Wii Verilog source code contained in this leak includes:
* AES
* SHA
* Flash engine


---
# FPGA Hardware emulation
Software based emulators are not the only way to simulate old hardware on more modern devices. A more efficient way to emulate early computers and consoles is to emulate them on a hardware level, this can be done using something called an FPGA chip.

Field Programmable Gate Array (FPGA) is a chip with logic blocks that can be re-configured after the chip is manufactured [^1]. 

This allows the chip to be reconfigured to somewhat match the original circuits of the system you want to emulate. This is much more efficient and can technically be more accurate if the code used to generate the FPGA configuration (in this case Verilog) is correct.

## Program Your Own FPGA Video Game
Andy West (Element 14) presents and excellent tutorial that convert the basics of what an FPGA is and even goes into detail in how to write a Pong clone in Verilog! This is a must watch video for anyone interested in FPGAs.

It uses a `DE0-Nano` development board with `Altera's Quartus II` design software and of course the Verilog Hardware description language [^1]. It even has support for a NES controller to play the game!

<iframe width="560" height="315" src="https://www.youtube.com/embed/inrfigeLJeM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## VerilogBoy - GameBoy Architecture in Verilog
Wenting Zhang has implemented a working GameBoy on an FPGA in Verilog for a school project [^2]. 

He details his amazing achievement in the talk below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wWD8g5P2cvk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## MiSTer
The MiSTer is an open source hardware project designed to emulate classic compares, consoles and arcade machines at the hardware level on an FPGA. 

You can find out more information in this excellent overview by `SmokeMonster` on YouTube.

<iframe width="560" height="315" src="https://www.youtube.com/embed/igiVHfBzX8w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### MiSTer Cores written in Verilog
If you are interested in coding in Verilog for the MiSTer then you might want to check out some of the existing projects in the link below.

{% include link-to-other-site-text.html title="Mister Cores written in Verilog" url="https://github.com/MiSTer-devel?language=verilog" word1="MiSTer-devel" word2="Verilog" color1="wisteria" color2="midnight" description="Click here to view all the projects written in Verilog for the MiSTer" %}


---
# References
[^1]: [Program Your Own FPGA Video Game - YouTube](https://www.youtube.com/watch?v=inrfigeLJeM)
[^2]: [How I started learning FPGA: My journey writing a GameBoy in Verilog - YouTube](https://www.youtube.com/watch?v=wWD8g5P2cvk)
