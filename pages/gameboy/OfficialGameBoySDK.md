---
title: Official Game Boy Software Development Kit (by Intelligent Systems)
layout: post
permalink: /official-gameboy-software-dev-kit/
tags:
- nintendo
- gameboy
- sdk
image: /public/NintendoGameBoyThumb.png
thumbnail: /public/NintendoGameBoyThumb.png
breadcrumbs:
  - name: Home
    url: /
  - name: Nintendo Gameboy
    url: /gameboy
  - name: Official Game Boy Software Development Kit (by Intelligent Systems)
    url: #
recommend: 
- gameboy
- sdk
editlink: /gameboy/OfficialGameBoySDK.md
---

# Official GameBoy Software Development Kit
The official gameboy development kit was developed by Intelligent systems and sold with their development kit hardware such as the `DMG-ICE`. It evolved over time and added support for the Gameboy Color eventually becoming the SDK shipped with the `IS-CGB-EMULATOR` hardware.
{% include link-to-other-post.html post="/gameboy-development-kit-hardware/" description="For more information on the development hardware check out this post." %}

## Download the SDK
You can download the Japanese version of the Gameboy Color SDK from emuparadise here: 
[https://www.emuparadise.me/sdk/](https://www.emuparadise.me/sdk/)

I'm not sure there ever was an english version of the Official Intelligent Systems GameBoy Development Kit.

If you needed support back in 2000 you could have emailed the official SDK support: `DMG-Support@intsys.co.jp`.

## Intelligent Systems Assembler (ISAS)
To assemble your GameBoy source code into Z80 machine code you could use the official Nintendo (Intelligent Systems) assembler and linker, ISAS and ISLK respectively.
*Last Known Version*: ISAS 1.26 / ISLK 1.26 (1999/10/26)

---

## Intelligent Systems eXecutable - ISX and CVTISX 
ISX is the format that the Assembler (ISAS) compiles the programs into, it is a compressed version of the rom, to convert it into a standard gameboy rom you need to run it through CVTISX (ConvertISX).

---

## Intelligent Systems Character Designer (IS-CGB-CAD or DMG-CAD)
The archive only seems to contains the "IS-CGB-CAD" tool, which I presume is some sort of graphics/map editor. Graphics, Sprites and Tiles are known as "characters" for the GameBoy. 
Its known as a Character development system.
So I presume it stands for Intelligent Systems Character A??? Designer or Development

---
## Others
```
IS-CGB-CHARACTER Documentation.7z  IS-CGB-SDK.7z
IS-CGB-CAD.7z        IS-CGB-DEBUGGER.7z
IS-CGB-CHARACTER.7z  IS-CGB-EMULATOR.7z
```
---
# Change History

### ISAS Change History
The Intelligent System Assembler has evolved over time and this is the latest changelog available:
```
10/26 ISAS 1.26
· Unification of revisions

10/06 ISAS 1.25.4
- Fixed a bug that does not correspond to expression in parentheses ")" does not result in an error.
- Fixed a bug in which preprocess directives are processed even in comments.
· Since the last calendar year display of the listing is the last two digits, it changed to 4 digits. Corresponding to 2000 years.

06/24 ISAS 1.25.3
· Fixed a bug that db LABEL1.LABEL2 will not result in an error.

06/23 ISAS 1.25.2
• When the "*" location is used in the if directive, the location of the previous line
Fixed a bug that will be evaluated in status.

06/23 ISAS 1.25.1
- Fixed a bug which is not defined at listing only for the symbol specified by -D.

05/25 ISAS 1.25.0
· There is no error check for all instructions with no operand in ISDMG
Fixed a bug.

03/05 ISAS 1.24.23
· Db LABEL1.LABEL2 and other bugs that do not result in errors even if the period is incorrectly placed
Fix.

03/04 ISAS 1.24.22
· If there are many groups in one module, the output records to be listed
Fixed a problem that overflows.

02/22 ISAS 1.24.21
· The group's upper limit was increased from 128 to 1024.
- Fixed a bug that does not display an error when exceeding the group limit.

02/18 ISAS 1.24.20
• Increase the include path buffer size from 4096 bytes to 8192 bytes.

02/10 ISAS 1.24.19
• When the external reference symbol is included in the operand of bit / set / res instruction in ISDMG mode,
Fixed a bug that an exception error occurred on ISLK side.
- Fixed a bug that handled "\" as a literal character in macro from 1.22c.
When writing a newly added MLITERAL quasi directive "!" Becomes a normal character
, And "\" is treated as a literal character.
To return to the past, write "MLITERAL OLD".
The default literal character is "!" As before.

01/26 ISAS 1.24.18
- Fixed a bug that warnings are not output by db $ 100.
(This warning appears at -w 3 designation.)

01/13 ISAS 1.24.17b
- Fixed a bug that "DMG_OPT_n ()" for debugging is displayed on the screen.

1999/01/13 ISAS 1.24.17a
· To solve the single quart problem of 1.24.16,
'B ->' byte
'W ->' word
'X ->' xword | 'bword
'L ->' lword | 'dword
change to. However, for conventional ones ('b |' w | 'x |' l)
"WARNING old style, like warnings like ['b ->' byte]"
I made it output.
· (0) Fixed bug that ';' behind 'hi does not work properly.
· Added preprocessor functions strlen (s1) and stridx (s1, c1).
Strlen (s1) ... s1 Gets the length of the string.
Stridx (s1, c1) ... s1 Gets the position of the c1 character in the string.
If not found -1
- Fixed a bug that does not correctly use LIB when using LIB in macro.
· Even though an error occurred, the exit code was interrupted at 0
Fixed a bug.
- Fixed a bug that def definition pseudo-instruction definition was lost when listing.
· When looking forward with the DS pseudo instruction, an error message with a different nuance
Fixed a bug that came out. (Undefined Symbol error occurs)
· There is a problem that does not work well when using preprocessor function for multiplexing. (To be fixed)

11/26 ISAS 1.24.17
- Fixed a bug that '1' would result in an operand mistake in 1.24.16.

11/18 ISAS 1.24.16
· Even though it is enclosed in single quotes like 'db'; ', a blank
If there is a semicolon afterwards, comment and semicolon at preprocess
A bug which makes judgment turned out. In the meantime, the single item that follows the formula item
If even one character within "1234 bwxl" after quotation came, it is determined to be an operator,
Otherwise it was fixed to judge it as a quoted character.
This problem can be solved by changing the single quote enclosing the character string to double quotes
The problem disappears.

11/17 ISAS 1.24.15
· In isdmg compatibility mode, use cp label / 2 etc. to set the upper 16 bits of label
Evaluate the bank information later and exit WARNING of Range Over
Fixed a bug.

11/16 ISAS 1.24.14
- Fixed a bug that the EOF of the source file was mixed in the listing file.

11/13 ISAS 1.24.13
· Fixed a problem that if $ 10000 becomes true at evalbits at 16 o'clock.

11/09 ISAS 1.24.12
· Fixed embags mixed in from 1.24.10.
Operand data is lost in AND / OR / XOR, or critical-error occurs
Fixed a bug that caused it.

11/05 ISAS 1.24.11
· When you write "% $ FF" etc in the macro parameter, after evaluating $ FF,
The default hexadecimal notation is "FF", but this is
Since it is incompatible with the past, it was modified to be four digits "00FF".
(Preliminary Notice 1: MRADIX default is scheduled to change from 16 to 10.
If you have problems with the future, explicitly describe it and avoid it
I am pleased to have few troubles. Of course, when the -isdmg / -is65 option is specified,
I set MRADIX 16 as before. )
(Announcement 2: "%" in a macro definition other than the macro parameter also
Currently, it is an evaluation arithmetic prefix, but because these also compromises compatibility,
We will prepare a pseudo instruction to turn it ON / OFF. )

10/23 ISAS 1.24.10
- Fixed a bug that warning will be issued if AND ~ $ 80 in ISDMG mode.
For the SUB / CP / AND / OR / XOR instruction, check the range of -128 to 255
I had gone, but since AND / OR / XOR has no meaning, I removed it from the check.

10/22 ISAS 1.24.9
· Even if you describe "#% 1100 _ 0000" etc in the macro reference parameter,
% Is used as the evaluation symbol for the macro parameter and the subsequent digit is decimal value
A bug that evaluates and replaces it with a hexadecimal character string of A7D8C0
was. % Appearing except for the beginning of the parameter character is treated as an evaluation symbol
I fixed it like it did not.

10/15 ISAS 1.24.8
- We changed warnings when redefined to error.
· Fixed a bug that was interpreted as LD A, ((0) + (0)) when LD A, (0) + (0) in ISDMG

10/05 ISAS 1.24.7
· Debug information filename with -dsrc-rel option and relative path
Improve as you can specify. (When source line debug can not be done well,
Please use it. )

09/29 ISAS 1.24.6
- Fixed a bug that the address shifted by +4 with the jr instruction (self relative address) in isdmg.
(1.24.5 embag)

09/25 ISAS 1.24.5
· Fixed bug that if / else / endif etc. will be output with ndspif pseudo instruction.
- Fixed deviation of LINE column position when listing isdmg.
· When isdmg specifies evalbits 16 and the address is $ 8000 or more,
The correct address can not be obtained by sign extension (1.21 g)
Fixed a problem causing range over.

09/21 ISAS 1.24.4
· When the prefix of "_" local symbol is used for GROUP label,
Fixed not to be treated as local symbol.

09/17 ISAS 1.24.3
- Fixed a bug that "a.s" is in the parent directory and can not be read with lib ../a.
- The def quasi directive line is modified not to expand macros by def.
- Fixed that defined (...) and ifdef ... do not expand macro by def.

09/14 ISAS 1.24.2
· Fixed a bug where listing started with TAB size specified last by TAB pseudo instruction

09/10 ISAS 1.24.1
· When BINSET specifies a size exceeding the file size,
Fixed bug that can not be read correctly.
(It was OK if it was a multiple of 8192.)
· Fixed to eliminate by TAB pseudo instruction or to specify an error value less than 0.
· In the macro definition, if there is a comment ";" after the parameter, the comment also
Fixed a bug that misrecognized as a parameter.

09/04 ISAS 1.24
· The TAB pseudo-instruction makes it possible to specify the TAB size of the listing.
· We made group push / pop possible with · .GROUP <group-name> .. .. quasi directive.
· The ndspif pseudo instruction prevents if / else etc from appearing.
· Strcmp (s1, s2) / strncmp (s1, s2, n) / stricmp (s1, s2) /
Added strnicmp (s1, s2, n).
· Add left (s1, n) / right (s1, n) / mid (s1, n, m) as preprocess function.
· Added defined (s1) as preprocess function.
· Do not replace the macro definition with the character string defined by the def quasi directive.
Likewise, preprocess functions are not replaced during macro definition.
Fixed to expand only when referring.
· It is now possible to give macro names to ifdef / ifndef and defined ().
- Fixed a bug that an error message was output to the console at the time of listing.
I put an error message in the listing file.
- Fixed bug that listing was not output on error.
However, if it is interrupted by Too many error, it will not be output.
- The ERR / WARN quasi directive has been added for debugging that arbitrarily outputs errors and warnings.

08/13 ISAS 1.23e
· The file name of the debug information is always given as a full path.
· Added ASSERT quasi directive.
(IS-OBJECT FORMAT 1.09 AssertRecord addition)

07/08 ISAS 1.23 d
· When 0 is specified with the PAGE quasi directive, the number of lines per page is treated as infinite,
Improve to not output the page header after the first header.

07/06 ISAS 1.23c
- Fixed to be able to handle hexadecimal notation of $ other than 0x by option - s / - b / - m.
(Originally, using "$" other than the symbol definition option (-D)
It is not beautiful. )
- In the -isdmg compatibility mode, we set the IS65 BIN mode by default.

07/03 ISAS 1.23b
· The debug information output option was output from -g or -G
We strictly enabled only the -g option.
· Whether the symbol definition option could be defined with either -D or -d
We strictly enabled only the -D option.
· Make a mistake in 1.23a to return the macro name to always treat it with capital letters.
(Opcode field has no distinction between uppercase and lowercase letters)
Note that the parameters of the macro are changed according to the capson / capsoff / small quasi directive
It is designed to be switched.

07/01 ISAS 1.23a
· According to the capson / capsoff / small quasi directive that the macro name was always handled in capital letters
Fixed to be switched.

06/30 ISAS 1.23
· Add the quasi directive "MRADIX <radix>".
Whether the radix after evaluation of the value by the "%" symbol in the macro is hexadecimal or decimal
It is decided.
(This MRADIX parameter accepts only 10 or 16.)
By default, it is 16 (decimal).
· MRADIX 16 was applied when -is65, -isdmg compatibility option.
· -I <include path> If you write multiple options, only the last -I
Fixed bug that did not become valid.
· Since it is easy to make mistakes as -I <xxx> and -l (listing), -l (listing)
The option has been changed to -list.

06/22 ISAS 1.22e
· In the ld instruction in isdmg mode, even with a different 0x ?? ff ?? address of the bank
Fix to optimize for 2 byte op code.

06/17 ISAS 1.22 d
· On bank group, if the bank of group is not 0, it is by even
Fixed bug that alignment failed.

06/17 ISAS 1.22c
· In the display of the value set by equ and = directive in the listing, the column
Fixed a bug that position shifted.
· Warning of Operand is misleading which is checked at -w 3 at isdmg
Fixed a bug that the ld command was output twice.

06/15 ISAS 1.22b
· Enable hexadecimal numbers starting with 0x for the -s option, etc., in the 32-bit environment
Changed the default value.
(- s 4091 -> 65521 - - b 16384 -> 32768 - - m 512 32768 -> 4096 65536)

06/08 ISAS 1.22a
· With other than is65, operation using "*" with equ or = pseudo instruction failed
Fixed a bug.

06/08 ISAS 1.22
· Fixed bug that "ld a, (expr), a" was not set as error with DMG instruction.
- Improved to display the value set by equ and = directive in the listing.
· Changed Intelligent Systems to INTELLIGENT SYSTEMS.
· After ELSE, fixed a problem that no error occurred even without ENDIF.

06/04 ISAS 1.21k
· Even pseudo instruction was enabled 8, 16, 32, 64 other than 2, 4 byte alignment.
(It may be changed to the ALIGN pseudo instruction in the future)

06/03 ISAS 1.21j
· Even if there are blank spaces before and after commas in operands with DMG instruction, they are correctly recognized
Fix it.

06/01 ISAS 1.21 i +
· Change of logo message.

05/07 ISAS 1.21i
- Fixed a bug in which the last option of the environment variable ISAS becomes invalid.

05/06 ISAS 1.21h
· It is confusing that ISDMG ld hl, ($ 1234) implicitly becomes ld hl, $ 1234,
As warning level 3 [-w 3] is specified, Operand is misleading warning is issued
Fix.
- Fixed a bug that caused a fault if the environment variable ISAS was specified.

04/27 ISAS 1.21 g
- Fixed bug that range information was not output correctly with ISDMG.
· Fixed range over that occurs when evalbits is specified.
- Fixed a bug that does not output correct address by self relative instruction.
Added -isdmg option. (isdmg, onbankgroup, offpolish, evalbits 16)

04/24 ISAS 1.21 f
· The range check range of 1-byte operand of ISDMG was 0 to 255
Changed from -128 to 255.

04/22 ISAS 1.21e
· When using the errtag quasi directive, redirect error display that is also output to the screen
Fixed bug that can not be done. (unix only)

04/21 ISAS 1.21 d
· When errtag pseudo instruction is used on xterm, an error is displayed in other xterm (ttyp 0)
Fixed defects. (unix only)

04/17 ISAS 1.21c
· Improved not to range check for 2 byte operand with LD instruction in ISDMG
Positive.
· No matter how much WARNING goes out, I never interrupted by error.
· Labels can not be defined due to overflow of symbol table or duplication of labels
When local symbols frequently become redefinition errors when
Fix.
· When macro macro character literal character "!" Is present at the end of macro definition
Fixed a bug that the macro definition was wrong.
· Evaluation of macro parameters Fixed bug that development prefix "%" was not functioning
Positive.
· Evaluation at macro expansion When the result of prefix "%" is "$ xx" is "xx"
Corrected to (decimal).

04/13 ISAS 1.21b
· Optimize that the LD instruction in the ISDMG is in the old LD / LDX format with one LD instruction
Fix to make it.

02/13 ISAS 1.21a
· Improved to display file name when temporary file could not be generated

01/26/98 ISAS 1.21
- Fixed a bug that caused ISDMG to fault.

05/20 ISAS 1.20 d
· Activated the space before and after operand "," etc with is65.

04/30/97 ISAS 1.20c
· A bug that was ignored even if there is an illegal character string at the end of the operand in is65
Fix.

08/21 ISAS 1.20 b
· Fixed a bug that upper and lower bytes do not change when DD pseudo instruction is unresolved

07/24 ISAS 1.20a
· Fixed a bug that destroy memory on the stack when using .comm pseudo instruction.

04/23 ISAS 1.20
· Dealing with the problem that part of the source line information is lost in the debugger.

04/18 ISAS 1.19e
· Change the error message tag. ("% s:% d:" -> "% s:% d:")

04/17/96 ISAS 1.19 d
· Because the behavior of BINSET / LIBBIN is different from IS 65, switch the mode ISASBIN
/ IS65BIN pseudo-instruction addition.
· Changed so that "!" May not be included in operand of CALL instruction in issnd mode
· Fixed not to output unnecessary source line information.
· Change the error message tag. ("% s (% d)" -> "% s:% d:")
· Uniquely name the temporary files so that they do not overlap on the network

08/24 ISAS 1.18a
· Fixed a bug that left output file when processing was interrupted with Too Many Errors
Positive.

07/06 ISAS 1.18
Added -I option to set include path.
· "EXTERN A, B" is okay but like "EXTERN A, B" blank after the comma
Fixed a bug that caused an error when inserted.

04/28 ISAS 1.17 g
· Added -norange option. Range information is no longer included in the object.
However, since the range information is added at the time of linking the pseudo instruction comm, the ISX file
In IS you can not completely remove the range information in IS.
This option, if the total number of ranges exceeds 65535, unrelated module
It is provided to exclude the range information of the le.

04/27 ISAS 1.17 f
· In is65 mode, absolute addressing of the forward reference ensures the org on the spot
Fixed a bug that caused Out of range when it is fixed.
- Add reserved name "M_ @ ARGC" for referring the number of macro parameters in the macro
It was.

04/08 ISAS 1.17e
· In the is65 mode, if the label of the operand of the jml instruction is forward reference or unresolved,
Fixed a bug that became a rar.
- The buffer size when not using DOS 4 G was changed from 16 K to 1 K.

04/07 ISAS 1.17 d
· Listing at instruction expansion is displayed.
· When the 'lo' operator is added to the unresolved label at the time of instruction of and / or / xor instruction, 2
Fixed a bug that caused faults with eyes.

03/30 ISAS 1.17c
- Fixed a bug that "lda a, # a" passed in is65 mode.
· The warning level when redefining macros was changed from 2 to 3.

03/23 ISAS 1.17a
· Non-public label aligned under other groups' even in the file forward
Fixed a bug where referenced addresses can not be generated correctly.

03/09 ISAS 1.17
· Instruction expansion suppressor at the beginning of the operand field of V810 is set to '/' and '.'
Fix.

02/16 ISAS 1.16 g
`?` Is valid for symbols.
· The redefinition became possible with the def quasi directive.

02/14 ISAS 1.16 f
· The def pseudo instruction can be redefined.

01/31 ISAS 1.16 d
· Fixed a bug that the comm pseudo instruction and the public symbol do not match.
· To warn about collision of registers at instruction expansion by rsvreg pseudo instruction of V810
did.

01/19 ISAS 1.16b
· Force passing labels that are too long - add longlabel option.

95/01/18 ISAS 1.16a
Added comm pseudo-instruction for shared area definition.
· Changed the output format of debugging information.
· Added the ASSUME pseudo instruction and its error check for SPC700.

12/12 ISAS 1.16
- Fixed a bug that semicolons could not be used in character constants.
- Fixed to cause an error if even is before group.
- Fixed a problem that the range for DS was not output.
· The hole of even is made not to fill with 0.

11/30 ISAS 1.15 t
· Lprefix '' (blank) makes it impossible to use local symbols.
- Fixed a bug in dbscope / dbivar / dbtype.

11/21 ISAS 1.15p
· Even if the initial letters are numbers in the check of the replacement label in the macro, the label token
Fixed a bug that I regarded as.
· Added dbscope / dbivar / dbtype quasi directive for inspect function.

11/07 ISAS 1.15 n
· Do not replace when the head of replacement label in macro is aligned with "#"
Fixed a bug.
In case
11/02 ISAS 1.15 m
- Fixed a bug that "#" could not be used for labels and a bug where "%" could be used.
· If an externally referenced label is installed between GROUP and EVEN, correct link
Fixed bug that can not be done.
· Prefix defined with LPREFIX and prefix of local label in macro expansion
Fixed a bug where fixes do not match.

10/19 ISAS 1.15j
- Fixed that there was an error in the method of canceling the assume pseudo-instruction of V810.
· It is now possible not to expand the label field by def macro expansion.
· Changed the -d option to -D. (It may be -d)
- The inoperability of the even pseudo instruction at the head of the unresolved group was corrected.
(even after the group directive adjusts alignment at link time,
even other than immediately after the pseudo-instruction is adjusted at assembly. )

10/6 ISAS 1.15 f (from ISAS 1.15)
· Bank information was not added to the second pass location when onbankgroup was specified
Fixed bug fixed
· Instruction expansion for unresolved symbols that are not externally referenced by the ld / st / in / out instruction of V810
Fixed a bug that did not do.
· Fix to prevent instruction expansion when assume processing is performed with ld / st / in / out instruction of V810
· -g option disclosure
· Strict numerical check.
(Fixed a problem that 7f is judged to be 7 and no error is given.)
· Error message was strictly matched with manual.
```

### ISLK Change History
```
10/26 ISLK 1.26
· Fixed a bug that does not correspond to parentheses close ")" in the expression.

07/14 ISLK 1.25.2
· If there is a module with the EVALBITS quasi directive embedded in the middle, the second pass
Fixed a bug that EVALBITS is handled in 32 without first module.
· Added -w bank-over = 16k option for DMG. = 32k or = 64k explicitly
It is now possible to specify.

06/23 ISLK 1.25.1
· If using the comm quasi directive, an error indicating that the number of groups has been exceeded
Fixed a bug that may occur.

05/25 ISLK 1.25.0
· I upgraded only version according to ISAS.

03/19 ISLK 1.24.6
· If a case-insensitive module is included, at warning
We improved to display a list of that module.

03/04 ISLK 1.24.5
· It corresponds to ISAS 1.24.22. (I raised the upper limit of the record)
· The upper limit of the number that can be specified with the -G option and the -D option was 256
It increased it to 1024 pieces.

02/22 ISLK 1.24.4
· The group's upper limit was increased from 128 to 1024.
- Fixed a bug that does not display an error when exceeding the group limit.

1999/01/14 ISLK 1.24.3
· When the number of object files exceeded 128, there was a bug in which memory was crushed
So you can increase the upper limit of the specifiable object file name from 128 to 512
Then I added a maximum check.

11/17 ISLK 1.24.2
· Since it makes it difficult to understand the meaning of the -x24 option, change it to -isx-old.
(-x24 is left for once)

09/24 ISLK 1.24.1
A message when the file version is old ("[...] old version.")
As it was obsolete, we fixed it to "[...] object file version is old."

09/04 ISLK 1.24
· -map [= mapfile] Output map file with option.
· Groups with size 0 are conflict (conflict) with other groups
Fixed a bug that warns about.

08/13 ISLK 1.23e
· As ISAS's ASSERT pseudo-instruction is added, ISLK side can also warn you
It improved.
(IS-OBJECT FORMAT 1.09 AssertRecord addition)

07/06 ISLK 1.23c
· The option -s / -b fixes hexadecimal not to be 0x except $.
(Originally, to use "$" except for the symbol definition option (-D / -G)
It is not beautiful. )

07/01 ISLK 1.23a
· I combined version with ISAS.

06/30 ISLK 1.21
· Added - L <lib - path [; ...]> option, environment variable ISLIB = lib - path [; ...].
Improved to search object files from the search path.

06/15 ISLK 1.20 b
· Hexadecimal numbers starting with 0x are enabled for the -s option.
· The default values ​​of the -s option and -b option have been raised.
(- s 4091 -> 65521 / - b 16384 -> 32768)

06/10 ISLK 1.20a
· For the option -G and -D only, lower case letters -g and -d were permitted from the viewpoint of consistency
It was abolished from.
· When options requiring parameters are described at the end without parameters,
Fixed a bug that caused an exception.

06/08 ISLK 1.20
· The version was revised according to the release of DMG version.
· Changed from Intelligent Systems to INTELLIGENT SYSTEMS.

06/01 ISLK 1.15k +
· Change of logo message.

04/17 ISLK 1.15 h
· No matter how much WARNING goes out, I never interrupted by error.

02/13/98 ISLK 1.15 g
· Improved to display file name when temporary file could not be generated

ISLK 1.15 f
· Fixed a bug that upper and lower bytes are not swapped with DD pseudo instruction

07/02 ISLK 1.15e
· Bankover check at ds pseudo-instruction was not done with -wbank-over
Fixed a bug.

04/18 ISLK 1.15 d
· Change the error message tag. ("% s:% d:" -> "% s:% d:")

04/11/96 ISLK 1.15 c
- Fixed a bug that destroyed memory when outputting debug information.
· Change the error message tag. ("% s (% d)" -> "% s:% d:")
- Fixed a bug that caused the overlap check to be caught when group area is 0.
· Uniquely name the temporary files so that they do not overlap on the network.

9/28 ISLK 1.14c
· The end address of the group decreases, and incorrect range information is output.
Fixed.
- Error message when groups that violate the scope of the group are found is set as a day
It made it correspond to this word.

09/20 ISLK 1.14 b
- Added a function to check if there is a group infringing the scope of the group.
However, only the group addressed with the -G option.

08/24 ISLK 1.14a
- Fixed a bug that two identical errors were found when no symbol was found.
· Fixed a bug that left output file when processing was interrupted with Too Many Errors
Positive.

05/16 ISLK 1.14
· When the -X24 option is attached when the range information is output, the range temporary
Fixed a bug that failed to load the file.

04/28 ISLK 1.13 f
· When the range information exceeds 65535, forcibly set to 65535 and output a warning
.

04/13 ISLK 1.13e
- Fixed a runaway bug that could not be removed with 1.13 d.

03/30 ISLK 1.13 d
· Fixed a bug that runaway if type information of C language debug information had recursive definition
· Label display of error message when group is not defined was wrong
Fixed a bug.

03/27 ISLK 1.13b
· When filling in a specific numerical value with the DS pseudo instruction, fill it with the correct value
Fixed no bugs.

03/23 ISLK 1.13a
· Non-public label aligned under other groups' even in the file forward
Fixed a bug where referenced addresses can not be generated correctly.

03/09 ISLK 1.13
- Fixed a bug that source line information becomes abnormal due to matching.

02/16 ISLK 1.12e
`?` Is valid for symbols.

02/14 ISLK 1.12 d
· Since the block size of the source line information of the ISX file was abnormal,
Fixed a bug that could not be skipped correctly in the debugger.

01/31 ISLK 1.12c
· The label reserved by the comm quasi directive and the address of the ordinary public label are incompatible
Fixed bug fixed.
· When debugging information of C compiler is issued, an illegal record type error is output
Fixed bug.

01/24 ISLK 1.12b
· Fixed a bug where type information was not correctly arranged.

01/18/95 ISLK 1.12a
· ISAS ver 1.16a compatible version

12/12 ISLK 1.12
· ISAS ver 1.16 compatible version
· If the version check error message of the object file is
It was a mistake with the error message when it was not a project file
Fixed a bug.
· The hole of even is made not to fill with 0.

11/30 ISLK 1.11 l
· Do not attach headers when -X24 option is specified.

11/21 ISLK 1.11j
· Add 32 byte header to ISX. With this, with a debugger after ISD / W 1.10 g
I can not read it, but you can also read to SHVC with the -X24 option
It can output ISX file.
· The blocks 20 and 21h of the ISX file are block number (1) + length of data (4) + data
Unified to (data length).
· ISAS ver 1.15p compatible version

11/02 ISLK 1.11 g
· ISAS ver 1.15 m correspondence version

10/18 ISLK 1.11 f
- Alignment adjustment just after group became possible.
· Changed the -d option to -D. (It may be -d)
· Changed the -g option to -G. (may be -g)

9/30 ISLK 1.11 c (from ISLK 1.11)
· The output destination of error output can now be changed with -e [filename].
· Improved to issue a warning if linking modules with unconditional capson / off
did.
· When it is not within the displacement range for assume of V810, it is warned with error
I tried to tell you
· Error message was strictly matched with manual.
```

### CAD Change history
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
