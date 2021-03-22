// Interface Segregation Principle
// «много интерфейсов, специально предназначенных для клиентов, лучше, чем один интерфейс общего назначения.» Создавайте узкоспециализированные интерфейсы, предназначенные для конкретного клиента. Клиенты не должны зависеть от интерфейсов, которые они не используют.

class SchoolUser {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const student = {
  learn() {
    console.log(`${this.name} умеет учить`)
  }
}

const manager = {
  manage() {
    console.log(`${this.name} умеет менеджить`)
  }
}

const tester = {
  test() {
    console.log(`${this.name} умеет тестировать`)
  }
}

class Student extends SchoolUser {}
class Manager extends SchoolUser {}
class Tester extends SchoolUser {}

Object.assign(Student.prototype, student)
Object.assign(Manager.prototype, manager)
Object.assign(Tester.prototype, tester)

const good_student = new Student('Ваня') as any
good_student.learn()
const good_manager = new Manager('Таня') as any
good_manager.manage()
const good_tester = new Tester('Надя') as any
good_tester.test()