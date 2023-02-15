// Как можем видеть, у нас есть текстовое поле 
// с некоторой повторяющейся вёрсткой. 
// Чтобы ее не дублировать каждый раз, 
// создадим универсальный компонент текстового поля. 
// Скопируем вёрстку, например, с email и вынесем:

import React from "react"

const TextField = () => {
    return (
        <p>
            <label htmlFor="email">Email</label>{' '}
            <input
                value={email}
                onChange={handleChange}
                id="email"
                type="text"
                name="email"
            />
        </p>
    )
}

// export default TextField;

// Теперь подумаем, какие нужны props. Нам нужны name, label, value, 
// onChange обязательно и type необязательно 
// (так как в большинстве случаев у нас будет просто текст; 
// значение type по умолчанию сделаем равным "text"):

import React from "react"
import PropTypes from "prop-types"

const TextField1 = (props) => {
    const { name, label, value, onChange, type } = props
    return (
        <p>
            <label htmlFor={name}>{label}</label>{' '}
            <input
                value={value}
                onChange={onChange}
                id={name}
                type={type}
                name={name}
            />
        </p>
    )
}

TextField.defaultValues = {
    type: "text"
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string
}

// export default TextField

// В идеале id также можно передавать отдельно, 
// чтобы name был уникальным для формы, а id был уникальным для всей страницы.

// Теперь используем наш новый компонент:


import React, { useState } from "react";
import TextField from "./textField";

const MyForm1 = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: ""
    });

    const handleSubmit = () => {
        // do something...
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

// Если мы захотим использовать компонент для пароля, 
// то нужно передать атрибут type="password" в TextField. 