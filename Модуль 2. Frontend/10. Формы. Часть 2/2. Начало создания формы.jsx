// В этой части мы создадим заготовку 
// для формы оформления заказа. Приступим.

// В папке components создадим папку order-form. 
// В ней будет находиться сам компонент и схема валидации, 
// которую мы добавим позже. Создадим компонент OrderForm , 
// в котором вернём FormLayout и заготовку форм:


// components/order-form/orderForm.jsx
import React from "react"
import FormLayout from "../formLayout"

const OrderForm = () => {
    return (
        <FormLayout title="Оформление заказа">
            <form>
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    )
}

export default OrderForm

// Далее выведем эту форму на странице оформления:

// pages/orderPage.jsx
import React from "react"
import OrderForm from "../components/order-form/orderForm"

const OrderPage = () => {
    return <OrderForm />
};

export default OrderPage

// После этого мы можем видеть нашу форму на странице:


// Теперь пора подумать, какие поля нужны для оформления заказа. 
// Для начала мы будем требовать поля ФИО и Email. Будем двигаться по шагам:

// 1. Добавим поля, состояние для хранения значений и ошибок, 
// функцию handleChange() для изменения значений полей и handleSubmit() для отправки формы.

// 2. Добавим схему валидации

// 3. Добавим вызов валидации при изменении значений полей

Добавляем поля, состояние и необходимые функции:

import React, { useState } from "react"
import FormLayout from "../formLayout"
import TextField from "../textField"

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: ""
    })

    const [errors, setErrors] = useState({})

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            console.log("Отправлено!")
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="fio"
                    name="fio"
                    label="ФИО"
                    value={values.fio}
                    onChange={handleChange}
                    error={errors.fio}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Создаём схему валидации:

// components/order-form/validationSchema.js
export const validationSchema = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введён некорректно"
        }
    },
}

// Обрати внимание, что мы используем такие же правила 
// для электронной почты, как и в FeedbackForm. 
// Поэтому их можно просто скопировать. 


/**
 * ^ - начало строки
 * $ - конец строки
 * [a-zA-Zа-яА-я]+ - только буквы русского или англиского алфавита
 * s? - пробел опционально
 * (([a-zA-Zа-яА-я]+)s){1,} - минимум 1 повторение для первого слова в ФИО
 * (([a-zA-Zа-яА-я]+)s?){1,} - минимум 1 повторение 2 и последующей части ФИО
 */
 ^(([a-zA-Zа-яА-Я]+)\s){1,}(([a-zA-Zа-яА-Я]+)\s?){1,}$

//  Проверяем тест-кейсы. Обрати внимание, 
//  что числа не должны удовлетворять 
//  нашим требованиям (does not match):

// Добавляем новое правило валидации:

// export default {
//     isRequired: (value) => Boolean(value.trim()),
//     isEmail: (value) => /^S+@S+.S+$/g.test(value),
//     isUrl: (value) => /^https?://S+$/g.test(value),
//     min: (value, length) => value.length >= length,
//     isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
//     isContainDigit: (value) => /d+/g.test(value),
//     // ФИО
//     isFIO: (value) => /^(([a-zA-Zа-яА-Я]+)\s){1,}(([a-zA-Zа-яА-Я]+)\s?){1,}$/g.test(value)
// };

Обрати внимание, что такое регулярное выражение 
довольно сложное и не учитывает некоторые вариации ФИО. 
Например, двойная фамилия через тире. 
В реальном проекте лучше воспользоваться специальным 
сервисом для проверки ФИО и/или отказаться 
от валидации этого поля, чтобы не снизить конверсию. 
Сервисом в твоем проекте может быть, например, https://dadata.ru/api/#name.

// Добавляем в схему валидации:

export const validationSchema = {
    fio: {
        isRequired: {
            message: "ФИО обязательно для заполнения"
        },
        isFIO: {
            message: "Введите корректное ФИО"
        }
    },
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введён некорректно"
        }
    }
}

// Импортируем схему и вызовем валидацию при изменении значений

import React, { useState, useEffect } from "react"
import FormLayout from "../formLayout"
import TextField from "../textField"
import { validate } from "../../utils/validator"
import { validationSchema } from "./validationSchema"

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: ""
    })

    const [errors, setErrors] = useState({})

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
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

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="fio"
                    name="fio"
                    label="ФИО"
                    value={values.fio}
                    onChange={handleChange}
                    error={errors.fio}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    )
}

export default OrderForm

// Теперь мы можем видеть, что всё работает корректно:

// В следующей части мы дополним форму элементом <select>.