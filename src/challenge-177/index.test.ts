import { superSize } from '.'

describe('superSize', () => {
  it('should rearrange an interger into its largest possible value', () => {
    expect(superSize(123456)).toBe(654321)
    expect(superSize(513)).toBe(531)
    expect(superSize(105)).toBe(510)
    expect(superSize(2020)).toBe(2200)
    expect(superSize(4194)).toBe(9441)
    expect(superSize(608719)).toBe(987610)
    expect(superSize(123456789)).toBe(987654321)
    expect(superSize(700000000001)).toBe(710000000000)
    expect(superSize(666666)).toBe(666666)
  })
})
