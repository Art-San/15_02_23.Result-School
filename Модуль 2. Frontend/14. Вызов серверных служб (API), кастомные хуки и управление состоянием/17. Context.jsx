// Контекст позволяет передавать данные через дерево 
// компонентов без необходимости передавать пропсы 
// на промежуточных уровнях. Обычно мы передаём данные 
// от родительского компонента к дочернему, 
// о не всегда это удобно, так как вложенность 
// компонентов может быть сильно большой 
// и нам станет неудобно передавать данные. 
// Мы можем использовать для передачи данных Context.

// Добавим его для нашего заказа. 
// Создадим файл /src/order-context.js, и в нём создадим контекст:

import React from "react";

export const OrderContext = React.createContext("default value");

// Для создания контекста нужно вызвать 
// метод React.createContext() и передать ему начальное значение. 

// Далее мы обернём наши компоненты внутри /src/App.js, 
// чтобы получать доступ к контексту во всех потомках:

import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OrderPage from "./pages/orderPage";
import { OrderContext } from "./order-context";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <div className="container mt-4">
            <OrderContext.Provider value="my value">
                <Switch>
                    <Route path="/" exact component={OrderPage} />
                </Switch>
            </OrderContext.Provider>
            <ToastContainer />
        </div>
    );
}

// Чтобы в контексте появилось значение, 
// требуется для OrderContext.Provider 
// передать атрибут value с нужным значением 
// (в том числе можно передать объект / массив 
// с несколькими значениями). 

// И теперь попробуем его получить в OrderForm:

import React, { useState, useEffect, useContext } from "react";
// ...
import { OrderContext } from "../../order-context";

const OrderForm = () => {
    // ...

    const contextValue = useContext(OrderContext);

    return (
        <FormLayout title="Оформление заказа">
            {contextValue}
            <form onSubmit={handleSubmit}>
                {/* ... */}
            </form>
        </FormLayout>
    );
};

export default OrderForm;


// Мы импортировали хук useContext() и созданный нами OrderContext. 
// При вызове useContext() мы передаём наш контекст (OrderContext) 
// и получаем значение (установили его в App). 
// Для проверки выведем значение в форме:

// Отлично, значение получено и выведено! 🎉

// Мы можем представить, что планируем внедрить компонент 
// с некоторым общим описанием заказа, 
// и для него нам нужны будут детали заказа. 
// Для этого создадим новый компонент и вызовем его в OrderPage:

// /src/components/order-form/orderSummary.js

import React from "react";

const OrderSummary = () => {
    return (
        <div className="card">
            <div className="card-body">
                <div>ФИО</div>
                <div>Доставка</div>
                <div>Поъем на этаж</div>
                <div>Подарок</div>
            </div>
        </div>
    );
};

export default OrderSummary;

// /src/pages/orderPage.jsx

import React from "react";
import OrderForm from "../components/order-form/orderForm";
import OrderSummury from "../components/order-form/orderSummury";

const OrderPage = () => {
    return (
        <div className="d-flex">
            <OrderForm />
            <OrderSummary />
        </div>
    );
};

export default OrderPage;

// Теперь сделаем доработку в нашем контексте и сделаем так, 
// чтобы данные из формы попадали в контекст:

// /src/order-context.js

import React, { useContext } from "react";
import { useOrderForm } from "./components/order-form/use-order-form";
import { validationSchema } from "./components/order-form/validationSchema";

export const OrderContext = React.createContext("default value");

export const OrderContextProvider = ({ children }) => {
    const initialState = {
        fio: "",
        email: "",
        address: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: [],
        agreement: []
    };

    const order = useOrderForm(initialState, validationSchema);

    return (
        <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
    );
};

export const useOrderContext = () => useContext(OrderContext);

// Мы добавили компонент-обёртку OrderContextProvider 
// для работы с заказом и передачи значения в контекст.
//  А также хук useOrderContext() для обращения к контексту. 
//  Заменим OrderContext.Provider на OrderContextProvider в App:

import "./styles.css";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OrderPage from "./pages/orderPage";
import { OrderContextProvider } from "./order-context";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    return (
        <div className="container mt-4">
            <OrderContextProvider>
                <Switch>
                    <Route path="/" exact component={OrderPage} />
                </Switch>
            </OrderContextProvider>
            <ToastContainer />
        </div>
    );
}

// Далее используем новый хук в OrderForm:

import React from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import MultiSelect from "../multiSelect";
import CheckboxField from "../checkboxField";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList,
    agreements
} from "./fieldsOpions";
import { useOrderContext } from "../../order-context";

const OrderForm = () => {
    const {
        handleSubmit,
        values,
        handleChange,
        errors,
        loading
    } = useOrderContext();

    return (
        <FormLayout title="Оформление заказа">
            {loading && "Загрузка..."}
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

// И теперь мы также можем использовать данные из контекста в OrderSummary:

// Вот, таким образом мы создали контекст 
// и передали данные из него в разные участки приложения. 
// Однако в текущей реализации есть существенный недостаток, 
// который нужно учитывать в production-разработке. 
// Сейчас мы создали пример для обучения. 
// В реальном же проекте при каждом обновлении значений 
// в форме у нас будут ререндериться все потомки App. 
// Это может значительно ухудшить производительность. 

// В библиотеках, которые используют провайдеры, 
// создаются специальные меры для того, 
// чтобы переданное value в provider не изменялось. 
// Как это организовать самостоятельно, ты научишься 
// с увеличением опыта разработки на JS. 
// А пока лучше воздержаться от использования 
// контекста для корня всего приложения, 
// и либо делать это аккуратно, 
// либо использовать специализированные библиотеки,
//  предоставляющие такие возможности. 