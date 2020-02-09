export const decode = (s: string): string => {
  const match = s.match(/^\d+/)
  if (!match) return 'Impossible to decode'
  // match[0] === '6015'
  const num = parseInt(match[0])
  const alpha = s.substring(4)
  const inverse = modInverse(num, 26)
  if (inverse === 1) return 'Impossible to decode'

  const map = (c: string) => c.charCodeAt(0) - 97
  const unmap = (n: number) => String.fromCharCode(n + 97)
  const f = (x: number) => (inverse * x) % 26
  let result = ''
  for (let i = 0; i < alpha.length; i++) {
    const x = map(alpha[i])
    const y = unmap(f(x))
    result += y
  }
  return result
}

const modInverse = (a: number, b: number): number => {
  a %= b
  for (let i = 1; i < b; i++) {
    if ((a * i) % b == 1) {
      return i
    }
  }
  return 1
}

export const encode = (s: string, num: number): string => {
  const map = (c: string) => c.charCodeAt(0) - 97
  const unmap = (n: number) => String.fromCharCode(n + 97)
  const f = (n: number) => (num * n) % 26
  let result = ''
  for (let i = 0; i < s.length; i++) {
    const x = map(s[i])
    const y = unmap(f(x))
    result += y
  }
  return num.toString() + result
}
