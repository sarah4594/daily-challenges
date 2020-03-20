export const wave = (s: string): string[] => {
  const arr: string[] = []
  for (let i = 0; i < s.length; i++) {
    arr.push(`${s.slice(0, i)}${s[i].toUpperCase()}${s.slice(i + 1, s.length)}`)
  }
  return arr
}
