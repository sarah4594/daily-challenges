import { alphabetPosition } from '.'

describe('alphabetPosition', () => {
  it('should take a string and replace letters with their position in the alphabet', () => {
    expect(alphabetPosition("The sunset sets at twelve o'clock")).toBe(
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11',
    )
  })
})
