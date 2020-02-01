export const superSize = (n: number): number => {
  const s = n
    .toString()
    .split('')
    // sort in descending order
    .sort((a: string, b: string) => (b < a ? -1 : 1))
    .join('')
  return parseInt(s)
}
