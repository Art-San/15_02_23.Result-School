
// КЛЮЧЬ 
// может быть одним из двух типо данных string или symbol


// const user = {
//     name: 'maks',           
//     10: '1234',
//     undefined: undefined,
//     [false]: false,
// };
// console.log(Object.keys(user));    //  все ключи преобразует выведет как строку


//  string | symbol

// const user = {
//     name: 'maks',  
//     name: 'антон',
//     name: 'вика',        
// };
// console.log(user);           // в консоль выведется последнее имя


const id = Symbol('id');
const id2 = Symbol('id2');

const user = {
    [id]: 1,
    // [Symbol('id')]: 1,
    // [Symbol('id')]: 2,
    // [Symbol('id')]: 3,
    name: 'maks',           
    
};
console.log('user', user);

// console.log(Object.keys(user));

console.log('user[id]', user[id]);

// //  in - ПРОВЕРЯЕТ СУЩЕСТВУЕТ ЛИ КЛЮЧЬ В ОБЪЕКТЕ

// console.log('name' in user);  // true так как есть такой ключь в объекте

// console.log('userAll' in user); // false нет такого ключа в объекте

// // также с помощь in можем проверять 
// // ключи у которых тип данных симбол

// console.log(id in user);  // true

// console.log(id2 in user); // false так как ключа с симбол айди2 нет в объекте юзер 