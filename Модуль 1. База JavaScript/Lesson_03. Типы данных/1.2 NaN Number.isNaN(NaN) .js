// Примечание
// Для альтернативной проверки переменной на NaN без использования функции 
// isNaN() можно воспользоваться конструкцией x !== x

var x = NaN

x != x // true
x !== x // true

//-----------------  Number.isNaN()
// Метод Number.isNaN() определяет, является ли переданное значение NaN. 
// Это более надёжная версия оригинальной глобальной функции isNaN().

// Синтаксис
Number.isNaN(value)

// Примеры
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0) // true

// При использовании глобальной функции isNaN() это всё будет true
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// А это всё в любом случае будет false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');




//===================================================
// Функция isNaN() определяет является ли литерал или переменная 
// нечисловым значением (NaN) или нет. При работе с функцией необходимо 
// проявлять осторожность так как она имеет свои особенности. 
// В качестве альтернативы можно использовать метод Number.isNaN() 
// из ECMAScript 6, или дополнительно проверять литерал или переменную на 
// нечисловое значение при помощи typeof.

// Синтаксис
isNaN(значение)

