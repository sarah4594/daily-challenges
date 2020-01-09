import { strongestInterval, getStrength } from '.'

describe('getStrength', () => {
  it('should the strength of number', () => {
    expect(getStrength(1)).toBe(0)
    expect(getStrength(3)).toBe(0)
    expect(getStrength(99)).toBe(0)
    expect(getStrength(2)).toBe(1)
    expect(getStrength(4)).toBe(2)
    expect(getStrength(6)).toBe(1)
    expect(getStrength(12)).toBe(2)
  })
})

describe('strongestInterval', () => {
  it('should give the number of times 2 integers can be divided by 2', () => {
    expect(strongestInterval([1, 2])).toBe(2)
    expect(strongestInterval([5, 10])).toBe(8)
    expect(strongestInterval([48, 56])).toBe(48)
    expect(strongestInterval([129, 193])).toBe(192)
  })
})
