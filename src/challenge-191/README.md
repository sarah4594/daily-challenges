# Daily Challenge #191 - Alphabetical Addition

https://dev.to/thepracticaldev/daily-challenge-191-alphabetical-addition-27ki

## Setup

Write a function that can add letters together. Each letter will be valued based on their position in the alphabet.

### Rules:

Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'

## Examples

```js
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
```

## Tests

```js
addLetters('a', 'b', 'c')
addLetters('z')
addLetters('a', 'b')
addLetters('c')
addLetters('y', 'c', 'b')
addLetters()
```
