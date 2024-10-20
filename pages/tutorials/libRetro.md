---
layout: post
tags: 
- introduction
- tutorial
- tools
title: Understanding libRetro - An Internal Look for Programmers
_image: /public/images/tutorials/libRetro.jpg
_twitterimage: http://www.retroreversing.com/public/images/tutorials/libRetro.jpg
thumbnail: /public/consoles/Tools.jpg
permalink: /libRetro
breadcrumbs:
  - name: Home
    url: /
  - name: Tutorials
    url: /tutorials
  - name: Understanding libRetro - An Internal Look for Programmers
    url: #
recommend: 
- introduction
- tutorial
editlink: /tutorials/libRetro.md
_updatedAt: '2024-10-20'
---

# Introduction
libRetro is a versatile framework designed to facilitate the development of emulators and games through a unified interface. 

This post explores the internal workings of libRetro, providing insights tailored for programmers interested in understanding how libRetro cores and frontends operate.

## What is libRetro?
libRetro is an API that enables developers to create emulators (referred to as "cores") for various retro gaming platforms. 

It abstracts the complexity of different systems, allowing cores to be easily integrated into different frontends. 

The framework supports a wide array of platforms (e.g Win, Mac, Linux and even games consoles), making it a popular choice for both developers and users.

---
# Architecture Overview
libRetro consists of two main components: the core and the frontend. 

The core is the actual emulator, while the frontend provides the user interface and additional features.

<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <!-- Define Gradient -->
  <defs>
    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0085b6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00a1d6;stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Frontends -->
  <rect x="50" y="50" width="300" height="400" rx="15" ry="15" style="fill:url(#blueGradient);stroke:#242629;stroke-width:2" />
  <text x="200" y="90" font-family="Verdana" font-size="24" text-anchor="middle" fill="#fff">Frontends</text>
  
  <rect x="100" y="140" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="200" y="165" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">RetroArch</text>
  
  <rect x="100" y="200" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="200" y="225" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">Junie</text>
  
  <rect x="100" y="260" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="200" y="285" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">RustroArch</text>

  <!-- Cores -->
  <rect x="450" y="50" width="300" height="400" rx="15" ry="15" style="fill:url(#blueGradient);stroke:#242629;stroke-width:2" />
  <text x="600" y="90" font-family="Verdana" font-size="24" text-anchor="middle" fill="#fff">Cores</text>
  
  <rect x="500" y="140" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="600" y="165" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">Gambatte</text>

  <rect x="500" y="200" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="600" y="225" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">Snes9x</text>
  
  <rect x="500" y="260" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="600" y="285" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">Beetle PSX</text>

  <rect x="500" y="320" width="200" height="40" rx="10" ry="10" style="fill:#ffffff;stroke:#242629;stroke-width:2" />
  <text x="600" y="345" font-family="Verdana" font-size="14" text-anchor="middle" fill="#242629">Mupen64Plus</text>

  <!-- Communication Line -->
  <line x1="350" y1="150" x2="450" y2="150" style="stroke:#242629;stroke-width:2" />
  <line x1="350" y1="210" x2="450" y2="210" style="stroke:#242629;stroke-width:2" />
  <line x1="350" y1="270" x2="450" y2="270" style="stroke:#242629;stroke-width:2" />
</svg>





## Cores
Each core implements the libRetro API, which includes functions for:

- Initialization
- Frame rendering
- Input handling
- Audio processing
- Save state management

The cores are responsible for emulating the hardware of a specific system. 
They take care of processing the game code, rendering graphics, and managing audio, effectively mimicking the original hardware's behavior. 

They are based on standalone emulators modified to conform to the libRetro API specification.

## Frontends
Frontends are the user-facing applications that utilize the cores. 

They provide a graphical interface for users to load games, configure settings, and interact with the emulator. 

Frontends can vary widely in features and design, but they all communicate with the cores through the libRetro API.

The most popular frontend is **RetroArch**.

---
# How Cores Communicate with Frontends
Communication between the core and frontend is achieved through a series of function calls defined in the libRetro API. 
When a user interacts with the frontend, it translates those actions into function calls that the core understands. 
This architecture allows for a seamless experience, where the frontend can manage user interactions while the core focuses on emulation.

## Key Functions in libRetro
The libRetro API is composed of several key functions that facilitate communication between the frontend and the core:

### retro_init
This function initializes the core and prepares it for execution. It sets up the necessary resources and state required for the emulator to run.

### retro_run
The retro_run function is called in a loop during the emulation process. It processes a single frame of the game, handling input, updating the state, and rendering graphics. 
This function is crucial for maintaining the flow of the game.

### retro_deinit
Once the emulation session is over, the retro_deinit function cleans up resources allocated by the core. 
This function ensures that the emulator can terminate gracefully.

### retro_api_version
The retro_api_version function returns the version of the libRetro API that the core supports. It allows the frontend to check which version of the API the core is using, ensuring compatibility between the core and the frontend. The function typically returns an unsigned integer representing the API version number.

### retro_get_system_info
**retro_get_system_info** is a function that provides information about the core being used. It fills in a retro_system_info structure with details such as the core's name, version, the file types it supports (e.g., ROM formats), and whether the core requires a full path for loading content. This allows the frontend to gather essential data about the core for proper integration.

---
## Callbacks
In libRetro, several functions must be set up before the emulation process begins. These functions are responsible for handling various aspects of the emulation, such as video rendering, audio output, and input management. T

These callback functions play a vital role in the core's ability to interface with the frontend. By setting these functions before the first call to `retro_run()`, libRetro ensures that the necessary resources—video rendering, audio playback, and input handling—are properly configured.

The following is an explanation of the key callback functions that are initialized before the emulation starts.

<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <!-- Frontend -->
  <rect x="50" y="50" width="300" height="400" style="fill:#e0e0e0;stroke:#000;stroke-width:2" />
  <text x="175" y="80" font-family="Verdana" font-size="18" text-anchor="middle">Frontend</text>
  <rect x="100" y="120" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="200" y="145" font-family="Verdana" font-size="14" text-anchor="middle">User Interface</text>
  <rect x="100" y="180" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="200" y="205" font-family="Verdana" font-size="14" text-anchor="middle">Game Loader</text>
  <rect x="100" y="240" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="200" y="265" font-family="Verdana" font-size="14" text-anchor="middle">Settings</text>

  <!-- Core -->
  <rect x="450" y="50" width="300" height="400" style="fill:#e0e0e0;stroke:#000;stroke-width:2" />
  <text x="600" y="80" font-family="Verdana" font-size="18" text-anchor="middle">Core</text>
  <rect x="500" y="120" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="600" y="145" font-family="Verdana" font-size="14" text-anchor="middle">Emulation</text>
  <rect x="500" y="180" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="600" y="205" font-family="Verdana" font-size="14" text-anchor="middle">Video</text>
  <rect x="500" y="240" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="600" y="265" font-family="Verdana" font-size="14" text-anchor="middle">Audio</text>
  <rect x="500" y="300" width="200" height="40" style="fill:#ffffff;stroke:#000;stroke-width:1" />
  <text x="600" y="325" font-family="Verdana" font-size="14" text-anchor="middle">Input</text>

  <!-- Arrows for communication -->
  <line x1="350" y1="140" x2="450" y2="140" style="stroke:#000;stroke-width:2" />
  <text x="400" y="130" font-family="Verdana" font-size="12" text-anchor="middle">retro_set_environment</text>

  <line x1="350" y1="200" x2="450" y2="200" style="stroke:#000;stroke-width:2" />
  <text x="400" y="190" font-family="Verdana" font-size="12" text-anchor="middle">retro_set_video_refresh</text>

  <line x1="350" y1="260" x2="450" y2="260" style="stroke:#000;stroke-width:2" />
  <text x="400" y="250" font-family="Verdana" font-size="12" text-anchor="middle">retro_set_audio_sample</text>

  <line x1="350" y1="320" x2="450" y2="320" style="stroke:#000;stroke-width:2" />
  <text x="400" y="310" font-family="Verdana" font-size="12" text-anchor="middle">retro_set_audio_sample_batch</text>

  <line x1="350" y1="380" x2="450" y2="380" style="stroke:#000;stroke-width:2" />
  <text x="400" y="370" font-family="Verdana" font-size="12" text-anchor="middle">retro_set_input_poll</text>

  <line x1="350" y1="440" x2="450" y2="440" style="stroke:#000;stroke-width:2" />
  <text x="400" y="430" font-family="Verdana" font-size="12" text-anchor="middle">retro_set_input_state</text>
</svg>


### retro_set_environment
`retro_set_environment(retro_environment_t)` is the first function to be called, guaranteed to be invoked before `retro_init()`. This function sets the environment callbacks that allow the core to communicate with the frontend.

The environment callback provides information about the system environment, handles features like saving and loading states, and can also communicate core options to the frontend. This function is essential for configuring the core to work properly with the frontend, ensuring that the core can query the frontend for various functionalities.

### retro_set_video_refresh
`retro_set_video_refresh(retro_video_refresh_t)` is responsible for rendering the video frames. It registers the callback that will be used by the core to provide the video data to the frontend.

The frontend then takes care of displaying the frame on the screen. This function must be set before the first call to `retro_run()` since it's critical for handling the visual output of the emulation.

### retro_set_audio_sample
`retro_set_audio_sample(retro_audio_sample_t)` registers the callback for audio output. This function handles individual audio samples, allowing the core to pass sound data to the frontend.

It’s useful when the core outputs audio on a per-sample basis, and the frontend is responsible for processing these audio samples to ensure they are played in sync with the video.

### retro_set_audio_sample_batch
`retro_set_audio_sample_batch(retro_audio_sample_batch_t)` is similar to `retro_set_audio_sample`, but instead of handling individual samples, it handles batches of audio samples at once. This is typically more efficient and commonly used by cores that generate a larger number of audio samples in one go.

This function also needs to be set before `retro_run()` is called to ensure that the frontend can properly handle audio during the emulation.

### retro_set_input_poll
`retro_set_input_poll(retro_input_poll_t)` sets the callback for polling input devices. This function is responsible for detecting user input, such as controller or keyboard actions, before each frame is processed. The core uses this to query the current state of the input devices to update the game state accordingly.

### retro_set_input_state
`retro_set_input_state(retro_input_state_t)` works in conjunction with `retro_set_input_poll`. After polling the input devices, this function allows the core to access the specific state of each input device (e.g., which buttons are pressed). It is crucial for managing user interactions during gameplay.

---
# Tool Assisted Speed Run Support
Most people use an emulator such as Bizhawk for creating Tool Assisted Speedruns (TAS), however RetroArch supports more platforms than Bizhawk (e.g MacOSX, Android, iOS, consoles) so I wanted to investigate what would be required to do a basic TAS with libRetro/RetroArch.

It seems Bizhawk has experimental support for libRetro cores as can be seen on [this page](https://tasvideos.org/Bizhawk/Libretro), however it is unclear why it is marked as experimental or why someone would choose to use the libRetro cores for certain systems over Bizhawks standard cores. But this still requires a platform that Bizhawk currently supports.

## BSV support in RetroArch
RetroArch can be compiled with a flag to enable BSV support which captures all the input data (button presses, joypad movement etc) during a game session, allowing playback of the game as it was originally played during the recording.

This sounds ideal for creating a TAS right? So what is the catch?

Well if you try recording a BSV file and playing it back for any length of time you will notice that the game gets completely out of sync, the playback no longer acts like the original recording. 

This is because BSV support in RetroArch doesn't have any **coherency checking**, so the question is how does Bizhawk do coherency checking and can we modify a libRetro frontend to do the same?

### What is in a BSV file?
A BSV file contains a 4-word header, a save state that stores the initial game state and then contains the buttons pressed down for each frame of the game. So to play it back the emulator would first load the state and then replay all the buttons in the same order.

### How to record a BSV file with RetroArch
Use the -R command line option like so:
```
retroarch -R "myTAS.bsv" -L core.dylib -v game.rom
```

If that doesn't work you will need to make sure RetroArch is compiled with `-DHAVE_BSV_MOVIE=1` define enabled.

