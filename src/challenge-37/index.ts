export const nameShuffler = (name: string): string => {
  const regex = name.match(/\w+/gi)
  if (!regex) return name
  return `${regex[1]} ${regex[0]}`
}
