import { significant } from '.'

describe('significant', () => {
  it('should return number of significant integers', () => {
    expect(significant('1')).toBe(1)
    expect(significant('003')).toBe(1)
    expect(significant('404')).toBe(3)
    expect(significant('050030210')).toBe(7)
    expect(significant('0.1')).toBe(1)
    expect(significant('0.0')).toBe(1)
    expect(significant('1.230000')).toBe(7)
  })
})
