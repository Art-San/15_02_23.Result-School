// Павел Габов, [10.08.2022 3:16]
// [В ответ на Дмитрий Шацкий]
// по массиву ids пробегаемся методом мап. в функции колбека мы имеем уникальный id. 
// соответственно и потом ретурним в новый массив сборку 
// из peoplesObject (берем по ключу равному id) и добавляем уже вывод id

// Павел Габов, [10.08.2022 3:18]
// [В ответ на Дмитрий Шацкий]
// по ключам к конкретному элементу объекта можно например так обратиться:

// peoplesObject[id]

// а id мы получаем из переборки массива ids

const ids = [15, 1, 20, 5];
const peoplesObject = {
  1: 'Alex',
  5: 'Elena',
  15: 'Igor',
  20: 'Vladilen'
};

// Your code here...

const res = ids.map((item) => {
   return `${peoplesObject[item]} (id: ${item})`

});

console.log("res", res); 

// console.log(peoples); 
// ['Igor (id: 15)', 'Alex (id: 1)', 'Vladilen (id: 20)', 'Elena (id: 5)']