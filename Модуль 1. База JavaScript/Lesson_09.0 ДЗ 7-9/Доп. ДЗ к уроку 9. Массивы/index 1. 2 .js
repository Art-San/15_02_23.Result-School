//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'ваш друг - владелец любительского футбольного клуба'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const goals = [8, 1, 1, 3, 2, -1, 5];

let maxNumberOfGoals = goals[0];
let maxNumberOfGoalsIndex = 0;

let minNumberOfGoals = goals[0];

goals.forEach((salary, index) => {
  if (salary > maxNumberOfGoals) {
    maxNumberOfGoals = salary
    maxNumberOfGoalsIndex = index
  }
  if (salary < minNumberOfGoals && salary >= 0) {
    minNumberOfGoals = salary
  }
})

console.log(`Самый результативный матч был под номером ${maxNumberOfGoalsIndex + 1}. В нем было забито ${maxNumberOfGoals} гол(ов).`);


const nonScoringMatchNumbers = goals
.map((salary, index) => {
  // salary === minNumberOfGoals ? index + 1 : -1
  if (salary === minNumberOfGoals) {
    return index + 1
  } 
})
// .filter(Boolean)
.filter((salary) => salary > 0)
.join(', ')

console.log(`Самые не результативные матчи были под номерами ${nonScoringMatchNumbers}. В каждом из них было забито по ${minNumberOfGoals} мячу(а)`)

const sumGols = goals.reduce((acc, salary) => {
  return salary >= 0 ? acc + salary : acc
}, 0)

console.log(`Общее количество голов за сезон равно ${sumGols}`)

// const filterSalaries = goals.filter((salary) => salary < 0)
// filterSalaries[0] < 0
//   ? console.log('Были автоматические поражения: да') 
//   : console.log('Были автоматические поражения: нет')
const filterSalaries = goals.some((salary) => salary < 0)
filterSalaries
  ? console.log('Были автоматические поражения: да')
  : console.log('Были автоматические поражения: нет')

const averages = sumGols / goals.length
console.log(`Среднее количество голов за матч равно ${averages}`)


const ascendingOrderGoals = goals.sort((a, b) => a - b)  //  [-1, 1, 1, 2, 3, 5, 8]
// const ascendingOrderGoals = [...goals].sort((a, b) => b - a);  // [8, 5, 3, 2, 1, 1, -1]


console.log(ascendingOrderGoals.join(', '))         



// console.log('maxNumberOfGoals', maxNumberOfGoals)
// console.log('maxNumberOfGoalsIndex', maxNumberOfGoalsIndex)
// console.log('minNumberOfGoals', minNumberOfGoals)
// console.log('nonScoringMatchNumbers', nonScoringMatchNumbers)
// console.log('sumGols', sumGols)
// console.log('filterSalaries', filterSalaries)
// console.log('ascendingOrderGoals', ascendingOrderGoals)



// const updatedSalaries = salariesOfDeveloper.map((salary, index, array) => {
//   return salary * 2;                                                         //[800, 1000, 1200, 4000, 700]
// });

// const sum = salariesOfDeveloper.reduce((acc, salary, index, array) => {
//   console.log('acc/salary', acc, salary);
//   return acc + salary;
// }, 0)
// console.log('sum', sum)                                 // сумма элементов массива





   
    
    






