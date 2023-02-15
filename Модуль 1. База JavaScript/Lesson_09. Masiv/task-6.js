https://www.cyberforum.ru/javascript-beginners/thread2861932.html

const numbers = [10, 4, 100, -5, 54, 2];


{
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i] ** 3;
    } 
    console.log('for', sum); 
}


{
    let sum = 0;
    for (let num of numbers)
        sum += num ** 3;
    console.log('for of', sum);
} 


{
    let sum = 0;
    numbers.forEach(number => {
        sum += number ** 3;
    });
    console.log('forEach', sum);
}

{
    const sum = numbers.reduce((acc, salary) => {
        return acc + salary ** 3;
    }, 0) 
    console.log('reduce', sum) 
}



// const salariesOfDeveloper = [400, 2000, 500, 600,350];

// const sum = salariesOfDeveloper.reduce((acc, salary, index, array) => {
//     // console.log('acc/salary', acc, salary);
//     return acc + salary;
// }, 0)
// console.log('sum', sum)         