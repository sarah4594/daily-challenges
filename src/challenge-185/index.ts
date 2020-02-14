export const inputArray = (arr: number[]): number => {
  return arr.slice(0, arr.indexOf(0)).reduce((x, y) => x + y)
}
