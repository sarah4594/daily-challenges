export const middleInitial = (name: string): string | undefined => {
  // First and Last stay the same
  const regex = name.match(/\w+/g)
  if (!regex) return undefined
  // Anything in the middle in initialized
  if (regex.length > 2) {
    const first = regex[0]
    const last = regex[regex.length - 1]
    let initials = ''
    for (let i = 1; i <= regex.length - 2; i++) {
      initials += `${regex[i][0]}. `
    }
    return `${first} ${initials}${last}`
  }
  return name
}
