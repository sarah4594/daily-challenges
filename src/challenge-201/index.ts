export const pattern = (n: number): string => {
  if (n < 1) return ''
  let str = '1'
  for (let i = 2; i <= n; i++) {
    const num = i.toString().repeat(i)
    str = str.concat('\n', num)
  }
  return str
}
