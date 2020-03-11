# Daily Challenge #201 - Complete the Pattern

https://dev.to/thepracticaldev/daily-challenge-201-complete-the-pattern-13nb

## Setup

Implement a function pattern, which returns the following pattern for up to n number of rows. If n < 1 then it should return " " i.e. empty string. There are no whitespaces in the pattern.

Pattern:
1
22
333
....
.....
nnnnnn

## Examples

```js
pattern(5):
1
22
333
4444
55555

pattern(11):
1
22
333
4444
55555
666666
7777777
88888888
999999999
10101010101010101010
1111111111111111111111
```

## Tests

```js
pattern(4)
pattern(8)
pattern(0.5)
```
