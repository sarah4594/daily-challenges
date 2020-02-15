export const mostSales = (
  products: string[],
  amounts: number[],
  prices: number[],
) => {
  const total = [0]
  let highestSales: any = []
  for (let i = 0; i < amounts.length; i++) {
    total[i] = amounts[i] * prices[i]
    if (total[i] > total[0]) {
      highestSales = [products[i]]
      total[0] = total[i]
    } else if (total[i] === total[0]) {
      highestSales.push(products[i])
    }
  }
  if (total[0] === 0) {
    return 'There were no sales'
  }
  return highestSales
}
