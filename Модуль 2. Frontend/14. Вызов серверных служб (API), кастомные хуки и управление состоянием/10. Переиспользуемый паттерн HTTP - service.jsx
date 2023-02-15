// В прошлых частях мы создали файл src/api/request.js и добавили следующий код:

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

// Это ни что иное, как переиспользуемый http-сервис.
// Его можно использовать везде, где нам нужно общаться с сервером.
// Давай добавим экспорт, чтобы можно было импортировать его туда, куда нам нужно:

export const request = axios.create({
    baseURL: "https://63325179a54a0e83d24f09e2.mockapi.io/api/v1"
});

// Мы можем создавать несколько экземпляров такого сервиса.
// Это может быть полезно, если нам нужно, например, обращаться к другому серверу:

export const sentryRequest = axios.create({
    baseURL: "https://my-sentry.com/api" // другой URL
});

// К нему мы можем добавить свои интерсепторы 
// и назначать любые свойства, доступные для Axios.

// В нашем request.js сейчас есть недостаток — мы не знаем,
// что у нас произошли неожиданные ошибки. Их нужно логировать.
// С этим мы разберёмся в следующей части. 