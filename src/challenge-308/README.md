# Daily Challenge #308 - Wave Sort

https://dev.to/thepracticaldev/daily-challenge-308-wave-sort-305n

## Setup

A list of integers is sorted in “Wave” order if alternate items are not less than their immediate neighbors.

Therefore, the array [4, 1, 7, 5, 6, 2, 3] is in wave order because 4 >= 1, then 1 <= 7, then 7 >= 5, then 5 <= 6, then 6 >= 2, and finally 2 <= 3.

The wave-sorted lists has to begin with an element not less than the next, so [1, 4, 5, 3] is not sorted in wave because 1 < 4

Your task is to implement a function that takes a list of integers and sorts it into wave order.

## Test

1. [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]
2. [3, 2,5,1,6]
3. [1, 2, 3]
