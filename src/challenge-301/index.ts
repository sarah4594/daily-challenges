export const solve = (arr: number[][]): number => {
  
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push([...new Set(arr[i])])
  }
  console.log(newArr)

  let product = 1
  for (let i = 0; i < newArr.length; i++) {
    product = product * newArr[i].length
  }

  // const product = (newArr[0].length) * (newArr[1].length) * (newArr[2].length)

  return product
}