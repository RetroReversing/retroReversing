---
layout: post
tags: 
- introduction
title: Game Architecture - How games are structured
thumbnail: /public/consoles/Computer Old Design.png
_image: /public/images/articles/Game Architecture.jpg
_twitterimage: https://www.retroreversing.com/public/images/articles/Architecture.jpg
permalink: /game-architecture
breadcrumbs:
  - name: Home
    url: /
  - name: Introduction
    url: /introduction
  - name: Game Architecture - How games are structured
    url: #
recommend: 
- introduction
editlink: /Introduction/GameArchitecture.md
_updatedAt: '2023-11-22'
---
# Introduction
Game architecture refers to the overall design and structure of a video game. It encompasses the organization and management of various components that make up a game, including the game engine, graphics, audio, input handling, physics, artificial intelligence (AI), networking, and more. 

## Why should a Reverse Engineer about Game Architecture?
Knowing the most common game architecture patterns is useful for both reversing and building games, these patterns have been built up over many years and incorporated lessons learned from many failed projects. It is likely that any game you want to reverse will use some variation of these standard game architecture patterns.

## When should a Reverse Engineer about Game Architecture?
If you are reversing a 8-bit or 16-bit game it is unlikely that these patterns will have been used as there was very little knowledge sharing in the early industry and projects were relatively short involving only a handful of developers. 

However from 32-bit and beyond these patterns become very valuable as many games used variations of these and knowing that its a common pattern can save you some time understanding how the game works.

## Architecture in off-the-Shelf Game Engines
Many game engines are built with a very specific architecture in mind (ECS for Unity, OOP for Unreal Engine), so knowing why these architectures were chosen and their many benefits and drawback is very useful when choosing a game engine.

---
# Basic Game Architecture
When we talk about basic game architecture we are talking about the bare minimum set of components that make up a game, it is natural for all games to have the following parts:
- **Game Engine:** The core software that provides the basic framework for a game. It typically includes components for rendering graphics, managing audio, handling input, and more. Game engines simplify the development process by providing pre-built functionality.
- **Graphics Engine:** Manages the rendering of images and graphics in the game. This includes handling 3D models, textures, lighting, and special effects.
- **Audio Engine:** Manages the generation and playback of sound effects and music in the game. It includes features such as spatial audio to create a more immersive experience.
- **Input Handling:** Manages user input from devices such as keyboards, mice, controllers, or touchscreens. This component translates user actions into in-game events.
- **Physics Engine:** Simulates realistic physical interactions within the game world, such as gravity, collisions, and object movement.
- **Artificial Intelligence (AI):** Implements the behavior of non-player characters (NPCs) and other entities in the game. AI is responsible for making decisions and reacting to the player's actions.
- **Networking:** Manages communication between different game clients in a multiplayer environment. This includes features like player synchronization, data transfer, and server-client interactions.
- **Game Logic:** Implements the rules and mechanics of the game. It includes the overall game flow, scoring, win/lose conditions, and other gameplay-related features.
- **User Interface (UI):** Handles the display of information to the player, including menus, HUD (heads-up display), and other graphical elements.

These are just the standard building blocks of a game and it is likely any game that you want to reverse engineer has separated their game code into distinct blocks of each of these. 
Whether the blocks are entire modules (e.g dlls) or simply just different code files (e.g .cpp), it is likely that when the code has been compiled into the final executable the functions for each category are close to each other. Of course sometimes compilers move code around for optimization purposes, but in general if you find a function that does audio handling, it is likely that the function before and after it will also be related to audio handling.

---
# Higher Level Game Architecture Patterns
Extending from the basic game architecture mentioned in the previous section there are also higher level architecture patterns that a game may be built using.

Some Examples are:
* **Monolithic Architecture:**
   - **Definition:** In a monolithic architecture, the entire game is built as a single, self-contained application. All game-related functionalities, such as rendering, physics, and AI, are bundled together in a single codebase.
   - **Example:** Many early video games, especially those developed for consoles and arcade machines, followed a monolithic architecture. The entire game logic, graphics rendering, and input handling were typically tightly integrated.
* **Entity-Component-System (ECS) Architecture:**
   - **Definition:** ECS is a design pattern where the game entities are represented as collections of components, and systems process these entities based on their components. This architecture promotes composition over inheritance and is often used in game development for flexibility and performance.
   - **Example:** Unity's game engine utilizes an ECS architecture. Entities are defined by their components (e.g., position, rendering, behavior), and systems operate on entities with specific components to update the game state.
* **Component-Based Architecture:**
   - **Definition:** This architecture organizes the game code around reusable and modular components. Game objects are composed of different components that define their behavior, and these components can be mixed and matched to create diverse entities.
   - **Example:** The Unreal Engine uses a component-based architecture. Game objects are entities composed of components (e.g., mesh, physics, script) that can be added or removed to customize the behavior and appearance of the object.

These examples illustrate the diversity of game architectures, and often, game developers use a combination of these approaches to meet the specific requirements of their projects. The choice of architecture depends on factors such as the type of game, development team size, performance considerations, and scalability needs.

---
# Online Multiplayer Game Architecture Patterns
When reverse engineering or building an online multiplayer game it is likely that you will need to understand some common patterns used when developing online services.

Note that it is much harder to understand what the server-side architecture is of a online game as you don't have the actual code running locally on your PC, so you may never find out if the online services are a Microservice or a Monolith. However it is important to know good architecture practises if you want to develop an open source replacement to a vendors game server.

Here are a few examples:
* **Client-Server Architecture:**
   - **Definition:** In a client-server architecture, the game is split between a client (user interface, input handling) and a server (game logic, data storage, networking). This is common in multiplayer games, where the server manages the authoritative game state.
   - **Example:** Many online multiplayer games, like MMORPGs or first-person shooters, use a client-server architecture. The client handles rendering and user input, while the server manages the game world, enforces rules, and synchronizes information between clients.
* **Microservices Architecture:**
   - **Definition:** Microservices architecture involves breaking down the game into small, independent services that communicate with each other. Each service handles a specific aspect of the game, and they can be developed and deployed independently.
   - **Example:** In a multiplayer game, you might have separate microservices for player authentication, matchmaking, leaderboards, and game sessions. Each of these services can be updated or scaled independently.