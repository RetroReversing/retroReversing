---
permalink: /tutorials/gdb-stub-in-c
layout: post
title: Building a GDB Stub in C (for emulators)
thumbnail: /public/consoles/Computer Old Design.png
_image: /public/images/tutorials/WritingAGDBStubInC.jpg
_twitterimage: http://www.retroreversing.com/public/images/tutorials/WritingAGDBStubInC.jpg
breadcrumbs:
  - name: Home
    url: /
  - name: Techniques & Tutorials
    url: /tutorials
  - name:  Building a GDB Stub in C (for emulator debugging)
    url: #
recommend:
- tutorial
tags:
- gdb
editlink: /tutorials/WritingAGDBStubInC.md
_updatedAt: '2024-09-29'
---
# Tutorial: Building a GDB Stub in C

## Step 1: Setting Up the Project

### Create a Project Directory
First lets do some initial setup by creating the project folder and going inside:
   ```bash
   mkdir gdb_stub
   cd gdb_stub
   ```

### Create a Source File:
   Create a file named `gdb_stub.c` you can do this from your favourite IDE or just use bash:
   ```bash
   touch gdb_stub.c
   ```

### Basic Structure:
   Open `gdb_stub.c` in your favorite text editor/IDE and add the following basic structure:
   ```c
   #include <stdio.h>
   #include <stdlib.h>

   int main() {
       printf("GDB Stub is starting...\n");
       return 0;
   }
   ```

### Compile and Run:
   Compile the code:
   ```bash
   gcc -o gdb_stub gdb_stub.c
   ```
   Run the executable:
   ```bash
   ./gdb_stub
   ```

   You should see:
   ```
   GDB Stub is starting...
   ```

---

## Step 2: Creating a TCP Socket

### Add Required Headers:
   Update your `gdb_stub.c` to include networking libraries:
   ```c
   #include <stdio.h>
   #include <stdlib.h>
   #include <string.h>
   #include <netinet/in.h>
   #include <unistd.h>

   #define PORT 1234

   int main() {
       printf("GDB Stub is starting...\n");
       return 0;
   }
   ```

### Create a Socket:
   Add code to create a socket and bind it to the specified port:
   ```c
   int main() {
       int server_sock;
       struct sockaddr_in server_addr;

       // Create a socket
       if ((server_sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
           perror("Socket creation failed");
           exit(EXIT_FAILURE);
       }

       // Set up the server address
       server_addr.sin_family = AF_INET;
       server_addr.sin_addr.s_addr = INADDR_ANY;
       server_addr.sin_port = htons(PORT);

       // Bind the socket
       if (bind(server_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
           perror("Bind failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       printf("GDB Stub listening on port %d...\n", PORT);
       close(server_sock); // Close socket for now
       return 0;
   }
   ```

### Compile and Run:
   Compile and run the program again:
   ```bash
   gcc -o gdb_stub gdb_stub.c
   ./gdb_stub
   ```
   You should see:
   ```
   GDB Stub listening on port 1234...
   ```

---

## Step 3: Accepting a Client Connection

### Accept Client Connections:
   Modify the main function to accept a client connection:
   ```c
   int main() {
       int server_sock, client_sock;
       struct sockaddr_in server_addr, client_addr;
       socklen_t addr_len = sizeof(client_addr);

       // Create a socket
       if ((server_sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
           perror("Socket creation failed");
           exit(EXIT_FAILURE);
       }

       // Set up the server address
       server_addr.sin_family = AF_INET;
       server_addr.sin_addr.s_addr = INADDR_ANY;
       server_addr.sin_port = htons(PORT);

       // Bind the socket
       if (bind(server_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
           perror("Bind failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       // Listen for incoming connections
       if (listen(server_sock, 1) < 0) {
           perror("Listen failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       printf("GDB Stub listening on port %d...\n", PORT);

       // Accept a client connection
       if ((client_sock = accept(server_sock, (struct sockaddr *)&client_addr, &addr_len)) < 0) {
           perror("Accept failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       printf("GDB connected from %s\n", inet_ntoa(client_addr.sin_addr));
       close(client_sock); // Close client socket for now
       close(server_sock); // Close server socket
       return 0;
   }
   ```

### Compile and Run:
   Compile and run the program again:
   ```bash
   gcc -o gdb_stub gdb_stub.c
   ./gdb_stub
   ```
   (You'll need to connect using GDB later to see the "GDB connected" message.)

---

## Step 4: Receiving Data from GDB

### Receive Data:
   Add functionality to receive packets from GDB:
   ```c
   char buffer[256]; // Buffer to store incoming data

   // Inside the main function, after accepting the connection
   ssize_t n = recv(client_sock, buffer, sizeof(buffer) - 1, 0);
   if (n < 0) {
       perror("Receive failed");
   } else {
       buffer[n] = '\0'; // Null-terminate the received string
       printf("Received packet: %s\n", buffer);
   }
   ```

### Full Code:
   Update your `gdb_stub.c` to include the new code:
   ```c
   #include <stdio.h>
   #include <stdlib.h>
   #include <string.h>
   #include <netinet/in.h>
   #include <unistd.h>
   #include <arpa/inet.h>

   #define PORT 1234

   int main() {
       int server_sock, client_sock;
       struct sockaddr_in server_addr, client_addr;
       socklen_t addr_len = sizeof(client_addr);
       char buffer[256]; // Buffer to store incoming data

       // Create a socket
       if ((server_sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
           perror("Socket creation failed");
           exit(EXIT_FAILURE);
       }

       // Set up the server address
       server_addr.sin_family = AF_INET;
       server_addr.sin_addr.s_addr = INADDR_ANY;
       server_addr.sin_port = htons(PORT);

       // Bind the socket
       if (bind(server_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
           perror("Bind failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       // Listen for incoming connections
       if (listen(server_sock, 1) < 0) {
           perror("Listen failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       printf("GDB Stub listening on port %d...\n", PORT);

       // Accept a client connection
       if ((client_sock = accept(server_sock, (struct sockaddr *)&client_addr, &addr_len)) < 0) {
           perror("Accept failed");
           close(server_sock);
           exit(EXIT_FAILURE);
       }

       printf("GDB connected from %s\n", inet_ntoa(client_addr.sin_addr));

       // Receive data from GDB
       ssize_t n = recv(client_sock, buffer, sizeof(buffer) - 1, 0);
       if (n < 0) {
           perror("Receive failed");
       } else {
           buffer[n] = '\0'; // Null-terminate the received string
           printf("Received packet: %s\n", buffer);
       }

       close(client_sock); // Close client socket
       close(server_sock); // Close server socket
       return 0;
   }
   ```

### Compile and Run
   Compile and run the program again:
   ```bash
   gcc -o gdb_stub gdb_stub.c
   ./gdb_stub
   ```

---

## Step 5: Sending a Response Back to GDB
The main function is getting a bit large so lets create some new functions for the next part of the functionality, we won't keep posting the full code for every step.

### Refactoring the message handling
To reduce the code in the main function lets move all the code after the folloing line into its own function called **handle_client** :
   ```c
   printf("GDB connected from %s\n", inet_ntoa(client_addr.sin_addr));
```
After that line replace the contents with the following:
```c
       // Receive data from GDB client
        handle_client(client_sock);
   ```

### Creating the handle_client function
Now we need to create the handle_client function after the main function:
```c
// Handle communication with the GDB client
void handle_client(int client_sock) {
    char packet_buffer[4096];
    uint8_t received_checksum;

    while (1) {
        // Receive packet from GDB
        char *packet = recv_packet(client_sock, packet_buffer, sizeof(packet_buffer), &received_checksum);
        if (!packet) {
            printf("Connection closed or packet error.\n");
            break;
        }

      printf("Received packet from GDB client: %s\n", packet);
      send_packet(client_sock, ""); // Send blank data back
  }
}
```

### Sending Data
We can now create the function that sends data back to the GDB client like so:
```c
// Send a packet to GDB
void send_packet(int client_sock, const char *data) {
    char packet[4096];
    uint8_t cksum = 0; // We will implement this in the next step: calculate_checksum(data);

    // Format the packet: $<data>#<checksum>
    snprintf(packet, sizeof(packet), "$%s#%02x", data, cksum);

    // Send the packet
    ssize_t sent = send(client_sock, packet, strlen(packet), 0);
    if (sent < 0) {
        perror("Failed to send packet");
    } else {
        // Debug: Print sent packet
        printf("Sent packet: %s\n", packet);
    }
}
```

### Compile and Run
   Compile and run the program again:
   ```bash
   gcc -o gdb_stub gdb_stub.c
   ./gdb_stub
   ```

But this time also open gdb in a new terminal like so:
```
gdb
```
Now in GDB you can connect to your stub like so:
```gdb
(gdb) target remote localhost:1234
```

Go back to the terminal with your gdb_stub and you will notice GDB client will start sending you messages that will be logged for example:
```
GDB Stub listening on port 1234...
GDB connected from 127.0.0.1
Received packet from GDB client: qSupported:multiprocess+;swbreak+;hwbreak+;qRelocInsn+;fork-events+;vfork-events+;exec-events+;vContSupported+;QThreadEvents+;QThreadOptions+;no-resumed+;memory-tagging+;xmlRegisters=i386
```
We are making great progress!

---
## Step 6: Checksums and acknowledgements
The GDB Remote Protocol is fault tolerant which means we need to support message checksums, these make sure that the messages were all sent uncorrupted through TCP stack and we can send back acknowledgement so that the client knows we got the message successfully.

### Calculating the Checksum of a message
```c
// Calculate checksum for GDB packet
uint8_t calculate_checksum(const char *data) {
    uint8_t sum = 0;
    while (*data) {
        sum += (uint8_t)*data++;
    }
    return sum;
}
```

You can now fix the line in the **send_packet** function to actual calculate the checksum:
```c
void send_packet(int client_sock, const char *data) {
    char packet[4096];
    uint8_t cksum = calculate_checksum(data);
   ...
```

### Sending acknowledgements to the client
```c
// Send acknowledgment ('+' or '-')
void send_ack(int client_sock, char ack) {
    char ack_packet[2] = {ack, '\0'};
    ssize_t sent = send(client_sock, &ack_packet[0], 1, 0);
    if (sent < 0) {
        perror("Failed to send acknowledgment");
    } else {
        printf("Sent acknowledgment: %c\n", ack);
    }
}
```

Lets now call the **send_ack** function inside the **handle_client** after we have checked that the checksum is correct:
```c
        printf("Received packet from GDB client: %s\n", packet); // This line was existing, new code is below it

        // Calculate checksum
        uint8_t calculated_checksum = calculate_checksum(packet);
        if (calculated_checksum != received_checksum) {
            printf("Checksum mismatch: calculated %02x, received %02x\n", calculated_checksum, received_checksum);
            send_ack(client_sock, '-'); // Negative acknowledgment
            continue;
        } else {
            send_ack(client_sock, '+'); // Positive acknowledgment
        }
```

---



---
## Final Code
Lets put it all together to get the following:
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <netinet/in.h>
#include <unistd.h>
#include <stdint.h>
#include <arpa/inet.h>
#include <ctype.h>
#include <time.h>

#define PORT 1234
#define MEMORY_SIZE 1024

// Simulated memory
uint8_t memory_array[MEMORY_SIZE];

// Function prototypes
void handle_client(int client_sock);
void send_packet(int client_sock, const char *data);
char *recv_packet(int client_sock, char *buffer, size_t buffer_size, uint8_t *received_checksum);
uint8_t calculate_checksum(const char *data);
void send_ack(int client_sock, char ack);
void handle_query(int client_sock, const char *packet);
void handle_v_command(int client_sock, const char *packet);

// Entry point
int main() {
    int server_sock, client_sock;
    struct sockaddr_in server_addr, client_addr;
    socklen_t addr_len = sizeof(client_addr);

    // Initialize memory (for demonstration)
    memset(memory_array, 0x00, sizeof(memory_array));

    // Create a socket
    if ((server_sock = socket(AF_INET, SOCK_STREAM, 0)) < 0) {
        perror("Socket creation failed");
        exit(EXIT_FAILURE);
    }

    // Set socket options to allow reuse of address and port
    int opt = 1;
    if (setsockopt(server_sock, SOL_SOCKET, SO_REUSEADDR, &opt, sizeof(opt)) < 0) {
        perror("setsockopt failed");
        close(server_sock);
        exit(EXIT_FAILURE);
    }

    // Set up the server address
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY; // Listen on all interfaces
    server_addr.sin_port = htons(PORT);

    // Bind the socket to the port
    if (bind(server_sock, (struct sockaddr *)&server_addr, sizeof(server_addr)) < 0) {
        perror("Bind failed");
        close(server_sock);
        exit(EXIT_FAILURE);
    }

    // Listen for incoming connections
    if (listen(server_sock, 1) < 0) {
        perror("Listen failed");
        close(server_sock);
        exit(EXIT_FAILURE);
    }

    printf("GDB Stub listening on port %d...\n", PORT);

    // Accept a client connection
    if ((client_sock = accept(server_sock, (struct sockaddr *)&client_addr, &addr_len)) < 0) {
        perror("Accept failed");
        close(server_sock);
        exit(EXIT_FAILURE);
    }

    printf("GDB connected from %s\n", inet_ntoa(client_addr.sin_addr));

    // Handle the client
    handle_client(client_sock);

    // Close the client socket
    close(client_sock);
    // Close the server socket
    close(server_sock);

    return 0;
}

// Handle communication with the GDB client
void handle_client(int client_sock) {
    char packet_buffer[4096];
    uint8_t received_checksum;

    while (1) {
        // Receive packet from GDB
        char *packet = recv_packet(client_sock, packet_buffer, sizeof(packet_buffer), &received_checksum);
        if (!packet) {
            printf("Connection closed or packet error.\n");
            break;
        }

        // Calculate checksum
        uint8_t calculated_checksum = calculate_checksum(packet);
        if (calculated_checksum != received_checksum) {
            printf("Checksum mismatch: calculated %02x, received %02x\n", calculated_checksum, received_checksum);
            send_ack(client_sock, '-'); // Negative acknowledgment
            continue;
        } else {
            send_ack(client_sock, '+'); // Positive acknowledgment
        }

        // Debug: Print received packet
        printf("Received packet: %s\n", packet);

        // Handle GDB commands (basic handling)
        if (strcmp(packet, "g") == 0) {
            // Return the general registers (dummy response)
            // Typically, registers are sent as a hex string, e.g., "00000000" for each register
            // Adjust the number of registers as needed
            send_packet(client_sock, "00000000");  // Example: 4 bytes for simplicity
        } else if (packet[0] == 'm') {
            // Memory read command, format: m<addr>,<length>
            unsigned long addr, length;
            if (sscanf(packet + 1, "%lx,%lx", &addr, &length) != 2) {
                send_packet(client_sock, "E00"); // Invalid format
                continue;
            }

            if (addr + length > MEMORY_SIZE) {
                send_packet(client_sock, "E01"); // Error: Out of bounds
                continue;
            }

            // Convert memory to hex string
            char mem_data[length * 2 + 1];
            for (unsigned long i = 0; i < length; i++) {
                sprintf(mem_data + i * 2, "%02x", memory_array[addr + i]);
            }
            mem_data[length * 2] = '\0'; // Null-terminate

            send_packet(client_sock, mem_data);
        } else if (packet[0] == 'M') {
            // Memory write command, format: M<addr>,<length>:<data>
            unsigned long addr, length;
            char data[4096]; // Buffer for the data

            // Split the packet into address,length and data
            char *colon = strchr(packet, ':');
            if (!colon) {
                send_packet(client_sock, "E00"); // Invalid format
                continue;
            }

            // Parse address and length
            if (sscanf(packet + 1, "%lx,%lx", &addr, &length) != 2) {
                send_packet(client_sock, "E00"); // Invalid format
                continue;
            }

            // Extract data
            strcpy(data, colon + 1);

            // Validate data length
            if (strlen(data) != length * 2) {
                send_packet(client_sock, "E00"); // Data length mismatch
                continue;
            }

            if (addr + length > MEMORY_SIZE) {
                send_packet(client_sock, "E01"); // Error: Out of bounds
                continue;
            }

            // Convert hex data to binary and write to memory
            for (unsigned long i = 0; i < length; i++) {
                unsigned int byte;
                if (sscanf(&data[i * 2], "%2x", &byte) != 1) {
                    send_packet(client_sock, "E00"); // Invalid hex
                    break;
                }
                memory_array[addr + i] = (uint8_t)byte;
            }

            // Send OK if successful
            send_packet(client_sock, "OK");
        } else if (strcmp(packet, "?") == 0) {
            // Signal reporting (dummy response)
            send_packet(client_sock, "S05");  // Example: Signal 5 (SIGTRAP)
        } else if (strcmp(packet, "k") == 0) {
            // Kill command, send OK and terminate
            send_packet(client_sock, "OK");
            break;
        } else if (packet[0] == 'q') {
            // Handle queries
            handle_query(client_sock, packet);
        } else if (packet[0] == 'v') {
            // Handle extended commands
            handle_v_command(client_sock, packet);
        } else {
            // Unknown command, send empty response
            send_packet(client_sock, "");
        }
    }
}

// Send a packet to GDB
void send_packet(int client_sock, const char *data) {
    char packet[4096];
    uint8_t cksum = calculate_checksum(data);

    // Format the packet: $<data>#<checksum>
    snprintf(packet, sizeof(packet), "$%s#%02x", data, cksum);

    // Send the packet
    ssize_t sent = send(client_sock, packet, strlen(packet), 0);
    if (sent < 0) {
        perror("Failed to send packet");
    } else {
        // Debug: Print sent packet
        printf("Sent packet: %s\n", packet);
    }
}

// Receive a packet from GDB
char *recv_packet(int client_sock, char *buffer, size_t buffer_size, uint8_t *received_checksum) {
    ssize_t n;
    char c;
    size_t idx = 0;
    int reading = 0;

    while ((n = recv(client_sock, &c, 1, 0)) > 0) {
        if (c == '$') {
            // Start of a packet
            reading = 1;
            idx = 0;
        } else if (reading && c == '#') {
            // End of packet, read checksum
            char checksum_str[3] = {0};
            if (recv(client_sock, &checksum_str[0], 2, 0) != 2) {
                return NULL; // Failed to read checksum
            }
            *received_checksum = (uint8_t)strtol(checksum_str, NULL, 16);
            buffer[idx] = '\0'; // Null-terminate the packet
            return buffer;
        } else if (reading) {
            if (idx < buffer_size - 1) {
                buffer[idx++] = c;
            } else {
                // Buffer overflow, invalid packet
                return NULL;
            }
        }
    }

    return NULL; // Connection closed or error
}

// Calculate checksum for GDB packet
uint8_t calculate_checksum(const char *data) {
    uint8_t sum = 0;
    while (*data) {
        sum += (uint8_t)*data++;
    }
    return sum;
}

// Send acknowledgment ('+' or '-')
void send_ack(int client_sock, char ack) {
    char ack_packet[2] = {ack, '\0'};
    ssize_t sent = send(client_sock, &ack_packet[0], 1, 0);
    if (sent < 0) {
        perror("Failed to send acknowledgment");
    } else {
        printf("Sent acknowledgment: %c\n", ack);
    }
}

// Handle 'q' queries
void handle_query(int client_sock, const char *packet) {
    if (strcmp(packet, "qSupported") == 0) {
        // Respond with supported features
        // Example: "PacketSize=4000"
        send_packet(client_sock, "PacketSize=4000");
    } else if (strncmp(packet, "qSupported+", 11) == 0) {
        // Handle specific supported queries if needed
        // For simplicity, respond with empty
        send_packet(client_sock, "");
    } else {
        // Unknown query, respond with empty
        send_packet(client_sock, "");
    }
}

// Handle 'v' extended commands
void handle_v_command(int client_sock, const char *packet) {
    if (strcmp(packet, "vMustReplyEmpty") == 0) {
        // According to GDB RSP, reply with empty packet
        send_packet(client_sock, "");
    } else {
        // Unknown 'v' command, respond with empty
        send_packet(client_sock, "");
    }
}
```
