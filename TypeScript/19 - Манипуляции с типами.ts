type Point = { x: number; y: number }
type P = keyof Point // в результате P будет юнион типам х и у, тоесть он берет ключи этого объекта { x: number; y: number }

// также мы можем получать возвращаемый тип функции
function MyF() {
  return { a: 1 }
}
type MyType = () => { a: number }
type k = ReturnType<MyType>
// function MyF() {
//   return { a: 1 }
// }

// type k = ReturnType<typeof MyF>

// Типы из массива
const myArr = [{ name: 'Василий', age: 30 }]

type Person = (typeof myArr)[number]
type Age = (typeof myArr)[number]['age']

// Также мы можем работать с типами как с условиями
// interface IMsg {
//   message: unknown
// }
// type MessageOf<T> = T extends IMsg ? T['message'] : never  // Это мое
type MessageOf<T> = T extends { message: unknown } ? T['message'] : never

interface Email {
  message: string
}

interface Cat {
  test: number
}

type EmailTypeContents = MessageOf<Email>
type CatTypeContents = MessageOf<Cat>

// Есть возможность сделать неограниченное число ключ значений у кого то из интерфасовъ
interface Test5 {
  [key: string]: number
}

// можем мапить один тип на другой
type OptionsFlag<Type> = {
  [Property in keyof Type]: boolean // из Type возмем все свойства как ключи и пренесем это в новый тип при этом значение будет boolean
}

// самый редкий случай использования типов, это летеральные типы
type world = 'world'
type Greeting = `hello ${world}`

// На практике попробовать замапить правильно один тип на другой, попробовать правильно описать входящие типы
