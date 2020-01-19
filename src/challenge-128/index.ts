export const blackjack = (cards: string[]) => {
  let total = 0
  const aces: string[] = []
  cards.forEach(card => {
    if (card === 'A') aces.push(card)
    total += whatCard(card)
  })
  while (total > 21 && aces.length !== 0) {
    total -= 10
    aces.shift()
  }
  if (total > 21) return 'busted'
  return total
}

const whatCard = (card: string): number => {
  let value = 0
  const cardValue = parseInt(card, 10)
  if (!cardValue) {
    if (card !== 'A') {
      value = 10
    } else if (card === 'A') {
      value = 11
    }
  } else {
    value = cardValue
  }
  return value
}
