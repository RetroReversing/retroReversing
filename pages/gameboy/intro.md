---
collection: gameboy
tags: gameboy
title: Intro
excerpt: GameBoy Introduction
---

# Original GameBoy DMG (Dot Matrix Game)

CPU: z80 (LR35902) (Opcodes: http://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html)

RAM: 8KB (32KB in Color)


## Introduction Advert
<iframe width="560" height="420" src="http://www.youtube.com/embed/2Mvb9olYVlg?color=white&theme=dark"></iframe>

## The Ultimate Gameboy Talk (hardware specs etc)
<iframe width="560" height="420" src="http://www.youtube.com/embed/HyzD8pNlpwI?color=white&theme=dark"></iframe>

## The Game Boy, a hardware autopsy
<iframe width="560" height="420" src="http://www.youtube.com/embed/RZUDEaLa5Nw?color=white&theme=dark"></iframe>
<iframe width="560" height="420" src="http://www.youtube.com/embed/ecTQVa42sJc?color=white&theme=dark"></iframe>

---
# Super GameBoy
<iframe width="560" height="420" src="https://www.youtube.com/embed/uaeLY441Fwc?color=white&theme=dark"></iframe>

---
# GB Booster
Similar to the Super GameBoy but this is for the Nintendo 64 and not licenced by Nintendo, I first saw this for sale in issue X of the UK Nintendo Official Magazine.
<iframe width="560" height="420" src="https://www.youtube.com/embed/NiMx10PV_cw?color=white&theme=dark"></iframe>
For more information: 
- http://www.chrismcovell.com/gbbooster.html
- https://gamehacking.org/wiki/Game_Booster_(Nintendo_64)

# Wide Boy 64
Official device to play gameboy (including gba) games on the N64, but was not sold to the general public. You had to be a game developer or press in order to buy one from Intelligent Systems.
<iframe width="560" height="420" src="https://www.youtube.com/embed/llIz6qjDfLc?color=white&theme=dark"></iframe>

---
# Datel Game Booster for Sony Playstation
Similar to the Super GameBoy but this is for the Sony Playstation!
<iframe width="560" height="420" src="https://www.youtube.com/embed/SxF2e6DUMRo?color=white&theme=dark"></iframe>

---
# GameBoy Printer
<iframe width="560" height="420" src="https://www.youtube.com/embed/43FfJvd-YP4?color=white&theme=dark"></iframe>

---
# GameBoy Color Software Development Kit
You can download the Japanese version at emuparadise here: https://www.emuparadise.me/sdk/
I'm not sure there ever was an english version of the Official Intelligent Systems GameBoy Development Kit
The archive only seems to contains the "IS-CGB-CAD" tool, which I presume is some sort of graphics/map editor. Graphics, Sprites and Tiles are known as "characters" for the GameBoy.
So I presume it stands for Intelligent Systems Character A??? Designer

## Change history
```
IS-CGB-CAD change history

1999/02/08
- Fixed that sometimes abnormal termination due to application error when color palette was deleted.
- Fixed that colors previewed when color palette is deleted become strange.

1999/02/05
- Added grouping function to objects.
- Added a function to import by returning when the width is over when importing BMP.
· We narrowed the selection frame of characters and screens.

1999/02/03
· I attached an arrow button to the object.
· Change applied button in animation setting to preview button.
· Change behavior of add button and delete button in animation setting.

1999/02/02
· The objects that are open in the object list are marked with *.
· Fixed an incorrect list of objects when adding objects with window buttons.
· Fixed an application error when closing the dialog when animation setting is made when multiple objects are open.
- Fixed that it was lost or disappeared in the object preview in parallel.
· Add button to animation setting.
· Added popup menu when not selected by object.
- Fixed that display becomes incorrect if animation setting is done when multiple object files are open.
· Fixed that LCD was kept OFF in case of emulator in restoration at startup.
- Fixed that DCL preview is not restored on startup restore.
Fixed CGB reset in parallel preview.
· I made copy and paste possible with objects.
- The object number and frame number to be added in the animation setting was added to the last selected one.

1999/02/01
· I added ON / OFF display of the list of objects.
- The selection operation in the list of objects was funny.
- Fixed an application error when moving the mouse to the outside of the screen when changing the attribute with the character.
- Fixed that there was a time when you could not grasp the window frame of the object.

1999/01/29
· Drag and drop between objects can be done by opening a new window with objects.
· Add, delete, new window buttons attached to the object window.
· We made it possible to select OBJ side and BG side by COL import.
· The DSC, DOB properties, preview settings make it possible to see the file name portion even when the path is long.

1999/01/26
· Fixed infinite looping when there was no DCL file associated with DCG.
- Fixed that the DCL file name was not displayed when DCL was opened.

1999/01/21
- Fixed a problem in simple preview.
- The DCG associated when DSC or DOB was made active is brought to the second.
- Fixed that the bank of characters could not be changed with objects.

1999/01/20
· In the case of DCG made from other than IS-CGB-CHARACTER, only bit patterns can be read.
- Added a simple preview mode.
- Fixed that association with palette is not done when DCG made from other than IS - CGB - CHARACTER is loaded.

1999/01/19
- Opened an unassociated DCG or made newly created DCG associated with the current palette.
· The object can be deselected with the ESC key in the object.
- Correction that the restoration of association information was wrong was fixed.
· I made the name of the palette a combo box.
- Fixed that data which is not related to preview was sent to actual machine in restoration at startup.
- Fixed behavior that was wrong when closing or opening the DCG associated with the object.

1999/01/18
- Fixed that the object becomes the same size as the title bar.
- In the mode exceeding 256 colors, it displays with the associated color.
· It is possible to key in the frame of the animation setting of the object.
· Restore window information for each file.

1999/01/14
- Fixed that there was a case where it terminated with application error when deleting palette.
· Change processing when new palette is created.
· The DCG in which the association has been changed was made to display which DCG is displayed in the message when trying to close it
- When changing the character when selecting the whole on the screen, when trying to cut and paste it on the screen it was fixed that it ended with an application error.
· Added the function of full selection.
- Drag movement at the time of selection by character as character is the same as the screen.

1999/01 / 13
- Fixed that the palette file name shifted when deleting the color palette.
· New1.dcl which has never been saved has been renamed again.
- Fixed that it was not reflected on the slider in the color edit dialog.
- Fixed a problem with mouse cursor change processing.
- Added palette, priority, flip to clear code.
- Changed the palette of DCG associated with changing pallet when DSC or DOB is active.
- Fixed that it was not reflected in the preview after editing the palette.

1/12/1999
· Fixed infinite looping when there was no DCL file associated with DCG.
· I tried to save when I tried to close DCG whose association was changed.
· When the name of DCL is changed, it is also reflected in the associated DCG.
· I decided not to open it using the closed DCL.
· The file name is displayed on the tab of the palette.
- Correlation that association disappears when new palette is created is fixed.
· The name of the newly created palette is not used now.

1999/01/11
· The color palette and DCG are related.
· Change the resize handle on selection to the outside.
- The character selected by DOB can be moved with the cursor key.
- When creating a new DOB, Sequence 0 is added to animation data.
· I made it easy to remember the color I had selected.
· The state of the gradation is also preserved.
- Fixed that the rightmost part of the gradation could not be selected.
- Fixed that it was possible to select out of range when taking color from the gradation.
· Palette editing made it impossible to directly touch pallet data.
· I attached a button for the gradation set.

1999/01/07
· We made it possible to change the color of grid and center line.
· The display range frame can be displayed on the screen.
· Change the size of the color palette.
Added color code display and edit color display in the color edit dialog.
- Added a function to create a neutral color by color editing.
- Added redo from the beginning.

December 25, 1998
· It is possible to set the default size of DCG, DSC, DOB window.
· The link with the character was made relative.
· We made it possible to set OBJ, BG separately for preview color.

December 17, 1998
- Fixed that the screen clear code was wrong in the preview.

Dec. 14, 1998
- Fixed that the color could not be transferred to the actual machine.
· Paste added to popup menu.

December 3, 1998
- Fixed a problem that forcibly terminates when placing an object on a newly created DOB and closing it.

November 27, 1998
· I made it possible to select whether to create a color palette by importing BMP. Up to 4 colors can import color.

November 20, 1998
· I tried not to ask whether to save or not when closing the window with trial version.

November 19, 1998
· Easier to understand warning messages when parallel cartridges were not recognized.

November 18, 1998
- Fixed a bug that ends with an application error when the parallel cartridge is not recognized and emulator setup is not done.

November 17, 1998
- Fixed that there was a case that it was going to be wrong when importing BMP only using less than three colors.

November 12, 1998
· Fixed that color change is not correctly done when range selection is done from lower right to upper left when color change is selected in character unit.

November 11, 1998
· It is now possible to save the mode of the object when editing with the object.

November 5, 1998
- Fixed that the characters of Bank 1 were not transferred if the same character was set in Bank 0 and Bank 1 in character preview.
- Fixed that the screen was not transferred due to restoration of preview at startup.

1998/10/26
- Fixed bug in animation setting dialog.

October 23, 1998
- Fixed that 90 degrees, 180 degrees and 270 degrees were misaligned by rotation of the character at an arbitrary angle.

1998/10/22
· Rotate with a character so that a free angle can be chosen.

October 21, 1998
- When multiple emulators are connected, we made it possible to select which ones to use in the preview.
· Fixed that it is not undone correctly at the very end when opening and editing the saved character in 8x16 mode and undoing it.
- Fixed that color change is not done in character unit even in the state where color change is selected in character unit.
· The order of luminance of colors when BMP was captured was adjusted to the order of luminance of the current palette.

1998/10/20
- Fixed color allocation was wrong when BMP in mode other than 24 BIT was imported.
- Fixed that the display on the actual machine was wrong when the character was in 8 × 16 dot mode.
- Fixed the strange part of the preview setting dialog.

1998 October 19
- The DSC and DOB were reversed in the preview setting dialog.
- Fixed being packed in the direction of dark color when it was less than 4 colors when capturing BMP.

1998/10/16
- Added 8 x 16 dot mode to the character.

1998/10/15
· Expiration date of beta version extended to the end of October.
- I chose to be able to choose whether to use the emulator when the emulator is connected.
- Fixed DCL that the default extension of the dialog when opening a color file was DCG.

1998/10/13
- Fixed that the clear code could not be set in screen preview.
- Fixed not checking the clear code by updating the screen window when editing the character.

1998/10/10
- Fixed communication that became wrong with actual machine.

1998/10/08
· Fixed that it was not possible to transfer the character of Bank 1 depending on the timing.

1998/10/06
· I made it possible to undo the mode change of 8 × 8, 8 × 16.

1998/10/01
· Expiration date of beta version is extended.

Sep. 25, 1998
· I made it possible to choose the 8 × 16 dot mode with objects.

September 21, 1998
- Fixed bug in processing at startup.
· Dialog of file open dialog was changed to DCG, DSC, DOB.

September 18, 1998
- Correction that the association between application and file type was wrong.
- Fixed not checking startup path.
· I opened an application by opening a file by opening it.

September 10, 1998
Added a dialog to associate objects with DCG files.
· I made it possible to designate bank 1 with objects.

September 8, 1998
- Added import function of BMP.

September 3, 1998
· I made it possible to select DOB by animation setting of object.
- Fixed an incorrect behavior when selecting a sequence in the animation setting of the object.

1998/09/01
- Fixed abnormal termination when adding with no object selected in the animation setting of the object.
- Fixed that selection of character did not become effective by color change.
· We checked the LPT 2 for the parallel port check.

August 31, 1998
Added an animation setting of the object.

August 21, 1998
· Change internal processing of paste from other applications via clipboard.
- Fixed that garbage appeared in the upper part when pasting from other applications via Clipboard.

August 20, 1998
· Changed default of used block of SCR to lower 2/3 same as conventional DMG.
· If the display on the OBJ's view is more than 5 times larger, the grid is displayed in dot units, if it is below, the grid in units of 8 dots is displayed.

August 18, 1998
· OBJ made it possible to specify the palette when in DMG / MGB mode.

August 11, 1998
· Added COL to import.
· Change processing at the time of application termination.

1998/08/10
- Fixed that abnormal termination occurs when trying to pass over the object window while dragging objects exceeding the number limit of objects.
· Fix to memorize that you did not memorize object preview setting.
- Fixed not transferring objects in preview.
- Fixed that editing by object was not reflected in preview in real time.

1998/08/07
· Updated help file.

1998/08/06
- Fixed that the warning was not issued when the number of objects exceeded the limit.
· We have displayed a border line on the object.

1998/08/05
- Fixed a problem with UNDO.
· Change of splash window.
- Added a color change tool button.
· Updated help file.
- Fixed that it was not possible to add a sequence when creating an object with a new creation.
- Fixed a bug that restores when the application is launched and when the file is not found when trying to open a DOB file from the MRU list, the application abnormally ends.

1998/08/03
· Fixed COL file can not be read by importing.
- Added color change function.

1998/07/31
- Fixed that screen block could not be set when SCSI was connected.
- It is also transferred even when changing the color palette.

July 30, 1998
- Fixed that it did not start normally on Windows 95.
· Added help file (provisional version) to installer.
- Fixed so that it was impossible to put the characters from 0x100 to 0x17f on objects.

July 29, 1998
· The beta version is changed by the end of August.

July 28, 1998
· We also made it possible to preview newly created documents.
- Fixed a bug that restores when the application is launched, and when the file is not found when opening the DSC file from the MRU list, the application abnormally ends.
· When changing the filename by saving the name of DCG, the link file name of the DSC or DOB linking that DCG is also changed together.

1998/07/24
· It made it possible to delete the sequence of objects.

July 23, 1998
- Fixed that you could not undo deleting an object.
· Displayed numerical value of selected color.

July 17, 1998
· Fixed forgetting to set the priority when pasting objects.
· Information on flip and priority is also displayed in the list of objects.
- Fixed that selecting objects were not displayed when reading saved data with object selected state.

July 13, 1998
- Fixed that the palette was wrong by importing CGX.
· Fixed cut and paste all pallets to 0.
- Fixed that pop-up menu does not appear when right-clicking when selecting when eyedroid mode is on.

1998/07/06
· Fixed incorrect display of priority.
- Fixed that the priority when placing the character on the screen was not correctly set.

1998/07/03
· We made it possible to change the priority of screen and object.
Added display of priority information in status bar.

1998/07/02
· We made it possible to see animation of simple objects with real machine. (SCSI only)
- Fixed incorrect behavior when sorting by object list.

1998/07/01
- Fixed that selecting the range of the imported character and undoing it will erase the selected part.
- Fixed that attributes can not be changed by selecting a range of imported characters.
· The palette also cleared to 0 when deleted on the screen.

1998/06 / 30
· The display of the clear code on the status bar was incorrect.
- Fixed a problem with processing when file could not be opened by opening the screen.
- It opened so that when the screen or object is opened, the associated character is not opened.

1998/06/29
· Change the display of the ruler to hexadecimal notation.
· I made it possible to remember the preview setting in the registry.

June 8, 1998
· Added function to change bank of selection range on screen.

June 8, 1998
- Fixed that there was a strange place in creating a new sequence of objects.
- Fixed that if there is a sequence in which no object is placed, subsequent sequences will disappear when reading.
- Fixed that the sequence name could not be mouse clicked on the list of objects.
· Partial arrangement of icons changed.
- Fixed that all characters on the screen are displayed as characters of the bank of the character that was placed at the moment when placing different characters of the bank on the screen.

1998/06/08
- Fixed a problem that occurs when objects are closed.

1998/06/05
· The state of the closed window is memorized.

1998/06 / 4
· The state at the time of exit is restored at startup.

May 28, 1998
- Bitmaps of other applications can be brought in via the clipboard. Reduction to 4 colors is incomplete

May 27, 1998
- The format of the clipboard at the time of character cutting and copying was set to the standard format.

May 28, 1998
- Fixed that the scroll bar of the list was wrong with the object's undo.
· We made it possible to change the order of priority of objects.

May 25, 1998
· Fixed stopping when choosing Delete palette when there is one palette.
- Fixed that the selected state remains in a strange place with object undo.
- When editing a newly created character, it fixes that the link will be created on the screen.

1998/05/22
- Added functions of undo and redo to objects.
- Fixed that the flip of the object could not be restored by opening the object file.

May 21, 1998
- Fixed that the undo of Attribute change on the screen was wrong.

1998/05/20
- Fixed that the color of the character being dragged becomes wrong when dragging after changing the attribute of the selection area on the screen.
- Fixed that editing with the tool just before returning to the selected state by undo etc. is canceled.
- Fixed that zoom mode could not be set during selection.

1998/05/19
- Fixed that range selection by screen attribute change was possible only in the positive direction.
· We made it possible to select multiple items using the shift key and control key in the information window of the object.

1998/05/18
· Internal processing addition to make additional selection possible.
· The character at the cursor position of the information window of the object is selected.

1998/05/15
- Fixed a bug when pasting on the screen
- Correct that the position of the cursor becomes incorrect when closing the sequence with the mouse in the information window of the object
· Since there were places left as ISCAD, it was fixed
- Fixed not grabbing when grabbing selected part of inactive window and immediately moving it

1998/05/14
· Fixed check of palette number was missing by loading color palette
· Fixed stopping when trying to delete color palette without color palette
- Fixed stopping when creating a new object and dropping the character
· I erased "Kana" in the status bar at startup
· ISCAD changed to IS-CGB-CAD (all registries, etc.)
- Fixed stopping when deleting all color palette
· I tried to show a splash window

1998/05 / 13
· Information on the selected object is highlighted.
· Displayed characters in information of objects
· Internal processing change of the information window of the object

May 12, 1998
- Fixed that attribute change of newly created DCG did not work
- Fixed color was wrong in 256 color mode
· Fixed a bad icon
- When loading color information from DCG, the name changed to dcl by extension is added by default
· DCL reading
· Color file output (DCL)

May 11, 1998
· Add color deletion
· Color information is recorded in the registry
· Added function to read only color information from DCG file
· I separated the color palette from the DCG

1998/05/08
· Add file icon
· Information on the object is displayed.

1998/05/07
- Fixed that another object could not be held when the object was selected
· Prioritized display of objects
· Add deleted object
- Fixed that display was wrong when pasting newly without deselecting
- Fixed that the limiter did not work when pasting with objects
- Added function to select multiple sequences with objects
· Changing to select the range forcibly when selecting while holding down the shift key in selection mode

1998/05/06
- Drag & drop between object windows was wrong
- Fixed that colors become strange when all objects are selected
- Corrected missing range check when multiple objects were selected
Added attribute change to object
· Added a function to flip selected objects
- Fixed that it got strange when pasting it when there is an object of selected state
- Paste on color palette was fixed

1998/05/01
· Addition of selection mode so that multiple objects can be selected
- Change color 0 so that it will be removed when dragging and dropping on objects

April 30, 1998
· Add drag & drop to object
· Add save and load to the object
- Fixed that selection was not canceled even if tool was changed to attribute
· Fixed tool to be selected when undo, redo has selected state

April 24, 1998
· Attribute change added to editing tool
· Changing the place of the character which does not exist on the screen to display the information of that square
· Fix to update screen when character is closed
· Corrected so that even circle of circle can be drawn

April 23, 1998
· Added import of SCR
· Fixed to update DCG when the associated screen is already open when opening it
- Fixed that inversion was supported by updating the screen when DCG was modified
· Fixed wrong place in DSC assembly
· Change selected state to save
· Also select the character and change the attribute with the right button

April 22, 1998
· Screen undo change
· Fixed selection range was cleared when undoing and deselecting immediately after selection
· Displaying only the selection frame of the active view is stopped and basically all the selection frames are displayed.
· Only when two or more views are opened in the same document, those who last activated
Changed to display selection frame
· The selected 8 × 8 mode and the state of the selected tool are saved
· Corrected incorrect processing when editing after importing
· Added attribute change to screen
- Fixed that garbage of 1 dot width appeared on the right and bottom of the screen
- Fixed that the width was 1 dot larger when dragging and dropping from the screen to the character

April 21, 1998
· You can move the cursor key to undo
- Fixed loading of undo twice at drag & drop
· Fixed forgetting to clear the buffer at redo
- Move selection frame and selected bitmap to document (internal processing)

April 20, 1998
· Change how to undo buffer
- Fixed that ModifiedFlag was wrong
· I lost the flicker at drag & drop
- Fixed that garbage of 1 dot width appeared right and down
- Fix to make it the same as pasting the image when dragging the scaled selection area

April 16, 1998
· Added functions that were not transferred by internal process change

April 15, 1998
- Fix not to be able to choose flip and rotation when not selected
- Move selection frame and selected bitmap to document (internal processing)
· Undo change of character
· Fixed initializing attributes with Dcg loading

April 14, 1998
- Fixed not to open already open file
· Masking attribute with 0x3 when reading Dcg was changed to 0x7
· Rotation in 90 degree increments
- Fixed forgetting to drop flag with paste
· Undo function added to screen

April 13, 1998
· Reduce heavier link between character and screen
· Preliminary preparations to make it possible to check actual equipment in real time
· Flip selection
- Fix to make it the same as the image when the display of scaling is actually pasted.
· Preview on real machine
· I tried not to let out the DOS prompt appearing in the preview
- Fixed incorrect range to redraw when deselecting
```
