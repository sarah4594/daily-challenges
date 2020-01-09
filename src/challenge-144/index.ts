export const enoughChange = (customers: number[]) => {
  const register: any = {
    25: 0,
    50: 0,
    100: 0,
  }
  const checkRegister = (change: number): number => {
    const bills = [100, 50, 25]
    for (let i = 0; i < bills.length; i++) {
      const bill = bills[i]
      if (change >= bill && register[bill] > 0) {
        register[bill]--
        return bill
      }
    }
    return 0
  }

  const ticket = 25
  for (let i = 0; i < customers.length; i++) {
    const cash = customers[i]
    register[cash]++
    let change = cash - ticket
    console.log({ cash, change, register })

    while (change > 0) {
      const bill = checkRegister(change)
      if (bill === 0 && change > 0) return 'NO'
      change -= bill
    }
    if (change !== 0) return 'NO'
  }
  return 'YES'
}
