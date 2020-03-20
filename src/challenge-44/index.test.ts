import { wave } from '.'

describe('wave', () => {
  it('should take a string and return a wave', () => {
    expect(wave('hello')).toEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'])
    expect(wave('sarah')).toEqual(['Sarah', 'sArah', 'saRah', 'sarAh', 'saraH'])
  })
})
