# syllab6
Pronouncable representation of binary data

## What it is
*syllab6* is a pronouncable encoding scheme for binary data, where two-character syllables encode 6 bits of binary data. There are several use cases where arbitrary binary data needs to be represented in human memory for a shorter or longer period of time: Randomly generated cryptographic keys or passwords, computer-generated codes or identifiers to be entered manually into another system, spoken transfer of computer-generated codes or identifiers. 

*syllab6* is designed to ease representation of binary data in human memory: Syllables are pronouncable and effectively stored in auditory memory, lowercase syllables are easily typed and easily stored in muscle memory, sequences of random syllables are likely to evoke meaning (by accidental similarity to real words) which additionally eases their memorability.

The characters included in *syllab6* were specifically chosen to be pronouncably distinct (in English) and reduce the likelihood of misinterpretation. The characters `c`, `j`, `q`, `u`, `w`, and `x` were deliberately excluded because they may pronounced like or look similar to other characters.

In *syllab6*, each syllable consists of one consonant (encoding 4 bits) followed by one vowel (encoding 2 bits). The tables below list the 20 characters of *syllab6*, with the corresponding binary value of each.

### Consonants

| Character | Binary string |
|-----------|---------------|
| b | 0000 |
| d | 0001 |
| f | 0010 |
| g | 0011 |
| h | 0100 |
| k | 0101 |
| l | 0110 |
| m | 0111 |
| n | 1000 |
| p | 1001 |
| r | 1010 |
| s | 1011 |
| t | 1100 |
| v | 1101 |
| y | 1110 |
| z | 1111 |

### Vowels

| Character | Binary string |
|-----------|---------------|
| a | 00 |
| e | 01 |
| i | 10 |
| o | 11 |

## Conversion algorithms

*syllab6* encodes 6 bits of data in each syllable, and thus corresponds to a base 64 representation (where each distinct syllable represents a distinct base 64 digit). Thus, algorithms designed for converting between base64 and bytes (binary octets), can easily be modified to convert between *syllab6* and octets.

The folowing are general descriptions of algorithms for converting between *syllab6* and binary octets:

### binary-to-pronouncable conversion

1. Process the input data 6 bits at a time. If the input data does not have a length which is a multiple of 6, right-pad with `0` until it does.
2. For each chunk of 6 bits,
   - append a consonant corresponding to the value of the first 4 bits to the output, and then
   - append a vowel corresponding to the value of the last 2 bits to the output.

### pronouncable-to-binary conversion

1. Ignore all characters that are not defined by *syllab6*.
2. For each valid character, append the corresponding binary string to the output.
3. If the final binary output length is not a multiple of 8, right-trim until it is.

## Examples

Encoding three octets, 01001101 01100001 01101110 (requires no padding):


| 0100 | 11 | 0101 | 10 | 0001 | 01 | 1011 | 10 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| h | o | k | i | d | e | s | i |

Encoding two octets, 01001101 01100001 (requires two padding bits):

| 0100 | 11 | 0101 | 10 | 0001 | 00 |
| :---: | :---: | :---: | :---: | :---: | :---: |
| h | o | k | i | d | a |

Encoding the octet 01001101 (requires four padding bits):


| 0100 | 11 | 0100 | 00 |
| :---: | :---: | :---: | :---: | 
| h | o | h | a |
