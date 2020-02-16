export const frogJump = (n: number): number => {
  let x = 0
  let distance = 1
  let jumps = 0
  while (x < n || jumps > 1000) {
    let nextX = x + distance
    if (nextX > n) {
      nextX = x - distance
    }
    x = nextX
    jumps++
    distance++
  }
  return jumps
}
