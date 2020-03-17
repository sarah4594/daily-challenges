const middleNames = (name: string[]): string[] => {
  for (let i = 0; i < name.length; i++) {
    if (i === 0 || i === name.length - 1) {
      name.splice(i, 1)
    }
  }
  return name
}

export const middleInitial = (name: string): string | undefined => {
  // First and Last stay the same
  const regex = name.match(/\w+/g)
  if (!regex) return undefined
  // Anything in the middle in initialized
  if (regex.length > 2) {
    const first = regex[0]
    const last = regex[regex.length - 1]
    let initials = ''
    const middles = middleNames(regex)
    for (let i = 0; i < middles.length; i++) {
      initials += `${middles[i][0]}. `
    }
    return `${first} ${initials}${last}`
  }
  return name
}
