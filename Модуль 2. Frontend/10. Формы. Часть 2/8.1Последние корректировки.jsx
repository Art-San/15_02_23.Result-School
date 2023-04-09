// В нашей форме есть существенное 
// упущение – нет адреса доставки. 
// Давайте добавим его, так как иначе 
// наш пользователь не получит заказ:

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

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        address: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: [],
        agreement: []
    });

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
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
        validationSchema
            .validate(values, { abortEarly: false })
            .then(() => setErrors({}))
            .catch((yupError) => {
                const errors = parceYupError(yupError);
                setErrors(errors);
            });
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
                <TextField
                    id="address"
                    name="address"
                    label="Адрес"
                    value={values.address}
                    onChange={handleChange}
                    error={errors.address}
                />
                <SelectField
                    label="Выберите доставку"
                    name="deliveryType"
                    value={values.deliveryType}
                    onChange={handleChange}
                    error={errors.deliveryType}
                    options={deliveryTypeList}
                    defaultOption="Выберите вариант доставки"
                />

                <RadioField
                    options={needLiftFloorOptions}
                    label="Нужен подъём на этаж?"
                    value={values.needLiftFloor}
                    name="needLiftFloor"
                    onChange={handleChange}
                    error={errors.needLiftFloor}
                />

                <MultiSelect
                    options={giftList}
                    onChange={handleChange}
                    value={values.gifts}
                    name="gifts"
                    label="Выберите подарок"
                />

                <CheckboxField
                    name="agreement"
                    label="Подтвердите согласие"
                    options={agreements}
                    onChange={handleChange}
                    value={values.agreement}
                    error={errors.agreement}
                />

                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Мы можем задастся вопросом, 
// какое будет правило валидации для адреса? 
// Как минимум, это должно быть обязательное поле:


import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fio: yup
        .string()
        .required("ФИО обязательно для заполнения")
        .matches(
            /^(([a-zA-Zа-яА-Я]+)s){1,}(([a-zA-Zа-яА-Я]+)s?){1,}$/,
            "Введите корректное ФИО"
        ),
    email: yup
        .string()
        .required("Электронная почта обязательна для заполнения")
        .email("Email введён некорректно"),
    address: yup.string().required("Адрес обязателен для заполнения"),
    deliveryType: yup.string().required("Выберите вариант доставки"),
    needLiftFloor: yup.string().required("Укажите нужен ли подъём на этаж"),
    agreement: yup
        .array()
        .test(
            "contains value",
            "Согласие на обработку данных обязательно",
            (value) => value.includes("1")
        )
});

// Но сможет ли пользователь заполнить адрес так,
// чтобы он удовлетворял требованиям службы доставки?


// Обычно в таких случаях используют элементы управления формой,
// похожие на <input> и <select> одновременно.
// При вводе данных происходит запрос на сервер,
// он отдаёт несколько вариантов и,
// когда пользователь выбирает один из вариантов,
// значение устанавливается в форму. 

// Компонент, который предоставляет 
// такой способ взаимодействия часто 
// называют Combobox или ComboxInput:

// Есть множество реализаций, и при необходимости 
// реализовать форму с подобным полем 
// мы сможем подобрать оптимальный подход для реализации: 

https://reach.tech/combobox/#comboboxinput
https://jquense.github.io/react-widgets/docs/Combobox
https://www.npmjs.com/package/@fdefelici/react-bootstrap-combobox

В этом уроке мы:

//  1. Изучили несколько элементов управления формой 
//     (<select>, <input type="radio">, <input type="checkbox">) 
//     и узнали, как работать с ними в React.

// 2.  Пару раз воспользовались созданием фэйкового (синтетического) события,
//     чтобы использовать handleChange() для всех компонентов одинаково.

// 3.  И, конечно, познакомились с Yup.

// Итоговый код конспекта по ссылке.
https://codesandbox.io/s/react-konspekty-10-formy-chast-2-8hvrxx?file=/src/components/order-form/validationSchema.js