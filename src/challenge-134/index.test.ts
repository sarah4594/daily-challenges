import { squaresNeeded } from '.'

describe('squaresNeeded', () => {
  it('should reurn the number of squares needed', () => {
    expect(squaresNeeded(0)).toBe(0)
    expect(squaresNeeded(1)).toBe(1)
    expect(squaresNeeded(2)).toBe(2)
    expect(squaresNeeded(3)).toBe(2)
    expect(squaresNeeded(31)).toBe(5)
    expect(squaresNeeded(128)).toBe(8)
    expect(squaresNeeded(4000000)).toBe(22)
    expect(squaresNeeded(32768)).toBe(16)
  })
})
