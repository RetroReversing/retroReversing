---
layout: post
tags: 
- ps2
- sdk
title: IRX Files for Playstation 2
thumbnail: /public/consoles/Sony PlayStation 2.png
image: https://www.retroreversing.com/public/images/ps2/PS2 IRX Files.jpg
twitterimage: https://www.retroreversing.com/public/images/ps2/PS2 IRX Files.jpg
permalink: /irx-ps2
breadcrumbs:
  - name: Home
    url: /
  - name: Sony Playstation 2
    url: /ps2
  - name: IRX Files for Playstation 2
    url: #
editlink: /ps2/irxFiles.md
recommend: 
- ps2
- sdk
updatedAt: '2021-03-25'
---
# Introduction
If you are interested in the Playstation 2, especially reversing or developing  games for it, you will eventually come across files with the .IRX extension.

## What are IRX Files?
IOP Relocatable eXecutable (IRX) are the library files that you can dynamically link your application code to and will run on the I/O Processor (IOP) in the PS2. So they are the result of compiling C/C++ code targetted to run on the Playstation 2's I/O processor, the code is compiled into MIPS R3000A Assembly and the. assembled to create the final IRX file.

## What are they used for?
Most IRX files are used for Input devices, such as the joypads, Light Guns, Eyetoy, Memory Cards etc, this is why they run on the Input/Output processor. However as the processor is just a standard general purpose MIPS processor any code can technically be put in an IRX file as long as it doesn't need to be particularly fast.

## How are they used?
You can load an IOP Module from Emotion Engine code using one of the following API commands:
 - **sceSifLoadModule**()
 - **sceSifLoadModule**()
 - **sceSifLoadStartModule**()
 - **sceSifLoadStartModule**()
 - **sceSifLoadModuleBuffer**()
 - **sceSifLoadModuleBuffer**()
 - **sceSifLoadStartModuleBuffer**()
 - **sceSifLoadStartModuleBuffer**()

## Where do I find them?
You should be able to find some of these in the **MODULES** folder of a Playstation 2 disk (but the folder depends on the disc).

# What are the known IRX Modules?
'Official' modules are modules provided to game developers in the official Sony PS2 Dev Kit.
Note that more modules than the ones marked below might be official.


IRX | Official | Usage | Description
--- | --- | --- | ---
sio2man.irx|Y|638| Manager Interface for joypads, multitaps and memory cards.
libsd.irx|Y|627| Sound Library
mcman.irx|Y|608| MCMAN is the memory card manager
mcserv.irx|Y|608| MCSERV is the memory card server. This provides the RPC interface to MCMAN
padman.irx|Y|574| Game Pad Manager
sdrdrv.irx|Y|476| Sound Driver
usbd.irx|Y|257| USBD library - low-level USB functions used by all USB drivers.
mtapman.irx|Y|187| Multi-tap manager
dev9.irx|Y|184| HDD/Ethernet/modem adapter low-level library
modhsyn.irx|Y|166| CSL Hardware Synthesizer
cdvdstm.irx|Y|161| DVD Streaming Functions
netcnf.irx|Y|156| Network Configuration
modmidi.irx|Y|153| MIDI Sequencer Module
smap.irx|Y|138| Ethernet driver - for Sony network adaptor (Ethernet/modem)
msifrpc.irx|Y|119| SIF Remote procedure Call
inet.irx|Y|117| Network Library
inetctl.irx|Y|112| iNET Control interface
sio2d.irx|Y|108| Interface for joypads, multitaps and memory cards.
ppp.irx|Y|106| Point To Point Protocol (PPP) library
usbkb.irx|Y|103| USB Keyboard Library
dbcman.irx|Y|102| Device Control Library (used by libpad2 and libmc2)
pppoe.irx|Y|99| Point To Point Protocol over Ethernet (PPPoE) library
stream.irx|Y|73| MultiStream DSP
cri_adxi.irx||73| ADX is a streamed audio format which allows for multiple audio streams, seamless looping and continuous playback (CRIWARE SDK)
libnet.irx|Y|68| libnet Library
eznetcnf.irx||64|
ezmidi.irx||63| 
lgaud.irx||63| 
ntgui2.irx|Y|61| Network configuration GUI library 2
modmsin.irx|Y|59| MIDI Sequencer Module
netcnfif.irx|Y|55| Common Network Configuration Interface Library
atad.irx|Y|45| ATA interface driver (Hard-drive)
pfs.irx|Y|43| Playstation File System (HDD)
ilink.irx|Y|42| i.LINK (IEEE1394) Terminal Library
ilsock.irx|Y|41| i.LINK (IEEE1394) Socket Library
spduart.irx|Y|37| Modem driver - for Sony network adaptor (Ethernet/modem)
hdd.irx|Y|36| Hard Disk Drive
mcxman.irx|Y|36| MCX PDA Manager Library
mcxserv.irx|Y|35|  MCX PDA Server Library
snddrv.irx||35|
eenetctl.irx|Y|35| eenetctl Library Emotion Engine Network
ent_devm.irx|Y|33| eenet device ???
ent_smap.irx|Y|33| eenet device "smap"
modsesq.irx|Y|32| SE sequencer (Music)
modsein.irx|Y|30| SE stream generation (Music)
eznetctl.irx||30| 
mc2_d.irx|Y|29| Memory Card Library 2/Module
ezentctl.irx||28| 
usbmload.irx|Y|27| USB module autoloader
moddelay.irx|Y|23| CSL MIDI Delay
modssyn.irx|Y|23| CSL Software Synthesizer
ds2u.irx|Y|22|
ds2u_d.irx|Y|22|
usbkeybd.irx|Y|22| USB keyboard sample driver (usbmload.irx compatible)
modmono.irx|Y|21| CSL MIDI Monophonic
lgdev.irx||20|
spucodec.irx|Y|20| SPU2 Waveform Data Encoding Module
mc2_s1.irx|Y|20|
usbmouse.irx|Y|19| USB Mouse
rwa.irx||19|
ds2o_d.irx|Y|18| (pad2?)
lgkbm.irx||18|
usbinit.irx|Y|17| USB autoloader
audio.irx||16|
ds2o.irx|Y|16| (pad2?)
snstkrel.irx||15| TCP/IP Stack release version - no run-time debug logging (SN Systems NDK)
lgdevw.irx||14| 
scream.irx|Y|14| SCREAM sound
rspu2drv.irx||14| 
sndrv200.irx||13| PPPoE support (SN Systems NDK)
rtfssiop.irx||13| 
sndrv100.irx||13| Wrapper driver for SCE Ethernet (not PPPoE) driver (SN Systems NDK)
sndrv202.irx||13| Wrapper driver for SCE Ethernet (PPPoE variant) driver (SN Systems NDK)
an986.irx|Y|13| USB Ethernet (not to be included in titles?)
snprofil.irx||12| SNProfil Module (SN Systems SDK) (Neversoft)
ds1o_d.irx|Y|11|
usbpspcm.irx|Y|11| PSP Communication Library
ds2o_s1.irx|Y|11|
989snd.irx||10|
ilsample.irx|Y|10| iLink Sample
ds1o_s1.irx|Y|10|
drtysckf.irx||10| 
ezpcm.irx||10| 
scrtchpd.irx|Y|10| ScratchPad
panicsys.irx||9| (Tiger Woods PGA TOUR 06, Sonic Heroes)
skhsynth.irx||9| Standard Kit Library/Sound System
ds2u_s1.irx||9| 
ds1u_d.irx||9| 
alasd.irx||9| (Swat Global Strike Team Pal)
mem2mb.irx||9| 
cdarb.irx||9| 
sdhd.irx||9| 
hello.irx||8| 
ds1o.irx||8| 
sksound.irx||8| 
tsnddrv.irx||8| 
fmodex.irx||8| 
cxtmdm.irx||8| 
fileio.irx||8| 
iopsound.irx||8| 
ent_ppp.irx||8| 
main.irx||7| 
iopsnd.irx||7| 
pld.irx||7| 
libnetb.irx||7| 
voipf.irx||7| 
fsiopsnd.irx||7| 
fmod.irx||7| 
zaudio.irx||7| 
sound.irx||7| 
usbgun.irx||7| 
nusound.irx||7| 
ent_cnf.irx||7| 
cdvdman.irx|Y|6|  Provides DVD functionality to IOP
iopmain.irx||6| 
gtfscdvd.irx||6| 
msl.irx||6| 
skmidi.irx||6| 
989nomid.irx||6| 
sndfi.irx||6| 
sndrv001.irx||6| USB-Ethernet (not PPPoE) driver (SN Systems NDK)
sounddrv.irx||6| 
koeisnd.irx||6| 
sksesq.irx||6| 
cdstream.irx||6| 
skmsin.irx||6| 
rxsnddrv.irx||6| 
iopmem.irx||5| 
audio_r.irx||5| 
ommodem.irx||5| Omron modem driver (Networking) (for use with SCE Inet)
ds1u.irx||5| 
dgco_s1.irx||5| 
sndn2drv.irx||5| 
libsmf2.irx||5| 
ntpwroff.irx||5| 
fsiopusb.irx||5| 
gtfshost.irx||5| 
exaudvd.irx||5| 
aveppp.irx||5| 
sndbget.irx||5| 
iopsys.irx||5| 
eyetoy.irx||5| EyeToy USB Library
dgco_d.irx||5| 
mstream.irx||5| 
sndrv101.irx||5| Wrapper driver for SCE modem driver (SN Systems NDK)
avetcp.irx||5| 
dare_re.irx||5| 
fsiopums.irx||5| 
ds1u_s1.irx||5| 
dare_rt.irx||4| 
tsnddrvc.irx||4| 
gs_iop.irx||4| 
zcddvd.irx||4| 
sndrv201.irx||4| USB-Ethernet (PPPoE variant) driver (SN Systems NDK)
989dstrm.irx||4| 
sndrv000.irx||4| DECI2 driver provided in the SN Systems Network Development Kit (NDK)
devglue.irx||4| 
isndstrm.irx||4| 
triiop.irx||4| 
stradpcm.irx||4| 
liquid_f.irx||4| 
qnet.irx||4| 
audio_d.irx||4| 
sksadpcm.irx||4| 
cdloader.irx||4| 
dgco.irx||4| 
sndrv002.irx||4| Lucent chip set USB modem driver (SN Systems NDK)
imemman.irx||4| 
iophooey.irx||4| 
cdvdfsv.irx|Y|4| Called by Emotion Engine and forwards calls on to cdvdman.irx
ezsound.irx||4| 
ezadpcm.irx||3| 
avedhcp.irx||3| 
snavetcp.irx||3| 
synthcd.irx||3| 
snavdhcp.irx||3| 
ps2_lla.irx||3| 
989err.irx||3| 
soundsys.irx||3| 
ostmdm_s.irx||3| 
inetlog.irx||3| 
gs_iopt.irx||3| 
attymon.irx||3| 
boxd.irx||3| 
flowd.irx||3| 
psx2cda.irx||3| 
sniopint.irx||3| 
iopaudio.irx||3| 
filemgrd.irx||3| 
flowr.irx||3| 
amsound.irx||3| 
sndrv.irx||3| 
989mini.irx||3| 
gtfsatmn.irx||3| 
modsd.irx||3| 
snstkdbg.irx||3| TCP/IP Stack debug version - includes run-time debug logging (SN Systems NDK) *DEBUG*
mpinet.irx||3| 
fmodexl.irx||3| 
fsiopcom.irx||3| 
overlord.irx||3| Jak II (http://psx-scene.com/forums/f150/jak-ii-crashing-94%25-opl-133963/ ) (and Jak X?) (GPL violation, MiniLZO)
poweroff.irx|Y|3| Poweroff Processing Libraries
fsmfstrm.irx||3| 
filemgrr.irx||3| 
entcnfde.irx||3| 
ifconfig.irx||3| 
headseto.irx||3| 
libssl.irx||3| 
boxr.irx||3| 
ezbgm.irx||3| 
sndvglue.irx||3| 
usbsrch.irx||3| Usb searcher 2002.11.08
fssdivag.irx||3| 
iltrans.irx||3| 
psx2usbc.irx||3| 
snaveppp.irx||3| 
iop.irx||3| 
loadhigh.irx||3| 
vdgcu.irx||2| 
sndbgext.irx||2| 
hkstrm.irx||2| 
ildrv.irx||2| 
mwfile.irx||2| 
exaudcd.irx||2| 
usb_srch.irx||2| 
vdgcu_d.irx||2| 
pdicdvd.irx||2| 
ycdvd.irx||2| 
iocdvd.irx||2| 
pdispu2.irx||2| 
lanegg.irx||2| 
eorps2io.irx||2| 
dare_s.irx||2| 
sfx.irx||2| 
ps2_sfx.irx||2| 
fpdrvr.irx||2| 
pdiusb.irx||2| 
usbdev.irx||2| 
hksif.irx||2| 
libpdi.irx||2| 
fp.irx||2| 
fsiopapm.irx||2| 
music.irx||2| 
twofish.irx||2| 
gzs.irx||2| 
gtfsdvd.irx||2| 
exaudio.irx||2| 
iopdrivr.irx||2| 
cselib00.irx||2| 
iopsetup.irx||2| 
ntguicnf.irx||2| 
rtfsdvd.irx||2| 
loader.irx||2| 
sndscrm.irx||2| 
b4route.irx||2| 
release.irx||2| 
kcejeast.irx||2| 
gas.irx||2| 
rtinetb.irx||2| 
ssm.irx||2| 
overlrd2.irx||2| 
scrm_err.irx||2| 
nusndstr.irx||2| 
vdgcu_s1.irx||2| 
pdistr.irx||2| 
iomgr.irx||2| 
cutstrm.irx||2| 
gzmfs.irx||2| 
inevnet.irx||2| 
koeiads.irx||2| 
fssdsyth.irx||2| 
b3route.irx||2| 
istrfile.irx||2| 
ostmdm_a.irx||2| 
ha.irx||2| 
tssdrv.irx||2| 
musicstr.irx||2| 
atsopsx2.irx||2| 
his.irx||2| 
nusnd3g.irx||2| 
ave_wrap.irx||2| 
avewrape.irx||2| 
ymstream.irx||2| 
soundcd.irx||2| 
ngysnd.irx||2| 
iophoo_d.irx||2| 
ngyhsyn.irx||2| 
acioputl.irx||2| 
rsrciop.irx||2| 
ysound.irx||2| 
radsound.irx||2| 
midiman.irx||2| 
sdstr3.irx||2| 
znasnd.irx||2| 
audiopf.irx||2| 
989nsnm.irx||2| 
acc_com.irx||2| 
ngycdvd.irx||2| 
mstream2.irx||2| 
rpc.irx||2| 
sd_call.irx||2| 
aaaiop.irx||2| 
audvag.irx||2| 
usbkbd.irx||2| 
spu_iop.irx||2| 
kessound.irx||2| 
rqeemem.irx||2| 
mwfilefr.irx||2| 
fs2.irx||2| 
usbmic.irx||2| 
iopfile.irx||2| 
igfileio.irx||2| 
nufile.irx||2| 
dmanr.irx||1| 
kaudio.irx||1| 
sg2iopm1.irx||1| 
fmod_sm.irx||1| 
srouter.irx||1| 
iopfiled.irx||1| 
vcfile.irx||1| 
psx2ili.irx||1| 
thmus.irx||1| 
am_sound.irx||1| 
ssnd2.irx||1| 
bstream.irx||1| 
iopmemd.irx||1| 
iopserv.irx||1| 
filesys.irx||1| 
aix_mod.irx||1| 
ipset.irx||1| 
sockserv.irx||1| 
csl.irx||1| 
usbmice.irx||1| 
sonica.irx||1| 
adpcm.irx||1| 
karaoke.irx||1| 
pxaudio.irx||1| 
modsesq2.irx||1| 
kiopstr.irx||1| 
b2ilink.irx||1| 
mgwfsiop.irx||1| 
spduar~1.irx||1|
storage.irx||1| 
adpcmstr.irx||1| 
stream_t.irx||1| 
iop_main.irx||1| 
gtfsb2.irx||1| 
iopmidi.irx||1| 
musdvd.irx||1| 
korgivag.irx||1| 
pfm.irx||1| 
usb_buzr.irx||1| 
pttsrvr.irx||1| 
dman.irx||1| 
sulpha~1.irx||1|
drtysckd.irx||1| 
se_cd.irx||1| 
egiopads.irx||1| 
kl2.irx||1| 
usbkey.irx||1| 
rtinetc.irx||1| 
xvi_iop.irx||1| 
sirens3.irx||1| 
msis_iop.irx||1| 
swps2io.irx||1| 
stream~1.irx||1| 
musicdrv.irx||1| 
sniopps2.irx||1| 
filecd.irx||1| 
fssd.irx||1| 
sulpha~2||irx|1|
pcmstrm.irx||1| 
stream73.irx||1| 
pl2303.irx||1| 
fssdevag.irx||1| 
iopcd_cr.irx||1| 
fssdads.irx||1| 
fmods.irx||1| 
vctrace.irx||1| 
memclear.irx||1| 
casound.irx||1| 
sd_drv21.irx||1| 
ggsound.irx||1| 
rtfsdvdr.irx||1| 
gtfsdvdj.irx||1| 
libaudio.irx||1| 
ntgui2~1.irx||1|
sndman.irx||1| 
mjolnir.irx||1| Used in the game Maximo Music/voice library
mjolnird.irx||1| Used in the game Maximo (debug version, has debug symbols) Music/voice library
timer.irx||1| 
sirens3f.irx||1| 
adpcmst.irx||1| 
ygysnd.irx||1| 
gnkimode.irx||1| 
sdstr.irx||1| 
kfileio.irx||1| 
soundhd.irx||1| 
igaudio2.irx||1| 
fmod_s.irx||1| 
b2stream.irx||1| 
fpsound.irx||1| 
psx2spch.irx||1| 
rnxpiop.irx||1| 
stream52.irx||1| 
cdadpcm.irx||1| 
atstrm2.irx||1| 
989nostr.irx||1| 
evo_opt4.irx||1| 
tsnddrvd.irx||1| 
audio_p.irx||1| 
pdinetcnf.irx||1| 
iopcd_cd.irx||1| 
apemod.irx||1| 
cw_opt0.irx||1| 
nusnd3m.irx||1| 
synth_s.irx||1| 
b2dist.irx||1| 
stream_d.irx||1| 
gpsesq2.irx||1| 
fileiop.irx||1| 
pdi1394.irx||1| 
sdx_mod.irx||1| 
agesnd.irx||1| 
seng.irx||1| 
fansound.irx||1| 
f1_sound.irx||1| 
pcadpcm.irx||1| 
sndhdrt.irx||1| 
afiowdrv.irx||1| 
core.irx||1| 
cdbios.irx||1| 
netarb.irx||1| 
sndctltx.irx||1| 
sndkss.irx||1| 
aciopss.irx||1| 
iopsndsd.irx||1| 
packfs.irx||1| 
modxfade.irx||1| 
iopsndd.irx||1| 
iopint.irx||1| 
dscdrv.irx||1| 
streamer.irx||1| 
rpgsnd.irx||1| 
se.irx||1| 
skatutil.irx||1| 
lecusb.irx||1| 
kssdrv.irx||1| 
aman.irx||1| 
pttclnt.irx||1| 
tlsnddrv.irx||1| 
skdrv.irx||1| 
fssdmvag.irx||1| 
ilinktty.irx||1| 
eznctl_s.irx||1| 
sd_hd.irx||1| 
siopstr2.irx||1| 
gnksound.irx||1| 
castream.irx||1| 
lgvid.irx||1| 
usbstor.irx||1| 
vag.irx||1| 
sd_drv.irx||1| 
sddrviop.irx||1| 
epsprint.irx||1| 
atnet2.irx||1| 
dongle.irx||1| 
sn_cdarb.irx||1| 
audiops2.irx||1| 
fssiop.irx||1| 
cddvd.irx||1| 
aswdrv.irx||1| 
soundm.irx||1| 
snkdvd.irx||1| 
lecglusb.irx||1| 
snmon.irx||1| 
sdsq.irx||1| 
usbhandl.irx||1| 
pcmstr.irx||1| 
iopcd_cf.irx||1| 
sndhddg.irx||1| 
triiopg.irx||1| 
multistr.irx||1| 
ilinkpc.irx||1| 
saldrv.irx||1| 
boot.irx||1| 
csealpha.irx||1| 
iremsnd.irx||1| 
nstmman.irx||1| 
nousbfs.irx||1| 
mcd.irx||1| 
cdbiosh.irx||1| 
soundeng.irx||1| 
strmiop.irx||1| 
sn_alasd.irx||1| 
capsdrvd.irx||1| 
nusound2.irx||1| 
sasnd.irx||1| 
psx2spc4.irx||1| 
mpquid_f.irx||1| 
setinit.irx||1| 
ps2sound.irx||1| 
sdm.irx||1| 
swp_snd.irx||1| 
smpd.irx||1| 
sengine.irx||1| 
usb_drv.irx||1| 
pinput_r.irx||1| 
iopmisc.irx||1| 
sound2.irx||1| 
gnfs.irx||1| 
baaudio.irx||1| 
pfile_r.irx||1| 
rwa_cdvd.irx||1| 
psx2spc3.irx||1| 
spdif.irx||1| 
xvi_snd.irx||1| 
snstfrel.irx||1| Fast API IOP component - no run-time debug logging (SN Systems NDK)
sampman2.irx||1| 
synthmod.irx||1| 
dmaq.irx||1| 
imodeman.irx||1| 
mjolnm2r.irx||1| 
oniss2.irx||1| 
libsd~1.irx||1| 
aswmid.irx||1| 
mbank.irx||1| 
bsdsocki.irx||1| 
dcs.irx||1| 
nlsnd.irx||1| 
fafileio.irx||1| 
mus.irx||1| 
moused.irx||1| 
bsound.irx||1| 
sndcdrt.irx||1| 
sndhdre.irx||1| 
bastream.irx||1| 
libngx.irx||1| 
ubisound.irx||1| 
ps2audio.irx||1| 
softfx_s.irx||1| 
eat6mb.irx||1| 
dsproute.irx||1| 
sndirx.irx||1| 
iopal.irx||1| 
psound_r.irx||1| 
fsys_iop.irx||1| 
vcaudio.irx||1| 
pwroffn9.irx||1| 
zfilesrv.irx||1| 
ilink2.irx||1| 
sampman.irx||1| 
twofisht.irx||1| 
stmman.irx||1| 
smpd_iop.irx||1| 
sonicar.irx||1| 
usbk_d_t.irx||1| 
bufstr.irx||1| 
lecaudio.irx||1| 
underlrd.irx||1| 
ustorage.irx||1| 
stream_a.irx||1| 
iopstr.irx||1| 
flshlnk.irx||1| 
libmal.irx||1| 
tsl_wav.irx||1| 
audioiop.irx||1| 
vvaa.irx||1| 
sqiopmem.irx||1| 
psx2spc2.irx||1| 
fader.irx||1| 
usbjoy.irx||1| 
careleas.irx||1| 
stream71.irx||1|
css.irx||1| 
bgmstrm.irx||1| 
ycdvdr.irx||1| 
tsnddrvm.irx||1| 
mouse.irx||1| 
libasps2.irx||1| 
libmusic.irx||1| 
synthhst.irx||1| 
ps2_iop.irx||1| 
sounds.irx||1| 
samwar.irx||1| 
keybd.irx||1| 
libsound.irx||1| 
mainrel.irx||1| 
nis.irx||1| 
bgm.irx||1| 
vcioplib.irx||1| 
sifcmd.irx||1| 
sifstrm.irx||1| 
fantaiop.irx||1| 
jsifman.irx||1| 
iop2meg.irx||1| 
atmon.irx||1| 
powoff.irx||1| 
atfile2.irx||1| 
all.irx||1| 
sg2iopd0.irx||1| 
ygycdvd.irx||1| 
989snd_d.irx||1| 
esquared.irx||1| 
dmy_file.irx||1| 
pcmplay.irx||1| 
sonicad.irx||1| 
lsound.irx||1| 
sd_cd.irx||1| 
bindstm.irx||1| 
usbk_r_t.irx||1| 
ixaudio.irx||1| 
sound2d.irx||1| 
soundvf4.irx||1| 
ygyhsyn.irx||1| 
ulsnd.irx||1| 
dvdadpcm.irx||1| 
driop.irx||1| 
iopsnds.irx||1| 
usbfs.irx||1| 
magicbus.irx||1| 
cdmodule.irx||1| 
cei.irx||1| 
ezncnf_s.irx||1| 
gbxcd.irx||1| 
sndrv003.irx||1| Conexant chip set USB modem driver (SN Systems NDK)
blade_cd.irx||1| 
