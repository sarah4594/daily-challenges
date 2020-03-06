# Daily Challenge #190 - capitalizeFirstLast

https://dev.to/thepracticaldev/daily-challenge-190-capitalizefirstlast-58jf

## Setup

For this challenge, you will have to write a function called capitalizeFirstLast or capitalize_first_last. This function will capitalize the first and last letter of each word, and lowercase what is in between.

```js
capitalizeFirstLast "and still i rise" -- "AnD StilL I RisE"
```

### Rules:

The function will take a single parameter, which will be a string.
The string can contain words separated by a single space.
Words are made of letters from the ASCII range only.
The function should return a string.
Only the first and last letters are uppercased.
All the other letters should be lowercased.

## Examples

```js
capitalizeFirstLast "and still i rise" -- "AnD StilL I RisE"
capitalizeFirstLast "when words fail music speaks" -- "WheN WordS FaiL MusiC SpeakS"
capitalizeFirstLast "WHAT WE THINK WE BECOME" -- "WhaT WE ThinK WE BecomE"
capitalizeFirstLast "dIe wITh mEMORIEs nOt dREAMs" -- "DiE WitH MemorieS NoT DreamS"
capitalizeFirstLast "hello" -- "HellO"
```
