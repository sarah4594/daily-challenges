import { findOutlier } from '.'

describe('findOutlier', () => {
  it('should take an array of integers and find the one not like the others', () => {
    expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11)
    expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160)
    expect(findOutlier([4, 8, 15, 16, 24, 42])).toBe(15)
    expect(findOutlier([16, 6, 40, 66, 68, 28])).toBe(0)
  })
})
