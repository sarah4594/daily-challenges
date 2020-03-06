import { toWeirdCase } from '.'

describe('toWeirdCase', () => {
  it('should take a string and capitalize all even indecies', () => {
    expect(toWeirdCase('String')).toBe('StRiNg')
    expect(toWeirdCase('Weird string case')).toBe('WeIrD StRiNg cAsE')
    expect(toWeirdCase('snickersarah')).toBe('SnIcKeRsArAh')
    expect(toWeirdCase('snicker sarah')).toBe('SnIcKeR SaRaH')
  })
})
