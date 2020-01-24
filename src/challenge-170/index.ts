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
  const map: any = {
    fire: {
      grass: 2,
      water: 0.5,
      electric: 1,
    },
    water: {
      fire: 2,
      grass: 0.5,
      electric: 0.5,
    },
    grass: {
      fire: 0.5,
      water: 2,
      electric: 1,
    },
    electric: {
      fire: 1,
      grass: 1,
      water: 2,
    },
  }

  return yourType === opponentType ? 0.5 : map[yourType][opponentType]
}
