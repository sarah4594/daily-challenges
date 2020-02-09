import { autoMorphic } from '.'

describe('autoMorphic', () => {
  it('should square a number and return true if it ends in the same digit', () => {
    expect(autoMorphic(13)).toBe(false)
    expect(autoMorphic(25)).toBe(true)
    expect(autoMorphic(6)).toBe(true)
    expect(autoMorphic(625)).toBe(true)
    expect(autoMorphic(225)).toBe(false)
  })
})
