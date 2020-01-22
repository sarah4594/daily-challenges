/*

a + b = sum
a % gcd and b % gcd = 0
a + b % gcd = 0

so if % != 0, no solution exists

*/

export const solve = (sum: number, gcd: number) => {
  for (let a = 2; a <= sum - 2; a++) {
    for (let b = 2; b <= sum - 2; b++) {
      if (a + b === sum) {
        if (a % gcd === 0 && b % gcd === 0) {
          return [a, b]
        } else continue
      } else continue
    }
  }
  return -1
}
