// Элемент <input type="checkbox"> , как и <input type="radio"> 
// является частным случаем <input>, c которым мы уже тесно познакомились:

Вот как это выглядит в HTML:

{/* <label for="myCheckbox">Чекбокс</label>
<!-- Указываем атрибут type="checkbox" -->
<input id="myCheckbox" name="myCheckbox" type="checkbox" /> */}

// В отличии от <input type="radio">, 
// у него может быть несколько выбранных значений 
// для одного поля при условии одинакового атрибута name:

<form>
    <p>
        <label for="myCheckbox1">Чекбокс1 </label>
        <input
            id="myCheckbox1"
            name="myCheckbox"
            type="checkbox"
            value="1"
        />
    </p>
    <p>
        <label for="myCheckbox2">Чекбокс2 </label>
        <input
            id="myCheckbox2"
            name="myCheckbox"
            checked
            type="checkbox"
            value="2"
        />
    </p>
    <p>
        <label for="myCheckbox3">Чекбокс3 </label>
        <input
            id="myCheckbox3"
            name="myCheckbox"
            checked
            type="checkbox"
            value="3"
        />
    </p>
    <button type="submit">отправить</button>
</form>

// Атрибут checked указывает на то, выбран сейчас Сheckbox или нет.

// В некоторых случаях можно использовать тег <fieldset>, 
// чтобы объединить элементы управления формы. Например, 
// если мы хотим запретить выбор группы checkbox’ов, 
// то мы оборачиваем все <input> в <fieldset> и передаём атрибут disabled:

<form>
  <fieldset disabled>
      <legend>Мои Чекбоксы</legend>
      <p>
          <label for="myCheckbox1">Чекбокс1 </label>
          <input
              id="myCheckbox1"
              name="myCheckbox"
              type="checkbox"
              value="1"
          />
      </p>
      <p>
          <label for="myCheckbox2">Чекбокс2 </label>
          <input
              id="myCheckbox2"
              name="myCheckbox"
              type="checkbox"
              value="2"
          />
      </p>
      <p>
          <label for="myCheckbox3">Чекбокс3 </label>
          <input
              id="myCheckbox3"
              name="myCheckbox"
              type="checkbox"
              value="3"
          />
      </p>
  </fieldset>
  <button type="submit">отправить</button>
</form>

// Также ты мог заметить тег <legend> внутри <fieldset>. 
// Мы использовали его для создания заголовка группы элементов формы. 

// В Bootstrap наша разметка выглядит таким образом:

// По умолчанию в HTML у нас бы добавилась обводка вокруг группы элементов:

// Также можно создавать подсказки для группы благодаря <fieldset> и атрибуту title:


<form onSubmit={handleSubmit}>
    <fieldset title="Подсказка">
        <p>
            <label for="myCheckbox1">Чекбокс1 </label>
            <input
                id="myCheckbox1"
                name="myCheckbox"
                type="checkbox"
                value="1"
            />
        </p>
        <p>
            <label for="myCheckbox2">Чекбокс2 </label>
            <input
                id="myCheckbox2"
                name="myCheckbox"
                type="checkbox"
                value="2"
            />
        </p>
        <p>
            <label for="myCheckbox3">Чекбокс3 </label>
            <input
                id="myCheckbox3"
                name="myCheckbox"
                type="checkbox"
                value="3"
            />
        </p>
    </fieldset>
    <button type="submit">отправить</button>
</form>

// При наведении на чекбокс (или другой элемент управления), 
// будет всплывать подсказка – текст, переданный в атрибут title у <fieldset>:


// Подробнее узнать о Checkbox можно в документации. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
// А мы перейдём дальше и рассмотрим его в контексте React-приложения. 

// В React перед нами стоит задача по хранению 
// и изменению значений полей (конечно, 
//     если у нас форма управляемая). 
//     У Checkbox мы можем хранить значения 
//     как массив или как Boolean (true/false).

// Как массив мы храним значения, 
// если у нас есть несколько 
// Checkbox’ов для одного поля (например, выбор цветов):


import React, { useState } from "react";

const ExampleCheckbox = () => {
  // Начальное состояние – пустой массив
  const [checkboxValues, setCheckboxValues] = useState([]);

  // Обработчик события onChange
  const handleChange = (e) => {
    // Получаем значение нажатого checkbox
    const { value } = e.target;

    // Устанавливаем новое значение
    setCheckboxValues((prevValues) => {
      /**
       * Если такое значение есть в checkboxValues,
       * то удаляем это значение из массива,
       * иначе добавляем
       */
      const newValues = prevValues.includes(value)
        ? prevValues.filter((prevValue) => prevValue !== value)
        : [...prevValues, value];
      //  Возвращаем новое значение
      return newValues;
    });
  };

  return (
    <>
      <p>Выбранные значения: {JSON.stringify(checkboxValues)}</p>
      <p>
        <label htmlFor="checkboxColor1">Зеленый</label>
        {/**
         * Определяем выбран ли checkbox
         * через атрибут checked.
         * Если есть в checkboxValues значение
         * равное value у checkbox, то он выбран
         */}
        <input
          id="checkboxColor1"
          name="color"
          type="checkbox"
          value="green"
          checked={checkboxValues.includes("green")}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="checkboxColor2">Желтый</label>
        <input
          id="checkboxColor2"
          name="color"
          type="checkbox"
          value="yellow"
          checked={checkboxValues.includes("yellow")}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="checkboxColor3">Синий</label>
        <input
          id="checkboxColor3"
          name="color"
          type="checkbox"
          value="blue"
          checked={checkboxValues.includes("blue")}
          onChange={handleChange}
        />
      </p>
    </>
  );
};

export default ExampleCheckbox;

// Результат:

// Если для поля только один Checkbox, мы можем хранить Boolean:

import React, { useState } from "react";

const ExampleSingleCheckbox = () => {
  // Начальное значение false
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {
    /**
     * При вызове события
     * меняем состояние на противополжное
     */
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Выбран: {JSON.stringify(checked)}
        <p>
          <label htmlFor="myCheckbox1">Чекбокс1 </label>
          {/**
           * В данном случае для <input> обходимся только
           * атрибутом checked без value
           */}
          <input
            id="myCheckbox1"
            name="myCheckbox"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
        </p>
        <button type="submit">отправить</button>
      </form>
    </>
  );
};

export default ExampleSingleCheckbox;

// Результат:

Посмотреть примеры на CodeSandbox: ссылка
https://codesandbox.io/s/primer-checkbox-react-konspekty-10-formy-chast-2-0kudd8?file=/src/ExampleCheckbox.jsx:0-1964

// Теперь, зная как работает Checkbox, 
// мы можем вернуться к нашей форме:

// Вновь сделаем переиспользуемый компонент, 
// но теперь для <input type="checkbox">. 

// Возьмем за основу Bootstrap:
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">1</label>
</div>

{/* Создадим новый файл с компонентом: */}

import React from "react"
import PropTypes from "prop-types"

const CheckboxField = (props) => {
    const { name, value, onChange, label, options } = props

    // Получение id для использования в htmlFor
    const getOptionId = (option) => `${option.value}_${option.value}`

    return (
        <div className="mb-4">
            <p>
                <label>{label}</label>
            </p>
            {options.map((option) => (
                <div
                    key={option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={getOptionId(option)}
                        checked={value === option.value}
                        name={name}
                        value={option.value}
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
    )
}

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
}

export default CheckboxField


{/* Этот компонент весьма похож на RadioField. 
Давай представим, что мы хотим вывести несколько опций, 
такие как согласие на обработку данных 
и сохранение данных для оформления следующих заказов. */}

export const deliveryTypeList = [
    { label: "Пункт выдачи", value: "1" },
    { label: "Обычная доставка", value: "2" },
    { label: "Экспресс за 1 час", value: "3" }
];

//....

export const agreements = [
    { label: "Согласие на обработку данных", value: "1" },
    { label: "Сохранить данные для будущих заказов", value: "2" }
];


import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import MultiSelect from "../multiSelect";
{/* import CheckboxField from "../checkboxField"; */}
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList,
    agreements
} from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: [],
        agreement: ""
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
        console.log(e);
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


{/* Теперь мы увидим появившиеся чекбоксы, 
но пока мы можем выбрать только один вариант: */}

{/* Дело в том, что в событии (event) приходит значение 
последнего нажатого чекбокса (event.target.value), 
и оно заменяет предыдущее. Переделаем хранение 
состояния agreement на массив: */}

// order-form/orderForm.jsx
const [values, setValues] = useState({
    fio: "",
    email: "",
    deliveryType: "",
    needLiftFloor: "",
    gifts: [],
    agreement: []
});


{/* И также изменим логику в CheckboxField: */}


import React from "react";
import PropTypes from "prop-types";

const CheckboxField = (props) => {
    const { name, value, onChange, label, options } = props;

    const getOptionId = (option) => `${option.value}_${option.label}`;

    const handleChange = (e) => {
        const { value: inputValue } = e.target
        const newValue = value.includes(inputValue)
            ? value.filter((v) => v !== inputValue)
            : [...value, inputValue]

        const fakeEvent = {
            target: {
                name,
                value: newValue
            }
        }

        onChange(fakeEvent)
    }

    const getIsChecked = (inputValue) => value.includes(inputValue)

    return (
        <div className="mb-4">
            <p>
                <label>{label}</label>
            </p>
            {options.map((option) => (
                <div
                    key={option.value}
                    className="form-check form-check-inline"
                >
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id={getOptionId(option)}
                        checked={getIsChecked(option.value)}
                        name={name}
                        value={option.value}
                        onChange={handleChange}
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

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
};

export default CheckboxField;

{/* Теперь handleChange() внутри CheckboxField работает так: */}

1. {/* Получаем из события значение Checkbox (и записываем в переменную inputValue) */}
2. {/* Проверяем, если ли в value (массив из props) такое значение, которое передано из Checkbox */}
{/* Если есть, то у пользователя уже выбран данный вариант. 
Фильтруем массив от этого значения. */}
{/* Если нет, то добавляем в массив. */}
3. {/* Создаём фэйковое событие */}
4. {/* Передаём в onChange() */}

{/* Проверяем работу нашей формы: */}



{/* Сейчас давай немного разгрузим CheckboxField, 
создадим ещё один компонент SingleCheckboField 
и вынесем туда часть логики. Таким образом, 
мы также сможем в дальнейшем более гибко использовать Checkbox: */}

// components/singleCheckboxField.jsx
import React from "react"
import PropTypes from "prop-types"

const SingleCheckboxField = (props) => {
    const { name, label, value, checked, onChange } = props
    const getOptionId = (value, label) => `${value}_${label}`

    const id = getOptionId(value, label);

    return (
        <div className="form-check form-check-inline">
            <input
                className="form-check-input"
                type="checkbox"
                id={id}
                checked={checked}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

SingleCheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func
};

export default SingleCheckboxField


{/* И используем его: */}



import React from "react";
import PropTypes from "prop-types";
import SingleCheckboxField from "./singleCheckboField";

export const CheckboxField = (props) => {
    const { name, value, onChange, label, options } = props;

    const handleChange = (e) => {
        const { value: inputValue } = e.target
        const newValue = value.includes(inputValue)
            ? value.filter((v) => v !== inputValue)
            : [...value, inputValue];

        const fakeEvent = {
            target: {
                name,
                value: newValue
            }
        }

        onChange(fakeEvent);
    }

    const getIsChecked = (inputValue) => value.includes(inputValue)

    return (
        <div className="mb-4">
            <p>
                <label>{label}</label>
            </p>
            {options.map((option) => (
                <SingleCheckboxField
                    key={option.value}
                    name={name}
                    label={option.label}
                    value={option.value}
                    onChange={handleChange}
                    checked={getIsChecked(option.value)}
                />
            ))}
        </div>
    );
};

// ...


{/* Также мы можем использовать SingleCheckboxField отдельно от CheckboxField. 
Создадим тестовое поле, чтобы увидеть как будет работать SingleCheckboxField: */}


import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import MultiSelect from "../multiSelect";
import CheckboxField from "../checkboxField";
import SingleCheckboxField from "../singleCheckboField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList,
    agreements
} from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: [],
        agreement: [],
        test: false
    });

    // ...

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                {/* ... */}

                <SingleCheckboxField
                    name="test"
                    onChange={handleChange}
                    value={values.test}
                    label="Проверка"
                />

                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;


{/* Мы получили Checkbox “Проверка”. Протестируем его и затем удалим, 
так как он не нужен сейчас в форме оформления заказа.  */}


{/* Добавим возможность отображения ошибки у Checkbox: */}


import React from "react";
import PropTypes from "prop-types";
import { SingleCheckboxField } from "./singleCheckboField";

export const CheckboxField = (props) => {
    const { name, value, onChange, label, options, error } = props;

    const handleChange = (e) => {
        const { value: inputValue } = e.target;
        const newValue = value.includes(inputValue)
            ? value.filter((v) => v !== inputValue)
            : [...value, inputValue];

        const fakeEvent = {
            target: {
                name,
                value: newValue
            }
        };

        onChange(fakeEvent);
    };

    const getIsChecked = (inputValue) => value.includes(inputValue);

    const getInputClasses = () => {
        return error ? " is-invalid" : "";
    };

    return (
        <div className="mb-4">
            <p className={getInputClasses()}>
                <label>{label}</label>
            </p>
            {options.map((option) => (
                <SingleCheckboxField
                    key={option.value}
                    name={name}
                    label={option.label}
                    value={option.value}
                    onChange={handleChange}
                    checked={getIsChecked(option.value)}
                />
            ))}

            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

CheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    error: PropTypes.string
};

export default CheckboxField;


{/* И чтобы проверить, что ошибка выводится, 
добавим новый метод валидации. Мы будем проверять, 
что в массиве присутствует значение. 
В нашем случае мы проверяем согласие пользователя 
на обработку данных, то есть массив value должен обязательно содержать значение "1": */}


export default {
    isRequired: (value) => Boolean(value.trim()),
    isEmail: (value) => /^S+@S+.S+$/g.test(value),
    isUrl: (value) => /^https?://S+$/g.test(value),
    min: (value, length) => value.length >= length,
    isCapitalSymbol: (value) => /[A-Z]+/g.test(value),
    isContainDigit: (value) => /d+/g.test(value),
    // ФИО
    isFIO: (value) =>
        /^(([a-zA-Zа-яА-Я]+)s){1,}(([a-zA-Zа-яА-Я]+)s?){1,}$/g.test(value),
    // Массив содержит значение
    isContainValue: (array, value) => array.includes(value)
};



export const validationSchema = {
    // ...
    agreement: {
        isContainValue: {
            message: "Согласие на обработку данных обязательно",
            param: "1" // должен содержать значение 1
        }
    }
};


{/* Теперь видно отображение ошибок: */}

{/* Когда мы поставим галочку напротив 
“Согласие на обработку данных”, ошибка исчезнет: */}


{/* На данном этапе может быть не до конца ясно почему в правиле: */}

agreement: {
    isContainValue: {
        message: "Согласие на обработку данных обязательно",
        param: "1"
    }
}

{/* значение по ключу param передано именно как "1".  */}


{/* Дело в том, что поле agreement представляет 
из себя массив объектов со значениями по ключу value. 
Для согласия соответствует значение "1": */}


// fieldsOpions.js
//...
export const agreements = [
    { label: "Согласие на обработку данных", value: "1" },
    { label: "Согласие на рассылку", value: "2" }
];


{/* В данной части мы разобрались, как работать 
с множественными / единичными <input type="checkbox"> , 
и написали метод для валидации массива.  */}

{/* В следующей части мы познакомимся с библиотекой для валидации Yup. */}