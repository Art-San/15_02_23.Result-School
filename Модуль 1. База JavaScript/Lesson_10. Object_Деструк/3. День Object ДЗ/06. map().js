
const workers = [
    {name: 'Игорь', profession: 'Frontend-developer', salary: 2400},
    {name: 'Ирина', profession: 'Backend-developer', salary: 2200},
    {name: 'Максим', profession: 'DevOps-engineer', salary: 2300},
    {name: 'Екатерина', profession: 'Project-manager', salary: 2500},
  ];
  
  const workersWithUpdatedSalary = workers.map((person) => ({
    ...person,
    salary: person.salary + 300
  }));
  
  console.log(workersWithUpdatedSalary);
  
  // Вывод:
  // [
  //   {name: 'Игорь', profession: 'Frontend-developer', salary: 2700},
  //   {name: 'Ирина', profession: 'Backend-developer', salary: 2500},
  //   {name: 'Максим', profession: 'DevOps-engineer', salary: 2600},
  //   {name: 'Екатерина', profession: 'Project-manager', salary: 2800},
  // ]

// Вывод:
// [
//   {name: 'Игорь', profession: 'Frontend-developer', salary: 2700},
//   {name: 'Ирина', profession: 'Backend-developer', salary: 2500},
//   {name: 'Максим', profession: 'DevOps-engineer', salary: 2600},
//   {name: 'Екатерина', profession: 'Project-manager', salary: 2800},
// ]

// const updatedSalaries = salariesOfDeveloper.map((salary, index, array) => {
//     return salary * 2;                                                         //[800, 1000, 1200, 4000, 700]
// });
// console.log('updatedSalaries', updatedSalaries)

// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-ru

// Переформатирование объектов массива
const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log('usersByLikes', usersByLikes);


[
    {shark: "ocean", age: 50},
    {turtle: "pond", age: 60},
    {otter: "fish biscuits", age: 50}
]