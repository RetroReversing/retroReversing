---
layout: post
tags: 
- leak
title: Nintendo Hidemaru Mail Leak 
thumbnail: /public/consoles/Nintendo Gamecube.png
image: /public/images/leaks/HidemaruMailLeak.jpg
twitterimage: https://www.retroreversing.com/public/images/leaks/HidemaruMailLeak.jpg
permalink: /nintendo-hidemaru-mail-leak
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Leaks
    url: /nintendoleaks
  - name: Nintendo Hidemaru Mail Leak
    url: #
recommend: 
- leak
editlink: /leaks/HidemaruMailLeak.md
---

# Introduction
In 2020 and 2021 numerous secret files have been leaked from Nintendo thanks to **Zammis Clark**. Included in these files were the Corporate Emails inbox of an employee called **Murakawa Tsushin**. 

Note that this post is under construction, there are thousands of emails to go through, if you have any time then please consider contributing by editing this page in github.

## What was leaked
The archive **teru-sama_mail_2006.7z** was leaked to 4chan on the **20th July 2021**, it is a dump of Murakawa Tsushin's emails from the Hidemaru Mail client.

## Who is Murakawa?
Murakawa was in charge of localisation from Japanese to Korean/English and lots of European languages. This is probably why Zammis Clark targeted him as he is a huge Pokemon fan and couldn't wait for the English release of the games.

He worked in the Planning and Development Department for Nintendo of Japan.

## What is Hidemaru Mail?
**HidemaruMail** is a Japanese application for managing email similar to the function of Microsoft Outlook. It just so happens a Nintendo employee used this software in 2006 and his email archive was downloaded by Zammis Clark and later released online for all to see.

---
# Hidemaru Mail  (/hidemaruMail)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">hidemaruMail</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains backup copies of the users address book along with the main sub directories:
 * **mail.nintendo.co.jp** - all emails that were sent to this user
 * **TempMail 0** - empty folder

Files in this folder are described in the table below.
  </div>
</section>  

File Name | Extension | Description
---|---|---
AdrBook | .bk0, .bk1, .bk2, .bk3, .bk4, .bk5, .bk6, .bk7, .bk8, .bk9, .txt | Employee's address book with everyone that worked at Nintendo at the time
subdir | .bin | Presumably some meta-data that HidemaruMail email client creates, literally just contains the string **mail.nintendo.co.jp**

The Address Book backup files are pretty much identical if you compare them so if you are interested in seeing everyone who worked at Nintendo in 2006 then just use the standard **AdrBook.txt**.

---
# Mail.nintendo.co.jp (/mail.nintendo.co.jp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">mail.nintendo.co.jp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the following sub folders:
* **Remote** - Empty folder
* **User** - Empty folder
* **ゴミ箱** - Trash Can
* **受信** - Inbox
* **受信HTML** - HTML inbox
* **受信ログ** - Inbox Log
* **受信添付** - Attachments received
* **未送信** - Unsent (Empty)
* **草稿** - Draft (Empty)
* **送信ログ** - Transmission log
* **送信添付** - Attachments sent
* **送信済み** - Sent box

Files in this folder are described in the table below.
  </div>
</section>  

File Name | Extension | Description
---|---|---
UIDL | .bin | Unique ID Listing file used by the POP3 email client
account | .bin | encrypted user account file
account.bak | .bin | backup of user account file
filter | .bk0, .bk1, .bk2, .bk3, .bk4, .bk5, .bk6, .bk7, .bk8, .bk9, .txt | Filter list, so if an email matches a pattern it will go into a specific folder, all backups are the same file

The only file that might be mildly interesting is **filter.txt** as if you are looking for emails for a specific project this can give a hint as to what folder it is in, or what email addresses to look for.


---
## Murakawa's newsletter (/mail.nintendo.co.jp/User/村川通信)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">User/村川通信</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains all the emails sent out by Murakawa for his Newsletter called the **Murakawa Tsushin**. He seems to send out some sort of newsletter with random, sometime games related content.

  </div>
</section>  

File Name | Extension | Description
---|---|---
村川通信200506 | .txt | Comparison of wireless communication functions between Nintendo DS and PSP
村川通信200507 | .txt | News about Dark basic (3D game programming language with BASIC syntax)
村川通信200508 | .txt | Not much news as he is preparing for a wedding
村川通信200509 | .txt | Talk about the PocketMod which is a printable PDA apparently.. (http://www.pocketmod.com/)
村川通信200510 | .txt | Shares a link talking about Nintendo DS Homebrew!
村川通信200511 | .txt | Links to a yahoo headline about the Cell Architecture in the PS3
村川通信200512 | .txt | Compares the price of Apple products with Nintendo
村川通信200601 | .txt | Links to article talking about Pixar being acquired by Disney
村川通信200602 | .txt | Links to a book called "Sony Chronicle 2006" which has thousands of pictures of Sony products through the ages
村川通信200603 | .txt | Has a link to Review-C an application by NEC that statically analysis C code to find problems
村川通信200604 | .txt | Link to a Japanese book on how to write your own CPU in 30 days by Hidemi Kawai (looks like a really interesting book)
村川通信200612 | .txt | Links to a page selling a little wiimote key ring, looks very cute

The Homebrew Nintendo DS link that he has shared in one of his newsletters is no longer available but it has been archived by the wayback machine: [here](https://web.archive.org/web/20060703171517/http://www.helloworld.jp/~duke/nintendo_ds/index.html) 

One very interesting Japanese website that is commonly linked in the newsletter for programmers is Game Watch: [Graphics course for 3D game fans](https://web.archive.org/web/20070304130614/http://www.watch.impress.co.jp/game/docs/backno/rensai/3dg.htm)

---
## Past Log Chats (/mail.nintendo.co.jp/User/過去ログ/雑談)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/mail.nintendo.co.jp/User/過去ログ/雑談</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains general chat about video games and the industry, mildly interesting but don't go out of your way to read it.

  </div>
</section>  

File Name | Extension | Description
---|---|---
雑談200506 | .txt | Talking about Space Channel 5, Jet Set Radio Future, C programming question and more
雑談200509 | .txt | Talking about Xavix using images of Jackie Chan to promote their wii Fit like product
雑談200510 | .txt | Talking about gambling machines?
雑談200601 | .txt | Talk about a GPS based-game for  DS, suggests Pokemon Go like functionality (10 years before that was a thing)
雑談200602 | .txt | Joke about hexadecimal representation (I think..)
雑談200603 | .txt | Organising a drinking party
雑談200605 | .txt | Talk about the new Sony VAIO mobile phone
雑談200609 | .txt | Talk about aquariums and PS3 launch

￼

---
##  Trash Can (/mail.nintendo.co.jp/ゴミ箱)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/mail.nintendo.co.jp/ゴミ箱</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains deleted emails, you probably could have guessed that, nothing of value is in here.
  </div>
</section>  

File Name | Extension | Description
---|---|---
ゴミ箱200611 | .txt | Spam mail about flowers
ゴミ箱200612 | .txt | Games industry emails such as DICE, lots of overtime requests for Pokemon and Localization from his employees


---
## Inbox (/mail.nintendo.co.jp/受信)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/mail.nintendo.co.jp/受信</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains the following sub directories:
* **CW for NintendoDS** - Discussion between Metrowerks and Nintendo on the CodeWarior for Nintendo DS product
* **DS Socket Lib** - Mailing list discussing the Nintendo DS netwokring SDK
* **NOA Doc**
* **NOK関連**
* **NintendoDS**
* **Pokemon emerald for Euro**
* **Revolution**
* **SPD ALL**
* **SPD GM**
* **SPD TI**
* **Wi-Fiガイドライン ML**
* **dea-5p-sup ML**
* **dea-sup**
* **アカウント関連**
* **サーバ管理**
* **ポケモン**
* **人事関連**
* **会議のスケジュール**
* **部内技術サポート**

The files in the root of this directory are described in the table below.
  </div>
</section>  

File Name | Extension | Description
---|---|---
受信200505 | .txt | 
受信200506 | .txt | 
受信200506_92 | .txt | 
受信200507 | .txt | 
受信200507_55 | .txt | 
受信200508 | .txt | 
受信200509 | .txt | 
受信200510 | .txt | 
受信200511 | .txt | 
受信200512 | .txt | 
受信200601 | .txt | 
受信200602 | .txt | 
受信200603 | .txt | 
受信200603_01 | .txt | 
受信200604 | .txt | 
受信200604_03 | .txt | 
受信200604_07 | .txt | 
受信200605 | .txt | 
受信200606 | .txt | 
受信200607 | .txt | 
受信200608 | .txt | 
受信200609 | .txt | 
受信200609_02 | .txt | 
受信200610 | .txt | 
受信200610_01 | .txt | 
受信200610_02 | .txt | 
受信200611 | .txt | 
受信200611_01 | .txt | 
受信200612 | .txt | 
受信200612_01 | .txt | 
受信200612_02 | .txt | 
受信200612_03 | .txt | 
受信200612_04 | .txt | 


---
### CodeWarrior for Nintendo DS (/mail.nintendo.co.jp/受信/CW for NintendoDS)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">CW for NintendoDS</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains communication between Metrowerks (who develop the CodeWarrior IDE) and Nintendo. Specifically for the Nintendo DS version of CodeWarrior.

As you can imagine when creating a compiler and IDE for the Nintendo DS, there were lots of messages between Nintendo and Metrowerks clarifying points and discussing bugs.

Emails in this folder contain mentions of **Ensata** which is an in-house developed Nintendo DS emulator.

Note that during 2005 Metrowerks became part of **Freescale Semiconductor**, so many of the emails mention Freescale but they are still talking about the same Metrowerks CodeWarrior IDE.

  </div>
</section>  

File Name | Extension | Description
---|---|---
CW for DintendoDS200510 | .txt | Talk about the Ensata emulator version 1.4
CW for DintendoDS200511 | .txt | Talk about Nitro SDK 3.0
CW for DintendoDS200512 | .txt | Talk about Debugger patch for CodeWarrior for NINTENDO DS 1.2 SP3 (2005/12/13)
CW for DintendoDS200601 | .txt | Talk about Code Overlays for the Nintendo DS
CW for DintendoDS200602 | .txt | Talk about CW for DS 2.0 compiler (Version 3.0)
CW for DintendoDS200603 | .txt | Talk about CodeWarrior for NINTENDO DS 2.0 FC version
CW for DintendoDS200604 | .txt | Official release of CW for NDS 2.0 to developers
CW for DintendoDS200605 | .txt | Release of the Nintendo DS SDK 3.1
CW for DintendoDS200606 | .txt | Compiler patch for CodeWarrior for NINTENDO DS 2.0 (2006/6/16)
CW for DintendoDS200607 | .txt | Release Ver. 1.4d of the Ensata DS Emulator
CW for DintendoDS200608 | .txt | CodeWarrior for NINTENDO DS Version 2.0 Service Pack 1 Announcement
CW for DintendoDS200609 | .txt | Details about the .NEF (Nintendo Elf Format) used for DS executables
CW for DintendoDS200610 | .txt | Metrowerks moved from their eSupport system to Radix Live
CW for DintendoDS200611 | .txt | Release of CodeWarrior for NINTENDO DS 2.0 SP1 Build Tool Patch 2


---
### Nintendo DS Socket Library (/mail.nintendo.co.jp/受信/DS Socket Lib)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">DS Socket Lib</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains discussions talking about the networking (socket) SDK for the Nintendo DS. So bugs and other issues are discussed in this mailing list, but of the emails we have none are particularly interesting.

  </div>
</section>  

File Name | Extension | Description
---|---|---
DS Socket Lib200506 | .txt | Just talks about a new internal page being setup called the "Nintendo Wi-Fi Connection Support Page"
DS Socket Lib200507 | .txt | Just a notice saying that "Nintendo Wi-Fi Connection Planning Study Material (2005/06/22 version)" has been uploaded
DS Socket Lib200508 | .txt | Notice of a bug in the function SO_SendTo returning SO_ENOBUFS
DS Socket Lib200509 | .txt | Notice of infinite loop in OS_LoadContext which gets fixed in a new release of the SDK
DS Socket Lib200510 | .txt | Just contains a list of the email addresses of the people that subscribe to the mailing list


---
### Nintendo of Amercia documents (/mail.nintendo.co.jp/受信/NOA Doc)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">NOA Doc</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
NOA Doc200601 | .txt | 
NOA Doc200602 | .txt | 
NOA Doc200603 | .txt | 
NOA Doc200604 | .txt | 
NOA Doc200605 | .txt | 
NOA Doc200606 | .txt | 
NOA Doc200607 | .txt | 
NOA Doc200608 | .txt | 
NOA Doc200609 | .txt | 
NOA Doc200610 | .txt | 
NOA Doc200611 | .txt | 
NOA Doc200612 | .txt | 


---
### Nintendo of Korea (/mail.nintendo.co.jp/受信/NOK関連)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">NOK関連</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
NOK関連200607 | .txt | 
NOK関連200608 | .txt | 
NOK関連200609 | .txt | 
NOK関連200610 | .txt | 
NOK関連200611 | .txt | 
NOK関連200612 | .txt | 


---
#### Nintendo of Korea Mailing Lists (/mail.nintendo.co.jp/受信/NOK関連/NOK ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">NOK ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
NOK ML200609 | .txt | 
NOK ML200610 | .txt | 
NOK ML200611 | .txt | 
NOK ML200612 | .txt | 


---
#### Korean version Mailing list (/mail.nintendo.co.jp/受信/NOK関連/えいご漬け韓国語版 ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">えいご漬け韓国語版 ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
えいご漬け韓国語版 ML200610 | .txt | 
えいご漬け韓国語版 ML200611 | .txt | 
えいご漬け韓国語版 ML200612 | .txt | 


---
### Nintendo DS Mailing list (/mail.nintendo.co.jp/受信/NintendoDS)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">NintendoDS</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
似顔絵 ML200606 | .txt | 
似顔絵 ML200607 | .txt | 
似顔絵 ML200608 | .txt | 
似顔絵 ML200609 | .txt | 
似顔絵 ML200610 | .txt | 
似顔絵 ML200611 | .txt | 


---
### Pokemon emerald for euro (/mail.nintendo.co.jp/受信/Pokemon emerald for Euro)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Pokemon emerald for Euro</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Pokemon emerald for Euro200505 | .txt | 
Pokemon emerald for Euro200506 | .txt | 
Pokemon emerald for Euro200507 | .txt | 
Pokemon emerald for Euro200512 | .txt | 


---
### Wii (/mail.nintendo.co.jp/受信/Revolution)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Revolution</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Revolution200604 | .txt | 
Revolution200605 | .txt | 
Revolution200606 | .txt | 
Revolution200607 | .txt | 
Revolution200608 | .txt | 
Revolution200609 | .txt | 
Revolution200610 | .txt | 
Revolution200611 | .txt | 

---
####  Wii E3 (/mail.nintendo.co.jp/受信/Revolution/E3)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">E3</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains emails sent to everyone preparing for E3 2006 such as playble demo guidelines and due dates.

  </div>
</section>  

File Name | Extension | Description
---|---|---
E3200604 | .txt | Talks about the deadlines for E3 deliverables such as playable demos and video content
E3200605 | .txt | Contains branding instructions for what logo to use and information for travelling to E3


---
#### Opera browser Mailing List (/mail.nintendo.co.jp/受信/Revolution/Opera browser ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Opera browser ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Opera browser ML200607 | .txt | 
Opera browser ML200608 | .txt | 
Opera browser ML200609 | .txt | 
Opera browser ML200610 | .txt | 
Opera browser ML200611 | .txt | 
Opera browser ML200612 | .txt | 


---
#### Wii homemenu by Intelligent systems (/mail.nintendo.co.jp/受信/Revolution/REVO_HomeMenuintsyscojp)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">REVO_HomeMenuintsyscojp</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
REVO_HomeMenuintsyscojp200608 | .txt | 
REVO_HomeMenuintsyscojp200609 | .txt | 
REVO_HomeMenuintsyscojp200610 | .txt | 


---
#### Rvlネットワーク関連 (/mail.nintendo.co.jp/受信/Revolution/RVLネットワーク関連)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">RVLネットワーク関連</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
RVLネットワーク関連200604 | .txt | 
RVLネットワーク関連200605 | .txt | 
RVLネットワーク関連200606 | .txt | 
RVLネットワーク関連200607 | .txt | 
RVLネットワーク関連200608 | .txt | 
RVLネットワーク関連200609 | .txt | 
RVLネットワーク関連200610 | .txt | 


---
#### Wii preview関連 (/mail.nintendo.co.jp/受信/Revolution/Wii Preview関連)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Wii Preview関連</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Wii Preview関連200608 | .txt | 
Wii Preview関連200609 | .txt | 


---
#### Wii Lot Check Mailing List (/mail.nintendo.co.jp/受信/Revolution/Wii lotcheck ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Wii lotcheck ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Wii lotcheck ML200608 | .txt | 
Wii lotcheck ML200609 | .txt | 
Wii lotcheck ML200610 | .txt | 
Wii lotcheck ML200611 | .txt | 
Wii lotcheck ML200612 | .txt | 


---
#### Wiiツール輸出規制 ml (/mail.nintendo.co.jp/受信/Revolution/Wiiツール輸出規制 ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Wiiツール輸出規制 ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Wiiツール輸出規制 ML200606 | .txt | 
Wiiツール輸出規制 ML200607 | .txt | 
Wiiツール輸出規制 ML200608 | .txt | 


---
#### Ml-revo-info (/mail.nintendo.co.jp/受信/Revolution/ml-revo-info)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">ml-revo-info</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
NNGC ML200509 | .txt | 
NNGC ML200510 | .txt | 
NNGC ML200511 | .txt | 
NNGC ML200512 | .txt | 
NNGC ML200601 | .txt | 
NNGC ML200602 | .txt | 
NNGC ML200603 | .txt | 
NNGC ML200604 | .txt | 
NNGC ML200605 | .txt | 
NNGC ML200606 | .txt | 
NNGC ML200608 | .txt | 
NNGC ML200610 | .txt | 


---
#### Wii-shared1 ml (/mail.nintendo.co.jp/受信/Revolution/wii-shared1 ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">wii-shared1 ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
wii-shared1 ML200609 | .txt | 
wii-shared1 ML200610 | .txt | 
wii-shared1 ML200611 | .txt | 
wii-shared1 ML200612 | .txt | 


---
#### ゲームリモコン (/mail.nintendo.co.jp/受信/Revolution/ゲームリモコン)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">ゲームリモコン</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
ゲームリモコン200603 | .txt | 
ゲームリモコン200604 | .txt | 
ゲームリモコン200605 | .txt | 
ゲームリモコン200606 | .txt | 


---
##### Miw_sup ml (/mail.nintendo.co.jp/受信/Revolution/ゲームリモコン/miw_sup ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">miw_sup ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
miw_sup ML200511 | .txt | 
miw_sup ML200601 | .txt | 
miw_sup ML200602 | .txt | 
miw_sup ML200604 | .txt | 

---
##### Ml-rvlcon (/mail.nintendo.co.jp/受信/Revolution/ゲームリモコン/ml-rvlcon)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">ml-rvlcon</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
ml-rvlcon200604 | .txt | 
ml-rvlcon200605 | .txt | 
ml-rvlcon200606 | .txt | 
ml-rvlcon200607 | .txt | 
ml-rvlcon200608 | .txt | 
ml-rvlcon200609 | .txt | 


---
##### Sora_sup (/mail.nintendo.co.jp/受信/Revolution/ソラ/SORA_SUP)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">SORA_SUP</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
SORA_SUP200604 | .txt | 
SORA_SUP200606 | .txt | 


---
##### Sky mailing list (/mail.nintendo.co.jp/受信/Revolution/ソラ/ソラ ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">ソラ ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
ソラ ML200511 | .txt | 
ソラ ML200512 | .txt | 
ソラ ML200601 | .txt | 
ソラ ML200602 | .txt | 
ソラ ML200603 | .txt | 
ソラ ML200604 | .txt | 
ソラ ML200605 | .txt | 
ソラ ML200606 | .txt | 
ソラ ML200607 | .txt | 
ソラ ML200608 | .txt | 
ソラ ML200609 | .txt | 
ソラ ML200610 | .txt | 
ソラ ML200611 | .txt | 
ソラ ML200612 | .txt | 


---
#### Virtual Console (/mail.nintendo.co.jp/受信/Revolution/バーチャルコンソール)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">バーチャルコンソール</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
バーチャルコンソール200602 | .txt | 
バーチャルコンソール200603 | .txt | 
バーチャルコンソール200604 | .txt | 
バーチャルコンソール200605 | .txt | 
バーチャルコンソール200606 | .txt | 
バーチャルコンソール200607 | .txt | 
バーチャルコンソール200608 | .txt | 
バーチャルコンソール200609 | .txt | 
バーチャルコンソール200609_01 | .txt | 
バーチャルコンソール200609_02 | .txt | 
バーチャルコンソール200610 | .txt | 
バーチャルコンソール200612 | .txt | 


---
##### Intelligent Systems Virtual Console Mailing List (/mail.nintendo.co.jp/受信/Revolution/バーチャルコンソール/IS VirtualConsole ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">バーチャルコンソール/IS VirtualConsole ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
IS VirtualConsole ML200602 | .txt | 
IS VirtualConsole ML200603 | .txt | 
IS VirtualConsole ML200604 | .txt | 
IS VirtualConsole ML200605 | .txt | 
IS VirtualConsole ML200606 | .txt | 
IS VirtualConsole ML200607 | .txt | 
IS VirtualConsole ML200608 | .txt | 
IS VirtualConsole ML200609 | .txt | 
IS VirtualConsole ML200610 | .txt | 
IS VirtualConsole ML200611 | .txt | 
IS VirtualConsole ML200611_01 | .txt | 
IS VirtualConsole ML200612 | .txt | 

---
##### Intelligent Systems Virtual Console Debug Mailing List(/mail.nintendo.co.jp/受信/Revolution/バーチャルコンソール/IS VirtualConsole_Debug ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">バーチャルコンソール/IS VirtualConsole_Debug ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
IS VirtualConsole_Debug ML200607 | .txt | 
IS VirtualConsole_Debug ML200608 | .txt | 
IS VirtualConsole_Debug ML200609 | .txt | 
IS VirtualConsole_Debug ML200610 | .txt | 
IS VirtualConsole_Debug ML200611 | .txt | 
IS VirtualConsole_Debug ML200612 | .txt | 


---
##### Is virtualconsole_debug(noa) ml (/mail.nintendo.co.jp/受信/Revolution/バーチャルコンソール/IS VirtualConsole_Debug(NOA) ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">バーチャルコンソール/IS VirtualConsole_Debug(NOA) ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
IS VirtualConsole_Debug(NOA) ML200612 | .txt | 


---
#### 似顔絵 ml (/mail.nintendo.co.jp/受信/Revolution/似顔絵 ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">似顔絵 ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
似顔絵 ML200606 | .txt | 
似顔絵 ML200607 | .txt | 
似顔絵 ML200608 | .txt | 
似顔絵 ML200609 | .txt | 
似顔絵 ML200610 | .txt | 
似顔絵 ML200611 | .txt | 
似顔絵 ML200612 | .txt | 


---
### Spd all (/mail.nintendo.co.jp/受信/SPD ALL)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">SPD ALL</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
SPD ALL200506 | .txt | 
SPD ALL200507 | .txt | 
SPD ALL200508 | .txt | 
SPD ALL200509 | .txt | 
SPD ALL200510 | .txt | 
SPD ALL200511 | .txt | 
SPD ALL200512 | .txt | 
SPD ALL200601 | .txt | 
SPD ALL200602 | .txt | 
SPD ALL200603 | .txt | 
SPD ALL200604 | .txt | 
SPD ALL200605 | .txt | 
SPD ALL200606 | .txt | 
SPD ALL200607 | .txt | 
SPD ALL200608 | .txt | 
SPD ALL200609 | .txt | 
SPD ALL200610 | .txt | 
SPD ALL200611 | .txt | 
SPD ALL200612 | .txt | 


---
### Spd gm (/mail.nintendo.co.jp/受信/SPD GM)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">SPD GM</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
SPD GM200506 | .txt | 
SPD GM200507 | .txt | 
SPD GM200508 | .txt | 
SPD GM200509 | .txt | 
SPD GM200510 | .txt | 
SPD GM200511 | .txt | 
SPD GM200512 | .txt | 
SPD GM200601 | .txt | 
SPD GM200602 | .txt | 
SPD GM200603 | .txt | 
SPD GM200604 | .txt | 
SPD GM200605 | .txt | 
SPD GM200606 | .txt | 
SPD GM200607 | .txt | 
SPD GM200608 | .txt | 
SPD GM200609 | .txt | 
SPD GM200610 | .txt | 
SPD GM200611 | .txt | 
SPD GM200612 | .txt | 


---
### Spd ti (/mail.nintendo.co.jp/受信/SPD TI)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">SPD TI</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
SPD TI200506 | .txt | 
SPD TI200507 | .txt | 
SPD TI200508 | .txt | 
SPD TI200509 | .txt | 
SPD TI200510 | .txt | 
SPD TI200511 | .txt | 
SPD TI200512 | .txt | 
SPD TI200601 | .txt | 
SPD TI200602 | .txt | 
SPD TI200603 | .txt | 
SPD TI200604 | .txt | 
SPD TI200605 | .txt | 
SPD TI200606 | .txt | 
SPD TI200607 | .txt | 
SPD TI200608 | .txt | 
SPD TI200609 | .txt | 
SPD TI200610 | .txt | 
SPD TI200611 | .txt | 
SPD TI200612 | .txt | 


---
### Wi-fiガイドライン ml (/mail.nintendo.co.jp/受信/Wi-Fiガイドライン ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">Wi-Fiガイドライン ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
Wi-Fiガイドライン ML200602 | .txt | 
Wi-Fiガイドライン ML200603 | .txt | 
Wi-Fiガイドライン ML200604 | .txt | 
Wi-Fiガイドライン ML200605 | .txt | 
Wi-Fiガイドライン ML200606 | .txt | 
Wi-Fiガイドライン ML200607 | .txt | 
Wi-Fiガイドライン ML200608 | .txt | 
Wi-Fiガイドライン ML200609 | .txt | 
Wi-Fiガイドライン ML200610 | .txt | 
Wi-Fiガイドライン ML200611 | .txt | 
Wi-Fiガイドライン ML200612 | .txt | 


---
### Dea-5p-sup ml (/mail.nintendo.co.jp/受信/dea-5p-sup ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">/dea-5p-sup ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
dea-5p-sup ML200511 | .txt | 
dea-5p-sup ML200607 | .txt | 
dea-5p-sup ML200608 | .txt | 
dea-5p-sup ML200612 | .txt | 


---
### Dea-sup (/mail.nintendo.co.jp/受信/dea-sup)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">dea-sup</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
dea-sup200505 | .txt | 
dea-sup200506 | .txt | 


---
### アカウント関連 (/mail.nintendo.co.jp/受信/アカウント関連)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">アカウント関連</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
アカウント関連200607 | .txt | 
アカウント関連200611 | .txt | 
アカウント関連200612 | .txt | 


---
### サーバ管理 (/mail.nintendo.co.jp/受信/サーバ管理)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">サーバ管理</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
サーバ管理200506 | .txt | 
サーバ管理200507 | .txt | 
サーバ管理200508 | .txt | 
サーバ管理200509 | .txt | 
サーバ管理200510 | .txt | 
サーバ管理200512 | .txt | 
サーバ管理200602 | .txt | 
サーバ管理200603 | .txt | 
サーバ管理200604 | .txt | 
サーバ管理200605 | .txt | 
サーバ管理200606 | .txt | 
サーバ管理200607 | .txt | 
サーバ管理200608 | .txt | 
サーバ管理200609 | .txt | 


---
### ポケモン (/mail.nintendo.co.jp/受信/ポケモン)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">ポケモン</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
ポケモン200603 | .txt | 
ポケモン200604 | .txt | 
ポケモン200605 | .txt | 
ポケモン200606 | .txt | 
ポケモン200607 | .txt | 
ポケモン200608 | .txt | 
ポケモン200609 | .txt | 
ポケモン200610 | .txt | 
ポケモン200611 | .txt | 
ポケモン200612 | .txt | 


---
#### ゲームフリーク (/mail.nintendo.co.jp/受信/ポケモン/ゲームフリーク)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">ゲームフリーク</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
ゲームフリーク200512 | .txt | 
ゲームフリーク200601 | .txt | 
ゲームフリーク200602 | .txt | 
ゲームフリーク200603 | .txt | 
ゲームフリーク200604 | .txt | 
ゲームフリーク200605 | .txt | 
ゲームフリーク200606 | .txt | 
ゲームフリーク200607 | .txt | 
ゲームフリーク200608 | .txt | 
ゲームフリーク200609 | .txt | 
ゲームフリーク200611 | .txt | 
ゲームフリーク200612 | .txt | 


---
#### 三津原さん (/mail.nintendo.co.jp/受信/ポケモン/三津原さん)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">三津原さん</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
三津原さん200601 | .txt | 
三津原さん200602 | .txt | 
三津原さん200603 | .txt | 


---
### 人事関連 (/mail.nintendo.co.jp/受信/人事関連)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">人事関連</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
人事関連200506 | .txt | 
人事関連200603 | .txt | 
人事関連200604 | .txt | 
人事関連200606 | .txt | 
人事関連200608 | .txt | 
人事関連200612 | .txt | 


---
#### キャリアシート (/mail.nintendo.co.jp/受信/人事関連/キャリアシート)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">キャリアシート</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
キャリアシート200612 | .txt | 


---
#### 中途採用 (/mail.nintendo.co.jp/受信/人事関連/中途採用)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">中途採用</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
中途採用200602 | .txt | 
中途採用200604 | .txt | 
中途採用200606 | .txt | 


---
#### 採用試験 (/mail.nintendo.co.jp/受信/人事関連/採用試験)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">採用試験</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
採用試験200605 | .txt | 
採用試験200606 | .txt | 


---
#### 新人研修 (/mail.nintendo.co.jp/受信/人事関連/新人研修)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">新人研修</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
新人研修200602 | .txt | 
新人研修200603 | .txt | 
新人研修200604 | .txt | 
新人研修200605 | .txt | 
新人研修200606 | .txt | 


---
#### 新人研修 ml (/mail.nintendo.co.jp/受信/人事関連/新人研修 ML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">新人研修 ML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
新人研修 ML200605 | .txt | 
新人研修 ML200606 | .txt | 


---
#### 新卒面接 (/mail.nintendo.co.jp/受信/人事関連/新卒面接)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">新卒面接</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
新卒面接200602 | .txt | 
新卒面接200603 | .txt | 
新卒面接200604 | .txt | 
新卒面接200605 | .txt | 
新卒面接200606 | .txt | 
新卒面接200608 | .txt | 


---
#### 申請・承認関連 (/mail.nintendo.co.jp/受信/人事関連/申請・承認関連)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">申請・承認関連</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
申請・承認関連200611 | .txt | 
申請・承認関連200612 | .txt | 


---
#### 評価 (/mail.nintendo.co.jp/受信/人事関連/評価)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">人事関連/評価</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
評価200603 | .txt | 
評価200604 | .txt | 
評価200606 | .txt | 
評価200609 | .txt | 
評価200610 | .txt | 
評価200611 | .txt | 


---
### Meeting schedule (/mail.nintendo.co.jp/受信/会議のスケジュール)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">会議のスケジュール</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
会議のsukejyu-ru200608 | .txt | 
会議のsukejyu-ru200609 | .txt | 
会議のsukejyu-ru200610 | .txt | 
会議のsukejyu-ru200611 | .txt | 
会議のsukejyu-ru200612 | .txt | 


---
### Internal technical support (/mail.nintendo.co.jp/受信/部内技術サポート)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">部内技術サポート</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
部内技術サポート200505 | .txt | 
部内技術サポート200506 | .txt | 
部内技術サポート200507 | .txt | 
部内技術サポート200508 | .txt | 
部内技術サポート200509 | .txt | 
部内技術サポート200510 | .txt | 
部内技術サポート200511 | .txt | 
部内技術サポート200512 | .txt | 
部内技術サポート200601 | .txt | 
部内技術サポート200602 | .txt | 
部内技術サポート200603 | .txt | 
部内技術サポート200604 | .txt | 
部内技術サポート200605 | .txt | 
部内技術サポート200606 | .txt | 
部内技術サポート200607 | .txt | 
部内技術サポート200608 | .txt | 
部内技術サポート200609 | .txt | 
部内技術サポート200610 | .txt | 
部内技術サポート200611 | .txt | 
部内技術サポート200612 | .txt | 


---
## HTML Inbox (/mail.nintendo.co.jp/受信HTML)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">受信HTML</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

The earliest email is from May 19th 2005 and the last is from 21st December 2006.

Email that are just notices of a sent file or a boring trivial message are not in the table below as there is so many non-interesting emails it would be a waste of space documenting them. Many of them are daily translation files from each of the languages translators (german, italian, french, spanish) so it gets very repetitive.

  </div>
</section>  

File Name | Extension | Description
---|---|---
050519_01 | Just talk about sending a report
050523_00 | Notice of Upload of Pokemon Emerald ROM for EURO translation (debug-2005-05-23-A-EURO.exe)
050524_06 | Mario Club bug log?
050527_00 | 
050530_00 | 
050530_01 | 
050530_03 | 
050530_04 | 
050530_05 | 
050530_06 | 
050530_07 | 
050530_08 | 
050531_00 | Talk about changes in French and italian locale (using a period after EXP)
050531_06 | email address of Game Freak employees
050601_00 | 
050601_01 | 
050601_02 | 
050601_03 | 
050601_04 | 
050601_05 | 
050601_06 | 
050601_07 | 
050601_08 | 
050601_09 | 
050601_10 | 
050602_00 | 
050602_01 | 
050602_02 | 
050602_03 | 
050602_04 | 
050602_05 | 
050602_06 | 
050602_07 | 
050602_08 | 
050606_00 | 
050606_01 | 
050606_02 | 
050606_03 | 
050606_04 | 
050606_05 | 
050606_07 | 
050606_08 | 
050606_09 | 
050606_10 | 
050606_11 | 
050606_12 | 
050606_16 | 
050606_17 | 
050606_18 | 
050606_19 | 
050607_00 | 
050607_01 | 
050607_02 | 
050607_03 | 
050607_04 | 
050607_05 | 
050607_06 | 
050607_07 | 
050608_00 | 
050608_01 | 
050608_02 | 
050608_03 | 
050608_04 | 
050608_05 | 
050608_07 | 
050608_08 | 
050609_00 | 
050609_01 | 
050609_02 | 
050609_03 | 
050609_04 | 
050609_05 | 
050609_06 | 
050610_00 | 
050610_01 | 
050610_02 | 
050610_03 | 
050610_04 | 
050610_05 | 
050610_06 | 
050610_07 | 
050613_00 | 
050613_01 | 
050613_02 | 
050613_03 | 
050613_04 | 
050613_06 | 
050613_07 | 
050613_08 | 
050614_00 | 
050614_01 | 
050614_02 | 
050614_03 | 
050614_04 | 
050614_05 | 
050615_00 | 
050615_01 | 
050615_02 | 
050615_03 | 
050615_04 | 
050615_05 | 
050615_06 | 
050615_07 | 
050616_00 | 
050616_01 | 
050616_02 | 
050616_03 | 
050616_04 | 
050616_05 | 
050620_00 | 
050620_01 | 
050620_02 | 
050620_03 | 
050620_04 | 
050620_06 | 
050620_07 | 
050620_08 | 
050620_09 | 
050620_10 | 
050620_11 | 
050620_14 | 
050621_00 | 
050621_01 | 
050621_02 | 
050621_03 | 
050621_04 | 
050621_05 | 
050621_07 | 
050621_08 | 
050622_00 | 
050622_01 | 
050622_02 | 
050622_03 | 
050622_04 | 
050622_05 | 
050623_00 | 
050623_01 | 
050623_02 | 
050623_03 | 
050623_04 | 
050623_05 | 
050623_07 | 
050623_08 | 
050623_09 | 
050624_00 | 
050624_01 | 
050624_02 | 
050624_03 | 
050624_04 | 
050624_05 | 
050627_00 | 
050627_01 | 
050627_02 | 
050627_03 | 
050627_04 | 
050627_05 | 
050627_06 | 
050627_08 | 
050628_00 | 
050628_01 | 
050628_02 | 
050628_03 | 
050628_05 | 
050629_00 | 
050629_01 | 
050629_02 | 
050629_03 | 
050630_01 | 
050630_02 | 
050630_03 | 
050630_04 | 
050630_05 | 
050701_01 | 
050701_02 | 
050701_03 | 
050704_00 | 
050704_01 | 
050705_00 | 
050705_01 | 
050706_00 | 
050706_01 | 
050706_02 | 
050707_01 | 
050707_03 | 
050707_04 | 
050708_00 | 
050708_01 | 
050711_00 | 
050711_02 | 
050711_03 | 
050712_00 | 
050712_01 | 
050713_00 | 
050713_02 | 
050713_03 | 
050714_00 | 
050714_02 | 
050715_00 | 
050715_01 | 
050719_04 | 
050720_00 | 
050720_01 | 
050721_00 | 
050722_00 | 
050722_01 | 
050804_00 | 
060105_00 | 
060106_00 | 
060110_01 | 
060123_01 | 
060126_00 | 
060201_02 | 
060228_00 | 
060519_00 | 
060601_00 | 
060606_00 | 
060706_01 | 
060706_02 | 
060706_03 | 
060706_04 | 
060707_00 | 
060707_01 | 
060707_02 | 
060707_03 | 
060711_00 | 
060711_01 | 
060719_00 | 
060720_00 | 
060802_00 | 
060901_00 | 
060925_00 | 
060929_00 | 
061002_00 | 
061002_01 | 
061002_02 | 
061006_00 | 
061006_01 | 
061010_00 | 
061016_01 | 
061016_02 | 
061016_03 | 
061016_04 | 
061023_00 | 
061025_00 | 
061027_00 | 
061031_00 | 
061128_00 | 
061129_00 | 
061129_01 | 
061130_00 | 
061204_00 | 
061206_00 | 
061206_01 | 
061208_00 | 
061211_00 | 
061220_00 | 
061221_00 | 


---
## Received Log (/mail.nintendo.co.jp/受信ログ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">受信ログ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
受信ログ200610_22 | .txt | 
受信ログ200610_23 | .txt | 
受信ログ200610_24 | .txt | 
受信ログ200610_25 | .txt | 
受信ログ200610_26 | .txt | 
受信ログ200610_27 | .txt | 
受信ログ200610_28 | .txt | 
受信ログ200610_29 | .txt | 
受信ログ200610_30 | .txt | 
受信ログ200610_31 | .txt | 
受信ログ200610_32 | .txt | 
受信ログ200610_33 | .txt | 
受信ログ200610_34 | .txt | 
受信ログ200610_35 | .txt | 
受信ログ200610_36 | .txt | 
受信ログ200610_37 | .txt | 
受信ログ200611 | .txt | 
受信ログ200611_01 | .txt | 
受信ログ200611_02 | .txt | 
受信ログ200611_03 | .txt | 
受信ログ200611_04 | .txt | 
受信ログ200611_05 | .txt | 
受信ログ200611_06 | .txt | 
受信ログ200611_07 | .txt | 
受信ログ200611_08 | .txt | 
受信ログ200611_09 | .txt | 
受信ログ200611_10 | .txt | 
受信ログ200611_11 | .txt | 
受信ログ200611_12 | .txt | 
受信ログ200611_13 | .txt | 
受信ログ200611_14 | .txt | 
受信ログ200611_15 | .txt | 
受信ログ200611_16 | .txt | 
受信ログ200611_17 | .txt | 
受信ログ200611_18 | .txt | 
受信ログ200611_19 | .txt | 
受信ログ200611_20 | .txt | 
受信ログ200611_21 | .txt | 
受信ログ200611_22 | .txt | 
受信ログ200611_23 | .txt | 
受信ログ200611_24 | .txt | 
受信ログ200611_25 | .txt | 
受信ログ200611_26 | .txt | 
受信ログ200611_27 | .txt | 
受信ログ200611_28 | .txt | 
受信ログ200611_29 | .txt | 
受信ログ200611_30 | .txt | 
受信ログ200611_31 | .txt | 
受信ログ200611_32 | .txt | 
受信ログ200611_33 | .txt | 
受信ログ200611_34 | .txt | 
受信ログ200612 | .txt | 
受信ログ200612_01 | .txt | 
受信ログ200612_02 | .txt | 
受信ログ200612_03 | .txt | 
受信ログ200612_04 | .txt | 
受信ログ200612_05 | .txt | 
受信ログ200612_06 | .txt | 
受信ログ200612_07 | .txt | 
受信ログ200612_08 | .txt | 
受信ログ200612_09 | .txt | 
受信ログ200612_10 | .txt | 
受信ログ200612_11 | .txt | 
受信ログ200612_12 | .txt | 
受信ログ200612_13 | .txt | 
受信ログ200612_14 | .txt | 
受信ログ200612_15 | .txt | 
受信ログ200612_16 | .txt | 
受信ログ200612_17 | .txt | 
受信ログ200612_18 | .txt | 
受信ログ200612_19 | .txt | 
受信ログ200612_20 | .txt | 
受信ログ200612_21 | .txt | 
受信ログ200612_22 | .txt | 
受信ログ200612_23 | .txt | 


---
## Received Attachments (/mail.nintendo.co.jp/受信添付)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">受信添付</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
 Re_ ハンタ－ズ Wifi状況の件.eml | 
 Re_ ハンタ－ズ Wifi状況の件(2).eml | 
_Block.pdf | 
_DPD Specj.jpg | 
_NNGC全体日程表.xls | 
!福栄食堂アンケート0508.xls | 
(NOEUpdated)Work_Flow061016.xls | 
(改定提案)安全設計関連標準.pdf | 
(田原)20050929NintendoWiFiConnectin機能説明資料.zip | 
[External-hokkaido] Build 1038-40.eml | 
[External-hokkaido] build-1038-30.eml.eml | 
[External-hokkaido] build-1038-51.eml | 
[External-hokkaido] build-1038-53.eml | 
[External-hokkaido] build-1038-71.eml | 
[External-hokkaido] Component 2 Build 1038-74.eml | 
[External-hokkaido] Opera Component 2 - Build 1038-29.eml.eml | 
[External-hokkaido] Release Build Opera Component 2.eml | 
[External-hokkaido] Release Note - Build 114.eml | 
[External-hokkaido] Release Note Build 1007.eml.eml | 
[External-hokkaido] Release Note Build 116.eml | 
[External-hokkaido] Release Note Build 121.eml | 
[External-hokkaido] Release Note Opera Component 2 - Build 1038-23.eml.eml.eml | 
[External-hokkaido] Release Note Opera Component 2 Build 1038-2.eml.eml | 
[External-hokkaido] Release Notes Build 1035.eml | 
[External-hokkaido] Release Notes Build 117.eml | 
[External-hokkaido] Release Notes Build 119.eml.eml | 
[External-hokkaido] Release Notes Opera Component 2 - Build 1038-2.eml | 
[External-hokkaido] Release Notes Opera Component 2 Build 1038-27.eml.eml | 
JavaScript and JSPlugin error.eml | 
[ml-wii-shared1_1] ML Open.eml | 
[ml-wii-shared1_10] Re_ HomeButtonMenu のリソースについて.eml | 
[ml-wii-shared1_11] Re_ Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_12] Re_ Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_13] Re_ Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_14] Re_ Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_15] Re_ HomeButtonMenu  のリソースについて.eml | 
[ml-wii-shared1_16] System NAND application 開発者向けドキュメント(さらに添付ファイルを含むらしい).eml | 
[ml-wii-shared1_17] Re_ System NAND application  開発者向けドキュメント.eml | 
[ml-wii-shared1_18] Re_ System NAND application  開発者向けドキュメント.eml | 
[ml-wii-shared1_19] Re_ System NAND application   開発者向けドキュメント.eml | 
[ml-wii-shared1_2] Shared1コンテンツの確認方法について.eml | 
[ml-wii-shared1_20] Re_ System NAND application   開発者向けドキュメント.eml | 
[ml-wii-shared1_21] Re_ System NAND application    開発者向けドキュメント.eml | 
[ml-wii-shared1_22] Re_ System NAND application   開発者向けドキュメント.eml | 
[ml-wii-shared1_23] Re_ System NAND application    開発者向けドキュメント.eml | 
[ml-wii-shared1_24] Re_ System NAND application  開発者向けドキュメント(さらに添付ファイルを含むらしい).eml | 
[ml-wii-shared1_25] 共有リソースの同一性のチェック.eml | 
[ml-wii-shared1_26] CNTSeek関数のoffset引数について.eml | 
[ml-wii-shared1_27] Re_ CNTSeek関数のoffset引数について.eml | 
[ml-wii-shared1_28] MLメンバー追加.eml | 
[ml-wii-shared1_29] Re_ System NAND application   開発者向けドキュメント(さらに添付ファイルを含むらしい).eml | 
[ml-wii-shared1_3] Re_ Shared1コンテンツの確認方法について.eml | 
[ml-wii-shared1_4] Re_ Shared1コンテンツの確認方法について.eml | 
[ml-wii-shared1_5] Nメニューからwadファイルをインポートする際のエラーについて.eml | 
[ml-wii-shared1_6] Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_7] Re_ Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_8] Re_ Shared1関連の検証にて気が付いた点について.eml | 
[ml-wii-shared1_9] HomeButtonMenu のリソースについて.eml | 
[REVO_VirtualConsole_ 01283] 【至急】NESタイトルのRVL_SDK2.3化.eml | 
[RVL-sup_00082] Revolution多国語対応について(さらに添付ファイルを含むらしい).eml | 


『キャリアシート　上司用』説明資料.pdf | 
【E32006研修】総括レポート(雛形).doc | 
【E32006研修】総括レポー木梨.doc | 
【ＶＣソフトチェック】_20061209.xls | 
【まとめ】ＮＣＬ社員用連絡室（Ｒ５１０）0426ver.xls | 
【緊急】ホームボタンメニュー周りの不具合について.eml | 
＜中村秀和＞2006.doc | 
01.ポートメッセ-10.27.pdf | 
04_小澤_FTPアクセス許可設定依頼書_社内.doc | 
051205 ネットワーク接続実験のレポート.txt | 
051227-USG１・２カートリッジロットチェック結果NTRdata20051115USG1207.xls | 
05年後半イベント全体日程.xls | 
060221.exe | 
060614_VCバナー相談.txt | 
060912.jpg | 
0620-2006 VC Licensee Re-Vamp.xls | 
0718：ローカライズ計画案.xls | 
1-12.26.01.apc | 
1-12.28.29.apc | 
1-20.18.29.apc | 
1-20.19.00.apc | 
1-20.31.40.apc | 
1-20.34.20.apc | 
1-20.35.19.apc | 
1-20.53.33.apc | 
1-21.06.49.apc | 
1.bmp | 
１プロ.txt | 
2.bmp | 
2005.6流通説明会.xls | 
2005.zip | 
20051019_NITRO1.2SP2_CompilerLinker_Patch.jp.txt | 
20051024_eval_30ThreadAutoDetect.zip | 
20051025_eval_NITRO_Linker_v2.0_b77.zip | 
20051121商標セミナー参加者リスト.xls | 
20051130商標セミナー参加者リスト.xls | 
20051213_cw_ds_1.2_sp3_debuggerPatch.jp.txt | 
2005年10月度議事次第.txt | 
2005年11月度議事次第.txt | 
2005年12月度議事次第.txt | 
2005年7月度GM会議議事次第.txt | 
2005年7月度GM会議議事次第(最終).txt | 
2005年8月度議事次第.txt | 
2005年9月度議事次第.txt | 
2006_02_16_本体フレンドリスト.ppt | 
2006_0222_kuroda_01.mb | 
2006_0615_kuroda_mayaPlugin縺ョ蝣エ蜷・lzh | 
2006-11-15-Virtual Console - EU.xls | 
2006-11-15-Virtual Console(HBM) - EU.xls | 
2006-11-16-Virtual Console_JP_NESP_SNESP.xls | 
2006-11-21-Virtual Console - EU .xls | 
2006-11-22-VirtualConsole-EUTest-NES-SNES.xls | 
2006-11-28-Virtual Console - EU.xls | 
2006-11-29-Virtual Console-EU-NCL.xls | 
2006-12-01-Virtual Console - EU.xls | 
2006-12-13-Virtual Console - EU.xls | 
2006-12-19-Virtual Console - EU_JP.xls | 
2006-12-19-Virtual-Console-NCL.xls | 
20060125_RVL打合せ_01.txt | 
20060315_RVL打合せ(第1部)_01.txt | 
20060315_RVL打合せ(第1部)_02.txt | 
20060328_cw_ds_2.0_F-38F-39_sample.zip | 
20060522_cw_ds_1.2_sp4_Linker_Patch.jp.txt | 
20060602_cw_ds_2.0_Buildtools_Patch.jp.txt | 
20060616_cw_ds_2.0_Buildtools_Patch2.jp.txt | 
20060616_cw_ds_2.0_Compiler_Patch.jp.txt | 
20060705_cw_ds_2.0_Buildtools_Patch3.jp.txt | 
20060811_cw_ds_2.0_Buildtools_Patch4.jp.txt | 
20060829_cw_ds_2.0_sp1_Buildtools_Patch.jp.txt | 
20061122_cw_ds_2.0_sp1_Buildtools_Patch2.jp.txt | 
20061206_RFL_Library_Guidelines.doc | 
20061207_RFL_Library_Guidelines_EAD.doc | 
20061211_RFL_Library_Guidelines_EAD.doc | 
20061221_RFL_Overview_EAD.doc | 
2006入社試験問題情報系Ａ_0322.doc | 
2006入社試験問題情報系B_0322.doc | 
2006入社試験問題情報系C.doc | 
2006入社試験問題情報系C（解答付）.doc | 
2006年10月度議事次第.txt | 
2006年11月度議事次第.txt | 
2006年12月度議事次第.txt | 
2006年3月度議事次第.txt | 
2006年4月度議事次第.txt | 
2006年5月度議事次第.txt | 
2006年6月度議事次第.txt | 
2006年7月度議事次第.txt | 
2006年8月度議事次第.txt | 
2006年9月度議事次第.txt | 
2006年新入社員技術研修参加者一覧.xls | 
2006技術系新入社員研修スケジュール（確定）.xls | 
2006新入社員開発メールアドレス.xls | 
2006新卒採用ミーティング（理工）.doc | 
200万人の漢検_5W_061120.pdf | 
21968-YoshisIslandDS-FR_1.doc | 
22275 - Super Castlevania IV - FR.doc | 
22291 - R-Type 3 The Third Lightning - FR.pdf | 
253881Eigo-kr_061013.doc | 
253881Eigo-kr_061013.pdf | 
254156指示原稿.pdf | 
２プロ.txt | 
300-M00027-00 ポケモン青の救助隊データ消えの件.doc | 
300-M00028-00 対処記録案.doc | 
3Dmaxプラグインβ版コメントYsk0627.pdf | 
3dsmax_ifl_sample2.zip | 
3D研修課題.doc | 
３プロ.txt | 
３月２９日定性情報まとめ.doc | 
4F配線ルート.pdf | 
４プロ.txt | 
56S0497（WS380）.pdf | 
56S0497（構成）.pdf | 
56S0660（FX3450構成）.pdf | 
56S0660（NVS285構成）.pdf | 
56S0660（WS390）.pdf | 
５ＰＧ住所録.xls | 
５プロ.txt | 
9.15-1.xls | 
ABC.pdf | 
AboutVoiceChat_en_060807.zip | 
AboutVoiceChat_jp.zip | 
AboutVoiceChat_田原修生.zip | 
AboutWXC.pdf | 
ActimagineLogo.zip | 
ADPCM2PCM.txt | 
after.txt | 
AGBSpecSheet-NOE.doc | 
AGBソフト一覧.xls | 
Animal Crossing_Language issues.zip | 
apiman-101-110.diff | 
AP接続エラー確認資料(仮).xls | 
AP設置箇所.gif | 
arctools.zip | 
ARM9-TS-C.lcf.template | 
ARM9-TS.lcf.template | 
ARMLinker.dll.b-3670.20060501.190135A.dump | 
Assistance to Ubisoft.txt | 
Audio Problems.eml | 
AWKEE1_Log.cap | 
ax.zip | 
ax2.zip | 
axsimple.cpp | 
AXライブラリ質問.txt | 
ayame-kagemai.zip | 
BackToolForNDEV.zip | 
BackToolForNDEV104.zip | 
BackToolForRVTR.zip | 
BAKR_liptouching_061024.xls | 
Banner_english.xls | 
Banner_virtual.32.bns | 
Banner16color_KO_A.bmp | 
battlefieldLearnig.txt | 
before.txt | 
bench.zip | 
BMS Business Server Upload Reports(EU12052006).pdf | 
BMS Business Server Upload Reports(EU12062006).pdf | 
BMS Business Server Upload Reports(EU12082006).pdf | 
BMS Business Server Upload Reports(EU12112006).pdf | 
BMS Business Server Upload Reports(EU12132006).pdf | 
BMS Business Server Upload Reports(EU12152006).pdf | 
BMS Business Server Upload Reports(EU12192006).pdf | 
BMS Business Server Upload Reports(EU12202006).pdf | 
BMS Business Server Upload Reports(US12052006).pdf | 
BMS Business Server Upload Reports(US12112006).pdf | 
BMS Business Server Upload Reports(US12132006).pdf | 
BMS Business Server Upload Reports(US12142006).pdf | 
BMS Business Server Upload Reports(US12152006).pdf | 
BMS Business Server Upload Reports(US12192006).pdf | 
BMS商用サーバーアップロード連絡書(JP20061207).pdf | 
BMS商用サーバーアップロード連絡書(JP20061213).pdf | 
BMS商用サーバーアップロード連絡書(JP20061215).pdf | 
BMS商用サーバーアップロード連絡書(JP20061219).pdf | 
BOMBERMAN93(US).bmp | 
BOMBERMAN94(JP).bmp | 
BONKS.bmp | 
Brain Ageからの脳トレ韓国版における仕様変更点.xls | 
BrainAge_kr_061020_ed.pdf | 
BrainAge_kr_061020_ed.rtf | 
BrainTrain_NormalText_shuusei061116.xls | 
BrainTrain_Text_1020.zip | 
BTに関わるゲームリモコンの仕様.pdf | 
BTに関わるゲームリモコンの仕様.txt | 
BTに関わるゲームリモコンの仕様.vin | 
BTに関わるゲームリモコンの仕様20060318.txt | 
BT問答集.xls | 
bug_fp_sz20060301.lzh | 
buglog_EME_NOE.xls | 
build-1017におけるフォントの直接参照について.txt | 
Bunpou_tag_English.xls | 
bytecopy_core.s | 
bytecopy.c | 
bytecopy.h | 
cap.zip | 
car_sample.zip | 
CEDEC2006レポートPS3ネットワーク.ppt | 
CERO倫理規程060223.pdf | 
changedesign_2.zip | 
changedesign.zip | 
channel_1030.vsd | 
ChannelIcon.zip | 
Check_menu_sample.zip | 
Classic Controller revised NC 1.pdf | 
Classic Controller revised NCL | 
Classic Controller revised NCL.pdf | 
Classic Controller revised NCL.vsd | 
Classic Controller revised v200 | 
Classic Controller revised v2002.vsd | 
Classic Controller v2002.vsd | 
cloud.zip | 
clrbars7.BMP | 
color.jpg | 
ColorBar.elf | 
ColorBarPAL.elf | 
Comments on Filtering Software(NOA&Outside Councel)doc.doc | 
cont_number_re_0920.sit | 
cont_number_re_PDF_0920.zip | 
cont_number_re.pdf | 
cont_number_re.sit | 
cont_ope_0817_.jpg | 
cont_ope_0817.jpg | 
Content_Licensing_Ser_jp.txt | 
Content_Licensing_Ser.pdf | 
Controller Messages_061027.xls | 
Controller Messages_061101.xls | 
Controller Messages_061102_NOE.xls | 
Controller Messages_061103_NOE.xls | 
Controller Messages_NOE_061025.xls | 
Controller Messages_NOE_061025(2).xls | 
Controller Messages.xls | 
Controller Messages1017.xls | 
Controller Messages1018.xls | 
Controller Messages1019_NOE.xls | 
Controller Messages1023_NOE.xls | 
Controller Messages1023a_NOE.xls | 
Controller Messages1025_NOE.xls | 
controller_e3_2006_ver2.zip | 
controller_e3_2006.zip | 
controller_illust_0905.zip | 
controller_illust.zip | 
controller.c | 
CrashReport.lzh | 
cw_check[dev1203]_060302.lzh | 
CW_DS2.0_F39_SPEC_v2.txt | 
CW_DS2.0_F39_SPEC.txt | 
cw2_0fc_switch1_20060315.lzh | 
CW3Report2.jpg | 
D-abcd.pdf | 
DEA-SUP修正点0519.xls | 
Debug_controllerscan.xls | 
debug_document.zip | 
debuginfo.JPG | 
DebugQuickSave_Ver100_評価版_061129.doc | 
DebugQuickSave_Ver100_評価版_061130.doc | 
demand_for_NigaoeLibraly.xls | 
DesignStatement_Wi-FiConnection_060705_B.doc | 
DesignStatement_Wi-FiConnection_060705_C.doc | 
DesignStatement_Wi-FiConnection_060921_A.doc | 
DesignStatement_Wi-FiConnection_A_051110.doc | 
DesignStatement_Wi-FiConnection_A_051212.lzh | 
DesignStatement_Wi-FiConnection_A_20050123AsobiTaizenOnline_1.doc | 
DesignStatement_Wi-FiConnection_B_051110.doc | 
DesignStatement_Wi-FiConnection_C_051110.doc | 
DesignStatement_Wi-FiConnection_D_051110.doc | 
Diamond_ALL_jp.xls | 
Diamond.xls | 
Diamond.zip | 
diff.txt | 
document-20060321.zip | 
DownloadProgrammingManual.zip | 
dp_font_word060531.zip | 
dp_font060615.zip | 
DP_fusigi_operation060131.xls | 
DP_fusigi_overview060131.doc | 
DP_Ranger_Manaphy.xls | 
DP_schedule.xls | 
DP_submission.zip | 
DP_WorldTradeImage051220.doc | 
DPfont060112.zip | 
DS Lite意見.xls | 
DS-Master_Docs_WiFi_Pack_20051109_J.zip | 
DS-Master_Docs_WiFi_Pack_20060630_J.zip | 
DS2.0pragma.jp.xls | 
ＤＳカンファレンス春出席申込.xls | 
DSすれ違い通信中継所プログラム運営050913.ppt | 
DS献立全集_1W_061210.pdf | 
DS電子認証メンバー.xls | 
DS電子認証概要説明資料(企開).doc | 
dummy.lzh | 
dump.LZH | 
Dvd_Guide.jp.pdf | 
dwc3.log | 
E3 2006 業務出張者一覧（部署名）.xls | 
E3 2006 研修出張者一覧（企画開発部）.xls | 
E3 2006 研修出張者一覧（企画開発部）324.xls | 
E3 2006 研修出張者一覧（企画開発部）a.xls | 
E3 2006 研修出張者一覧（企画開発部）訂.xls | 
E3 2006 研修出張者一覧（企画開発部）訂a.xls | 
E3 2006 研修出張者一覧（部署名）.xls | 
E3 2006出張 業務派遣申請書（氏名）.doc | 
E3 2006出張 研修派遣本人希望申込・上司推薦書（木梨玲）.doc | 
E3 2006出張 研修派遣本人希望申込・上司推薦書（氏名）.doc | 
E3 EVENT - IS.xls | 
E3 EVENT.xls | 
E3_2006_kanri_5PG.xls | 
E3_2006_kanri.xls | 
E3_VC_MENU_N64.jpg | 
E3_VC_MENU_N64(2).jpg | 
E3_VC_MENU_NES.jpg | 
E3_VC_MENU_NES(2).jpg | 
E3_VC_MENU_SNES.jpg | 
E3_VC_MENU_SNES(2).jpg | 
E3_VC_OPERATION_N64.jpg | 
E3_VC_OPERATION_N64(2).jpg | 
E3_VC_OPERATION_NES.jpg | 
E3_VC_OPERATION_NES(2).jpg | 
E3_VC_OPERATION_SNES.jpg | 
E3_VC_OPERATION_SNES(2).jpg | 
E3(06)TitleList_SPD_060303.xls | 
E32006【E3研修】ＭＢ現地速報レポート（雛形）.doc | 
E3ショーバージョンガイドライン_02.txt | 
E3ショーバージョンガイドライン_03.txt | 
E3ショーバージョンガイドライン_04.txt | 
E3ショーバージョンガイドライン_05.txt | 
E3ショーバージョンガイドライン_060322.txt | 
E3ショーバージョンガイドライン(任天堂タイトル向け)_060413.doc | 
E3ショーバージョンガイドライン(任天堂タイトル向け)_060417.doc | 
E3ショーバージョンガイドライン(任天堂タイトル向け)_DS_060418.doc | 
E3ショーバージョンガイドライン(任天堂タイトル向け)_RVL_060501.doc | 
E3デバグ060410.txt | 
E３映像作成環境比較2005_11_08ver.xls | 
E3用仕様書.doc | 
E3用仕様書060412.doc | 
E3用補足資料060412.doc | 
E3用解説.txt | 
Ｅ３研修出張報告.doc | 
Ｅ３研修出張報告概要.doc | 
E3確認リスト.xls | 
EADFont_UserName.zip | 
ecco_title.bmp | 
EchoCancel_flow.ppt | 
EchoCancel.doc | 
eeprom_scripts.zip | 
effectInterfaceDocs.zip | 
EffectMaker実装希望優先順位.txt | 
Effect会議議事録2006-01-17.txt | 
eigoKO_buglist_113021.zip | 
eigoKO_buglist_120123.zip | 
eigoKO_buglist_120420.zip | 
eigoKO_buglist_120609.zip | 
eigoKO_buglist_120619.zip | 
eigoKO_buglist_120717.zip | 
eigoKO_buglist_120819.zip | 
ELE-C | 
ELE-P | 
ELF_Format.pdf | 
EMAIL_BUG_REPORT_FORM.TXT | 
EME_EUR_010605.xls | 
EME_EUR_020605.xls | 
EME_EUR_030605.xls | 
EME_EUR_060605.xls | 
EME_EUR_070605.xls | 
EME_EUR_080605.xls | 
EME_EUR_090605.xls | 
EME_EUR_100605.xls | 
EME_EUR_130605.xls | 
EME_EUR_140605.xls | 
EME_EUR_150605.xls | 
EME_EUR_160605.xls | 
EME_EUR_170605.xls | 
EME_EUR_200505.xls | 
EME_EUR_200605.xls | 
EME_EUR_210605.xls | 
EME_EUR_220605.xls | 
EME_EUR_230505.xls | 
EME_EUR_230605.xls | 
EME_EUR_240505.xls | 
EME_EUR_250505.xls | 
EME_EUR_260505.xls | 
EME_EUR_300505.xls | 
EME_EUR_310505.xls | 
EME_EUR.xls | 
EME_Trainers.xls | 
en_US_docs.zip | 
ensata_1_4b.zip | 
ensata_1_4c.zip | 
enumsalwaysint.png | 
err.txt | 
error_check.xls | 
error_message.txt | 
errorlog.txt | 
Errors_Solutions1102_1_revised_Robert_B.xls | 
esapi.doc | 
ESP_RevTrainers_revised_0608.xls | 
ESP_RevTrainers.xls | 
ESRB Pertinent Content Chart in Japanese Revised.doc | 
ESRB Pertinent Content Chart New.doc | 
EugeneMail.txt | 
Euro_specialcharacter_21Jun04_JP.xls | 
FACT_Wii Channel Menu_VER1和訳.doc | 
FAKJ_01.zip | 
FAMCOMMARIO.zip | 
firefox認証局登録.JPG | 
FixedIssuesList - DS 1.2 SP3 Debugger Patch 20051213.txt | 
FixedIssuesList - DS 1.2 SP3.txt | 
FixedIssuesList - DS 1.2 SP4.txt | 
FixedIssuesList - DS 2.0 SP1.txt | 
Flow Chart JP 2006-01-29.zip | 
flow_diskupdate_sys1.pdf | 
font_DP_GF060710.xls | 
font_DP.xls | 
font_system.bmp | 
font_test.lzh | 
font.doc | 
for_Wii_manu_pic_PSD.zip | 
frbcopy.cpp | 
frienddata_log.txt | 
FSL_ARM_specific bindings.txt | 
Fwd_ NSTからのWi-Fiに関するミーティング依頼.eml | 
GAME STATION 24 x 36 (1) (1)_1.pdf | 
GamersSummit2005_リリース情報.xls | 
Gamespy支払条件.xls | 
ganbare goemon(SHVC).1.sav | 
ganbare goemon(SHVC).2.sav | 
GC_511H2_1800_A.xml | 
GFCVS.pdf | 
Global Community Pet Game GoPets! - Shell bought_1.pdf | 
GMマネージメント研修キックオフ.pdf | 
GMマネージメント研修期別参加者一覧.pdf | 
ＧＭ研修アンケート.doc | 
GM研修シート(1).xls | 
GoPets.zip | 
gpu_test.zip | 
Guidelin+ErrorList.zip | 
gunstar_title.bmp | 
HBMを中心とした状態遷移図.doc | 
HBMを中心とした状態遷移図060908_2.doc | 
HBMを中心とした状態遷移図060908.doc | 
HBMを中心とした状態遷移図060911.doc | 
Helakles3.sram | 
hero.r3es.txt | 
Hollywood修正履歴.xls | 
homebutton_20060902.txt | 
HomeButtonMenu_Reference.zip | 
HomeButtonMenu_Specification.pdf | 
homeButtonSample.zip | 
HOMEボタンメニューの種類.zip | 
How to make a disc needed to im | 
How to make a disc needed to import a wad file.txt | 
HowtoUseMemory.txt | 
html.arc | 
HTTP_ERROR.xls | 
HttpTest.zip | 
HVC_SHVC_ボタン割り当て.ppt | 
IBM Optical Mouse Patents-JP.pdf | 
Icon-HomeButtonMenu_is_not_available_060901.zip | 
IE証明書登録.JPG | 
ImageMetrics_Japanese.mov | 
init.c | 
InstalledVersionCheck.xls | 
InstancePool.h | 
INTSYS_CRASHREP_ISND.zip | 
INTSYS_CRASHREP_ISND012.zip | 
IS-NITRO開発ツール評価.xls | 
JAAJ_dbg_061017.ddf | 
Japanese Introduction v1.7.ppt | 
JFiler.zip | 
Jp_NOA Lot Check Precheck Issues.doc | 
kage.pdf | 
KAGECHR.BIN | 
KAGEPRG.BIN | 
kankyo.xls | 
Karaktris_1_1_0.zip | 
kemuri.zip | 
kensyu_kadai.txt | 
keybind_MD_0817_.jpg | 
keybind_MD_0817.jpg | 
kikakukaihatsu.xls | 
kirbydance_error.zip | 
klistdp060410.zip | 
KOR_eigo_schedule3.pdf | 
KOR_eigo_schedule5.pdf | 
KOR_mario_schedule3.pdf | 
KOR_mario_schedule5.pdf | 
KOR_nou_schedule3.pdf | 
KOR_nou_schedule5.pdf | 
Korean_localize_schedule.xls | 
Korean_sample.txt | 
KPAD_051011.lzh | 
KPAD_051014.lzh | 
KPAD_051020.lzh | 
KPADSample_051025.lzh | 
KPADSample_051027.lzh | 
KPADSample_051028.lzh | 
KRC運用・管理について11.6ver.pdf | 
ＫＲＣ運用・管理について12.1ver..xls | 
Launch_Title.xls | 
Launch_Title060816.xls | 
Launch_Title060818.xls | 
Launch_Title060822.xls | 
Launch_Title060912.xls | 
Launch_Title060914.xls | 
Launch_Title060923.xls | 
Launch_Title060928_NOE_edit_Oct11.xls | 
Launch_Title061002.xls | 
Launch_Title061006_smc.xls | 
Launch_Title061007 English.xls | 
Launch_Title061007.xls | 
Launch_Title061011.xls | 
Launch_Title061021.xls | 
Launch_Title061023a.xls | 
layout_0527_NOE.zip | 
layout_NOE_0531.zip | 
layout_NOE_0601.zip | 
layout.xls | 
LED-makiwari.xls | 
LED-tennnis.xls | 
left.zip | 
libagbbackup.zip | 
libbackup_draft20060224.zip | 
Licensing_Server_Oper_jp.txt | 
Licensing_Server_Oper.pdf | 
Linker_b7703_engineeringBuild.zip | 
Linker_b82E_engineeringBuild.zip | 
LinkerBuild7703_forLinkerCrash.txt | 
LinkerBuild82E_forLinkerCrash.txt | 
linkerror.JPG | 
LinkErrorLog.txt | 
LiveMove_EULA_jp.doc | 
LiveMoveダウンロード手順.txt | 
LiveMove配布手順書（企画開発部用）.txt | 
load_balance.xls | 
load_balance2.xls | 
load_balance3.xls | 
log.bmp | 
log.txt | 
log061213.txt | 
main.c | 
main.lzh | 
main.patch | 
make_Debug_log_CW4DS2.0Beta2.txt | 
make_log_CW4DS1.2SP3.txt | 
make_log_CW4DS2.0Beta2.txt | 
make-ref.zip | 
Makefile | 
makelcf.html | 
makeo_050520.zip | 
makeromtools.tar.gz | 
makeWad.html | 
manual.zip | 
map.gif | 
maplcf.LZH | 
MARIO BROS.zip | 
mario64_banner101806.zip | 
mario64_banner102406.zip | 
mario64_banner110106.zip | 
MarioVSDK.zip | 
mastereditor.JPG | 
match_lan_061011_1205_log.txt | 
match_lan_061011_1205_main.c | 
match_serverclient_061011_1424_log.txt | 
match_serverclient_061011_1424_main.c | 
MBC5【振動】説明書(1998-11).doc | 
mcs_err.txt | 
mem3011.dpf | 
message_delivery-status.txt | 
MessageEditerTest.zip | 
MessageEditor.zip | 
MessageTag.xls | 
MiddlewareGuideline_for_Wii_060525.zip | 
Mii使用文字.xls | 
ML2Banner_EU.bsf | 
modeling.htm | 
Monitor_Ver説明.txt | 
Monsname.xls | 
motion_0000_fix.zip | 
motto_no-19.11.17.apc | 
motto_no-19.14.58.apc | 
motto_no-19.19.43.apc | 
motto_no-19.22.17.apc | 
MPEG-1.2 AudioLayerIII.doc | 
MPH-credits-manual.txt | 
mpsimple.zip | 
MP通信ガイドラインforWii_061109.zip | 
msgenc.c | 
MT060710_01.gif | 
MT060710_02.gif | 
ＭＴＳデモ説明.doc | 
MysteryGift.doc | 
N64 ROM List.xls | 
N64_E3.zip | 
N64_Super_Mario_64_b.zip | 
N64EmulatorText.zip | 
N64Text.zip | 
N64タイトル.xls | 
name1.h | 
nami_nuki_test_fix.zip | 
nami_nuki_test.lzh | 
Nancy innovative.gif | 
NAND Application Development Kit JP.doc | 
NAND Application Development Kit.doc | 
NAND Application Development May 29 2006.doc | 
NAND Application Development May 29 2006JP.doc | 
NAND application development.doc | 
nand_start_sequence(v.0.1).xls | 
nand.zip | 
NANDCheck使用方法の間違いによる不具合リスト061107.xls | 
NANDCheck使用方法の間違いによる不具合リスト061108.xls | 
NANDPackage-beta060927.zip | 
NANDアプリ開発に関する問題点.doc | 
NAND構造2006-08-26.xls | 
ＮＣＬ社員用連絡室（Ｒ５１０）0421ver.xls | 
ＮＣＬ社員用連絡室（Ｒ５１０）0421ver(企開）.xls | 
NDEV_2_0割り当て一覧.xls | 
NDEV-Firmware-5_0_0-USB_Ether-060719_jp.zip | 
ndev823.log | 
NDEVOutput.txt | 
ＮＤＥＶ各バージョンの概要.xls | 
NDEV日程050725.xls | 
NDEV日程050803.xls | 
NDEV生産.xls | 
NDSカンファレンス2005秋.pdf | 
NDSカンファレンスSpeechOct05Rev3.doc | 
NES_TEXT.zip | 
New_Super_Mario_Bros_Cover_Scan.PDF | 
New_Super_Mario_Bros_Cover.doc | 
NewAccountDetailsPTD1-VC.xls | 
NewAccountDetailsPTD1.xls | 
Newマリオ敵リストＡＬＬ_ver10(最新）.xls | 
Newマリオ敵リストＡＬＬ_ver10(翻訳）.xls | 
Ｎｅｗマリオ韓国語翻訳リスト.zip | 
Nigaoe_me.png | 
ninten_hikaritest.lzh | 
Nintendo Wi-Fi Connection_プログラミングガイドライン_ver.1.0.0.pdf | 
NINTENDO Wi-Fi Connection_プログラミングガイドライン_ver.1.1.1_060131.zip | 
NINTENDO Wi-Fi Connection_プログラミングガイドラインver1.1.1_20060302.zip | 
NINTENDO Wi-Fi Connection_プログラミングガイドラインver1.1.1_20060308.zip | 
NINTENDO Wi-Fi Connection_プログラミングガイドラインver1.1.1_20060310.zip | 
NINTENDO Wi-Fi Connection_企画検討用ガイドライン_060310.zip | 
NINTENDO Wi-Fi Connection_企画検討用ガイドライン_060313.zip | 
NINTENDO Wi-Fi Connection_企画検討用ガイドライン_ver1.1.0_060215-2.zip | 
NINTENDO Wi-Fi Connection_企画検討用ガイドライン_ver1.1.0_060215.zip | 
NINTENDO Wi-Fi Connection_企画検討用ガイドライン_ver1.zip | 
NINTENDO Wi-Fi Connection_開発運用手順書_ver0.1.0_051129.doc | 
Nintendo Wi-Fi Connection212.zip | 
Nintendo Wi-Fi Connection213.zip | 
nintendo_kr_060919暫定版.doc | 
nintendo_kr_1012.doc | 
nintendo_kr_1012.pdf | 
nintendo_logo_e3_2006_060331.zip | 
nintendo_logo_e3_2006_060406.zip | 
nintendo_logo_e3_2006.zip | 
Nintendo_Wi-Fi_Connection_Mes 1.xls | 
Nintendo_Wi-Fi_Connection_MessageList_050210.xls | 
Nintendo_Wi-Fi_Connection_MessageList_060210-2.zip | 
Nintendo_Wi-Fi_Connection_MessageList_060210.xls | 
Nintendo_Wi-Fi_Connection_MessageList_ForConfigulation.xls | 
Nintendo_Wi-Fi_Connection_MessageList_ForTranslation_060216.xls | 
Nintendo_WiFi_Connection_MessageList_Ver110_060531.zip | 
Nintendo_WiFi_Connection_MessageList_Ver114_061204.xls | 
Nintendo_WiFi_Connection_MessageList_Ver114_061206.xls | 
Nintendo_WiFi_Connection_NITRO-DWC_ProgrammingManual_Download_Ver090_060531.zip | 
Nintendo_WiFi_Connection_NITRO-DWC_ProgrammingManual_Ranking_Ver100_060531.zip | 
Nintendo_WiFi_Connection_NITRO-DWC_ProgrammingManual_Ranking_Ver100.zip | 
Nintendo_WiFi_Connection_Overview_Ver018.pdf | 
Nintendo_WiFi_Connection_Overview_Ver020.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver120_060531.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver120_060609.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver130_060704.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver130_060706.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver130_060714_2.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver130_060714.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Ver131_061113.zip | 
Nintendo_WiFi_Connection_ProgrammingGuideline_Wii.zip | 
Nintendo_World_2006バージョン制作ガイドライン(任天堂タイトル向け)_Ver.1.0_061020.doc | 
Nintendo_World-061024.zip | 
nintendo_world2006.pdf | 
Nintendo_World企画開発部.xls | 
Nintendo_World企画開発部(変更）.xls | 
Nintendo_World企画開発部(追加）.xls | 
NintendoWare2006_12_26版３Ｄ関連試用レポート.txt | 
NintendoWare３／６ver協議用情報.txt | 
nintenpo.ddo.jp.der | 
nintenpo.nintendo.co.jp.der | 
NitroCrypt-1_0rc2-050106.zip | 
NitroDWC_to_RVL_2.pdf | 
NitroDWC-1[1].0pr2-050930-2223-private.zip | 
NitroMiddleware-libPEDM-alpha-061013.zip | 
NitroSDK-WXC-050922.zip | 
NitroSDK-WXC-051011.zip | 
NitroSDK／優先通信.mht | 
nitroSoundMaker_Fig3_8.JPG | 
NNGCツール060224.xls | 
NNGC基本日程表060418.xls | 
NNGC開発ツール　会議メモVer.2.doc | 
No_touch_Debug_061014.xls | 
No_touch_Debug.xls | 
NOA Lot Check Precheck Issues_1.doc | 
NOA LOT CHECK.doc | 
NOA VC Launch-Feb Release Schedule.xls | 
NOA VC Release Schedule 2007 112106.xls | 
NOA VC Release Schedule 2007 112906.xls | 
NOA VC Release Schedule 2007 121306.xls | 
NOAからのメール原文.txt | 
NOAローカライゼーションのNCL訪問時打合せ希望について.eml | 
NOA用ソフト開発状況_050823.xls | 
NOA用ソフト開発状況_050824_01.xls | 
NOA用ソフト開発状況_050824.xls | 
NOA用ソフト開発状況_051024.xls | 
NOA用ソフト開発状況051128.xls | 
NOA用ソフト開発状況060327.xls | 
NOE_Localization_12Oct06.xls | 
NOE_Localization_26Oct06.xls | 
NOE_TS_04.doc | 
NOE用ソフト開発状況060519.xls | 
NOE用ソフト開発状況0611.xls | 
NOKmoji.doc | 
ＮＯＫ業務委託連絡書（企画開発）.doc | 
ＮＯＫ業務委託連絡書（環境制作）.doc | 
nou_tore_shuusei20061018.doc | 
nou_tore_shuusei20061024.doc | 
NSTからのWi-Fiに関するミーティング依頼.eml | 
NSTとNintendoWare絡みのミーティング.eml | 
NTR_ryouri_buglist0607.xls | 
NTRMEM.exe | 
NTRMEM103.EXE | 
nuki_situmon.lzh | 
nukitest_fix.rmdl | 
nukitest_setumei.zip | 
nukitest.lzh | 
NW4R3DEditor.jpg | 
nware_S20051107.doc | 
NWWiiタイトルリスト技術確認用.xls | 
NW説明員・企画開発部.xls | 
Ocarina_epilepsycheck.xls | 
OdemError.jpg | 
OnAccessScanLog.txt | 
Online RCF Reporting _ Results from 11_18_2006 to 12_1_2006.eml | 
Online RCF Reporting _ Results from 12_1_2006 to 12_7_2006.eml | 
online_QA.xls | 
online_QA回答.xls | 
Opera Component - File and installation - 0.77.doc | 
opera.ini | 
opera.zip | 
Opera060801議事録.txt | 
Opera060803電話会議.txt | 
Opera060822議事録.txt | 
Opera060829議事録.txt | 
Opera060905議事録.txt | 
Opera060912議事録.txt | 
Opera060926議事録.txt | 
Opera061010議事録.txt | 
operaskin.zip | 
ot_kpad.h | 
Output.pdf | 
ParentalControlAll.jp.doc | 
particle.zip | 
passby050627.doc | 
passby050627.zip | 
PcmCache.txt | 
PDM経営会議上程資料09252006-1.doc | 
Pearl.zip | 
pedometer.srl | 
Pegi Ratings_update_September_25th_2006.xls | 
PERIPHERAL_DEVICES.xls | 
PET商品ラインナップ.pdf | 
PG1_wii.xls | 
PG2_wii.xls | 
PG4_wii_re.xls | 
PkdstaffList_NOE_060703.xls | 
PKMNEM_FR_0523.zip | 
PKMNEM_FR_0524.zip | 
PKMNEM_FR_0525.zip | 
PKMNEM_FR_0527.zip | 
PKMNEM_FR_0530.zip | 
PKMNEM_FR_0531.zip | 
PKMNEM_FR_0601.zip | 
PKMNEM_FR_0602.zip | 
PKMNEM_FR_0603.zip | 
PKMNEM_FR_0606.zip | 
PKMNEM_FR_0607.zip | 
PKMNEM_FR_0608.zip | 
PKMNEM_FR_0609.zip | 
PKMNEM_FR_0610.zip | 
PKMNEM_FR_0613.zip | 
PKMNEM_FR_0614.zip | 
PKMNEM_FR_0615.zip | 
PKMNEM_FR_0616.zip | 
PKMNEM_FR_0617.zip | 
PKMNEM_FR_0620.zip | 
PKMNEM_FR_0621.zip | 
PKMNEM_FR_0622.zip | 
PKMNEM_FR_0623.zip | 
PKMNEM_FR_0627.zip | 
PKMNEM_FR_0628.zip | 
PKMNEM_GE_0523.zip | 
PKMNEM_GE_0524.zip | 
PKMNEM_GE_0525.zip | 
PKMNEM_GE_0527.zip | 
PKMNEM_GE_0530.zip | 
PKMNEM_GE_0531.zip | 
PKMNEM_GE_0601.zip | 
PKMNEM_GE_0602.zip | 
PKMNEM_GE_0603.zip | 
PKMNEM_GE_0606.zip | 
PKMNEM_GE_0607.zip | 
PKMNEM_GE_0608.zip | 
PKMNEM_GE_0609.zip | 
PKMNEM_GE_0610.zip | 
PKMNEM_GE_0613.zip | 
PKMNEM_GE_0614.zip | 
PKMNEM_GE_0615.zip | 
PKMNEM_GE_0616.zip | 
PKMNEM_GE_0617.zip | 
PKMNEM_GE_0620.zip | 
PKMNEM_GE_0621.zip | 
PKMNEM_GE_0622.zip | 
PKMNEM_GE_0623.zip | 
PKMNEM_GE_0624.zip | 
PKMNEM_GE_0627.zip | 
PKMNEM_GE_0628.zip | 
PKMNEM_GE_0629.zip | 
PKMNEM_GE_0630.zip | 
PKMNEM_GE_0701.zip | 
PKMNEM_GE_0704.zip | 
PKMNEM_GE_0706.zip | 
PKMNEM_IT_0523.zip | 
PKMNEM_IT_0524.zip | 
PKMNEM_IT_0525.zip | 
PKMNEM_IT_0527.zip | 
PKMNEM_IT_0530.zip | 
PKMNEM_IT_0531.zip | 
PKMNEM_IT_0601.zip | 
PKMNEM_IT_0602.zip | 
PKMNEM_IT_0603.zip | 
PKMNEM_IT_0606.zip | 
PKMNEM_IT_0607.zip | 
PKMNEM_IT_0608.zip | 
PKMNEM_IT_0609.zip | 
PKMNEM_IT_0610.zip | 
PKMNEM_IT_0613.zip | 
PKMNEM_IT_0614.zip | 
PKMNEM_IT_0615.zip | 
PKMNEM_IT_0616.zip | 
PKMNEM_IT_0617.zip | 
PKMNEM_IT_0620.zip | 
PKMNEM_IT_0621.zip | 
PKMNEM_IT_0622.zip | 
PKMNEM_IT_0623.zip | 
PKMNEM_IT_0624.zip | 
PKMNEM_IT_0627.zip | 
PKMNEM_IT_0628.zip | 
PKMNEM_IT_0629.zip | 
PKMNEM_IT_0630.zip | 
PKMNEM_IT_0701.zip | 
PKMNEM_SP_0523.zip | 
PKMNEM_SP_0524.zip | 
PKMNEM_SP_0525.zip | 
PKMNEM_SP_0527.zip | 
PKMNEM_SP_0530.zip | 
PKMNEM_SP_0531.zip | 
PKMNEM_SP_0601.zip | 
PKMNEM_SP_0602.zip | 
PKMNEM_SP_0603.zip | 
PKMNEM_SP_0606.zip | 
PKMNEM_SP_0607.zip | 
PKMNEM_SP_0608.zip | 
PKMNEM_SP_0609.zip | 
PKMNEM_SP_0610.zip | 
PKMNEM_SP_0613.zip | 
PKMNEM_SP_0614.zip | 
PKMNEM_SP_0615.zip | 
PKMNEM_SP_0616.zip | 
PKMNEM_SP_0617.zip | 
PKMNEM_SP_0620.zip | 
PKMNEM_SP_0621.zip | 
PKMNEM_SP_0622.zip | 
PKMNEM_SP_0623.zip | 
PKMNEM_SP_0624.zip | 
PKMNEM_SP_0628.zip | 
PKMNEM_SP_0629.zip | 
PKMNEM_SPnames_0607.zip | 
PKMNNEM_SP_0627.zip | 
PKNNEM_FR_0624.zip | 
poke-doc.txt | 
Pokemon Emerald.doc | 
Ports platforms.gif | 
Preview_GuideLine.pdf | 
ProgrammingGuideline.pdf | 
Project Munchkin - Nintendo Wi-Fi 2006-06-20_jp.ppt | 
pruefergebnisse_1.xls | 
q_20060706.txt | 
q_20060908.zip | 
q_20061115.zip | 
QandA20060323.txt | 
Qestion from Ubisoft.doc | 
QFC_microphone.txt | 
Question.txt | 
QuickSave.doc | 
rakubiki-12.20.03.apc | 
rakubiki-12.21.30.apc | 
rakubiki-12.24.13.apc | 
rakubiki-12.25.56.apc | 
rakubiki-13.26.10.apc | 
rakubiki.txt | 
rare.gif | 
Re_ [REVO_VirtualConsole_NOA_00046] Re_ VC Launch Titles(PAL)_NOA Report (11_28).eml | 
Re_ ＤＰ発売に関して(さらに添付ファイルを含むらしい).eml | 
Re_ NSTからのWi-Fiに関するミーティング依頼.eml | 
Re_ NSTからのWi-Fiに関するミーティング依頼2.eml | 
Re_ VoiceChatSDKに関する要望と質問について.eml | 
Re_ VoiceChatSDKに関する要望と質問について(2).eml | 
Re_ Wii （欧州）について.eml | 
Re_ ツールの優先出荷先.eml | 
Re_ ハンタ－ズ Wifi 状況の件.eml | 
Re_ ボイスチャット　今後の進め方の相談.eml | 
Re_ ボイスチャット　今後の進め方の相談(2).eml | 
Re_ ボイスチャット　今後の進め方の相談(3).eml | 
Re_ メトロイドプライムハンターの件.eml | 
RE_ 英国ゲーム関係通商使節団の件(さらに添付ファイルを含むらしい).eml | 
re.txt | 
Readme_en_Ver06.txt | 
Readme_en.txt | 
Readme_jp_Ver06.txt | 
Readme_jp.txt | 
README_SDK3_0_check_20060202.zip | 
readme-homebuttonLib_060913_en.txt | 
readme-homebuttonLib_060913.txt | 
Readme-NitroMiddleware-libVCT-1_0_0-060516.txt | 
readme-RVL_SDK-2_2-patch_jp.txt | 
readme.txt | 
Readme.txt | 
README.txt | 
readme1st.txt | 
ReadmeENG.txt | 
ReadmeJP.txt | 
recommend.html | 
ReleaseNote_jp.html | 
ReleaseNotes-1.1.zip | 
ReleaseNotes-1.2.zip | 
rendermode.txt | 
rendermodeHVC.txt | 
report_20060922.zip | 
report_20061124.txt | 
report.doc | 
report.zip | 
Request from Developer(さらに添付ファイルを含むらしい).eml | 
request_060916.txt | 
requestedschedule.xls | 
resume.zip | 
Revolution_controller_hardware_overview-j.pdf | 
Revolution_controller_hardware_overview.zip | 
Revolution_controller_ver_3_setup-j.pdf | 
Revolution_question-0112.xls | 
REVOLUTIONネットワークサポートページ.htm | 
Revoプレゼンセカンド用・2005年10月21日.ppt | 
REVネットワーク進捗報告会(060911).ppt | 
REVネットワーク進捗報告会(061018).ppt | 
REVネットワーク開発の進め方.ppt | 
REVネットワーク開発の進め方(060206).ppt | 
REVネットワーク開発の進め方(060207).ppt | 
REV必要作業一覧060417.xls | 
REV必要作業一覧表(060124 田原).xls | 
REV必要作業一覧表(060124)_島田.xls | 
REV必要作業一覧表(060124).xls | 
REV必要作業一覧表(060126環境制作).xls | 
REV必要作業一覧表(機能別)060207-1.xls | 
REV必要作業一覧表(環境制作G060126).xls | 
REV必要作業一覧表(部署別)060203.xls | 
REV必要作業一覧表(部署別)060207_3.xls | 
REV必要作業一覧表(高橋修正版）)060207_3.xls | 
REV必要作業一覧表060130-2.xls | 
REV必要作業一覧表060130-3.xls | 
REV必要作業一覧表060130.xls | 
REV必要作業一覧表060131-1.xls | 
REV必要作業一覧表060131.xls | 
REV必要作業一覧表060201_3.xls | 
REV必要作業一覧表060201.xls | 
REV必要作業一覧表060202_2.xls | 
rfc822-headers.txt | 
RFL_Library_Guidelines_20061214_EAD.doc | 
RFL_Library_Guidelines_20061214_EAD.pdf | 
RFL_Res.zip | 
Rimg9086.jpg | 
robo_s.wmv | 
ROM_info060525.txt | 
ROM一覧060906.xls | 
ＲＯＭ入手状況0828.xls | 
RP Nintendo BPED00 Pokemon Smaragd.pdf | 
RP Nintendo BPEF00 Pkmn Emeraude.pdf | 
RP NINTENDO BPEI00 Pokemon smeraldo.pdf | 
RP Nintendo BPES00 Pokemon Emerald.pdf | 
RP Nintendo FAAP2 Donkey Kong_J.pdf | 
RTYPE1.bmp | 
RVL_Banner_Gudeline_060720.zip | 
RVL_demo_info_E3-2006_SPD5_060501.xls | 
RVL_KPAD_SDK20051122alpha.zip | 
RVL_KPAD_SDK20051124rc1.zip | 
RVL_KPAD_SDK20051125.zip | 
RVL_KPAD_SDK20051128.zip | 
RVL_MasterDataCheckSheetJp.htm | 
RVL_MasterEditorForNANDAPP-061106_vc.zip | 
RVL_MasteringTools-beta-060706_jp.ZIP | 
RVL_MasteringTools-E3-RC1-060410.zip | 
RVL_MasteringTools-E3-RC2-060410.zip | 
RVL_MasteringTools-E3-RC3-060410.zip | 
RVL_NADK-060808.zip | 
RVL_SDK-2_2-060907_jp_RC1_diff.zip | 
RVL_SO_SDK-060629.zip | 
RVL_VC_CheckList061006.xls | 
RVL_VC_CheckList061010.xls | 
RVL_VC_CheckList061011_en.xls | 
RVL_VC_CheckList061011.xls | 
RVL_VC_CheckList061019nakai.xls | 
RVL_VC_CheckList061020.xls | 
RVL_VC_CheckList061023.xls | 
RVL_VC_CheckList061024_en.xls | 
RVL_VC_CheckList061024.xls | 
RVL_VC_CheckList061024a_en.xls | 
RVL_VC_CheckList061031_en_1.xls | 
RVL_VC_CheckList061031_jp.xls | 
RVL_VC_Debug_jp_Ver100.doc | 
RVL_VC_Debug_jp_Ver101.doc | 
RVL_VC_Doc060919.zip | 
RVL_VC_Guideline_jp_Ver100.doc | 
RVL_VC_Guideline_jp_Ver101.doc | 
RVL_VC_Guideline_jp_Ver102.doc | 
RVL_VC_Guideline_jp_Ver103.doc | 
RVL_VC_Guideline_jp_Ver104.doc | 
RVL_VC_Guideline_jp_Ver105_評価版_061113.doc | 
RVL_VC_Guideline_jp_Ver106_061118.doc | 
RVL_VC_Overview_jp_Ver100.doc | 
RVL_VC_Overview_jp_Ver101.doc | 
RVL_VC_Overview_jp_Ver102.doc | 
RVL_VC_Overview_jp_Ver103.doc | 
RVL_VC_Specifications_jp_Ver100.doc | 
RVL_VC_Specifications_jp_Ver101.doc | 
RVL_VC_Specifications_jp_Ver102.doc | 
RVL_VC_Specifications_jp_Ver103.doc | 
RVL_VC_Specifications_jp_Ver104.doc | 
RVL_VC_Specifications_jp_Ver105.doc | 
RVL_VC_Specifications_jp_Ver109.doc | 
RVL_VC_Specifications_jp_Ver113_061118.doc | 
RVL_VCEM_FXXJ_JPN_O.arc | 
RVL_VCEM_FXXJ_JPN_O.zip | 
RVL_VCMV_SDK-1_2-VerboseLibs.zip | 
RVL_VCMV_SDK-1_4-061101 Patch1 Readme_en.txt | 
RVL_VCMV_SDK-1_4-061101_patch1.zip | 
RVL_VCMV_SDK-1_4-061101_Patch3.zip | 
RVL_WPAD_SDK20051122alpha.zip | 
RVL_WPAD_SDK20051124rc1.zip | 
RVL_WPAD_SDK20051125.zip | 
RVL-NADK-Nmenu_patch-061102_jp_RC1.zip | 
RVL-VC_JP+US_051222_rev.xls | 
RVL3連ボタンアンケート結果.xls | 
RVLFaceLibraryAlpha3_0926.zip | 
RVLコントローラ0728資料.pdf | 
RVLコントローラ送付.mm | 
RVLソフト設定規則.pdf | 
ＲＶＬデバッグ機材必要数.xls | 
RVLネーミング案_2（部署名_提出日）.xls | 
RVLネーミング案（部署名_提出日）.xls | 
RVLネーミング案（集計_0809_1800）.xls | 
RVLネーミング案（集計_0810_1700）.xls | 
RVLプログラミング注意事項検討資料_060529.xls | 
RVLマリオ64_光過敏_060407.pdf | 
RVL用語集 E3 Ver社内（VC担当者専用）用   01版.lzh | 
RVL用語集-E3 Ver社内用 02x版.xls | 
RVL用語集-E3 Ver社内用（VC専用） 02版.lzh | 
RVL用語集-E3 Ver社内用（VC専用） 02版.xls | 
RVL用語集0603xx-E3用.xls | 
RVL開発環境.pdf | 
RVL開発環境調査結果.txt | 
RVT ライティングソフトウェアリリース通知_1.0.0.2_.zip | 
RVT-H_manual_2006_1013.doc | 
rvtwriter1002.ZIP | 
sagyosizisyo061106.xls | 
sample_txt.lzh | 
sample.cpp | 
sample.ddf | 
sample.zip | 
sample1.cpp | 
sample2.cpp | 
SampleViewer_src1226.zip | 
SANYO_512kFLASHコマンド.tif | 
save_banner.pdf | 
save.png | 
Schedule-Machiuke(060425).pdf | 
Schedule-NWC(060428).pdf | 
Schedule-VC(060419v2).pdf | 
ScnRfl.zip | 
screenshot_N64.bmp | 
Screenshot_Tool_20060328.zip | 
Screenshot_Tool_20060329.zip | 
screenshot.lzh | 
scroll_bar_test.jpg | 
SDK30_DS20ipaFile_Compiler-b109.xls | 
SDK30_DS20ipaFile.xls | 
sequence.html | 
Server schedule(10302006).xls | 
sharedコンテンツ一覧_061120.xls | 
Shinseisyo.xls | 
ShinseisyoRevSample.xls | 
ShinseisyoRevSample051128.xls | 
showlist.128.elf | 
showlist.64.elf | 
showversion_RVL.doc | 
showversion.doc | 
SHVC_Game2HBM.jpg | 
SHVC_SOUND_マリクラ試算.xls | 
SHVC-EM-FilterTestSav1.crd | 
SHVC-SC-sram | 
SimCity.sram | 
simple.zip | 
SlowTest.zip | 
Smario64_1a.JPG | 
SMC-BTS概要.ppt | 
SMPTE75%ColorBar_Spec.jpg | 
SMPTE75%ColorBar.jpg | 
sndarc_stream.c | 
sockets_test.zip | 
software_arch_special.pdf | 
software_arch.pdf | 
spatnav_TC.zip | 
spd_network_vision.xls | 
spec_20060926_2.zip | 
spec_20060926_3.zip | 
spec_20060926_4.zip | 
spec_20060926.zip | 
spec.pdf | 
spec.txt | 
spec.zip | 
spec2.pdf | 
Special characters lacking at present.xls | 
Special Characters Others_Examples_JP.rtf | 
spl.zip | 
SPRArchiver.zip | 
ss.lzh | 
ST2-modify1.lzh | 
StaffCredit_061010.xls | 
StaffCredit_061010①.xls | 
StaffCredit060929.xls | 
StaffCredit061031.xls | 
StaffCredit追加061030.xls | 
staffrol_0705noa.xls | 
start.png | 
startup.html | 
Stationery_for_SDK3.0.zip | 
std_skin.zip | 
steperr_prj.LZH | 
steperr.lzh | 
strap_060908.zip | 
strap_640x480_jp.bmp | 
strap_640x480_us.bmp | 
strap.doc | 
suspend.png | 
swfdump.ZIP | 
swing20060118.tif | 
System Menu Development.doc | 
System menu における NAND 空き容量チェック.doc | 
System Update Procedure.doc | 
System Update.doc | 
TCB.bmp | 
TDEV+CW+DVDETH.txt | 
TDEVでのデバッグ方法.txt | 
Test environment.jpg | 
test_06_kuroda_compress.mb | 
test_dev-01238.png | 
test_opt.zip | 
test.lzh | 
test.txt | 
test.zip | 
testcube.imd | 
testD6.lzh | 
TestData2.lzh | 
testfont.html | 
testProg.zip | 
tetrisrank060111.zip | 
TFT-051005企開出展候補.xls | 
TGS2005基調講演Outline.doc | 
TGS2005基調講演Outline(2).doc | 
title.met | 
Tony Hawk changes.doc | 
Tony Hawk Downhill Jamに関するアクティビジョンからのリクエスト.doc | 
Tony_Hawk_Downhill_Jam.doc | 
TouchGenerations.pdf | 
Turbografx schedule 1128.xls | 
Turbografx schedule1213.xls | 
tuusin.bmp | 
Ufo4Nintendo.xls | 
ufoSecSize.lst | 
UIツールver3.1E配付数量打合せ_20060413.xls | 
UI会議アンケート050614.doc | 
UPS Country Regulations.url | 
US Manual issues 111206.xls | 
US12042006UploadReport.pdf | 
userManual.pdf | 
USG-KORmanual0921.doc | 
USG-KORmanual0925(修正済み).doc | 
USG-KORmanual0929.doc | 
USGManual_Change.doc | 
ＵＳＧ韓国発売スケジュール0920-1.xls | 
ＵＳＧ韓国発売スケジュール1024.xls | 
uvtest_20060314.zip | 
uvtest.lzh | 
vad.c | 
VC 2 Bug Log 1204.xls | 
VC 2 Bug Log 1205.xls | 
VC 2 Bug Log 1208_NCL.xls | 
VC 2 Bug Log 1208.xls | 
VC 2 Bug Log 1212_IS.xls | 
VC 2 Bug Log 1212.xls | 
VC 2 Bug Log 1213.xls | 
VC 2 Bug Log 1218.xls | 
VC 2 Bug Log 1219.xls | 
VC 2 Bug Log 1220.xls | 
VC 2 PAL Bug Log 1212.xls | 
VC Launch Bug Log PAL 1127_IS.xls | 
VC Launch Bug Log PAL 1127.xls | 
VC Launch Bug Log_1031_NCL記入.xls | 
VC Launch Bug Log_1101_from_NCL.xls | 
VC Launch Bug Log_1102_from_NCL.xls | 
VC Launch Bug Log_1102.xls | 
VC Launch Bug Log_1103_from_NCL.xls | 
VC Launch Bug Log_1106_fromNCL.xls | 
VC Launch Bug Log_1107_fromNCL.xls | 
VC Launch Bug Log_1107.xls | 
VC Launch Bug Log_1108_fromNCL.xls | 
VC Launch Bug Log_1109.xls | 
VC Launch Bug Log_1110_fromNCL.xls | 
VC Launch Bug Log_1110.xls | 
VC Launch Bug Log_1113_NCL_comments.xls | 
VC Launch Bug Log_1114_fromNCL.xls | 
VC Launch Bug Log_1114_NCL_IS.xls | 
VC Launch Bug Log_1114.xls | 
VC Launch Bug Log_1115.xls | 
VC Launch Bug Log_1116.xls | 
VC Launch PAL Bug Log 1129.xls | 
VC Launch PAL Bug Log 1130-NCL.xls | 
VC Launch PAL Bug Log 1130-NCL2.xls | 
VC Launch PAL Bug Log 1130.xls | 
VC Localization.eml | 
VC Progress Chart1.4.xls | 
VC TV Problems.xls | 
VC_2_games_US_SpecSheet_061212.zip | 
VC_Contents_Progress060816.pdf | 
vc_debugfiles_20061114.xls | 
vc_debugfiles_20061115.xls | 
vc_debugfiles_20061117.xls | 
vc_debugfiles_20061121.xls | 
vc_debugfiles_for_NOA20061208.xls | 
vc_debugfiles_for_NOA20061212.xls | 
vc_debugfiles_for_NOA20061213.xls | 
vc_debugfiles_for_NOA20061219.xls | 
VC_DonkeyKong_lotcheck.zip | 
vc_euro_debugfiles_20061127_2.xls | 
vc_euro_debugfiles_20061127_3.xls | 
vc_euro_debugfiles_20061127_4.xls | 
vc_euro_debugfiles_20061127_5.xls | 
vc_euro_debugfiles_20061128_2.xls | 
vc_euro_debugfiles_20061128.xls | 
vc_euro_debugfiles_20061129.xls | 
vc_euro_debugfiles_20061201.xls | 
vc_euro_debugfiles_20061206.xls | 
vc_euro_debugfiles_20061207_2.xls | 
vc_euro_debugfiles_20061207.xls | 
vc_euro_debugfiles_20061215.xls | 
vc_euro_debugfiles_20061218_2.xls | 
vc_euro_debugfiles_20061220.xls | 
VC_HVC_guide_0908.zip | 
VC_info.zip | 
VC_manual_061104.xls | 
VC_manual_061122a.xls | 
VC_Mario64_NOE_1111.zip | 
VC_MD_guide_0908.zip | 
VC_N64_guide_0908.zip | 
VC_NCL.part2.rar | 
VC_NCL.part3.rar | 
VC_NOE_1130.zip | 
VC_NOE_1206.zip | 
VC_NOEManuals_1128.zip | 
VC_PCE_guide_0908.zip | 
VC_save_banner_リリース版.xls | 
VC_SHVC_guide_0908.zip | 
VC_Title_code1214返信.xls | 
VC_Title_List.xls | 
VC_Title_List061028a.xls | 
VC_Title_List061101.xls | 
VC_Title_List061107a.xls | 
VC_Title_List061108.xls | 
VC_Title_List061113a.zip | 
VC_Title_List061114.xls | 
VC_Title_List061114.zip | 
VC_Title_List061114a_IS.xls | 
VC_Title_List061114a.xls | 
VC_Title_List061115a.xls | 
VC_Title_List061117b English.xls | 
VC_Title_List061118.xls | 
VC_Title_List061212.xls | 
VC_Title_List061212.zip | 
VC_Title_List061214IS.xls | 
VC_Title_List061218.xls | 
VC_Title_List061219IS.xls | 
VC_Title_ListEnglish.xls | 
VC_Work_Flow061117.xls | 
VC_タイトルリスト061127.xls | 
VC-contents-detail060822.pdf | 
VC-contents060822.pdf | 
VC-contents060913.pdf | 
VC-Schedule061118.pdf | 
vc.txt | 
vc64_banner.zip | 
VCAWスケジュール0607.pdf | 
VCAWスケジュール0719.pdf | 
VCAWスケジュール0720.pdf | 
VCAW日割り0607_全体.pdf | 
VCAW日割り0719_全体.pdf | 
VCAW日割り0724_全体.pdf | 
VCAW日割り0821_全体.pdf | 
VCAW日割り0906_全体.pdf | 
VCAW日割り1115_全体.pdf | 
vcm64_start_sequence(v.0.2).xls | 
vcm64_start_sequence(v.0.3).xls | 
vcm64_start_sequence(v.0.4).xls | 
vcmv_skin.zip | 
vcmv_test.c | 
vcmv_test.cpp | 
vcmv.h | 
VCMV.zip | 
vcmvlib.zip | 
VcmvTest.mcp | 
VCSchedule_0906.xls | 
VCWGimage0703.pdf | 
VCアートワーク用提出データ_20060718.pdf | 
VCアートワーク用貸出サンプル20060718.pdf | 
VCオーバービュー060918.doc | 
VCガイドライン.doc | 
VCガイドライン060810.doc | 
VCガイドライン060814.doc | 
VCガイドライン060815.doc | 
VCガイドライン060816.doc | 
VCガイドライン060817.doc | 
VCガイドライン060818.doc | 
VCガイドライン060822.doc | 
VCガイドライン060824.doc | 
VCガイドライン060829.doc | 
VCガイドライン060830.doc | 
VCガイドライン060831.doc | 
VCガイドライン060901.doc | 
VCガイドライン060913.doc | 
VCガイドライン060914.doc | 
VCガイドライン060915.doc | 
VCガイドライン060918.doc | 
VCコントローラ割り当て手順060913.doc | 
VCコントローラ割り当て手順060914.doc | 
VCコントローラ割り当て手順060915.doc | 
VCスケジュール20060919A.xls | 
VCスケジュール20060921.xls | 
VCタイトル属性20060807.xls | 
VCタイトル属性20060818.xls | 
VCフロー_re0322.pdf | 
VCフロー_re0322(2).pdf | 
VCフロー_re0411.pdf | 
VCフロー_re0411(2).pdf | 
VCフロー_re0412_2.pdf | 
VCフロー_re0412_2(2).pdf | 
VCフロー_re0412.pdf | 
VCフロー_re0412(2).pdf | 
VCフロー.pdf | 
VCフロー(2).pdf | 
VCマリオ６４：バナーデータ更新.eml | 
VCマリオ６４：バナーとセーブファイルアイコンについて.eml | 
VCリスト060523.txt | 
VCロンチタイトル権利表記060726.xls | 
ＶＣ休日出勤アンケート1208～1215.xls | 
ＶＣ候補タイトル20060522.xls | 
ＶＣ候補タイトル20060524.xls | 
VC基本スケジュール.pdf | 
VC状態遷移図.doc | 
VC状態遷移図060713.xls | 
VC状態遷移図060721.xls | 
VC用印刷物サンプル収集070306.xls | 
ＶＣ画面遷移フロー解説.doc | 
ＶＣ画面遷移フロー解説と作業.doc | 
VC見積り1.jpg | 
VC見積り2.jpg | 
Ｖｅｒ１．２（新）のログ.txt | 
Ｖｅｒ１．２（旧）のログ.txt | 
Virtual Console_NOE_1129.zip | 
Virtual Console_RVTUnit | 
Virtual Console_RVTUnit.zip | 
Virtual Console_RVTUnit/RTV_2_Reader_1.jpg | 
Virtual Console_RVTUnit/RTV_2_Reader_2.jpg | 
Virtual Console_RVTUnit/Thumbs.db | 
VirtualConsolArchitect20060620.ppt | 
VirtualConsole20060509.txt | 
VirtualConsole20060529.txt | 
VirtualConsoleArchitect20060711.ppt | 
VirtualConsoleContoroller案.ppt | 
VirtualConsoleFileFormat.xls | 
VirtualConsoleFileFormat060923.xls | 
VirtualConsoleFileFormat060925.xls | 
VirtualConsoleFileFormat060928.xls | 
VirtualConsoleFileFormat060929.xls | 
VirtualConsoleFileFormat061211.xls | 
VirtualConsoleSchedule.xls | 
VirtualConsoleSchedule20060424.xls | 
VirtualConsoleScheduleForManual.txt | 
vol31案.txt | 
Vsense.pdf | 
VX_test.xls | 
WAD Format.doc | 
wadscript | 
wadscriptD | 
warning.jpg | 
we.gif | 
WhitePaper_jp.pdf | 
Ｗｉ－Ｆｉ connection 対応ソフト運用案マスター9_30_1.ppt | 
WI-Fi_BattleTower060130.doc | 
Wi-Fi_Error_Code(050926).xls | 
Wi-Fi_Error_Code(051201).xls | 
Wi-Fi_Error_Code(051201).xls 2.xls | 
Wi-Fi_Error_Code(051202).xls | 
Wi-Fi用語集(02版).xls | 
Wi-Fi用語集(03版).xls | 
Wi-Fi用語集(Ver00)0727.xls | 
Wide.xls | 
WiFi_Connection_userinfo.zip | 
WiFi.zip | 
WiFiPause.zip | 
wifiに関する連絡フロー.xls | 
WiFi専用ロットチェック説明資料003_050926.zip | 
Wii manual-Virtual Console 061007.pdf | 
Wii_Conference_20060829.zip | 
Wii_Conference_Guideline.jp.txt | 
Wii_Conference_Guideline.us.t 1 | 
Wii_Conference_Guideline.us.t 2 | 
Wii_Conference_Guideline.us.txt | 
Wii_demo_info_WP-2006_060901.xls | 
Wii_demo_info_WP-2006_060905.xls | 
Wii_Guidelines_v0_98.pdf | 
Wii_Guidelines_v0.94.pdf | 
Wii_Guidelines_v0.95.pdf | 
Wii_Guidelines_v0.96.pdf | 
Wii_Guidelines_v0.97.pdf | 
Wii_Guidelines_v0.98.pdf | 
Wii_Guidelines_v1.00.pdf | 
Wii_MessageList_0.10.xls | 
Wii_MessageList_0.11.xls | 
Wii_MessageList_0.12.xls | 
Wii_MessageList_0.13.xls | 
Wii_MessageList_0.131.xls | 
Wii_MessageList_0.131（修正入）.xls | 
Wii_MessageList_0.14b_en.xls | 
Wii_MessageList_0.14b_eur.xls | 
Wii_MessageList_0.14c_en.xls | 
Wii_MessageList_0.14c_en.zip | 
Wii_MessageList_0.14c_eur.xls | 
Wii_MessageList_0.15_en.xls | 
Wii_MessageList_0.15_eur_edit_NOE_1207.xls | 
Wii_MessageList_0.15_eur.xls | 
Wii_MessageList_0.15_eur.zip | 
Wii_MessageList_0.15a_eur.xls | 
Wii_MessageList_v0_15.xls | 
Wii_MessageList.xls | 
wii_nintendo_logo_e3_2006_060428.zip | 
Wii_Nintendo_WiFi_Connection_Docs_061107.zip | 
Wii_Nintendo_WiFi_Connection_Docs_061109.zip | 
Wii_Nintendo_WiFi_Connection_Docs_061109b.zip | 
Wii_Nintendo_WiFi_Connection_Docs_061110.zip | 
Wii_Nintendo_WiFi_Connection_MessageList.xls | 
Wii_ProgrammingGuidelines_V1.01_MessageList_v0.14_2006_1006.zip | 
Wii_ProgrammingGuidelines.zip | 
Wii_shop_message_1012 EDITED version 6.xls | 
wii_shop_message_1024.xls | 
wii_shop_message_1026 EDITED.xls | 
wii_shop_message_1030 EDITED.xls | 
wii_shop_stuff_list.xls | 
Wii_SystemMenu_schedule_2006_0921.pdf | 
Wii_SystemMenu_schedule_2006_1017_1530.pdf | 
Wii_SystemMenu_schedule.pdf | 
Wii_ワイド画面対応.xls | 
Wii-VirtualConsole_Specifications_CheckSheet_J.doc | 
Wii(NAND)-CheckSheet_Description_1_00_J.pdf | 
Wii(NAND)-VirtualConsole_CheckSheet_1_00_J_.doc | 
WiiConnect24オーバービュー_060526.doc | 
WiiPreview_VerList_060908_NOA.xls | 
WiiPreview_VerList_060908_NOE.xls | 
WiiPreview_VerList_060909_NOA.xls | 
WiiPreview_VerList_060909_NOE.xls | 
WiiPreview_VerList_060910_NOA.xls | 
WiiPreview_VerList_060910_NOE.xls | 
WiiPreview_VerList_060911_NOA.xls | 
WiiPreview_VerList_060911_NOE.xls | 
WiiPreview_VerList_060913_NOA.xls | 
WiiPreview_VerList_060913_NOE.xls | 
WiiPrevie構成v1.pdf | 
WiiRemote_Strap.jpg | 
WiiSaveDataBanner.pdf | 
WiiSaveDataGuideline_jp_060919.pdf | 
WiiTitle_PG1.xls | 
WiiTitle_PG2.xls | 
WiiTitle_PG3_0704.xls | 
WiiTitle_PG4.xls | 
WiiWide_TVWide.zip | 
Wiiカンファレンス0609バージョンガイドライン_Ver.0.9_060831.doc | 
Wiiカンファレンス0609バージョンガイドライン(任天堂タイトル向け)_Ver.0.8_060828.doc | 
Wiiカンファレンス0609バージョンガイドライン(任天堂ディスクタイトル向け)_Ver.0.9_060830.doc | 
Wiiショッピングch作業概要.xls | 
Wiiショッピングチャンネル議事録061011.txt | 
Wiiツール関係情報まとめ_060712.xls | 
Wiiネットワーク全体スケジュール(060707).xls | 
Wiiネットワーク全体スケジュール(060818).xls | 
Wiiネットワーク全体スケジュール(060824).xls | 
Wiiプログラミングガイドラインv0.91α.zip | 
Wiiプログラミングガイドラインv0.92α.zip | 
Wiiプログラミングガイドラインv0.93α.zip | 
Wiiプログラミングガイドラインv0.94_.zip | 
Wiiプログラミングガイドラインv0.94.zip | 
Wiiプログラミングガイドラインv0.95.zip | 
Wiiプログラミングガイドラインv0.96.zip | 
Wiiプログラミングガイドラインv0.97.zip | 
Wiiプログラミングガイドラインv0.9α.zip | 
Wiiプログラミングガイドライン検討資料20060626.xls | 
Wiiホームボタンメニューに付いて.doc | 
Wiiリモコンミーティング議事録20060531.txt | 
Wii取説.pdf | 
Wii取説で気づいたこと.txt | 
Wii向け外字リスト_060818.xls | 
Wii日程0925_01.xls | 
Wii本体取説-社内回覧060907.pdf | 
Wii本体取説（準備編 改訂1）.pdf | 
Wii本体取説チェック依頼.pdf | 
Wii本体機能ROM出しスケジュール20061120.pdf | 
Wii本体機能ROM出しスケジュール20061120.xls | 
Wii本体機能応援デバッグ部屋割り.xls | 
Wii本体機能開発スケジュール20061116.pdf | 
Wii機材各種対応リスト_20060817.xls | 
Wii機材各種対応リスト_20060821.xls | 
Wii機材各種対応リスト_20060904.xls | 
Wii用語集-00（社内用）.xls | 
Wii開発環境.xls | 
WlIntr.c | 
Work_Flow.xls | 
Work_Flow060816.xls | 
Work_Flow060822.xls | 
Work_Flow060911.xls | 
Work_Flow061002.xls | 
Work_Flow061007.xls | 
Work_Flow061007Bilingual.xls | 
Work_Flow061011.xls | 
Work_Flow061028 English.xls | 
Work_Flow061028.xls | 
Work_Flow061107.xls | 
Work_Flow061114.xls | 
wpad_tool.elf.eml | 
wpad_toolD.elf.eml | 
www.h | 
XFB.zip | 
Zelda no Densetsu.sram | 
アートワーク.txt | 
アウトラインフォント：試用フォント２つを試した結果.eml | 
アンケート.pdf | 
アンケートシート.xls | 
アンケートメッセージ.doc | 
イベント企画Gamestation Summer conference 2005.doc | 
イベント企画Post Leipzig Tour 2005.doc | 
イベント企画Toys'R'US Meeting 2005.doc | 
エッジマーキング.lzh | 
エメ欧州プリロット用データ一覧.xls | 
エメ欧州プリロット用データ基地.xls | 
エラーサーバ利用手順.doc | 
オシャレ魔女ラブandベリー_1W_061126.pdf | 
カウントダウン.xls | 
カウントダウンUS.xls | 
かなハングル対照表061107.xls | 
キャリアインタビュー(車座)　グループ編成一覧.xls | 
キャリアインタビュー(車座)　グループ編成一覧(7.14ver.).xls | 
キャリアインタビュー(車座)　スケジュール表.xls | 
キャリアインタビューでの質問事項.doc | 
キャリアインタビュー車座の運営メモ.doc | 
キャリアインタビュー面談予定表企画開発部.xls | 
キャリアシート統合(企画開発部第5P).pdf | 
キャリア車座イベントについての報告とお願い.doc | 
キャンペーン：救声主セット.pdf | 
クラシック貸出.xls | 
クラブニンテンドーレポート061203.lzh | 
クラブニンテンドーレポートⅠ.lzh | 
クラブニンテンドーレポートⅡ.lzh | 
グループ別テーマ(6.29).doc | 
グループ別テーマ(組織改革).doc | 
グレード変更推薦書.doc | 
クレーム.pdf | 
ゲームセミナー2006企画書.doc | 
ゲームデータ取扱GL050531改定.doc | 
ゲームデータ取扱ガイドライン060801.doc | 
ゲームリモコン＆クラシックコントローラボタン名称検討.xls | 
ゲーム物内容情報表示規定（案）.doc | 
コピーNewマリオ基本用語（韓国翻訳用)0925翻訳.xls | 
コピーREV必要作業一覧表(060124).xls | 
コピーバグリスト【ＶＣソフトチェック】_開発記入20061108.xls | 
コピー契約社員.xls | 
コピー敵リストＡＬＬ_ver10(翻訳）.xls | 
コントローラUI画面.jpg | 
コントローラスキャン060927a.xls | 
コントローラスキャン060928.xls | 
コントローラスキャン060929.xls | 
コントローラスキャン中井さん案.doc | 
コントローラに関して_3.doc | 
コントローラに関して_3.doc 2.doc | 
コントローラに関して.doc | 
コントローラポート割り当てルール案.doc | 
コントローラポート割り当てルール案060906.doc | 
コントローラボタン比較.xls | 
コントローラ配布数.xls | 
コンプライアンス５～８年.pdf | 
コンプライアンスセミナー5～8年目出席者.xls | 
サウンド.txt | 
サムネールとバナーについて0720.doc | 
サンプル必要数（２００５年１０月１２日版）.xls | 
サンプル必要数（２００５年９月２２日版）.xls | 
シャープ岡田様　講演アジェンダ060119.doc | 
シャープ技術提案会.xls | 
シャープ技術提案会ご案内.pdf | 
ジャンプアルティメットスターズ_1W_061126.pdf | 
スクロールバーについて.txt | 
スターフォックス６４光過敏ビ%_1.xls | 
スペシャリスト職の説明.pdf | 
スマブラ検討.xls | 
セカンドパーティからの受注フロー.pdf | 
ソースリスト表紙.xls | 
ソフトウェア使用許諾条件.pdf | 
ソフト別研修会&全体説明会会スケジュール.xls | 
ソフト品質管理部からの要望051124.doc | 
ソフト品質管理部への要望0504その後.doc | 
ソフト品質管理部要望会議060523.doc | 
ソフト品質管理部要望聞き取り会議061121.doc | 
ソフト資料20060526.xls | 
ダイアログ仕様書v10.pdf | 
ダイアログ仕様書v10.ppt | 
ダイアログ仕様書v11.pdf | 
ダイアログ仕様書v12.pdf | 
ダイアログ仕様書v121.pdf | 
タイトル名20060727.xls | 
タイトル情報詳細.xls | 
チャンネル名称プレゼン資料.pdf | 
チャンネル名称プレゼン資料(2).pdf | 
ディスカッション結果.txt | 
デバッグ参加者.xls | 
トラップリスト(韓国翻訳用)_061005.xls | 
ニンテンドーWi-Fiコネクション_ファーストガイドDS0713.zip | 
ニンテンドーWi-Fiコネクション_ファーストガイドWii0713.zip | 
ニンテンドーWi-Fiコネクション_企画検討用ガイドラインWii1213.zip | 
ネーミングキーワード.xls | 
バーチャルコンソール オーバービュー060825.doc | 
バーチャルコンソールアプリケーションガイド.zip | 
バーチャルコンソールアプリケーションガイド20060721.pdf | 
ハード・ソフト比較表7～10.xls | 
バグリスト【ＶＣソフトチェック】_20060914.xls | 
バグリスト【ＶＣソフトチェック】_20060915.xls | 
バグリスト【ＶＣソフトチェック】_20060926.xls | 
バグリスト【ＶＣソフトチェック】_20061002.xls | 
バグリスト【ＶＣソフトチェック】_20061003.xls | 
バグリスト【ＶＣソフトチェック】_20061005.xls | 
バグリスト【ＶＣソフトチェック】_20061010.xls | 
バグリスト【ＶＣソフトチェック】_20061011.xls | 
バグリスト【ＶＣソフトチェック】_20061012.xls | 
バグリスト【ＶＣソフトチェック】_20061016.xls | 
バグリスト【ＶＣソフトチェック】_20061017.xls | 
バグリスト【ＶＣソフトチェック】_20061018.xls | 
バグリスト【ＶＣソフトチェック】_20061019.xls | 
バグリスト【ＶＣソフトチェック】_20061020.xls | 
バグリスト【ＶＣソフトチェック】_20061023.xls | 
バグリスト【ＶＣソフトチェック】_20061024.xls | 
バグリスト【ＶＣソフトチェック】_20061025.xls | 
バグリスト【ＶＣソフトチェック】_20061026.xls | 
バグリスト【ＶＣソフトチェック】_20061026a.xls | 
バグリスト【ＶＣソフトチェック】_20061027.xls | 
バグリスト【ＶＣソフトチェック】_20061030.xls | 
バグリスト【ＶＣソフトチェック】_20061031.xls | 
バグリスト【ＶＣソフトチェック】_20061101.xls | 
バグリスト【ＶＣソフトチェック】_20061102_2.xls | 
バグリスト【ＶＣソフトチェック】_20061102.xls | 
バグリスト【ＶＣソフトチェック】_20061106.xls | 
バグリスト【ＶＣソフトチェック】_20061107_返信.xls | 
バグリスト【ＶＣソフトチェック】_20061107.xls | 
バグリスト【ＶＣソフトチェック】_20061108.xls | 
バグリスト【ＶＣソフトチェック】_20061109.xls | 
バグリスト【ＶＣソフトチェック】_20061113.xls | 
バグリスト【ＶＣソフトチェック】_20061115.xls | 
バグリスト【ＶＣソフトチェック】_20061120.xls | 
バグリスト【ＶＣソフトチェック】_20061121.xls | 
バグリスト【ＶＣソフトチェック】_20061122.xls | 
バグリスト【ＶＣソフトチェック】_20061122返信.xls | 
バグリスト【ＶＣソフトチェック】_20061123.xls | 
バグリスト【ＶＣソフトチェック】_20061124.xls | 
バグリスト【ＶＣソフトチェック】_20061125.xls | 
バグリスト【ＶＣソフトチェック】_20061127.xls | 
バグリスト【ＶＣソフトチェック】_20061128.xls | 
バグリスト【ＶＣソフトチェック】_20061129.xls | 
バグリスト【ＶＣソフトチェック】_20061130.xls | 
バグリスト【ＶＣソフトチェック】_20061201.xls | 
バグリスト【ＶＣソフトチェック】_20061204_抜粋.xls | 
バグリスト【ＶＣソフトチェック】_20061204.xls | 
バグリスト【ＶＣソフトチェック】_20061205_返信.xls | 
バグリスト【ＶＣソフトチェック】_20061205.xls | 
バグリスト【ＶＣソフトチェック】_20061206.xls | 
バグリスト【ＶＣソフトチェック】_20061207_IS.xls | 
バグリスト【ＶＣソフトチェック】_20061207.xls | 
バグリスト【ＶＣソフトチェック】_20061208.xls | 
バグリスト【ＶＣソフトチェック】_20061212.xls | 
バグリスト【ＶＣソフトチェック】_20061213.xls | 
バグリスト【ＶＣソフトチェック】_20061214.xls | 
バグリスト【ＶＣソフトチェック】_20061215.xls | 
バグリスト【ＶＣソフトチェック】_20061219.xls | 
バグリスト【ＶＣソフトチェック】_20061220.xls | 
バグリスト【ＶＣソフトチェック】_20061221.xls | 
バグリスト【ＶＣソフトチェック】_開発記入20061104.xls | 
バグリスト【ＶＣソフトチェック】.xls | 
バグリスト【ＶＣソフトチェック】060913.xls | 
バグリスト【ＶＣソフトチェック】20060915.xls | 
バグリスト【ＶＣソフトチェック】20060921.xls | 
バグリスト【ＶＣソフトチェック】20060922.xls | 
バグリスト【ＶＣソフトチェック】20060928.xls | 
バグリスト【ＶＣマリオ64】20060927.xls | 
バグリスト060821.xls | 
バグリスト060821追記.xls | 
バグリスト20061026【ＶＣマリオ64】ＮＳＴ.xls | 
バグリスト20061027【ＶＣマリオ64】ＮＳＴ.xls | 
バグリスト20061030【ＶＣマリオ64】NST.xls | 
バグリスト20061108【VCマリオ6 1.xls | 
バグリスト20061114【VCマリオ６４】.xls | 
バックアップデータメモリマップ例.txt | 
バナーについて_060815.zip | 
ハングル語入力システムのフローチャート.doc | 
ハンタ－ズ Wifi 状況の件.eml | 
ひな型.xls | 
ファミコン-P.lzh | 
フィールドテスト勤怠.doc | 
フランクフルトオフィス拡張の提案（短縮版）_27Mar2006.ppt | 
プログラム問題3.zip | 
ポール君ToDo061006_2.txt | 
ポール君ToDo061006.txt | 
ポケモンDP応援リスト.xls | 
ポケモンダンジョンQ&A.doc | 
ポケモンプログラム改善のためのアドバイス.doc | 
ボタンアサイン原案.xls | 
マリオ６４光過敏ビデオ追加分_06.xls | 
マリオカート６４光過敏ビデオ_06.xls | 
マリオ操作一覧(韓国翻訳用)_061005.xls | 
マリパ８miiサンプル.jpg | 
メッセージローカライズ.xls | 
メニュー画面案_GENE.tga | 
メニュー画面案_GENE(2).tga | 
メニュー画面案_PC.tga | 
メニュー画面案_PC(2).tga | 
もっと脳_jp.txt | 
ライセンシータイトル.gif | 
ライセンシー確認済タイトル.xls | 
リモートアクセス案内・申請書.doc | 
リモコンの扱い.xls | 
リモコン操作不能検証.txt | 
リモコン操作名称.txt | 
レイアウト2006south.pdf | 
レヴォ本体機能会議.txt | 
レボリューション（NintendoWare）描画系機能確認-NW.txt | 
レボリューション（NintendoWare）描画系機能確認.txt | 
レボ本体搭載機能検討～第1回.pdf | 
ローカライズまとめ060825.xls | 
ローンチタイトル_リスト_20060414.xls | 
ローンチタイトル.xls | 
ワイドテレビの画面モードの調査.xls | 
一次面接評価票(050707).xls | 
上付き文字使用例.xls | 
上司用career06(第5フ゜ロダクションG).atc | 
上司用マニュアル2007年版.pdf | 
上司用記入説明.pdf | 
不具合報告 20060828.xls | 
不具合報告 20060829.xls | 
不具合報告 20060830.xls | 
不具合報告 20060831.xls | 
不具合報告 20060901.xls | 
不具合報告 20060904.xls | 
不具合報告 2006822～2006825.xls | 
井上萌_TGS2006.doc | 
京都RC運用管理について.pdf | 
人員計画インタビュー内容.doc | 
人材開発プロジェクト_ＧＭ各位_.pdf | 
人材開発プロジェクト_管理職各位_.pdf | 
人材開発プロジェクトガイダンス..pdf | 
今回評価のスケジュール.pdf | 
任天ポーＳＴＥＰ２概算見積り.zip | 
任天ポーサーバ環境設定.ppt | 
任天堂タイトル2005.xls | 
任天堂研修内容＆DPプログラム方針について-4版.doc | 
任天堂研修内容＆DPプログラム方針について.doc | 
任天堂社内ライブラリについて.doc | 
企画検討用ガイドライン_060411.zip | 
企画開発待ち受け案.txt | 
企画開発本部.xls | 
企画開発本部出席申込.xls | 
企画開発部.xls | 
企画開発部DSカンファレンス秋出席者.xls | 
企画開発部会社説明会参加者１.pdf | 
企画開発部会社説明会参加者２.pdf | 
企画開発部会社説明会参加者３.pdf | 
企画開発部出席申込.xls | 
企画開発部第5ＰG.xls | 
企開ポケモンDP応援リスト12.12ver.xls | 
企開総開BT問答集20060320.pdf | 
伊藤明日香_TGS2006.doc | 
会社説明会　企画開発部.pdf | 
似顔絵チャンネルNAND構造.xls | 
似顔絵ライブラリオーバービュー.txt | 
似顔絵ライブラリオーバービュー061215.txt | 
似顔絵問題.txt | 
作業項目一覧表(060127).lzh | 
修正0829.xls | 
光回線図面11.7.pdf | 
光過敏_ゼルダオカリナ.pdf | 
内部統制強化プロジェクト.pdf | 
出席申込.xls | 
出席者リスト.xls | 
出席者リスト（企画開発部）.xls | 
勤務時間.pdf | 
参考情報.doc | 
取扱_使用説明書_韓国語訳.doc | 
古い日本語.doc | 
古い日本語に対応していると思われる英語.doc | 
各試作におけるHollywoodのバージョン.xls | 
唇音チェック項目（061030）.doc | 
唇音数字.xls | 
唇音数字②.xls | 
商標出願依頼者_届出手順（暫定版）.pdf | 
商標権更新確認_2006.7.xls | 
問題.txt | 
問題文(センテンス).lzh | 
回答１.txt | 
回答２.txt | 
回答３.txt | 
国内VC発売スケジュール_061026.xls | 
国内タイトル061116.xls | 
国内更新問合せ20050801-20060731x.xls | 
報_中村_東京ゲームショー2006_050925.pdf | 
報_内監_「ゲームデータ取り扱い」に関する内部監査報告書_060921.pdf | 
売り込み.pdf | 
売込みがあったソフトウエアキーボードの内容.pdf | 
契約社員（尹、061027）.xls | 
契約社員（尹、061031）.xls | 
契約社員（阿久根さん）.xls | 
定性情報まとめ0500527.doc | 
定性情報まとめ0500531.doc | 
定性情報まとめ050621.doc | 
定性情報まとめ050628.doc | 
定性情報まとめ050712.doc | 
定性情報まとめ050719.doc | 
定性情報まとめ050726.doc | 
定性情報まとめ050802.doc | 
定性情報まとめ050809.doc | 
定性情報まとめ050818.doc | 
定性情報まとめ050823.doc | 
定性情報まとめ050830.doc | 
定性情報まとめ050906.doc | 
定性情報まとめ050913.doc | 
定性情報まとめ050920.doc | 
定性情報まとめ051004.doc | 
定性情報まとめ051012.doc | 
定性情報まとめ051018.doc | 
定性情報まとめ051025.doc | 
定性情報まとめ051102.doc | 
定性情報まとめ051108.doc | 
定性情報まとめ051115.doc | 
定性情報まとめ051124.doc | 
定性情報まとめ051129.doc | 
定性情報まとめ051206.doc | 
定性情報まとめ051213.doc | 
定性情報まとめ051220.doc | 
定性情報まとめ051227.doc | 
定性情報まとめ060111.doc | 
定性情報まとめ060117.doc | 
定性情報まとめ060124.doc | 
定性情報まとめ060201.doc | 
定性情報まとめ060207.doc | 
定性情報まとめ060214.doc | 
定性情報まとめ060303.doc | 
定性情報まとめ060307.doc | 
定性情報まとめ060314.doc | 
定性情報まとめ060322.doc | 
定性情報まとめ060404.doc | 
定性情報まとめ060411.doc | 
定性情報まとめ060418.doc | 
定性情報まとめ060425.doc | 
定性情報まとめ060508.doc | 
定性情報まとめ060516.doc | 
定性情報まとめ060523.doc | 
定性情報まとめ060530.doc | 
定性情報まとめ060606.doc | 
定性情報まとめ060613.doc | 
定性情報まとめ060620.doc | 
定性情報まとめ060627.doc | 
定期購読雑誌一覧061206.xls | 
対象複合機.gif | 
尾崎裕一_TGS2006.txt | 
席配置.jpg | 
常識力トレーニング_1W_061126.pdf | 
常識力トレーニング_5W_061126.pdf | 
常識力英語問題.xls | 
年末年始措置.pdf | 
当番表　2006.pdf | 
当番表.pdf | 
役職任免推薦書05.05.doc | 
待ち受けモード説明資料060202.ppt | 
待ち受けモード説明資料060206.ppt | 
待ち受け機能.txt | 
情開待ち受けの使い方プラン.xls | 
情開総開BT問答集20060320.pdf | 
承認申請プロセス.doc | 
承認者_商標出願依頼承認手順（暫定版）.pdf | 
技術系新人一次研修概要.doc | 
技術系新人一次研修計画書.doc | 
技術系新人二次研修概要.doc | 
技術系新人研修計画書.doc | 
採用担当者ミーティングメモ(情報系).doc | 
携帯サイト説明資料.doc | 
操作説明画面案_GENE.tga | 
操作説明画面案_GENE(2).tga | 
操作説明画面案_PC.tga | 
操作説明画面案_PC(2).tga | 
放置タイマーサンプルソース_00.txt | 
数字発音.xls | 
文字入力記録用紙.zip | 
文字数えの件.doc | 
文字数え問題文及び出題形式仕様ver1.0.xls | 
文字数え問題文及び出題形式仕様ver1.0（境野編集）.xls | 
文字色の意味.doc | 
新しい日本語.pdf | 
新しい日本語に対応させた英語.doc | 
新不具合.mm | 
新人パソコン講習日程と概要.xls | 
新入社員要員申請書.doc | 
昼食夜食について.pdf | 
暫定フローチャート.pdf | 
暫定フローチャート.vsd | 
暫定版公開061128.zip | 
最新版標準モデル韓国語翻訳用①（最新).xls | 
最終版シュリンク版CPUの通信仕様.ppt | 
未決定事項表0621.xls | 
未決定事項表0703.xls | 
未決定事項表0704.xls | 
未決定事項表0704（コメント付き）.xls | 
未決定事項表0707.xls | 
未決定事項表0710.xls | 
本体進捗管理表_060619.pdf | 
東北大.jpg | 
東横イン.gif | 
案内_FAX用.doc | 
案内状.pdf | 
検収確認書ガイドライン.xls | 
業務フロー060809.xls | 
標準モデル韓国語翻訳用　金.xls | 
標準モデル韓国語翻訳用（060929).xls | 
標準モデル韓国語翻訳用（18.9.27.yun）.xls | 
欧州でのTV事情.pdf 1.pdf | 
残業１２月.pdf | 
残業注意１０月.pdf | 
残業注意１０月黄.pdf | 
残業注意11月.pdf | 
残業注意11月黄.pdf | 
残業注意１１月黄.pdf | 
残業注意１月.pdf | 
残業注意２月.pdf | 
残業注意２月黄.pdf | 
残業注意４月黄.pdf | 
残業注意５月（訂正）.pdf | 
残業注意５月黄.pdf | 
残業注意６月.pdf | 
残業注意７月.pdf | 
残業注意７月黄.pdf | 
残業注意８月.pdf | 
残業注意９月.pdf | 
残業注意９月黄.pdf | 
注意.txt | 
海外版AGBポケモン文字コード.xls | 
添付資料１.xls | 
添付資料２.pdf | 
準備段取り060821.pdf | 
準備段取り060823.pdf | 
準備段取り060825.pdf | 
準備段取り060828.pdf | 
照査・承認ルート.pdf | 
特許第3668948号.pdf | 
特開2000-122537.pdf | 
理工情報二次面接まとめ.xls | 
環境制作.txt | 
申請書①組織変更.doc | 
申請書②役職推薦.doc | 
申請書③部内異動.doc | 
画面イメージ20060818.doc | 
着メロセカンドパーティ説明用手元資料.doc | 
瞬間パズループ.txt | 
研修ワークシート第2回目.xls | 
研修ワークシート第４回目.xls | 
硬度変更荷重測定.xls | 
社長車座参加表.xls | 
稟_総情開06-23_060919.pdf | 
稟_総開技06-31_060828.pdf | 
第１期分VCソフト操作確認.lzh | 
第1期開催日程表.pdf | 
第2回報告会草稿07.ppt | 
第５回GM研修ワークシート.xls | 
第５回ワークシート参考資料.doc | 
第６回ＧＭ研修ワークシート.xls | 
管理表【ＶＣソフトチェック】_20061023.xls | 
管理表【ＶＣソフトチェック】_20061125.xls | 
管理表【ＶＣソフトチェック】_20061205.xls | 
管理表【ＶＣソフトチェック】_20061206.xls | 
管理表【ＶＣソフトチェック】_20061207.xls | 
管理表【ＶＣソフトチェック】_20061208.xls | 
管理表【ＶＣソフトチェック】_20061211.xls | 
管理表【ＶＣソフトチェック】_20061213.xls | 
管理表【ＶＣソフトチェック】_20061214_返信.xls | 
管理表【ＶＣソフトチェック】_20061214.xls | 
管理表【ＶＣソフトチェック】_20061215.xls | 
管理表【ＶＣソフトチェック】_20061218.xls | 
管理表【ＶＣソフトチェック】_20061219.xls | 
管理表【ＶＣソフトチェック】_20061220.xls | 
管理表【ＶＣソフトチェック】_20061221.xls | 
簡易会話資料.zip | 
経営会議上程.ppt | 
経費発生予測フォーム（66下期）.xls | 
経費発生予測フォーム（67上期）.xls | 
経費発生予測フォーム（67下期）.xls | 
総企開稟議の流れ060608.xls | 
翻訳採点コメント.xls | 
翻訳用.zip | 
職務経歴_瀬井健太郎.xls | 
能力評価シート.pdf | 
能力評価シート（Ａ）のサンプル.pdf | 
能力開発シート（Ｂ）の記入要項.pdf | 
脳タイトル会議（1105）会議メモ_051107（江里）.doc | 
脳トレ・えいご漬け統一用語(061108).xls | 
脳トレ(韓）コメント.rtf | 
脳トレ韓国版_認識モニタ_アンケート_監督者.doc | 
脳トレ韓国版_認識モニタ_アンケート_被験者.doc | 
脳トレ韓国版_認識モニタ手順.doc | 
脳トレ韓国版_高齢者モニタ_アンケート_監督者.doc | 
脳トレ韓国版_高齢者モニタ_アンケート_被験者.doc | 
脳トレ韓国版_高齢者モニタ手順.doc | 
脳トレ韓国版モニタ資料.zip | 
脳トレ韓国語版タイトル候補.doc | 
自社タイトル.GIF | 
自販機リスト.xls | 
若葉面談表2006.doc | 
莉・蜑阪・繧・ｊ蜿悶ｊ繝ュ繧ー.txt | 
衛生議事録1711.pdf | 
衛生議事録1801.pdf | 
衛生議事録1802.pdf | 
表1-2の変種.doc | 
製品技術部への応援異動.xls | 
製造本部に対するアンケート用紙（2005年度）.doc | 
複合回転囲碁.pdf | 
計測データ20060328.txt | 
記号.xls | 
評価ガイダンスアンケート.doc | 
評価ガイダンスアンケートより.pdf | 
評価ガイダンスメモ.pdf | 
評価ガイダンスメモ050915AM.doc | 
評価ガイダンス資料.pdf | 
評価ガイダンス連絡書.pdf | 
評価シート表示内容一覧.xls | 
評価制度Ｑ＆Ａ.pdf | 
評価制度説明資料.pdf | 
評価基準ガイドライン.pdf | 
試験問題.zip | 
説明.lzh | 
説明会日程（企画開発部）.xls | 
説明書.zip | 
説明書チェック20061023.xls | 
説明書チェック20061107.xls | 
説明書チェック20061125.xls | 
説明書チェック20061207.xls | 
説明書チェック20061208.xls | 
説明書チェック20061209.xls | 
説明書チェック20061211.xls | 
説明書チェック20061213.xls | 
説明書チェック20061214.xls | 
説明書チェック20061215.xls | 
説明書チェック表【ＶＣソフトチェック】.xls | 
説明書社外向け.zip | 
議事_製技_製造本部　顧客目線評価のフィードバックフォーラムについての打合せ_050606.pdf | 
議事録_2005年10月度SPD_GM会議.doc | 
議事録_2005年11月度SPD_GM会議.doc | 
議事録_2005年12月度SPD_GM会議.doc | 
議事録_2005年6月度SPD_GM会議.doc | 
議事録_2005年7月度SPD_GM会議.doc | 
議事録_2005年8月度SPD_GM会議.doc | 
議事録_2005年9月度SPD_GM会議.doc | 
議事録_2006年10月度SPD_GM会議.pdf | 
議事録_2006年11月度SPD_GM会議.pdf | 
議事録_2006年12月SPD_GM会議.pdf | 
議事録_2006年1月度SPD_GM会議.doc | 
議事録_2006年2月度SPD_GM会議.doc | 
議事録_2006年3月度SPD_GM会議.doc | 
議事録_2006年4月度SPD_GM会議.doc | 
議事録_2006年5月度SPD_GM会議.doc | 
議事録_2006年6月度SPD_GM会議.doc | 
議事録_2006年7月度SPD_GM会議.pdf | 
議事録_2006年8月度SPD_GM会議.pdf | 
議事録_2006年9月度SPD_GM会議.pdf | 
議事録_ツール_20060531.html | 
議事録_リーダ_20050517.txt | 
議事録_リーダ_20050524.txt | 
議事録_リーダ_20050531.txt | 
議事録_リーダ_20050607.txt | 
議事録_リーダ_20050614.txt | 
議事録_リーダ_20050621.txt | 
議事録_リーダ_20050628.txt | 
議事録_リーダ_20050705.txt | 
議事録_リーダ_20050712.txt | 
議事録_リーダ_20050719.txt | 
議事録_リーダ_20050726.txt | 
議事録_リーダ_20050802.txt | 
議事録_リーダ_20050809.txt | 
議事録_リーダ_20050823.txt | 
議事録_リーダ_20050830.txt | 
議事録_リーダ_20050906.txt | 
議事録_リーダ_20050913.txt | 
議事録_リーダ_20050920.txt | 
議事録_リーダ_20050927.txt | 
議事録_リーダ_20051004.txt | 
議事録_リーダ_20051011.txt | 
議事録_リーダ_20051018.txt | 
議事録_リーダ_20051025.txt | 
議事録_リーダ_20051101.txt | 
議事録_リーダ_20051108.txt | 
議事録_リーダ_20051115.txt | 
議事録_リーダ_20051122.txt | 
議事録_リーダ_20051129.txt | 
議事録_リーダ_20051206.txt | 
議事録_リーダ_20051213.txt | 
議事録_リーダ_20051220.txt | 
議事録_リーダ_20051227.txt | 
議事録_リーダ_20060110.txt | 
議事録_リーダ_20060117.txt | 
議事録_リーダ_20060124.txt | 
議事録_リーダ_20060131.txt | 
議事録_リーダ_20060207.txt | 
議事録_リーダ_20060214.txt | 
議事録_リーダ_20060221.txt | 
議事録_リーダ_20060228.txt | 
議事録_リーダ_20060314.txt | 
議事録_リーダ_20060322.txt | 
議事録_リーダ_20060328.txt | 
議事録_リーダ_20060404.txt | 
議事録_リーダ_20060411.txt | 
議事録_リーダ_20060418.txt | 
議事録_リーダ_20060425.txt | 
議事録_リーダ_20060502.txt | 
議事録_リーダ_20060509.txt | 
議事録_リーダ_20060516.txt | 
議事録_リーダ_20060523.txt | 
議事録_リーダ_20060530.txt | 
議事録_リーダ_20060606.txt | 
議事録_リーダ_20060613.txt | 
議事録_リーダ_20060620.txt | 
議事録_リーダ_20060627.txt | 
議事録_リーダ_20060704.txt | 
議事録_リーダ_20060711.txt | 
議事録_リーダ_20060718.txt | 
議事録_リーダ_20060725.txt | 
議事録_リーダ_20060801.txt | 
議事録_リーダ_20060808.txt | 
議事録_リーダ_20060822.txt | 
議事録_リーダ_20060829.txt | 
議事録_リーダ_20060905.txt | 
議事録_リーダ_20060912.txt | 
議事録_リーダ_20060919.txt | 
議事録_リーダ_20060926.txt | 
議事録_リーダ_20061003.txt | 
議事録_リーダ_20061010.txt | 
議事録_リーダ_20061017.txt | 
議事録_リーダ_20061024.txt | 
議事録_リーダ_20061031.txt | 
議事録_リーダ_20061107.txt | 
議事録_リーダ_20061114.txt | 
議事録_リーダ_20061121.txt | 
議事録_リーダ_20061128.txt | 
議事録_リーダ_20061205.txt | 
議事録：要望聞き取り会議051124.doc | 
議事録20060710-Opera開発体制.txt | 
議事録20060718-Operaコンポーネント.txt | 
議事録20060721-ブラウザコンポーネントアクセス制限.txt | 
議事録20060725-Opera電話会議.txt | 
議事録RVL技術共有20060131.doc | 
販売推移051030(5P）.xls | 
資料（ソフト日程05_05_31).pdf | 
資料（ソフト日程05_07_14).pdf | 
資料（ソフト日程05_07_15).pdf | 
資料（ソフト日程050822）.pdf | 
資料（ソフト日程050823）.pdf | 
資料（ソフト日程050920）.pdf | 
資料（ソフト日程051020）.pdf | 
資料（ソフト日程051118）.pdf | 
資料（ソフト日程051221）.pdf | 
資料（ソフト日程060203）.pdf | 
資料（ソフト日程060307）.pdf | 
資料（ソフト日程060427）.pdf | 
資料（ソフト日程060606）.pdf | 
資料（ソフト日程060705）.pdf | 
資料（ソフト日程060811）.pdf | 
資料（ソフト日程061006）.pdf | 
資料（ソフト日程061208）.pdf | 
資料20060720-ブラウザコンポーネントアクセス制限.txt | 
逆アセンブル.txt | 
通信て_やりたいこと050721.xls | 
通訳研修連絡.pdf | 
連_システム_退職者情報削除申請の件_050906.pdf | 
連_人事_年末・年始休日労働の特別措置_061218.pdf | 
連_企画_「Ｗｉｉプレビュー」実施に関して_060905.pdf | 
連_企画_『Ｎｉｎｔｅｎｄｏ　Ｗｏｒｌｄ　2006　Ｗｉｉ体験会』実施に関して_061018.pdf | 
連_営管_（株）ポケモン　イベント用部材　手配依頼の件_060404.pdf | 
連_営管_（株）ポケモン　イベント用部材　手配依頼の件_061025.pdf | 
連_営管_（株）ポケモン　イベント用部材　手配依頼の件（２）_061027.pdf | 
連_営管_「（株）ポケモン　イベ???ト用部材　手??????頼????????????絡書訂正の件_061102.pdf | 
連_営管_「マナフィ」配布用ＡＧＢカートリッジ手配依頼の件_061102.pdf | 
連_法務_「Ｗｉｉリモコン」及び「ストラップ」に関する情報の保持のお願い_061211.pdf | 
連_知財_新規米国特許侵害訴訟の件_060803.pdf | 
連_知財_米国特許訴訟の予想対象製品に関する情報の保持のお願い_061211.pdf | 
連_総務部_下請取引の適正化について_061214.pdf | 
連_総務部_下請取引の適正化について051216.pdf | 
連_製造_製造部　総合サポートＧからの情報提供依頼_050517.pdf | 
連_開技_ＡＧＢソフト「ビットジェネレーションシリーズ」カートリッジハウジングの色について_060605.pdf | 
週間マクロレポート060719.doc | 
週間マクロレポート060727.doc | 
週間マクロレポート060803.doc | 
週間マクロレポート060810.doc | 
週間マクロレポート060825.doc | 
週間マクロレポート060831.doc | 
週間マクロレポート060907.doc | 
週間マクロレポート060915.doc | 
週間マクロレポート060921.doc | 
週間マクロレポート060926.doc | 
週間マクロレポート061003.doc | 
週間マクロレポート061013.doc | 
週間マクロレポート061017.doc | 
週間マクロレポート061024.doc | 
週間マクロレポート061031.doc | 
週間マクロレポート061110.doc | 
週間マクロレポート061116.doc | 
週間マクロレポート061124.doc | 
週間マクロレポート061201.doc | 
週間マクロレポート061201.pdf | 
週間マクロレポート061215.pdf | 
進行表(管理職).pdf | 
部下のメンタルケア相談のご案内（Ｈ・Ｆ）.pdf | 
部門ごとの評価項目（2005年3月）.doc | 
部門ごとの評価項目（2005年9月）.doc | 
部門ごとの評価項目（2006年3月）.doc | 
配布予定.xls | 
金～StaffCredit061106.xls | 
金～StaffCredit061107.xls | 
金コピー契約社員061031.xls | 
開発ツールスケジュール12-05用.xls | 
開発ツールスケジュール２００５年９月版.xls | 
阿部友一_TGS2006.doc | 
電子取り説【日本】最新バージョン一覧20061116.xls | 
電子取り説【日本】最新バージョン一覧20061117.xls | 
電子取り説【日本】最新バージョン一覧20061120.xls | 
電子取り説【欧州】最新バージョン一覧20061121.xls | 
電磁誘導方式TP060118.ppt | 
電話会議議事録.txt | 
面接評価シート.xls | 
韓国向販売計画案1201改訂.xls | 
韓国版ＤＳ用語集_文字色の意味0919.doc | 
音声認識ライブラリ関連の止まりバグについて.txt

---
## Transmission log (/mail.nintendo.co.jp/送信ログ)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">送信ログ</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
送信ログ200610_01 | .txt | 
送信ログ200610_02 | .txt | 
送信ログ200610_03 | .txt | 
送信ログ200610_04 | .txt | 
送信ログ200611 | .txt | 
送信ログ200611_01 | .txt | 
送信ログ200611_02 | .txt | 
送信ログ200611_03 | .txt | 
送信ログ200611_04 | .txt | 
送信ログ200611_05 | .txt | 
送信ログ200611_06 | .txt | 
送信ログ200611_07 | .txt | 
送信ログ200612 | .txt | 
送信ログ200612_01 | .txt | 
送信ログ200612_02 | .txt | 
送信ログ200612_03 | .txt | 


---
## Sent Attachments (/mail.nintendo.co.jp/送信添付)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">送信添付</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
_Block.pdf | 
＜中村秀和＞2006.doc | 
051227-USG１・２カートリッジロットチェック結果NTRdata20051115USG1207.xls | 
1-20.18.29.apc | 
1-20.19.00.apc | 
1-20.31.40.apc | 
1-20.34.20.apc | 
1-20.35.19.apc | 
1-20.53.33.apc | 
1-21.06.49.apc | 
2005年10月度議事次第.txt | 
2005年8月度議事次第.txt | 
2006-11-15-Virtual Console(HBM) - EU.xls | 
2006年11月度議事次第.txt | 
2006年新入社員技術研修参加者一覧.xls | 
2006技術系新入社員研修スケジュール（確定）.xls | 
21968-YoshisIslandDS-FR_1.doc | 
3D研修課題.doc | 
５月０１日分.txt | 
５月０２日分.txt | 
５月０８日分.txt | 
５月０９日分.txt | 
５月１０日分.txt | 
739村川　照貴.xls | 
ABC.pdf | 
AboutWXC.pdf | 
AGBソフト一覧.xls | 
Assistance to Ubisoft.txt | 
BackToolForNDEV.zip | 
BackToolForNDEV104.zip | 
BackToolForRVTR.zip | 
BTに関わるゲームリモコンの仕様.pdf | 
BTに関わるゲームリモコンの仕様.txt | 
BTに関わるゲームリモコンの仕様20060317.txt | 
bytecopy_core.s | 
bytecopy.c | 
bytecopy.h | 
Content_Licensing_Ser.pdf | 
Controller Messages_061102_NOE1.xls | 
Controller Messages_061103_NOE.xls | 
Controller Messages_061103_NOE1.xls | 
Controller Messages1025_NOE.xls | 
D-abcd.pdf | 
DebugQuickSave_Ver100_評価版_061129.doc | 
Demo20060328.zip | 
Demo20060330.zip | 
Demo20060406.zip | 
DesignStatement_Wi-FiConnection_A_20050123AsobiTaizenOnline_1.doc | 
DPfont060112.zip | 
DSすれ違い通信中継所プログラム運営050913.ppt | 
E3 2006 業務出張者一覧（5PG）.xls | 
E3 2006 研修出張者一覧（5PG）.xls | 
E3 2006 研修出張者一覧（企画開発部）a.xls | 
E3 2006 研修出張者一覧（部署名）.xls | 
E3 2006出張 研修派遣本人希望申込・上司推薦書（木梨玲）.doc | 
E3 2006出張 研修派遣本人希望申込・上司推薦書（氏名）.doc | 
E3 EVENT.xls | 
E3_20060407.zip | 
E3_20060410b.zip | 
E3_20060417.zip | 
E3_20060421.zip | 
E3Demo_NESSMfiltertest.zip | 
E3Demo_NESSMfiltertest2.zip | 
E3Demo_SFC20060406.zip | 
E3Demo_SNSMW20060411.zip | 
E3Demo_SNSMW20060411a.zip | 
E3Demo_SNSMW20060412.zip | 
E3Demo_SNSMW20060417.zip | 
E3Demo_SNSMW20060418.zip | 
E3Demo_SNSMW20060421a.zip | 
E3Demo_SNSMWfiltertest.zip | 
E3Demo_SNSMWfiltertest2.zip | 
E3Demo_SNSMWfiltertest3.zip | 
E3showversion.pdf | 
E3ショーバージョンガイドライン_02.txt | 
E3ショーバージョンガイドライン_03.txt | 
E3ショーバージョンガイドライン_060322.txt | 
E3用解説.txt | 
Ｅ３研修出張報告.doc | 
Ｅ３研修出張報告概要.doc | 
effectInterfaceDocs.zip | 
EMAIL_BUG_REPORT_FORM.TXT | 
flow_diskupdate_sys1.pdf | 
font_system.bmp | 
font_test.lzh | 
ＧＭ研修アンケート.doc | 
GM研修シート(1).xls | 
HBM.jpg | 
Hollywood修正履歴.xls | 
homeButtonSample.ddf | 
HOMEメニューフレームワークAPI.txt | 
How to make a disc needed to import a wad file.txt | 
HowtoUseMemory.txt | 
HowtoUseMemory20060221.txt | 
HttpTest.zip | 
InstalledVersionCheck.xls | 
JAAJ_dbg_061017.ddf | 
Japanese Introduction v1.7.ppt | 
KPAD_051011.lzh | 
KPAD_051014.lzh | 
KPAD_051020.lzh | 
KPADSample_051025.lzh | 
KPADSample_051027.lzh | 
KPADSample_051028.lzh | 
LED-makiwari.xls | 
LED-tennnis.xls | 
Licensing_Server_Oper.pdf | 
log.bmp | 
Makefile | 
MessageEditor.zip | 
MiddlewareGuideline_for_Wii_060525.zip | 
motto_no-19.11.17.apc | 
motto_no-19.14.58.apc | 
motto_no-19.19.43.apc | 
motto_no-19.22.17.apc | 
N64_E3.zip | 
NAND Application Development Kit JP.doc | 
NAND Application Development Kit.doc | 
NAND Application Development May 29 2006.doc | 
NANDアプリの基礎知識.ppt | 
NAND構造2006-08-26.xls | 
NDEV生産.xls | 
nintendo_logo_e3_2006.zip | 
NitroSDK-WXC-050922.zip | 
NNGC基本日程表060418.xls | 
NOAからのメール原文.txt | 
NOE_Localization_26Oct06.xls | 
NOE用ソフト開発状況0611.xls | 
ＮＯＫ業務委託連絡書（企画開発）.doc | 
ＮＯＫ業務委託連絡書（環境制作）.doc | 
NTRMEM103.EXE | 
NW説明員・企画開発部.xls | 
OnAccessScanLog.txt | 
Online RCF Reporting _ Results from 11_18_2006 to 12_1_2006.eml | 
Online RCF Reporting _ Results from 12_1_2006 to 12_7_2006.eml | 
opera.zip | 
ot_kpad.h | 
PcmCache.txt | 
Pegi Ratings_update_September_25th_2006.xls | 
PG1_wii.xls | 
PG2_wii.xls | 
PG3_wii.xls | 
PG4_wii.xls | 
poke_font_b.zip | 
poke-doc.zip | 
PokeFontTest.zip | 
PokemonDP_schedule_20061109.xls | 
pruefergebnisse_1.xls | 
Qestion from Ubisoft.doc | 
rakubiki-12.20.03.apc | 
rakubiki-12.21.30.apc | 
rakubiki-12.24.13.apc | 
rakubiki-12.25.56.apc | 
rakubiki-13.26.10.apc | 
rakubiki.txt | 
Readme_en.txt | 
Readme_jp_Ver06.txt | 
Readme_jp.txt | 
ReadmeENG.txt | 
ReadmeJP.txt | 
REVOLUTIONネットワークサポートページ.htm | 
REVネットワーク開発の進め方(060206).ppt | 
REVネットワーク開発の進め方(060207).zip | 
REV必要作業一覧060417.xls | 
REV必要作業一覧表(060124 田原).xls | 
REV必要作業一覧表(060124).xls | 
REV必要作業一覧表(機能別)060207-1.xls | 
REV必要作業一覧表(環境制作G060126).xls | 
REV必要作業一覧表(部署別)060203.xls | 
REV必要作業一覧表(部署別)060207_3.xls | 
REV必要作業一覧表(高橋修正版）)060207_3.xls | 
REV必要作業一覧表060131-1.xls | 
REV必要作業一覧表060201_3.xls | 
Rimg9086.jpg | 
RVL_Banner_Gudeline_060720.zip | 
RVL_KPAD_SDK20051122alpha.zip | 
RVL_KPAD_SDK20051124rc1.zip | 
RVL_KPAD_SDK20051125.zip | 
RVL_KPAD_SDK20051128.zip | 
RVL_MasterEditorForNANDAPP-061106_vc.zip | 
RVL_NADK-060808.zip | 
rvl_titles.xls | 
rvl_titles20060126.xls | 
RVL_VC_CheckList061011.xls | 
RVL_VC_CheckList061028_jp.xls | 
RVL_VC_Guideline_jp_Ver103.doc | 
RVL_VC_Guideline_jp_Ver104.doc | 
RVL_VC_Guideline_jp_Ver105_061113.doc | 
RVL_VC_Guideline_jp_Ver105_評価版_061111.doc | 
RVL_VC_Guideline_jp_Ver105_評価版_061113.doc | 
RVL_VC_Guideline_jp_Ver105_評価版.doc | 
RVL_VC_Guideline_jp_Ver105_試作.doc | 
RVL_VC_Guideline_jp_Ver105_試作2.doc | 
RVL_VC_Guideline_jp_Ver105_試作3.doc | 
RVL_VC_Guideline_jp_Ver106_061118.doc | 
RVL_VC_Guideline_jp_Ver106_評価版_061114.doc | 
RVL_VC_Guideline_jp_Ver106_評価版_061115.doc | 
RVL_VC_Guideline_jp_Ver107_061206.doc | 
RVL_VC_Guideline_jp_Ver107_評価版_061118.doc | 
RVL_VC_Guideline_jp_Ver107_評価版_061130.doc | 
RVL_VC_Guideline_jp_Ver108_評価版_061211.doc | 
RVL_VC_Overview_jp_Ver102.doc | 
RVL_VC_Overview_jp_Ver103.doc | 
RVL_VC_Specifications_jp_Ver105.doc | 
RVL_VC_Specifications_jp_Ver106.doc | 
RVL_VC_Specifications_jp_Ver107.doc | 
RVL_VC_Specifications_jp_Ver108.doc | 
RVL_VC_Specifications_jp_Ver109.doc | 
RVL_VC_Specifications_jp_Ver110.doc | 
RVL_VC_Specifications_jp_Ver111.doc | 
RVL_VC_Specifications_jp_Ver112_061113.doc | 
RVL_VC_Specifications_jp_Ver112_評価版.doc | 
RVL_VC_Specifications_jp_Ver113_061118.doc | 
RVL_VC_Specifications_jp_Ver113_評価版_061113.doc | 
RVL_VCMV_SDK-1_4-061101 Patch1 Readme_en.txt | 
RVL_VCMV_SDK-1_4-061101 Patch1 Readme_jp.txt | 
RVL_VCMV_SDK-1_4-061101_patch1.zip | 
RVL_VCMV_SDK-1_4-061101_Patch2.zip | 
RVL_VCMV_SDK-1_4-061101_Patch3.zip | 
RVL_WPAD_SDK20051122alpha.zip | 
RVL_WPAD_SDK20051124rc1.zip | 
RVLプログラミング注意事項検討資料_060529.xls | 
RVL用語集 E3 Ver社内（VC担当者専用）用   01版.lzh | 
RVL用語集0603xx-E3用.xls | 
RVL開発環境.pdf | 
screenshot_001.bmp | 
showversion_RVL.doc | 
SMC-BTS概要.ppt | 
smp-toy.wad | 
SMPTE75%ColorBar_Spec.jpg | 
SMPTE75%ColorBar.jpg | 
software_arch.pdf | 
std_skin.zip | 
strap_060908.zip | 
swfdump.ZIP | 
System Menu DevelopmentJP.zip | 
System Update Procedure.zip | 
test_message.zip | 
test.zip | 
Thumbs.db | 
tosa_hal.xls | 
tosa_srd_id.xls | 
tsa_srd_id.xls | 
userManual.pdf | 
VC Launch Bug Log PAL 1127.xls | 
VC Launch Bug Log_1102_村川コメント.xls | 
VC TV Problems.xls | 
VC_KeyBind_List.zip | 
VC_Title_List061219IS.xls | 
vcmv.h | 
VCSchedule_0906.xls | 
VCスケジュール20060919.xls | 
VCスケジュール20060919A.xls | 
VCスケジュール20060921.xls | 
VCスケジュール20060922.xls | 
VCスケジュール20060927.xls | 
VCスケジュール20060929.xls | 
VCスケジュール20061101.xls | 
VCスケジュール20061107.xls | 
VCフロー_re0322.pdf | 
VCフロー_re0322(2).pdf | 
VC作業の流れ.xls | 
VC作業の流れ20060314.xls | 
VC作業の流れ20060327.xls | 
VC作業の流れ20060516.xls | 
VirtualConsolArchitect20060620.ppt | 
VirtualConsoleArchitect20060623a.ppt | 
VirtualConsoleArchitect20060626.ppt | 
VirtualConsoleArchitect20060628.ppt | 
VirtualConsoleArchitect20060629.ppt | 
VirtualConsoleArchitect20060630.ppt | 
VirtualConsoleArchitect20060703.ppt | 
VirtualConsoleArchitect20060704.ppt | 
VirtualConsoleArchitect20060705.ppt | 
VirtualConsoleArchitect20060706.ppt | 
VirtualConsoleArchitect20060710.ppt | 
VirtualConsoleArchitect20060711.ppt | 
VirtualConsoleArchitect20060712.ppt | 
VirtualConsoleArchitect20060713.ppt | 
VirtualConsoleArchitect20060714.zip | 
VirtualConsoleArchitect20060719.zip | 
VirtualConsoleArchitect20060721.zip | 
VirtualConsoleArchitect20060726.zip | 
VirtualConsoleArchitect20060727.zip | 
VirtualConsoleArchitect20060808.zip | 
VirtualConsoleArchitect20060810.zip | 
VirtualConsoleArchitect20060817.zip | 
Wi-Fi対応予定ソフト.txt | 
Wii_Conference_Guideline.jp.txt | 
Wii_Conference_Guideline.us.txt | 
Wii_Guidelines_v0.94.pdf | 
Wii_MessageList_0.10.xls | 
Wii_MessageList_0.14b_eur.xls | 
Wii_MessageList_0.14c_eur.xls | 
Wii_SystemMenu_schedule_2006_0921.pdf | 
Wii_SystemMenu_schedule.pdf | 
wii_titles20060626.xls | 
Wii_ワイド画面対応.xls | 
WiiConnect24オーバービュー_060526.doc | 
WiiPrevie構成v1.pdf | 
WiiSaveDataGuideline_jp_060919.pdf | 
WiiTitle_PG1.xls | 
WiiTitle_PG2.xls | 
WiiTitle_PG3.xls | 
WiiTitle_PG4.xls | 
Wiiカンファレンス0609バージョンガイドライン(任天堂タイトル向け)_Ver.0.8_060828.doc | 
Wiiカンファレンス0609バージョンガイドライン(任天堂ディスクタイトル向け)_Ver.0.9_060830.doc | 
Wiiショッピングch作業概要.xls | 
Wiiプログラミングガイドラインv0.91α.zip | 
Wiiプログラミングガイドラインv0.93α.zip | 
Wiiプログラミングガイドラインv0.94_.zip | 
Wiiプログラミングガイドラインv0.94.zip | 
Wiiプログラミングガイドラインv0.9α.zip | 
Wiiプログラミングガイドライン検討資料20060626.xls | 
Wiiリモコンガイドラインを考える会.ppt | 
Wiiリモコン実験.xls | 
Wii取説で気づいたこと.txt | 
Wii本体取説（準備編 改訂1）.pdf | 
Wii本体機能ROM出しスケジュール20061120.pdf | 
Wii本体機能ROM出しスケジュール20061120.xls | 
Workload.exe | 
Workload.zip | 
クレーム.pdf | 
ゲームリモコン＆クラシックコントローラボタン名称検討.xls | 
コントローラに関して_2.doc | 
コントローラに関して_3.doc | 
サムネールとバナーについて0720.doc | 
サンプル必要数（２００５年９月２２日版）.xls | 
シャープ技術提案会.xls | 
シャープ技術提案会ご案内.pdf | 
ソフト別研修会&全体説明会会スケジュール.xls | 
バーチャルコンソールアーキテクト.ppt | 
バーチャルコンソール用HBM_20061211.ppt | 
バーチャルコンソール用HBM.ppt | 
バグリスト【ＶＣソフトチェック】_20061107.xls | 
ハル研アカウント.xls | 
フランクフルトオフィス拡張の提案（短縮版）_27Mar2006.ppt | 
メッセージエディタを考える.txt | 
もっとスマートな翻訳を！.ppt | 
もっと脳_jp.txt | 
ランキングシステムの今後.ppt | 
リモコン操作不能検証.txt | 
リモコン操作名称.txt | 
レイアウト2006south.pdf | 
上司用career06(第5ﾌﾟﾛﾀﾞｸｼｮﾝG).atc | 
上司用career06(第5ﾌﾟﾛﾀﾞｸｼｮﾝG).xls | 
今回評価のスケジュール.pdf | 
任天堂研修内容＆DPプログラム方針について.doc | 
企画開発部.xls | 
光回線図面11.7.pdf | 
入社問題その２.txt | 
入社問題例.txt | 
参考情報.doc | 
各試作におけるHollywoodのバージョン.xls | 
問題.txt | 
契約社員.xls | 
契約社員.zip | 
契約社員（阿久根さん）.xls | 
待ち受けモード説明資料060206.ppt | 
情開総開BT問答集20060320.pdf | 
技術系新人一次研修計画書.doc | 
技術系新人二次研修概要.doc | 
技術系新人研修計画書.doc | 
新入社員要員申請書5PG.doc | 
最終版シュリンク版CPUの通信仕様.ppt | 
本日の議題_20061208.ppt | 
東芝３Ｄデモ.pdf | 
欧州でのTV事情.pdf 1.pdf | 
添付資料１.xls | 
添付資料２.pdf | 
瞬間パズループ.txt | 
研修ワークシート第2回目(村川).xls | 
研修ワークシート第４回目(村川).xls | 
硬度変更荷重測定.xls | 
第５回GM研修ワークシート(村川).xls | 
第６回ＧＭ研修ワークシート(村川).xls | 
経費発生予測フォーム（66下期） 第５ＰＧ.xls | 
経費発生予測フォーム（67上期）5PG.xls | 
脳タイトル会議（1105）会議メモ_051107（江里）.doc | 
若葉面談表2006.doc | 
評価ガイダンスアンケート.doc | 
試験問題.zip | 
議事録_リーダ_20051025.txt | 
議事録_リーダ_20051101.txt | 
議事録_リーダ_20051108.txt | 
議事録_リーダ_20051115.txt | 
議事録_リーダ_20051129.txt | 
議事録_リーダ_20051206.txt | 
議事録_リーダ_20051227.txt | 
議事録_リーダ_20060117.txt | 
議事録_リーダ_20060228.txt | 
議事録20060710-Opera開発体制.txt | 
議事録RVL技術共有20060131.doc | 
資料（ソフト日程05_05_31).pdf | 
資料（ソフト日程050822）.pdf | 
資料（ソフト日程050823）.pdf | 
資料（ソフト日程050920）.pdf | 
資料（ソフト日程051020）.pdf | 
資料（ソフト日程060427）.pdf | 
逆アセンブル.txt | 
通信て_やりたいこと050721.xls | 
通訳研修連絡.pdf | 
連_営管_（株）ポケモン　イベント用部材　手配依頼の件_060404.pdf | 
連_法務_「Ｗｉｉリモコン」及び「ストラップ」に関する情報の保持のお願い_061211.pdf | 
連_知財_米国特許訴訟の予想対象製品に関する情報の保持のお願い_061211.pdf | 
開発ツールスケジュール12-05用.xls | 
開発ツールスケジュール２００５年９月版.xls | 
電磁誘導方式TP060118.ppt | 

---
## Sent Box (/mail.nintendo.co.jp/送信済み)
<section class="postSection">
  <div class="css-folder css-folder-left wow slideInLeft postImage">送信済み</div>
  <div markdown="1" class="rr-post-markdown">
 This folder contains...

  </div>
</section>  

File Name | Extension | Description
---|---|---
送信済み200505 | .txt | Talk about interview candidates
送信済み200506 | .txt | Onboarding process for new hires and 3d training
送信済み200507 | .txt | 
送信済み200508 | .txt | 
送信済み200509 | .txt | 
送信済み200510 | .txt | 
送信済み200511 | .txt | 
送信済み200512 | .txt | 
送信済み200601 | .txt | 
送信済み200602 | .txt | 
送信済み200603 | .txt | 
送信済み200604 | .txt | 
送信済み200605 | .txt | 
送信済み200606 | .txt | 
送信済み200607 | .txt | 
送信済み200608 | .txt | 
送信済み200609 | .txt | 
送信済み200610 | .txt | 
送信済み200611 | .txt | 
送信済み200612 | .txt | 

