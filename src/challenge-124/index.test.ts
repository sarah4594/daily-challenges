import { middleMe } from '.'

describe('middleMe', () => {
  it('should put X in the middle of Y that is repeated N times', () => {
    expect(middleMe('A', '*', 9)).toBe('A')
    expect(middleMe('A', '*', 10)).toBe('*****A*****')
    expect(middleMe('A', '*', 14)).toBe('*******A*******')
  })
})
