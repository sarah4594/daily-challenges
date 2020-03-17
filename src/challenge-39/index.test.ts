import { fixVirus } from '.'

describe('fixVirus', () => {
  it('should fix errors in a string', () => {
    expect(fixVirus('He haD iEght ShOTs of CAffIEne.')).toBe(
      'He had eight shots of caffeine.',
    )
  })
})
