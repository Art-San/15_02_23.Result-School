// код растет в право, становится не читабельным
// придумали Async Await

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';


fetch(USERS_URL)
    .then((response) => response.json())
    .then((users) => {
        console.log('users', users);
        const firstUserId = users[0]?.id;
        console.log('firstUserId', firstUserId)
        fetch(`${TODOS_URL}?userId=${firstUserId}`)
            .then((response) => response.json())
            .then((todos) => {
                console.log('todos', todos);
            })
            .catch((error) => {
                console.log('error', error)
            })
    })
    .catch((error) => {
        console.log('error', error);
    })