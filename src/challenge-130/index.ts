/*

a + b = sum
a % gcd and b % gcd = 0
a + b % gcd = 0

so if % != 0, no solution exists

*/

export const solve = (sum: number, gcd: number) => {
  for (let a = gcd; a <= sum; a += gcd) {
    const b = sum - a
    if (b % gcd === 0) {
      return [a, b]
    }
  }
  return -1
}
