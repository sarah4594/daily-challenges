import { nbYear } from '.'

describe('nbYear', () => {
  it('should take pop info and return the amount of years to get to target pop', () => {
    expect(nbYear(1000, 2, 50, 1200)).toBe(3)
    expect(nbYear(1500, 5, 100, 5000)).toBe(15)
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10)
  })
})
