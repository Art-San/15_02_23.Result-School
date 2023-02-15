//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'Функция getSumOfSequence() должна возвращать сумму первого и последнего элементов итогового массива.'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`

// ====================================================================
//             правильное решение
// =================================================================
const getSumOfSequence = (number) => {
    const finalArray = [];
        for (let i = 1; i <= number; i += 1) {
        finalArray.push(i);
        }

        return finalArray[0] + finalArray[finalArray.length - 1];
        };

    const result = getSumOfSequence(10);
    console.log("result", result);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//        моё решение
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function getSumOfSequence(num) {
    const array = []
    for (let i = 1; i <= num; i++) {
        array.push(i)
        console.log('array', array)
    }
    return array.shift() + array.pop()
}




console.log(getSumOfSequence(5)); // 6 ([1, 2, 3, 4, 5], 1+5=6)
console.log(getSumOfSequence(9))



