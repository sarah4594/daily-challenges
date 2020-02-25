export const addLetters = (arr: string[]): string => {
  let total = 0
  arr.forEach(letter => {
    total += letter.charCodeAt(0) - 96
  })
  if (total === 0) return ''
  while (total > 26) {
    total -= 26
  }
  return String.fromCharCode(total + 96)
}
