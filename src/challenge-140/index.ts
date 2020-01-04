export const sheLovesMe = (petals: number): string => {
  const phrases = ['not at all', 'a lot', 'a little', 'passionately', 'madly']
  // changed just a little because I liked it better ;)
  const beginning = 'She loves me...'
  const love = phrases[petals % 5]
  const result = beginning + love
  console.log(8 % 5)
  return result
}
