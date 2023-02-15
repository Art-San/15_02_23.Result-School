const people = [
    {name: 'Александр', age: 18},
    {name: 'Нина', age: 21},
    {name: 'Алексей', age: 22},
    {name: 'Виталий', age: 26},
    {name: 'Инна', age: 22},
    {name: 'Марина', age: 26}
  ];
  
  // Your code here...
  const ageMan = 22;
  function returnIndex(mas) {
    for (let i = 0; i < mas.length; i++) {
        if (mas[i].age === ageMan) {
            return i
        }
    }
  };

  const personIndex = returnIndex(people);
  
  console.log(personIndex); // 2
  console.log(people[personIndex]); // {name: 'Алексей', age: 22}

//=================================================================  

const people2 = [
  {name: 'Александр', age: 18},
  {name: 'Нина', age: 21},
  {name: 'Алексей', age: 22},
  {name: 'Виталий', age: 26},
  {name: 'Инна', age: 22},
  {name: 'Марина', age: 26},
];

const personIndex1 = people2.findIndex((person) => person.age === 22);

console.log(personIndex1); // 2
console.log(people2[personIndex1]); // {name: 'Алексей', age: 22}




