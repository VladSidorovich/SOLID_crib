// Liskov Substitution Principle

class FinanceOperation {
  isFinanceOperation = true
}

class Income extends FinanceOperation { // зп считается с этой суммы
  sum: number
  teacher_rate: number
  constructor(sum: number, teacher_rate) {
    super()
    this.sum = sum
    this.teacher_rate = teacher_rate
  }

  getTeacherSalary() {
    return this.sum * this.teacher_rate
  }
}

class Outcome extends FinanceOperation {

}

function getSalary(finance_operation) {
    console.log(finance_operation.sum * finance_operation.teacher_rate)
}

console.log(new Income(1000, 0.3).getTeacherSalary())
// console.log(new Outcome().getTeacherSalary())