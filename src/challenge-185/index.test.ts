import { inputArray } from '.'

describe('inputArray', () => {
  it('should take an array and sum numbers until there is a 0', () => {
    expect(inputArray([5, 1, 2, 3, 0, 1, 5, 0, 2])).toBe(11)
    expect(inputArray([1, 4, 34, 124, 2, 0, 14, 51])).toBe(165)
    expect(inputArray([4, 2, 1, 6, 0])).toBe(13)
    expect(inputArray([4, 1, 2, 3, 0, 10, 2])).toBe(10)
  })
})
