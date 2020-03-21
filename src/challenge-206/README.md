# Daily Challenge #206 - Pound Means Backspace

https://dev.to/thepracticaldev/daily-challenge-206-pound-means-backspace-4a53

## Setup

Assume "#" is like a backspace in string. This means that string "a#bc#d" would actually be "bd".

Implement a function that will process a string with "#" symbols and understand them as backspaces.

## Example

```js
"abc#def##ghi###" ==> "abd"
"abc#d##c" ==> "ac"
"abc##d######" ==> ""
"#######" ==> ""
"" ==> ""
```

## Test

```js
cleanString('abc#de##c')
cleanString('abc####dhh##c#')
cleanString('Thee# Empires# SS#tateBuildingg#')
```
