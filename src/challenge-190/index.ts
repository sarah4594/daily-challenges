export const capitalizeFirstLast = (s: string): string => {
  const regEx = /\w\b|\b\w/g
  return s.toLowerCase().replace(regEx, match => match.toUpperCase())
}
