import { doomsDay } from '.'

describe('doomsDay', () => {
  it('should take a map of the world and return stats about the infected world', () => {
    expect(doomsDay('01000000X000X011X0X')).toBe(
      'Infected Map: 11111111X000X111X0X, Total Countries: 15, Infected Countries: 11, Percent Infected: 73.33%',
    )
    expect(doomsDay('01X000X010X011XX')).toBe(
      'Infected Map: 11X000X111X111XX, Total Countries: 11, Infected Countries: 8, Percent Infected: 72.73%',
    )
    expect(doomsDay('XXXXX')).toBe('0')
    expect(doomsDay('00000000X00X0000')).toBe(
      'Infected Map: 00000000X00X0000, Total Countries: 14, Infected Countries: 0, Percent Infected: 0.00%',
    )
    expect(doomsDay('01X000X010X011XX')).toBe(
      'Infected Map: 11X000X111X111XX, Total Countries: 11, Infected Countries: 8, Percent Infected: 72.73%',
    )
    expect(doomsDay('01X000X010X011XX')).toBe(
      'Infected Map: 11X000X111X111XX, Total Countries: 11, Infected Countries: 8, Percent Infected: 72.73%',
    )
  })
})
