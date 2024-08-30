---
title: Let's reverse - Super Mario Bros (NES)
layout: post
permalink: /super-mario-bros
tags:
- nes
- game
recommend:
- nes
- game
editlink: /consoles/nes/Super-Mario-Bros.md
_updatedAt: '2024-08-17'
---

# Introduction
This page will give a brief overview of how Super Mario Bros for the Nintendo Entertainment System (NES) works. This page wouldn't have been possible without the excellent work by **doppelganger** on their [Comprehensive Super Mario Bros. Disassembly](https://gist.github.com/1wErt3r/4048722).

# Cartridge
![SuperMarioBrosNes](https://github.com/user-attachments/assets/ebc2b54b-9e71-451e-88c7-7d11c056e775)

The original **Super Mario Bros.** cartridge for the NES used the **NES-NROM-256** board (**HVC-NROM-256K** in Japan). 

This board was commonly used in early NES games and did not include any special memory mapping hardware, relying solely on the CPU's built-in capabilities to access the ROM data.

## NROM-256
This board was a standard ROM-only (NROM) configuration, featuring 32 KB of PRG (Program) ROM and 8 KB of CHR (Character) ROM. The "256" in the name refers to the size of the PRG ROM in kilobits (32 KB = 256 kilobits).

You can see the Board name clearly at the top of the circuit board in the photo below:
![NES-NROM-256-01](https://github.com/user-attachments/assets/2c0dd1e8-d809-4914-8b85-1aaa77fb868e)

You can see that there are 3 main chips, from left to right:
* The Lockout Chip or CIC (Checking Integrated Circuit) - used for piracy prevention and region checking (not present in Japanese cartridges)
* The CHR ROM - used for art/graphic data
* The PRG ROM - used for program code and other data such as sound/music

### Vertical Mirroring
You can also see near the middle of the board is a gold circle with a V beside it, this means that the data is mirrored Vertical (if the circle was on the right beside the H symbol it would be Horizontal.

In NES cartridges, the terms Vertical Mirroring and Horizontal Mirroring refer to how the PPU (Picture Processing Unit) maps the Name Tables in memory, which are used to store background tile data for rendering the game's screen. 

The NES has the ability to display up to four different Name Tables, but with most games, only two are used due to memory limitations. Mirroring determines how these two Name Tables are mapped across the available memory space.

Vertical Mirroring is best suited for **horizontally scrolling games** because it allows continuous horizontal scrolling without repeating the left and right edges. SO this is why its used in Super Mario Bros.


### Cartridge Revisions
The number at the end of the board designation, such as **NES-NROM-256-01**, typically refers to a specific version or revision of that particular board type. 

In this case it was used for revisions based on region as can be seen in the table below:

Region | Board
---|---
USA | NES-NROM-256-01
Europe | NES-NROM-256-02
UK | NES-NROM-256-03
Germany/Sweden | NES-NROM-256-06
Spain | NES-NROM-256-08
Japan | HVC-NROM-256K-02

But not that the number at the end is not a region identifier, its more of a revision identifier. 

Note that the table above was provided thanks to the data available at [NesCartDB](https://nescartdb.com/search/basic?keywords=super+Mario+bros.&kwtype=game), it is possible that revision 04, 05 and 07 exist but noone has yet added them to the **NesCartDB**.

Revisions might involve minor changes or improvements to the board's design, manufacturing process, or component layout, but they don't typically affect the overall functionality or behavior of the game.

### The ROM
If you legally back up your Super Mario Bros NES ROM you will notice that the size of the ROM is about 41KB (40,976 bytes to be precise), this makes sense as the ROM file is based on the storage of the cartridge plus a 16 byte header of information about the cartridge:
- **32 KB** (32,768 bytes) of Program Code (PRG) ROM
- **8 KB** (8,192 bytes) of Graphics (CHR) ROM
- **16 bytes** of iNES header

The total of these is:

> 32,768 bytes + 8,192 bytes + 16 bytes = 40,976 bytes

### Limitations of the Cartridge Board
Compared to modern games this is tiny, infact a screenshot Super Mario Bros could be bigger than 41KB! Every byte was valuable during the development of the game.

This is why later games such as Mario Bros 2 and 3 would have more ROM data in the cartridge to give the programmers more room to work with all the new features.

It also limits what ROM Hackers can do with the code, as they can't simply add a new level as there is not enough space (without deleting other levels or functionality). 

This is where **Mapper Hacks** come in useful, they convert a game that was supposed to run on one Cartridge board (e.g Mario's NES-NROM-256-01) to another Cartirdge board with more Program and Character ROM available.

---
## The Mapper (Mapper 0)
An **iNES Mapper** is a component of the iNES format, which is a standard for representing NES (Nintendo Entertainment System) game cartridges in digital form. The iNES Mapper system helps handle the various memory management and hardware features required by different NES cartridges.

The iNES header is only used for emulators (and flash carts) because the same data is available in the game cartridge in physical hardware form (e.g the number of chips on the board or how they are wired together).

Super Mario Bros. uses iNES Mapper 0. This is a simple and straightforward mapper configuration that doesn't involve advanced features like bank switching or additional memory management. The game’s ROM is directly mapped into the NES's memory space, which fits within the constraints of Mapper 0’s capabilities.

### Mapper Hacks for Super Mario Bros
So to extend Super Mario Bros. such as adding new levels you will need more space to work with, to do this you will need to modify the ROM to use a different mapper (such as Mapper 0) to give more bytes to play around with.

One examable of Mario converted to run in the MMC01 Mapper is available on RomHacking: [SxROM Mario Bros.](https://www.romhacking.net/hacks/1000/)

---
# Start of the game
The NES knows where to start executing code based on the **Reset Vector**, which is a specific memory address stored in the last two bytes of the Program (PRG) ROM. 

When the NES is powered on (or **reset** button is pressed), the CPU (the Ricoh 2A03 or 2A07, depending on the region) automatically reads the Reset Vector to determine the starting point for execution. Without this vector, the CPU would not know where to start, leading to undefined behavior

## Reset Vector
The term "Reset Vector" refers to the memory location that the CPU is directed to when it undergoes a reset. 

The Reset Vector is called a "vector" because it acts as a pointer directing the CPU to the starting address in memory where it should begin executing code after a reset. The term is consistent with other types of vectors in computer architecture that serve similar purposes for different types of system events.

## Super Mario Bros Reset Vector
If you scroll all the way to the bottom of the [Disassembly](https://gist.github.com/1wErt3r/4048722) you will see a section that looks like the following:
```assembly
;-------------------------------------------------------------------------------------
;INTERRUPT VECTORS

      .dw NonMaskableInterrupt
      .dw Start
      .dw $fff0  ;unused
```
In this you can see that there are three vectors defined, although the last one is unused. In order they are:
* NMI Vector: $FFFA-$FFFB
* Reset Vector: $FFFC-$FFFD
* IRQ/BRK Vector: $FFFE-$FFFF

The Non Maskable Interrupt (**NMI**) is crucial for synchronizing game logic with the display, as it occurs at a regular interval determined by the PPU.
The IRQ/BRK Vector is not used in Mario Bros so it can be safely ignored.

But we are first interested in the Reset Vector which is a 16bit (2 byte) pointer to the Subroutine/Function called helpfully called **Start**.

## The Start Function
Now its time to scroll all the way back to the top of the disasembly to find the definition of the **Start** function.
```assembly
;-------------------------------------------------------------------------------------
;DIRECTIVES

       .index 8 ; This directive likely specifies that indexed operations should consider 8-bit addressing, aligning with the 6502 processor’s 8-bit index registers
       .mem 8 ; This directive might dictate that memory operations or alignment should be based on 8-bit boundaries, ensuring proper data alignment or access.

       .org $8000

;-------------------------------------------------------------------------------------

Start:
             sei                          ;pretty standard 6502 type init here
             cld
             lda #%00010000               ;init PPU control register 1 
             sta PPU_CTRL_REG1
             ldx #$ff                     ;reset stack pointer
             txs
```
You can ignore the .index and .mem directives these are just for the specific assembler that is used to build this specific disassembly. In this case it was for assembling in the old DOS-only x816 assembler which doesn't even run correctly in DOSBox, so it is unlikely you will be using that assembler.

The `.org` directive is useful as it tells the assembler where to put the next block of code, in this case at location hex 0x8000 which is the starting address of the first PRG ROM bank that is mapped into the address space. So the Start function will be placed right at the start of **Program** memory and the NES can access it by using the address 0x8000.

This address is exactly where the Reset Vector is pointing, so if you look at memory in a Hex editor it will have the byte 0x80 at the location 0xFFFC.

### The Start Function decompiled
If you open the NES ROM in Ghidra you will get an output in the decompilation window, we have tidied this up and added comments around the code to give a clearer idea of what is happening:
```c

// constants
#define WARM_BOOT_FLAG 0xA5
#define WarmBootOffset 0xd6
#define ColdBootOffset 0xfe

// Global variables referenced in the code
extern byte[5] TopScoreDisplay; // Location 0x07d7 - Holds the Top score
extern byte WarmBootValidation; // Location 0x07ff - Whether we are warm boot or not.
extern byte DisableScreenFlag; // Location 0x0773 - Whether the screen is enabled or not

void Start() // By default its called reset because GhidraNes detected its the reset Vector
{
  SetInterruptDisable(); // Not a real Function, this is just to highlight the call to the SEI instruction to disable all interrupts while initializing the game
  PPUCTRL = 0x10; // Initialize PPU control register 1 to value of binary 00010000 ( See section below why this is the case)

  stackPointer = (uint8_t *) 0xff; // reset the stack pointer

  char currentPPUStatus;

  // Wait for VBlank 1
  do {
    currentPPUStatus = PPUSTATUS;
  } while (currentPPUStatus > -1);

  // Wait for VBlank 2
  do {
    currentPPUStatus = PPUSTATUS;
  } while (currentPPUStatus > -1);


 byte bootJumpPointer = 0xfe; // By default set the bootJumpPointer to ColdBootOffset, but we are just about to check if its a warm boot and override

// Check if we are a Warm Boot or a Cold Boot
// Warm Boot is when player pressed reset button as they had previously been playing the game
// Todo this we just check if the Top Score has changed from the default value
 
  char i = 5;
  do {
// It is only possible for players to get the decimal digits 0->9 as a score so if the byte is higher (hex) then it must be default score which means we are a cold boot
    if (TopScoreDisplay[i] > 9) goto ColdBoot;
    i = i - 1;
  } while (i > -1);

// Second check for a ColdBoot
  if (WarmBootValidation == WARM_BOOT_FLAG) {
    bootJumpPointer = WarmBootOffset; // Set the bootJumpPointer to WarmBootOffset as the player has played the game previously
  }

ColdBoot:
  OperMode = InitializeMemory(bootJumpPointer);
  DMC_RAW = OperMode;
  WarmBootValidation = WARM_BOOT_FLAG;
  PseudoRandomBitReg = WARM_BOOT_FLAG;
  SND_CHN = 0b00001111; // Enable all sound channels except dmc
  PPUMASK = 0b00000110; // Turn off clipping for OAM and background
  MoveAllSpritesOffscreen(6);
  InitializeNameTables();
  DisableScreenFlag += 1;
  newPPURegister1Value = Mirror_PPU_CTRL_REG1 | 0x80; // Enable NMIs
  WritePPUReg1(newPPURegister1Value);
  do {
// infinite loop until the Non Maskable Interupt fires
  } while( true );
}
```

### Initialize PPU control Register 1
The **PPU Control Register 1**, also known as 0x2000, is a crucial register in the NES that controls various aspects of the Picture Processing Unit (PPU). The register is an 8-bit value, and each bit or group of bits has a specific function that affects how the NES renders graphics.

The first thing Super Mario does is set the value to 0x10 like so:
```c
PPUCTRL = 0x10; // init PPU control register 1 to value of binary 00010000
```

These bits in the PPU Control Register 1 are used to configure the NES's video hardware to control how sprites and backgrounds are rendered and how the PPU handles memory operations and interrupts. Properly setting these bits is crucial for correct graphics display and game functionality.

We have now set the 5th Bit (from the left) to 1 which means we want to set the Increment Mode

In the NES's PPU (Picture Processing Unit), the "Increment Mode" setting determines how the address pointer for PPU memory operations (such as accessing the nametable, attribute tables, or pattern tables) is updated after each read or write operation.

This means the PPU will now Increment the address by 32 bytes after each operation. This is suitable for accessing memory in larger chunks, such as accessing an entire row of tiles or attributes in a nametable.

#### Usage in Context
For Background Tile Data: When using an increment mode of 32 bytes, you can more efficiently handle background tile data because a single increment operation advances you by an entire row of 32 bytes. For example, if you are writing tile data to a nametable, using a 32-byte increment means you can easily update an entire row of tiles in one go.

For Attribute Tables: For attribute tables, which are used to define the properties of tiles (such as color and palette), using a 32-byte increment means you can move to the next row of attributes quickly, as each row is 32 bytes in size.

### Reset the Stack Pointer
The stack pointer on the NES starts at the high end of the stack area in memory. 

By setting the stack pointer to 0xFF, you initialize it to the highest address of the stack segment.

Note that this is not real C Code, it is imagining that the stackPointer could be changed by setting it as a variable:
```c
  stackPointer = (uint8_t *) 0xff; // reset the stack pointer back to the top at location in memory 0xFF
```

The stack in the 6502 processor grows downwards, meaning it starts at the high end of the stack segment and grows towards lower memory addresses. 

Setting the stack pointer to 0xFF prepares the stack for use by pushing data onto it.

This is required because the player might have just been playing the game and press reset and the stack will be dirty with all the values that were placed on it during the last game. We need to make sure we are starting fresh!

---
## The InitializeMemory Function
This function does exactly what it says, it initializes memory with the byte 0. This is important as uninitilized memory can cause unexpected behaviour.

But we don't always want to reset all the data, for example if we are in a Warm Boot (the user pressed Reset after playing), they still want the game to store their high score. Also other variables might not need reset on a subsequent playthrough so it just wastes time setting them to 0.

So this function takes in a parameter of the **bootJumpOffset** as to where to start setting memory to 0, it will change between a cold boot and a warm boot.
```c
// MergeBytesTo16Bit combines high and low bytes into a single 16-bit value value
#define MergeBytesTo16Bit(highByte, lowByte) = (((uint16_t)highByte) << 8) | ((uint8_t)lowByte)

// Note the parameter bootJumpOffset is set to 0xd6 for Warm Boot
// Note the parameter bootJumpOffset is set to 0xfe for Cold Boot
void InitializeMemory(byte bootJumpOffset)
{
  byte initialHighByte = 0x7;
  byte initialLowByte = 0;
  do {
    initialLowByte = MergeBytesTo16Bit(initialHighByte,initialLowByte);
    do {
      if ((initialHighByte != 1) || (bootJumpOffset < 0x60)) {
        // set the memory to the value 0
        *(byte *)(initialLowByte + (ushort)bootJumpOffset) = 0;
      }
      bootJumpOffset = bootJumpOffset - 1;
    } while (bootJumpOffset != 0xff);

    initialHighByte = initialHighByte - 1;
  } while (initialHighByte > -1);
  return;
}
```

---
## The MoveAllSpritesOffscreen function
This code is intended to manipulate the positions of sprites in NES game development by moving them off-screen. 

The NES handles sprite data in an area of memory called the Object Attribute Memory (OAM). Each sprite's position, appearance, and other attributes are stored here.

The OAM is 256 bytes in size. It stores data for up to 64 sprites, with each sprite taking **4 bytes**.
Each sprite's data consists of:
* **Y-coordinate** (1 byte): The vertical position of the sprite on the screen.
* **Tile Index** (1 byte): The index of the sprite's graphic in the pattern table.
* **Attributes** (1 byte): Contains various sprite properties like palette, flipping, and priority.
* **X-coordinate** (1 byte): The horizontal position of the sprite on the screen.

```c
void MoveAllSpritesOffscreen()
{  
  byte spriteOffset = 0;
  do {
    *(undefined *)(spriteYPosition + 0x200) = 0xf8;
    spriteOffset = spriteOffset + 4; // Add 4 bytes to get the next Y Position
  } while (spriteOffset != 0); // Keep going until spriteOffset wraps around to 0 again (do all 64 sprites)
  return;
}
```

 This loops over all sprites and sets the Y value of each of the sprites in the OAM to 0xF8 (decimal 248).
 This is because the Y position is the first byte in the 4 byte Sprite in OAM memory.
 
 The Y-coordinate of (0xF8) 248 is off-screen on the NES (as the visible Y-coordinate range is 0–239), effectively hiding the sprite

---
## The InitializeNameTables function
The InitializeNameTables function sets up the name tables and attribute tables for rendering the background on the screen. 

Name tables define the layout of background tiles on the screen, and attribute tables define the color properties for those tiles. The code prepares these tables by clearing them and setting them to a default state. 

```c
void InitializeNameTables()
{
  char cVar1;
  byte currentPPUStatus;

// Reading from PPU_STATUS ($2002) is a common practice to reset the PPU’s internal address latch (or flip-flop). This ensures that subsequent writes to the PPU address or data ports will work correctly.
  currentPPUStatus = PPUSTATUS;

// See section below explaining the changes to the PPU Bit flags (sprite and background data flags)
  WritePPUReg1(Mirror_PPU_CTRL_REG1 & 0xf0 | 0x10);

  PPUADDR = 0x24;
  PPUADDR = 0;
  VRAM_Buffer1_Offset = 4;
  
// Nametable loop for 768 tiles (4 times 192)
uint8_t i = 192;
  do {
    do {
      PPUDATA = 0x24; // Set to Blank tile 0x24
      i = i - 1;
    } while (i != 0);
    VRAM_Buffer1_Offset = VRAM_Buffer1_Offset - 1;
  } while (VRAM_Buffer1_Offset != 0);

// Attribute Table Loop (64 times)
  uint8_t j = 64;
  do {
    PPUDATA = 0; // Reset Attribute to 0
    j = j - 1;
  } while (j != 0);

  HorizontalScroll = 0; // reset our own scroll global variables to 0
  VerticalScroll = 0;

  InitScroll(); // reset the PPU scroll registers to 0
  return;
}
```

### Updating the PPU Control Register 1 to set Sprite and Background information
Mario Bros sets up the PPU Control Register 1 with certain bits set to control functionality of the Picture Processing Unit (PPU).
The following code is used:
```c
// Change the PPU Control Register 1 to:
// * '| 0x10' - Bitwise OR to set Bit 4 which means it has sprites for first 4kb and background for second 4kb
// * '& 0xf0' - Bitwise AND that clears rest of lower nybble, leave higher nybble alone
  WritePPUReg1(Mirror_PPU_CTRL_REG1 & 0xf0 | 0x10);
```
This setup is common when the developer wants to separate sprite and background graphics into distinct sections of VRAM, simplifying sprite and background management.

By setting bit 4 to 1 (0x10) (with `| 0x10`), the code configures the PPU to use the first 4 KB of pattern table memory for sprites and the second 4 KB for the background.

#### Why Clear the Lower Nibble?
By clearing the lower nibble (with `& 0xF0`), the code is explicitly resetting bits 0–3 to 0. This ensures that specific settings for nametable selection, VRAM increment, and pattern table addresses are cleared. This can be important if the code needs a clean slate, especially if these bits were previously set to something that could conflict with the desired behavior.

* **Reset Specific Settings** - By clearing the lower nibble (`& 0xF0`), the code is explicitly resetting bits 0–3 to `0`. This ensures that specific settings for nametable selection, VRAM increment, and pattern table addresses are cleared. This can be important if the code needs a clean slate, especially if these bits were previously set to something that could conflict with the desired behavior.

* **Avoid Unintended Behavior** - If the lower nibble were not cleared, any leftover settings in bits 0–3 could cause unintended changes in how the PPU handles background rendering or sprite patterns. For example, if bit 3 were set to `1` instead of `0`, the background would use the first 4 KB of the pattern table instead of the second 4 KB, which could result in incorrect graphics being displayed.

* **Explicit Control** - Clearing the lower nibble provides explicit control over which bits are set in the `PPUCTRL` register. This is especially important in NES development, where fine control over the PPU is crucial for correct rendering.

#### What are the Lower nibble bytes doing?
**PPU Control Register 1** is an 8-bit register with various bits controlling different aspects of the NES's PPU operation. The bits in the lower nibble (bits 0–3) are particularly important for configuring background and sprite rendering:

- **Bit 0** (`Base nametable address`): Controls which nametable (background map) is used as the base for the background.
- **Bit 1** (`VRAM address increment`): Determines the increment value for the PPU's address after accessing its data.
- **Bit 2** (`Sprite pattern table address for 8x8 sprites`): Selects which 4 KB of pattern table memory to use for sprites.
- **Bit 3** (`Background pattern table address`): Selects which 4 KB of pattern table memory to use for the background.

---
## The InitScroll function
The InitScroll routine sets the NES background scroll position by writing to the **PPUSCROLL** register twice: 
* first to set the horizontal scroll
* second to set the vertical scroll.

This sequence ensures that the background image is scrolled to the desired position on the screen, it can be expressed in C like the following:
```c
void InitScroll(byte param_1)
{
  PPUSCROLL = param_1;
  PPUSCROLL = param_1;
  return;
}
```

Now we have covered all the functions that get called during the starting initialization of the game. After all this code has executed the first Non Maskable Interrupt will be called, allowing us to start the main game loop which will be covered in the next section.

---
# NMI/VBlank - The main game loop
The **NMI** is primarily used to handle the PPU (Picture Processing Unit) vblank (vertical blanking) period. 

During vblank, the screen rendering is temporarily paused, and this is the ideal time to update graphics, handle game logic, and perform other tasks that should not interfere with the rendering process.

```c
void vblank()
{
  // Disable NMIs in mirror register
  uint8_t temp = PPU_CTRL_REG1 & 0x7F;
  PPU_CTRL_REG1 = temp;
  PPU_CTRL_REG1 = temp & 0x7E;  // Alter name table address to $2800

  // Disable OAM and background display by default
  temp = PPU_CTRL_REG2 & 0xE6;

  // Check screen disable flag
  if (DisableScreenFlag != 0) {
      // If set, use bits as-is
      PPU_CTRL_REG2 = temp & 0xE7;
  } else {
      // Otherwise re-enable bits and save them
      temp |= 0x1E;
      PPU_CTRL_REG2 = temp & 0xE7;
  }

  // Reset flip-flop and reset scroll registers to zero
  (void)PPU_STATUS;
  InitScroll();

  // Reset sprite-ram address register and perform DMA access
  PPU_SPR_ADDR = 0x00;
  PPU_SPR_DMA = 0x02;

  // Load control for pointer to buffer contents
  uint8_t index = VRAM_Buffer_AddrCtrl;
  uint8_t addr_low = VRAM_AddrTable_Low[index];
  uint8_t addr_high = VRAM_AddrTable_High[index];

  // Update screen with buffer contents
  UpdateScreen(addr_low, addr_high);

  // Check for usage of $0341
  uint8_t y = 0x00;
  if (index == 0x06) {
      y = 0x01;  // Get offset based on usage
  }

  // Clear buffer header at last location
  index = VRAM_Buffer_Offset[y];
  VRAM_Buffer1_Offset[index] = 0x00;
  VRAM_Buffer1[index] = 0x00;
  VRAM_Buffer_AddrCtrl = 0x01;

  // Copy mirror of $2001 to register
  PPU_CTRL_REG2 = PPU_CTRL_REG2;

  // Play sound, read joypads, handle pause, update top score
  SoundEngine();
  ReadJoypads();
  PauseRoutine();
  UpdateTopScore();

  // Check for pause status
  if (!(GamePauseStatus & 0x01)) {
      // If not paused, decrement timers
      if (TimerControl == 0) {
          for (int8_t x = 0x14; x >= 0x00; --x) {
              if (Timers[x] != 0) {
                  Timers[x]--;
              }
          }
      } else {
          TimerControl--;
      }
  }

  // Increment frame counter
  FrameCounter++;


  // Rotate pseudo-random bits
  for (uint8_t x = 0, y = 7; y > 0; --y) {
      uint8_t temp1 = PseudoRandomBitReg[x] & 0b00000010;
      uint8_t temp2 = PseudoRandomBitReg[x + 1] & 0b00000010;
      uint8_t result = temp1 ^ temp2;
      if (result != 0) {
          PseudoRandomBitReg[x] |= 0x80;
      } else {
          PseudoRandomBitReg[x] &= 0x7F;
      }
      x++;
  }

  // Wait for sprite 0 flag to clear
  if (Sprite0HitDetectFlag == 0) {
      while (PPU_STATUS & 0x40) {}
      MoveSpritesOffscreen();
      SpriteShuffler();
  }

  // Set scroll registers from variables
  PPU_SCROLL_REG = HorizontalScroll;
  PPU_SCROLL_REG = VerticalScroll;

  // Copy mirror of $2000 to register and reactivate NMIs
  temp = PPU_CTRL_REG1 | 0x80;
  PPU_CTRL_REG1 = temp;

  // Execute operation mode if not paused
  if (!(GamePauseStatus & 0x01)) {
      OperModeExecutionTree();
  }

  
}
```


## UpdateScreen function
The UpdateScreen function is responsible for writing data from a buffer to the PPU's (Picture Processing Unit) VRAM (Video RAM) on the NES. This function involves setting up the PPU address, managing data writes, and handling special conditions like repeating bytes or adjusting the VRAM address increment.

```c
// Simulate loading a byte from an indirect address
uint8_t loadByteFromIndirect(uint8_t* lowByte, uint8_t* highByte, uint8_t offset) {
    // Construct the full 16-bit address from the low and high bytes
    uint16_t address = (*highByte << 8) | *lowByte;
    // Return the byte from the computed address + offset
    return *((uint8_t*)(address + offset));
}

void UpdateScreen(uint8_t* addr_low, uint8_t* addr_high) {
    // Read PPU_STATUS to reset the PPU's flip-flop
    volatile uint8_t status = PPU_STATUS;

    // Set Y to 0 (represented as an offset in this case)
    uint8_t y = 0x00;

    // Load the byte from the memory address pointed to by ptrBufferAddrLow and ptrBufferAddrHigh
    uint8_t byteToLoad = loadByteFromIndirect(addr_low, addr_high, y);

    // If the byte is not zero, branch to WriteBufferToScreen
    if (byteToLoad != 0x00) {
        WriteBufferToScreen();
    }
}

void WriteBufferToScreen() {
    uint8_t y = 0;  // Initialize Y register to zero
    uint8_t temp, length, data;
    
    // Step 1: Set high byte of VRAM address
    PPU_ADDRESS = *ptrBufferAddrHigh;
    
    // Step 2: Set low byte of VRAM address
    y++;
    PPU_ADDRESS = loadByteFromIndirect(ptrBufferAddrLow, ptrBufferAddrHigh, y);
    
    // Step 3: Load the next byte, perform shift and save to stack
    y++;
    temp = loadByteFromIndirect(ptrBufferAddrLow, ptrBufferAddrHigh, y);
    uint8_t stackByte = temp << 1;
    
    // Step 4: Modify PPU control register based on the byte's value
    uint8_t ctrlReg = Mirror_PPU_CTRL_REG1 | 0x04; // Set to increment by 32
    if (temp & 0x80) {  // Check if d7 is clear
        ctrlReg &= 0xFB; // Set to increment by 1
    }
    
    WritePPUReg1(ctrlReg);
    
    // Step 5: Pull from stack and determine length/repetition
    stackByte <<= 1;
    if (!(stackByte & 0x40)) {  // Check if d6 is clear
        length = stackByte >> 2; // Get the proper length
    } else {
        stackByte |= 0x02; // Set d1 for repetition
        y++;
        length = stackByte >> 2;
    }
    
    // Step 6: Output to VRAM
    do {
        if (!(stackByte & 0x02)) {
            y++;  // Increment Y to load the next byte if not repeating
        }
        data = loadByteFromIndirect(ptrBufferAddrLow, ptrBufferAddrHigh, y);
        PPU_DATA = data;
        length--;
    } while (length > 0);
    
    // Step 7: Update the buffer pointer
    uint16_t ptr = ((uint16_t)*ptrBufferAddrHigh << 8) | *ptrBufferAddrLow;
    ptr += (length + 1);
    *ptrBufferAddrLow = ptr & 0xFF;
    *ptrBufferAddrHigh = (ptr >> 8) & 0xFF;
    
    // Step 8: Set VRAM address to $3F00 and reinitialize
    PPU_ADDRESS = 0x3F;
    PPU_ADDRESS = 0x00;
    PPU_ADDRESS = 0x00;
    PPU_ADDRESS = 0x00;
    
    // Back to UpdateScreen loop
    UpdateScreen();
}
```

## SpriteShuffler function
The **SpriteShuffler** function is responsible for adjusting the sprite data offsets in Object Attribute Memory (OAM) to shuffle or randomize the order in which sprites are drawn on the screen. This can help in achieving effects like flickering to avoid sprite limitations, managing sprite priorities, or updating sprite positions based on certain gameplay mechanics. The function involves manipulating a preset sprite offset and adjusting it based on shuffle amounts to create a new order or position for the sprites.

```c
uint8_t AreaType;                     // Placeholder for the level type
uint8_t SprDataOffset[16];            // Array representing sprite data offsets in OAM
uint8_t SprShuffleAmtOffset;          // Offset to the shuffle amount
uint8_t SprShuffleAmt[4];             // Array of shuffle amounts
uint8_t Misc_SprDataOffset[9];        // Array for miscellaneous sprite data offsets

void SpriteShuffler() {
    uint8_t presetValue = 0x28;       // Preset value for comparison
    uint8_t tempX = 0x0e;             // Start at the end of sprite data offsets

    // ShuffleLoop: iterate over sprite data offsets
    do {
        uint8_t currentOffset = SprDataOffset[tempX];  // Get current sprite data offset
        
        if (currentOffset >= presetValue) {
            // If the current offset is greater than or equal to presetValue
            uint8_t shuffleAmount = SprShuffleAmt[SprShuffleAmtOffset];  // Get shuffle amount
            currentOffset += shuffleAmount;                             // Add shuffle amount to offset
            
            if (currentOffset < presetValue) { // Check if overflow occurred
                currentOffset += presetValue;  // Add presetValue if overflow occurred
            }
            
            SprDataOffset[tempX] = currentOffset; // Store new offset back in array
        }
        
        tempX--;  // Decrement X to move to the next offset
    } while (tempX >= 0); // Continue until all offsets are processed

    // Update the shuffle amount offset
    SprShuffleAmtOffset++;
    if (SprShuffleAmtOffset >= 3) {
        SprShuffleAmtOffset = 0;  // Reset to 0 if it reaches 3
    }

    // Set Miscellaneous Sprite Data Offsets
    uint8_t miscX = 8;
    uint8_t miscY = 2;

    do {
        // Load, modify and store miscellaneous sprite data offsets
        Misc_SprDataOffset[miscX - 2] = SprDataOffset[5 + miscY];    // Store unmodified
        Misc_SprDataOffset[miscX - 1] = SprDataOffset[5 + miscY] + 8; // Add 8 to the second
        Misc_SprDataOffset[miscX] = SprDataOffset[5 + miscY] + 16;   // Add 16 to the third
        
        miscX -= 3;  // Decrement miscX by 3 (equivalent to `dex dex dex` in assembly)
        miscY--;     // Decrement miscY by 1
    } while (miscY >= 0);  // Continue until all miscellaneous offsets are loaded
}

```


