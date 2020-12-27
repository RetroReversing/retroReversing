---
layout: post
tags: 
- leak
- ds
- 3ds
title: Nintendo Ninja Leak  
thumbnail: /public/consoles/Nintendo 3DS.png
image: /public/images/leaks/Nintendo Ninja Leak.jpg
permalink: /ninjaleak
breadcrumbs:
  - name: Home
    url: /
  - name: Source Code
    url: /sourcecode
  - name: Nintendo Ninja Leak 
    url: #
recommend: 
- leak
- ds
- 3ds
editlink: /leaks/Nintendo Ninja Leak.jpg
twitterimage: https://www.retroreversing.com/public/images/leaks/Nintendo Ninja Leak.jpg
updatedAt: '2020-12-27'
---

The Ninja leak occurred on the 22nd December 2020 and is named after the contents containing information that prove the long-standing Nintendo "Ninja" myth. 

Including stalking and intimidation of a Nintendo 3DS developer who is well respected in the scene known as Neimod.

Note that as Nintendo kept private information about this individual such as real name, address and parents information, it is not recommended to share this information, and none of that information will be in this article.

# Files leaked:
* NintendoSDK_fromSSD_IKEDA_20151124.zip - Old 2015 Switch SDK
* Documents.7z (901.8 MB) - Anti-piracy Related documents
* Secure.7z (570.2 MB) - Security related documents

---
# Documents.7z
The Documents archive contains exactly what it says on the tin, internal documents related to security of the 3DS, Switch and WiiU Amiibos.
 
## Root files
The files at the root after extracting the directory are:
* AP紹介.pptx - Associated Press introduction
* ASSP - Empty folder
* BitLocker 回復キー 6668A7A8-9BEB-4525-9D1F-DF7614E02B3D.txt - BitLocker Drive Encryption Recovery Key
* CTR - Nintendo 3DS documents
* GlobalAPteam - Global Anti-piracy team presentations and meeting notes
* PCSG
* Switch - Switch security documents
* WiiU試遊台amiibo対応リスク.pptx - Presentation on risk of duplicating amiibo via WiiU
* セキュリティチーム運営 - Security team management files
* 暗号＆セキュリティ＆不正行為.pptx - Cryptography & Security & Fraud

### Acronyms mentioned
In some of the presentation files a number of acronyms are mentioned, we will list what they mean here.
* ASIC - Application-specific integrated circuit
* HASP - Firmware Generation Tool
* HSM - Hardware Security Module (Signing Device)
* MITM - Man in the Middle Attacks
* NCL - Nintendo Central Location in Japan
* NTD - Nintendo Technology Development (North American Nintendo division)
* NUP - Nintendo Update - used to talk about the 3DS firmware version
* PSEG - ?
* PCSG - ?

## Security team management files (/セキュリティチーム運営)
This is where the Ninja part of the name comes from, Nintendo has documented proof of stalking and intimidating consumers who managed to find any exploits for the 3DS.

The root folder only contains one document called **NXT1_revoke_toNishiurasan.pptx** which is simply a diagram of the security mldel used on the 3DS.

The folder is split into two sections:
* セキュリティ仕様書 - Security specifications
* プロジェクト - project

## Security specifications (/セキュリティ仕様書)
This folder contains a list of useful security specifications for various consoles and even android. This is to give the developers context as to what security systems are available.

The files in this folder are:
* CTR - 3DS security specifications
* DRM - 3DS Digital Rights Management specifications
* DS - Nintendo DS specifications
* DSP_support_200_100903-internal - Documentation for the Nintendo DS Anti-Piracy tool DSProtect
* RFC 5756 - Updates for RSAES-OAEP and RSASSA-PSS Algorithm Parameters.mht
* S2セキュリティリスク管理.docx - S2 Security Risk Management Doc
* S2セキュリティリスク管理.pdf - S2 Security Risk Management in PDF format
* S2セキュリティリスク表.xlsx - S2 Security Risk Table
* SSセキュリティリスク管理.docx - SS Security Risk Management
* TWL - Nintendo DSi Card specifications
* WiiU
* XBOX360
* android
* マジコン - Magicon
* 新規 Microsoft Visio 図面.vsd
* 暗号一般 - General code

### 3DS security specifications (CTR)
* 3チップ構成のCTRカード111226_2.doc
* CTR-ROM-IDフォーマット.xls
* CTR_Card_Memrory_SPEC20121212正式版.pdf
* CTR_GameCardEncription_MXIC.xlsx
* CTRソフトのデータ変換.xlsx
* NAND暗号111208.pdf
* S1
* S2
* media_binary.pdf
* バックアップメモリ
* ペアレンタルコントロール
* マスタリングツール
* 全体
* 外国人に説明するための資料_ctr_architecture_documents_0704_2013

### 3DS Digital Rights Management (/DRM)
* CTR_BroadOnF2F_MT_eFuse関連検討事項.lzh
* CTR_BroadOnF2F_MT_eFuse関連検討事項.xls
* CTR_Security.pdf
* DRM_Infrastructure_Overview.pptx
* DRM_Overview_20110615.ppt
* DRM_TitleDatabase_20110628_Final.ppt
* DRM鍵.vsd - DRM Key
* ES_Overview.pdf
* NIM_Overview_20110727_2.pptx
* Visio-マスタリング・OLSデータフロー_20100426.pdf - Mastering / OLS Data Flow_20100426
* drm-module-image.pdf
* drmArch140324_disclosedToIAAB.pdf
* drmArch140324_disclosedToIAAB.pptx
* drmArch140402_disclosedToIAAB.pdf
* drmArch140402_disclosedToIAAB.pptx
* 新しいフォルダー - contains a diagram showing the security of the entire system

The file **drmArch140402_disclosedToIAAB.pdf** is well worth checking as it is a diagram showing the entire security from game creation to game installing. It is also completely in english!

### Nintendo DS Security specifications
This folder contains the following files:
* NORのNTR本体設定.pdf
* NORのNTR本体設定.xlsx
* NTRカード用ROM（TYPE2)要求仕様書(07-1-12a)
* NTRカード用ROM（TYPE2)要求仕様書(07-1-12a).zip
* NTRカード用ＲＯＭ(TYPE1)要求仕様書・セキュリティ省略版(07-1-12)b
* NTRカード用ＲＯＭ(TYPE1)要求仕様書・セキュリティ省略版(07-1-12)b.zip
* NTRメモリID管理表.xls
* バックアップメモリ仕様書

### DSProtect documents (DSP_support_200_100903-internal)
DSProtect is a library that can help prevent Nintendo DS games from being illegally copied. This folder contains the documentation for it in japanese.

This folder contains the following files:
* 200
* Support_Manual_DSProtect.pdf - Documentation for DSProtect

### Nintendo DSi Card Specifications (TWL)
This folder contains the following files which all describe the Nintendo DSi Cards in different sizes (512M, 2G, 4G):
* TWLcard070724(512M、MXIC仕様).pdf
* TWLcard2G070916.pdf
* TWLcard4G080519.pdf
* TWLcard512M080530.pdf

### WiiU
This folder only contains a very brief diagram of the WiiU security model in both PDF and Visio formats.

This folder contains the following files:
* 新規 Microsoft Visio 図面.pdf
* 新規 Microsoft Visio 図面.vsd

### XBOX360
This folder contains the following files:
* Xbox360_MemoryHashingAndEncription.pdf
* 新規 Microsoft Visio 図面.vsd

### Android
This folder contains the following files:
* NetworkSecurityGuide1.pdf
* android_securecoding.pdf
* hmmail650_signed.exe

### Magicon (マジコン)
This folder just contains a signle pdf file which is the documentation for the M25P10-A chip by NUMONYX.

### General Code (暗号一般)
This folder just contains the RFC specification for RFC2313 in both english and japanese:
* rfc2313-Ja.txt
* rfc2313.txt

---
## Projects (/プロジェクト)
The files in this folder are:
* Arch
* FANGATE - The Nintendo NFC adapter codenamed fangate vulnarabilities
* FANG検討 - FANG review (NFC amiibo vulns)
* INDY検討
* Knock_And_Talk_directcnotact
* NTR
* NewSwitch
* Niji - 3DS Zorro signature tool
* NorthPort - Nvidia Shield Android TV (foster)
* PUMP
* S1.5
* SNAKE - Switch security
* amiibo
* whiteCryption - security system
* コードレビュー - Code Review
* 新井さん下村さん案件 - Mr. Arai and Mr. Shimomura
* 汎用SoC - General purpose SoC

### Arch
This folder contains the following files:
* Arch.pptx
* チート対策ガイド.pdf - Cheat Countermeasure Guide
* ネイティブアプリに対する攻撃と防御方法（外部用）.pdf - Attack and defence against native apps (external)
* ブレーンストーミング.txt - Brainstorming.txt

### FANGATE
This folder contains the following files:
* FANGATE.pptx
* WiiU試遊台amiibo対応リスク.pptx
* 新規 Microsoft Word 文書.docx

### FANG検討
This folder contains the following files:
* 20120824.ppt
* 20120904.ppt
* DLPDFR009671_P1-136.pdf
* MR201301_NFC_Security.pdf
* RFC_3711.txt
* TLSに対するCBC攻撃.txt - CBC attack against TLS
* TagFormat.pptx
* Tagセキュリティ簡略図.pdf - Tag security simplified diagram
* Tag共通鍵生成方法案.pdf - Tag common key generation method proposal
* Tag共通鍵生成方法案2.pdf
* Tag共通鍵生成方法案3.pdf
* Tag共通鍵生成方法案4.pdf
* 新規 Microsoft Visio 図面.vsd

### INDY検討 ()
This folder contains the following files:
* BROM
* GlobalPlatform
* IDクリエーター - ID Creator
* INDYセキュリティレビュー - INDY Security Review
* IRDプロジェクトへの人員配置_20131025a.xlsx - Staffing for IRD projects_20131025a
* STM-TEE
* SoC
* SoC進捗管理表121128.xlsx - SoC Progress Management Table
* Toronto
* Training
* ValidationSoftware
* Visio-互換セキュリティ.pdf - Visio-Compatible Security.pdf
* eFuse検討 - eFuse review
* memo_SoC_SHARP.txt
* カードIFファームウェアブート方式 - Card IF firmware boot method
* ゲームカード - Game card
* コピーIRDプロジェクトへの人員配置_20131025a.xlsx - copy of Staffing for IRD projects
* メインメモリセキュリティ.pdf - Main memory security
* 新規 Microsoft Excel ワークシート.xlsx
* 方法2_TWL互換2_TEG-CVer.vsd - Method 2_TWL compatible 2_TEG-CVer
* 次世代検討課題.txt - Next Generation Examination.txt

### Project Knock and Talk (Knock_And_Talk_directcnotact)
Project Knock and Talk (K&T) also known as Belgian Waffle was an effort for Nintendo to stop the 3DS hacker known as Neimod.

This folder contains the following files:
* 20130713175143854.pdf - Settlement agreement between Nintendo and Neimod
* Belgian Waffle - KT Debrief  Next Steps.pptx
* Criminal Complaint (draft) 5 April 2013.doc
* Final Enforcement Proposal Neimod 4 5 13.doc
* FinalK&TProposalFlowChart.4.5.13.pdf - Flowchart for the project steps
* KandT結果共有.pptx - Details on the progress Neimod made with his hardware plus lego starwars exploit
* NDADraft4.5.13.docx - Draft version of Non-Disclosure Agreement
* PGPのしくみ.mht - How PGP works (Cryptography) - html file
* SSSPWN - Documents on the SSSPWN project by smealum
* TargetingHackerProcedure.pdf - Diagram showing the process of Knock and Talk
* TargetingHackerProcedure.vsd - Visio version of above
* ap_kt_discussion.15apr2013.key.pdf - presentation discussing other potential targets including geohot
* 報奨金制度 - Reward system

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Nintendo made an entire list of actions for approaching a 3DS hacker lol. <a href="https://t.co/B8CJzXpnSo">https://t.co/B8CJzXpnSo</a></p>&mdash; Forest of Illusion (@forestillusion) <a href="https://twitter.com/forestillusion/status/1341211680601034752?ref_src=twsrc%5Etfw">December 22, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### NTR
This folder just contains a single document called 111027_Detection which is a spreadsheet of the Card ROM header values for each Card size, in Hex, Decimal and even binary!

### NewSwitch
This folder contains the following files:
* SecurityPORmeeting.pptx
* SecurityPORmeeting_GameCart.pptx
* SoC
* on_the_rotor_head.jpg
* セキュリティ設計検証 - Security design verification
* 極小署名 - Minimal signature

### 3DS Zorro signature tool (/Niji)
This folder contains the following files:
* CTR_MW-Zorro
* CTR_MW-Zorro_20150916alpha.zip
* CTR_MW-Zorro_20160122.zip
* CTR_MW-Zorro_alpha
* OPSSR_project.pptx

### NorthPort
This folder contains the following files:
* AP-114750851-080316-2251-1880.pdf
* プレゼンテーション1.pptx
* プレゼンテーション1.thmx - same as above but in different Powerpoint format

### PUMP
This folder contains the following files:
* PUMP Security With Secure Zone.pdf
* PUMP Security Without Secure Zone.pdf
* 新規 Microsoft PowerPoint プレゼンテーション.pptx
* 新規 Microsoft Visio 図面.vsd

### S1.5
This folder contains the following files:
* 160108_HS-SPIによるS1.5モード実装のご提案_ver1.00.pdf
* S1_5.vsd
* S1_5まとめ_20160411.pptx

### Switch Security (/SNAKE)
This folder contains the following files:
* HASPed
* SNAKEセキュリティ改善_20140423.pdf - SNAKE Security Improvement 2014/04/23
* SNAKEセキュリティ改善概要.txt - SNAKE Security Improvement Overview
* readme.txt
* readme.vsd
* reserve.bin
* 新規 Microsoft Visio 図面.vsd

### amiibo
This folder contains the following files:
* _CATALOG.VIX
* amiibo-PKI.png
* amiibo-PKI.pptx
* ecqv-poc-v2
* ecqv-poc-v2.zip
* ecqv-poc.zip
* sec4-1.0.pdf
* 新規 Microsoft PowerPoint プレゼンテーション.pptx

### whiteCryption Security system
This folder contains the following files:
* SKB.zip
* SKB_EvalSample.exe
* SKB_with_CP.zip
* SKB_with_CP_EvalSample.exe
* data

### Code Review (コードレビュー)
This folder contains a folder called **データ書込みソフト_セキュリティホール確認用_20140509** (Data writing software For checking security holes) which contains the following files:
* CTR_TRIAL
* CTR_TRIAL.zip - zipped version of CTR_TRIAL
* HwCheck_Import
* HwCheck_Import.zip - zipped version of HwCheck_Import

### 新井さん下村さん案件
This folder contains the following files:
* FSL_Roadmap update_20140716.pdf
* IMX6DQ6SDLSRM.pdf
* IMX6DQRM.pdf
* NDES-56759045-250814-1402-614.pdf
* i MX7 Security Document 8-5-2014.pdf
* 必要なセキュリティ要件.pptx - Required security requirements
* 必要なセキュリティ要件.pptx.gpg - GPG version of above
* 新しいテキスト ドキュメント.txt

### General purpose SoC (汎用SoC)
This folder contains the following files:
* ContentsDistributionDesign.png
* GameSecurity-j.pdf
* Mobile App Integrity Protection Handbook.pdf
* NTD_20140424.txt
* img-X10175644.pdf
* 新しいフォルダー - contains pdf of **Mobile App Integrity Protection Handbook** in japanese by ARXAN
* 新規 Microsoft Visio 図面.vsd
* 汎用SoC.pptx

---
## Nintendo 3DS (/CTR)
The files in the folder are:
* **32C3** - screenshots from the Breaking the 3DS 32C3 talk
* **win32diskimager-v0.9-binary.zip** - Image Writer for Windows from SourceForge (LGPL license)
* **新しいフォルダー** - Translated to new folder - duplicate of 32C3 folder contents
* **新しいフォルダー (2)** - another new folder simply containing **32c3.txt**

Most of the files in this folder are screenshots from the 32C3 talk by **Smealum**, **derrek** and **plutoo**.

Also contains the **32c3.txt** document in japanese which contains the main hacks and notes on when they will be patched in the next 3DS update (NUP).

<iframe width="560" height="315" src="https://www.youtube.com/embed/CzVZgdkzBn8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---
## 3DS /PCSG
The files in this folder are:
* AP-20151218-Boot9Dumping-140316-1457-2496.pdf - Document describing a security flaw to dump Boot9 on the 3DS using an FPGA
* AP-AES_SLOT.pdf - AES SLOT KEY exposure status
* AP-NTRCARDHAX.pdf - document describing the memory overflow in process9 aka "NTRCARDHAX" 
* AP-memchunkhax2.pdf - 3DS security flaws aka "memchunkhax2" 
* スケジュール - Schedule of a trip to the US for **derrek**

These documents are good at explaining 3DS exploits that Nintendo were aware about in 2015-2016.

Note that most of this information is available on the internet already, just google **NTRCARDHAX** or **memchunkhax2**.

There is an excellent presentation on media.ccc.de:
[media.ccc.de - Console Hacking](https://media.ccc.de/v/32c3-7240-console_hacking)


---
## Switch Documents (/Switch)
The files in this folder are:
* LatourCrypt修正3.pdf - LatourCrypt Fix 3 (Diagram of Switch hardware security)
* Switch開発カードレビュー.pptx - Switch Development Card Review

The Development Card review Powerpoint presentation is very interesting it provides Attack scenarios for how hackers would get around the security of the NAND storage.

Development card and diagrams to show the security to prevent Man in the Middle attacks (MITM).

---
## Global Anti-Piracy Team (/GlobalAPteam)
The files in this folder are:
* **GlobalAPteamKickoff.pptx** - Presentation on the introduction to a global Anti-Piracy team
* **NTD** - Nintendo Technology Development documents
* **security meeting with ntd 20170418.pdf** - Mind map of meeting with japan and NA teams
* **security meeting with ntd 20170419.pdf** - Another Mind map of meeting
 
The **GlobalAPteamKickoff.pptx** presentation is interesting (if you can get over the terrible spelling) as it covers the goals of the Anti-Piracy team which has members from all 3 Nintendo studios (NTD, NERD and NCL).

The mind maps are also worth a look as they highlight the problems a big company like Nintendo can have allocating time for security issues. They are not given as much time compared to brand new features and seems to be no full-time security experts at all.

### NTD Exploit presentations (/GlobalAPteam/ntd)
In this folder we have some presentations that are both worth a read if you are interested in exploits:
* NTD-security-slides-v2.pptx - Really interesting presentation of the vulnerabilities of ARM7 BPMP and others
* Rand_Exploit_Raptor.pptx - Presentation from NVIDIA on the Random Number bug for Switch (December 2016)

---
# Secure.7z
When the archive has been extracted it contains the following contents:
* **CTR-ROM-IDフォーマット.xls** - 3DS ROM format based on the maker of the ROM (e.g Sandisk, KMC..)
* **CTRカードについて.ppt** - PresentationAbout CTR card hardware
* **GCIP_RTL** - Switch Game Cartridge hardware simulator software
* **Lotus3Brom**
* **NewFormat** - 3DS CCI Format
* **ROM-ID_100421okisemi.xls** - 3DS ROM forwat for OKI Semiconductor chips
* **Swtich**
* **ウェハ取れ数計算_140728.xls** - Wafer removal number calculation 
* **カード関連仕様書** - Card-related specifications
* **マリオカート8のROM容量の内訳と解像度比からサイズ縮小を検討.pdf - Mario Kart 8 ROM capacity
* 情報開発見積もり** - Information development estimate
* **鍵** - Card key files


## Switch Game Cartridge IP (/GCIP_RTL)
This folder contains files for both the Game Cartridge chips known as MontBlanc and the Design Simulation Model (DSM) for the ARM Cortex M4.

Files in this folder are:
* Cortex_M4_DSM_license_NTD - contains license file for the Cortex M4
* Cortex_M4_DSM_license_NTD.zip - archive of the Cortex_M4_DSM_license_NTD folder
* stmicroelectronics_montblanc_vp_2.4.1-GC_NCL
* stmicroelectronics_montblanc_vp_2.4.1-GC_NCL.tar.gz - archive of the stmicroelectronics_montblanc_vp_2.4.1-GC_NCL folder

The Mont-Blanc GC Virtual Platform by STMicroelectronics was used by Nintendo for simulating Game Cartridges (GC).

Since these documents were created in 2014 it is very likely that this is for the Nintendo Switch.

## Switch Game Card Lotus3 Boot ROM code (/Lotus3Brom/src)
This folder contains the source code for the Game cartridge BootROM firmware called "Lotus" version 3  written by MegaChips Corporation in 2015.

Files in this folder are:
* crypt - contains PKCS1_Decode in **pkcs1.c**
* driver - contains the main source code modules
* main.c - main starting point for boot ROM
* mpu.c - Main Microprocessor code
* mpu.h - header for mpu.c
* mpu_reg.h - register for MPU

### Driver Source files
The driver sub folder contains the main code for each module that makes up the entire Game Cartridge BootROM.

These source files look like they have been generated from a hardware description language such as Verilog, and contain "register" files which are common in HDLs.

Name | Description
---|---
aes.c | Advanced Encryption Standard (AES) module
aes.h | Advanced Encryption Standard header
aes_reg.h | Advanced Encryption Standard register
bol.c | Boot Loader driver
bol.h | Header file for Boot Loader driver
bol_reg.h | Boot Loader Register
copy.c | memory copy code (Peripheral to Peripheral)
copy.h | 
ctl.c | Controller module
ctl.h | Header for Controller module
ctl_reg.h | Controller module register
dma.c | Direct memory access module
dma.h | Direct memory access header
dma_reg.h | Direct memory access register
emmc.c | embedded Multi-Media Controller module
emmc.h | embedded Multi-Media Controller header
fifo.c | First In first Out module
fifo.h | First In first Out module header
fifo_reg.h | First In first Out module register
lts3.h | Main lotus3 header
otp.c | 
otp.h | 
otp_reg.h | 
rnd.c | Random number module
rnd.h | Random number header
rnd_reg.h | Random number register
rom.h | ROM data header
rom_reg.h | ROM data register
rsa.c | Rivest-Shamir-Adleman (RSA) encryption module
rsa.h | RSA header
rsa_reg.h | RSA register
sha.c | Secure Hash Algorithm module
sha.h | Secure Hash Algorithm header
sha_reg.h | Secure Hash Algorithm register
startup_lts3.s | 
wgn.c | 
wgn.h | 
wgn_reg.h | 

## 3DS CCI format (/NewFormat)
This folder contains 3DS Cart images (.cci) which have an unknown purpose, probably just to show off the NCSD file format.

Files in this folder are:
* Invalid-PROD0.cci
* Invalid-PROD0.cci.bak - old version of Invalid-PROD0.cci
* Invalid-PROD1.cci
* Invalid.cci.bak
* demo1-11_0-PROD0.master.cci
* demo1-11_0-PROD1.master.cci

---
## Switch private key certificates (/Swtich)
Files in this folder are:
* AsicPrivKey - Private key for Game Card BootRom
* CardHeader - Tool to build Game Cards
* CardKensa - Test Card certificates
* DevL3Cert - Level 3 Dev game card certificate
* FwSigner - Tool for signing the Game card firmware
* Package_20150902
* aes_ccm - code for AES encryption in CCM mode
* aes_ccm_old - old code for above
* cardheader_gen - script for generating card header binary data

### (/Swtich/Package_20150902)
This folder contains documentation from MegaChips about their simulation environment for Lotus game cards.

Files in this folder are:
* LotusメモリエミュレーションFPGAボードPC用ライター仕様書 - Lotus Memory Embroidery FPGA Board PC Writer Specifications
* MPTool_NCL_v3.0 - Mass Production Tool version 3 by MegaChips
* T1_FPGAボード納品物リスト - T1_FPGA Board Delivery List
* T1セキュリティ用メモリエミュレーション FPGAボード仕様書 - Memory Embroidery FPGA Board Specification for T1 Security

The pdfs in this folder show how to use the Mass Production Tool (MPTool) to create Game Cards.

---
## Card Key /鍵/カード鍵
not sure exactly what these certificate keys are for but they are related to either Switch or 3DS Game Cards.

Files in this folder are:
* S1ハードウェアキー - S1 hardware key
* S2用秘密鍵 - Private key for S2
* ユニークIDの鍵 - Unique ID key

---
##  Information development estimate )/情報開発見積もり)
Files in this folder are:
* SNAKE開示者のみ公開_MTB開発ユニット_電力や熱に関するまとめ_20140822.pdf - Power and Heat (requires SNAKE disclosure)
* レビュー後公開_MTB開発ユニット_Switch_熱予算の考え方_20140822.pdf - Thermal Budget for hardware
* 非公開_マリオカート８処理削減リスト_20140822.xlsx - Mario Kart 8 reduction list
* 非公開_改訂版_マリオカート8のROM容量の内訳と解像度比からサイズ縮小を検討.pdf - Size reduciton of Mario Kart 8

Only certain members of staff are given disclosure for certain projects and it seems SNAKE was the name of the disclosure for the Switch.

These documents are very low level dealing with the switch hardware power and heat.

---
# NintendoSDK_fromSSD_IKEDA_20151124.zip

This folder contains the following files:
* NintendoSDK
* パッケージを取ってきた元.txt - just links to internal Nintendo sites like Teamcity
* 初めて用のセット - Initial Setup

## Initial Setup files (/初めて用のセット)
This folder contains the following files:
* HostBridgeController_0.3.3.0
* OasisSetup.0.6.0.12639.msi
* OasisTMSetup.0.6.0.12639.msi
* Windows用ドライバ - Driver for Windows
* kernel.img
* siglo_boot
* write-emmc

Not quite sure what these files are used for or what Oasis is.

---
## Nintendo Switch SDK from 2015
This folder contains the following files:
* Build
* Common
* Compilers
* Documents
* Externals
* Include
* Libraries
* NintendoSdkRootMark
* Resources
* Revisions
* Samples
* Sources
* Tools

These folders will be documented later when we add Nintendo switch to the site.
