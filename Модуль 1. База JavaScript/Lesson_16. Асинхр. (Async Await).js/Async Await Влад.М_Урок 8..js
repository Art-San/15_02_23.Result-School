// ссылка на урок
// https://www.youtube.com/watch?v=SHiUyM_fFME&t=35s
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';


const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

// delay(2000).then(() => console.log('2 sec'))

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log("fetch todo started")
//    return delay(2000)
//     .then(() => fetch(TODOS_URL))
//     .then(response => response.json())
// }

// fetchTodos()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(e => console.error(e))

async function fetchAsyncTodos() {
    console.log("fetch todo started")
    try {
        await delay(2000)
        const response = await fetch(TODOS_URL)
        const data = await response.json()
        console.error('Data:', data)
    } catch (error) {
        console.error(error)
    }
    
        
   
}

fetchAsyncTodos()