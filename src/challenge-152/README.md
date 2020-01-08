# Daily Challenge #152 - Strongest Number in an Interval

https://dev.to/thepracticaldev/daily-challenge-152-strongest-number-in-an-interval-pj6

## Setup

The strength of an even number is determined by the amount of times we can successfully divide by 2 until we reach an odd number.

For example, if n = 12, then:
12 / 2 = 6
6 / 2 = 3
We have divided 12 in half twice and reached 3, so the strength of 12 is 2.

Given a closed interval [n, m], return the strongest even number in the interval. If multiple solutions exist, return the smallest of the possible solutions.

## Examples

```js
for [1, 2], return 2. (1 has a strenght of 0; 2 has a strength of 1)
for [5, 10], return 8.
```

## Tests

```js
;[48, 56][(129, 193)]
```
