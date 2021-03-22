// Liskov Substitution Principle
// «объекты в программе должны быть заменяемыми на экземпляры их подтипов без изменения правильности выполнения программы.»

class Person {

}

class User extends Person {
  has_access() {
    console.log('Имеется доступ к платформе')
  }
}

class Teacher extends User {
  can_teach() {
    console.log('Учитель имеет доступ к проведению урока')
  }
}

class Admin extends User {
  can_teach() {
    console.log('Администратор имеет доступ к проведению урока')
  }
}

class Guest extends Person {
  is_guest = true
}

function openClassPage(role) {
  role.has_access()
  role.can_teach()
}

openClassPage(new Teacher())
openClassPage(new Admin())
// openClassPage(new Guest())
