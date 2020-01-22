/*

find length between cat and mouse
figure out if length <= j
figure out if dog is in between

*/

export const catAndMouse = (j: number, path: string[]) => {
  let cIndex = 0
  let mIndex = 0

  for (let i = 0; i <= path.length; i++) {
    if (path[i] === 'C') {
      cIndex = i
    }
    if (path[i] === 'm') {
      mIndex = i
    } else continue
  }

  const cAndMPath = path.slice(
    Math.min(cIndex, mIndex) + 1,
    Math.max(cIndex, mIndex),
  )

  if (cAndMPath.length <= j && cAndMPath.includes('D') === false)
    return 'CAUGHT!'
  else if (cAndMPath.length <= j && cAndMPath.includes('D') === true)
    return 'PROTECTED!'
  return 'ESCAPED!'
}
