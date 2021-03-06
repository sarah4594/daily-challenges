import { solve } from '.'

describe('solve', () => {
  it('should Given a lowercase string and will return the highest value of consonant substrings', () => {
    expect(solve('zodiacs')).toBe(26)
    expect(solve('strength')).toBe(57)
    expect(solve('chruschtschov')).toBe(80)
    expect(solve('khrushchev')).toBe(38)
    expect(solve('catchphrase')).toBe(73)
    expect(solve('twelfthstreet')).toBe(103)
    expect(solve('mischtschenkoana')).toBe(80)
  })
})
