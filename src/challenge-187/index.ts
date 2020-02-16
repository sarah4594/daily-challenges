export const mostSales = (
  products: string[],
  amounts: number[],
  prices: number[],
) => {
  let currentHighest = 0
  let highestSales: string[] = []
  for (let i = 0; i < amounts.length; i++) {
    const total = amounts[i] * prices[i]
    if (total === 0) continue
    if (total > currentHighest) {
      // Reset highest sales with current product
      highestSales = [products[i]]
      currentHighest = total
    } else if (total === currentHighest) {
      highestSales.push(products[i])
    }
  }
  return highestSales
}
