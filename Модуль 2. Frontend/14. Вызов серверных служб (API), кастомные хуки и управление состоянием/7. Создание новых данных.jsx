// Чтобы создавать новые данные в HTTP, есть два метода: POST и PUT.
// Разница между ними минимальная и зависит от того,
// что произойдёт на сервере в момент вызова.
// В большинстве случаев ты встретишь POST,
// поэтому мы будем его использовать в нашем примере. 

// Для знакомства с POST мы воспользуемся кодом из урока про формы.
// Скроем страницу “Отчет об ошибке”, и главную страницу с навигацией,
// оставим только форму “Оформление заказа” (ссылка https://codesandbox.io/s/formy-chast-2-post-forked-4sivbe
// на начальный код). 

// Также создадим mock-server (тестовый сервер) 
// для проверки POST-запросов на сервисе https://mockapi.io/. 
// Для этого необходимо зарегистрироваться и создать новый проект:

// В API Prefix укажем /api/v1. 

// Интерфейс в сервисе очень простой. Создаём ресурс (endpoint),
// имя выберем “orders”, и опишем схему данных:

// Ещё можно описать, что в ответ на каждый запрос будет возвращать сервер.
// В нашем случае на POST-запрос сервер будет просто возвращать статус “ок”:

// Мы представим, что нам нужно отправить данные на сервер.
// Создадим функцию, которая будет принимать наши данные и отправлять на сервер:


// /src/api/request.js
import axios from "axios";

const request = axios.create({
    // Сюда указываем свой тестовый сервер на https://mockapi.io/
    baseURL: "https://6343fa74b9ab4243cadc10b7.mockapi.io/api/v1" 
});

export const createOrder = async (order) =>
    request.post("/orders", order).then(({ data }) => data);

// Обрати внимание, что в методе POST данные передаются иначе, 
// чем в GET. В этом случае мы передаём объект 
// с данными просто второй переменной. 

// После того как мы создали метод, можем воспользоваться им в форме:

// /src/components/order-form/orderForm.jsx
import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import MultiSelect from "../multiSelect";
import CheckboxField from "../checkboxField";
import { validationSchema } from "./validationSchema";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList,
    agreements
} from "./fieldsOpions";
import { parceYupError } from "../../utils/parceYupError";
import { createOrder } from "../../api/request";

const OrderForm = () => {
    // ...

      const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            createOrder(values)
                .then((data) => {
                    console.log(data);
                })
                .catch((e) => alert(e));
        }
    };

   //...

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                { /* ... */ }
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Нам достаточно просто вызвать функцию внутри handleSubmit(),
// если форма валидная. Хорошим тоном в UI ещё будет отображение того,
// что происходит отправка:

const OrderForm = () => {
    // ...

    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            setLoading(true);
            createOrder(values)
                .then((data) => {
                    console.log(data);
                })
                .catch((e) => alert(e))
                .finally(() => setLoading(false));
        }
    };

    // ...

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                {/** ... */}

                {loading && "Отправка..."}

                <button
                    disabled={loading}
                    className="btn btn-primary w-100 mx-auto"
                    type="submit"
                >
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Перед отправкой мы меняем состояние loading на true,
// а в конце меняем loading на false. Менять состояние
// на false обязательно именно во время finally(),
// так как он будет вызван вне зависимости от наличия ошибки 
// и всегда после того как Axios отработает. 

// Теперь мы показываем момент отправки 
// и блокируем на это время кнопку отправить:
// После успешной отправки наш заказ добавляется:

// Ты мог заметить, что пока мы никак не обрабатываем ошибки,
// если они произошли. Действительно, в момент запроса
// у нас могут происходить ошибки. Их можно разделить на ожидаемые
// и неожиданные. Какие ошибки относятся к какому типу,
// мы разберёмся в следующей части.