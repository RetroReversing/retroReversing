---
layout: post
title: AI-Assisted Decompilation
tags:
- reverseengineering
- tools
- ghidra
- sourcecode
category: reverseengineering
permalink: /ai-assisted-decompilation
breadcrumbs:
  - name: Home
    url: /
  - name: AI-Assisted Decompilation
    url: /ai-assisted-decompilation
editlink: /pages/tools/AIAssistedDecompilation.md
updatedAt: '2026-10-14'
---

# AI-Assisted Decompilation
AI-assisted decompilation uses language models to help reconstruct source code and program behaviour from compiled machine code. For retro games, a particularly useful application is **matching decompilation**: recovering C or C++ that produces the same machine instructions when built with the game's original compiler.

Traditional decompilers such as [Ghidra](https://ghidra-sre.org/) perform program analysis and translate machine instructions into higher-level pseudocode. Language models can supplement this process by suggesting names, data structures and alternative source expressions, but generated code must still be checked against the executable.

The research and tools below cover both ordinary binary analysis and the stricter task of reproducing a game's original machine code.

## Terminology
These terms describe different success criteria:

* **Disassembly** translates machine code into assembly instructions.
* **Decompilation** reconstructs higher-level representations such as C from compiled instructions.
* **AI-assisted reverse engineering** uses a model to interpret assembly, pseudocode, memory layouts and program behaviour.
* **Functional reconstruction** produces code that behaves like the original under relevant tests, even if the resulting binary differs.
* **Matching decompilation** aims to reproduce the original machine code, often by using the same compiler, flags and ABI. A function that looks correct in C may still fail to match.

A source file that compiles successfully is not necessarily functionally correct, and functionally correct code is not necessarily a byte-for-byte match.

---
# How AI Fits into the Decompilation Workflow
An AI agent can generate candidate source code, invoke a compiler and compare the output against the original instructions. A mismatch becomes feedback for another iteration.

For a retro console project, a practical workflow is:

* Extract the target function and its assembly from the game binary.
* Identify the CPU architecture, calling convention and original compiler toolchain.
* Supply the assembly, known types, surrounding functions and any existing decompiler output to the model.
* Generate a candidate C implementation.
* Compile the candidate using the project's matching toolchain.
* Compare the generated assembly or bytes against the target using a diff tool.
* Refine the candidate until the result matches, or investigate assumptions that prevent a match.

This is not a guarantee of automated matching. Compiler version, optimization flags, register allocation, struct layout and undefined behaviour can all affect the output. Keep human review in the loop, particularly when a model changes inferred types or control flow.

For a conventional decompilation introduction, see [N64 Decompiling with Ghidra](/n64-decompiling).

## Tools Used in the Feedback Loop
The following projects provide components commonly used in console decompilation:

Tool | Role
---|---
[Ghidra](https://github.com/NationalSecurityAgency/ghidra) | Disassembly, decompiler pseudocode, types and cross-references
[decomp.me](https://decomp.me/) | Browser-based matching decompilation environment and compiler-backed comparisons
[asm-differ](https://github.com/simonlindholm/asm-differ) | Compare assembly from an original function and a candidate build
[decomp-permuter](https://github.com/simonlindholm/decomp-permuter) | Search source-code variations to improve matching output
[m2c](https://github.com/matt-kempster/m2c) | Translate MIPS assembly into an initial C-like representation
[splat](https://github.com/ethteck/splat) | Split ROMs and executables into files for decompilation projects

An AI agent is most useful when it can read the real assembly and execute these tools, rather than relying on an isolated text prompt.

---
# AI Decompilation Research
Academic work helps distinguish readable pseudocode from actually correct reconstruction.

## LLM4Decompile
[LLM4Decompile](https://github.com/albertan017/LLM4Decompile) investigates language models trained to recover source from binary code and to refine existing decompiler output. The associated [EMNLP 2024 paper](https://aclanthology.org/2024.emnlp-main.203/) is a useful starting point for understanding model-based decompilation [^1].

Its objective differs from matching game decompilation: recovering plausible or executable source does not automatically reproduce the original compiler's output.

## DecompileBench
[DecompileBench](https://aclanthology.org/2025.findings-acl.1194/) evaluates LLM-based decompilation across a large set of functions. Its findings highlight the difference between readability and functional correctness, making it a useful counterbalance to demonstrations based on a few successful examples [^2].

## BinMetric
[BinMetric](https://www.ijcai.org/proceedings/2025/858) benchmarks language models on binary-analysis questions. It is relevant to the broader reverse-engineering workflow, including reasoning about binaries, rather than measuring only byte-identical recompilation [^3].

---
# AI Agents for Game Decompilation
Matching decompilation is especially relevant to [Nintendo 64](/n64) and [Sony PlayStation](/ps1) projects because original toolchains and assembly-diff workflows are often available.

## N64 Decompilation Agent
The [bigyoshi51/decomp repository](https://github.com/bigyoshi51/decomp) documents an AI-assisted workflow for Nintendo 64 matching decompilation. It combines candidate generation with compilation and assembly comparison, using tools already familiar to N64 decompilation contributors [^4].

Review the repository's setup instructions and supported toolchains before applying it to another game. Success on one compiler or function does not establish compatibility with all N64 titles.

## Brave Fencer Musashi
The [BFM-decomp project](https://github.com/Druthulu/BFM-decomp) documents AI-assisted matching decompilation work on *Brave Fencer Musashi* for the original PlayStation. Its repository is a useful case study for integrating model-generated code with a real console project, toolchain constraints and validation [^5].

Project progress figures are maintained by the project authors and should be checked against the latest repository status before quoting them.

## General-Purpose Binary Agents
Not every AI reverse-engineering agent targets matching C output. For example, [auto-decomp](https://github.com/timfox/auto-decomp) explores reconstruction using a decompiler and iterative validation, while [binary-re](https://github.com/2389-research/binary-re) integrates tools such as Ghidra and radare2 into an agentic binary-analysis workflow [^6] [^7].

These tools can assist with understanding functions and data structures even when the original compiler is unknown.

---
# Benchmarks and Recent Model Improvements
Recent coding models have renewed interest in automating the compile-and-compare loop. Claims about a particular model, including Claude Opus 5.5, should be evaluated against a dated benchmark with a published task set, model configuration and validation method.

[Retrobench](https://retrobench.ai/) is a benchmark to investigate for Nintendo 64 matching decompilation. When reading any leaderboard, check whether its score measures exact matches, percentage of matching bytes, functional tests or some other criterion. Also check whether the model was allowed to iterate with compiler feedback.

Benchmark results on selected functions do not establish that an entire commercial game can be automatically decompiled. For comparisons over time, preserve the benchmark version, model name, date and any tool-use settings alongside the score.

---
# Limitations and Verification
AI-generated source should be treated as a hypothesis until it has been validated.

Common failure modes include:

* **Invented semantics:** The model may infer conditions, variable meanings or side effects that the binary does not support.
* **Incorrect types:** Signedness, pointer arithmetic, alignment and structure padding can change generated instructions.
* **Compiler differences:** Correct C compiled with a different compiler version or optimization setting may produce very different assembly.
* **Missing context:** A function may depend on global state, overlay boundaries, SDK functions or calling conventions outside the prompt.
* **Misleading success metrics:** Readable output, compilation success, passing tests and matching machine code measure different things.
* **Reproducibility:** A successful agent run may depend on prompts, model version, tool access and manual intervention not captured in a short demonstration.

For matching projects, preserve the original function bytes, candidate source, exact compiler command and assembly diff. Record whether a match was achieved autonomously or with human edits.

---
# Further Reading
The following resources provide background and practical implementations:

* [decomp.me FAQ](https://www.decomp.me/faq) - introduction to matching decompilation and its tooling.
* [LLM4Decompile paper](https://aclanthology.org/2024.emnlp-main.203/) - language-model approaches to binary-to-source reconstruction.
* [DecompileBench paper](https://aclanthology.org/2025.findings-acl.1194/) - evaluation of source readability and correctness.
* [BinMetric paper](https://www.ijcai.org/proceedings/2025/858) - benchmark for language-model binary analysis.
* [N64 AI decompilation agent](https://github.com/bigyoshi51/decomp) - console-oriented compile-and-compare workflow.
* [Brave Fencer Musashi decompilation](https://github.com/Druthulu/BFM-decomp) - PlayStation project case study.
* [Retrobench](https://retrobench.ai/) - benchmark focused on matching decompilation.

---
# References
[^1]: [LLM4Decompile - EMNLP 2024](https://aclanthology.org/2024.emnlp-main.203/)
[^2]: [DecompileBench - Findings of ACL 2025](https://aclanthology.org/2025.findings-acl.1194/)
[^3]: [BinMetric - IJCAI 2025](https://www.ijcai.org/proceedings/2025/858)
[^4]: [bigyoshi51/decomp - GitHub](https://github.com/bigyoshi51/decomp)
[^5]: [Druthulu/BFM-decomp - GitHub](https://github.com/Druthulu/BFM-decomp)
[^6]: [timfox/auto-decomp - GitHub](https://github.com/timfox/auto-decomp)
[^7]: [2389-research/binary-re - GitHub](https://github.com/2389-research/binary-re)
