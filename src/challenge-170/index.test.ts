import { pokemonDamage } from '.'

describe('pokemonDamage', () => {
  it('should return result of attack', () => {
    expect(pokemonDamage('grass', 'electric', 57, 19)).toBe(114)
    expect(pokemonDamage('grass', 'water', 40, 40)).toBe(0)
    expect(pokemonDamage('grass', 'fire', 35, 5)).toBe(105)
    expect(pokemonDamage('fire', 'electric', 10, 2)).toBe(40)
  })
})
