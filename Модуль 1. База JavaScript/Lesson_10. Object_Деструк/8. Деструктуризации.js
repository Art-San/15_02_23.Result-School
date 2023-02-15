//  ---------- деструктуризации МАССИВЫ это квадратные [ ]


// function calcValues (a, b) {
//    return [
//     a + b,
//     a - b, если вдруг сдесь undefined то задается дефолтное значение
//     b * a,
//     a / b
//    ]
// };

// const [sum, sub = "дефолт", mult] = calcValues(42, 10); // 'const result' заменим на 'const [sum, sub, sub2]' 
// const [sum,, mult] = calcValues(42, 10);       // если надо пропустить один индекс
// const [sum,, mult, ...other] = calcValues(42, 10);       // можем применить оператор рест

// const sum = result[0];
// const sub = result[1];

// const [sum, sub, sub2] = result  // деструктуризации. Можно не создавать эту строчку, смотри выше

// console.log('sum, sub, mult', sum, mult, other);

// -------------------------------------------------------------------------------------------------------

// function calcValues (a, b) {
//     return [
//      a + b,
//      undefined,
//      b * a,
//      a / b
//     ]
// };


//  const [sum, sub = 'вычитания нет', mult, ...other] = (calcValues(42, 10)); 

    
//  console.log('sum, mult, other,sub', sum, mult, other, sub);


 // ------------------   деструктуризации objects это фигурные { }

 const person = {
     name: 'max',
     age: 20,
     address: {
         country: 'Russia',
         city: 'Moscow'
     }
 }

const name = person.name // это обычное получение значения

 const {name: firstName = 'без имени', 
 age, 
 car = 'машины нет',
 address: {city: homeTown, country}
} = person;  // а это уже дмструкторизация

//  console.log(firstName, age, car, homeTown, country)

//--------------- rest

// const {name, ...info} = person;
// console.log(name, info) // в инфо у нас будет все остальное кроме имени

// ------------------------------------------
// первый длинный вариант
// function logPerson(per) {
//     console.log(per.name + ' ' + per.age + ' ' + per.address.city);
// }
// logPerson(person)

// вторай по короче

function logPerson({name: firstName = "нет имени", age}) {
    console.log(firstName + ' ' + age);
}
logPerson(person)


