import { cleanString } from '.'

describe('cleanString', () => {
  it('should take a string and follow rules', () => {
    expect(cleanString('a#bc#d')).toBe('bd')
    expect(cleanString('abc#def##ghi###')).toBe('abd')
    expect(cleanString('abc###')).toBe('')
    expect(cleanString('abc####a')).toBe('a')
  })
})
