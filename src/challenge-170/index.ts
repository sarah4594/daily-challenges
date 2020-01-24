export const pokemonDamage = (
  yourType: string,
  opponentType: string,
  yourAttack: number,
  opponentDefense: number,
): number => {
  const totalDamage =
    (yourAttack - opponentDefense) *
    (yourAttack / opponentDefense) *
    howEffective(yourType, opponentType)
  return totalDamage
}

const howEffective = (yourType: string, opponentType: string): number => {
  let effectiveness = 0
  if (yourType === 'fire') {
    switch (opponentType) {
      case 'fire':
        effectiveness = 0.5
        break
      case 'grass':
        effectiveness = 2
        break
      case 'water':
        effectiveness = 0.5
        break
      case 'electric':
        effectiveness = 1
        break
    }
  } else if (yourType === 'water') {
    switch (opponentType) {
      case 'fire':
        effectiveness = 2
        break
      case 'grass':
        effectiveness = 0.5
        break
      case 'water':
        effectiveness = 0.5
        break
      case 'electric':
        effectiveness = 0.5
        break
    }
  } else if (yourType === 'grass') {
    switch (opponentType) {
      case 'fire':
        effectiveness = 0.5
        break
      case 'grass':
        effectiveness = 0.5
        break
      case 'water':
        effectiveness = 2
        break
      case 'electric':
        effectiveness = 1
        break
    }
  } else if (yourType === 'electric') {
    switch (opponentType) {
      case 'fire':
        effectiveness = 1
        break
      case 'grass':
        effectiveness = 1
        break
      case 'water':
        effectiveness = 2
        break
      case 'electric':
        effectiveness = 0.5
        break
    }
  }
  return effectiveness
}
