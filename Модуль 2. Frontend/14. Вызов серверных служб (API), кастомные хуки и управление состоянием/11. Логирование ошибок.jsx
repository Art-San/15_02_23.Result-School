// Как мы помним, неожиданные ошибки у нас могут возникать 
// из-за некорректной работы сервера. Поэтому логировать 
// ошибки на нём — плохое решение. Есть готовые решения специально 
// для этих целей, и мы познакомимся с одним из таких решений — sentry.io. 

// Для разработки этот сервис бесплатный. 
// На нем нужно зарегистрироваться и выбрать бесплатный тариф. 
// После установки предложат создать проект, нам нужен React:

// Далее нужно установить нужные зависимости в проект:

// Далее на странице будет показано, как запустить Sentry внутри проекта:

// Этот код нужно добавить в файл index.js:


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

Sentry.init({
    dsn: "YOUR_URL",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);


// Далее нам нужно сделать умышленную ошибку, 
// чтобы проинициализировать проект. Там же есть пример с кнопкой, 
// которая вызывает несуществующий метод. Добавляем кнопку 
// и нажимаем сохранить. После того, как увидим ошибку, 
// нажимаем кнопку в интерфейсе Sentry:

// Когда мы инициализировали наш проект, можем приступить к логированию ошибок. 

// Переходим в reques.js и добавляем необходимый код:

import axios from "axios";
import * as Sentry from "@sentry/react";

export const request = axios.create({
    baseURL: "https://63325179a54a0e83d24f09e2.mockapi.io/api/v1"
});

request.interceptors.response.use(
    (res) => res,
    function (error) {
        const isExpectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!isExpectedError) {
            Sentry.captureException(error);
            alert("Неожиданная ошибка");
        }

        return Promise.reject(error);
    }
);

// Используем метод captureException(), в который передаём ошибку. 
// Для теста мы уберём проверку на ожидаемую ошибку 
// и попытаемся отправить форму на несуществующий адрес:

// В списке появилась ошибка. Внутри будет много информации о том, где и как возникла ошибка:

// Эти данные помогут тебе разобраться с причинами возникновения ошибки и понять, 
// в какой части приложения они возникают.