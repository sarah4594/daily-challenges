export const nbYear = (
  p0: number,
  percent: number,
  aug: number,
  p: number,
): number => {
  percent = percent / 100
  let years = 0
  while (p0 < p) {
    p0 = p0 + p0 * percent + aug
    years++
  }
  return years
}
