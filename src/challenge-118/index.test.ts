import { decode, encode } from '.'

describe('decode', () => {
  it('should take the coded message and decode it', () => {
    expect(decode('6015ekx')).toBe('mer')
    expect(decode('5057aan')).toBe('Impossible to decode')
    expect(decode('6015gaxal')).toBe('sarah')
  })
})

describe('encode', () => {
  it('should take the message and encode it', () => {
    expect(encode('mer', 6015)).toBe('6015ekx')
    expect(encode('sarah', 6015)).toBe('6015gaxal')
  })
})
