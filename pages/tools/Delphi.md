---
layout: post
tags:
- tools
- delphi
- software
- reverseengineering
title: Delphi Decompilation and Reverse Engineering
category: tools
permalink: /delphi
breadcrumbs:
  - name: Home
    url: /
  - name: Retro Game Development Tools
    url: /tools
  - name: Delphi Decompilation and Reverse Engineering
    url: #
recommend:
- delphi
- tools
- software
editlink: /tools/Delphi.md
updatedAt: '2026-07-18'
placeholderimages:
  - /public/images/Delphi/Game-Developer-October-November-1996-Delphi-DirectX.jpg
---
<!-- cspell:disable -->
Delphi decompilers are a useful special case in native-code reverse engineering.
A stripped C or C++ executable may leave a reverse engineer with little more than machine code, imports, strings, and whatever symbols survived the build.
A Delphi application can preserve a much richer set of language and framework artifacts.

That does not mean Delphi can be perfectly decompiled back into the original Pascal source.
It means the binary often keeps enough class, form, package, and runtime metadata to reconstruct a useful map of the program.
For old Windows game tools, editors, launchers, installers, and some games, that can be the difference between a wall of anonymous native code and a recognizable application structure.

---
# Why is Delphi useful for game reversing?
Delphi was not just used for business software.
It also appears in game-adjacent Windows software: editors, launchers, installers, content tools, hobby game engines, and some full Windows games.

[Game Maker](/game-maker) is relevant because early versions of the IDE and Game Runner were written in Delphi before later rewrites.

Some commercial Windows games such as `Zombie Wars` were also written in Delphi.
You can find out more about that game in the post on [Krome Merkury Engine](/krome-merkury-engine).

## Delphi at CGDC 1996
Delphi also appeared in at least one game-development conference context.
At the 1996 [Computer Game Developers Conference](/gdc), Charles Calvert and Lar Mader from Borland International presented a session called "Using COM to Develop Games in Delphi and Borland C++" [^12].

That is worth noting because Delphi is more often remembered as a Windows business and tools language than as part of game-development history.
The session title suggests Borland was positioning Delphi alongside Borland C++ for Windows game development patterns such as COM-based integration.
Calvert's later [Game Developer magazine](/magazines) article, ["Delphi Does DirectX: Using Encapsulated COM Objects"](https://media.gdcvault.com/GD_Mag_Archives/GDM_OctNov_1996.pdf), gives useful context for what that CGDC session may have covered.

---
## Delphi in Game Developer Magazine
![Game Developer magazine October 1996 - Delphi goes DirectX](/public/images/Delphi/Game-Developer-October-November-1996-Delphi-DirectX.jpg)

The magazine article is built around a Delphi component called `TSpeedDraw` and a COM interface called `ISpeedDraw`.
`TSpeedDraw` wraps DirectDraw setup behind component properties and events, including bitmap loading, 640-by-480 display setup, exclusive-mode switching, timer-driven page flipping, and drawing through a `PaintProc` event.
The example then adds a second bitmap surface as a simple sprite, blits it onto the background, and uses Delphi exceptions to handle DirectDraw errors.

The most relevant part for the CGDC session title is the C++ integration path.
Calvert shows the same Delphi code conditionally compiled so `TSpeedDraw` can descend from an `IUnknown`-style base instead of `TComponent`.
In that mode the Delphi object can be served from an Object Pascal COM DLL, and a C++ program can obtain it with `CoCreateInstance`, initialize it through COM-compatible methods, call `Run`, and release it like a normal COM object.

That does not prove the session had the same structure, but it matches the session title closely enough to make Delphi component wrappers for DirectX or other COM-based game APIs a plausible focus.
The issue's editorial also framed the article as a rare attempt to make a serious case for Delphi in game development, at a time when Game Developer saw C and C++ becoming the default because of contemporary Microsoft and Apple game SDKs [^14].

Calvert later became one of the best-known Delphi educators and authors, and Embarcadero published a [remembrance of him](https://blogs.embarcadero.com/charles-charlie-calvert-developer-educator-and-a-thoroughly-decent-man/) after his death in 2025 [^13].

---
# Why Delphi is recoverable
Delphi-specific recovery works because Delphi applications carry a lot of structured metadata.
Every Delphi object instance begins with a pointer to its class virtual method table, and the runtime data around that class can expose type information, field tables, method tables, class names, parent class relationships, and instance size [^1].

Visual applications add another layer.
VCL and FMX forms can be stored as DFM or FMX resources, which describe component trees, properties, and event handler names [^2].
Published members also generate RTTI, because Delphi needs that metadata for form streaming, Object Inspector support, and dynamic property access.

That gives a Delphi-aware decompiler several footholds:
* **Class metadata** - VMT and RTTI records can identify classes, inheritance, method tables, and sometimes field or property information.
* **Form resources** - DFM and FMX resources can recover windows, buttons, controls, component names, properties, and event handler bindings.
* **Packages and units** - BPL, DCP, and DCU artifacts can retain package, unit, interface, and symbol information that ordinary executable code no longer exposes [^3].
* **Optional debug artifacts** - Map files, RSM files, and other debug outputs can preserve names, line information, and symbol tables when they survive alongside the binary.

The result is structural recovery rather than magic source recovery.
A Delphi tool can often tell you that a button calls `TMainForm.Button1Click`.
It may not be able to reconstruct the exact Pascal statements originally written inside that method.

---
## A small form example
The reason Delphi tools care so much about published members is easier to see in a tiny form class:

```pascal
type
  TMainForm = class(TForm)
  published
    Button1: TButton;
    procedure Button1Click(Sender: TObject);
  end;
```

In a typical visual Delphi application, this one class can leave several independent reverse-engineering hints.
The form resource can describe `Button1`, its position, caption, and event property.
RTTI can expose the published field and method names.
The class VMT can identify `TMainForm` and its parent.
The event binding can connect the visual control to `Button1Click`.

That is why Delphi decompiler history is not only about instruction lifting.
It is also about mining the metadata that Delphi deliberately emits so the runtime can load forms and bind components.

---
# The first generation
The first generation of Delphi decompilers was optimistic.
The tools tried to reconstruct something that looked like a Delphi project or Pascal unit, even when method bodies had to remain as assembly.
The long-term lesson was that Delphi was unusually tractable, but not reversible.

## Revendepro
![Revendepro Delphi Decompiler](/public/images/Delphi/Revendepro-Decompiling-Program-Dialog.jpg)
[Revendepro](https://www.ggoossen.net/revendepro/) by George Goossen is one of the clearest surviving late-1990s windows into Delphi decompiler research.
Its update log documents work on Delphi 4 and Delphi 5 programs and packages.

Revendepro recovered classes, type information, procedures, imported procedures, strings, resources, published properties, DFMs, and packages [^4].
Its techniques were strongly Delphi-specific.
The tool looked for VMT self-pointers, TypeInfo structures, hidden string metadata, fixups for globals, and package structures.

The important limit is just as interesting as the feature list.
Revendepro could emit Pascal-like output, but procedure bodies were initially emitted as assembler.
The author also noted that the generated code was not generally recompilable.
That makes Revendepro historically important as a structural reconstructor rather than a perfect Delphi-to-Pascal decompiler.

## DeDe
![DeDe Delphi Decompiler](/public/images/Delphi/DeDe-Delphi-Decompiler-Classes-Info.jpg)
[DeDe](https://github.com/Hanvdm/dedex/blob/master/Doc/Readme.txt) by DaFixer became the classic Delphi executable workbench of the early 2000s.
The surviving 3.01 readme describes a tool aimed at practical analysis rather than perfect recompilation.

DeDe could extract DFM files, create project-like folders containing `.dfm`, `.pas`, and `.dpr` files, disassemble published methods with Delphi-aware comments, dump active processes, find real entry points in packed Delphi programs, inspect DCUs and BPLs, and generate DSF symbol files [^5].

The workflow was very recognizable to anyone reversing old Windows software.
Recover the forms first.
Use component and event names to orient yourself.
Use the generated Pascal wrappers and commented assembly to follow the real method bodies.
Use package and symbol files to annotate framework or component calls where possible.

DeDe's limitation is explicit in its own documentation.
The reconstructed `.pas` files contain assembly comments and cannot simply be rebuilt as source.
For reverse engineering, though, that output is still valuable because it restores the human-facing structure around the binary.

## DCU32INT
[DCU32INT](https://github.com/rfrezino/DCU32INT) by Alexei Hmelnov attacked a related problem.
Instead of decompiling a full executable, it parsed Delphi compiled unit files.

DCU files are not source files, but they can retain information that is useful for reconstructing unit interfaces, class layouts, VMT offsets, field offsets, and implementation metadata [^6].
DCU32INT is historically useful because it explains where compiler information is lost rather than merely failing silently.

Some losses are unavoidable:
* Constant expressions may be folded into values.
* Type aliases may collapse to canonical types.
* Variant-record case labels may disappear.
* Implementation-only identifiers may not survive unless debug information exists.

Those limits are not just missing heuristics.
They are facts about what the compiler keeps and discards.

---
# The IDR era
The next major phase was dominated by IDR, short for Interactive Delphi Reconstructor.

## Interactive Delphi Reconstructor
[IDR](https://github.com/crypto2011/IDR) became the most important standalone Win32 Delphi reconstructor of the 2010s.
Its README describes static analysis of Win32 EXE and DLL files produced by Delphi 2 through Delphi XE4 [^7].

IDR matters for two reasons.
First, it broadened the standalone Delphi reconstructor model with version-specific knowledge bases, RTTI and resource handling, form analysis, and interactive reconstruction.
Second, it became infrastructure for later tools.

IDR's own framing is practical.
It was useful for malware analysis because it could work statically without running the sample.
It was also useful for lost-source recovery and legacy maintenance.
But like DeDe and Revendepro, it did not claim to perfectly restore most original method bodies.

The knowledge-base model is the key historical bridge.
Instead of treating every Delphi executable as a generic native binary, IDR used compiler-version knowledge to recognize runtime functions, forms, structures, and library code.
Later IDA and Ghidra workflows still depend on that idea.

---
# Modern metadata tools
The modern trend is not one new Delphi-only decompiler replacing IDR.
It is a spread of Delphi-aware extractors and plugins that feed better names, types, comments, and structures into general reverse-engineering environments.

## Pythia
[Pythia](https://github.com/nccgroup/pythia) from NCC Group extracts Delphi RTTI and virtual function table information from PE executables [^8].
It outputs JSON that can be used for class trees, IDA names, comments, or downstream decompilation workflows.

Pythia is a good example of the modern approach.
It does not try to print a whole Pascal project.
It tries to recover high-value semantic information that makes another analysis tool much more effective.

## DelphiHelper
[DelphiHelper](https://github.com/eset/DelphiHelper) is an IDA Pro plugin from ESET for x86 and x86_64 Delphi binaries [^9].
It parses RTTI, method tables, DFM data, embedded forms, and event handlers.
It can also apply FLIRT and IDR knowledge-base signatures.

That puts DelphiHelper in the same lineage as IDR, but with a different center of gravity.
The goal is not a standalone Delphi decompiler GUI.
The goal is to make IDA understand enough Delphi structure that the human analyst can work faster.

## Dhrake
[Dhrake](https://github.com/huettenhain/dhrake) brings a similar idea to Ghidra.
It imports IDR-generated IDC output, improves symbol naming, repairs some Delphi function signatures, and creates Delphi class and VMT structures [^10].

Dhrake is historically revealing because it depends on IDR output.
That dependency shows how the old standalone Delphi reconstructor became a source of metadata for newer analysis workflows.

## DelphiReSym
[DelphiReSym](https://github.com/WenzWenzWenz/DelphiReSym) is a Ghidra-oriented symbol recovery tool.
It recovers fully qualified symbol names, return types, parameter types, parameter names, and VMT structures from metadata left in compiled Delphi executables [^11].

Like Pythia, DelphiHelper, and Dhrake, it is best understood as decompiler support infrastructure.
It improves the analysis surface before or alongside decompilation.

---
# Timeline
The history is easier to read as a change in ambition over time.
The table below focuses on the role each tool played rather than treating every tool as a direct replacement for the previous one:

Tool | Period | Main contribution | Historical meaning
--- | --- | --- | ---
[Revendepro](https://www.ggoossen.net/revendepro/) | Late 1990s | Recovered classes, types, procedures, strings, DFM resources, packages, and Pascal-like structure | Proved that Delphi binaries exposed enough invariants for specialized structural reconstruction.
[DeDe](https://github.com/Hanvdm/dedex/blob/master/Doc/Readme.txt) | Early 2000s | Extracted forms, generated project-like skeletons, annotated published methods, dumped DCUs and BPLs | Turned Delphi decompilation into a practical workbench for classic Win32 applications.
[DCU32INT](https://github.com/rfrezino/DCU32INT) | 2000s-2010s | Parsed compiled Delphi units and documented compiler information loss | Clarified the boundary between recoverable metadata and source details lost by compilation.
[IDR](https://github.com/crypto2011/IDR) | 2010s | Reconstructed Win32 Delphi EXE and DLL structure with version-specific knowledge bases | Became the major standalone Delphi reconstructor and later metadata source for IDA and Ghidra workflows.
[Pythia](https://github.com/nccgroup/pythia) | 2010s | Extracted RTTI and VMT data into JSON and IDA-friendly names | Shifted the focus toward reusable semantic extraction.
[DelphiHelper](https://github.com/eset/DelphiHelper) | 2020s | Added Delphi RTTI, DFM, method-table, and event-handler support to IDA | Moved Delphi recovery into a mainstream disassembler workflow.
[Dhrake](https://github.com/huettenhain/dhrake) | 2020s | Imported IDR symbols into Ghidra and repaired Delphi types and VMT structures | Showed how IDR-era knowledge could bootstrap Ghidra analysis.
[DelphiReSym](https://github.com/WenzWenzWenz/DelphiReSym) | 2020s | Recovered Delphi symbol names, parameter types, and VMT structures in Ghidra | Continued the metadata-first approach for modern Ghidra workflows.

---
# What to look for in a Delphi binary
If you are reversing an old Windows game tool or launcher and suspect it was written in Delphi, start by looking for Delphi-specific artifacts before trying to read raw decompiler output.

Useful things to check include:
* **Form resources** - Look for embedded DFM resources and component names. These often reveal the user interface and event-handler names before you understand any assembly.
* **Class names** - Delphi class names can survive in RTTI and VMT structures, especially for forms and published classes.
* **Event bindings** - A form may tell you that `ButtonExportClick` or `LoadArchiveClick` exists even if the method body is still native code.
* **Package names** - BPL and package references can reveal third-party libraries, custom component sets, or internal tool frameworks.
* **Known RTL and VCL routines** - Identifying standard library calls removes noise and makes user code stand out.
* **Map or debug files** - If a `.map`, `.rsm`, or symbol file survived with the executable, treat it as first-class evidence rather than relying only on decompiler guesses.

For game-development archaeology, this matters because the UI and tool workflow are often as historically valuable as the lower-level code.
A level editor, asset converter, patcher, or internal launcher may reveal its design through form names, component captions, and event handlers even when the executable cannot be rebuilt.

---
# Technical limits
Delphi decompilation is structurally strong but source reconstruction is still limited.
The compiler keeps some information because the runtime needs it, but it discards other information because the machine code does not need it.

Important limits include:
* **Local names may disappear** - Local variables, temporary names, and implementation-only declarations usually do not survive without debug data.
* **Type aliases can collapse** - A source alias such as `THandle = Integer` may become indistinguishable from the underlying type.
* **Constants may be folded** - A source expression such as `WM_USER + 100` may survive only as the final numeric value.
* **Record intent can be lost** - A decompiler may infer overlapping fields, but not necessarily the original discriminant labels in a variant record.
* **Optimization changes shape** - Register allocation, omitted stack frames, common-subexpression elimination, and compiler helpers can obscure the source-level structure.
* **Version drift matters** - Old tools built around Delphi 3-7 assumptions can fail against Unicode-era Delphi, later RTTI formats, Win64 calling conventions, FireMonkey, mobile targets, and LLVM-backed builds.

The practical conclusion is simple.
Treat Delphi decompiler output as a map, not a substitute for the original source tree.
The best results come from combining form recovery, RTTI, symbols, library recognition, and normal native-code analysis.

---
# Current state
The classic standalone tools are historically central, but most are dormant or tied to old Win32 Delphi assumptions.
IDR remains the most visible standalone open-source reconstructor, but its documented support is still Delphi 2 through Delphi XE4 for Win32 EXE and DLL files [^7].

The active edge has moved outward.
Modern work is more likely to appear as IDA or Ghidra augmentation, RTTI extraction, symbol recovery, or metadata import.
That is a healthy direction because it lets Delphi-specific knowledge improve general analysis tools instead of trapping recovered information inside one old GUI.

The open problems are still substantial:
* **Modern Delphi support** - Reliable handling of newer Win64, ARM, mobile, and LLVM-backed Delphi targets remains harder than classic Win32.
* **Generics and inlining** - Higher-level language features are difficult to reconstruct from native code and compiler records alone.
* **Framework-aware recovery** - VCL, FMX, custom components, packages, and third-party libraries need better identification.
* **Stable high-level output** - Recovered class, form, RTTI, and symbol information still needs to flow cleanly into modern decompiler IR and type systems.

The history of Delphi decompilers is therefore not a story of steady progress toward perfect source recovery.
It is a story of learning which parts of the original program survive compilation, then building tools that exploit those surviving structures as effectively as possible.
<!-- cspell:enable -->

---
# References
[^1]: [Internal Data Formats (Delphi) - RAD Studio](https://docwiki.embarcadero.com/RADStudio/Sydney/en/Internal_Data_Formats_%28Delphi%29)
[^2]: [Text DFM or Text FMX - RAD Studio](https://docwiki.embarcadero.com/RADStudio/Sydney/en/Text_DFM_or_Text_FMX)
[^3]: [Package Dynamic Library File - RAD Studio](https://docwiki.embarcadero.com/RADStudio/Athens/en/Package_Dynamic_Library_File)
[^4]: [GGoossen - Revendepro](https://www.ggoossen.net/revendepro/)
[^5]: [DeDe 3.01 readme](https://github.com/Hanvdm/dedex/blob/master/Doc/Readme.txt)
[^6]: [DCU32INT by Alexei Hmelnov](https://github.com/rfrezino/DCU32INT)
[^7]: [Interactive Delphi Reconstructor](https://github.com/crypto2011/IDR)
[^8]: [Pythia - Delphi RTTI extraction tool](https://github.com/nccgroup/pythia)
[^9]: [DelphiHelper for IDA Pro](https://github.com/eset/DelphiHelper)
[^10]: [Dhrake - The Delphi Hand Rake](https://github.com/huettenhain/dhrake)
[^11]: [DelphiReSym - Delphi symbol name recovery tool](https://github.com/WenzWenzWenz/DelphiReSym)
[^12]: [Game Developers Conference (GDC) - CGDC 1996 session list](/gdc)
[^13]: [Charles "Charlie" Calvert, Developer, Educator, And A Thoroughly Decent Man - Embarcadero](https://blogs.embarcadero.com/charles-charlie-calvert-developer-educator-and-a-thoroughly-decent-man/)
[^14]: [October/November 1996 - Game Developer Magazine](https://media.gdcvault.com/GD_Mag_Archives/GDM_OctNov_1996.pdf)
