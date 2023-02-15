
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
// const usersIds = [5, 6, 2, 1];
const dataContainer = document.querySelector('#data-container')


const createUsersElement = (text) => {
    const usersElement = document.createElement('li');
    const usersElementTegA = document.createElement('a');
    usersElementTegA.textContent = text;
    usersElement.append(usersElementTegA);

    return usersElement;
}

const toggleLoader = () => {
    const loaderHTML = document.querySelector('#loader');
    const isHidden = loaderHTML.hasAttribute('hidden');
    if (isHidden) {
        loaderHTML.removeAttribute('hidden');
    } else {
        loaderHTML.setAttribute('hidden', '')
    }
};


const getUsersByIds = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`));
    Promise.all(requests)
        .then((responses) => {
            const dataResults = responses.map((response) => response.json());
            return Promise.all(dataResults);
        })
        .then((users) => {
            console.log('users', users);
            users.forEach((user) => {
                const userHTML = createUsersElement(user.name);
                dataContainer.append(userHTML)
            });
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            toggleLoader();
        });

};



getUsersByIds([5, 6, 2, 1]);


// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// getTodosByIds([43, 21, 55, 100, 10]);