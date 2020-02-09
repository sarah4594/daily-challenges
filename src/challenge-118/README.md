# Daily Challenge #118 - Reversing a Process

https://dev.to/thepracticaldev/daily-challenge-118-reversing-a-process-1hkf

## Setup

Suppose we know the process (A) by which a string s has been coded to a string r.

The aim of the kata is to decode r to get back the original string s.

Explanation of the known process (A):

data: a string s composed of lowercase letters from a to z and a positive integer num

We know there is a correspondence between `abcde...uvwxyz` and `0, 1, 2 ..., 23, 24, 25 : 0 <-> a, 1 <-> b ...`

If c is a character of s whose corresponding number is x, apply to x the function f: x-> f(x) = num \* x % 26 then find ch the corresponding character of f(x)

Accumulate all these ch in a string r.

Concatenate num and r and return the result.

Example:

```
code("mer", 6015) -> "6015ekx"
m <-> 12, 12 _ 6015 % 26 == 4, 4 <-> e
e <-> 4, 4 _ 6015 % 26 == 10, 10 <-> k
r <-> 17, 17 \* 6015 % 26 == 23, 23 <-> x
We get "ekx" hence "6015ekx"
```

Task:

A string s has been coded to a string r by the above process (A). Write a `function r -> decode(r)` to get back s whenever it is possible.

Indeed it can happen that the decoding is impossible when positive integer num has not been correctly chosen. In that case return "Impossible to decode".

## Examples

```js
decode("6015ekx") -> "mer"
decode("5057aan") -> "Impossible to decode"
```

num = 6015

encode
f(x) => (num \* x) % 26

decode
inverse = modInverse(6015, 26)
if (inverse === 1) then no solution
x = map(c) => c.charCodeAt(0) - 97 === 0..25

f(x) => (inverse \* x) % 26

unmap(x) => String.fromCharCode(x + 97) === a..z
