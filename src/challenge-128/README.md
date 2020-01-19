# Daily Challenge #128 - Blackjack Scorer

https://dev.to/thepracticaldev/daily-challenge-128-blackjack-scorer-4lhp

## Setup

Write a function that determines the score of a hand in a standard game of Blackjack 21. The function will receive an array of strings representing the cards that are in the hand of the player. Please return the score of the hand as an integer.

Scoring:
Number cards count as their face values. Royalty count as 10s. An Ace can be either 11 or 1.

Return the score closest to 21. If the score is greater than 21, return the score and say "Busted!".

## Tests

```js
;['A'][('A', 'J')][('A', '10', 'A')][('5', '3', '7')][
  ('5', '4', '3', '2', 'A', 'K')
]
```
