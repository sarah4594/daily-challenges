export const minValue = (arr: number[]): number => {
  arr = Array.from(new Set(arr)).sort((a, b) => a - b)
  const newArr = parseInt(arr.join(''))
  return newArr
}
