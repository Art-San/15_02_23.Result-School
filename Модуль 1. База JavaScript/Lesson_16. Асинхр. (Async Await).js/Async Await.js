
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// для обработки ошибок есть  try catch finally

// try {

// } catch(error) {
//     consolele.log('error', error);
// } finally {
//     console.log('finally')
// }


const getTodosWithUserData = async () => {
    try {
        const response = await fetch(USERS_URL);
   console.log('response', response)
   if (!response.ok) {
    throw new Error('Ошибка в получение данных');
   }

   const users = await response.json();
   console.log('users', users)
   
   const firstUserId = users[0]?.id;
   console.log('firstUserId', firstUserId)
   
   const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`);
   if (!todosResponse.ok) {
    throw new Error('Ошибка в получение данных о задачах');
   }
   const todos = await todosResponse.json();
   console.log('todos', todos)
    } catch(error) {
        console.log('error', error);
    } finally {
        console.log('finally');
    }
   

   

};
const promise = getTodosWithUserData();
console.log('promise', promise);