/*
 * This files contains utility functions to parse and display IFF/ILBM files.
 * The file is pretty much work in progress, and should not be used for anything
 * serious.
 *
 * To work, the jDataView library should also be loaded.
 * see http://github.com/vjeux/jDataView for more information.
 *
 * Copyright © 2013 Matthias Wiesmann. All Rights Reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY [LICENSOR] "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Polyfill for window.requestAnimationFrame
window.requestAnimFrame = (function(callback) {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function debugIff(iff, message) {
  var scope = iff.scope;
  if (scope == undefined) {
    scope = '<root>';
  }
  if (iff.chunk == undefined) {
    address = scope;
  } else {
    address = scope + '.' + iff.chunk;
  }
  if (iff.debug_element == undefined) {
    console.log(address + ": " + message);
  } else {
    entry = document.createElement('div');
    entry.className = 'debugEntry';
    iff.debug_element.appendChild(entry);
    loc = document.createElement('div');
    loc.innerHTML = address;
    loc.className = 'debugLoc';
    msg = document.createElement('div');
    msg.innerHTML = message;
    msg.className = 'debugMsg';
    entry.appendChild(loc);
    entry.appendChild(msg);
  }
}

/**
 * Parse an IFF form. This is basically a namespace.
 * Most ILBM files are a form.
 */
function parseIffForm(iff, start, length) {
  var headerView = new jDataView(iff.arrayBuffer, start, 4);
  var formCode = headerView.getString(4, 0);
  debugIff(iff, formCode);
  iff.scope = formCode
  parseIffChunk(iff, start + 4, length - 4);
}

/**
 * Set-up the final rendering canvas.
 * This can be done as soon as the bitmap header has been read.
 */
function setUpCanvas(iff) {
  if (iff.y_aspect != 0) {
    /* some Atari files do not set the aspect fields */
    var ratio = iff.x_aspect / iff.y_aspect;
  } else {
    var ratio = 1;
  }
  iff.effective_width = iff.width * Math.max(ratio, 1);
  iff.effective_height = iff.height / Math.min(ratio, 1);
  /* Size target canvas to effective size */
  iff.canvas.height = iff.effective_height
  iff.canvas.width = iff.effective_width;
}

/*
 * Parse the bitmap header part.
 * Most of the useful meta-data is stored in this section.
 * The rendering canvas is set-up at the end of this function.
 */
function parseIffBMHD(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, 20);
  iff.width = dataView.getUint16(0);
  iff.height = dataView.getUint16(2);
  iff.left = dataView.getUint16(4);
  iff.top = dataView.getUint16(6);
  iff.bitplanes = dataView.getUint8(8);
  iff.masking = dataView.getUint8(9);
  iff.compress = dataView.getUint8(10);
  iff.padding = dataView.getUint8(11);
  iff.transparent_index = dataView.getUint16(12);
  iff.x_aspect = dataView.getUint8(14);
  iff.y_aspect = dataView.getUint8(15);
  iff.page_width = dataView.getUint16(16);
  iff.page_height = dataView.getUint16(18);
  debugIff(iff, 'Height: ' + iff.height + ' width ' + iff.width);
  debugIff(iff, 'Bitplanes ' + iff.bitplanes + ' compressed ' + Boolean(iff.compress) + ' masking ' + iff.masking);
  debugIff(iff, 'Page height: ' + iff.page_height + ' width ' + iff.page_width);
  debugIff(iff, 'Ratio x ' + iff.x_aspect + ' y ' + iff.y_aspect);
  debugIff(iff, 'Transparent color: ' + iff.transparent_index);
  setUpCanvas(iff);
}

/**
 * Convert an intensity value on x bits into 8 bits.
 * For instance this will convert a 4 bit 0xf value into 0xff
 */
function padTo8bits(value, bits) {
  var result = 0;
  for (var s = 8 - bits; s >= 0; s -= bits) {
    result |= value << s;
  }
  return result;
}

/**
 * Check if the color map is already scaled (and not simply shifted).
 * If the all the low bits for all color entries are zeroes then the palette
 * was shifted and not scaled.
 */
function isCMAPScaled(iff) {
  var scale_mask = (1 << iff.cmap_bits) - 1;
  for (var i = 0; i < iff.cmap.length; i++) {
    for (var c = 0; c < 3; c++) {
      var value = iff.cmap[i][c];
      if (value & scale_mask) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Scale a bitmap, i.e. make sure all three color channels use the full 8 bit
 * range.
 */
function scaleCMAP(iff) {
  for (var i = 0; i < iff.cmap.length; i++) {
    for (var c = 0; c < 3; c++) {
      var value = (iff.cmap[i][c] >> (8 - iff.cmap_bits));
      iff.cmap[i][c] = padTo8bits(value, iff.cmap_bits);
    }
  }
}

/**
 * Parse a color-map.
 * The format is straightforward (RGB)
 * Also compute the number of effective bits in the color-table.
 * This is useful to check how the bit-planes match agains the color table.
 */
function parseIffCMAP(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  iff.cmap = new Array(length / 3);
  for (var i = 0; i < iff.cmap.length; i++) {
    iff.cmap[i] = new Array(4);
    for (var c = 0; c < 3; c++) {
      var value = dataView.getUint8(i * 3 + c);
      iff.cmap[i][c] = value;
    }
    iff.cmap[i][3] = 255;
  }
  iff.cmap_bits = 0;
  while(iff.cmap.length > (1 << iff.cmap_bits)) {
    iff.cmap_bits++;
  }
  var scaled = isCMAPScaled(iff);
  debugIff(iff, 'Color map is ' + iff.cmap.length + ' colours (' + iff.cmap_bits + ' bits)');
  if (!scaled) {
    debugIff(iff, 'Scaling the color map from ' + iff.cmap_bits + ' to 8 bits');
    scaleCMAP(iff);
  }
  iff.cmap_overlay = new Array(iff.cmap.length)
}

/**
 * Parse the DPI information chunk. Nothing is done with the data at this time.
 */

function parseDPI(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  iff.dpi_x = dataView.getUint16(0);
  iff.dpi_y = dataView.getUint16(2);
  debugIff(iff, 'Resolution: ' + iff.dpi_x + '×' + iff.dpi_y);
}

/**
 * Parse the Commodore Amiga Graphic Mode.
 * If the color-map is to big for a given graphic mode (HAM or EHB) it is
 * trimmed to the right length.
 * This typically happens for EHB to ensure smooth playback on other tools,
 * but this complicates the animation handling of EHB files.
 */
function parseIffCAMG(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  iff.mode = new Object()
  iff.mode.value = dataView.getUint32(0);
  iff.mode.ham = (iff.mode.value & 0x800);
  iff.mode.ehb = (iff.mode.value & 0x80);
  iff.mode.hires = (iff.mode.value & 0x8000);
  iff.mode.lace = (iff.mode.value & 0x4);
  debugIff(iff, 'HAM: ' + Boolean(iff.mode.ham));
  debugIff(iff, 'EHB: ' + Boolean(iff.mode.ehb));
  debugIff(iff, 'HIRES: ' + Boolean(iff.mode.hires));
  debugIff(iff, 'LACE: ' + Boolean(iff.mode.lace));
  if (iff.mode.ehb && iff.cmap_bits == iff.bitplanes) {
    iff.cmap_bits--;
    debugIff(iff, 'Culling color map to ' + iff.cmap_bits + ' bits for EHB');
    iff.cmap.length = iff.cmap.length >> 1;
    iff.cmap_overlay.length = iff.cmap.length;
  }
  if (iff.mode.ham && iff.cmap_bits > iff.bitplanes - 2) {
    var delta = (iff.cmap_bits - iff.bitplanes + 2);
    iff.cmap_bits-= delta;
    debugIff(iff, 'Culling color map to ' + iff.cmap_bits + ' bits for HAM');
    iff.cmap.length = iff.cmap.length >> delta;
    iff.cmap_overlay.length = iff.cmap.length;
  }
}

/**
 * General function that handles textual annotations.
 * Whatever they are, they are used for the image's title attribute.
 */
function parseIffTextAnnotation(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  var annotation = dataView.getString(length, 0);
  debugIff(iff, annotation);
  iff.canvas.title = annotation;
}

/**
 * Parse color animations.
 */
function parseIffCRNG(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  var animation = new Object();
  animation.rate = dataView.getUint16(2);
  var flags = dataView.getUint16(4);
  animation.active = flags & 1;
  animation.reverse = flags & 2;
  animation.timestamp = 0;
  if (animation.rate) {
    animation.delay_sec = 16384 / (animation.rate * 60);
  } else {
    animation.delay_sec = 1;
  }
  debugIff(iff, 'Animation active: ' + Boolean(animation.active));
  animation.lower = dataView.getUint8(6);
  animation.upper = dataView.getUint8(7);
  if (animation.active) {
    debugIff(iff, 'Animation n°' + iff.color_animations.length);
    debugIff(iff, 'Rate: ' + animation.rate + ' (' + animation.delay_sec.toFixed(2) + ')');
    debugIff(iff, 'Range: x' + animation.lower.toString(16) + ' -> x' + animation.upper.toString(16));
    debugIff(iff, 'Reverse: ' + Boolean(animation.reverse));
    iff.color_animations.push(animation);
    for (var i = animation.lower; i < animation.upper; i++) {
      iff.cmap_overlay[i] = i;
    }
  }
}

/**
 * Updates the indirection overlay used to handle color palette animations.
 */
function UpdateColorOverLay(iff) {
  var now = new Date().getTime();
  var did_update = false;
  for (var i = 0; i < iff.color_animations.length; i++) {
    var animation = iff.color_animations[i];
    var delay = animation.delay_sec * 1000;
    if (now - animation.timestamp < delay) {
      continue;
    }
    animation.timestamp = now;
    did_update = true;
    var increment = -1;
    if (animation.reverse == 2) {
      increment = 1;
    }
    var diff = animation.upper - animation.lower;
    for (var j = animation.lower; j < animation.upper; j++) {
      var value = iff.cmap_overlay[j] + increment;
      if (value >= animation.upper) {
        value -= diff;
      }
      if (value < animation.lower) {
        value += diff;
      }
      iff.cmap_overlay[j] = value;
    }
  }
  return did_update;
}

/**
 * Constructor for a ColorChange happening between lines.
 */
function ColorChange(data, register_offset) {
  this.register = ((data & 0xf000) >> 12) + register_offset;
  var red = (data & 0xf00) >> 8;
  var green = (data & 0xf0) >> 4;
  var blue = (data & 0xf);
  this.color = [padTo8bits(red, 4), padTo8bits(green, 4), padTo8bits(blue, 4), 255];
}

/**
 * Parse the PCHG chunk, that holds color changes between lines.
 * Currently only the uncompressed format with short changes is supported.
 */
function parsePCHG(iff, start, length) {
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  var compression = dataView.getUint16(0);
  debugIff(iff, 'Compression: ' + compression);
  var flags = dataView.getUint16(2);
  var start_line = dataView.getInt16(4);
  var line_count =  dataView.getUint16(6);
  debugIff(iff, 'Lines: ' + start_line + ' (' + line_count + ')');
  var min_register = dataView.getUint16(8);
  var max_register = dataView.getUint16(10);
  var tree_size = dataView.getUint16(12);
  // reserved word in between.
  var full_size = dataView.getUint32(16);
  debugIff(iff, 'Size: ' + tree_size + '/' + full_size);
  var word_count = (line_count + 31) >> 5;
  iff.color_change_lists.length = iff.height;
  var change_count = 0;
  var data_offset = 20;
  for (var i = 0; i < word_count; i++) {
    var line_bitmap = dataView.getUint32(data_offset);
    data_offset += 4;
    for (var j = 0; j < 32; j++) {
      var mask = 1 << (31 - j);
      if (mask & line_bitmap) {
        var line_number = start_line + (i * 32) + j;
        iff.color_change_lists[line_number] = new Array();
        change_count++;
      }
    }
  }
  debugIff(iff, 'Changes: ' + change_count);
  var change_filled_count = 0;
  for (var i = 0; i < iff.color_change_lists.length; i++) {
    if (data_offset >= length) {
      break;
    }
    var change_list = iff.color_change_lists[i];
    if (change_list != undefined) {
      var change_count_16 = dataView.getUint8(data_offset);
      var change_count_32 = dataView.getUint8(data_offset + 1);
      var total_changes = change_count_16 + change_count_32;
      data_offset += 2;
      change_list.length = total_changes;
      for (var j = 0; j < change_count_16; j++) {
        var data = dataView.getUint16(data_offset);
        data_offset += 2;
        change_list[j] = new ColorChange(data, 0);
      }
      for (var j = 0; j < change_count_32; j++) {
        var data = dataView.getUint16(data_offset);
        data_offset += 2;
        change_list[j + change_count_16] = new ColorChange(data, 16);
      }
      change_filled_count++;
    }
  }
  debugIff(iff, 'Filled-in changes: ' + change_filled_count);
}

/**
 * Uncompress data compressed using the packbit algorithm.
 */
function dePack(dataView, length, buffer) {
  var input_offset = 0;
  var output_offset = 0;
  while(input_offset < length - 1) {
    var control = dataView.getInt8(input_offset);
    input_offset++;
    if (control > 0) {
      for (var r = 0; r < control + 1; r++) {
        if (input_offset >= length) {
          return output_offset;
        }
        buffer[output_offset] = dataView.getUint8(input_offset);
        output_offset++;
        input_offset++;
      }
    } else {
      var range = -control + 1;
      var value = dataView.getUint8(input_offset);
      input_offset++;
      for (var r = 0; r < range; r++) {
        buffer[output_offset] = value;
        output_offset++;
      }
    }
  }
  return output_offset;
}

/**
 * De-interlace the bitplanes into per pixel values.
 * The code currently does not handle the transparency plane properly.
 */
function bitPlaneToPixBuffer(iff, bit_buffer) {
  iff.buffer_size = iff.height * iff.width;
  iff.buffer = new Array(iff.buffer_size);
  var planes = iff.bitplanes;
  if (iff.masking == 1) {
    planes += 1;
  }
  for (var y = 0; y < iff.height; y++) {
    for (var p = 0; p < planes; p++) {
      var plane_mask = 1 << p;
      for (var i = 0; i < iff.row_bytes; i++) {
        var bit_offset = (y * planes * iff.row_bytes) + (p * iff.row_bytes) + i;
        var bit_value = bit_buffer[bit_offset];
        for (var b = 0; b < 8; b++) {
          var pixel_mask = 1 << (7 - b);
          if (bit_value & pixel_mask) {
            var x = (i * 8) + b;
            iff.buffer[(y * iff.width) + x] |= plane_mask;
          }
        }
      }
    }
  }
}

/**
 * Parse the BODY section, which contains the bitplane data.
 * Most of the heavy lifting is done in the bitPlaneToPixBuffer function.
 */
function parseIffBody(iff, start, length) {
  iff.row_bytes = ((iff.width + 15) >> 4) << 1;
  var dataView = new jDataView(iff.arrayBuffer, start, length);
  var bit_buffer = new Array(iff.height * iff.row_bytes * iff.bitplanes);
  if (iff.compress) {
    var bit_buffer_size = dePack(dataView, length, bit_buffer);
    var compression = 1 - (length / bit_buffer_size) ;
    debugIff(iff, 'Compression ' + (compression * 100).toFixed(2) + '%')
    debugIff(iff, 'Depacked size: ' + bit_buffer_size);
  } else {
    for(var i = 0; i < length; i++) {
      bit_buffer[i] = dataView.getUint8(i);
    }
  }
  bitPlaneToPixBuffer(iff, bit_buffer);
}

/**
 * Parse the main ILBM chunk.
 * This function mostly dispatches control to the various parsing methods.
 */
function parseIffChunk(iff, start, length) {
  var offset = 0;
  do {
    var headerView = new jDataView(iff.arrayBuffer, start + offset, 8);
    var chunkCode = headerView.getString(4, 0);
    var chunkLength = headerView.getUint32(4);
    debugIff(iff, chunkCode + ' offset ' + offset + ' length ' + chunkLength);
    iff.chunk = chunkCode;
    var chunkStart = start + offset + 8;
    if (chunkCode == 'FORM') {
      parseIffForm(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'BMHD') {
      parseIffBMHD(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'CMAP') {
      parseIffCMAP(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'BODY') {
      parseIffBody(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'CAMG') {
      parseIffCAMG(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'ANNO' || chunkCode == 'AUTH') {
      parseIffTextAnnotation(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'CRNG') {
      parseIffCRNG(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'DPI ') {
      parseDPI(iff, chunkStart, chunkLength);
    } else if (chunkCode == 'PCHG') {
      parsePCHG(iff, chunkStart, chunkLength);
    }
    offset += 8 + chunkLength;
    if ((offset & 1) == 1) {
      offset += 1;
    }
    iff.chunk = undefined;
  } while(offset < (length - 8) && (start + offset + 8) < iff.arrayBuffer.byteLength);
}


/**
 * Resolves a HAM encoded value into the correct color.
 * This assumes the color-table has been properly culled.
 */
function resolveHAMPixel(iff, value, previous_color) {
  var selector = (value >> iff.cmap_bits) & 3;
  var data = padTo8bits((value % iff.cmap.length), iff.cmap_bits);
  var color_copy = [previous_color[0], previous_color[1], previous_color[2], 255];
  if (selector == 1) {
    color_copy[2] = data;
  } else if (selector == 2) {
    color_copy[0] = data;
  } else {
    color_copy[1] = data;
  }
  return color_copy;
}

/**
 * Resolves a EHB encoded value into the correct color.
 * This assumes the color-table has been properly culled.
 */
function resolveEHBPixel(iff, value) {
  var base_color = iff.cmap[(value % iff.cmap.length)];
  return [base_color[0] >> 1, base_color[1] >> 1, base_color[2] >> 1, 255];
}

/**
 * Resolves a RGB24 encoded value into a correct color.
 */
function resolveRGB24Pixel(value) {
  var red = (value & 0xff0000) >> 16;
  var green = (value & 0xff00) >> 8;
  var blue = value & 0xff;
  return [red, green, blue, 255];
}

/**
 * Convert the value for a given pixel into the appropriate rgba value.
 * The resolution logic depends on a lot of factors.
 */
function resolvePixels(iff, value, previous_color) {
  if (value == undefined) {
    value = iff.transparent_index
  }
  if (iff.masking == 2 && value == iff.transparent_index) {
    // This breaks some images.
    // return iff.transparent_color;
  }
  if (iff.cmap == undefined) {
    /* Not color map, must be absolute 24 bits RGB */
    if (iff.bitplanes == 24) {
      return resolveRGB24Pixel(value);
    }
  }
  if (value < iff.cmap.length) {
    return iff.cmap[value];
  }
  /* ham mode */
  if (iff.mode.ham) {
    return resolveHAMPixel(iff, value, previous_color);
  }
  /* ehb mode */
  if (iff.mode.ehb) {
    return resolveEHBPixel(iff, value);
  }
  return iff.transparent_color;
}

/**
 * Resolve pixels during animation time.
 */
function resolveOverlayPixels(iff, value) {
  var index;
  if (value >= iff.cmap_overlay.length) {
    if (!iff.mode.ehb) {
      return undefined;
    }
    var entry = iff.cmap_overlay[value % iff.cmap.length];
    if (entry == undefined) {
      return undefined;
    }
    index = entry + iff.cmap_overlay.length;
  } else {
    index = iff.cmap_overlay[value];
  }
  if (index == undefined) {
    return undefined;
  }
  return resolvePixels(iff, index, iff.black_color);
}

/**
 * Function called before each line start.
 * Copper like color-table rewrites are handled here.
 */
function lineStart(iff, line) {
  var change_list = iff.color_change_lists[line];
  if (change_list == undefined) {
    return;
  }
  for (var i = 0; i < change_list.length; i++) {
    var change = change_list[i];
    iff.cmap[change.register] = change.color;
  }
}

/**
 * Draw the image into a canvas.
 * In order to be able to stretch the image, we first render into an off-screen canvas,
 * and then copy the image into the final canvas.
 */
function drawIffImage(iff) {
  setUpCanvas(iff);
  /* Render pixel for pixel into off-screen canvas */
  iff.render_canvas = document.createElement("canvas");
  iff.render_canvas.height = iff.height;
  iff.render_canvas.width = iff.width;
  render_ctx = iff.render_canvas.getContext("2d");
  var target = render_ctx.createImageData(iff.width, iff.height);
  var color;
  for (var y = 0; y < iff.height; y++) {
    lineStart(iff, y);
    color = iff.black_color;
    for (var x = 0; x < iff.width; x++) {
      var in_offset = y * iff.width + x;
      var out_offset = y * iff.width + x;
      var value = iff.buffer[in_offset];
      color = resolvePixels(iff, value, color);
      for (var c = 0; c < 4; c++) {
        target.data[out_offset * 4 + c] = color[c];
      }
    }
  }
  render_ctx.putImageData(target,0,0);
  /* Now render the image into the effective display target, with effective sizes */
  iff.display_ctx = iff.canvas.getContext("2d");
  iff.display_ctx.drawImage(
      iff.render_canvas, 0, 0, iff.width, iff.height, 0, 0,
      iff.effective_width, iff.effective_height);
}

/*
 * Animate the image.
 */
function animateIffImage(iff) {
  var did_update = UpdateColorOverLay(iff);
  if (did_update) {
    var render_ctx = iff.render_canvas.getContext("2d");
    var target = render_ctx.getImageData(0, 0, iff.width, iff.height);
    /* Try to minimize the area that needs to be copied back on screen */
    var dirty_x1 = iff.width;
    var dirty_y1 = iff.height;
    var dirty_x2 = 0;
    var dirty_y2 = 0;
    for (var y = 0; y < iff.height; y++) {
     for (var x = 0; x < iff.width; x++) {
        var in_offset = y * iff.width + x;
        var out_offset = y * iff.width + x;
        var value = iff.buffer[in_offset];
        var color = resolveOverlayPixels(iff, value);
        if (color != undefined) {
          for (var c = 0; c < 3; c++) {
            var new_color = color[c];
            target.data[out_offset * 4 + c] = new_color;
          }
          dirty_x1 = Math.min(dirty_x1, x);
          dirty_y1 = Math.min(dirty_y2, y);
          dirty_x2 = Math.max(dirty_x2, 0);
          dirty_y2 = Math.max(dirty_y2, 0);
        }
     }
    }
    var dirty_width = iff.width - dirty_x2;
    var dirty_height = iff.height - dirty_y2;
    render_ctx.putImageData(target, 0, 0, dirty_x1, dirty_y1, dirty_width, dirty_height);
    iff.display_ctx.drawImage(iff.render_canvas, 0, 0, iff.width, iff.height, 0, 0,
                       iff.effective_width, iff.effective_height);
  }
  window.requestAnimFrame(function () { animateIffImage(iff); });
}

/**
 * Constructor for the root object that contains all the data in the IFF file.
 */
function IffContainer(canvas_id) {
  this.canvas = document.getElementById(canvas_id);
  this.scope = '';
  this.mode = new Object();
  this.color_animations = new Array();
  this.color_change_lists = new Array();
  this.transparent_color = [0,0,0,0];
  this.black_color = [0,0,0,255];
  this.debug_element = document.getElementById(canvas_id + "_debug");
}

/**
 * Simple error reporting function: writes a message into the canvas.
 */
function reportError(xhr, path, target_canvas) {
  target_canvas.style.cursor = 'default';
  var text = 'Error loading from ' + path +' : ' +  xhr.statusText;
  target_canvas.title = text;
  var context = target_canvas.getContext("2d");
  context.fillText(text, 5, 20);
}

/**
 * Main entry-point function
 * • path is the url path of the file to load
 * • canvas_id is the CSS id of the canvas to draw into.
 * • animate if true, and there are some active animations in the file
 *   animations are started.
 */
function loadIffImage(path, canvas_id, animate) {
  var iff = new IffContainer(canvas_id);
  iff.canvas.style.cursor = 'wait';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function(event) {
    iff.arrayBuffer = xhr.response;
    if (iff.arrayBuffer && xhr.status < 400) {
      parseIffChunk(iff, 0, iff.arrayBuffer.byteLength);
      // Give the browser a chance to do something.
      window.setTimeout(function() {
        drawIffImage(iff);
        iff.canvas.style.cursor = 'default'
        if (iff.color_animations.length > 0 && animate) {
          animateIffImage(iff);
        }
      }, 100);
    } else {
      reportError(xhr, path, iff.canvas);
    }
  }
  xhr.send();
}
