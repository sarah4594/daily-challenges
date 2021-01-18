export const adjacentProduct = (arr: number[]): number => {

  const products = []

  for (let i = 0; i < arr.length - 1; i++) {
    products.push(arr[i] * arr[i + 1])
    console.log(products)
  }

  return Math.max(...products)
}

/*

find all adjacent products and put them in an array

find max....Math.max? (how to use with arrays?) - use spread operator

*/