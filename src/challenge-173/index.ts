export const doomsDay = (s: string): string => {
  if (!s.includes('1') && !s.includes('0')) return '0'
  const continents = s.split('X')
  // ^ for some reason this adds an extra '' element when it ends in X
  if (continents[continents.length - 1] === '') continents.pop()
  const newContinents: string[] = []
  let total = 0
  let infected = 0

  continents.forEach((continent: string) => {
    if (continent.includes('1')) {
      infected += continent.length
      continent = '1'.repeat(continent.length)
    }
    total += continent.length
    newContinents.push(continent)
  })
  let newMap = newContinents.join('X')
  if (s.endsWith('X')) newMap += 'X'
  const percentage = ((infected / total) * 100).toFixed(2)
  const result = `Infected Map: ${newMap}, Total Countries: ${total}, Infected Countries: ${infected}, Percent Infected: ${percentage}%`
  console.log(result)
  return result
}
