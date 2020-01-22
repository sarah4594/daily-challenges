import { catAndMouse } from '.'

describe('catAndMouse', () => {
  it('should take a path and see if the cat can catch the mouse', () => {
    expect(
      catAndMouse(5, ['.', '.', 'C', '.', '.', '.', '.', '.', 'm', '.']),
    ).toBe('CAUGHT!')
    expect(
      catAndMouse(10, [
        '.',
        '.',
        '.',
        'm',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
        'C',
        '.',
        '.',
        '.',
        'D',
      ]),
    ).toBe('CAUGHT!')
    expect(
      catAndMouse(10, [
        '.',
        '.',
        '.',
        'm',
        '.',
        '.',
        '.',
        '.',
        'D',
        '.',
        '.',
        '.',
        '.',
        'C',
        '.',
        '.',
        '.',
        '.',
        '.',
        '.',
      ]),
    ).toBe('PROTECTED!')
  })
})
