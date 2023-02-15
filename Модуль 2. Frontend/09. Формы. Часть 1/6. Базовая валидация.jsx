// Валидация, в нашем случае – это процесс проверки данных 
// на соответствие требованиям.

// Конечно же, мы стремимся, чтобы наши формы передавили 
// только корректные данные на сервер. 
// Так мы уменьшаем нагрузку на сервер 
// (особенно важно на высоконагруженных сайтах), 
// частично гарантируем правильность предоставления данных и 
// в некоторых случаях экономим время менеджерам, 
// чтобы им не приходилось лишний раз уточнять данные у клиента.

// Валидация в нативном HTML

// В нативном HTML есть некоторые возможности валидации. 
// Примером может послужить проверка наличия значения в поле. 
// Чтобы указать, что поле обязательно для заполнения, 
// нужно добавить для <input> атрибут required:

// Не копируйте, нужно для примера
import React from "react";

const MyForm = () => {
    const handleSubmit = (e) => {
        // do something
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>
                    Email{' '}
                    <input type="email" name="email" required />
                </label>
            </p>
            <p>
                <label>
                    Пароль{' '}
                    <input type="password" name="password" required />
                </label>
            </p>

            <p>
                <button type="submit">Отправить</button>
            </p>
        </form>
    );
};
export default MyForm;
// Если пользователь попробует отправить форму с незаполненными полями, 
// то браузер покажет ошибку у первого незаполненного поля:

// HTML-валидация имеет много возможностей 
// (далее в уроке рассмотрим некоторые), 
// но зачастую в приложениях мы пишем 
// её через JavaScript. На то есть причины:

// JS-валидация позволяет более гибко писать правила для проверки

// Благодаря JS-валидации мы можем удобнее настраивать 
// требуемый текст ошибки и самостоятельно определять, 
// где и как она будет выведена

// Валидация через JavaScript

// У валидации есть несколько подходов, заключающихся в том, 
// в какой момент она срабатывает. Это может быть непосредственно 
// перед отправкой, во время изменения данных или при переключении 
// между полями. У каждого из этих способов есть свои недостатки 
// и преимущества, мы будем использовать комбинированный способ.

// Для начала создадим состояние для хранения ошибок:

// MyForm
const [errors, setErrors] = useState({})

// Теперь приступим к функции для проверки полей – validate(). 
// Начнём с реализации правила, которое говорит, 
// что поле для заполнения обязательно. 
// Для нас это значит, что строка не пустая. 
// Создадим в папке utils файл с правилами валидиции validateRules.js. 
// Напишем первую функцию:

// utils/validateRules.js
export const isRequired = (value) => Boolean(value.trim())

// Теперь реализуем саму функцию validate(). Она будет:

// 1. Принимать наши значения полей
// 2. Проверять, что они не являются пустой строкой
// 3. Возвращать объект с ошибками, если они есть

// В utils/validator.js
import { isRequired } from './validateRules'

export const validate = (values) => {
    // создаём объект с ошибками
    const errors = {}

    // проходим циклом по ключам объекта с данными формы
    for (const name in values) {
        // Проверяем есть ли ошибка
        const hasError = !isRequired(values[name])

        // Если есть ошибка добавляем в объект с ошибками
        // сообщение по ключу
        if (hasError) {
            errors[name] = `Поле ${name} обязательно`
        }
    }

    // Возвращаем объект
    return errors
}

// Теперь можем использовать нашу функцию в компоненте формы. 
// При изменении values мы будем вызывать функцию validate() и получать ошибки:

import React, { useState, useEffect } from "react"
import TextField from "./textField";
import { validate } from "../utils/validator"

const MyForm1 = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: ""
    });

    const [errors, setErrors] = useState({})

    useEffect(() => {
        const errors = validate(values);
        setErrors(errors)
    }, [values])

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const { email, link, description } = values;

    return (
        <div>
            <h2>Отчёт об ошибке</h2>
            {/* Для удобства просмотра */}
            <div>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
            </div>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                />

                <TextField
                    id="link"
                    name="link"
                    label="Ссылка на страницу с ошибкой"
                    value={link}
                    onChange={handleChange}
                />

                <TextField
                    id="description"
                    name="description"
                    label="Описание"
                    value={description}
                    onChange={handleChange}
                />

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};
// export default MyForm;

// Таким образом, мы проверим форму и увидим следующее:

// По мере заполнения формы ошибки будут исчезать: