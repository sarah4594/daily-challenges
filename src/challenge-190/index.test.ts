import { capitalizeFirstLast } from '.'

describe('capitalizeFirstLast', () => {
  it('should take a string and only capitalize first and last letters of each word', () => {
    expect(capitalizeFirstLast('and still i rise')).toBe('AnD StilL I RisE')
    expect(capitalizeFirstLast('when words fail music speaks')).toBe(
      'WheN WordS FaiL MusiC SpeakS',
    )
    expect(capitalizeFirstLast('WHAT WE THINK WE BECOME')).toBe(
      'WhaT WE ThinK WE BecomE',
    )
    expect(capitalizeFirstLast('dIe wITh mEMORIEs nOt dREAMs')).toBe(
      'DiE WitH MemorieS NoT DreamS',
    )
    expect(capitalizeFirstLast('hello')).toBe('HellO')
  })
})
