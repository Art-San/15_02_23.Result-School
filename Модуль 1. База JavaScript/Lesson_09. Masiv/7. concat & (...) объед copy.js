// const currentDeveloper = ['Maxim', 'Oleg'];
// const newDeveloper = ['Anton', 'Gleb'];

// ['Maxim', 'Oleg','Anton', 'Gleb']

//   Способ номер 1
// const allDeveloper = currentDeveloper.concat(newDeveloper);                // ['Maxim', 'Oleg', 'Anton', 'Gleb']
// const allDeveloper = currentDeveloper.concat(newDeveloper, currentDeveloper); // ['Maxim', 'Oleg', 'Anton', 'Gleb', 'Maxim', 'Oleg']
// console.log('allDeveloper', allDeveloper);

//   Способ номер 2 ... спред оператор

const currentDeveloper = ['Maxim', 'Oleg'];
const newDeveloper = ['Anton', 'Gleb'];

// До ['Maxim', 'Oleg']
// После 'Maxim', 'Oleg' 

const allDeveloper = [
    ...currentDeveloper,
    ...newDeveloper,
]

// const allDeveloper = [    под капотом выглядит
//     'Maxim', 'Oleg',         так
//     'Anton', 'Gleb',
// ]


console.log('1allDeveloper', allDeveloper);                    //  1allDeveloper (4) ['Maxim', 'Oleg', 'Anton', 'Gleb']