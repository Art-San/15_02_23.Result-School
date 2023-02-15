// // // Ссылка на урок
// https://www.youtube.com/watch?v=1idOY3C1gYU&t=1s

console.log('Request data...')
// ====================================================================
// setTimeout(() => {
// console.log('Preparing data...')

// const becendData = {
//     server: 'aws',
//     port: 2000,
//     status: 'working'
// }

// setTimeout(() => {
//     becendData.modifaed = true
// console.log('Data recived:', becendData)
//     }, 2000)
// }, 2000)

//====================================================================

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data...')

        const becendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(becendData)
    }, 2000)
})

p.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifaed = true
            resolve(data)
        }, 2000)
    })
})
.then(clientData => {
    console.log('Data recived:', clientData)
    clientData.fromPromis = true
    return clientData
}).then(data => {
    console.log('Modified', data)
})
.catch(err => console.error('Error', err))
.finally(() => console.log('Finaly'))
//-------------------------------------------------------------------
// // p.then((data) => {
// //     const p2 = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             data.modifaed = true
// //             resolve(data)
// //         }, 2000)
// //     })
// //     p2.then(clientData => {
// //         console.log('Data recived:', clientData)
// //     })
// // })
//====================================================================


//====================== еще пример ===================================

const slip = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })

}

// slip(2000).then(() => console.log('After 2 sec'))
// slip(3000).then(() => console.log('After 3 sec'))
// slip(4000).then(() => console.log('After 4 sec'))

Promise.all([slip(2000), slip(4000), slip(6000)]).then(() => {
    console.log('All promises')
})

Promise.race([slip(2000), slip(4000), slip(6000)]).then(() => {
    console.log('All promises')
}) // rase скорость