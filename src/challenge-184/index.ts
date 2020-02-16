export const minValue = (arr: number[]): number => {
  arr = Array.from(new Set(arr)).sort((a, b) => a - b)
  return parseInt(arr.join(''), 10)
}
