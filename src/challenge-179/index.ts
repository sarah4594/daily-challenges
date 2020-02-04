export const encryptNum = (s: string): string => {
  const arr = s.split('')
  if (arr.includes('.') && arr.length <= 12)
    return `${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}XX.XXXX`
  if (arr.includes('-') && arr.length <= 12)
    return `${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}XX-XXXX`
  if (arr.includes(' ') && arr.length <= 11)
    return `${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}XXXXXX`
  return 'Invalid phone number'
}
