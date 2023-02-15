

//  ------------ getTime   -----------

const date1 = new Date(2005, 4, 20);
const date2 = new Date(2006, 4, 10);

// количество мс с Января 1 1970


console.log('date1', date1.getTime());
console.log('date1', date2.getTime());

const difference = date2.getTime() - date1.getTime();
console.log('difference', difference / 1000 / 60);

// -------------------------------------------------------------

// ------   Вычисление времени потраченого на выполннение кода


const startTime0 = new Date().getTime(); // аналог следующей записи
const startTime = Date.now();

for (let i = 0; i < 100; i = i + 1) {
    console.log('let i', i );
    // do something
}


const endTime = Date.now();

console.log('endTime-startTime', endTime - startTime);