export const enoughChange = (tickets: number[]) => {
  const register = {
    25: 0,
    50: 0,
    100: 0,
  }

  let enough = true
  for (let i = 0; i < tickets.length; i++) {
    const ticket = tickets[i]
    switch (ticket) {
      case 25:
        register[25]++
        enough = true
        break
      case 50:
        if (register[25] === 0) {
          enough = false
          break
        } else {
          register[50]++
          register[25]--
          enough = true
        }
        break
      case 100:
        if (register[25] === 0 || register[50] === 0) {
          enough = false
          break
        } else {
          register[100]++
          register[50]--
          register[25]--
          enough = true
          break
        }
    }
    console.log(register)
  }
  if (enough === true) return 'YES'
  else return 'NO'
}
