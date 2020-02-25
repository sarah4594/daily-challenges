import { addLetters } from '.'

describe('addLetters', () => {
  it('should take in an array of letteres and return the letter in the position they add to', () => {
    expect(addLetters(['a', 'b', 'c'])).toBe('f')
    expect(addLetters(['a', 'b'])).toBe('c')
    expect(addLetters(['z'])).toBe('z')
    expect(addLetters(['c'])).toBe('c')
    expect(addLetters(['z', 'a'])).toBe('a')
    expect(addLetters(['y', 'c', 'b'])).toBe('d')
    expect(addLetters([])).toBe('')
  })
})
