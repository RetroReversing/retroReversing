---
layout: post
tags: 
- introduction
- tutorial
- tools
title: Creating a LibRetro Frontend in Rust
image: /public/images/tutorials/Creating a LibRetro Frontend in Rust.jpg
twitterimage: http://www.retroreversing.com/public/images/tutorials/Creating a LibRetro Frontend in Rust.jpg
thumbnail: /public/consoles/Tools.jpg
permalink: /CreateALibRetroFrontEndInRust
breadcrumbs:
  - name: Home
    url: /
  - name: Tutorials
    url: /tutorials
  - name: Creating a LibRetro Frontend in Rust (RustroArch)
    url: #
recommend: 
- introduction
- tutorial
editlink: /tutorials/CreateALibRetroFrontEndInRust.md
updatedAt: '2023-05-07'
---
Welcome to this comprehensive tutorial on creating a LibRetro Frontend using Rust! If you're passionate about retro gaming and interested in creating your very own emulation frontend from scratch, you've come to the right place. Rust, with its strong safety guarantees, performance, and concurrency support, makes it an ideal choice for developing such applications.

In this tutorial, we will walk you through the process of building a fully-functional LibRetro frontend from the ground up. We will start by introducing you to the basics of creating a graphical Rust application and the LibRetro API, then delve into essential concepts such as handling input, video, and audio. By the end of this tutorial, you'll have a solid understanding of the inner workings of a LibRetro frontend and the knowledge to create your own customized version to relive your favorite gaming memories.

# Step 1 - Setup MiniFB

The first step was just to get a window where we can draw pixels and respond to user input, we want it to be very simple and cross-platform so we can use the `minifb` library.

```rust
use minifb::{Key, Window, WindowOptions};

const WIDTH: usize = 640;
const HEIGHT: usize = 480;

fn main() {
    let mut buffer: Vec<u32> = vec![0; WIDTH * HEIGHT];
    let mut window = Window::new(
        "Rust Game",
        WIDTH,
        HEIGHT,
        WindowOptions::default(),
    ).unwrap_or_else(|e| {
        panic!("{}", e);
    });

    window.limit_update_rate(Some(std::time::Duration::from_micros(16600))); // ~60fps

    let mut x: usize = 0;
    let mut y: usize = 0;

    while window.is_open() && !window.is_key_down(Key::Escape) {
        // Move the pixel when the arrow keys are pressed
        if window.is_key_down(Key::Left) && x > 0 {
            x -= 1;
        }
        if window.is_key_down(Key::Right) && x < WIDTH - 1 {
            x += 1;
        }
        if window.is_key_down(Key::Up) && y > 0 {
            y -= 1;
        }
        if window.is_key_down(Key::Down) && y < HEIGHT - 1 {
            y += 1;
        }

        // Set the pixel to blue
        buffer[y * WIDTH + x] = 0x0000FFFF;

        // Update the window buffer and display the changes
        window.update_with_buffer(&buffer, WIDTH, HEIGHT).unwrap();
    }
}
```

The result of this is that it draws a blue pixel at an x,y position and you can move it around with the arrow keys, note that we don't clear the frame buffer every frame so it keeps all the previous positions as blue pixels too. The end result is you can draw blue lines on the screen.

# Step 2 - Clear the screen every frame

The line effect is cool but we should clear the screen to black every frame so that the player can just move the individual pixel aroun d the screen, you can do this by adding the following code to the start of the loop:

```rust
// Clear the buffer to black
for pixel in &mut buffer {
    *pixel = 0x00000000;
}
```

# Step 3 - Display the Frames per second

That looks great but is it efficinet to loop through the whole array every frame (60 times a second) to set every pixel to black? Probably not, but it would be good to have a way to measure this, lets display the frames per second and we can compare the speed of future changes.

To display the fps, you can use the Instant type from the std::time module to measure the time between frames. Here's an updated version of your code that displays the fps in the window title:

```rust
use minifb::{Key, Window, WindowOptions};
use std::time::{Duration, Instant};

const WIDTH: usize = 640;
const HEIGHT: usize = 480;

fn main() {
    let mut buffer: Vec<u32> = vec![0; WIDTH * HEIGHT];
    let mut window = Window::new(
        "Rust Game",
        WIDTH,
        HEIGHT,
        WindowOptions::default(),
    ).unwrap_or_else(|e| {
        panic!("{}", e);
    });
   // window.limit_update_rate(Some(std::time::Duration::from_micros(16600))); // ~60fps (commented out to get over 60fps)

    let mut x: usize = 0;
    let mut y: usize = 0;

    let mut fps_timer = Instant::now();
    let mut fps_counter = 0;

    while window.is_open() && !window.is_key_down(Key::Escape) {
        // Clear the buffer to black
        for pixel in &mut buffer {
            *pixel = 0x00000000;
        }
        // Calculate fps
        fps_counter += 1;
        let elapsed = fps_timer.elapsed();
        if elapsed >= Duration::from_secs(1) {
            let fps = fps_counter as f64 / elapsed.as_secs_f64();
            window.set_title(&format!("Rust Game (FPS: {:.2})", fps));
            fps_counter = 0;
            fps_timer = Instant::now();
        }

        // Move the pixel when the arrow keys are pressed
        if window.is_key_down(Key::Left) && x > 0 {
            x -= 1;
        }
        if window.is_key_down(Key::Right) && x < WIDTH - 1 {
            x += 1;
        }
        if window.is_key_down(Key::Up) && y > 0 {
            y -= 1;
        }
        if window.is_key_down(Key::Down) && y < HEIGHT - 1 {
            y += 1;
        }

        // Set the current pixel to blue
        buffer[y * WIDTH + x] = 0x0000FFFF;

        // Update the window buffer and display the changes
        window.update_with_buffer(&buffer, WIDTH, HEIGHT).unwrap();
    }
}
```

In this updated code, we use an Instant timer to measure the elapsed time between frames. We keep track of the number of frames rendered (fps_counter) and the time elapsed since the last fps update (fps_timer). When a second has passed, we calculate the fps and update the window title using the Window::set_title() method. Finally, we reset the fps counter and timer.

# Step 4 - Using buffer.fill instead of looping through array

Now that we can measure the frames per second we can test to see if using buffer.fill is more efficinet that looping through each pixel and setting to black, so replace the loop with:

```rust
buffer.fill(0x00000000);
```

I get slightly higher FPS with buffer.fill, but at the end of the day it is still looping over each pixel, one way we could fix this is to just set the previous pixel to black each frame at the start of the loop, like so:

```rust
while window.is_open() && !window.is_key_down(Key::Escape) {
        // Clear the previous pixel to black
        buffer[y * WIDTH + x] = 0x00000000;
```

This gets a much higher fps, of course this is not particularly useful right now as when creating a game it is unlikely that we will just update a single pixel per frame, but it is good to keep in mind for future optimizations, the less pixels we update per frame the more efficient we can be.

# Step 5 - Load a Dynamic Library (dll/dylib) from the code

All libRetro cores are compiled into platform-specific dynamic libraries (dylib on MacOSX and dll on Windows), we want to be able to call one of these functions from our code in order to get our frontend to do anything.

In order to do this we need to add the **libloading** crate as a dependency inside the **Cargo.toml** file like so:

```
[dependencies]
libloading = "0.7.0"
```

Then import the crate at the top of the file like so:

```
extern crate libloading;
```

We will create a function to load the dynamic library like so:

```
fn load_core() {
    unsafe {
        let lib = Library::new("my_library.dylib").expect("Failed to load Core");
    }
}
```

You should call the load_core function before the main game loop and if you have my_library.dylib in your current directory it will load it, otherwise it will print the string "Failed to load Core" and exit.

Note if you are on Windows make sure your core ends with `.dll`, on Linux `.so` and on MacOSX `.dylib`, the above example is for MacOSX.

You can download cores for your platform using the LibRetro BuildBot available here: [LibRetro Nightly Builds](https://buildbot.libretro.com/nightly/).

# Step 6 - Calling a function from the Core (Dynamic Library)

As an example lets call the function `retro_init` as it is one of the simplest functions (it doesn't require any parameters).

```rust
fn load_core() {
    unsafe {
        let core = Library::new("gambatte_libretro.dylib").expect("Failed to load Core");
        let retro_init: unsafe extern "C" fn() = *(core.get(b"retro_init").unwrap());
        retro_init();
    }
}

```

When running this may actually cause a Segmentation fault depending on which core you use as the function `retro_init` expects a few things to be set before executing. The fact that it caused a segmentation fault in the first place is a good sign in this case and we will fix this in the next step by providing the callback functions that it requires.

For more information about retro-init and the callback functions it requires you can checkout the guide: [Developing Cores for LibRetro](https://docs.libretro.com/development/cores/developing-cores/).

# Step 7 - Retrieving a response from the Core

Before we call the setup functions we should make sure that the core is written using a version of the LibRetro API that is compatible with what we expect.

The function `retro_api_version` is used for this purpose and at the time of current written just returns the number 1, we can call this function from the core and retrieve its value and print it to the console like so:

```rust
const EXPECTED_LIB_RETRO_VERSION: u32 = 1;

fn load_core() {
    unsafe {
        let core = Library::new("gambatte_libretro.dylib").expect("Failed to load Core");
        let retro_init: unsafe extern "C" fn() = *(core.get(b"retro_init").unwrap());
        let retro_api_version: unsafe extern "C" fn() -> libc::c_uint = *(core.get(b"retro_api_version").unwrap());
        let api_version = retro_api_version();
        println!("API Version: {}", api_version);
        if (api_version != EXPECTED_LIB_RETRO_VERSION) {
            panic!("The Core has been compiled with a LibRetro API that is unexpected, we expected version to be: {} but it was: {}", EXPECTED_LIB_RETRO_VERSION, api_version)
        }
    }
}

```

# Step 8 - Setting up the environment for the Core

Now to fix that segmentation fault error when calling `retro_init`, all we need to do it set whats called an `**Environment Callback**` function and pass it to the core. The Environment Callback function is used to allow the core to call back to the frontend to request information.

The information they can request comes in the form of a Command ID and is passed back to the core using a data buffer, so the Environment Callback takes in those two paramaters, we can implement this like so:

```rust
pub type EnvironmentCallback = unsafe extern "C" fn(command: libc::c_uint, data: *mut libc::c_void) -> bool;

unsafe extern "C" fn libretro_environment_callback(command: u32, data: *mut c_void) -> bool {
    println!("libretro_environment_callbac Called with command: {}", command);
    false
}

fn load_core() {
    unsafe {
        let core = Library::new("gambatte_libretro.dylib").expect("Failed to load Core");
        let retro_init: unsafe extern "C" fn() = *(core.get(b"retro_init").unwrap());
        let retro_api_version: unsafe extern "C" fn() -> libc::c_uint = *(core.get(b"retro_api_version").unwrap());
        let retro_set_environment: unsafe extern "C" fn(callback: EnvironmentCallback) = *(core.get(b"retro_set_environment").unwrap());
        let api_version = retro_api_version();
        println!("API Version: {}", api_version);
        if (api_version != EXPECTED_LIB_RETRO_VERSION) {
            panic!("The Core has been compiled with a LibRetro API that is unexpected, we expected version to be: {} but it was: {}", EXPECTED_LIB_RETRO_VERSION, api_version)
        }
        retro_set_environment(libretro_environment_callback);
        retro_init();
    }
}
```

If all goes well, when you run the program you will now not get a Segmentation fault (I didn't with the gameboy gambatte core) but it will also print out each call to the environment callback like so:

```rust
API Version: 1
callback_environment Called with command: 52
callback_environment Called with command: 16
callback_environment Called with command: 69
callback_environment Called with command: 65581
callback_environment Called with command: 27
callback_environment Called with command: 8
callback_environment Called with command: 70
callback_environment Called with command: 59
callback_environment Called with command: 39
callback_environment Called with command: 15
callback_environment Called with command: 65587
callback_environment Called with command: 64
```

All those integers you see in the output are **Command IDs** and you can see a full list of them if you go to the [LibRetro.h Header File](https://github.com/libretro/libretro-common/blob/master/include/libretro.h), they start with `RETRO_ENVIRONMENT_`.

For example you can see that the first value `52` is called `RETRO_ENVIRONMENT_GET_CORE_OPTIONS_VERSION` which is requesting the version of the LibRetro API that we expect future calls to be using.

We could define all these constants outselves, but after a quick google search you can see that there is already a rust library with these defined called `libretro-sys` that we can use instead.

# Step 9 - Using the types from libretro-sys cargo

We can now add the following to our `Cargo.toml` file:

```rust
libretro-sys = "0.1.1"
```

Now that we are using the `libretro-sys` library we can refactor the function a bit to use the `CoreAPI` type provided the the library and implement the rest of the functions, to look like this:

```rust
use libretro_sys::CoreAPI;

fn load_core() -> (Library, CoreAPI) {
    unsafe {
        let dylib = Library::new("gambatte_libretro.dylib").expect("Failed to load Core");
  
        let core_api = CoreAPI {
            retro_set_environment: *(dylib.get(b"retro_set_environment").unwrap()),
            retro_set_video_refresh: *(dylib.get(b"retro_set_video_refresh").unwrap()),
            retro_set_audio_sample: *(dylib.get(b"retro_set_audio_sample").unwrap()),
            retro_set_audio_sample_batch: *(dylib.get(b"retro_set_audio_sample_batch").unwrap()),
            retro_set_input_poll: *(dylib.get(b"retro_set_input_poll").unwrap()),
            retro_set_input_state: *(dylib.get(b"retro_set_input_state").unwrap()),

            retro_init: *(dylib.get(b"retro_init").unwrap()),
            retro_deinit: *(dylib.get(b"retro_deinit").unwrap()),

            retro_api_version: *(dylib.get(b"retro_api_version").unwrap()),

            retro_get_system_info: *(dylib.get(b"retro_get_system_info").unwrap()),
            retro_get_system_av_info: *(dylib.get(b"retro_get_system_av_info").unwrap()),
            retro_set_controller_port_device: *(dylib.get(b"retro_set_controller_port_device").unwrap()),

            retro_reset: *(dylib.get(b"retro_reset").unwrap()),
            retro_run: *(dylib.get(b"retro_run").unwrap()),

            retro_serialize_size: *(dylib.get(b"retro_serialize_size").unwrap()),
            retro_serialize: *(dylib.get(b"retro_serialize").unwrap()),
            retro_unserialize: *(dylib.get(b"retro_unserialize").unwrap()),

            retro_cheat_reset: *(dylib.get(b"retro_cheat_reset").unwrap()),
            retro_cheat_set: *(dylib.get(b"retro_cheat_set").unwrap()),

            retro_load_game: *(dylib.get(b"retro_load_game").unwrap()),
            retro_load_game_special: *(dylib.get(b"retro_load_game_special").unwrap()),
            retro_unload_game: *(dylib.get(b"retro_unload_game").unwrap()),

            retro_get_region: *(dylib.get(b"retro_get_region").unwrap()),
            retro_get_memory_data: *(dylib.get(b"retro_get_memory_data").unwrap()),
            retro_get_memory_size: *(dylib.get(b"retro_get_memory_size").unwrap()),
        };

        let api_version = (core_api.retro_api_version)();
        println!("API Version: {}", api_version);
        if (api_version != EXPECTED_LIB_RETRO_VERSION) {
            panic!("The Core has been compiled with a LibRetro API that is unexpected, we expected version to be: {} but it was: {}", EXPECTED_LIB_RETRO_VERSION, api_version)
        }
        (core_api.retro_set_environment)(libretro_environment_callback);
        (core_api.retro_init)();
        return (dylib, core_api);
    }

```

I return the CoreAPI so we can call the functions in the rest of the code as it will be useful to call `retro_run` to render every frame inside the loop where we currently draw the blue pixel.

Here is an example of how we can call and use this new structure:

```rust
unsafe {
        let (dylib, core_api) = load_core();
        (core_api.retro_init)();
    }
```

If I am honest I only returned the dylib as I have not yet figured out Rust memory-management and if I don't return it then the library memory will be cleaned up causing the retro_init call to cause a Segmentation Fault. I could have passed in the dylib object to the function instead but I wanted to keep the dylib logic out of the main function. I will come back to this when I know more about Rust.

Since this basically leaks memory already we could change it to:

```rust
        let dylib = Box::leak(Box::new(Library::new("gambatte_libretro.dylib").expect("Failed to load Core")));
```

Then it will not need to be returned and will not cause a segmentation fault.

Although this is just temporary, in the future we will move all this into its own data structure with additional settings, if/when we add the ability to change cores on the fly.

# Step 10 - Read Command Line arguments for ROM to load

Currently we have hard-coded the dynamic library into the code but now we can write code to read both the core to load and the ROM name to load from the command line arguments.

In order to be a drop-in replacement for RetroArch we should try to use the same command Line options, which are available on their website [here](https://docs.libretro.com/guides/cli-intro/).

The use the prefix -L to specify the core to load and the default parameter is the ROM file to play.

To do this lets first create a new structure to hold the current emulator state such as the rom that is loaded and the core to use:

```rust
struct EmulatorState {
    rom_name: String,
    library_name: String,
}
```

Now lets write a function using the `clap` crate to parse the command line arguments and return them in our brand new structure:

```rust
fn parse_command_line_arguments() -> EmulatorState {
    let matches = App::new("RustroArch")
        .arg(
            Arg::with_name("rom_name")
                .help("Sets the path to the ROM file to load")
                .required(true)
                .index(1),
        )
        .arg(
            Arg::with_name("library_name")
                .help("Sets the path to the libRetro core to use")
                .short("L")
                .takes_value(true),
        )
        .get_matches();

    let rom_name = matches.value_of("rom_name").unwrap();
    let library_name = matches.value_of("library_name").unwrap_or("default_library");
    println!("ROM name: {}", rom_name);
    println!("Core Library name: {}", library_name);
    return EmulatorState {
        rom_name: rom_name.to_string(), core_name: library_name.to_string()
    }
  
}
```

You now need to pass a ROM file to the program in order to get past the argument parsing logic like so:

```rust
 cargo build --release && ./target/release/rustro_arch Tetris.gb -L ./gambatte_libretro.dylib
```

# Step 11 - Loading the ROM file

Now that we have the path of the ROM file to load we need to pass it to our core using the `retro_load_game` function. The function takes in a structure which the Rust `libretro-sys` crate calls `GameInfo`.

Lets look at the definition of the `GameInfo` struct:

```rust
pub struct GameInfo {
    // Path to game, UTF-8 encoded. Usually used as a reference. May be NULL if rom
    // was loaded from stdin or similar. retro_system_info::need_fullpath guaranteed
    // that this path is valid.
    pub path: *const libc::c_char,

    // Memory buffer of loaded game. Will be NULL if need_fullpath was set.
    pub data: *const libc::c_void,

    // Size of memory buffer.
    pub size: libc::size_t,

    // String of implementation specific meta-data.
    pub meta: *const libc::c_char,
}
```

To populate this we need to convert our Rust rom_name string into a `*const libc::c_char` and also open copy all the bytes from the ROM file and put it im a buffer that we can pass to the data field.

For the first part we can use Foreign Function Interface (FFI) crate, specifically the `std::ffi::CString` type to convert to a C pointer like so:

```rust
use std::ffi::{c_void, CString};

let rom_name_cptr = CString::new(rom_name).expect("Failed to create CString").as_ptr();
```

Now to load the ROM file and put all its bytes into a `*const libc::c_void` buffer, you can use the `std::fs::read` function to read the file into a `Vec <u8>`, and then use the  `as_ptr()` method to obtain a pointer to the underlying bytes.

So lets create a function to load the ROM and pass it to the libRetro core:

```rust
unsafe fn load_rom_file(core_api: CoreAPI, rom_name: String) {
    let rom_name_cptr = CString::new(rom_name.clone()).expect("Failed to create CString").as_ptr();
    let contents = fs::read(rom_name).expect("Failed to read file");
    let data: *const c_void = contents.as_ptr() as *const c_void;
    let game_info = GameInfo {
        path: rom_name_cptr,
        data,
        size: contents.len(),
        meta: ptr::null(),
    };
    (core_api.retro_load_game)(&game_info);
}
```

We can call this function just before the main game loop:

```rust
unsafe {
   let core_api = load_core(emulator_state.core_name);
   (core_api.retro_init)();
   println!("About to load ROM: {}", emulator_state.rom_name);
   load_rom_file(core_api, emulator_state.rom_name);
}
```

Note that when running the Tetris ROM with gambatte core it now prints out:

```rust
[Gambatte] Cannot dupe frames!
```

Looking in the Gambatte source code for this statement we find: [This code](https://github.com/libretro/gambatte-libretro/blob/4c64b5285b88a08b8134f6c36177fdca56d46192/libgambatte/libretro/libretro.cpp#L2412)

```rust
bool retro_load_game(const struct retro_game_info *info)
{
   bool can_dupe = false;
   environ_cb(RETRO_ENVIRONMENT_GET_CAN_DUPE, &can_dupe);
   if (!can_dupe)
   {
      gambatte_log(RETRO_LOG_ERROR, "Cannot dupe frames!\n");
      return false;
   }
```

Which highlights two things, one is that `retro_load_game` returns a boolean whether or not it succcessfully loads the ROM or not and also that we need to properly implemnent the enivironment callback so that we can return true for `RETRO_ENVIRONMENT_GET_CAN_DUPE` to get past this logic.

For the boolean return value lets read the value and exit if it was not successful:

```rust
unsafe fn load_rom_file(core_api: &CoreAPI, rom_name: String) -> bool {
    let rom_name_cptr = CString::new(rom_name.clone()).expect("Failed to create CString").as_ptr();
    let contents = fs::read(rom_name).expect("Failed to read file");
    let data: *const c_void = contents.as_ptr() as *const c_void;
    let game_info = GameInfo {
        path: rom_name_cptr,
        data,
        size: contents.len(),
        meta: ptr::null(),
    };
    let was_load_successful = (core_api.retro_load_game)(&game_info);
    if (!was_load_successful) {
        panic!("Rom Load was not successful");
    }
    return was_load_successful;
}
```

Now lets support ``RETRO_ENVIRONMENT_GET_CAN_DUPE``by changing our `libretro_environment_callback` function to check if the command is `ENVIRONMENT_GET_CAN_DUPE`, this is a good use for the rust `match` statement:

```rust
unsafe extern "C" fn libretro_environment_callback(command: u32, return_data: *mut c_void) -> bool {
  
    match command {
        ENVIRONMENT_GET_CAN_DUPE => println!("ENVIRONMENT_GET_CAN_DUPE"),
        _ => println!("libretro_environment_callback Called with command: {}", command)
    }
    false
}
```

This will print `ENVIRONMENT_GET_CAN_DUPE` when the command comes in but it will still not get past the logic in Gambatte as we need to return the value true into the `return_data` buffer. To do this we can use the c-like syn tax to set the dereferenced pointer to the boolean true value like so:

```rust
*(return_data as *mut bool) = true; // Set the return_data to the value true
```

On a side note I have not yet found out what exactly ``RETRO_ENVIRONMENT_GET_CAN_DUPE`` is for, apparently GameBoy generates two identical frames back-to-back, so apparently the frontend needs to support being able to duplicate the same frame in order to maintain timing.

So we now have the environment callback function like so:

```rust
unsafe extern "C" fn libretro_environment_callback(command: u32, return_data: *mut c_void) -> bool {
  
    match command {
        ENVIRONMENT_GET_CAN_DUPE => {
            *(return_data as *mut bool) = true; // Set the return_data to the value true
            println!("Set ENVIRONMENT_GET_CAN_DUPE to true");
        },
        _ => println!("libretro_environment_callback Called with command: {}", command)
    }
    false
}
```

This gets past the dupe frames error but still fails on ROM load with the message:

```rust
[Gambatte] RGB565 is not supported.
```

Again looking at the Gambatte source code we can find out where it fails [here](https://github.com/libretro/gambatte-libretro/blob/4c64b5285b88a08b8134f6c36177fdca56d46192/libgambatte/libretro/libretro.cpp#L2502) so we need to implement the `RETRO_ENVIRONMENT_SET_PIXEL_FORMAT` command too, returning true is enough to get past this check for now, but in the near future we will need to save the pixel format when we want to draw the buffer to the screen:

```rust
unsafe extern "C" fn libretro_environment_callback(command: u32, return_data: *mut c_void) -> bool {
  
    match command {
        libretro_sys::ENVIRONMENT_GET_CAN_DUPE => {
            *(return_data as *mut bool) = true; // Set the return_data to the value true
            println!("Set ENVIRONMENT_GET_CAN_DUPE to true");
        },
        libretro_sys::ENVIRONMENT_SET_PIXEL_FORMAT => {
            println!("TODO: Handle ENVIRONMENT_SET_PIXEL_FORMAT when we start drawing the the screen buffer");
            return true;
        }
        _ => println!("libretro_environment_callback Called with command: {}", command)
    }
    false
}
```

After this change Gambatte gets pretty far in loading the ROM which we can see by looking at the console messages:

```rust
TODO: Set ENVIRONMENT_SET_PIXEL_FORMAT to something
libretro_environment_callback Called with command: 9
[Gambatte] No system directory defined, unable to look for 'gbc_bios.bin'.
libretro_environment_callback Called with command: 15
[Gambatte] Plain ROM loaded.
[Gambatte] rambanks: 0
[Gambatte] rombanks: 2
[Gambatte] Got internal game name: TETRIS.
libretro_environment_callback Called with command: 15
libretro_environment_callback Called with command: 65578
```

I am going to ignore the `gbc_bios.bin` error message for now, Tetris isn't a GBC game and I believe the BIOS is optional for this emulator anyway.

# Step 12 - Running the core with retro_run

Lets now see what happens when we request the core to run a whole frame of emulation, we can do this with the `retro_run` function like so:

```rust
 unsafe {
        let core_api = load_core(emulator_state.core_name);
        (core_api.retro_init)();
        println!("About to load ROM: {}", emulator_state.rom_name);
        load_rom_file(&core_api, emulator_state.rom_name);
        (core_api.retro_run)();
    }
```

Unfortunately this causes a segmentation fault as soon as we call it without printing anything new to the console:

```rust
ROM was successfully loaded
[1]    63265 segmentation fault  ./target/release/rustro_arch Tetris.gb -L ./gambatte_libretro.dylib
```

Bare in mind that so far we have been implementing the bare minimum of the libRetro API to get to this point, so it is likely it is requesting something we have not yet implemented. So lets have a look at what [libretro.h](https://github.com/libretro/libretro-common/blob/master/include/libretro.h) says is guarantted to be called before retro_run:

```rust
/* Sets callbacks. retro_set_environment() is guaranteed to be called
 * before retro_init().
 *
 * The rest of the set_* functions are guaranteed to have been called
 * before the first call to retro_run() is made. */
RETRO_API void retro_set_environment(retro_environment_t);
RETRO_API void retro_set_video_refresh(retro_video_refresh_t);
RETRO_API void retro_set_audio_sample(retro_audio_sample_t);
RETRO_API void retro_set_audio_sample_batch(retro_audio_sample_batch_t);
RETRO_API void retro_set_input_poll(retro_input_poll_t);
RETRO_API void retro_set_input_state(retro_input_state_t);
```

We have already implemented the environment callback, but lets create dummy implementations for each of the others so we can be sure that it isn't one of these missing functions causing the segmentation fault.

First create the dummy callback functions at the top of the file:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    println!("libretro_set_video_refresh_callback")
}

unsafe extern "C" fn libretro_set_input_poll_callback() {
    println!("libretro_set_input_poll_callback")
}

unsafe extern "C" fn libretro_set_input_state_callback(port: libc::c_uint, device: libc::c_uint, index: libc::c_uint, id: libc::c_uint) -> i16 {
    println!("libretro_set_input_state_callback");
    return 0; // Hard coded 0 for now means nothing is pressed
}

unsafe extern "C" fn libretro_set_audio_sample_callback(left: i16, right: i16) {
    println!("libretro_set_audio_sample_callback");
}

unsafe extern "C" fn libretro_set_audio_sample_batch_callback(data: *const i16, frames: libc::size_t) -> libc::size_t {
    println!("libretro_set_audio_sample_batch_callback");
    return 1;
}
```

As these are dummy functions we just print the function name that was called and if it requires a return value we just return the number 0, we will find out what we need to implement these later on.

Now pass them to the core after the call to `retro_init` like so:

```rust
(core_api.retro_init)();
(core_api.retro_set_video_refresh)(libretro_set_video_refresh_callback);
(core_api.retro_set_input_poll)(libretro_set_input_poll_callback);
(core_api.retro_set_input_state)(libretro_set_input_state_callback);
(core_api.retro_set_audio_sample)(libretro_set_audio_sample_callback);
(core_api.retro_set_audio_sample_batch)(libretro_set_audio_sample_batch_callback);
```

Now run the program and success it doesn't cause a segmentation fault! Lets now move the `retro_run` call into the main game loop so it calls the core every frame:

```rust
 unsafe {
        let core_api = load_core(emulator_state.core_name);
        (core_api.retro_init)();
        println!("About to load ROM: {}", emulator_state.rom_name);
        load_rom_file(&core_api, emulator_state.rom_name);
    }
  
    window.limit_update_rate(Some(std::time::Duration::from_micros(16600))); // Limit to ~60fps

    while window.is_open() && !window.is_key_down(Key::Escape) {

        // Call the libRetro core every frame
        unsafe {
            (core_api.retro_run)();
        }
```

Excellent so we can now run the core every frame and you will see a lot of lines printed to the console where it calls our callback functions such as:

```rust
libretro_set_audio_sample_batch_callback
libretro_environment_callback Called with command: 17
libretro_set_input_poll_callback
libretro_set_input_state_callback
```

# Step 13 - Get the pixel buffer from the core

Now that we have the core running it would be nice to actually see what the emulator is doing, for that we need to get the pixel buffer and display it instead of our moving blue pixel.

To get the pixel buffer from the libretro core we need to properly implement the `libretro_set_video_refresh_callback` we just created a dummy for as it is called every frame when the core has finished writing all the pixels to the frame buffer.

The width and height parameter will be useful as it is the size of the frame in pixels, but I need to find out what the pitch variable is used for. You can print out the values every frame like so:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(frame_buffer_data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    println!("libretro_set_video_refresh_callback, width: {}, height: {}, pitch: {}", width, height, pitch)
}
```

For the gambatte core it is currently printing this out every frame:

```rust
libretro_set_video_refresh_callback, width: 160, height: 144, pitch: 512
```

So the width and height look correct but lets quickly find out what pitch is and why it is set to 512, I decided to do the mordern thing ans asked ChatGPT, we got the following response:

> In the context of libretro, pitch refers to the number of bytes between two vertically adjacent pixels in an image. It is also sometimes called the "stride" or "line stride".
>
> The pitch value is important because many image processing algorithms and hardware acceleration APIs require that images be stored in memory in a specific format with a specific pitch value. If an image's pitch value does not match the expected value, it can cause visual artifacts or errors in processing.

It gave a better explanation than my google seach, but 512 pixels between two vertical pixels seems like quite a lot, we will come back to this soon, but lets at least see what the frame_buffer looks like.

The `frame_buffer_data` parameter contains all the pixel data to display, so lets at least print it out to the console to see what we are dealing with:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(frame_buffer_data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    println!("libretro_set_video_refresh_callback, width: {}, height: {}, pitch: {}", width, height, pitch);
    let length_of_frame_buffer = width*height;
    let slice = std::slice::from_raw_parts(frame_buffer_data as *const u8, length_of_frame_buffer as usize);
    println!("Frame Buffer: {:?}", slice);
}
```

This runs for a little bit and then causes a segmentation fault, if we remove the println then it will run successfully, so presumably either the frame buffer memory is being deleted while we are printing it or the `frame_buffer_data` is being passed as a null pointer, both could cause the segmentation fault.

First lets check if `frame_buffer_data` is a null pointer and return if it is:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(frame_buffer_data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    if (frame_buffer_data == ptr::null()) {
        println!("frame_buffer_data was null");
        return;
    }
    println!("libretro_set_video_refresh_callback, width: {}, height: {}, pitch: {}", width, height, pitch);
    let length_of_frame_buffer = width*height;
    let slice = std::slice::from_raw_parts(frame_buffer_data as *const u8, length_of_frame_buffer as usize);
    println!("Frame Buffer: {:?}", slice);
}
```

This fixes the segmentation fault and highlights a piece of useful information, that the frame_buffer_data is sometimes null, this could be related to the dupe frames mentioned earlier, maybe if it is null it expects the frontend to just display the previous frame?

# Step 14 - Displaying the Pixel Buffer to the screen

Now we have a buffer of pixels from the core, we need to figure out how we can display them to the screen, we have two problems to solve:

* We got the buffer of pixels in our callback function but how do we get that data into the main game loop to draw to our screen?
* We need to figure out the format that the pixel buffer is in, e.g how many bytes represent red, green, blue etc and is there alpha (transparency) information in the format?

For the first problem all I can think of is creating a global variable which we can access in both the callback function and in the main game loop, there is probably a much better way to do this in rust as global variables are generally bad practise but it will do for now. Maybe at the end of this project when I know more rust I can go back and refactor the code with explanations of why.

We can use our existing struct called `EmulatorState` for the global variable and add an optional frame buffer into the definiton, in rust you can create an optional field like so:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u8>>,
}

static mut CURRENT_EMULATOR_STATE: EmulatorState = EmulatorState {
    rom_name: String::new(),
    core_name: String::new(),
    frame_buffer: None,
}

```

Now before we initialise the core lets set this global variable to have the current rom name and core name and an empty `frame_buffer` so lets change this previous line:

```rust
    let emulator_state = parse_command_line_arguments();
```

To instead use the global variable:

```rust
unsafe { CURRENT_EMULATOR_STATE = parse_command_line_arguments() };
```

Note that the unsafe block is required as we are modifying global state, which is not thread safe, exactly why we shouldn't be using a global variable, maybe we could put the libRetro callback as a closure inside the main function along with the variable, but that wouldn't work as the callback needs to be marked as `extern` for the core to call it, anyway lets see if we can get the pixel buffer from the callback first.

Lets set the frame_buffer on our global variable:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(frame_buffer_data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    if (frame_buffer_data == ptr::null()) {
        println!("frame_buffer_data was null");
        return;
    }
    println!("libretro_set_video_refresh_callback, width: {}, height: {}, pitch: {}", width, height, pitch);
    let length_of_frame_buffer = width*height;
    let buffer_slice = std::slice::from_raw_parts(frame_buffer_data as *const u8, length_of_frame_buffer as usize);

    // Create a Vec<u8> from the slice
    let buffer_vec = Vec::from(buffer_slice);

    // Wrap the Vec<u8> in a Some Option and assign it to the frame_buffer field
    CURRENT_EMULATOR_STATE.frame_buffer = Some(buffer_vec);
    println!("Frame Buffer: {:?}", CURRENT_EMULATOR_STATE.frame_buffer);
}
```

Excellent so the frame_buffer has been successfully set on the global variable we should be able to access it from the main game loop!

So lets replace the old code that we were using to display the moving blue pixel example, from this:

```rust
window.update_with_buffer(&buffer, WIDTH, HEIGHT).unwrap();
```

To this:

```rust
unsafe {
        match &CURRENT_EMULATOR_STATE.frame_buffer {
            Some(buffer) => {
                // Do something with buffer
                let slice_u32: &[u32] = unsafe {
                    std::slice::from_raw_parts(buffer.as_ptr() as *const u32, buffer.len())
                }; // convert to &[u32] slice reference
                window.update_with_buffer(slice_u32, WIDTH, HEIGHT).unwrap();
            }
            None => {
                // Handle the case where frame_buffer is None
                println!("We don't have a buffer to display");
            }
        }
    }
```

Since the frame_buffer is optional we need to handle that using the common rust patten of using a match statement.

The `update_with_buffer` functionneed to take a u32 array but our buffer was a u8 array so we convert it and then pass it to the function.

Bare in mind we are just presuming (incorrectly) that the pixel format returned by the core will match exactly what the `minifb` library expects. So we are expecting this to put nonsense on the screen until we convert the pixel format from the core to match what `minifb` expects.

But first lets run and we realise that we get this error:

```rust
Update failed because input buffer is too small. Required size for 640 (640 stride) x 480 buffer is 1228800\n            bytes but the size of the input buffer has the size 23040 bytes
```

We are only passing 23040 bytes because we multipiled the width and height together and presumed that each pixel was a single byte which is of course incorrect.

But just to get something to display on the screen based on this frame buffer lets do a little hack and just fill up the rest of the buffer with the value 0x0000FFFF (blue) like so:

```rust
unsafe {
        match &CURRENT_EMULATOR_STATE.frame_buffer {
            Some(buffer) => {
                // Do something with buffer
                let slice_u32: &[u32] = unsafe {
                    std::slice::from_raw_parts(buffer.as_ptr() as *const u32, buffer.len())
                }; // convert to &[u32] slice reference
                // Temporary hack jhust to display SOMETHING on the screen
                let mut vec: Vec<u32> = slice_u32.to_vec();
                vec.resize( WIDTH*HEIGHT*4, 0x0000FFFF)
                window.update_with_buffer(&vec, WIDTH, HEIGHT).unwrap();
            }
            None => {
                // Handle the case where frame_buffer is None
                println!("We don't have a buffer to display");
            }
        }
    }
```

# Step 15 - Handling the core Pixel Format

Ok lets finally handle the Pixel format correctly, do you remember this dummy code block we created earlier:

```rust
libretro_sys::ENVIRONMENT_SET_PIXEL_FORMAT => {
            println!("TODO: Handle ENVIRONMENT_SET_PIXEL_FORMAT when we start drawing the the screen buffer");
            true
        },
```

This is where the core tells us the format it will write the Pixel buffer in, different cores will write in different pixel formats so we need to be able to handle the following formats which we can see in [libretro.h](https://github.com/libretro/libretro-common/blob/master/include/libretro.h#L3010):

* RETRO_PIXEL_FORMAT_0RGB1555
  * You can read this as `0,Red,Green,Blue`
  * 1 bit at the start that is always zero
  * 5 bits for red
  * 5 bits for green
  * 5 bits for blue
  * 16 bits total (2 bytes per pixel)
* RETRO_PIXEL_FORMAT_XRGB8888
  * You can read this as `Nothing,Red,Green,Blue`
  * 8 bits at the start that are unused (X)
  * 8 bits for red
  * 8 bits for green
  * 8 bits for blue
  * 32 bits total (4 bytes per pixel)
* RETRO_PIXEL_FORMAT_RGB565
  * You can read this as `Red,Green,Blue`
  * 5 bits for red
  * 6 bits for green (Humans are better at seeing moire shades of green than red/blue)
  * 5 bits for blue
  * 16 bits total (2 bytes per pixel))
* RETRO_PIXEL_FORMAT_UNKNOWN
  * No idea how to handle this apart from just displaying and error and exiting

So which format does our `minifb` library use to display its buffer? Well a quick look at the [documentation](https://docs.rs/minifb/0.24.0/minifb/struct.Window.html#method.update_with_buffer) comes up with this statement:

> Updates the window with a 32-bit pixel buffer. The encoding for each pixel is 0RGB: The upper 8-bits are ignored, the next 8-bits are for the red channel, the next 8-bits afterwards for the green channel, and the lower 8-bits for the blue channel.

Which is the same as `RETRO_PIXEL_FORMAT_XRGB8888`, so the good news is that cores that give us the pixel buffer in this format will be slightly more efficient as we won't need to convert it to this format every frame!

Lets first find out what pixel format we get with the Gambatte emulator core by modifying the `ENVIRONMENT_SET_PIXEL_FORMAT` match case statement:

```rust
libretro_sys::ENVIRONMENT_SET_PIXEL_FORMAT => {
            let pixel_format = *(return_data as *const u32);
            println!("Set ENVIRONMENT_SET_PIXEL_FORMAT to: {}", pixel_format);
            true
        },
```

For the Gambatte core this prints out:

```rust
Set ENVIRONMENT_SET_PIXEL_FORMAT to: 2
```

What does 2 mean? Well we can check the `libretro-sys` library to see if there is a nice ENUM name for the values and then print it out using a match statement:

```rust
libretro_sys::ENVIRONMENT_SET_PIXEL_FORMAT => {
            let pixel_format = *(return_data as *const u32);
            let pixel_format_as_enum = PixelFormat::from_uint(pixel_format).unwrap();
            match pixel_format_as_enum {
                PixelFormat::ARGB1555 => println!("Core will send us pixel data in the RETRO_PIXEL_FORMAT_0RGB1555 format"),
                PixelFormat::RGB565 => println!("Core will send us pixel data in the RETRO_PIXEL_FORMAT_RGB565 format"),
                PixelFormat::ARGB8888 => println!("Core will send us pixel data in the RETRO_PIXEL_FORMAT_XRGB8888 format"),
                _ => panic!("Core is trying to use an Unknown Pixel Format")
            }
            true
        },
```

Now when we run this code with the Gambatte core it prints out:

```rust
Core will send us pixel data in the RGB565 format
```

This is a bit of a shame as if it was ``RETRO_PIXEL_FORMAT_XRGB8888`` we could pass it directly to `minifb` and be done, note that we will need to find some libRetro cores that use ``RETRO_PIXEL_FORMAT_XRGB8888`` and another that uses `RETRO_PIXEL_FORMAT_0RGB1555` in order to make sure our frontend can support all the known pixel foprmats that a core can use.

We will need to save the pixel format in our global variable so we can reference it later when we need to convert the frame buffer between the formats, so lets add a new field to the struct:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u8>>,
    pixel_format: PixelFormat
}

static mut CURRENT_EMULATOR_STATE: EmulatorState = EmulatorState {
    rom_name: String::new(),
    core_name: String::new(),
    frame_buffer: None,
    pixel_format: PixelFormat::ARGB8888
};
```

I set the default value to the 32 byte version as `minifb` uses that but it should always be overridden by the core anyway.

# Step 16 - Converting one Pixel Format to another

Now that we have saved the pixel format into the global variable we can use it to convert the buffer from the core's pixel format into the `minifb` pixel format.

So lets have a look at the video refresh callback function again:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(frame_buffer_data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    if (frame_buffer_data == ptr::null()) {
        println!("frame_buffer_data was null");
        return;
    }
    // println!("libretro_set_video_refresh_callback, width: {}, height: {}, pitch: {}", width, height, pitch);
    let length_of_frame_buffer = width*height;
    let buffer_slice = std::slice::from_raw_parts(frame_buffer_data as *const u8, length_of_frame_buffer as usize);

    // Create a Vec<u8> from the slice
    let buffer_vec = Vec::from(buffer_slice);

    // Wrap the Vec<u8> in an Some Option and assign it to the frame_buffer field
    CURRENT_EMULATOR_STATE.frame_buffer = Some(buffer_vec);
    // println!("Frame Buffer: {:?}", CURRENT_EMULATOR_STATE.frame_buffer);
}
```

Note that we set the `length_of_frame_buffer` variable to the width multiplied by the height, but that would only be correct if it was one byte per pixel, now that we know the core's Pixel Format we can implement this correctly.

We need to also multiply it by the number of bytes-per-pixel, as far as I can see there is nowhere in `libretro-sys` to get the number of bits/bytes from the `PixelFormat`. So I manually mapped it using a match statement and added it as another field on the global variable:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u8>>,
    pixel_format: PixelFormat,
    bytes_per_pixel: u8 // its only either 2 or 4 bytes per pixel in libretro
}

static mut CURRENT_EMULATOR_STATE: EmulatorState = EmulatorState {
    rom_name: String::new(),
    core_name: String::new(),
    frame_buffer: None,
    pixel_format: PixelFormat::ARGB8888,
    bytes_per_pixel: 4
};
```

We can now calculate this value and save it into the global like so:

```rust
libretro_sys::ENVIRONMENT_SET_PIXEL_FORMAT => {
            let pixel_format = *(return_data as *const u32);
            let pixel_format_as_enum = PixelFormat::from_uint(pixel_format).unwrap();
            CURRENT_EMULATOR_STATE.pixel_format = pixel_format_as_enum;
            match pixel_format_as_enum {
                PixelFormat::ARGB1555 => {
                    println!("Core will send us pixel data in the RETRO_PIXEL_FORMAT_0RGB1555 format");
                    CURRENT_EMULATOR_STATE.bytes_per_pixel = 2;
                },
                PixelFormat::RGB565 => {
                    println!("Core will send us pixel data in the RETRO_PIXEL_FORMAT_RGB565 format");
                    CURRENT_EMULATOR_STATE.bytes_per_pixel = 2;
                }
                PixelFormat::ARGB8888 => {
                    println!("Core will send us pixel data in the RETRO_PIXEL_FORMAT_XRGB8888 format");
                    CURRENT_EMULATOR_STATE.bytes_per_pixel = 4;
                },
                _ => {
                    panic!("Core is trying to use an Unknown Pixel Format")
                }
            }
            true
        },
```

Now we need to be able to convert the RGB565 format to the format that `minifb` expects so lets create a function that does just that:

```rust
fn convert_pixel_array_from_rgb565_to_xrgb8888(color_array: &[u8]) -> Box<[u32]> {
    let bytes_per_pixel = 2;
    assert_eq!(color_array.len() % bytes_per_pixel, 0, "color_array length must be a multiple of 2 (16-bits per pixel)");

    let num_pixels = color_array.len() / bytes_per_pixel;
    let mut result = vec![0u32; num_pixels];

    for i in 0..num_pixels {
        // This Rust code is decoding a 16-bit color value, represented by two bytes of data, into its corresponding red, green, and blue components.
        let first_byte = color_array[bytes_per_pixel*i];
        let second_byte = color_array[(bytes_per_pixel*i)+1];

        // First extract the red component from the first byte. The first byte contains the most significant 8 bits of the 16-bit color value. The & operator performs a bitwise AND operation on first_byte and 0b1111_1000, which extracts the 5 most significant bits of the byte. The >> operator then shifts the extracted bits to the right by 3 positions, effectively dividing by 8, to get the value of the red component on a scale of 0-31.
        let red = (first_byte & 0b1111_1000) >> 3;
        // Next extract the green component from both bytes. The first part of the expression ((first_byte & 0b0000_0111) << 3) extracts the 3 least significant bits of first_byte and shifts them to the left by 3 positions, effectively multiplying by 8. The second part of the expression ((second_byte & 0b1110_0000) >> 5) extracts the 3 most significant bits of second_byte and shifts them to the right by 5 positions, effectively dividing by 32. The two parts are then added together to get the value of the green component on a scale of 0-63.
        let green = ((first_byte & 0b0000_0111) << 3) + ((second_byte & 0b1110_0000) >> 5);
        // Next extract the blue component from the second byte. The & operator performs a bitwise AND operation on second_byte and 0b0001_1111, which extracts the 5 least significant bits of the byte. This gives the value of the blue component on a scale of 0-31.
        let blue = second_byte & 0b0001_1111;

        // Use high bits for empty low bits as we have more bits available in XRGB8888
        let red = (red << 3) | (red >> 2);
        let green = (green << 2) | (green >> 3);
        let blue = (blue << 3) | (blue >> 2);

        // Finally save the pixel data in the result array as an XRGB8888 value
        result[i] = ((red as u32) << 16) | ((green as u32) << 8) | (blue as u32);
    }

    result.into_boxed_slice()
}
```

Now lets convert the buffer when it comes in from the emulator:

```rust
unsafe extern "C" fn libretro_set_video_refresh_callback(frame_buffer_data: *const libc::c_void, width: libc::c_uint, height: libc::c_uint, pitch: libc::size_t) {
    if (frame_buffer_data == ptr::null()) {
        println!("frame_buffer_data was null");
        return;
    }
    let length_of_frame_buffer = ((pitch as u32) * height) * CURRENT_EMULATOR_STATE.bytes_per_pixel as u32;
    let buffer_slice = std::slice::from_raw_parts(frame_buffer_data as *const u8, length_of_frame_buffer as usize);
    let result = convert_pixel_array_from_rgb565_to_xrgb8888(buffer_slice);

    // Create a Vec<u8> from the slice
    let buffer_vec = Vec::from(result);

    // Wrap the Vec<u8> in an Some Option and assign it to the frame_buffer field
    CURRENT_EMULATOR_STATE.frame_buffer = Some(buffer_vec);
}
```

If you run the program now you will get something that looks like this:

![IncorrectDimensions](https://user-images.githubusercontent.com/40120498/236680105-e3c7113f-a5df-4010-9ae6-9311ea14c19d.jpeg)


# Step 17 - Fixing display issues

Remember the `pitch` parameter that the core sends us? Yeah turns out it is very important as it is basically the width of the frame buffer, with `width` parameter is the part of the pitch that is actually used for the gameboy screen and the rest of the pixels are black. So we can actually make this a lot better by just changing the WIDTH and HEIGHT to the following values:

```rust
const WIDTH: usize = 256;
const HEIGHT: usize = 140;
```

Which will result in Tetris looking much nicer:

![TetrisRunning](https://user-images.githubusercontent.com/40120498/236680095-2d56e924-8322-4a4a-987b-686c01bad6c0.jpeg)


The 140 height is set to the height of the Game Boy screen, but the width is actually set to the `pitch` divded by 2, as the pitch value that comes back is actually the number of bytes for each row of pixels (not the number of actual pixels).

The `WIDTH` and `HEIGHT` variables are hard-coded and will only work for this Game Boy core as the 140 pixels in height would not be applicable for other cores like NES or SNES. Lets move these variables to our global variable so we can adapt them, based on the values the cores give us:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u32>>,
    pixel_format: PixelFormat,
    bytes_per_pixel: u8, // its only either 2 or 4 bytes per pixel in libretro
    screen_pitch: u32,
    screen_width: u32,
    screen_height: u32,
}

static mut CURRENT_EMULATOR_STATE: EmulatorState = EmulatorState {
    rom_name: String::new(),
    core_name: String::new(),
    frame_buffer: None,
    pixel_format: PixelFormat::ARGB8888,
    bytes_per_pixel: 4,
    screen_pitch: 0,
    screen_width: 0,
    screen_height: 0
};
```

Now lets set the values after we set the frame buffer:

```rust
CURRENT_EMULATOR_STATE.frame_buffer = Some(buffer_vec);
CURRENT_EMULATOR_STATE.screen_height = height;
CURRENT_EMULATOR_STATE.screen_width = width;
CURRENT_EMULATOR_STATE.screen_pitch = pitch as u32;
```

Finally lets use the new global variables when updating the `minifb` frame buffer:

```rust
unsafe {
            match &CURRENT_EMULATOR_STATE.frame_buffer {
                Some(buffer) => {
                    let width = (CURRENT_EMULATOR_STATE.screen_pitch / CURRENT_EMULATOR_STATE.bytes_per_pixel as u32) as usize;
                    let height = CURRENT_EMULATOR_STATE.screen_height as usize;
                    let slice_of_pixel_buffer: &[u32] =  std::slice::from_raw_parts(buffer.as_ptr() as *const u32, buffer.len()); // convert to &[u32] slice reference
                    if slice_of_pixel_buffer.len() < width*height*4 {
                        // The frame buffer isn't big enough so lets add additional pixels just so we can display it
                        let mut vec: Vec<u32> = slice_of_pixel_buffer.to_vec();
                        vec.resize( (width*height*4) as usize, 0x0000FFFF); // Add any missing pixels with colour blue
                        window.update_with_buffer(&vec, width, height).unwrap();
                    } else {
                        window.update_with_buffer(&slice_of_pixel_buffer, width, height).unwrap();
                    }
                }
                None => {
                    println!("We don't have a buffer to display");
                }
            }
        }
```

# Step 18 - Input Handling

The ROM will load, get the the main menu and then if you wait long enough it will show a brief demo of the gameplay before going back to the menu and repeating. This is cool but it would be better if we could actually **play** the game. We already have logic that checks the state of the arrow keys for when we had the blue pixel moving on screen so lets see if we can pass that information to the core and start moving Tetris pieces in the game.

First of all how does the core request from the frontend which buttons are pressed? It uses the input state callback which we created a dummy for previously, if we modify it slightly to print out the parameters that the core are passing in like so:

```rust
unsafe extern "C" fn libretro_set_input_state_callback(port: libc::c_uint, device: libc::c_uint, index: libc::c_uint, id: libc::c_uint) -> i16 {
    println!("libretro_set_input_state_callback port: {} device: {} index: {} id: {}", port, device, index, id);
    return 0; // Hard coded 0 for now means nothing is pressed
}
```

We see that Gambatte is constantly requesting the same port/device/index and only changing the id:

```rust
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 9
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 1
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 8
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 0
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 2
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 3
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 7
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 6
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 4
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 5
libretro_set_input_state_callback port: 0 device: 1 index: 0 id: 9
```

Looking up the documentation the four parameters are:

* port: the controller port number. Each controller is associated with a specific port number.
* device: the device type. This specifies which type of input device the input state is being retrieved for, such as a gamepad, mouse, keyboard, etc.
* index: the index of the input device. This parameter is used to distinguish between multiple input devices of the same type connected to the same port.
* id: the input ID or button. This parameter is used to retrieve the current state of a specific button or input on the input device.

We only care about 1 player games at the moment, so we just need to map what id values (0-9) should be maped to which keyboard keys, if we look up the `libretro-sys` library again we can see they have defined some nice constants for us:

```rust
pub const DEVICE_ID_JOYPAD_B: libc::c_uint = 0;
pub const DEVICE_ID_JOYPAD_Y: libc::c_uint = 1;
pub const DEVICE_ID_JOYPAD_SELECT: libc::c_uint = 2;
pub const DEVICE_ID_JOYPAD_START: libc::c_uint = 3;
pub const DEVICE_ID_JOYPAD_UP: libc::c_uint = 4;
pub const DEVICE_ID_JOYPAD_DOWN: libc::c_uint = 5;
pub const DEVICE_ID_JOYPAD_LEFT: libc::c_uint = 6;
pub const DEVICE_ID_JOYPAD_RIGHT: libc::c_uint = 7;
pub const DEVICE_ID_JOYPAD_A: libc::c_uint = 8;
pub const DEVICE_ID_JOYPAD_X: libc::c_uint = 9;
```

First lets see if we can get past the main menu of Tetris by making the Start button always be pressed:

```rust
unsafe extern "C" fn libretro_set_input_state_callback(port: libc::c_uint, device: libc::c_uint, index: libc::c_uint, id: libc::c_uint) -> i16 {
    println!("libretro_set_input_state_callback port: {} device: {} index: {} id: {}", port, device, index, id);
    return match id {
        libretro_sys::DEVICE_ID_JOYPAD_START => 1,
        _ => 0 // We don't know this key so mark it as not pressed
    }
}
```

This doesn't actually work, presumably because the core or ROM is looking for the start button to change state at some point rather than constantly being pressed down. We can hack a solution using a random number generator so it will randomly press the start button constantly:

```rust
unsafe extern "C" fn libretro_set_input_state_callback(port: libc::c_uint, device: libc::c_uint, index: libc::c_uint, id: libc::c_uint) -> i16 {
    println!("libretro_set_input_state_callback port: {} device: {} index: {} id: {}", port, device, index, id);
    let mut rng = rand::thread_rng();
    let random_number: u8 = rng.gen_range(0..2);

    return match id {
        libretro_sys::DEVICE_ID_JOYPAD_START => random_number.into(),
        _ => 0 // We don't know this key so mark it as not pressed
    }
}
```

Note for this to work you need to add the rand package to your Cargo file:

```rust
rand = "0.8.4"
```

Success we now get past the main menu and since it is constantly pressing the start button on and off it will this constantly keep pausing and unpausing the game:

![ConstantlyPressingStart](https://user-images.githubusercontent.com/40120498/236680085-16dfc486-c8a1-48c4-8f6c-b2049047c05a.jpeg)


Ok now we know the callback works lets properly handle the input, for this we need to get the list of `minifb` buttons that are currently pressed down, there is a nice example of this in their documentation:

```rust
window.get_keys_pressed(KeyRepeat::No).iter().for_each(|key|
        match key {
            Key::W => println!("pressed w"),
            Key::T => println!("pressed t"),
            _ => (),
        }
    );
```

However we need to pass this information so the we can access it in our callback function, we can do this using the global variable we created and just constantly update the variable every frame like so:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u32>>,
    pixel_format: PixelFormat,
    bytes_per_pixel: u8, // its only either 2 or 4 bytes per pixel in libretro
    screen_pitch: u32,
    screen_width: u32,
    screen_height: u32,
    buttons_pressed: Option<Vec<i16>>
}

static mut CURRENT_EMULATOR_STATE: EmulatorState = EmulatorState {
    rom_name: String::new(),
    core_name: String::new(),
    frame_buffer: None,
    pixel_format: PixelFormat::ARGB8888,
    bytes_per_pixel: 4,
    screen_pitch: 0,
    screen_width: 0,
    screen_height: 0,
    buttons_pressed: None
};
```

I made it optional to save creating a blank i16 array for the default state, I used the type i16 since that is what the call back function returns but it is really just a boolean in our cases (presumably it is an i16 for input such as game controller analog sticks).

Since the callback function is called multiple times a frame, the most efficient way to implement this is to convert the `minifb` input to the libretro format in the main game loop (once per frame) and save it in our global state variable, rather than saving the `minifb` input state and converting it every time the callback function is called (multiple times per frame).

So lets do that in the main loop like so:

```rust
        let mut this_frames_pressed_buttons = vec![0; 16];
  
        let mini_fb_keys = window.get_keys_pressed(KeyRepeat::No).unwrap();
        for key in mini_fb_keys {
  
            match key {
                Key::Enter => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_START as usize] = 1;},
                Key::Right => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_RIGHT as usize] = 1;},
                Key::Left => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_LEFT as usize] = 1;},
                Key::Up => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_UP as usize] = 1;},
                Key::Down => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_DOWN as usize] = 1;},
                Key::A => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_A as usize] = 1;},
                Key::S => {this_frames_pressed_buttons[libretro_sys::DEVICE_ID_JOYPAD_B as usize] = 1;},
                _ => {println!("Unhandled Key Pressed: {:?}", key);}
            }
        }
  
        unsafe {
            CURRENT_EMULATOR_STATE.buttons_pressed = Some(this_frames_pressed_buttons);
```

Finally we can handle this in the callback function like so:

```rust
unsafe extern "C" fn libretro_set_input_state_callback(port: libc::c_uint, device: libc::c_uint, index: libc::c_uint, id: libc::c_uint) -> i16 {
    // println!("libretro_set_input_state_callback port: {} device: {} index: {} id: {}", port, device, index, id);
    let is_pressed = match &CURRENT_EMULATOR_STATE.buttons_pressed {
        Some(buttons_pressed) => buttons_pressed[id as usize],
        None => 0
    };

    return is_pressed;
}
```

Now run the program and we can play the full game of Tetris!

# Step 19 - Mapping the input buttons

This is great but there are a few limitations, for one we only mapped the buttons for the Gameboy and this wouldn't work on cores that use more buttons and second it doesn't allow the users to configure which buttons do what.

Since we are a aiming to be a lightweight drop-in-replacement for RetroArch lets find out if RetroArch has a common config format for this purpose so users will be able to use their existing configuration.

Lets check to see if ChatGPT knows the answer, it gives us this response:

> RetroArch stores button mapping in a configuration file format called "RetroPad" or "RetroPad w/Analog".
>
> RetroPad is a JSON-based configuration format used for mapping controllers, while RetroPad w/Analog is an extension of the format that supports analog sticks.
>
> The configuration files are typically named "retroarch.cfg" and stored in the RetroArch configuration directory. The file can be edited manually or modified through the RetroArch interface.

So first we need to get the location of the RetroArch configuration directory, which varies per Operating System, judging by the documentation this should work but it has only been tested on MacOSX so far:

```rust
fn get_retroarch_config_path() -> PathBuf {
    return match std::env::consts::OS {
        "windows" => PathBuf::from(env::var("APPDATA").ok().unwrap()).join("retroarch"),
        "macos" => PathBuf::from(env::var("HOME").ok().unwrap()).join("Library/Application Support/RetroArch"),
        _ => PathBuf::from(env::var("XDG_CONFIG_HOME").ok().unwrap()).join("retroarch"),
    };
}
```

Now that we can get the location of the file we just need code that can parse the format, which although according to ChatGPT was JSON-based, it is not (could be very loosly javascript based) as it is basically just a key and value on each line separated by an equals symbol, such as:

```rust
input_player1_a = "x"
input_player1_a_axis = "nul"
input_player1_a_btn = "nul"
input_player1_a_mbtn = "nul"
input_player1_analog_dpad_mode = "0"
input_player1_b = "z"
```

So we can write a simple function to parse this format into an easy to use HashMap like so:

```rust
fn parse_retroarch_config(config_file: &Path) -> Result<HashMap<String, String>, String> {
    let file = File::open(config_file).map_err(|e| format!("Failed to open file: {}", e))?;
    let reader = BufReader::new(file);
    let mut config_map = HashMap::new();
    for line in reader.lines() {
        let line = line.map_err(|e| format!("Failed to read line: {}", e))?;
        if let Some((key, value)) = line.split_once("=") {
            config_map.insert(key.trim().to_string(), value.trim().replace("\"", "").to_string());
        }
    }
    Ok(config_map)
}
```

Now lets use these new functions so that we can get the key mappings, lets create a new function that returns the config:

```rust
fn setup_config() -> Result<HashMap<String, String>, String> {
    let retro_arch_config_path = get_retroarch_config_path();
    let config = parse_retroarch_config(&retro_arch_config_path.join("config/retroarch.cfg"));
    println!("retro_arch_config_path: {} config: {:?}", retro_arch_config_path.join("config/retroarch.cfg").display(), config);
    config
}
```

I created this as a separate function to the `parse_retroarch_config` as we will want to add support for users to use our own config file if they don't want to use the same settings as they use for their RetroArch.

We can then call this function like so:

```rust
let config = setup_config().unwrap();
println!("Key for Player 1 A button: {}", config["input_player1_a"]);
```

This is great but the problem with this is the result is a string of the keyboard letter pressed and we need to map it to the correct `minifb` Key enum type in order to use it.

```rust
let config = setup_config().unwrap();

let key_device_map = HashMap::from([
        (&config["input_player1_a"], libretro_sys::DEVICE_ID_JOYPAD_A as usize),
        (&config["input_player1_b"], libretro_sys::DEVICE_ID_JOYPAD_B as usize),
        (&config["input_player1_x"], libretro_sys::DEVICE_ID_JOYPAD_X as usize),
        (&config["input_player1_y"], libretro_sys::DEVICE_ID_JOYPAD_Y as usize),
        (&config["input_player1_l"], libretro_sys::DEVICE_ID_JOYPAD_L as usize),
        (&config["input_player1_r"], libretro_sys::DEVICE_ID_JOYPAD_R as usize),
        (&config["input_player1_down"], libretro_sys::DEVICE_ID_JOYPAD_DOWN as usize),
        (&config["input_player1_up"], libretro_sys::DEVICE_ID_JOYPAD_UP as usize),
        (&config["input_player1_right"], libretro_sys::DEVICE_ID_JOYPAD_RIGHT as usize),
        (&config["input_player1_left"], libretro_sys::DEVICE_ID_JOYPAD_LEFT as usize),
        (&config["input_player1_start"], libretro_sys::DEVICE_ID_JOYPAD_START as usize),
        (&config["input_player1_select"], libretro_sys::DEVICE_ID_JOYPAD_SELECT as usize),
 ]);
```

Now we can rewrite our input handling logic to look like this:

```rust
        let mut this_frames_pressed_buttons = vec![0; 16];
  
        let mini_fb_keys = window.get_keys_pressed(KeyRepeat::Yes).unwrap();

        for key in mini_fb_keys {
            let key_as_string = format!("{:?}", key).to_ascii_lowercase();

            if let Some(device_id) = key_device_map.get(&key_as_string) {
                this_frames_pressed_buttons[*device_id] = 1;
            } else {
                println!("Unhandled Key Pressed: {} input_player1_a: {}", key_as_string, config["input_player1_a"]);
            }
        }
   
```

This is great but we shouldn't expect the user to have RetroArch installed and have a valid config, and we need to support the case where they might want different settings for out frontend compared to their RetroArch, so lets set up some default values and allow users to override them if they have a file called `rustroarch.cfg`.

To do this we can refactor the `setup_config` function like so:

```rust
fn setup_config() -> Result<HashMap<String, String>, String> {
    let retro_arch_config_path = get_retroarch_config_path();
    let our_config = parse_retroarch_config(Path::new("./rustroarch.cfg"));
    let retro_arch_config = parse_retroarch_config(&retro_arch_config_path.join("config/retroarch.cfg"));
    let mut merged_config: HashMap<String, String> = HashMap::from([
        ("input_player1_a", "a"),
        ("input_player1_b", "s"),
        ("input_player1_x", "z"),
        ("input_player1_y", "x"),
        ("input_player1_l", "q"),
        ("input_player1_r", "w"),
        ("input_player1_down", "down"),
        ("input_player1_up", "up"),
        ("input_player1_left", "left"),
        ("input_player1_right", "right"),
        ("input_player1_select", "space"),
        ("input_player1_start", "enter"),
        ("input_reset", "h"),
        ("input_save_state", "f2"),
        ("input_load_state", "f4"),
        ("input_screenshot", "f8"),
        ("savestate_directory", "./states"),
        ]).iter()
        .map(|(k, v)| (k.to_string(), v.to_string()))
        .collect();
    match retro_arch_config {
        Ok(config) => merged_config.extend(config),
        _ => println!("We don't have RetroArch config")
    }
    match our_config {
        Ok(config) => merged_config.extend(config),
       _ => println!("We don't have RustroArch config",)
    }
    // println!("retro_arch_config_path: {} merged_config: {:?}", retro_arch_config_path.join("config/retroarch.cfg").display(), merged_config);
    Ok(merged_config)
}
```

In this code first we setup some default config values, mainly for input handling but I also added some related to save states as that is what we will work on in the next step. The default values means users don't need any config files to use the frontend, as long as they like the defaults. It then checks if we have RetroArch config and overrides the defaults with these settings if they exist. FInally we check for a `rustroarch.cfg` file and if so it will override the values with the values in that file.

Lets start keeping track of the size of the executable, I should have done this from the start but here we go:

> Size of executable so far: 1.1MB

# Step 20 - Saving and Loading state

We are doing well but we still haven't implemented one of my favourite features of emulators, save states. In the config file we have two settings for the buttons used to trigger saving and loading states:

* `input_save_state`
* `input_load_state`

So lets first check if the user has pressed either of those buttons and if so print a message to the command line:

```rust
 // Input Handling for the keys pressed in minifb cargo
        for key in mini_fb_keys {
            let key_as_string = format!("{:?}", key).to_ascii_lowercase();

            if let Some(libretro_button_id) = key_device_map.get(&key_as_string) {
                this_frames_pressed_buttons[*libretro_button_id] = 1;
                continue;
            } 
            if &key_as_string == &config["input_save_state"] {
                println!("Save state called");
                continue;
            } 
            if &key_as_string == &config["input_load_state"] {
                println!("Load state called");
                continue;
            } 
            println!("Unhandled Key Pressed: {} ", key_as_string);
        }
```

So now when we press the buttons it will at least write the message to the console, so the next question is how do we call the core to create a save state?

LibRetro has a function called `retro_serialize` which has the following signature:

```rust
pub retro_serialize: unsafe extern "C" fn(data: *mut libc::c_void, size: libc::size_t)
```

So we need to pass in a mutable buffer that the core can put all the save data in, along with the size of that buffer.

But how do we know how large the buffer should be, well libRetro also has us covered there with this function:

```rust
pub retro_serialize_size: unsafe extern "C" fn() -> libc::size_t,
```

We can put all this logic in its own function and use the builtin rust library to write it to a file like so:

```rust
unsafe fn save_state(core_api: &CoreAPI) {
    let save_state_buffer_size =  (core_api.retro_serialize_size)();
    let mut state_buffer: Vec<u8> = vec![0; save_state_buffer_size];
    // Call retro_serialize to create the save state
    (core_api.retro_serialize)(state_buffer.as_mut_ptr() as *mut c_void, save_state_buffer_size);
    let file_path = "./save_state.state";
    std::fs::write(file_path, &state_buffer).unwrap();
    println!("Save state saved to: {} with size: {}", file_path, save_state_buffer_size);
}
```

This will save the state into the current directory with the hardcoded name `save_state.state` but the problem is this same file will be overriden no matter what ROM you load, ideally it would be good to save a different file based on the game you are playing.

After saving a file using RetroArch itself it seems to save with both the ROM name and also a save state index (which can be incremented/decremented by the user) and it also replaces any invalid characters (such as spaces) with the `_` character, this is quite a bit of logic in itself and we will need this logic in both saving and loading of state so lets create a new function for this purpose:

```rust
fn get_save_state_path(save_directory: &String, game_file_name: &str, save_state_index: u32) -> Option<PathBuf> {

    // Create a subdirectory named "saves" in the current working directory
    let saves_dir = PathBuf::from(save_directory);
    if !saves_dir.exists() {
        match std::fs::create_dir(&saves_dir) {
            Ok(_) => {}
            Err(err) => panic!("Failed to create save directory: {:?} Error: {}", &saves_dir, err),
        }
    }

    // Generate the save state filename
    let game_name = Path::new(game_file_name)
        .file_stem()
        .unwrap_or_default()
        .to_string_lossy()
        .replace(" ", "_");
    let save_state_file_name = format!("{}_{}.state", game_name, save_state_index);

    // Combine the saves directory and the save state filename to create the full path
    let save_state_path = saves_dir.join(save_state_file_name);

    Some(save_state_path)
}
```

We also added creation of the directory if it doesn't already exist, you can call this function from the `save_state` function like so:

```rust
let file_path = get_save_state_path(save_directory, &CURRENT_EMULATOR_STATE.rom_name, 0).unwrap(); // hard coded save_slot to 0 for now
    std::fs::write(&file_path, &state_buffer).unwrap();
    println!("Save state saved to: {} with size: {}", &file_path.display(), save_state_buffer_size);
```

Saving states are useless if we can't load them back again, to do that we can pretty much just do the opposite of saving, by calling the `retro_unserialize` libRetro function:

```rust
pub retro_unserialize: unsafe extern "C" fn(data: *const libc::c_void, size: libc::size_t) -> bool,
```

So the `load_state` funtion can now look like this:

```rust
unsafe fn load_state(core_api: &CoreAPI, save_directory: &String) {
    let file_path = get_save_state_path(save_directory, &CURRENT_EMULATOR_STATE.rom_name, 0).unwrap(); // Hard coded the save_slot to 0 for now
    let mut state_buffer = Vec::new();
    match File::open(&file_path) {
        Ok(mut file) => {
            // Read the save state file into a buffer
            match file.read_to_end(&mut state_buffer) {
                Ok(_) => {
                    // Call retro_unserialize to apply the save state
                    let result = (core_api.retro_unserialize)(state_buffer.as_mut_ptr() as *mut c_void, state_buffer.len() as usize);
                    if result {
                        println!("Save state loaded from: {}", &file_path.display());
                    } else {
                        println!("Failed to load save state: error code {}", result);
                    }
                }
                Err(err) => println!("Error reading save state file: {}", err),
            }
        }
        Err(_) => println!("Save state file not found"),
    }
}
```

And we can call it similar to how we call `save_state`:

```rust
            if &key_as_string == &config["input_save_state"] {
                unsafe { save_state(&core_api,  &config["savestate_directory"]); }
                continue;
            } 
            if &key_as_string == &config["input_load_state"] {
                unsafe { load_state(&core_api,  &config["savestate_directory"]); }
                continue;
            } 
```

# Step 21 - Supporting save slots

You will notice that we hard coded the `save_slot_index` to 0, we can now store the current save slot index in our global variable and then allow the user to increment and decrement the current save slot, allowing them to have different save states for the same game.

First lets add another field to our global to keep track of the current slot:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u32>>,
    pixel_format: PixelFormat,
    bytes_per_pixel: u8, // its only either 2 or 4 bytes per pixel in libretro
    screen_pitch: u32,
    screen_width: u32,
    screen_height: u32,
    buttons_pressed: Option<Vec<i16>>,
    current_save_slot: u8
}
```

Made it a u8 as 255 values should be more than enough for a single game, but if its not enough for your needs feel free to change the type.

We can now use this vaible by modifying the save and load state functions when calling the `get_save_state_path` function:

```rust
    let file_path = get_save_state_path(save_directory, &CURRENT_EMULATOR_STATE.rom_name, CURRENT_EMULATOR_STATE.current_save_slot).unwrap();
```

There are two config variables for allowing the player to change the current save slot selected:

* input_save_slot_decrease
* input_save_slot_increase

Lets add the default values to the config:

```rust
("input_state_slot_decrease", "f6"),
("input_state_slot_increase", "f7"),
```

And now read them from out input handling code:

```rust
            if &key_as_string == &config["input_state_slot_increase"] {
                if CURRENT_EMULATOR_STATE.current_save_slot != 255 {
                    CURRENT_EMULATOR_STATE.current_save_slot+=1;
                    println!("Current save slot increased to: {}", CURRENT_EMULATOR_STATE.current_save_slot) 
                }
                continue;
            } 
            if &key_as_string == &config["input_state_slot_decrease"] {
  
                if CURRENT_EMULATOR_STATE.current_save_slot != 0 {
                    CURRENT_EMULATOR_STATE.current_save_slot-=1;
                    println!("Current save slot decreased to: {}", CURRENT_EMULATOR_STATE.current_save_slot) 
                }
                continue;
            } 
```

Now if you run the program you can incfrease and decrease the save slots and it will allow you to have multiple saves for the same game.

# Step 22 - Audio Support

So far the game is playable but rather... quiet, lets change that by adding audio support!

We already implemented the two audio callbacks as dummy functions before to prevent the core from causing a segmentation fault but they don't do anything yet:

```rust
unsafe extern "C" fn libretro_set_audio_sample_callback(left: i16, right: i16) {
    println!("libretro_set_audio_sample_callback left channel: {} right: {}", left, right);


unsafe extern "C" fn libretro_set_audio_sample_batch_callback(
    data: *const i16,
    frames: libc::size_t,
) -> libc::size_t {
    // println!("libretro_set_audio_sample_batch_callback");
    return 1;
}
```

The first function `libretro_set_audio_sample_callback` doesn't seem to be used by the Gambate core that I am using for testing so we will need to come back to this when we find a core that requires it.

So `libretro_set_audio_sample_batch_callback` seems to have two paramerters, one is a data buffer that contains both the left and right audio channel dataper frame and the other is the number of frames that are in the buffer.

Before we can use this data we first need to figure out how we can play audio in rust across all the major Operating Systems. So after a quick google search the first resut was the `rodio` crate, so lets add it to our Cargo project:

```rust
cargo add rodio
```

Now lets try to get the main example from the Rodio documentation to work:

```rust
use std::fs::File;
use std::io::BufReader;
use std::time::Duration;
use rodio::{Decoder, OutputStream, Sink};
use rodio::source::{SineWave, Source};

fn play_audio() {
  let (_stream, stream_handle) = OutputStream::try_default().unwrap();
  let sink = Sink::try_new(&stream_handle).unwrap();

  // Add a dummy source of the sake of the example.
  let source = SineWave::new(440.0).take_duration(Duration::from_secs_f32(0.25)).amplify(0.20);
  sink.append(source);

  // The sound plays in a separate thread. This call will block the current thread until the sink
  // has finished playing all its queued sounds.
  sink.sleep_until_end();
}
```

Now call `play_audio` somewhere in the main game loop for example:

```rust
unsafe {
            (core_api.retro_run)();
        }
        play_audio();
```

If all went well you will get an annoying sound while the game is playing, but how do we convert the buffer that the callback gives us into something that rodio can play?

First lets add an audio_data buffer to our global variable so that we can pass it between the callback and the play_audio function:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u32>>,
    audio_data: Option<Vec<i16>>,
```

Now lets update the callback so that it sets the global variables value every time its called:

```rust
const AUDIO_CHANNELS: usize = 2; // left and right
unsafe extern "C" fn libretro_set_audio_sample_batch_callback(
    audio_data: *const i16,
    frames: libc::size_t,
) -> libc::size_t {
    let audio_slice = std::slice::from_raw_parts(audio_data, frames * AUDIO_CHANNELS);
    CURRENT_EMULATOR_STATE.audio_data = Some(audio_slice.to_vec());
    return frames;
}
```

We need to be able to take that audio_data and play it back inside Rodeo, for this Rodeo provides a SamplesBuffer that we can use as a source:

```rust
 match &CURRENT_EMULATOR_STATE.audio_data {
        Some(data) => {
            if sink.empty() {
                let audio_slice = std::slice::from_raw_parts(data.as_ptr() as *const i16, data.len());
                let source = SamplesBuffer::new(2, 32768, audio_slice);
                sink.append(source);
                sink.play();
                sink.sleep_until_end();
            }
        },
        None => {},
    };
```

If you run the program now you will notice that it starts to play audio, but in a very slow manner, turns out audio processing is very cpu time consuming.

You will also notice a massive dip in the frame rate, this is because we are setting up a brand new audio sink every frame, lets move this logic out ibefore the main loop and pass the Sink in to the play_audio function:

```rust
let core_api;
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();
    let sink = Sink::try_new(&stream_handle).unwrap();
```

Now just pass it into the call to `play_audio` like so:

```rust
play_audio(&sink);
```

You will notice that this has helped the frame rate a bit (around 30 fps on my machine) but its still half of what it was before we added audio support, in the next step we can sort this.

> Size of executable so far: 1.4MB

# Step 23 - Creating an Audio Thread

Audio processing is very cpu intensive and so far we have done all our logic in a single thread, this is now affecting the frame rate of games  being played in our frontend. One solution for this is to put the audio processing in its own thread and just pass the audio data between the threads.

Lets first modify the Audio setup so that iut creates a new thread and creates the Rodeo Sink inside that thread like so:

```rust
// Audio Setup
    let (_stream, stream_handle) = OutputStream::try_default().unwrap();

    // Create a channel for passing audio samples from the main thread to the audio thread
    let (sender, receiver) = channel();

    // Spawn a new thread to play back audio
    let audio_thread = thread::spawn(move || {
        let sink = Sink::try_new(&stream_handle).unwrap();
        loop {
            // Receive the next set of audio samples from the channel
            let audio_samples = receiver.recv().unwrap();
            unsafe { play_audio(&sink, audio_samples); } // pass the audio samples to the play_audio function
        }
    });
```

In this example, we create a channel using the channel function from the `std::sync::mpsc` module. The sender and receiver variables are used to send and receive audio samples between the main thread and the audio thread, respectively.

Since we don't want to directly use the same variable in both threads we need to create a new function to send the audio data over ever frame:

```rust
unsafe fn send_audio_to_thread(sender: &Sender<&Vec<i16>>) {
    // Send the audio samples to the audio thread using the channel
    match &CURRENT_EMULATOR_STATE.audio_data {
        Some(data) => {
            sender.send(data).unwrap();
        },
        None => {},
    };
  
}
```

Now we modify the `play_audio` function so that we can have the audio samples passed in from the thread:

```rust
unsafe fn play_audio( sink: &Sink, audio_samples: &Vec<i16>) {
    if sink.empty() {
        let audio_slice = std::slice::from_raw_parts(audio_samples.as_ptr() as *const i16, audio_samples.len());
        let source = SamplesBuffer::new(2, 32768, audio_slice);
        sink.append(source);
        sink.play();
        sink.sleep_until_end();
    }

```

Now in the main game loop lets replace the call to play_audio with a call to send_audio instead:

```rust
send_audio_to_thread(&sender);
```

Run the program and you will notice that we not only have audio but we are again running at full frame rate, multi-threading for the win!

Although sometimes when you exist the program you will get the following error:

```rust
thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: RecvError'
```

# Step 24 - Get Audio/Video Data from the core

You will notice that in the previous step we hard coded the audio sample rate at `32768`, while this is correct for the Game Boy, it won;'t be correct for other cores, so it would be ideal to be able to allow each core to specify its own sample rate. This is where the libRetro function `retro_get_system_av_info` comes in.

So just after the call to `retro_init` we can call it and print the result we get back like so:

```rust
let mut av_info = SystemAvInfo {
            geometry: GameGeometry {
                base_width: 0,
                base_height: 0,
                max_width: 0,
                max_height: 0,
                aspect_ratio: 0.0,
            },
            timing: SystemTiming {
                fps: 0.0,
                sample_rate: 0.0,
            },
        };
        (core_api.retro_get_system_av_info)(&mut av_info);
        println!("AV Info: {:?}", &av_info);
```

Now we just need to save this information in our global variable so we can refer to the sample_rate from out audio code, lets modify the definition of EmulatorState to add av_info:

```rust
struct EmulatorState {
    rom_name: String,
    core_name: String,
    frame_buffer: Option<Vec<u32>>,
    audio_data: Option<Vec<i16>>,
    pixel_format: PixelFormat,
    bytes_per_pixel: u8, // its only either 2 or 4 bytes per pixel in libretro
    screen_pitch: u32,
    screen_width: u32,
    screen_height: u32,
    buttons_pressed: Option<Vec<i16>>,
    current_save_slot: u8,
    av_info: Option<SystemAvInfo>
}

static mut CURRENT_EMULATOR_STATE: EmulatorState = EmulatorState {
    rom_name: String::new(),
    core_name: String::new(),
    frame_buffer: None,
    audio_data: None,
    pixel_format: PixelFormat::ARGB8888,
    bytes_per_pixel: 4,
    screen_pitch: 0,
    screen_width: 0,
    screen_height: 0,
    buttons_pressed: None,
    current_save_slot: 0,
    av_info: None
};
```

Now modify the code after the call to `retro_get_system_av_info` to set the global variable:

```rust
(core_api.retro_get_system_av_info)(&mut av_info);
        println!("AV Info: {:?}", &av_info);
        CURRENT_EMULATOR_STATE.av_info = Some(av_info);
```

We can now update the `play_audio` function to n ow take in the sample_rate:

```rust
unsafe fn play_audio( sink: &Sink, audio_samples: &Vec<i16>, sample_rate: u32) {
    if sink.empty() {
        let audio_slice = std::slice::from_raw_parts(audio_samples.as_ptr() as *const i16, audio_samples.len());
        let source = SamplesBuffer::new(2, sample_rate, audio_slice);
        sink.append(source);
        sink.play();
        sink.sleep_until_end();
    }
}
```

And to get the global sample rate and padd it to play audio we need to change the audio thread code to the following:

```rust
let audio_thread = thread::spawn(move || {
        println!("Audio Thread Started");
        let sample_rate = unsafe { match &CURRENT_EMULATOR_STATE.av_info {
            Some(av_info) => av_info.timing.sample_rate,
            None => 0.0
        }
        };
        let (_stream, stream_handle) = OutputStream::try_default().unwrap();
        let sink = Sink::try_new(&stream_handle).unwrap();
        loop {
            // Receive the next set of audio samples from the channel
            let audio_samples = receiver.recv().unwrap();
            unsafe { play_audio(&sink, audio_samples, sample_rate as u32); }
        }
    });
```

Now we should be able to support more cores in the future!


# Step 25 - Game Controller support

Lets add the `gilrs` cargo to our rust project:

```rust
cargo add gilrs
```

And import it at the top of our file:

```rust
use gilrs::{Gilrs, Button, Event};
```


Similaer to how we did the keyboard input mapping from `minifb` we need to create a map from the `gilrs::Button` to the libRetro button id, as this code will be quite long lets put it in its own function:

```rust
fn setup_joypad_device_map() -> HashMap<Button, usize> {
    return HashMap::from([
        (
            Button::South,
            libretro_sys::DEVICE_ID_JOYPAD_A as usize,
        ),
        (
            Button::East,
            libretro_sys::DEVICE_ID_JOYPAD_B as usize,
        ),
        (
            Button::West,
            libretro_sys::DEVICE_ID_JOYPAD_X as usize,
        ),
        (
            Button::North,
            libretro_sys::DEVICE_ID_JOYPAD_Y as usize,
        ),
        (
            Button::LeftTrigger,
            libretro_sys::DEVICE_ID_JOYPAD_L as usize,
        ),
        (
            Button::LeftTrigger2,
            libretro_sys::DEVICE_ID_JOYPAD_L2 as usize,
        ),
        (
            Button::RightTrigger,
            libretro_sys::DEVICE_ID_JOYPAD_R as usize,
        ),
        (
            Button::RightTrigger2,
            libretro_sys::DEVICE_ID_JOYPAD_R2 as usize,
        ),
        (
            Button::DPadDown,        
            libretro_sys::DEVICE_ID_JOYPAD_DOWN as usize,
        ),
        (
            Button::DPadUp,
            libretro_sys::DEVICE_ID_JOYPAD_UP as usize,
        ),
        (
            Button::DPadRight,
            libretro_sys::DEVICE_ID_JOYPAD_RIGHT as usize,
        ),
        (
            Button::DPadLeft,
            libretro_sys::DEVICE_ID_JOYPAD_LEFT as usize,
        ),
        (
            Button::Start,
            libretro_sys::DEVICE_ID_JOYPAD_START as usize,
        ),
        (
            Button::Select,
            libretro_sys::DEVICE_ID_JOYPAD_SELECT as usize,
        ),
    ]);
}
```

We now need to call this function under where we setup the keyboard mapping like so:

```rust
let joypad_device_map = setup_joypad_device_map();
```


Now before the code to load the libRetro lets do some initialisation that is required for `gilrs`:

```rust
println!("Gamepad Setup");
    let mut gilrs = Gilrs::new().unwrap();
    let mut active_gamepad = None;
```

This code should only be executed once as it creates the Gilrs object and creates a variable that will store the active gamepad. We need this variable as multiple gamepads can be connected and we need to know which one to poll for input.

Now in the main game loop we need to listen for events to see which gamepad is currently being used by the user:

```rust

        // Gamepad input Handling
        // Examine new events to check which gamepad is currently being used
        while let Some(Event { id, event, time }) = gilrs.next_event() {
            // println!("{:?} New event from {}: {:?}", time, id, event);
            active_gamepad = Some(id);
        }
```

Just after this code we can use that active_gamepad variable to check if any buttons are pressed on that controller:

```rust
        // Now Lets check what buttons are pressed and map them to the libRetro buttons
        if let Some(gamepad) = active_gamepad.map(|id| gilrs.gamepad(id)) {
            for button in [Button::South, Button::North, Button::East, Button::West, Button::Start, Button::Select, Button::DPadDown, Button::DPadUp, Button::DPadLeft, Button::DPadRight, Button::LeftTrigger, Button::LeftTrigger2, Button::RightTrigger, Button::RightTrigger2] {
                if gamepad.is_pressed(button) {
                    println!("Button Pressed: {:?}", button);
                    let libretro_button = joypad_device_map.get(&button).unwrap();
                    this_frames_pressed_buttons[*libretro_button] = 1;
                }
            }
        }
```

Now if you run the program you will be able to control your Game Boy ROM with a plugged in game controller. However I personally had problems with a few controllers that I own while running this on MacOSX:

* Controller from PS1 Mini - D-pad issues where the only d-pad button that works is RIGHT, it thinks DOWN is up and UP/LEFT don't do anything.
* RetroBit Sega Saturn Controller - Same issues as above

I am not sure if its the `gilrs` library or a MacOSX issue, or it could be my controllers.

I will need to test on other platforms and with other controllers to figure out what is going wrong. I tried in RetroArch but it didn't auto-detect these controllers, but I could go into settings to configure them manually and the D-pad was fine.

>  Size of executable is now 1.8MB due to the added Gilrs cargo
