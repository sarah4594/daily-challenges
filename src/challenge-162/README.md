# Daily Challenge #162 - Taxi Dispatching

https://dev.to/thepracticaldev/daily-challenge-162-taxi-dispatching-24b6

## Setup

You work as a taxi dispatcher. People will contact you to order a taxi, informing you of their pickup and drop-off times. Taxis can only service one customer at a time. They can pick up a new customer 1 time unit after it has dropped off a previous customer. What is the minimum number of taxis you need to service all requests?

Constraints:
Let N be the number of customer requests:
N is an integer in the range [1, 100k]
All times will be integers in range [1, 10k]
Let PU be the time of pickup and DO be the time of drop-off
For each request: PU < DO
The input list is NOT sorted.

## Examples

```js
Two customers, overlapping schedule. Two taxis needed.
requests = [(1, 4), (2, 6)]
min_num_taxis(requests) # => 2

Two customers, no overlap in schedule. Only one taxi needed.
requests = [(1, 4), (5, 9)]
min_num_taxis(requests) # => 1
```

## Tests

```js
1: [(1,4)]
2: [(1,4), (5, 9)]
3: [(1,4), (2, 9), (3, 6), (5, 8)]
```
