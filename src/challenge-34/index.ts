export const toWeirdCase = (s: string): string => {
  const arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join('')
}
