export const queueTime = (customers: number[], openLines: number): number => {
  const tills: number[] = new Array(openLines).fill(0)
  for (let customer = 0; customer < customers.length; customer++) {
    console.log(tills)
    const waitTime = customers[customer]
    const shortestTime = Math.min(...tills)
    const shortestIndex = tills.indexOf(shortestTime)
    tills[shortestIndex] += waitTime
  }
  console.log(tills)
  return Math.max(...tills)
}
