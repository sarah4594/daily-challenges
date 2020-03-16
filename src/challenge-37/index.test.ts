import { nameShuffler } from '.'

describe('nameshuffler', () => {
  it('should take a full name and return with the names swapped', () => {
    expect(nameShuffler('Emma McClane')).toBe('McClane Emma')
    expect(nameShuffler('Sarah Carter')).toBe('Carter Sarah')
    expect(nameShuffler('Logan Johnson')).toBe('Johnson Logan')
  })
})
