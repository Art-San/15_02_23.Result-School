const people = [
    {name: 'Ольга', age: 22},
    {name: 'Сергей', age: 20},
    {name: 'Светлана', age: 16},
    {name: 'Василий', age: 27},
    {name: 'Мария', age: 14},
    {name: 'Олег', age: 30},
  ];
  
// Your code here...
const comingOfAge = 18;

function printObjec(object = {}) {
  // console.log('object', object)
  let filtered = []
  Object.keys(object).forEach(key => {
    // console.log('value', object[key].age)
    if (object[key].age > comingOfAge) {
      filtered.push(object[key])
    }
  })
  return filtered
}


const adultPeople = printObjec(people)

console.log('adultPeople', adultPeople);

// Вывод:
// [
//   {name: 'Ольга', age: 22},
//   {name: 'Сергей', age: 20},
//   {name: 'Василий', age: 27},
//   {name: 'Олег', age: 30},
// ]

