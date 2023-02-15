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


/**
 * TAP-версия загрузки JSON по HTTP
 * @param {RequestInfo} url Строка URL или объект Request
 * @param {RequestInit | undefined} init Объект с опциями к запросу
 * @returns {Promise<any>} Обещание вернуть JSON-объект
 */
 async function fetchJSONAsync(url, init) {
    let response = await fetch(url, init);
    if (response.ok) {
        let json = await response.json();
        return json;
    }
    else
        throw new Error(`${response.status}: ${response.statusText}`);
}
 
const getTodosByIds = ids => {
    const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
    return Promise.all(ids.map(id => fetchJSONAsync(`${TODOS_URL}/${id}`)));
}
 
(async function main() {
    try {
        let allTasks = await getTodosByIds([43, 21, 55, 100, 10]);
        console.log(allTasks);
    } catch (error) {
        console.log(error.message)
    }
})();