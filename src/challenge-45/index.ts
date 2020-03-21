export const change = (n: number): object => {
  const register: any = {}
  const coins = ['25', '10', '5', '1']
  let remaining = n
  coins.forEach(key => {
    const coin = Number(key)
    register[key] = Math.floor(remaining / coin)
    remaining %= coin
  })
  return register
}
