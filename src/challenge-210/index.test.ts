import { capitalize } from '.'

describe('capitalize', () => {
  it('should take a string and capitalize even and odd indexes separately', () => {
    expect(capitalize('abcdef')).toEqual(['AbCdEf', 'aBcDeF'])
    expect(capitalize('dev')).toEqual(['DeV', 'dEv'])
    expect(capitalize('dev')).toEqual(['DeV', 'dEv'])
    expect(capitalize('method')).toEqual(['MeThOd', 'mEtHoD'])
    expect(capitalize('hello')).toEqual(['HeLlO', 'hElLo'])
    expect(capitalize('heLLo')).toEqual(['HeLlO', 'hElLo'])
    expect(capitalize('HELLO')).toEqual(['HeLlO', 'hElLo'])
  })
})
