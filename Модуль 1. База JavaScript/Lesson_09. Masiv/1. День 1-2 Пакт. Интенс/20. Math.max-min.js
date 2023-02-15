// Метод Math.max() возвращает наибольшее из нуля или более чисел.
// Math.max([value1[, value2[, ...]]])

const goals = [8, 1, 1, 3, 2, -1, 5];
let newArr = Math.max(...goals)       // newArr 8


function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
 console.log(getMaxOfArray(goals))

//            max через for
const goals1 = [8, 1, 1, 3, 2, -1, 5];
const maxNumberGoals= maxGoals(goals1)
function maxGoals(goals) {
  let max = goals[0]
  for (let i = 0; i < goals.length; i++) {
      if (goals[i] > max) {
          max = goals[i]
      }
  }
  return max
}


//  Метод Math.min() возвращает наименьшее из нуля или более чисел.
// Math.min([value1[, value2[, ...]]])

const goals2 = [8, 1, 1, 3, 2, -1, 5];
let minGol = Math.min(...goals)
console.log("minGol", minGol)     // -1

//  min через for
const goals3 = [8, 1, 1, 3, 2, -1, 5]
let min = goals3[0]
for (let i = 0; i < goals3.length; i++) {
    if (goals3[i] > 0 && goals3[i] < min) {
        min = goals3[i]
    }
}
console.log('min', min)