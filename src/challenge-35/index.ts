export const findOutlier = (arr: number[]): number => {
  const even: number[] = []
  const odd: number[] = []
  arr.forEach(n => {
    if (n % 2 === 0) {
      even.push(n)
    } else odd.push(n)
  })
  if (even.length === 0 || odd.length === 0) return 0
  if (even.length === 1) return even[0]
  return odd[0]
}
