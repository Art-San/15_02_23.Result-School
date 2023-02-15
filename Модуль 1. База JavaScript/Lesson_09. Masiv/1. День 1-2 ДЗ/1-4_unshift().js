// Метод unshift() добавляет один или более элементов 
// в начало массива и возвращает новую длину массива.

const name = "Александр"
const name1 = "Евгений"

const names = ['Алексей', 'Артур', 'Владимир'];
names.unshift(name, name1)
names.sort((a, b) => {
    if (a > b) {                                       
        return 1;
    } 
    if (a < b) {                                      
        return -1;
    } 
    return 0;   
 });


console.log(names); 
// ['Александр', 'Алексей', 'Артур', 'Владимир', 'Евгений']

// https://codepen.io/asava1980/pen/bGvjNLR