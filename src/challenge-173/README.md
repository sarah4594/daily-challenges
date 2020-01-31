# Daily Challenge #173 - Pandemia

https://dev.to/thepracticaldev/daily-challenge-173-pandemia-5ae7

## Setup

```js
In this challenge, the world has been hit with a new virus! There is a new pandemic that humanity is struggling to fight against. The continents are separated by oceans, but some infected people have traveled before the quarantine.

You'll be given a map of the world in the form of a string:

s = "01000000X000X011X0X"

"0" : uninfected

"1" : infected

"X" : ocean
If one person gets infected on a continent, the entire continent will get infected.
The first and last continents are not connected.
The virus cannot spread across the ocean.
For maps without X, there are no oceans so the entire planet would become infected, return 0%
For maps without 0 or 1, there are no people, return 0.
Return the percentage of the population that are infected by the virus.
```

## Examples

```js
start: map1 = '01000000X000X011X0X'
end: map1 = '11111111X000X111X0X'
total = 15
infected = 11
percentage = (100 * 11) / 15 = 73.33333333333333
```

## Tests

```js
Which worlds are doomed? Which ones are saved?

A: 01000000X000X011X0X
B: 01X000X010X011XX
C: XXXXX
D: 00000000X00X0000
E: 0000000010
F: 000001XXXX0010X1X00010
G: X00X000000X10X0100
```
