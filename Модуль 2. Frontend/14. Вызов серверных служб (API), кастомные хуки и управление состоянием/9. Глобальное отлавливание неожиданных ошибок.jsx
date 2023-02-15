// Для того чтобы отлавливать неожиданные ошибки,
// нам нужно перехватывать ответы запросов.
// Для этого в Axios есть так называемые интерсепторы (interceptors).
// С помощью них можно перехватывать как запросы, так и ответы.
// В нашем случае нам нужны только ответы. 

// Использование в общем виде выглядит так:

axios.interceptors.response.use(function (response) {
    /*
     * Любой код состояния, находящийся в диапазоне 2xx, 
     * вызывает срабатывание этой функции.
     * Здесь при необходимости можно что-нибудь сделать с ответом.
     */
    return response;
  }, function (error) {
    /* 
     * Любые коды состояния, выходящие за пределы диапазона 2xx, 
     * вызывают срабатывание этой функции.
     * Здесь при необходимости можно что-нибудь сделать с ошибкой ответа.
     */
    return Promise.reject(error);
  });

//   У axios.interceptors.response вызывается метод use(),
//   в который передаются 2 аргумента. Первым параметром метод принимает функцию,
//   которая отрабатывает удачный ответ сервера. Вторым параметром — функцию,
//   которая срабатывает для кодов ответа >= 300 (подробнее про статусы 3xx).

// Теперь давай используем интерсептор в коде.
// Мы будем применять его к нашему экземпляру Axios:

import axios from "axios";

const request = axios.create({
    baseURL: "https://6343fa74b9ab4243cadc10b7.mockapi.io/api/v1"
});

request.interceptors.response.use(
    (res) => res,
    function (error) {
        const isExpectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!isExpectedError) {
            alert("Неожиданная ошибка");
        }

        return Promise.reject(error);
    }
);

export const createOrder = async (order) =>
    request.post("/orderss", order).then(({ data }) => data);

// Для нашего экземпляра Axios мы добавили интерсептор на ответ.
// Внутри него проверили, является ли ошибка неожиданной, и, если да,
// выводим ошибку пользователю. Теперь внутри handleSubmit()
// нам можно не делать подобные проверки и их можно убрать:

const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
        setLoading(true);
        createOrder(values)
            .then((data) => {
                console.log(data);
            })
            .catch((e) => {
                console.log(e.response);
            })
            .finally(() => setLoading(false));
    }
};