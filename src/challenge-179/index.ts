export const encryptNum = (s: string): string => {
  s = s.replace(/[^0-9]/g, '')
  if (s.length !== 10) return 'Invalid phone number'
  return `${s.substr(0, 3)}-${s[3]}XX-XXXX`
}
