/*

0 - 9 single digits
11 - 19 teens
% 10 === 0 tens
bigger numbers = tens + single digits

1 - piwo
> 1 piw
ends in 2, 3, 4 (expect 12, 13, 14) piwa

*/

export const orderingBeers = (beers: number): string => {
  let beer = 'unknown'
  if (beers === 1) {
    beer = 'piwo'
  } else if (beers > 1) {
    beer = 'piw'
    const lastDigit = beers % 10
    if (lastDigit >= 2 && lastDigit <= 4 && (beers < 12 || beers > 14)) {
      beer = 'piwa'
    }
  }

  return `${capitalize(translateNumber(beers))} ${beer} poprosze!`
}

const translateNumber = (num: number): string => {
  const map: any = {
    units: {
      0: 'zero',
      1: 'jeden',
      2: 'dwa',
      3: 'trzy',
      4: 'cztery',
      5: 'piec',
      6: 'szesc',
      7: 'siedem',
      8: 'osiem',
      9: 'dziewiec',
    },
    teens: {
      11: 'jedenadcie',
      12: 'dwanascie',
      13: 'trzydziesci',
      14: 'czterdziesiat',
      15: 'piecdziesiat',
      16: 'szescdziesiat',
      17: 'siemdemdziesiat',
      18: 'osiemdziesiat',
      19: 'dzieqiecdziesiat',
    },
    tens: {
      1: 'dziesiec',
      2: 'dwadziescia',
      3: 'trzydziesci',
      4: 'czterdziesci',
      5: 'piecdziesiat',
      6: 'szescdziesiat',
      7: 'siedemdziesiat',
      8: 'osiemdziesiat',
      9: 'dziewiecdziesiat',
    },
  }
  if (num === 1) return 'jedno'

  if (num < 10) return map.units[num]

  if (num < 20) return map.teens[num]

  const lastDigit = num % 10
  const tensPlace = Math.floor(num / 10)

  if (lastDigit === 0) return map.tens[tensPlace]

  if (num < 100) {
    return `${map.tens[tensPlace]} ${map.units[lastDigit]}`
  }
  return 'Unknown Number'
}

const capitalize = (s: string): string => {
  return s[0].toUpperCase() + s.slice(1)
}
