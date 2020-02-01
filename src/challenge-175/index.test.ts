import { DNAStrands } from '.'

describe('DNAStrands', () => {
  it('should return string with the complimentary DNA', () => {
    expect(DNAStrands('ATTGC')).toBe('TAACG')
    expect(DNAStrands('GTTAAC')).toBe('CAATTG')
    expect(DNAStrands('AAAA')).toBe('TTTT')
    expect(DNAStrands('CTACC')).toBe('GATGG')
    expect(DNAStrands('GTAT')).toBe('CATA')
  })
})
