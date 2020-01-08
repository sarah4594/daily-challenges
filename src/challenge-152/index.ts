export const strongestInterval = ([n, m]: number[]): number => {
  let count = 0
  for (let i = n; i > 0; i--) {
    const nStrength = i / 2
    if ((nStrength & 1) === 1) {
      continue
    } else count++
  }
  for (let i = m; i > 0; i--) {
    const mStrength = i / 2
    if ((mStrength & 1) === 1) {
      continue
    } else count++
  }
  return count
}
