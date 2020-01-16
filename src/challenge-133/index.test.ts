import { fit_in } from '.'

describe('fit_in', () => {
  it('should return if the squares will fit in the siutcase', () => {
    expect(fit_in(1, 2, 3, 2)).toBe(true)
    expect(fit_in(1, 2, 2, 1)).toBe(false)
    expect(fit_in(3, 2, 3, 2)).toBe(false)
    expect(fit_in(1, 2, 1, 2)).toBe(false)
  })
})
