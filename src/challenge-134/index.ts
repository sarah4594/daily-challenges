export const squaresNeeded = (grain: number): number => {
  let count = 0
  for (let i = grain; i > 0; i = Math.floor(i / 2), count++) {
    // Keep looping until i = 0
    // console.log(i)
  }
  return count
}
