// JSON.parse()
// Разбирает строку JSON, возможно с преобразованием получаемого значения 
// и его свойств и возвращает разобранное значение.

const json = '{"name":"Илья","age":23,"profession":"Fullstack-developer","favorite_activity":"Read books"}';

// Your code here...
const object = JSON.parse(json)

console.log(object);

// Вывод:
// {
//   name: 'Илья',
//   age: 23,
//   profession: 'Fullstack-developer',
//   favorite_activity: 'Read books'
// }