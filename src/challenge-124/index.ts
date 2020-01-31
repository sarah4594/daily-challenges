export const middleMe = (X: string, Y: string, N: number): string => {
  let s = ''
  if (N % 2 !== 0) return `${X}`
  const oneSide = N / 2
  return (s = `${Y.repeat(oneSide)}${X}${Y.repeat(oneSide)}`)
}
