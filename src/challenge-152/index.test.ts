import { strongestInterval } from '.'

describe('strongestInterval', () => {
  it('should give the number of times 2 integers can be divided by 2', () => {
    expect(strongestInterval([1, 2])).toBe(2)
    expect(strongestInterval([5, 10])).toBe(8)
    expect(strongestInterval([48, 56])).toBe(52)
    expect(strongestInterval([129, 193])).toBe(162)
  })
})
