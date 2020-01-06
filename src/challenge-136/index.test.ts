import { deafRats } from '.'

describe('deafRats', () => {
  it('should give the number of deaf rats', () => {
    expect(deafRats('~O~O~O~O P')).toBe(0)
    expect(deafRats('P O~ O~ ~O O~')).toBe(1)
    expect(deafRats('~O~O~O~OP~O~OO~')).toBe(2)
  })
})
