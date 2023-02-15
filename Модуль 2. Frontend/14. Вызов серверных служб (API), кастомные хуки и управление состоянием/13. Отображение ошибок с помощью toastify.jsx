// Обрати внимание!

// В курсе используется react-toastify версии 8.1.0, 
// мы рекомендуем также устанавливать эту версию. 
// Установить её можно при помощи команды:

// Для того чтобы наш пользователь понимал, что возникла ошибка,
// нужно как-то его уведомить об этом. Это нужно для удобства пользователя, 
// чтобы он понимал, что в данный момент он не может воспользоваться 
// нужным функционалом. Для реализации отображения ошибок 
// мы воспользуемся библиотекой React-Toastify (ссылка). https://github.com/fkhadra/react-toastify#readme

// Эта библиотека позволяет выводить на экран пользователя ошибку 
// в небольшом окошке. Например отображение ошибки может выглядеть вот так:

// Установим эту библиотеку в наш проект:

npm i react-toastify@8.1.0

// Чтобы воспользоваться данной библиотекой, 
// нужно воспользоваться компонентом ToastContainer. 
// Так как мы можем вызывать отображение ошибки 
// (или другого сообщения) из любой части приложения, 
// нам нужно добавить компонент ToastContainer 
// на самый верхний уровень в компонент App:

import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OrderPage from "./pages/orderPage";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <div className="container mt-4">
            <Switch>
                <Route path="/" exact component={OrderPage} />
            </Switch>
            <ToastContainer />
        </div>
    );
}

// Также выше подключаем стили из библиотеки. 

// Далее нам нужно отобразить ошибку. 
// Перейдём в request.js и воспользуемся методом toast из библиотеки:

import axios from "axios";
import { toast } from "react-toastify";
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
        //     toast(error.message);
        // }
        logger.log(error);
        toast(error.message);

        return Promise.reject(error);
    }
);

// Помним, что закомментировали часть кода, 
// чтобы временно отлавливать любые ошибки. 

// Обрати внимание, что в данном примере мы выводим текст ошибки, 
// который нам вернёт Axios: 

// Далее, чтобы показать пользователю, 
// что это именно ошибка, нам требуется стилизовать наш “тост”. 
// В библиотеке есть несколько уже созданных стилей, их мы и используем:

request.interceptors.response.use(
    (res) => res,
    function (error) {
        // const isExpectedError =
        //     error.response &&
        //     error.response.status >= 400 &&
        //     error.response.status < 500;

        // if (!isExpectedError) {
        //     logger.log(error);
        //     toast(error.message);
        // }
        logger.log(error);
        toast.error(error.message);
        toast.info(error.message);
        toast.success(error.message);

        return Promise.reject(error);
    }
);

// Здесь представлены несколько вариантов:

// Так они, соответственно, выведутся на экране. 
// Сейчас нам не нужны все, мы оставим только ошибку

request.interceptors.response.use(
    (res) => res,
    function (error) {
        // const isExpectedError =
        //     error.response &&
        //     error.response.status >= 400 &&
        //     error.response.status < 500;

        // if (!isExpectedError) {
        //     logger.log(error);
        //     toast.error(error.message);
        // }
        logger.log(error);
        toast.error(error.message);

        return Promise.reject(error);
    }
);

// Как мы уже увидели, с помощью “тостов” можно выводить 
// на экран пользователя не только ошибки, но и другие сообщения. 
// Пользуйся этой библиотекой, если необходимо вывести 
// пользователю уведомление поверх остального контента. 