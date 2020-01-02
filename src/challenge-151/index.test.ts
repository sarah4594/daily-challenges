import { reverseInParens } from '.'

describe('reverseInParens', () => {
  it('should reverse string inside parens', () => {
    expect(reverseInParens('h(el)lo')).toBe('h(le)lo')
    expect(reverseInParens('a ((d e) c b)')).toBe('a (b c (d e))')
  })
  it('should reverse test string inside parens', () => {
    expect(reverseInParens('one (ruof ((rht)ee) owt)')).toBe(
      'one (two ((thr)ee) four)',
    )
    expect(reverseInParens('one (two (three) four)')).toBe(
      'one (ruof (three) owt)',
    )
  })
})
