type OldType = {
  name: string
  age: string
}

type NewType = {
  name: number
  age: number
}

// Функция для маппинга старого типа в новый
function mapToNewType(oldObj: OldType): NewType {
  return {
    name: Number(oldObj.name),
    age: Number(oldObj.age)
  }
}

const oldPerson: OldType = {
  name: 'John',
  age: '25'
}

const newPerson = mapToNewType(oldPerson)
console.log(newPerson) // { name: 25, age: 25 }

// Пример: Функция с описанным входящим типом
interface UserInput {
  username: string
  email: string
}

function registerUser(input: UserInput) {
  // Логика регистрации пользователя
}

const newUser = {
  username: 'johndoe',
  email: 'john@example.com'
}

registerUser(newUser) // Все в порядке
