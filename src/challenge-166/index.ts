/*

find length between cat and mouse
figure out if length <= j
figure out if dog is in between

*/

export const catAndMouse = (j: number, path: string[]) => {
  const cIndex = path.indexOf('C')
  const mIndex = path.indexOf('m')

  // indexOf (arrays and strings)
  // for (let i = 0; i < path.length; i++) {
  //   if (path[i] === 'C') {
  //     cIndex = i
  //   }
  //   if (path[i] === 'm') {
  //     mIndex = i
  //   }
  // }

  const cAndMPath = path.slice(
    Math.min(cIndex, mIndex) + 1,
    Math.max(cIndex, mIndex),
  )

  const jumpInRange = cAndMPath.length <= j
  const hasDog = cAndMPath.includes('D')
  return jumpInRange ? (hasDog ? 'PROTECTED!' : 'CAUGHT!') : 'ESCAPED!'
}
