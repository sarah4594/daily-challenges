# Daily Challenge #144 - Box Office Clerk

https://dev.to/thepracticaldev/daily-challenge-144-box-office-clerk-530i

## Setup

You work as a clerk at a cinema box office and a new movie has been released. There are a lot of people standing in a line waiting to buy a ticket with either 25, 50, or 100 dollar bill. Each ticket for the new movie costs 25 dollars.

If you start with no money in the register, can you sell a ticket to every person in line and give change? You must attend to everyone in order, it would be unfair to sell tickets out of order.

Return YES, if you can sell a ticket to every person and give change.
Otherwise, return NO.

## Examples

```js
tickets([25, 25, 50]) => YES
tickets([25, 100]) => NO You will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) => NO You will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
```

## Tests

```js
tickets([25, 25, 50, 50])
tickets([25, 50, 25, 100])
```
