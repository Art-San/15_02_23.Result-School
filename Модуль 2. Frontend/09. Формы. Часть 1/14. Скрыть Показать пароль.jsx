// В этом уроке давай также реализуем поле пароля 
// вместе с возможностью показать/скрыть пароль. 
// Для начала добавим новое состояние и поле:

import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validate } from "../utils/validator";
import { validationSchema } from "./validationSchema";

const MyForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: "",
        password: ""
    });

    // ...

    const { email, link, description, password } = values;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
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

                        <TextField
                            id="password"
                            name="password"
                            label="Пароль"
                            value={password}
                            onChange={handleChange}
                            error={errors.password}
                            type="password"
                        />

                        <button
                            className="btn btn-primary w-100 mx-auto"
                            disabled={!isValid}
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyForm;

// Обрати внимание, что мы также передали компоненту 
// TextField атрибут type="password", 
// чтобы пароль не было видно при вводе.

// Однако наша цель – реализовать возможность показа пароля. 
// Для этого мы можем видоизменить TextField:


import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    const { label, name, type, value, onChange, error } = props;
    // Добавляем состояние показывать/не показывать пароль
    const [showPassword, setShowPassword] = useState(false);

    // Метод для изменения состояния
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    {/* Если пароль показываем, то type === "text" */}
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? "Скрыть" : "Показать"} пароль
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default TextField;

// Чтобы доделать форму до конца, 
// добавим несколько правил валидации пароля:

// utils/validateRuls.js
// export default {
    isRequired: (value) => Boolean(value.trim()),
    isEmail: (value) => /^S+@S+.S+$/g.test(value),
    isUrl: (value) => /^https?://S+$/g.test(value),
    min: (value, length) => value.length >= length,
    // Содержит заглавную букву
    isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
    // Содержит число
    isContainDigit: (value) => /d+/g.test(value)
};

// И опишем схему валидации для поля:

export const validationSchema = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введён некорректно"
        }
    },
	
  // ...
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        },
        isCapitalSymbol: {
            message: "Пароль должен содержать заглавную букву"
        },
        isContainDigit: {
            message: "Пароль должен содержать число"
        },
        min: {
            message: "Пароль должен содержать мимимум 8 символов",
            param: 8
        }
    }
};

// Теперь пароль будет успешно валидироваться.

// Итоговый код конспекта по ссылке