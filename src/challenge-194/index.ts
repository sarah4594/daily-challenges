export const spreadNumber = (n: number): number[] =>
  new Array<number>(n).fill(0).map((_, index) => index + 1)
// for (let i = 1; i <= n; i++) {
//   arr.push(i)
// }
//return arr
