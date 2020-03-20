import { change } from '.'

describe('change', () => {
  it('should a number and give change in coins', () => {
    expect(change(31)).toEqual({ 25: 1, 10: 0, 5: 1, 1: 1 })
    expect(change(25)).toEqual({ 25: 1, 10: 0, 5: 0, 1: 0 })
    expect(change(100)).toEqual({ 25: 4, 10: 0, 5: 0, 1: 0 })
    expect(change(35)).toEqual({ 25: 1, 10: 1, 5: 0, 1: 0 })
  })
})
