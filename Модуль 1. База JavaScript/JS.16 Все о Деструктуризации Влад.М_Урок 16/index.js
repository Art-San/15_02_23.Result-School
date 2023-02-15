// // // Ссылка на урок
// https://www.youtube.com/watch?v=wWYokY0Pt2M

function calcValues(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}

const rezalt = calcValues(42, 10)
// const sum1 = rezalt[0]
// const sub1 = rezalt[1]
// console.log(sum1, sub1)          // 52 32

// const [a, c]= calcValues(42, 10)
// console.log('a:', a,'c:', c)     // a: 52 c: 32

const [a, b = 'Вычитания нет', c, ...other]= calcValues(42, 10)
console.log(a, b, c, other)                   // 52 'Вычитания нет' 420 [4.2]

// Object

const person = {
    name: 'Max',
    age: undefined,
    adres: {
        city: 'Moscow',
        country: 'Rossia'
    }
}

// const {name, age, adres} = person
// console.log(name, age, adres)       // Max 20 {city: 'Moscow', country: 'Rossia'}

// const {name, age, car = 'машины нет', ...adres} = person
// console.log(name, age, car, adres)         // Max 20 машины нет {adres: {…}}

// const {name: firstName, age, car = 'машины нет', ...adres} = person
// console.log(name, age, car, adres)         // 20 машины нет {adres: {…}}
// console.log(firstName, age, car, adres)    // Max 20 машины нет {adres: {…}}


const {
    name: firstName,
    age,
    car = 'машины нет',
    adres: {city: homeTown, country} // деструктуризация объекта в объекте
} = person

console.log(firstName, age, car, homeTown, country) // Max 20 машины нет Moscow Rossia

// приминение на практике
function logPerson({ name: firstName, age = 30 }) {
    // console.log(per.name + '&' + per.age) // до применения диструкторизации
    console.log(firstName + ' ' + age)
}

logPerson(person)

