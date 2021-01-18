import { adjacentProduct } from '.'

describe('adjacentProduct', () => {
  it('should take an array of numbers and find the largest product of adjacent numbers', () => {
    expect(adjacentProduct([1, 2, 3])).toBe(6)
    expect(adjacentProduct([3, 4, 5])).toBe(20)
    expect(adjacentProduct([3, 7, 9])).toBe(63)
    expect(adjacentProduct([-3, -4, 15])).toBe(12)
    expect(adjacentProduct([-4, -1, -10])).toBe(10)
  })
  })