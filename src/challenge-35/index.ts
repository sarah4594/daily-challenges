export const findOutlier = (arr: number[]): number | undefined => {
  // const even: number[] = []
  // const odd: number[] = []
  // arr.forEach(n => {
  //   if (n % 2 === 0) {
  //     even.push(n)
  //   } else odd.push(n)
  // })
  // if (even.length === 0 || odd.length === 0) return 0
  // if (even.length === 1) return even[0]
  // return odd[0]

  let lastEven = 0
  let lastOdd = 0
  let evenCount = 0
  let oddCount = 0
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n % 2 === 0) {
      lastEven = n
      evenCount++
    } else {
      lastOdd = n
      oddCount++
    }
    if (evenCount > 1 && oddCount === 1) return lastOdd
    if (oddCount > 1 && evenCount === 1) return lastEven
  }
  return undefined
}
