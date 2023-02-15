// Иногда нам требуется отключать возможность нажать кнопку отправки формы. 
// Для того чтобы это сделать, нам нужно добавить кнопке атрибут disabled. 
// В нашем случае, мы можем добавлять его в зависимости от того, 
// есть ли у нас ошибки или нет:

import React, { useState, useEffect } from "react"
import TextField from "./textField"
import { validate } from "../utils/validator"
import { validationSchema } from "./validationSchema"

const MyForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: ""
    })

    const [errors, setErrors] = useState({})

    /**
     * Object.keys() вернёт массив ключей объекта с ошибками.
     * Если длина этого массива равна 0, то ошибок нет
     */
    const isValid = Object.keys(errors).length === 0

    useEffect(() => {
        const errors = validate(values, validationSchema)
        setErrors(errors)
    }, [values])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            // отправляем только если валидно
            console.log("Отправлено!")
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const { email, link, description } = values

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

                <button disabled={!isValid} type="submit">
                    Отправить
                </button>
            </form>
        </div>
    );
};
    
export default MyForm