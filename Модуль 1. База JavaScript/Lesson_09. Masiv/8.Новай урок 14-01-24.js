// https://www.youtube.com/watch?v=CqS-SdfvG2w

const animals = [
  { name: 'sharik', type: 'dog', age: 1 },
  { name: 'milka', type: 'cat', age: 3 },
  { name: 'funtik', type: 'dog', age: 5 },
  { name: 'belka', type: 'cat', age: 2 }
]

// with создает новый массив. по индексу можно изменить элемент массива
const newArray = animals.with(-1, { name: 'Milka' }) // -1 последний элемент массива
console.log('newArray', newArray)

// at по индексу возвращает элемент массива
const element = animals.at(1)
const element1 = animals.at(-1) // -1 последний элемент массива

console.log('element', element) // {name: 'milka', type: 'cat', age: 3}

// Object.groupBy   группирует животных по типу
const a = Object.groupBy(animals, (pet) => pet.type)

console.log('a', a)

// не досмотрел даже до половины 7:16, потом надо досмотреть
