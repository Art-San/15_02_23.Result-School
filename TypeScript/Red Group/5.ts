/* Utility types */
interface IProfile2 {
  name: string
  age: number
  isOwner: boolean
}
// const profile5: Omit<IProfile2, 'age'> = { // все кроме age
// 	isOwner: true,
// 	name: 'vasya'
// }

// const profile5: Pick<IProfile2, 'age'> = { // только age
//   age: 16
// }

// const profile5: Partial<IProfile2> = {  // все поля стали не обязательными

// }
// const profile5: Required<IProfile2> = {   // все поля стали обязательными

// }
// const profile5: Readonly<IProfile2> = {

// }

// const profile5: Readonly<Pick<IProfile2, 'age'>> = {  // только для чтения
// 	age: 25,
// }
// profile5.age =234

// RECORD
const store: Record<string, number> = {
  bugatti: 10000000
}
