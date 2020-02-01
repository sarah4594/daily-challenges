export const DNAStrands = (s: string): string => {
  const map: any = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }

  const sequence = s
    .split('')
    .map(letter => map[letter])
    .join('')
  return sequence
}
