import { pattern } from '.'

describe('pattern', () => {
  it('should return a pattern for up to n number of rows', () => {
    expect(pattern(4)).toBe('4321\n432\n43\n4')
  })
})
