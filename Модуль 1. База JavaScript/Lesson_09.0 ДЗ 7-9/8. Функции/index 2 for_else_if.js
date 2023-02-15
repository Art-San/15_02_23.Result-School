
// написал по памяти
function getSumOfNumbers(number, type = "odd") {
    let sum = 0
    for (let i = 0; i <= number; i++){
        let addSum = i % 2
        let evenSum = i % 2 === 0
        if (type === "") {
            sum = sum + i
        } else if (addSum && type === "odd") {
            sum = sum + i
        } else if (evenSum && type === "even") {
            sum = sum + i
        }
    }
    return sum 
}


console.log(getSumOfNumbers(10, "odd")); // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, "")); // 55


const isEven1 = 1 % 2 === 0;
console.log("isEven", isEven1)
// % 2 === 0

// от Владилена
const getSumOfNumbers = (number, type = 'odd') => {
    let sum = 0;
    for (let i = 0; i <= number; i += 1) {
        const isEven = i % 2 === 0;
        const isOdd = i % 2
        if (!type) {      // ! поставиль потому что "" ковычки дают false
            sum += i;
        } else if (isEven && type === 'even') {
            sum += i;
        } else if (isOdd && type === 'odd') {
            sum += i;
        }
    }
  
    return sum;
  }

//   console.log(getSumOfNumbers(10, "odd")); // 25
// console.log(getSumOfNumbers(10, "even")); // 30
// console.log(getSumOfNumbers(10, "")); // 55


const isEven = 1 % 2 === 0;
console.log("isEven", isEven)