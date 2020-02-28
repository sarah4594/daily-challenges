import { noZeroes } from '.'

describe('noZeroes', () => {
  it('should take a number and remove all trailing zeroes (except 0)', () => {
    expect(noZeroes(1450)).toBe(145)
    expect(noZeroes(960000)).toBe(96)
    expect(noZeroes(1050)).toBe(105)
    expect(noZeroes(-1050)).toBe(-105)
    expect(noZeroes(9070)).toBe(907)
    expect(noZeroes(210000)).toBe(21)
    expect(noZeroes(10210)).toBe(1021)
    expect(noZeroes(0)).toBe(0)
  })
})
