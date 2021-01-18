# Daily Challenge #301 - Array Combos

https://dev.to/thepracticaldev/daily-challenge-301-array-combos-5b1e

## Setup

In this challenge, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

## Examples

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilities. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, but the extra outcomes are just duplicates.

## Test

solve([[1,2],[4,4],[5,6,6]])
solve([[1,2],[3,4],[5,6]])
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])
