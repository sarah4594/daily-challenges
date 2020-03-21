import { wave } from '.'

describe('wave', () => {
  it('should take a string and return a wave', () => {
    expect(wave('hello')).toEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'])
    expect(wave('sarah')).toEqual(['Sarah', 'sArah', 'saRah', 'sarAh', 'saraH'])
    expect(wave('hello sarah')).toEqual([
      'Hello sarah',
      'hEllo sarah',
      'heLlo sarah',
      'helLo sarah',
      'hellO sarah',
      'hello Sarah',
      'hello sArah',
      'hello saRah',
      'hello sarAh',
      'hello saraH',
    ])
  })
})
