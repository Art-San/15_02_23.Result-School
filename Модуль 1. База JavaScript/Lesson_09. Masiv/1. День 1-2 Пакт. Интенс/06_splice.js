//--------------  splice()
// Метод splice() изменяет содержимое массива, 
// удаляя существующие элементы и/или добавляя новые.
// const res = array.splice(2)

const array = [1, 1, 2, 3, 5, 8, 13]

// console.log(array.concat().splice(2))
console.log(array.splice(2, 2, "a", "b", "c", "d" ))




// console.log("res", res)
console.log("array", array)