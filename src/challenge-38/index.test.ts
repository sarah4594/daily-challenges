import { middleInitial } from '.'

describe('middleInitial', () => {
  it('should take a name and initialize middle name if one', () => {
    expect(middleInitial('Jack Ryan')).toBe('Jack Ryan')
    expect(middleInitial('Lois Mary Lane')).toBe('Lois M. Lane')
    expect(middleInitial('Dimitri')).toBe('Dimitri')
    expect(middleInitial('Alice Betty Catherine Davis')).toBe(
      'Alice B. C. Davis',
    )
    expect(middleInitial('Sarah Nicole Carter')).toBe('Sarah N. Carter')
  })
})
