export const spreadNumber = (n: number): number[] => {
  const arr: number[] = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)
  }
  return arr
}
