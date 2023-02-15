// // // Ссылка на урок
// https://www.youtube.com/watch?v=np08WdS9OXg&t=9s

// const delay = (ms) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })

// }

// const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos() {
//     console.log('Fetch todo start')
//    return delay(2000)
//     .then(() => fetch(url))             // чуть сократили код
//     .then(response => response.json())
// }

// // function fetchTodos() {
// //     console.log('Fetch todo start')
// //    return delay(2000)
// //     .then(() => {
// //        return fetch(url)
// //     })
// //     .then(response => response.json())
// // }

// fetchTodos()
// .then((data) => {
//     console.log('Data', data)
// })
// .catch((err) => {
//     console.log(err)
// })


//========================== async await
// const delay = (ms) => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })

// }


// const url = 'https://jsonplaceholder.typicode.com/todos'

// async function frtchAsyncTodos() {
//     console.log('Fetch todo start')
//     await delay(2000)
//    const response = await fetch(url)
//    const data = await response.json()
//    console.log('Data', data)
// }

// frtchAsyncTodos()

//========================== async await try catch

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })

}


const url = 'https://jsonplaceholder.typicode.com/todos'

async function frtchAsyncTodos() {
    console.log('Fetch todo start')
    await delay(2000)
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data', data)
    } catch (error) {
       console.error('error', error)
    } finally {
        console.log('finally')
    }
    
   
}

frtchAsyncTodos()