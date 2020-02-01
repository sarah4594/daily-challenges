import { queueTime } from '.'

describe('queueTime', () => {
  it('should return the total time required for all customers to check out', () => {
    expect(queueTime([5, 3, 4], 1)).toBe(12)
    expect(queueTime([10, 2, 3, 3], 2)).toBe(10)
    expect(queueTime([2, 3, 10], 2)).toBe(12)
  })
})
