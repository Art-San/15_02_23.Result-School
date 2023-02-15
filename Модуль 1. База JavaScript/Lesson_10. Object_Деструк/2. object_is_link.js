// 7 - приметивы (не ссылочный тип)
// 1 - не примитив - ОБЪЕКТ (ссылочный тип)

const setName = (entity, value) => {
    if (typeof entity === 'object') {
        entity.name = value;
    } else {
        entity = value;
    }
}


const developer = {
    name: 'Vitya', 
}
let developerName = 'Kolya';

setName(developer, 'Max');
setName(developerName, 'Max');

// console.log('developer', developer);
// console.log('developerName', developerName);

console.log({} === {}); // в консоле false ССЫЛКИ разные
console.log([] === []); // в консоле false потому что ССЫЛКИ разные

const entity = {};           console.log(entity === entityCopy) // будет true
const entityCopy = entity;

// console.log(entity === entityCopy); // // в консоле true потомучтоссылки ОДИНАКОВЫЕ

// console.log('hello' === 'hello'); // true так как у примитивов нет ссылок
// console.log( 5 === 5 );           // true так как у примитивов нет ссылок

