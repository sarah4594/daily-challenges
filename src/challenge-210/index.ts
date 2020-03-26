export const capitalize = (s: string): string[] => {
  const arr = s.split('')
  return [
    arr
      .map((c, index) => (index % 2 === 0 ? c.toUpperCase() : c.toLowerCase()))
      .join(''),
    arr
      .map((c, index) => (index % 2 === 1 ? c.toUpperCase() : c.toLowerCase()))
      .join(''),
  ]
}
