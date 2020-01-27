import { orderingBeers } from '.'

describe('orderingBeers', () => {
  it('should return the transaltion for ordering x number of beers', () => {
    expect(orderingBeers(1)).toBe('Jedno piwo poprosze!')
    expect(orderingBeers(3)).toBe('Trzy piwa poprosze!')
    expect(orderingBeers(13)).toBe('Trzydziesci piw poprosze!')
    expect(orderingBeers(21)).toBe('Dwadziescia jeden piw poprosze!')
    expect(orderingBeers(30)).toBe('Trzydziesci piw poprosze!')
    expect(orderingBeers(34)).toBe('Trzydziesci cztery piwa poprosze!')
  })
})
