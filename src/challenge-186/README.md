# Daily Challenge #186 - Jumping Frog

https://dev.to/thepracticaldev/daily-challenge-186-jumping-frog-2fdg

## Setup

There is a lonely frog that lives in a pond. Lily-pads are laid out on a coordinate axis atop the pond. The frog can only jump one unit more than the length of the last jump.

With a starting point of 0, reach the target point of n using the frog's jumping ability. You can choose to jump forward to backward. Reach the target with the minimal amount of steps.

## Examples

```js
For n = 2, the output should be 3.

step 1:  0 ->  1  (Jump forward, distance 1)
step 2:  1 -> -1  (Jump backward, distance 2)
step 3: -1 ->  2  (Jump forward, distance 3)
For n = 6, the output should be 3.

step 1: 0 -> 1  (Jump forward, distance 1)
step 2: 1 -> 3  (Jump forward, distance 2)
step 3: 3 -> 6  (Jump forward, distance 3)
```

## Tests

```js
n = 1
n = 10
n = 25
n = 100
n = 1000
```

nextX = x + jump

nextX > n

nextX = x - jump

jump++
