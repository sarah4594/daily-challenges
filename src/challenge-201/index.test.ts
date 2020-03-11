import { pattern } from '.'

describe('pattern', () => {
  it('should take a number and return pattern of numbers', () => {
    expect(pattern(5)).toBe('1\n22\n333\n4444\n55555')
    expect(pattern(11)).toBe(
      '1\n22\n333\n4444\n55555\n666666\n7777777\n88888888\n999999999\n10101010101010101010\n1111111111111111111111',
    )
    expect(pattern(4)).toBe('1\n22\n333\n4444')
    expect(pattern(8)).toBe(
      '1\n22\n333\n4444\n55555\n666666\n7777777\n88888888',
    )
    expect(pattern(0.5)).toBe('')
    expect(pattern(1)).toBe('1')
    expect(pattern(-1)).toBe('')
  })
})
