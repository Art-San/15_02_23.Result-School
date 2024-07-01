// ?? nullish coalescing - нулевое слияние

const profile = {
  role: ''
}

const role1 = profile?.role || 'defaultRole'
// 'defaultRole', так как пустая строка считается ложным значением

const role2 = profile?.role ?? 'defaultRole'
// '', так как пустая строка не является null или undefined

// 1. profile?.role || '':
// Этот вариант вернет пустую строку, если profile?.role
// имеет ложное значение (например, пустую строку, 0, false, null, undefined, и т.д.).

// 2. profile?.role ?? ''
// : Этот вариант вернет пустую строку только если profile?.role равен null или undefined.

// Если ты хочешь обрабатывать только null и undefined, лучше использовать оператор ??.
// Если тебе нужно обрабатывать все ложные значения, включая пустую строку и 0, то оператор || подходит.
