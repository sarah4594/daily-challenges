import { frogJump } from '.'

describe('frogJump', () => {
  it('should take in a number and return amount of jumps it takes to get to number', () => {
    expect(frogJump(2)).toBe(3)
    expect(frogJump(6)).toBe(3)
    expect(frogJump(1)).toBe(1)
    expect(frogJump(10)).toBe(4)
    expect(frogJump(25)).toBe(14)
    expect(frogJump(100)).toBe(31)
    expect(frogJump(1000)).toBe(64)
    expect(frogJump(11)).toBe(6)
  })
})
