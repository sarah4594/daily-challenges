export const createPhoneNumber = (arr: number[]): string => {
  if (arr.length > 10) return 'Not a United States phone number'
  return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
