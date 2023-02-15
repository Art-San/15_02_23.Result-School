const workers2 = [
  {name: 'Игорь', profession: 'Frontend-developer', tasks: 7},
  {name: 'Ирина', profession: 'Backend-developer', tasks: 5},
  {name: 'Максим', profession: 'DevOps-engineer', tasks: 6},
  {name: 'Екатерина', profession: 'Project-manager', tasks: 4},
];

const tasksSum1 = workers2.reduce((acc, person) => acc += person.tasks, 0);

console.log(tasksSum1); // 22



const workers = [
    {name: 'Игорь', profession: 'Frontend-developer', tasks: 7},
    {name: 'Ирина', profession: 'Backend-developer', tasks: 5},
    {name: 'Максим', profession: 'DevOps-engineer', tasks: 6},
    {name: 'Екатерина', profession: 'Project-manager', tasks: 4},
  ];
  
  // Your code here...
  const tasksSum = workers.reduce((acc, tasc) => {
    console.log('salary', tasc.tasks)
    return acc + tasc.tasks
  }, 0);
  
  console.log('tasksSum', tasksSum); // 22


const firstObj = {
  name: 'Владимир',
  age: 23,
  profession: 'Frontend-developer'
};

const secondObj = firstObj;

const thirdObj = {
  name: 'Владимир',
  age: 23,
  profession: 'Frontend-developer'
};

console.log(firstObj === secondObj);
console.log(firstObj === thirdObj);