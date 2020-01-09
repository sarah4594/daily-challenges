export const strongestInterval = ([n, m]: number[]): number => {
  let maxStrength = 0
  let smallestValue = 0
  for (let i = n; i <= m; i++) {
    const strength = getStrength(i)
    if (strength > maxStrength) {
      maxStrength = strength
      smallestValue = i
    }
  }
  return smallestValue
}

export const getStrength = (n: number): number => {
  let strength = 0
  for (; n > 0; n /= 2, strength++) {
    if ((n & 1) === 1) {
      break
    }
  }
  return strength
}
