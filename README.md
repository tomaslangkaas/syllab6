# syllab6
Pronouncable representation of binary data

## What it is
*syllab6* is a pronouncable encoding scheme for binary data, where two-character syllables encode 6 bits of binary data.

There are several use cases where arbitrary binary data needs to be represented in human memory for a shorter or longer period of time: Randomly generated cryptographic keys or passwords, computer-generated codes or identifiers to be entered manually into another system, spoken transfer of computer-generated codes or identifiers. 

*syllab6* is designed to ease representation of binary data in human memory: Syllables are pronouncable and effectively stored in auditory memory; lowercase syllables are easily read, easily typed and easily stored in muscle memory; sequences of random syllables are likely to evoke meaning (by accidental similarity to real words) which additionally eases their memorability.

The characters included in *syllab6* were specifically chosen to generate pronouncably distinct syllables (in English) and reduce the likelihood of misinterpretation. The characters `c`, `j`, `q`, `u`, `w`, and `x` were deliberately excluded because they have several possible pronounciations or may be pronounced like or look similar to other included characters.

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

*syllab6* encodes 6 bits of data in each syllable, and thus corresponds to a base 64 representation (where each distinct syllable represents a distinct base 64 digit). Thus, algorithms designed for converting between base64 and bytes (binary octets) can easily be modified to convert between *syllab6* and bytes.

The following are general descriptions of algorithms for converting between *syllab6* and bytes (binary octets):

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

## Written presentation of *syllab6*&mdash;whitespace, punctuation, and case-sensitivity.

Written presentations and string representations of *syllab6* allows all other types of characters to be inserted anywhere, characters not included in *syllab6* are always ignored when decoding. This allows *syllab6* text to be broken up in any way with whitespace, punctuation or other characters to improve readability and memorability. However, it is generally advised to present *syllab6* data in chunks of at most 4 syllables, as 4 syllables is easily retained in short-term memory without need for repetition. Four syllables also correspond to exactly 3 bytes (24 bits).

*syllab6* is case-sensitive, uppercase characters are always ignored. 

## Comparison to other human-readable presentations of binary data

The table below presents different human-readable encodings of the same randomly generated 64 bits,
`10100010 11001101 01111010 01100010 11100000 00010101 11000010 10000010`:

| Encoding | Result |
| -------- | ------ |
| Hexadecimal | `a2 cd 7a 62 e0 15 c2 82`|
| Base64 | `os16YuAVwoI=` |
| Ascii (Z85) | `QrO0[&1:aX` |
| syllab6 | `rasaveyi lasibake tarafa` |

While the *syllab6* encoding is longer than the others, it is likely also easier to read, easier to type, easier to keep in short-term memory, and easier to memorize. If presented with a written presentation of arbitrary binary data that is to be manually entered into another system, all these benefits matter.

## Licensing and usage rights

The *syllab6* encoding scheme is freely available to use in any way without any licensing fee or specific permission. To the best of my knowledge, there are no existing patents or other legal barriers that prevents this.

The idea of representing binary data as pronouncable text is not new. However, as far as I know, the exact encoding scheme of *syllab6* is distinct (with its specific choice of included characters, values, and its specific design philosophy).

## Test vectors

### Vector #1

All 256 bytes from `00` to `ff`.

Binary (hexadecimal):

```
00 01 02 03 ... ff
```

*syllab6*:

```
babadabi batahade benamafa biharafo bobavagi botebahe 
danegaka dehelako dibepali ditetame donezana fahifano 
febikapi fetinare finisasa fohiyaso gabodati gatohave 
genomaya gihorayo gobovazi govabebe hapageda hekaledo 
hidapefi hivatege hopazeha kakefeho kedekeki kevenele 
kipesema kokeyemo ladideni lavihepe lepimera likirero 
lodivesi lovobete mapogeva mekolevo midopeyi mivoteze 
mopoziba nalafibo nefakidi neyanife nirasiga nolayigo 
pafedihi payehike peremila pilerilo pofevimi poyibine 
rarigipa relilipo rifipiri riyitise rorizita salofito 
sefokivi seyoniye sirosiza soloyizo tagadobi tazahode 
tesamofa timarofo togavogi tozebohe vasegoka vemeloko 
vigepoli vizetome vosezona yamifono yegikopi yezinore 
yisisosa yomiyoso zagodoti zazohove zesomoya zimoroyo 
zogovozi zota
```

### Vector #2

All 255 bytes from `01` to `ff`.

Binary (hexadecimal):

```
01 02 03 04 ... ff
```

*syllab6*:


```
bahafabo bebakadi betanafe binasaga bohayago dabedahi 
datehake denemala diheralo dobevami dotibane fanigapa 
fehilapo fibipari fititase fonizata gahofato gebokavi 
getonaye ginosaza gohoyazo hadadebi havahede hepamefa 
hikarefo hodavegi hovebehe kapegeka kekeleko kidepeli 
kiveteme kopezena lakifeno ledikepi levinere lipisesa 
lokiyeso madodeti mavoheve mepomeya mikoreyo modovezi 
moyabibe naragida nelalido nifapifi niyatige noraziha 
palefiho pefekiki peyenile piresima poleyimo rafidini 
rayihipe rerimira riliriro rofivisi royobite sarogiva 
selolivo sifopiyi siyotize sorozoba tamafobo tegakodi 
tezanofe tisasoga tomayogo vagedohi vazehoke vesemola 
vimerolo vogevomi vozibone yasigopa yemilopo yigipori 
yizitose yosizota zamofoto zegokovi zezonoye zisosoza 
zomoyozo
```

### Vector #3

All 254 bytes from `02` to `ff`.

Binary (hexadecimal):

```
02 03 04 05 ... ff
```

*syllab6*:

```
banagada behalado bibapafi bitatage bonazaha dahefaho 
debekaki detenale dinesama doheyamo fabidani fatihape 
fenimara fihiraro fobivasi fotobate ganogava geholavo 
gibopayi gitotaze gonozeba hakafebo hedakedi hevanefe 
hipasega hokayego kadedehi kaveheke kepemela kikerelo 
kodevemi kovibene lapigepa lekilepo lidiperi livitese 
lopizeta makofeto medokevi mevoneye miposeza mokoyezo 
nafadibi nayahide neramifa nilarifo nofavigi noyebihe 
paregika peleliko pifepili piyetime porezina ralifino 
refikipi reyinire ririsisa roliyiso safoditi sayohive 
seromiya siloriyo sofovizi sozabobe tasagoda temalodo 
tigapofi tizatoge tosazoha vamefoho vegekoki vezenole 
visesoma vomeyomo yagidoni yazihope yesimora yimiroro 
yogivosi yozobote zasogova zemolovo zigopoyi zizotoze 
zosoza
```

## Code
