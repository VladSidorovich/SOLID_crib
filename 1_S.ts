// Single Responsibility Principle
// Существует лишь одна причина, приводящая к изменению класса

interface ITable {
  name: string
}

class Table implements ITable {
  name: string
  constructor(name: string) {
    this.name = name
    console.log(`Table ${this.name} created`)
  }
}

class TableOperations {
  table: ITable;
  constructor(table: ITable) {
    this.table = table
  }

  create() {
    console.log(`data added to table ${this.table.name}`)
  }

  view() {
    console.log(`data student from table ${this.table.name}`)
  }

  update() {
    console.log(`data updated in table ${this.table.name}`)
  }

  delete() {
    console.log(`data deleted from table ${this.table.name}`)
  }
}

const student_table = new Table('Student')
const student_api = new TableOperations(student_table)

student_api.create()
