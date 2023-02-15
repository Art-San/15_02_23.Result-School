
const workers = [
    {name: 'Игорь', profession: 'Frontend-developer', salary: 2400},
    {name: 'Ирина', profession: 'Backend-developer', salary: 2200},
    {name: 'Максим', profession: 'DevOps-engineer', salary: 2300},
    {name: 'Екатерина', profession: 'Project-manager', salary: 2500},
];

const indexing = 300;

const workersWithUpdatedSalary = workers.map(user => (
    {...user, salary: user.salary + indexing
    }));

console.log(workersWithUpdatedSalary);



const idArray = ['1', '2'];
const userArray = [
  {
    name: 'vanya',
    id: '1',
    checked: false
  },
  {
    name: 'kolya',
    id: '2',
    checked: false
  },
  {
    name: 'nika',
    id: '3',
    checked: false
  }
];

const resultUserArray = userArray.map(
  user => ({...user, checked: idArray.includes(user.id) ? true : user.checked})
);

console.log(resultUserArray);
