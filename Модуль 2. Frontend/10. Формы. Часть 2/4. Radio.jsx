// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// Мы уже знакомились с элементом <input type="radio"> 
// в конспекте “Формы, часть 1” в части “Создание форм”. 
// Данный элемент формы позволяет пользователю 
// выбрать только один вариант из предложенных:

// Также мы говорили о том, что для того, 
// чтобы значения устанавливались корректно, 
// требуется указывать одинаковый атрибут name 
// каждому <input type="radio">, относящемуся 
// к одному “полю” (например, к цвету). 

// В этой части мы будем использовать <input type="radio"> для того, 
// чтобы спрашивать у пользователя, нужен ли ему подъем на этаж. 
// Для вёрстки возьмём Bootstrap:

{/* <div class="form-check form-check-inline">
    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
    <label class="form-check-label" for="inlineRadio1">1</label>
</div> */}

{/* На основе этого создадим переиспользуемый компонент. 
Для него нам понадобятся props: name, label, value, options, оnChange: */}

import React from "react"
import PropTypes from "prop-types"

const RadioField = (props) => {
    const { label, name, value, options, onChange } = props;
	
    /**
     * Функция для генерации id
     * для того, чтобы связать <input type="radio"> и его <label>
     */
    const getOptionId = (option) => `${option.name}_${option.value}`

    return (
        <div className="mb-4">
            <p>
                <label>{label}</label>
            </p>
            {/* Проходимся по всем вариантам */}
            {options.map((option) => (
                <div 
                    key={option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={getOptionId(option)}
                        value={option.value}
                        checked={option.value === value}
                        onChange={onChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={getOptionId(option)}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
}

{/* export default RadioField */}

 {/* Добавим варианты и вызовем RadioField  в нашей форме:  */}

// order-form/fieldsOptions.js
export const deliveryTypeList = [
    { label: "Пункт выдачи", value: "1" },
    { label: "Обычная доставка", value: "2" },
    { label: "Экспресс за 1 час", value: "3" }
]

export const needLiftFloorOptions = [
    { label: "Да", value: "yes" },
    { label: "Нет", value: "no" }
]

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import { deliveryTypeList, needLiftFloorOptions } from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: "",
        needLiftFloor: ""
    });

    // ...

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                {/* ... */}

                <RadioField
                    options={needLiftFloorOptions}
                    label="Нужен подъём на этаж?"
                    value={values.needLiftFloor}
                    name="needLiftFloor"
                    onChange={handleChange}
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

{/* export default OrderForm; */}

// На скриншоте мы видим, что появились варианты 
// и можно сделать выбор. Но, несмотря на то, 
// что здесь уже есть заготовленные варианты, 
// мы все равно можем валидировать поле. 
// По умолчанию нет установленного варианта, 
// а значит, если поле обязательно, т
// о нужно убеждаться, что оно заполнено, 
// и далее отображать ошибку при ее наличии. 

// Добавим в схему валидации новое правило для needLiftFloor:

export const validationSchema = {
    // ...
    needLiftFloor: {
        isRequired: {
            message: "Укажите, нужен ли подъём на этаж"
        }
    }
};

// Передадим ошибку:

<RadioField
    options={needLiftFloorOptions}
    label="Нужен подъём на этаж?"
    value={values.needLiftFloor}
    name="needLiftFloor"
    onChange={handleChange}
    error={errors.needLiftFloor}
/>

// И в RadioField ее выведем, получив из props:

import React from "react";
import PropTypes from "prop-types";

const RadioField = (props) => {
    const { label, name, value, options, onChange, error } = props;

    const getOptionId = (option) => `${option.value}_${option.value}`;
		

    // Функция для получения класса
    const getInputClasses = () => {
        return "form-check form-check-inline " + (error ? " is-invalid" : "")
    }

    return (
        <div className="mb-4">
            <p>
                <label>{label}</label>
            </p>
            {options.map((option) => (
                <div key={option.value} className={getInputClasses()}>
                    <input
                        className="form-check-input"
                        type="radio"
                        name={name}
                        id={getOptionId(option)}
                        value={option.value}
                        checked={option.value === value}
                        onChange={onChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor={getOptionId(option)}
                    >
                        {option.label}
                    </label>
                </div>
            ))}
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    error: PropTypes.string
};

export default RadioField;

// Теперь видно, что ошибка передаётся: 

Наше поле готово. В этой части мы изучили 
как работает <input type="radio"> более подробно. 
В следующей части мы узнаем, как работать с множественным <select>. 