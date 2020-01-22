# Daily Challenge #166 - Cat and Mouse

https://dev.to/thepracticaldev/daily-challenge-166-cat-and-mouse-jk4

## Setup

You will be given a string (x) featuring a cat 'C', a dog 'D' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from its current position. The cat can jump (j) characters.

Also, the cat cannot jump over the dog.

## Examples

<!-- ```js -->

if j = 5:

..C.....m. returns 'Caught!' <-- not more than j characters between

.....C............m...... returns 'Escaped!' <-- as there are more than j characters between the two, the cat can't jump far enough

if j = 10:

...m.........C...D returns 'Caught!' <--Cat can jump far enough and jump is not over dog

...m....D....C....... returns 'Protected!' <-- Cat can jump far enough, but dog is in the way, protecting the mouse

<!-- ``` -->
