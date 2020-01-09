import { enoughChange } from '.'

describe('enoughChange', () => {
  it.only('should determine if you have enough change', () => {
    expect(enoughChange([25, 25, 50])).toBe('YES')
    expect(enoughChange([25, 100])).toBe('NO')
    expect(enoughChange([25, 25, 50, 50, 100])).toBe('NO')
    expect(enoughChange([25, 25, 50, 50])).toBe('YES')
    expect(enoughChange([25, 50, 25, 100])).toBe('YES')
  })
})
