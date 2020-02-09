export const autoMorphic = (n: number): boolean => {
  const square = Math.pow(n, 2)
  const digits = (Math.log(n) * Math.LOG10E + 1) | 0
  const suffix = square % Math.pow(10, digits)
  return suffix === n
}
