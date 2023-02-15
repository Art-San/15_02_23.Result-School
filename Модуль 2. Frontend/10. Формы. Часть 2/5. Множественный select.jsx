// React-select: ссылка
// npm i --save react-select
// https://react-select.com/home

// Множественный <select> в нативном HTML можно реализовать, 
// добавив ему атрибут multiple. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-multiple
// В таком случае внешний 
// вид элемента сильно изменится. Создадим множественный 
// <select> и посмотрим на примере списка подарков:  

<select multiple class="form-select">
    <option value="1">Подарок 1</option>
    <option value="2">Подарок 2</option>
    <option value="3">Подарок 3</option>
    <option value="4">Подарок 4</option>
    <option value="5">Подарок 5</option>
    <option value="6">Подарок 6</option>
    <option value="7">Подарок 7</option>
    <option value="8">Подарок 8</option>
    <option value="9">Подарок 9</option>
</select>

// Мы видим, что элемент вместо однострочного 
// стал многострочным и сбоку появился ползунок для скроллинга. 
// При клике выбирается только один вариант. 
// Чтобы выбрать несколько,8 можно вместе с кликом зажимать:

// 1. Shift для последовательного выделения
// 2. Ctrl (Command на Mac) для непоследовательного выделения

// Такое отображение <select> невсегда удобно. 
// Пользователю может быть не очевидно, 
// как выбирать несколько элементов, 
// и он может запутаться. Кроме того, 
// такой элемент может не вписываться в наш дизайн. 
// Можно создать собственный красивый кастомный <select> 
// или воспользоваться уже готовым:

// В этой части мы реализуем элемент выбора подарков за первую покупку. 
// Пользователь сможет выбрать один или несколько подарков.

// Для начала создадим список подарков:

export const deliveryTypeList = [
    { label: "Пункт выдачи", value: "1" },
    { label: "Обычная доставка", value: "2" },
    { label: "Экспресс за 1 час", value: "3" }
];

export const needLiftFloorOptions = [
    { label: "Да", value: "yes" },
    { label: "Нет", value: "no" }
];

export const giftList = [
    { label: "Скидка 3%", value: "1" },
    { label: "Книга", value: "2" },
    { label: "Бесплатный подъёем на этаж", value: "3" }
];

// Для вывода множественного <select> 
// мы воспользуемся библиотекой React Select.
// https://react-select.com/home
// Установим её в проект (в курсе используется версия 5.1.0):

npm i --save react-select


// И воспользуемся библиотекой:

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import Select from "react-select";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList
} from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: ""
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
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                {/* ... */}

                <Select isMulti options={giftList} className="mb-4" />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Добавим для Select класс (className="mb-4") 
// для отступа снизу и передадим следующие props:

// isMulti – указывает на то, что выбор множественный
// options – элементы выбора, в данном случае список наших подарков

// Элемент отображается и работает, но пока наш компонент не управляемый:



// Сделаем его управляемым. Нам нужно передать ему value и onChange, 
// как мы делали с другими полями. Однако, если мы также передадим 
// onChange={handleChange}, он будет отрабатывать с ошибкой:

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import Select from "react-select";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList
} from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: ""
    });

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isValid) {
            console.log("Отправлено!");
        }
    };

    const handleChange = (e) => {
        console.log(e)
        const { value, name } = e.target
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

                <Select
                    isMulti
                    options={giftList}
                    className="mb-4"
                    onChange={handleChange}
                    value={values.gifts}
                    name="gifts"
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// При попытке выбрать значение мы увидим ошибку:

В консоли мы видим, что при вызове handleChange() 
в переменной e содержится массив объектов, а не событие. 
Чтобы установка значения была корректной, 
для начала мы поменяем начальное состояние gifts со строки на массив:


const [values, setValues] = useState({
    fio: "",
    email: "",
    deliveryType: "",
    needLiftFloor: "",
    gifts: []
});


// И создадим новый переиспользуемый компонент MultiSelect. 
// В нём мы будем создавать подобие события, чтобы handleChange() 
// отрабатывал так же как и с другими полями:


// components/multiSelect.jsx
import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"

const MultiSelect = ({ name, value, label, onChange, options }) => {
    const handleChange = (values) => {
        // Создаём фэйковое событие
        const fakeEvent = {
            target: {
                name,
                value: values
            }
        }
        onChange(fakeEvent)
    

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <Select
                isMulti
                // closeMenuOnSelect={false} не закрывается меню
                options={options}
                value={value}
                onChange={handleChange}
                name={name}
                id={name}
            />
        </div>
    )
}

MultiSelect.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
}

export default MultiSelect


// Благодаря созданию фэйкового события, 
// мы можем использовать тот же метод изменения состояния, 
// что и у других компонентов полей (handleChange()). 

// Вызовем MultiSelect в форме:

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import MultiSelect from "../multiSelect";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList
} from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: []
    });

    // ....

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
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// в MultiSelect.jsx в select добавим 
// и меню не будет скрыватся closeMenuOnSelect={false}

// И наш MultiSelect отрабатывает корректно:

// Мы разобрались, как создавать множественный <select>. 
// В следующей части мы разберёмся, как работать с <input type="checkbox">.