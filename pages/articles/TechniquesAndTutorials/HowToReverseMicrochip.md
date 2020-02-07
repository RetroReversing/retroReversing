---
layout: post
tags: 
- tutorial
- hardware
- microchip
title: How to reverse engineer a microchip
thumbnail: /public/consoles/Computer Old Design.png
image: https://i.ytimg.com/vi/r8Vq5NV4Ens/sddefault.jpg
permalink: /how-to-reverse-microchip
breadcrumbs:
  - name: Home
    url: /
  - name: Techniques & Tutorials
    url: /tutorials
  - name: How to reverse engineer a microchip
    url: #
recommend: 
- howitworked
- tutorial
editlink: /articles/TechniquesAndTutorials/HowToReverseMicrochip.md
videocarousel:
  - title: Part 1 Decapping
    image: https://i.ytimg.com/vi/wnQ8Td1y_dM/sddefault.jpg
    youtube: 'wnQ8Td1y_dM'
  - title: Part 2 Imaging
    image: https://i.ytimg.com/vi/r8Vq5NV4Ens/sddefault.jpg
    youtube: 'r8Vq5NV4Ens'
---
In this tutorial from Robert Baruch on his youtube channel [], the target chip used in the video series is the Texas Instruments 74LS01 Logic gate from 1986.

# First step - photos before recapping
Before de-capping the chip it is important to take photos of the top and bottom markings of the chip so you can refer to them later. The next step is decapping which will likely destroy much of the markings that you might need to refer to later [^1].

You can do this with a microscope and any camera you happen to have, phone camera should be fine, as long as it isn't too low resolution to read the markings.

# Process of De-capping a chip (Heat decapsulation)
The next step is to De-cap the chip which was covered very thoughrally in Robert Baruch's video below [^2]:
<iframe width="560" height="315" src="https://www.youtube.com/embed/wnQ8Td1y_dM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Imaging a chip
In order to take high quality images of the newly de-capped chip we need to find a way to attach the bare die to the microscope, basically to make sure it doesn't move in the process of imaging. One handy way to hold the die is the lids if you still have them from the de-capping process. Glue to die to one of the lids, just make sure you glue the side you don't want to image!

While you are waiting for the glue to dry you could be really organised and create a label with the chips reference information on it (chip number etc) and attach the label to a small container.

When the glue has dried you just need to make sure that the lid doesn't move during imaging, as it is a lot bigger than the tiny die it should be more stable and less likely to move, but you can create a 3d printed holder if you want to be professional!

## Photo time
Now the chip should be ready to be photographed, move the microscope to the start of the chip and keep creating images with a 50% overlap. To make this easier you can use a Beagle bone driver and machine kit to automatically handle this for you.

Each picture is 600 micrometers by 400 micrometers with a 50% overlap on each picture. 

## Lets get stitching
Now that you have the images it is time to stich them together, to do this you can use Microsofts Image Composite Editor (ICE), select the images and the various parameters such as 50% overlap and let it work its magic!

If you want a sharper image you can run it through Microsoft photo editor to increase the contrast.

# Delayering the chip
You will notice that the particular chip in the video tutorial has a lot of metal covering the details. So it's time to delayer the chip.

To do this you can:
1. Use Armor etch to get rid of some of the glass
2. Put in a solution of 6 parts `3% hydrogen peroxide` with 1 part `32% hydrochloric acid` for about 15 minutes
3. Use Armor etch again to get rid of more glass

Now you can repeat the imaging process from above with the delayed chip.

# Creating a Vector 
You can now trace the image created in a tool such as `Inkscape` and add labels for each pin and component and trace along the resistors etc.

---
# Other talks and resources

## Chris Gerlinsky's talk at RECON 2019 on optically preserving Mask ROMS
(The ROM Matrix Revolution Unscrambling Bits)[https://recon.cx/media-archive/2019/Session.002.Chris_Gerlinsky.The_ROM_matric_revolution_Unscrambling_bits-K0W7zZQDK9lQQ.mp4]

---
# References
[^1]: [How I reverse engineer a chip - YouTube](https://www.youtube.com/watch?v=r8Vq5NV4Ens)
[^2]: [Decapsulating a ceramic integrated circuit - YouTube](https://www.youtube.com/watch?v=wnQ8Td1y_dM)
