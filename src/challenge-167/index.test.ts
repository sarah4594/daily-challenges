import { sortedBlocks } from '.'

describe('sortedBlocks', () => {
  it('should return blocks of string sorted', () => {
    expect(sortedBlocks('21AxBz')).toBe('xzAB12')
    expect(sortedBlocks('abacad')).toBe('abcd-a-a')
    expect(sortedBlocks('')).toBe('')
  })
})
