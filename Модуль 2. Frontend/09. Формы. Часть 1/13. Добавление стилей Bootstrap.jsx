// Подключим в index.js Bootstrap и добавим в форму обёрточные <div>:

import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validate } from "../utils/validator";
import { validationSchema } from "./validationSchema";

const MyForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: ""
    });

    const [errors, setErrors] = useState({});
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // отправляем только если валидно
            console.log("Отправлено!");
        }
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

// В текстовое поле также добавим стилей. 
// Для работы ошибки нужно, чтобы у <input> появлялся класс is-invalid. 
// Для динамического добавления этого класса напишем функцию:


import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    const { label, name, type, value, onChange, error } = props;

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextField.defaultValues = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default TextField;

Изменив стили, мы получим более аккуратную форму: