const array1 = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array2 = [false, -2, -1, 0, 1, 2, 3, 4, 5, 6];

// Your code here...

const finalArray1 = array1.concat();
const finalArray2 = array2.concat();

function reverseByCondition (a) {
    if (a[0] === true) {
        a.shift() && a.reverse()
    } else {a.shift()}
};

reverseByCondition(finalArray1);
reverseByCondition(finalArray2);

console.log('array1', array1); // [true, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('array2', array2); // [false, -2, -1, 0, 1, 2, 3, 4, 5, 6]

console.log("finalArray1", finalArray1); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log('finalArray2', finalArray2); // [-2, -1, 0, 1, 2, 3, 4, 5, 6]



// Правильное решение

const technologies = ["HTML", "CSS", "JavaScript", "React", "Vue"];

const hasJs = technologies.includes("JavaScript");

console.log(hasJs); // true


// Правильное решение
//=================================
// Задание 8
const array3 = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const array4 = [false, -2, -1, 0, 1, 2, 3, 4, 5, 6];

// Для удобства создадим функцию
function prepareArray(array) {
  // Копируем массив
  const newArray = array.concat();
  // Удаляем первый элемент и сохраняем в переменную
  const firstItem = newArray.shift();

  if (firstItem === true) {
    return newArray.reverse();
  }
  return newArray;
}

// Создадим переменные при помощи функции
const finalArray3 = prepareArray(array3);
const finalArray4 = prepareArray(array4);

console.log(array3); // [true, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array4); // [false, -2, -1, 0, 1, 2, 3, 4, 5, 6]

console.log(finalArray3); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(finalArray4); // [-2, -1, 0, 1, 2, 3, 4, 5, 6]