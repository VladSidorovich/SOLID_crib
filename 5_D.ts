// Dependency inversion Principle
// «Зависимость на Абстракциях. Нет зависимости на что-то конкретное.» 
// Верхний уровень модулей не должен зависеть от абстракций нижнего уровня.
// Любые уровни должны зависеть от абстракций, а не от конкретики>> Объектом зависимости должна быть абстракция, а не что-то конкретное.

interface IDataBaseClient {
  find: (id) => any 
}

class Postgres implements IDataBaseClient {
  find(id: number) {
    return {
      id,
      created_at: new Date().toISOString()
    }
  }
}

class RedisClient implements IDataBaseClient {
  find(id: number) {
    const data = JSON.stringify({
      id,
      created_at: new Date().toISOString()
    })
    return JSON.parse(data)
  }
}


class Database {
  client: IDataBaseClient
  constructor(client) {
    this.client = client
  }

  find(id: number) {
    return this.client.find(id)
  }
}

// const db = new Database(new Postgres())
const db = new Database(new RedisClient())
const found_student = db.find(1)

console.log(found_student)
