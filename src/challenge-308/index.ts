export const waveOrder = (arr: number[]): number[] => {
  arr = arr.sort((a, b) => b - a)
  const middle = Math.ceil(arr.length/2)
  console.log(middle)
  const arr1 = arr.slice(0, middle)
  const arr2 = arr.slice(middle, arr.length)

  const result = []
  for (let i = 0; i < arr2.length; i++){
    result.push(arr1[i])
    result.push(arr2[i])
  }
  if (arr1.length > arr2.length) {
    result.push(arr1[arr1.length - 1])
  }

  console.log(arr)
  console.log(arr1)
  console.log(arr2)
  console.log(result)
  return result
}


  export const isWaveSorted = (result: number[]): boolean => {
    let order = false
    for (let i = 0; i < result.length - 1; i++) {
      if (i % 2 === 0 || i === 0) {
        order = result[i] > result[i + 1]
        console.log(order)
      }
      if (i % 2 !== 0 && i !== 0) {
        order = result[i] < result[i + 1]
        console.log(order)
      }
    }
    return order
  }


/*

for odd numbers
  if arr[i] > arr[i+1] -> keep going
  if not, go through arr until arr[i+?] > arr[i+1]

for even numbers
  if arr[i] < arr[i+1] -> keep going
  if not, go through arr until arr[i+?] > arr[i+1]

if there is nothing makes it true -> go back to last iteration and find next number to make it true



**another way to do it**


** Even length 

sort highest to lowest
[10, 9, 8, 7, 6] [5, 4, 3, 2, 1]

10, 5, 9, 4, 8, 3, 7, 2, 6, 1

** Odd length

[9, 8, 7, 6, 5] [4, 3, 2, 1]

[9, 4, 8, 4, 7, 3, 6, 2, 5]

*/
