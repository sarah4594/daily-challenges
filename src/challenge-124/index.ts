export const middleMe = (X: string, Y: string, N: number): string => {
  if (N % 2 !== 0) return X
  const oneSide = N / 2
  return `${Y.repeat(oneSide)}${X}${Y.repeat(oneSide)}`
}
