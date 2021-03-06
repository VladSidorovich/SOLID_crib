// Open-Close Principle
//Принцип открытости/закрытости означает, что программные сущности должны быть:

//открыты для расширения: означает, что поведение сущности может быть расширено путём создания новых типов сущностей.
//закрыты для изменения: в результате расширения поведения сущности, не должны вноситься изменения в код, который эту сущность использует.

interface ILesson {
  start: string;
  end: string;
  off_amount: number;
  type?: string;
}

class Lesson implements ILesson {
  start: string
  end: string
  off_amount: number
  constructor(start: string, end: string, off_amount: number) {
    this.start = start
    this.end = end
    this.off_amount = off_amount
  }
  cost() {
    throw new Error('Cost method should be implemented')
  }
}

class TrialLesson extends Lesson {
  type: string;
  constructor(start: string, end: string, off_amount: number) {
    super(start, end, off_amount)
    this.type = 'trial'
    this.start = start
    this.end = end
    this.off_amount = off_amount
  }

  cost() {
    return `0 Руб`
  }
}

class RegularLesson extends Lesson {
  type: string;
  constructor(start: string, end: string, off_amount: number) {
    super(start, end, off_amount)
    this.type = 'regular'
    this.start = start
    this.end = end
    this.off_amount = off_amount
  }

  cost() {
    return `${this.off_amount} Руб`
  }
}

const trial_lesson = new TrialLesson('19:00', '20:00', 100)
const regular_lesson = new RegularLesson('21:00', '22:00', 200)
console.log(trial_lesson.cost())
console.log(regular_lesson.cost())
