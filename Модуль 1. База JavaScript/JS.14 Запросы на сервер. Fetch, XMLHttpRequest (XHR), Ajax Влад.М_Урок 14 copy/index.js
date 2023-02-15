// // // Ссылка на урок
// https://www.youtube.com/watch?v=eKCD9djJQKc

// GET - получение
// POST - создание
// PUT - для полного обновления элимента
// PATCH - для частичного обнов элемента
// DELETE - 

// ========================= GET
const requestURL1 = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(metod, url, body = null) {  // fetch() возвращает промис
  return fetch(url).then(response => {
    return response.json()
    // return response.text()
  })
}

// sendRequest('GET', requestURL1)
//     .then(users => console.log(users))
//     .catch(err => console.error(err))



// ========================= POST
const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

  return fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) {
        return response.json()
    }
    
    return response.json().then(error => {              // обработка ОШИБКИ
        const e = new Error('Что-то пошло не так')
        e.data = error
        throw e
    })
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