export class Student {
  name: string
  fives: number
  tens: number
  twenties: number
  total: number
  constructor(name: string, fives: number, tens: number, twenties: number) {
    this.name = name
    this.fives = fives
    this.tens = tens
    this.twenties = twenties
    this.total = this.fives * 5 + this.tens * 10 + this.twenties * 20
  }
}

export const whoHasMostMoney = (students: Student[]): string => {
  students.sort((a, b) => b.total - a.total)
  const mostMoney = students[0].total

  const isAll =
    students.length > 1 &&
    all(students, (student: Student) => student.total === mostMoney)
  return isAll ? 'All' : `${students[0].name}: $${mostMoney}`
}

const all = (array: any[], predicate: any) =>
  array.filter(predicate).length === array.length

const any = (array: any[], predicate: any) => array.filter(predicate).length > 0

const none = (array: any[], predicate: any) =>
  array.filter(predicate).length === 0
