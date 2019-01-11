# syllab6
Pronouncable representation of binary data

## What it is
*syllab6* is an encoding scheme for binary data, where two-character syllables encode 6 bits of binary data. Each syllable consists of a consonant (encoding 4 bits) followed by a vowel (encoding 2 bits). The tables below list the 20 characters of *syllab6*, with the corresponding binary value of each.

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

### binary-to-pronouncable conversion

1. Process the input data 6 bits at a time.
2. For each chunk of 6 bits,
3. output a consonant corresponding to the value of the first 4 bits, and then
4. output a vowel corresponding to the value of the last 2 bits.

### pronouncable-to-binary conversion

1. Ignore all characters that are not defined by *syllab6*
2. For each valid character, output the corresponding binary string.
