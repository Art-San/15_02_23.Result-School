function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 1) {
        alert("number должен быть целым числом и больше нуля!");
        return;
    }
    // Проще перебирать делители от 1 до половины числа
    // (округлим в меньшую сторону),
    // а затем само число считается делителем.
    let half = Math.floor(number / 2), // Точная половина числа
        count = 1; // Само число уже считается делителем
    for (let i = 1; i <= half; i++) {
        if (!(number % i))
            ++count;
    }
 
    return count;
}
 
console.log('getDivisors', getDivisors(-4)); //  = 3  // 1, 2, 4
// console.log(getDivisors(5)); //   = 2  // 1, 5
// console.log(getDivisors(12)); //  = 6  // 1, 2, 3, 4, 6, 12
// console.log(getDivisors(30)); //  = 8  // 1, 2, 3, 5, 6, 10, 15, 30


// отсюда взял https://www.cyberforum.ru/javascript-beginners/thread2861261.html


function getDivisors(number = 1) {
    if (!Number.isInteger(number) || number < 0) {
        alert('number должен быть целым числом и больше нуля!');
    } else {
        let counter = 0;
        for (let i = number; i > 0; i -= 1) {
          const isDivisor = number % i === 0;
          if (isDivisor) {
              counter += 1;
          }
        }
      
        return counter;   
    }
}

const result = getDivisors(10);
console.log('result', result);
