import { whoHasMostMoney, Student } from '.'

const students1: Student[] = [
  new Student('Sarah', 1, 2, 3),
  new Student('Raif', 1, 2, 3),
  new Student('Yzma', 1, 2, 3),
]
const students2: Student[] = [
  new Student('Logan', 3, 2, 1),
  new Student('Sarah', 1, 2, 3),
  new Student('Raif', 4, 5, 6),
]
const students3: Student[] = [
  new Student('Logan', 4, 5, 6),
  new Student('Sarah', 1, 2, 3),
  new Student('Raif', 3, 2, 1),
]
const students4: Student[] = [
  new Student('Logan', 3, 2, 1),
  new Student('Sarah', 4, 5, 6),
  new Student('Raif', 1, 2, 3),
]
const students5: Student[] = [new Student('Sarah', 1, 2, 3)]

// const who = whoHasMostMoney(students)

describe('whoHasMostMoney', () => {
  it('should add up money of each student and return who has most', () => {
    expect(whoHasMostMoney(students1)).toBe('All')
    expect(whoHasMostMoney(students2)).toBe('Raif: $190')
    expect(whoHasMostMoney(students3)).toBe('Logan: $190')
    expect(whoHasMostMoney(students4)).toBe('Sarah: $190')
    expect(whoHasMostMoney(students5)).toBe('Sarah: $85')
  })
})
