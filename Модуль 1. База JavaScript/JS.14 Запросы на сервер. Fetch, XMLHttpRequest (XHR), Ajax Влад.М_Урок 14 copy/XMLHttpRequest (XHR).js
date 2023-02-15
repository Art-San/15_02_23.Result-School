// // // Ссылка на урок
// https://www.youtube.com/watch?v=eKCD9djJQKc

// GET - получение
// POST - создание
// PUT - для полного обновления элимента
// PATCH - для частичного обнов элемента
// DELETE - 

// const requestURL = 'https://jsonplaceholder.typicode.com/users'

// const xhr = new XMLHttpRequest()

// xhr.open('GET', requestURL)

// xhr.responseType = 'json'

// xhr.onload = () => {
//     // console.log('xhr.response', JSON.parse(xhr.response)) // есть другой вариант он выше = xhr.responseType = 'JSON'
//     if (xhr.status >= 400) {
//         console.error(xhr.response)
//     } else {
//         console.log('xhr.response', xhr.response)
//     }
    
// }

// xhr.onerror = () => {
//     console.log(xhr.response)
// }

// xhr.send() // отправка ГЕТ запроса. xhr.send() Должен быть последним

//======================= Более уневерсальная c Promise
// ===================== GET
const requestURL1 = 'https://jsonplaceholder.typicode.com/users1'

function sendRequest(metod, url) {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(metod, url)

        xhr.responseType = 'json'

        xhr.onload = () => {
        
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send() 
    })
}

// sendRequest('GET', requestURL1)
//     .then(users => console.log('users', users))
//     .catch(err => console.error('catch', err))
//     .finally(console.log('final'))


// ================  POST

const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')   // явно указываем что сейчас отправляем данные в JSONе

        xhr.onload = () => {
        
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.send(JSON.stringify(body)) 
    })
}
const body = {
    name: 'Vladilen',
    age: 26
}

sendRequest('POST', requestURL, body)
    .then(users => console.log('users', users))
    .catch(err => console.error('catch', err))
    .finally(console.log('final'))


