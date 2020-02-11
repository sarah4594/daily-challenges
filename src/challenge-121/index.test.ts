import { whoHasMostMoney, Student } from '.'

const students: Student[] = [
  new Student('Sarah', 1, 2, 3),
  new Student('Logan', 3, 2, 1),
]

// const who = whoHasMostMoney(students)

describe('whoHasMostMoney', () => {
  it('should add up money of each student and return who has most', () => {
    expect(whoHasMostMoney(students)).toBe('Sarah: $85')
  })
})
