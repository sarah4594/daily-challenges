# Daily Challenge #163 - Significant Figures

https://dev.to/thepracticaldev/daily-challenge-163-significant-figures-n79

## Setup

Write a function that takes a number and returns the number of significant figures in a given number.

Significant Figures are the meaningful digits in a measured or computed value.
All non-zero digits are significant
4.357 has 4 significant figures
152.63 has 5 significant figures

Zeroes at the beginning of a number are not significant
0215 has 3 significant figures
0.6 has 1 significant figure

Trailing zeroes in a number with a decimal point are significant
78.200 has 5 significant figures
20.0 has 3 significant figures

Trailing zeroes in a number without a decimal point are not significant
1200 has 2 significant figures
345000 has 3 significant figures

All zeroes between significant figures are significant
90.09 has 4 significant figures
5050 has 3 significant figures

Constraints:
The type of the given number will be string.
You must return the number of significant figures as type int.
No blank strings will be given.

## Tests

```js
1
003
3000
404
050030210
0.1
0.0
```
