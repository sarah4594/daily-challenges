# Daily Challenge #187 - Most Sales

https://dev.to/thepracticaldev/daily-challenge-187-most-sales-1a10

## Setup

You work in the best consumer electronics company around. Your boss asked you to find out which products generate the most revenue.

You'll be given lists of products, amounts, and prices. Given these three lists of same length, return the product name(s) with the highest revenue `(amount * price)`. If multiple products have the same revenue, order them according to their original positions.

## Examples

```js
products: ["Computer", "Cell Phones", "Vacuum Cleaner"]
amounts: [3, 24, 8]
prices: [199, 299, 399]

return: Cell Phones
```

## Tests

```js
products: [
  'Cell Phones',
  'Vacuum Cleaner',
  'Computer',
  'Autos',
  'Gold',
  'Fishing Rods',
  'Lego',
  ' Speakers',
]
amounts: [0, 12, 24, 17, 19, 23, 120, 8]
prices: [9, 24, 29, 31, 51, 8, 120, 14]
```
