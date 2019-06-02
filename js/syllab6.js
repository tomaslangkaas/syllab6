/**
 * ECMAScript 3 functions for syllab6 encoding
 * MIT Licensed, Copyright (c) 2019 Tomas Langkaas
 * https://github.com/tomaslangkaas/syllab6
 * 
 * syllab6.fromOctets(octets[, delimit])
 *   takes an array of byte values and returns a string 
 *   with the syllab6 representation of the binary data:
 *   syllab6.fromOctets([0x4d, 0x61, 0x6e]) returns "hokidesi"
 *   The delimit argument is optional, if set to a truthy value,
 *   syllables are grouped in 4, delimited with a blank space
 * 
 * syllab6.toOctets(syllab6)
 *   takes a string with syllab6 representation of binary 
 *   data and returns an array of the corresponding byte values:
 *   syllab6.toOctets("hokidesi") returns [0x4d, 0x61, 0x6e]
 */

var syllab6 = {
  fromOctets: function (octets, delimit) {
    var syllab6 = "",
      outlength = octets.length * 4 / 3,
      consonants = [
        "b", "d", "f", "g",
        "h", "k", "l", "m",
        "n", "p", "r", "s",
        "t", "v", "y", "z"
      ],
      vowels = [
        "a", "e", "i", "o"
      ],
      syllables = 0,
      position = 0,
      buffer = 0,
      delimiter = delimit ? " " : "",
      value;
    while (syllables < outlength) {
      if (((syllables - 1) % 4) === 3) {
        syllab6 += delimiter;
      }
      if ((syllables & 3) !== 3) {
        buffer = buffer << 8 | octets[position++];
      }
      value = buffer >> 2 * (++syllables & 3) & 63;
      syllab6 += consonants[value >> 2] + vowels[value & 3];
    }
    return syllab6;
  },
  toOctets: function (syllab6) {
    var octets = [],
      lookup = "bdfghklmnprstvyzaeio",
      buffer,
      bits,
      position,
      value;
    for (
      position = buffer = bits = 0;
      position < syllab6.length;
      position++
    ) {
      value = lookup.indexOf(syllab6.charAt(position));
      if (value > -1) {
        if (value < 16) {
          buffer = buffer << 4 | value;
          bits += 4;
        } else {
          buffer = buffer << 2 | (value & 15);
          bits += 2;
        }
        if (bits >= 8) {
          bits -= 8;
          octets.push((buffer >>> bits) & 0xff);
        }
      }
    }
    if (bits) {
      octets.push((buffer << (8 - bits)) & 0xff);
    }
    return octets;
  }
};