export class Student {
  name: string
  fives: number
  tens: number
  twenties: number
  constructor(name: string, fives: number, tens: number, twenties: number) {
    this.name = name
    this.fives = fives
    this.tens = tens
    this.twenties = twenties
  }
  totalAmount() {
    return this.fives * 5 + this.tens * 10 + this.twenties * 20
  }
}

export const whoHasMostMoney = (students: Student[]) => {
  let mostMoney: any = []
  let name = ''
  students.forEach(student => {
    if (student.totalAmount() === mostMoney) return 'All'
    if (student.totalAmount() > mostMoney) {
      mostMoney = student.totalAmount()
      name = student.name
    }
  })
  return `${name}: $${mostMoney}`
}
