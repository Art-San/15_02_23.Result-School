




// --------------------------------  от владиленна
const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: 'Максим' },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" },
];

const giveTalonsInOrder = (patients, orders) => {
    const objectWithIndexes = patients.reduce((acc, curPerson) => {
        acc[curPerson.id] = curPerson;
        return acc;
    }, {});
    return orders.map((order) => objectWithIndexes[order]);
}



const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);





// --------------------------- мое решение  ----------------------------------
// const ordersArr = [4, 2, 1, 3];
// const people = [
// { id: 1, name: "Максим" },
// { id: 2, name: "Николай" },
// { id: 3, name: "Ангелина" },
// { id: 4, name: "Виталий" },
// ];

// // console.log(ordersArr[0])
// // console.log(people[3])



// function giveTalonsInOrder(patients, orders) {
//     let array = [];
//     for (let id of orders) {
//         let patient = patients.find(patient => patient.id === id);
//         array.push(patient);
//     }
//     return array;
    
// }

// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);





// -------------------------РЕШЕНИЕ 1-------------------------------------------------------

// function giveTalonsInOrder(patients, orders) {             //https://www.cyberforum.ru/post15637120.html
//     const obj = {};
//     patients.forEach((e, i) => obj[e.id] = i);
//     return orders.map(id => patients[obj[id]]);
//   }
// --------------------------------- РЕШЕНИЕ 2 -------------------------------------------

// function giveTalonsInOrder(patients, orders) {               //https://www.cyberforum.ru/post15637136.html           
//     let array = [];
//     for (let id of orders) {
//         let patient = patients.find(patient => patient.id === id);
//         array.push(patient);
//     }
//     return array;
// }

//------------------------------- РЕШЕНИЕ 3 -----------------------------------

// function giveTalonsInOrder(people, ordersArr) {                              //https://www.cyberforum.ru/post15637167.html
//     const map = new Map(people.map((man) => [man.id, man]));
//     return ordersArr.map((id) => map.get(id));
// }

// ------------------------------- РЕШЕНИЕ 4

// function giveTalonsInOrder(patients, orders) {                                       //https://www.cyberforum.ru/post15648345.html
//     return patients.sort((a, b) => orders.indexOf(a.id) - orders.indexOf(b.id));
// }

//------------------------------- РЕШЕНИЕ 5 -------------------------------

// const giveTalonslnOrder = (patients, orders) => {                                     // https://www.cyberforum.ru/post15648469.html
//     let map = patients.reduce((a, b) => a.set(b.id, b), new Map());
//     return orders.map(e => map.get(e));
// }

// ----------------------------------- РЕШЕНИЕ 4  -------------------------

// const giveTalonslnOrder = (patients, orders) => orders.map(e => patients.find(e2 => e2.id === e));