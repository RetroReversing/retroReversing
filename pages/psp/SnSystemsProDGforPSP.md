---
layout: post
tags: 
- psp
- sdk
- snsystems
title: SN Systems ProDG PSP SDK
thumbnail: /public/consoles/Sony PSP.png
image: /public/images/psp/SN Systems ProDG PSP.jpg
twitterimage: https://www.retroreversing.com/public/images/psp/SN Systems ProDG PSP.jpg
permalink: /sn-systems-pro-dg-psp-sdk/
breadcrumbs:
  - name: Home
    url: /
  - name: Sony PSP
    url: /psp
  - name: SN Systems ProDG PSP SDK
    url: #
recommend: 
- sdk
- psp
editlink: /psp/SnSystemsProDGforPSP.md
updatedAt: '2021-03-26'
---

# Introduction 

## What is the SN Systems ProDG PSP SDK?
SN Systems were in the business of creating excellent 3rd party development tools and many game development studios relied on them to provide first class tools for console development. The PSP was no different and SN Systems started developing its PSP version of its popular ProDG SDK sometime in 2003 (as far as we know).

{% include link-to-other-post.html post="/companies/snsystems/" description="For more information about SN Systems check out this post." %}

## What was contained in the SDK?
The SDK contained the SN Systems Compilers (SNC C/C++) which were optimised specifically for the handheld's cpu architecture, allowing faster assembly code to be generated compared to Sony's standard SDK.

The SDK contained a few main parts:
* ProDG Tuner
* Target Manager
* Proview

### ProDG Tuner
The SDK also contained the ProDG Tuner (Tuner-LE) which was used to for game optimization by visualising code and providing information about where the main bottlenecks are [^2].

### Target Manager
Similar to the ProDG SDKs for other consoles this SDK included the **Target Manager** which allowed shared usage of multiple PSP development Kits via the internal network.

### Proview (Proview-LE)
Proview is an optional part of the SDK tailored to artists, this allows them to test how their assets look and run on the PSP hardware without having to create a new build of the game. This can be run through the previously discussed Target Manager meaning any artist PC could connect to it similar to a shared network printer.

## What are the known versions of the SDK?
So far we only know of one versions to exist:
* 2.7.1 - used in Need for Speed

## Have any versions of the SDK been leaked?
No versions of the ProDG SDK for the PSP have currently been leaked to the internet, although a photo of it had been shared to Andrew Borman's Twitter:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">When you know, you know <a href="https://t.co/23r0yLiAd1">pic.twitter.com/23r0yLiAd1</a></p>&mdash; Andrew Borman (@Borman18) <a href="https://twitter.com/Borman18/status/1375240658533900289?ref_src=twsrc%5Etfw">March 26, 2021</a></blockquote> 
---
# Usage
Although the SDK was third party it was extremely popular among PSP development studios and many games used the SDK's excellent compilers and debug functionality.

## What games used the ProDg PSP SDK?
As this is a third party optional SDK not all PSP games would have used it as it is not a requirement and some just used the standard official Sony SDK.

However the SDK was still very popular and according to TotalVideoGames.com 20 out of the 24 launch titles for the PSP were created using the ProDG SDK! [^1].

Known games include:
* Need for Speed games

## How do I find out if a game uses the PRODG SDK?
If you are interested to find out if a certain game used this SDK then you can run the **strings** command on the main game executable.

Below is an example of strings that hint at the use of the SN Systems SDK:
```
"C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1/sdk/PSP/bin/pspsnc.exe -o ",
            "..\\nfs\\nfsa.elf",
            "..\\nfs\\nfsa.map",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\PSP\\lib\\psp.ld",
            "-strip-unused -Wl",
            "-strip-unused-data -Wl",
            " -lvfpu -G0 -u rm_CompressLitTexture -u rm_Gouraud -u rm_GouraudApt -u rm_TextureApt -u rm_NFSCar_Window -u rm_CompressGouraud -u rm_NFSCar_TextureShiny -u rm_NFSCar_Texture -u rm_NFSCar_Gouraud -u rm_CompressGouraud_minimap  ",
            "indep\\misc\\main.cpp.obj",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\PSP\\lib",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib",
            "  --start-group ctrl_stub.a display_stub.a ge_user_stub.a crt0_prx.o kernel_bridge.o ",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\ctrl_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\display_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\ge_user_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libatrac3plus_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libwave.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libsas_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\wlan_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\mediaman_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\mpeg_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\power_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_adhoc_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_adhocctl_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_apctl_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_inet_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_resolver_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\pspnet_ap_dialog_dummy_stub_weak.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\rtc_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\utility_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libkernel.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\libdeflt.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\impose_stub.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\PlayStationPortableSN\\2.7.1\\sdk\\sce\\psp\\lib\\audio_stub_02.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\Apt\\5.03.05\\lib\\psp-sn\\libaptz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\Apt\\5.03.05\\lib\\psp-sn\\libaptauxeaglrealz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\csis\\2.07.02-psp2.7.1sdk\\lib\\psp-sn\\libcsiszd.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\snd\\9.09.07-psp2.7.1sdk\\lib\\psp-sn\\libsndzd.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\TRC\\7.01.14\\lib\\psp-sn\\libTRCa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realmemcard\\1.01.10\\lib\\psp-sn\\librealmemcardz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\EaVis\\2.01.09\\lib\\psp-sn\\libeavisa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\DirtySDK\\releases\\4.3.2.7\\lib\\psp\\release\\libdirtysock.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\DirtySDK\\releases\\4.3.2.7\\lib\\psp\\release\\libdirtygraph.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\DirtySDK\\releases\\4.3.2.7\\lib\\psp\\release\\libdirtystrings.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\netcore\\releases\\2.04.32\\lib\\psp\\libnetcorea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\videocapture\\1.00.01\\lib\\psp\\libvideocapturea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libbwaregamea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libcagea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libcorea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\lib\\psp-sn\\libnfsrmsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\eagl\\1.04.14\\lib.psp\\libeaglsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\eagl\\1.04.14\\lib.psp\\libeaglanimsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\eagl\\1.04.14\\lib.psp\\libeaglutilsnz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\rcmp\\1.01.11\\lib_real5\\psp-sn\\librcmpava.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\rcmp\\1.01.11\\lib_real5\\psp-sn\\librcmpdecodera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\rcmp\\1.01.11\\lib_real5\\psp-sn\\librcmpvda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealdebuga.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealinputa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealmatha.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealmema.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealsystema.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealcodeca.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealfilea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realcore\\1.07.21\\lib\\psp-sn\\librealstda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realgraph\\1.00.13\\lib\\psp-sn\\librealfonta.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realgraph\\1.00.13\\lib\\psp-sn\\librealgrapha.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realgraph\\1.00.13\\lib\\psp-sn\\librealshapea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\realmath\\1.00.10\\lib\\psp-sn\\librealmathz.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\proview\\0.00.01\\lib\\snproview.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\AIP\\5.03.09\\lib\\psp\\libaipa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\depot\\project\\MediaCenter\\1.00.11\\lib\\psp\\libmediacentera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\AIPFrontend\\libAIPFrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ai\\libaia.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\animation\\libanimationa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\camera\\libcameraa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\eaxsound\\libeaxsounda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\frontend\\libfrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\hud\\libhuda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\misc\\libmisca.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\physics\\libphysicsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\render\\librendera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\world\\libworlda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generated\\libgenerateda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubitypes\\libubitypesa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubiengine\\libubienginea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubistd\\libubistda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\Tools\\libToolsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generatedpsp\\libgeneratedpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\psp\\libpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\online\\libonlinea.a",
            "  --end-group -nostdlib -lgu -lgum -lkernel -lm -lc -lsn -lsncpp -lgcs ",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\nfs\\indep\\misc\\main.cpp.obj",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\AIPFrontend\\libAIPFrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ai\\libaia.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\animation\\libanimationa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\camera\\libcameraa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\eaxsound\\libeaxsounda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\frontend\\libfrontenda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\hud\\libhuda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\misc\\libmisca.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\physics\\libphysicsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\render\\librendera.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\world\\libworlda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generated\\libgenerateda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubitypes\\libubitypesa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubiengine\\libubienginea.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\ubistd\\libubistda.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\Tools\\libToolsa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\generatedpsp\\libgeneratedpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\psp\\libpspa.a",
            "C:\\L10N\\Studio\\NFS\\PSP\\nfs3\\branches\\final\\game\\build\\psp-sn-release-jp\\online\\libonlinea.a"

```

# References
[^1]: [PSP Dev Tool Success For UK Firm News](https://archive.ph/20130630110629/http://www.totalvideogames.com/PSP/news/PSP-Dev-Tool-Success-For-UK-Firm-6919.html)
[^2]: [SN Systems new product – Tuner-LE for PSP™ - GamesIndustry.biz](https://www.gamesindustry.biz/articles/sn-systems-new-product-tuner-le-for-psp)
[^3]: [SN Products Home Page](http://web.archive.org/web/20050908160005/http://www.snsystems.com/Products/)
