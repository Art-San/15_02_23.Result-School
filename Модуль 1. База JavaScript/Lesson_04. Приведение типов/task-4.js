// 1. NaN
console.log(Number(' 1 2 3 4 5')); // +
// 2. NaN
console.log(Number('1234 5')); // +
// 3. 12345 число
console.log(Number('12345')); // +
// 4. 
console.log(String(false)); // - возврашае false
// 5. false
console.log(Boolean(0000000)); // +
// 6. true
console.log(Boolean(0.0000001)); // +
// 7. пусто
console.log(String(undefined)); // - возвращае undefined
// 8. NaN
console.log(Number('100f')); // +
// 9. 100 число
console.log(Number('100')); // +
// 10. NaN 
console.log(Number('000001')); // - возвращает число 1

// где стоят + это ответил праввильно
// где стоит - ответил не правильно