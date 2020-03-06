export const addLetters = (arr: string[]): string => {
  let total = 0
  arr.forEach(letter => {
    total += letter.charCodeAt(0) - 96
  })
  if (total === 0) return ''
  total = ((total - 1) % 26) + 1
  return String.fromCharCode(total + 96)
}
