function createIncrement() {
    let count = 0
    function increment() {
        count++
    }
    let messeage = `Count is ${count}`
    function log() {
        console.log(messeage)
    }

    return [increment, log]
}
const [increment, log] = createIncrement()

increment() // 0
increment() // 1
increment() // 2
log() // 0

//=======================================================
Первым делом создается глобальное лексическое окружение 
1. глобальное (лекс, окруж)
ссылка: -> null
переменные: {
    createIncrement: function
}

Переходим на строку 13 происходит вызов createIncrement() 
попадаем внутрь функции создается лексическое окружение 
для этой функции добавляються (ссылка на, и переменые: count, increment, messeage, log)

2. createIncrement 
ссылка: -> глобальное л.о
переменные: {
    count: 0,
    increment: function,
    messeage: Count is ${0}
    log: function
}

// После чего мы возвращаем [increment, log] ввиде массива
// и также их сохраняем const [increment, log] этот способ называется диструкторизация

Переходим на 15 строчку вызываем функцию increment()
мы поподаем на 4ю строку создается лексическое окружение

3. increment
ссылка: -> на createIncrement
переменные: {
    не находитсдесь count и идет по ссылке вверх
}

2. createIncrement 
ссылка: -> глобальное л.о
переменные: {
    // count: 0, // добавляем 1 и завершаем выполнение 
    count: 1
    increment: function,
    messeage: Count is ${0}
    log: function
}

Переходим на 16 строчку вызываем функцию increment()

4. increment
ссылка: -> на createIncrement
переменные: {
    не находитсдесь count и идет по ссылке вверх
    // count: 0 
}

2. createIncrement 
ссылка: -> глобальное л.о
переменные: {
    // count: 1, // добавляем 1 и завершаем выполнение 
    count: 2
    increment: function,
    messeage: Count is ${0}
    log: function
}

Переходим на 17 строчку вызываем функцию increment()
5. increment
ссылка: -> на createIncrement
переменные: {
    не находитсдесь count и идет по ссылке вверх
    // count: 0 
}

2. createIncrement 
ссылка: -> глобальное л.о
переменные: {
    // count: 2, // добавляем 1 и завершаем выполнение 
    count: 3
    increment: function,
    messeage: Count is ${0}
    log: function
}

Переходим на 18 строчку вызываем функцию log()
попадаем на 8ю строку console.log(messeage)
Создается еще одно новое лексическое окружение 

6. log()
ссылка: -> на createIncrement
переменные: {
    нет переменых // а мы пытаемся получитьдоступ к переменой messeage, 
    // идем по ссылке в createIncrement, тм
}

2. createIncrement 
ссылка: -> глобальное л.о
переменные: {
    count: 3
    increment: function,
    messeage: Count is ${0} // находим  со значением НОЛЬ (0) 
    ноль потому что когда переменная messeage была создона count был = 0
    log: function
}

Чтоб получать актуальные данные нужно переменную messeage перенести в функциию log
b теперь когда будет вызавтся log messeage бкдет создаваться заново, 
будет производится поиск переменой count и она будет находится 
в родительском лексическом окружение (даные будут братся актуальные) 
================================================================================
function createIncrement() {
    let count = 0
    function increment() {
        count++
    }
    
    function log() {
        let messeage = `Count is ${count}`
        console.log(messeage)
    }
    return [increment, log]
}

const [increment, log] = createIncrement()

increment() // 0
increment() // 1
increment() // 2
log() // 2 

2. createIncrement 
ссылка: -> глобальное л.о
переменные: {
    count: 0,
    increment: function,
    log: function
}