// validator() – это функция, которая должна получать 
// состояние формы и требования к значениям этой формы. 
// При вызове она возвращает ошибки из наших полей, если они имеются.
// Мы уже начали реализовывать её ранее, 
// но не передавали конфигурацию (+ у нас было только одно правило). 

// Создадим описание правил для наших полей в отдельном файле:

// в components/validationSchema.js
export const validationSchema = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        }
    },
    link: {
        isRequired: {
            message: "Ссылка обязательна для заполнения"
        }
    },
    description: {
        isRequired: {
            message: "Описание обязательно для заполнения"
        }
    }
}

// В данной схеме для каждого поля мы описываем то, 
// какие правила валидации будут применены к значению 
// поля и какое сообщение нужно вывести, 
// если значение не соответствует правилу (т.е. не валидно). 


// Давай изменим нашу функцию validate(), 
// чтобы она принимала схему валидации (конфигурацию) 
// и проходилась по правилам. Когда она найдёт хоть одну ошибку, 
// то вернёт её:


import { isRequired } from "./validateRules"

export const validate4 = (values, config) => {
    // создаём объект с ошибками
    const errors = {}

    // проходим циклом по ключам объекта с данными формы
    for (const name in values) {
        /**
         * Получаем объект с описанием правил валидации
         * для конкретного поля
         * Например для email мы получим validationSchema.email
         * или если наглядно:
         * {isRequired: { message: "Электронная ..."}}
         */
        const validationRules = config[name]

        // Проходимся по всем ключам объекта c правилами
        for (const rule in validationRules) {
            /**
             * Получаем объект конкретного правила валидации
             * Например для email получим validationSchema.email.isRequired
             * или если наглядно:
             * { message: "Электронная ..."}
             */
            const { message } = validationRules[rule]

            // Проверяем есть ли ошибка
            const hasError = true // напишем позже

            if (hasError) {
                errors[name] = message

                /**
                 * останавливаем внутренний цикл прохода по
                 * правилам валидации, если уже нашли ошибку
                 */
                break
            }
        }
    }

    // Возвращаем объект
    return errors
}

// Обрати вынимание, что пока мы не делаем проверку 
// для получения значения hasError. 
// Этим мы займёмся далее, но сперва передадим 
// в функцию validate() схему валидации:


import React, { useState, useEffect } from "react";
import TextField from "./textField";
import { validate } from "../utils/validator";
import { validationSchema } from "./validationSchema";

const MyForm = () => {
    // ...

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    return (
        // ...
    )
}
export default MyForm;


// Теперь вернемся к написанию валидатора. 
// Пока для удобства создадим дополнительную функцию 
// validator() (далее немного отрефакторим). 
// В нашем случае валидатор будет принимать имя правила 
// (ruleName) и значение поля формы (value). 
// Если значение будет валидно, то он будет возвращать true иначе false:


// utils/validator.js
import { isRequired } from "./validateRules";

export const validate2 = (values, config) => {/* ... */};

const validator = (ruleName, value) => {
    switch (ruleName) {
        case "isRequired":
            return isRequired(value);
        default:
            // если передан не существующий валидатор
            return true; 
    }
};

// Сейчас у нас только одно правило валидации – isRequired(). 
// Если строка будет не пустая, то вернётся true. 

// Воспользуемся нашим валидатором в функции validate():


import { isRequired } from "./validateRules"

export const validate = (values, config) => {
    const errors = {};

    for (const name in values) {
        const validationRules = config[name]
        for (const rule in validationRules) {
            const { message } = validationRules[rule]

            // Вызываем валидатор
            const hasError = !validator(rule, values[name])

            if (hasError) {
                errors[name] = message;
                break;
            }
        }
    }

    return errors;
};

const validator = (ruleName, value) => {
    switch (ruleName) {
        case "isRequired":
            return isRequired(value);
        default:
            return true;
    }
};

// Мы делаем инверсию (!) перед validator(rule, values[name]), 
// так как нам нужно отследить, когда поле не валидно. Функция 
// validator() вернет true, если ошибок нет. Чтобы значение было true, 
// когда ошибки есть, воспользуемся инверсией.

// Проверяем результат: