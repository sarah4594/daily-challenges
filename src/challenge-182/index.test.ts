import { grabScab } from '.'

describe('grabScrab', () => {
  it('should take a string of jumbled letters and return the words it matches', () => {
    expect(grabScab('ortsp', ['sport', 'parrot', 'ports', 'matey'])).toEqual([
      'sport',
      'ports',
    ])
    expect(grabScab('trisf', ['first'])).toEqual(['first'])
  })
  expect(grabScab('oob', ['bob', 'baobab'])).toEqual([])
  expect(grabScab('ainstuomn', ['mountains', 'hills', 'mesa'])).toEqual([
    'mountains',
  ])
  expect(grabScab('oolp', ['donkey', 'pool', 'horse', 'loop'])).toEqual([
    'pool',
    'loop',
  ])
})
