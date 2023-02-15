console.log(String(console.log));
// Возвращает function log() { [native code] }
console.log(Number(console.log));
// Возвращает NaN
console.log(Boolean(console.log));
// Возвращает true

console.log(String({ name: 'Maxim' }));
// Возвращает [object Object]
console.log(Number({ name: 'Maxim' }));
// Возвращает NaN
console.log(Boolean({ name: 'Maxim' }));
// Возвращает true

console.log(String(Symbol('key')));
// Возвращает Symbol(key)
// console.log(Number(Symbol('key')))
// Error невозможно преобразовать значение символа в число
console.log(Boolean(Symbol('key')));
// Возвращает true

console.log(String(Number));
// Возвращает function Number() { [native code] }
console.log(Number(Number));
// Возвращает NaN
console.log(Boolean(Number));
// Возвращает true

console.log(String(''));
// Ничего не вывелось
console.log(Number(''));
// Возвращает 0 число
console.log(Boolean(''));
// Возвращает false

console.log(String(0));
// Возвращает 0 - string
console.log(Number(0));
// Возвращает 0 - number
console.log(Boolean(0));
// Возвращает false

console.log(String(-10));
// Возвращает -10 строка
console.log(Number(-10));
// Возвращает -10 число
console.log(Boolean(-10));
// Возвращает true

console.log(String('-105'));
// Возвращает -105 строка
console.log(Number('-105'));
// Возвращает -105 число
console.log(Boolean('-105'));
// Возвращает true


