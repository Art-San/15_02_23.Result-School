//      https://www.cyberforum.ru/javascript-beginners/thread2861874.html

function getSumOfSequence(number) {
    const arr = [];
    // console.log('arr []', arr)
    for (let i = 0; i <= number; i += 1) {
      arr.push(i);
      // console.log('arr', arr)
    }
    return arr[1] + arr[number];
    
}

console.log('getSumOfSequence', getSumOfSequence(5));



// const getSumOfSequence = (number) => 1 + number;

// console.log('getSumOfSequence', getSumOfSequence)
// console.log(getSumOfSequence(5));