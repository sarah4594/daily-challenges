import { spreadNumber } from '.'

describe('spreadNumbers', () => {
  it('should take a number and spread it in an array', () => {
    expect(spreadNumber(1)).toEqual([1])
    expect(spreadNumber(2)).toEqual([1, 2])
    expect(spreadNumber(5)).toEqual([1, 2, 3, 4, 5])
    expect(spreadNumber(3)).toEqual([1, 2, 3])
    expect(spreadNumber(6)).toEqual([1, 2, 3, 4, 5, 6])
    expect(spreadNumber(9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
