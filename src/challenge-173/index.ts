export const doomsDay = (s: string) => {
  if (!s.includes('1') && !s.includes('0')) return '0'
  const splitByOceans = s.split('X')
  // ^ adds an extra element when it ends in X
  if (splitByOceans[splitByOceans.length - 1] === '') splitByOceans.pop()
  let newMap = ''
  let total = 0
  let infected = 0
  splitByOceans.forEach((continent: string) => {
    if (continent.includes('1')) {
      infected += continent.length
      continent = continent.replace(/0/gi, '1')
    }
    total += continent.length
    newMap += `${continent}X`
  })
  // Need to be able to deal with if it doesn't end in X
  const lastCharS = s.charAt(s.length - 1)
  const lastCharM = newMap.charAt(newMap.length - 1)
  console.log(newMap)
  if (lastCharS === '0') {
    newMap = newMap.replace(lastCharM, '')
  }
  // This isn't working because it's replacing the 1st instance of X insead of the last char...
  const percentage = ((infected / total) * 100).toFixed(2)
  return `Infected Map: ${newMap}, Total Countries: ${total}, Infected Countries: ${infected}, Percent Infected: ${percentage}%`
}
