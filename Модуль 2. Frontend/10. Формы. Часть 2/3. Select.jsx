https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
// Элемент <select> , как и <input> , 
// представляет собой элемент управления формой. 
// Его суть в том, что он содержит варианты значений, 
// из которых пользователь может выбрать нужный:

Типичный <select> в HTML выглядит так: 

<select name="fruit">
    <option value="">-- Выберите фрукт --</option>
    <option value="banana">Банан</option>
    <option value="orange">Апельсин</option>
    <option value="apple">Яблоко</option>
</select>

// Есть сам тэг <select>, внутри него несколько тэгов <option>. 
// Таким образом, мы по сути создаем список с элементами, 
// из которых можно будет что-то выбрать. 

// Помимо атрибута name, у <select> есть и другие, 
// например multiple (затронем далее в уроке) 
// или уже знакомый нам required (обязательное поле).

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option#attributes
// У <option> также есть атрибуты, например:

// value – значение, которое будет отправлено вместе 
// с формой, если выбран этот <option>. 
// Если этого атрибута нет, значение берется 
// из текстового содержимого элемента <option>.

// selected – устанавливает изначально выбранный элемент.

// disabled – элемент недоступен, 
// обычно в браузерах выделяется 
// серым цветом и его невозможно 
// самостоятельно выбрать.

// В React контролируемый <select> 
// работает следующим образом: ссылка на CodeSandbox.
// https://codesandbox.io/s/primer-select-react-konspekty-10-formy-chast-2-3i0o20?file=/src/Example.jsx

import React, { useState } from "react";

const Example = () => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <form>
            <p>Выбранное значение: {value}</p>
            <select name="fruit" value={value} onChange={handleChange}>
                <option value="">-- Выберите фрукт --</option>
                <option value="banana">Банан</option>
                <option value="orange">Апельсин</option>
                <option value="apple">Яблоко</option>
            </select>
            <button type="submit">Отправить</button>
        </form>
    );
};

export default Example;

// К элементу <select> закрепляется значение 
// (value) и обработчик события onChange (handleChange())

// Внутри <select> находятся несколько <option>, 
// у которых установлен собственный атрибут value.

// Если внутри <select> есть <option> с таким же значением value 
// (как у самого <select>), то он будет отображен выбранным. 
// В данном примере изначально будет выбран “-- Выберите фрукт --”, 
// так как у него value равен "", так же как value из useState("").

// При выборе нового <option> будет вызвано событие onChange.

// Событие обработает функция handleChange(), 
// внутри она обновит состояние, 
// которое будет равно value из выбранного <option>.

// После обновления состояния value это новое 
// значение будет передано в <select> 
// и будет отображён соответствующий <option>.

// Перейдём к нашей форме заказа. Представим, 
// что мы предлагаем пользователю один из вариантов 
// доставки: пункт выдачи, обычная доставка, 
// экспресс-доставка за час. 
// Добавим поле в форму сразу со стилями Bootstrap. 
// Для этого перейдём по ссылке https://getbootstrap.com/docs/5.2/forms/validation/#custom-styles
//  и возьмём кусочек 
// кода уже с заготовкой для валидации:

<div class="col-md-3">
  <label for="validationCustom04" class="form-label">State</label>
  <select class="form-select" id="validationCustom04" required>
    <option selected disabled value="">Choose...</option>
    <option>...</option>
  </select>
  <div class="invalid-feedback">
    Please select a valid state.
  </div>
</div>

// Скопируем этот код и создадим переиспользуемый контролируемый компонент:

// components/selectField.jsx
import React from "react"
import PropTypes from "prop-types"

const SelectField = (props) => {
    return (
        <div>
            <label htmlFor="validationCustom04" className="htmlForm-label">
                State
            </label>
            <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                    Choose...
                </option>
                <option>...</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
        </div>
    );
};

SelectField.propTypes = {}

export default SelectField

// Вызовем его в нашей форме:

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from '../selectField'
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: ""
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
                <SelectField />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Сейчас выглядит немного кривенько:

// Изменим стили:

// components/selectField.jsx
import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    return (
        <div className="mb-4">
            <label htmlFor="validationCustom04" className="form-label">
                State
            </label>
            <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                    Choose...
                </option>
                <option>...</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
        </div>
    );
};

SelectField.propTypes = {};

export default SelectField;

// Далее подумаем над интерфейсом компонента. 
// На данный момент нам нужны следующие props: 
// label, name, value, onChange и error. 
// Добавим их и воспользуемся:

import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    const { label, name, value, onChange, error } = props;
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className="form-select"
                id={name}
                name={name}
            >
                <option selected disabled value="">
                    Choose...
                </option>
                <option>...</option>
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default SelectField;

// Обновим вызов в OrderForm:

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: ""
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
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Теперь надо разобраться с вариантами выбора. 
// Для SelectField нам нужен список типов доставки. 
// Он будет представлять из себя массив объектов вида:

{ value: "значение доставки", label: "название доставки" }

value – значение
label – текст, его мы покажем пользователю

// Так как мы делаем переиспользуемый компонент, 
// проп будет называться обобщенно – options. 
// Добавим его в propTypes и воспользуемся 
// им для динамического вывода вариантов:

import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    const { label, name, value, onChange, error, options } = props;
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className="form-select"
                id={name}
                name={name}
            >
                <option selected disabled value="">
                    Choose...
                </option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
};

export default SelectField;

// Чтобы компонент корректно отображался, 
// мы должны передать список вариантов доставки в SelectField. 
// Создадим новый файл со списком вариантов типов доставок:

// order-form/fieldsOptions.js
export const deliveryTypeList = [
    { label: "Пункт выдачи", value: "1" },
    { label: "Обычная доставка", value: "2" },
    { label: "Экспресс за 1 час", value: "3" }
]

// Импортируем в OrderForm и передадим как параметр в SelectField:

import React, { useState, useEffect } from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import { validate } from "../../utils/validator";
import { validationSchema } from "./validationSchema";
import { deliveryTypeList } from "./fieldsOpions";

const OrderForm = () => {
    const [values, setValues] = useState({
        fio: "",
        email: "",
        deliveryType: ""
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
                />
                <button className="btn btn-primary w-100 mx-auto" type="submit">
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;

Теперь мы увидим наши варианты в списке:

// Однако в консоли мы также увидим предупреждение:

// Это происходит, так как мы задаём атрибут 
// selected у первого <option> со значением по умолчанию. 
// Дело в том, что React использует value 
// (или defaultValue для неконтролируемых компонентов) 
// вместо selected на <option>, это более удобно, 
// так как для установки значений нужно 
// только обновить value на теге <select>. 

// Нам нужно убрать selected и за одно поменяем текст:

import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    const { label, name, value, onChange, error, options } = props;

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className="form-select"
                id={name}
                name={name}
            >
                <option value="" disabled>
                    Выберите вариант...
                </option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    )
};

export default SelectField;


// Когда мы передаем value из родительского компонента, 
// <select> ищет нужный <option> с подходящим 
// значением value и выбирает его. В начале, 
// при первом отображении компонента, 
// мы передаем пустую строку (так как в OrderForm 
// значение values.deliveryType задано как ""), 
// <select> ищет такой <option> с "" и находит 
//     его с текстом: "Выберите вариант...". 
//     Таким образом установился элемент по умолчанию.

// Теперь компонент будет работать корректно:

// Обрати внимание, что мы так же изменили 
// текст у дефолтного <option> (”Choose…”-> “Выберите вариант...”), 
// он будет отображаться по умолчанию для всех SelectField. 
// Скорее всего мы, как разработчики, 
// захотим передавать этот текст отдельно. 
// Добавим его в виде props с названием 
// defaultOption и сделаем необязательным указав дефолтное значение:


import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    const {
        label,
        name,
        value,
        onChange,
        error,
        options,
        defaultOption
    } = props;

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className="form-select"
                id={name}
                name={name}
            >
                <option value="" disabled>
                    {defaultOption}
                </option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.defaultProps = {
    defaultOption: "Выберите вариант..."
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    defaultOption: PropTypes.string
};

export default SelectField;

Для проверки передадим своё значение:

// ....

const OrderForm = () => {
		
    // ...
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
                    <button className="btn btn-primary w-100 mx-auto" type="submit">
                        Оформить
                    </button>
                </form>
            </FormLayout>
        );
    };

// Теперь, когда мы разобрались с вариантами, 
// разберёмся с отображением ошибок. 
// Начнём с того, что добавим правила 
// валидации для данного поля:

export const validationSchema = {
		
    // ...
        deliveryType: {
            isRequired: {
                message: "Выберите вариант доставки"
            }
        }
    }

// Так как пользователь только выбирает 
// фиксированные значения из списка, 
// нам достаточно убедиться в том, что поле заполнено. 
// Сохраняем и перезапускаем страницу. Но видим, что ошибка не выводится:

// Так происходит из-за особенностей отображения ошибки в Bootstrap. 
// Чтобы она стала отображаться, нужно 
// в зависимости от наличия ошибки менять класс у <select>:

import React from "react";
import PropTypes from "prop-types";

import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    const {
        label,
        name,
        value,
        onChange,
        error,
        options,
        defaultOption
    } = props;

    const getSelectClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    }

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className={getSelectClasses()}
                id={name}
                name={name}
            >
                <option value="" disabled>
                    {defaultOption}
                </option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};


// ...

// Теперь мы можем видеть, что ошибки отображаются корректно:

// Мы реализовали новый тип переиспользуемых полей 
// и разобрались как работает <select>. 
// В следующей части мы разберёмся как работать с <input type="radio">.
