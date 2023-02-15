const people3 = [
  {name: 'Ольга', age: 22},
  {name: 'Сергей', age: 20},
  {name: 'Светлана', age: 16},
  {name: 'Василий', age: 27},
  {name: 'Мария', age: 14},
  {name: 'Олег', age: 30},
];

const adultPeople1 = people3.filter((person) => person.age >= 18);

console.log(adultPeople1);

// Вывод:
// [
//   {name: 'Ольга', age: 22},
//   {name: 'Сергей', age: 20},
//   {name: 'Василий', age: 27},
//   {name: 'Олег', age: 30},
// ]


//***************************************************** */
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

  function filter(arr, num) {
    let filtered = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > num) {
            filtered.push(arr[i])
        }
    }

    return filtered
  };
   
  const adultPeople = filter(people, comingOfAge);

  
  console.log(adultPeople);
  
  // Вывод:
  // [
  //   {name: 'Ольга', age: 22},
  //   {name: 'Сергей', age: 20},
  //   {name: 'Василий', age: 27},
  //   {name: 'Олег', age: 30},
  // ]



