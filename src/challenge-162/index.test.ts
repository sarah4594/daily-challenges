import { min_num_taxis } from '.'

describe('min_num_taxis', () => {
  it.only('should return the number of taxis needed per request', () => {
    expect(min_num_taxis([[1, 4]])).toBe(1)
    expect(
      min_num_taxis([
        [5, 9],
        [1, 4],
      ]),
    ).toBe(1)
    expect(
      min_num_taxis([
        [1, 4],
        [2, 9],
        [3, 6],
        [5, 8],
      ]),
    ).toBe(3)
  })
})
