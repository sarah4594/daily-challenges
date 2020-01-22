import { solve } from '.'

describe('solve', () => {
  it('should take 2 numbers and return 2 more numbers that add up to the first and have a GCD of the second', () => {
    expect(solve(12, 4)).toEqual([4, 8])
    expect(solve(12, 5)).toEqual(-1)
    expect(solve(10, 2)).toEqual([2, 8])
  })
})
