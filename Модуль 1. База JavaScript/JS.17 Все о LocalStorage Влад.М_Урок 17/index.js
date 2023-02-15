// // // Ссылка на урок
// https://www.youtube.com/watch?v=3-bZ7gLVSzo

const myNumber = 42

//====================== Основа =======================================
// // removeItem - удаление 
// localStorage.removeItem('number') // removeItem - удаляет определенный ключ

// // getItem - получить
// console.log('UP', localStorage.getItem('number')) 

// // setItem - записать
// // localStorage.setItem('number', myNumber.toString())  // нужно исползовать тустринг (localStorage работает со строками)
// localStorage.setItem('number', String(myNumber))
// console.log(localStorage.getItem('number'))

// // clear - очистка всего localStorage
// localStorage.clear()
// =========================================================================

const object = {
    name: 'Max',
    age: 22
}
// console.log(object.toString()) // объект к строке то получим [object Object]
localStorage.setItem('person', object) // получим 	[object Object] // так как работае со строками

// Решаем с помощью JSON у него есть 
// console.log(JSON.stringify(object))  // полйчим строку {"name":"Max","age":22}

const str = JSON.stringify(object)

// console.log(JSON.parse(str))        // получим обратно объект {name: 'Max', age: 22}
//---------------------------------------------------------------------------------

localStorage.setItem('person2', JSON.stringify(object))

const raw = JSON.parse(localStorage.getItem('person2'))
raw.age = 42

// console.log('raw', raw)

// ====================== Еще особености синхронизация localStorage если открыты разные вкладки

window.addEventListener('storage', event => {
    console.log('event', event)
})

localStorage отличается от куки

1. На много хранит информации БОЛЬШЕ (5МБ)
2. КУКИ улетают с запросами на сервер