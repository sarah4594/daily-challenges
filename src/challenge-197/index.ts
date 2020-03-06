export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number,
): number => {
  let count = 0
  while (p0 < p) {
    p0 = p0 + p0 * (percent / 100) + aug
    count++
  }
  return count
}
