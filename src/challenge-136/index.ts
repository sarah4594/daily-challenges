export const deafRats = (rats: string) => {
  const group = rats.split('P')
  console.log({ rats, left: group[0], right: group[1] })

  const leftDeaf = getRats(group[0], 'O~')
  const rightDeaf = getRats(group[1], '~O')

  return leftDeaf + rightDeaf
}
/**
 * This function counts the number of deaf rats in a group
 * @param group list of rats
 * @param deafRat direction of deaf rat
 * @returns count of deaf rats
 */
const getRats = (group: string, deafRat: string) => {
  console.log(group)
  let rat = ''
  let deafRatCount = 0
  for (let i = 0; i < group.length; i++) {
    const ch = group[i]
    if (ch === 'O' || ch === '~') {
      rat += ch
    }
    if (rat.length === 2) {
      if (rat === deafRat) {
        deafRatCount++
      }
      rat = ''
    }
  }
  return deafRatCount
}
