let clientsEstimations = [];
function askClientToGiveEstimation() {
  let points = prompt('Как вы оцениваете нашу кофейню от 1 до 10?');
  points = Number(points);
  clientsEstimations.push(points);
}
for (let i = 0; i <= 4; i += 1) {
   askClientToGiveEstimation();
}

let goodEstimations = 0;
let notGoodEstimations = 0;

clientsEstimations.forEach(number => {
   number <= 5 ? notGoodEstimations ++ : goodEstimations ++;                  
});


// ---------- ЧЕАРЕЗ for
// let goodEstimations = 0;
// let notGoodEstimations = 0;
// for (let i = 0; i < clientsEstimations.length; i += 1) {
//    console.log('clientsEstimations', clientsEstimations[i]);

// if (clientsEstimations[i] <= 5) {
//    notGoodEstimations++;
   
// } else {
//    goodEstimations++;

// }};



alert(`Всего положительных оценок: ${goodEstimations}. Всего отрицательных оценок: ${notGoodEstimations}`);











// ---------- ЧЕАРЕЗ for

// for (let i = 0; i < clientsEstimations.length; i += 1) {
//    console.log('clientsEstimations', clientsEstimations[i]);

// if (clientsEstimations[i] <= 5) {
//    goodEstimations++ ;
// } else {
//    notGoodEstimations++;

// }};

// -----ЧЕРЕЗ forEach

// let goodEstimations = 0;
// let notGoodEstimations = 0;

// let clientsEstimations = [1, 4, 8, 3, 7, 6, 8, 5, 1]

// clientsEstimations.forEach(number => {
//    // number <= 5 ? goodEstimations += number : notGoodEstimations += number; // в консоле 14 и 29 это суммы чисел <=5 и >5
//    number <= 5 ? goodEstimations ++ : notGoodEstimations ++;                  // в консоле 5 и 4 количество чисел <=5 и >5
// })

// console.log('goodEstimations', goodEstimations)
// console.log('notGoodEstimations', notGoodEstimations)

// ---------if else --------
// if (currentTime > closingTime) {
//     console.log ('Магазин закрыт');
// } else {
//     console.log('Ма открыты приходите за покупками');

// --------- push добавить значенине или несколько в конец массива
// const sumi = [40, 55, 20, 30, 60];
// const newSum = 5000;
// sumi.push(newSum); 
// console.log(sumi)

// --------------------------------------------
// function getName1(name = 'Aleks') {
//     return name;
// }
// prompt('Имя равно', getName1());

// ----------заполнить массив данными------------
// const newArray = new Array(3).fill('1');
// console.log(newArray)