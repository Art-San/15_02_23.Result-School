// Метод find() возвращает значение первого найденного в массиве элемента,
// которое удовлетворяет условию переданному в callback функции. 
// В противном случае возвращается undefined.

  const people1 = [
    {name: 'Иван', profession: 'Backend-developer'},
    {name: 'Анастасия', profession: 'DevOps-engineer'},
    {name: 'Василий', profession: 'Frontend-developer'},
    {name: 'Оксана', profession: 'Project-manager'},
  ];
  
  const frontendDev1 = people.find((person) => person.profession === 'Frontend-developer');
  
  console.log(frontendDev1); // {name: 'Василий', profession: 'Frontend-developer'}
  


  // const nameMen = 'Василий'
//   function object (mas) {
//     for (let i = 0; i < mas.length; i++) {
//       if (mas[i].name === nameMen) {
//         return mas[i]
//       }

//     }
//   }

// console.log(object(people))


// function object2(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].name === b) {
//       console.log('object2', a[i] )
//     }

//   }
// }

// object2(people, nameMen)

