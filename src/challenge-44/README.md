# Daily Challenge #44 - Mexican Wave

https://dev.to/thepracticaldev/daily-challenge-44-mexican-wave-kk4

## Setup

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm typically achieved in a packed stadium. Spectators will start a cheer in one corner and then roll it around the arena, with each section rising from its seat as it yells.

Today's challenge is to write a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. The input string will always start lower-case. If the character in the string is whitespace then pass over it.

## Example

wave("hello") => []string{"Hello", "hEllo", "heLlo", "helLo", "hellO"}
