import { blackjack } from '.'

describe('blackjack', () => {
  it('should return score closest to 21 or "busted"', () => {
    expect(blackjack(['A'])).toBe(11)
    expect(blackjack(['A', 'J'])).toBe(21)
    expect(blackjack(['A', 'J', 'A'])).toBe(12)
    expect(blackjack(['A', '10', 'A'])).toBe(12)
    expect(blackjack(['5', '3', '7'])).toBe(15)
    expect(blackjack(['5', '4', '3', '2', 'A', 'K'])).toBe('busted')
  })
})
