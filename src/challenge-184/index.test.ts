import { minValue } from '.'

describe('minValue', () => {
  it('should return the min number made from combination of numbers in an array', () => {
    expect(minValue([1, 3, 1])).toBe(13)
    expect(minValue([5, 7, 5, 9, 7])).toBe(579)
    expect(minValue([1, 2, 3, 4])).toBe(1234)
    expect(minValue([1, 1, 7, 0])).toBe(17)
    expect(minValue([9, 2, 1, 4, 3, 9, 5])).toBe(123459)
  })
})
