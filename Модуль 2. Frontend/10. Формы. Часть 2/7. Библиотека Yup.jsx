// За последние уроки мы реализовали валидацию собственноручно, 
// чтобы детальнее разобраться, как она работает. 
// Но зачастую в проектах нам будет достаточно использовать 
// специальные библиотеки для валидаций, 
// чтобы не реализовывать это с нуля. 

// В этой части мы познакомимся с Yup. https://www.npmjs.com/package/yup
// Эта популярная библиотека содержит 
// в себе множество уже написанных правил валидации, 
// у неё простое и понятное API, 
// в неё можно добавлять собственные методы. 
// Эту библиотеку можно часто встретить в проектах, где много форм. 

Установим её в наш проект: npm i yup

// И перепишем правила валидации для формы оформления заказа на Yup.

// Каким образом мы описываем схемы валидации в Yup? 
// Это можно представить схематически:

const anotherSchema = yup 
    .object() // тип данных
    .RULE1() // правило 1
    .RULE2() // правило 2 и т.д.

// Например, правило для валидации обязательной 
// строки строки длиной не менее 5 символов будет выглядеть так:

yup.string().min(5).required()

// Кроме того, мы можем указывать 
// какое сообщение выводить в случае ошибки:

// Порядок влияет на последовательность применения
yup.string()
    .required('Поле обязательно')
    .min(5, 'должно быть не менее 5 символов')


Чтобы вызвать валидацию, нужно обратиться к методу validate() // https://github.com/jquense/yup#schemavalidatevalue-any-options-object-promiseinfertypeschema-validationerror
или методу validateSync(). // https://github.com/jquense/yup#schemavalidatesyncvalue-any-options-object-infertypeschema
Первый асинхронный, другой синхронный соответственно:



// Создаём некую схему валидации
const schema = yup.string()
    .min(5, 'должно быть не менее 5 символов')
    .required('Поле обязательно')

// Вызываем метод validate() и передаём ему данные ('some string')
schema.validate('some string').then().catch(e => { /* Обработка ошибок */ })

// либо вернёт значения, либо вызовет ошибку
const values = schema.validateSync('') // throws ValidationError


// Вернемся к нашим правилам формы заказа. 
// Можно увидеть, что мы собираем значения формы в объект, 
// поэтому нужно начать описывать схему с того, 
// что мы ожидаем объект с определёнными полями:


// order-form/validationSchema.js
import * as yup from 'yup'

export const validationSchema = yup.object().shape({ // объект с полями
    fio: yup.string(), // Все поля у нас строки, кроме...
    email: yup.string(), 
    deliveryType: yup.string(), 
    needLiftFloor: yup.string(), 
    agreement: yup.array() // ...кроме agreement, он массив
});


// Далее добавим всем полям требование, 
// что они обязательны и не забудем 
// указать соответствующие сообщения:


// order-form/validationSchema.js
import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    fio: yup.string().required("ФИО обязательно для заполнения"),
    email: yup
        .string()
        .required("Электронная почта обязательна для заполнения"),
    deliveryType: yup.string().required("Выберите вариант доставки"),
    needLiftFloor: yup.string().required("Укажите нужен ли подъём на этаж"),
    agreement: yup.array()
});


Далее добавим правило для email:

// order-form/validationSchema.js
import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    fio: yup.string().required("ФИО обязательно для заполнения"),
    email: yup
        .string()
        .required("Электронная почта обязательна для заполнения")
        .email("Email введён некорректно"),
    deliveryType: yup.string().required("Выберите вариант доставки"),
    needLiftFloor: yup.string().required("Укажите нужен ли подъём на этаж"),
    agreement: yup.array()
});

// В Yup уже есть правило для проверки Email, 
// нам осталось лишь указать сообщение при ошибке.

// Для проверки ФИО у нас есть регулярное 
// выражение кастомного правила isFIO. 
// Для того, чтобы задать проверку 
// на соответствие регулярному выражению, 
// в библиотеке есть метод matches(). Воспользуемся им:


// order-form/validationSchema.js
import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    fio: yup
        .string()
        .required("ФИО обязательно для заполнения")
        .matches(
            /^(([a-zA-Zа-яА-Я]+)s){1,}(([a-zA-Zа-яА-Я]+)s?){1,}$/g,
            "Введите корректное ФИО"
        ),
    email: yup
        .string()
        .required("Электронная почта обязательна для заполнения")
        .email("Email введён некорректно"),
    deliveryType: yup.string().required("Выберите вариант доставки"),
    needLiftFloor: yup.string().required("Укажите нужен ли подъём на этаж"),
    agreement: yup.array()
});


Осталось лишь проверить поле agreement на 
наличие значения в массиве. Такую проверку 
можно сделать через метод test(), // https://github.com/jquense/yup#schematestname-string-message-string--function--any-test-function-schema
это самый простой способ 
написать кастомное правило Yup:


// order-form/validationSchema.js
import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fio: yup
        .string()
        .required("ФИО обязательно для заполнения")
        .matches(
            /^(([a-zA-Zа-яА-Я]+)\s){1,}(([a-zA-Zа-яА-Я]+)\s?){1,}$/,
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


// Когда будет выполняться проверка значения agreement, 
// будет вызван метод test(). Внутри будет вызвана callback-функция, 
// в которую будет передано значение поля (value) , 
// и если функция вернёт false, то в ошибках появится соответствующие сообщение. 


// На данный момент мы перенесли все правила. Давай обратимся теперь к нашей схеме:


// order-form/orderForm.jsx

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



// Получилось довольно громоздко. 
// Перенесём получение ошибки в отдельную утилиту: 


// utils/parceYupError.js

export const parceYupError = (yupError) => {
    const { inner } = yupError;

    return Array.isArray(inner)
        ? inner.reduce((acc, item) => {
              const { path, errors } = item;
              // Проверяем есть ли ошибка уже в объете
              if (!acc.hasOwnProperty(path) && errors.length) {
                  // Если нет то добавляем первую
                  acc[path] = errors[0];
              }

              return acc;
          }, {})
        : {};
};

// /components/feedback-form/FeedbackForm'

import React, { useState, useEffect } from "react";
import TextField from "../textField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import FormLayout from "../formLayout";

const FeedbackForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: "",
        password: ""
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

    const { email, link, description, password } = values;

    return (
        <FormLayout title="Отчёт об ошибке">
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
        </FormLayout>
    );
};

export default FeedbackForm;

// И мы видим, что она отображает все ошибки, 
// и методы работают корректно. 

// Yup помогает ускорить работу с формами. 
// В нём есть множество правил и различные 
// способы взаимодействия с данными. 
// Настоятельно рекомендуем изучить эту библиотеку подробнее.

