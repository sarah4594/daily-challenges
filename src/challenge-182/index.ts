export const grabScab = (s: string, arr: string[]): string[] => {
  const word = s
    .split('')
    .sort()
    .join('')
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i]
        .split('')
        .sort()
        .join('') === word
    ) {
      result.push(arr[i])
    }
  }
  return result
}
