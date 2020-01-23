export const sortedBlocks = (s: string): string => {
  const map: any = {}
  for (const c of s) map[c] = (map[c] || 0) + 1
  console.log(map)

  const charCode = (c: string) => {
    const n = c.charCodeAt(0)
    // a = 97, 97 / 32 = 3, 3 - 3 = 0, 0 * 32 + (97%32=1) = 1
    // A = 65, 65 / 32 = 2, 3 - 2 = 1, 1 * 32 + (65%32=2) = 33
    // 0 = 48, 48 / 32 = 1, 3 - 1 = 2, 2 * 32 + (48%32=16) = 80
    return (3 - Math.floor(n / 32)) * 32 + (n % 32)
  }
  const sortFunc = (a: string, b: string) => charCode(a) - charCode(b)

  const sortedKeys = Object.keys(map).sort(sortFunc)

  let result = ''
  while (true) {
    // get characters still available
    const filteredKeys = sortedKeys.filter(key => map[key] > 0)
    if (filteredKeys.length === 0) break

    // decrement character count used
    filteredKeys.forEach(key => map[key]--)

    // add hyphen between groups
    if (result.length > 0) result += '-'
    result += filteredKeys.join('')
  }

  return result
}
