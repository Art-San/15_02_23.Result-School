// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), 
// возвращая одно результирующее значение.

// const result = array.reduce((acc, salary) => {
//     return acc + salary
// })
// console.log(result)

const numbers = [1, 2, 3, 4, 5]
const suma = numbers.reduce((a, i) => a + i, 0)


const array = [1, 2, 3, 4, 5, 6, 7]

function reduceFn(acc, item) {
    return acc + item
}

const result = array.reduce(reduceFn, 0)

console.log(result)

const result2 = array.reduce((acc, salary, index) => {
    acc.push(salary * salary)
    return acc
}, [])

console.log(result2)

// =====================================================================

const card = [
    {title: 'Apple', price: 49},
    {title: 'banana', price: 149}
]
const total = card.reduce((acc, item) => {
    return acc + item.price
}, 0)

console.log(total)