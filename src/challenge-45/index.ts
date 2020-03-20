export const change = (n: number): object => {
  const register = {
    '25': 0,
    '10': 0,
    '5': 0,
    '1': 0,
  }

  register[25] = Math.floor(n / 25)
  const a = n % 25
  register[10] = Math.floor(a / 10)
  const b = a % 10
  register[5] = Math.floor(b / 5)
  register[1] = b % 5

  return register
}
