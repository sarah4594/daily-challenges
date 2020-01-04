import { sheLovesMe } from '.'

describe('sheLovesMe', () => {
  it('should return a phrase based on the number of petals pulled', () => {
    expect(sheLovesMe(5)).toBe('She loves me...not at all')
    expect(sheLovesMe(1)).toBe('She loves me...a lot')
    expect(sheLovesMe(8)).toBe('She loves me...passionately')
  })
})
