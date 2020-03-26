export const alphabetPosition = (s: string): string => {
  const arr: string[] | number[] = s.toLowerCase().split('')
  return arr
    .filter(c => c.charCodeAt(0) - 96 >= 1 && c.charCodeAt(0) - 96 <= 26)
    .map(c => c.charCodeAt(0) - 96)
    .join(' ')
}
