// https://vladilen.ru/pl/teach/control/lesson/view?id=244697058

const idPhoto = [60, 12, 55];
const PHOTO_URL = 'https://jsonplaceholder.typicode.com/photos/';

const createPhotoElement = (text) => {
    const photoElement = document.createElement('li');
    photoElement.className = 'photo-item';

    const photoElementTegImg = document.createElement('img');
    photoElementTegImg.className = 'photo-item__image';
    
    const photoElementTitle = document.createElement('h3');
    photoElementTitle.classList = 'photo-item__title'
    photoElementTitle.textContent = text;

    photoElement.append(photoElementTegImg);
    photoElement.append(photoElementTitle)

    return createPhotoElement
}

const dataContainer = document.querySelector('#data-container')

const availablePhoto = () => {
    const result1 = fetch(PHOTO_URL + idPhoto[2], {
        method: 'GET',
    })
    console.log('result', result1)
    
    result1
        .then((response) => {
            console.log('response', response)
            if (!response.ok) {
                throw new Error('Ошибка запроса')
            }
            return response.json();
        })
        .then((photo) => {
            console.log('photo', photo);
            const photoHTML = photo.title
            console.log('photoHTML',photoHTML)
            dataContainer.append(photoHTML);
        })
        .catch((error) => {
            console.log('error', error)
        })
    }

availablePhoto()


















// const promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise1');
//     }, 500);
// });

// const promise2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('promise2');
//     }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promise3');
//     }, 1000);
// });




// Promise.race([promise1, promise2, promise3])
//     .then((result) => {
//         console.log('result', result);
//     })
//     .catch((error) => {
//         console.log('error', error);
//     });