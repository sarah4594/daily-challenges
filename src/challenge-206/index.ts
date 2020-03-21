export const cleanString = (s: string): string => {
  const c = s.split('')
  const result = []
  let index = 0
  for (let i = 0; i < c.length; i++) {
    if (c[i] === '#') {
      index--
      if (index < 0) index = 0
      continue
    }
    if (index >= 0) {
      result[index] = c[i]
      index++
    }
  }
  return result.join('').substring(0, index)
}
