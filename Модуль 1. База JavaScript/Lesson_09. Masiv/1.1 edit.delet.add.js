//----------- добавить

const sumi = [40, 55, 20, 30, 60];

// ------------  push
// МЕТОД "PUSH" ДОБОВЛЯЕТ В КОНЕЦ МАССИВА, ТАКЖЕ МОЖНО ДОБАВЛЯТЬ НЕСКОЛЬКО ЗНАЧЕНИЙ
const newSum = 5000;
sumi.push(newSum);             
// console.log('sumi', sumi)     

// -----------  unshift
// МЕТОД "UNSHIFT" ДОБОВЛЯЕТ В начало МАССИВА, ТАКЖЕ МОЖНО ДОБАВЛЯТЬ НЕСКОЛЬКО ЗНАЧЕНИЙ
sumi.unshift(100, 102, 104);    
// console.log('sumi', sumi);      // 


// ----------------  УДАЛЕНИЕ
// const firstRemoveElement = sumi.shift();   // а ТАКЖЕ ВОЗВРАЩАЕТ УДАЛЕННЫЙ ЭЛЕМЕНТ

// sumi.shift();                              //  МЕТОД "SHIFT" УДАЛЯЕТ ПЕРВОЕ ЗНАЧЕНИЕ

// const lastRemovedElement = sumi.pop();     // МЕТОД "POP" УДАЛЯЕТ ПОСЛЕДНИЕ И ВОЗВРАЩАЕТ

// console.log('firstRemoveElement', firstRemoveElement);
// console.log('sumi', sumi);
// console.log('lastRemovedElement', lastRemovedElement);

//------------------ изменение элементов массива

sumi[2] = 7000;
sumi[4] = 10000;
console.log('sumi', sumi)
