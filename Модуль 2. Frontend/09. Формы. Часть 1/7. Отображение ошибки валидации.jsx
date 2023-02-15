// В прошлой части мы научились получать и сохранять ошибки,
// но пока они не выводятся. Сейчас мы это реализуем.

// Так как мы храним ошибки в состоянии, 
// нам не составит труда вывести их. 
// Будем это делать в нашем компоненте TextField:

import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    // Передаём новый проп
    const { name, label, value, onChange, type, error } = props
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
            {error && <p>{error}</p>}
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
    type: PropTypes.string,
    error: PropTypes.string
}

// export default TextField;

// Теперь передадим ошибки в форме для соответствующих полей:

import React, { useState, useEffect } from "react"
import TextField from "./textField";
import { validate } from "../utils/validator"

const MyForm = () => {
    // ...

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
                    error={errors.email}
                />

                <TextField
                    id="link"
                    name="link"
                    label="Ссылка на страницу с ошибкой"
                    value={link}
                    onChange={handleChange}
                    error={errors.link}
                />

                <TextField
                    id="description"
                    name="description"
                    label="Описание"
                    value={description}
                    onChange={handleChange}
                    error={errors.description}
                />

                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}
export default MyForm

// И сейчас у нас будут динамически отображаться ошибки рядом с полями: