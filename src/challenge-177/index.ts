export const superSize = (n: number): number => {
  const s = n
    .toString()
    .split('')
    .sort((a: any, b: any) => b - a)
    .join('')
  return parseInt(s)
}
