export const vowelRemover = (s: string): string => {
  const newString = s.replace(/[aeiou]/gi, '')
  return newString
}
