# Daily Challenge #126 - The Supermarket Line

https://dev.to/thepracticaldev/daily-challenge-126-the-supermarket-line-c97

## Setup

```js
There is a line for the self-checkout machines at the supermarket. Your challenge is to write a function that calculates the total amount of time required for the rest of the customers to check out!

input
customers : an array of positive integers representing the line. Each integer represents a customer, and its value is the amount of time they require to check out.
n : a positive integer, the number of checkout tills.

rules
There is only one line serving many machines, and
The order of the line never changes, and
The front person in the line (i.e. the first element in the array/list) proceeds to a machine as soon as it becomes free.

output
The function should return an integer, the total time required.

```

## Examples

```js
queueTime([5, 3, 4], 1)
// should return 12
// because when there is 1 machine, the total time is just the sum of the times

queueTime([10, 2, 3, 3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2, 3, 10], 2)
// should return 12
```

1. find shortest wait time
2. add customer time to it
3. after all customers, find maximum

0: 0
1: 0

0: 2
1: 0

0: 2
1: 3

0: 2 + 10 = 12
1: 3

shortest = Math.min(...registers)
shortestIndex = registers.indexOf(shortest)
