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
// const message1 = `Самый результативный матч был под номером ${number}. В нем было забито ${numberOfGoals} гол(ов).`

const goals = [8, 1, 1, 3, 2, -1, 5];
let maxGol = Math.max(...goals)
const index = goals.findIndex((salary) => salary === maxGol)
console.log(`Самый результативный матч был под номером ${index + 1}. В нем было забито ${maxGol} гол(ов).`);


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

const searchedIndex = goals1.findIndex((salary) => salary === maxNumberGoals)
console.log(`Самый результативный матч был под номером ${searchedIndex + 1}. В нем было забито ${maxNumberGoals} гол(ов).`);
//=======================================================================================

const goals3 = [8, 1, 1, 3, 2, -1, 5]
let min = goals3[0]
const newArr = []
for (let i = 0; i < goals3.length; i++) {
    if (goals3[i] > 0 && goals3[i] < min) {
        min = goals3[i]
    }
}
for (let i = 0; i < goals3.length; i++) {
    if (goals3[i] === min) {
        newArr.push(i + 1)
    }
}
console.log('min', min)


const strMinGols1= newArr.join(', ')
console.log("minGols1", strMinGols1)
console.log(`Самые не результативные матчи были под номерами ${strMinGols1}. В каждом из них было забито по ${min} мячу(а)`)
//=======================================================================================

const goals4 = [8, 1, 1, 3, 2, -1, 5]
let sum = 0
for (let i = 0; i < goals4.length; i++) {
    if (goals4[i] > 0) {
        sum = sum + goals4[i]
    }
}

console.log(`Общее количество голов за сезон равно ${sum}`)
//=======================================================================================

const goals5 = [8, 1, 1, 3, 2, -1, 5]
let minus 
for (let i = 0; i < goals4.length; i++) {
    if (goals5[i] < 0) {
        minus = goals5[i]
    }
}
if (minus) {
    console.log('Были автоматические поражения: да')
} else {
    console.log('Были автоматические поражения: нет')
}
// console.log('minus', minus)
//=======================================================================================

const goals6 = [8, 1, 1, 3, 2, -1, 5]
let sum1 = 0
for (let i = 0; i < goals6.length; i++) {
    if (goals4[i] > 0) {
        sum1 = sum1 + goals6[i]
    }
}
const srednya = sum1 / goals6.length

console.log(`Среднее количество голов за матч равно ${srednya}`)

const goals7 = [8, 1, 1, 3, 2, -1, 5]
goals7.sort((a, b) => {
    if (a > b) {                                       // если знаки '1->' '2-<' то  ['igor', 'ira', 'lena', 'maks']
        return 1;
    } 
    if (a < b) {                                       // если знаки '1-<' '2->' то  ['maks', 'lena', 'ira', 'igor']
        return -1;
    } 
    return 0;   
 });
 console.log('names', goals7)



   
    
  
    






