// https://www.cyberforum.ru/javascript-beginners/thread2867971.html

// GET - получение данных
// POST - для отправки данных
// DELETE - удаление

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
 
// ********************************************************************
// *
// *     
// *
// *
// ********************************************************************

// const getAllUsers = () => {
//     const result =fetch(USERS_URL, {
//         method: 'GET',
//     });
//     console.log('result', result);
    
//     result
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('щшибка запроса');
//             }
//             return response.json();
//         })
//         .then((users) => {
//             console.log('users', users)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
// }

// getAllUsers()





const createUsersElement = (text) => {
    const usersElement = document.createElement('li');
    const usersElementTegA = document.createElement('a');
    // usersElementAnchor.href = '#';
    usersElementTegA.textContent = text;
    usersElement.append(usersElementTegA);

    return usersElement;
}

// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden');
//     } else {
//         loaderHTML.setAttribute('hidden', '')
//     }
// };



const dataContainer = document.querySelector('#data-container');

const getAllUsers = () => {
    // toggleLoader();
    const result = fetch(USERS_URL, {
        method: 'GET',
    })
    console.log('result', result);
    
    result
        .then((response) => {
            // console.log('response', response)
            if (!response.ok) {
                throw new Error('Ошибка ззапроса');
            }
            return response.json();
        })
        .then((users) => {
            console.log('users', users);
            users.forEach((user) => {
                const userEmail = createUsersElement(user.name);
                console.log('userEmail', userEmail)
                dataContainer.prepend(userEmail)
            })
            
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(() => {
            // toggleLoader();
        });

}

getAllUsers()
















// const TODOS_URL = 'https://jsonplaceholder.typicode.com/users';

// const createTodoElement = (text) => {
//     const todoElement = document.createElement('li');  // вроде как создали тег ЛИ
//     const todoElementAnchor = document.createElement('a');
//     todoElementAnchor.href = '#';
//     todoElementAnchor.textContent = text;
//     todoElement.append(todoElementAnchor);
    
//     return todoElement;
// }

// const toggleLoader = () => {
//     const loaderHTML = document.querySelector('#loader');
//     const isHidden = loaderHTML.hasAttribute('hidden');
//     if (isHidden) {
//         loaderHTML.removeAttribute('hidden');
//     } else {
//         loaderHTML.setAttribute('hidden', '');
//     }
// }


// const dataContainer = document.querySelector('#data-container');

// const getAllTodos = () => {
//     toggleLoader();
//     const result = fetch(TODOS_URL, {
//         method: 'GET',
//     });
    
//     console.log('result', result);
    
//     result
//         .then((response) => {
//             console.log('response', response);   
//             if (!response.ok) {
//                 throw new Error('Ошибка запроса');
//             }
//             return response.json();               //   ДЕКОДИРОВАТЬ
    
//         })
//         .then((todos) => {
//             console.log('todos', todos);
//             todos.forEach((todo) => {
//                 const todoHTML = createTodoElement(todo.name);
//                 dataContainer.append(todoHTML);
//             })
//         })
//         .catch((error) => {
//             console.log('error', error);
//         })
//         .finally(() => {
//             toggleLoader()
//         })

// };


// getAllTodos()