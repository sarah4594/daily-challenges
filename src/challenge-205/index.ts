export const solve = (s: string): number | undefined => {
  const regex = s.match(/[^aeiou]+/g)
  if (!regex) return undefined
  let highestTotal = 0
  for (let i = 0; i < regex.length; i++) {
    let currentTotal = 0
    regex[i].split('').forEach(letter => {
      currentTotal += letter.charCodeAt(0) - 96
    })
    if (currentTotal > highestTotal) highestTotal = currentTotal
  }
  return highestTotal
}
