const reverse = (s: string): string =>
  s
    .split('')
    .reverse()
    // need to flip the parens when reversing string
    .map(ch => (ch === '(' ? ')' : ch === ')' ? '(' : ch))
    .join('')

export const reverseInParens = (s: string): string => {
  let parenCount = 0
  let result = ''
  let startParen = -1
  let endParen = -1
  for (let i = 0; i < s.length; i++) {
    const ch = s[i]
    if (ch === '(') {
      if (parenCount === 0) {
        startParen = i
      }
      parenCount++
    } else if (ch === ')') {
      parenCount--
      if (parenCount === 0) {
        // reverse string
        endParen = i
        const parenText = s.substring(startParen + 1, endParen)
        const reverseText = reverse(parenText)
        result += `(${reverseInParens(reverseText)})`
      }
    } else {
      if (parenCount === 0) {
        result += ch
      }
    }
  }
  return result
}
/*
a   (d e) c b

      d e   => e d

    (e d) c b => b c (d e)

a (b c (d e))

*/
