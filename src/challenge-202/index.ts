export const pattern = (n: number): string => {
  if (n < 1) return ''
  const pattern = []
  for (let i = 1; i <= n; i++) {
    let s = ''
    for (let j = n; j >= i; j--) {
      s += j
    }
    console.log(s)
    pattern.push(s)
  }
  return pattern.join('\n')
}
