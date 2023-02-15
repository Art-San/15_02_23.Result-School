// Для того чтобы не зависеть от конкретной реализации 
// логирования ошибок, мы создадим переиспользуемый сервис. 
// Благодаря такому подходу, если нам нужна будет другая 
// реализация, то мы сможем просто её заменить. 

// Создаём папку src/services и там файл logger.js:

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

// Инициализация логгера
function init() {
    Sentry.init({
        dsn: "https://546be531c00e41b6b7b6c0b98ee7e74b@o4503925366784000.ingest.sentry.io/4503925374844928",
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0
    });
}

// Функция для логирования
function log(error) {
    Sentry.captureException(error);
}

export const logger = {
    init,
    log
};

// Теперь вместо инициализации Sentry вызываем 
// logger.init() в index.js:


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { logger } from './services/logger'
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

logger.init()

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);

// И меняем в request.js вызов метода 
// у Sentry на вызов logger.log():

import axios from "axios";
import { logger } from "../services/logger";

export const request = axios.create({
    baseURL: "https://63325179a54a0e83d24f09e2.mockapi.io/api/v1"
});

request.interceptors.response.use(
    (res) => res,
    function (error) {
        // const isExpectedError =
        //     error.response &&
        //     error.response.status >= 400 &&
        //     error.response.status < 500;

        // if (!isExpectedError) {
        //     logger.log(error);
        //     alert("Неожиданная ошибка");
        // }
        logger.log(error);

        return Promise.reject(error);
    }
);

// Вызываем ошибку и видим обновление в кабинете Sentry: