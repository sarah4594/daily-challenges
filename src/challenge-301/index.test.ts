import { solve } from '.'

describe('solve', () => {
  it('should take an array of arrays and figure out how many unique arrays can be made with the elements', () => {
    expect(solve([[1,2],[4],[5,6]])).toBe(4)
    expect(solve([[1,2],[4,4],[5,6,6]])).toBe(4)
    expect(solve([[1,2],[4,4],[5,6,6]])).toBe(4)
    expect(solve([[1,2],[3,4],[5,6]])).toBe(8)
    expect(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])).toBe(72)
  })
  })