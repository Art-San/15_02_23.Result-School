// Уроки Javascript #4. Что такое замыкания в JS (простыми словами + 3 примера)
// https://www.youtube.com/watch?v=YaGfHbT9xLY&list=PL0IvLP3GiRnVJ8t1CQOAupH_QF8K8Koho&index=1&t=88s

function createAddress(type) {
    const address = type.toUpperCase()
    return function(name) {
        return `${address} ${name}`
    }
}

const addressGrazhdanin = createAddress('Гражданин')
const addressGrazhdanka = createAddress('Гражданка')

console.log(addressGrazhdanin('Петров'))
console.log(addressGrazhdanka('Сидорова'))

первым делом создается
1. глобальное (лекс, окруж)
ссылка: -> null
переменные: {
    createAddress: function
}
// на  11 строке
2. createAddress №1
ссылка: -> глобальное л.о
переменные: {
    address: 'ГРАЖДАНИН'   
}
1. глобальное (лекс, окруж)
ссылка: -> null
переменные: {
    createAddress: function
    addressGrazhdanin: function
}
// на  12 строке
3. createAddress №2
ссылка: -> глобальное л.о
переменные: {
    address: 'ГРАЖДАНКА'    
}

1. глобальное (лекс, окруж)
ссылка: -> null
переменные: {
    createAddress: function
    addressGrazhdanin: function
    addressGrazhdanka: function
}

// 14 СТРОКА
4. addressGrazhdanin 
ссылка: -> createAddress №1
переменные: {
    name: 'Петров'
    address: по ссылке
}

// 14 СТРОКА
5. addressGrazhdanin 
ссылка: -> createAddress №2
переменные: {
    name: 'Сидорова'
    address: по ссылке
}