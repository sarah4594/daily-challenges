import { vowelRemover } from '.'

describe('vowelRemover', () => {
  it('should remove all vowels from a string', () => {
    expect(vowelRemover('This website is for losers LOL!')).toBe(
      'Ths wbst s fr lsrs LL!',
    )
    expect(vowelRemover('No newbies allowed, go to #beginners')).toBe(
      'N nwbs llwd, g t #bgnnrs',
    )
    expect(vowelRemover('LULZ TROLLED')).toBe('LLZ TRLLD')
  })
})
