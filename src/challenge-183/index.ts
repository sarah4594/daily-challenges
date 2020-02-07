export const autoMorphic = (n: number): string => {
  const square = Math.pow(n, 2)
  // Turns square into string
  const ss = square.toString()
  // Turns n into string
  const sn = n.toString()
  // finds last digit that matches n (1 if 1 digit, 2 if 2 digits...)
  const suffix = ss.substr(ss.length - sn.length)
  if (suffix === sn) return 'true'
  return 'false'
}
