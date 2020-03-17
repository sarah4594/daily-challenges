export const fixVirus = (s: string): string => {
  s = s.toLowerCase().replace(/ie/g, 'ei')
  return s[0].toUpperCase() + s.slice(1)
}
