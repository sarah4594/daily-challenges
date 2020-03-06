import { nbYear } from '../challenge-120'

describe('nbYear', () => {
  it('should take in population info and return the amount of time it will take to reach target pop', () => {
    expect(nbYear(1000, 2, 50, 1200)).toBe(3)
    expect(nbYear(1500, 5, 100, 5000)).toBe(15)
    expect(nbYear(1500000, 2.5, 10000, 2000000)).toBe(10)
    expect(nbYear(1500000, 0.25, 1000, 2000000)).toBe(94)
  })
})
