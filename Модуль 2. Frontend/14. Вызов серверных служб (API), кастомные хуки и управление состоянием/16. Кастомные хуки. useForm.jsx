// В видеоуроке мы писали хуки для работы с качествами. 
// В данной части конспекта мы напишем кастомный хук для несколько других целей. 
// Но сперва мы разберёмся, что такое кастомные хуки. 

// Хуки (hooks) — это функции, которые позволяют 
// нам взаимодействовать с методами жизненного цикла и состоянием приложения. 

// Такое определение можно упростить. Если мы хотим вынести часть логики компонента, 
// и при этом тебе нужно использовать useState(), useMemo(), useCallback(), useContext() 
// и прочие хуки из React, то полученный результат будет называться хуком, 
// а не функцией. Далее разберем на примере, и станет яснее. 

// Важной особенностью хуков является то, что их нельзя вызывать 
// по какому-то условию или внутри цикла.

// Все хуки принято называть, начиная с use (например, useForm()). 

// Для понимания мы приведем пример из одного проекта, 
// где нужно было создать переиспользуемый хук для работы с поиском:

// Файл с хуком

import { useState, useCallback, useEffect } from 'react';
import { getSearchPost } from 'api';
import { debounce } from 'lodash';

// Обращение к API поиска
const getSearch = async (search) => {
  try {
    return await getSearchPost(search)
  } catch {
    return {}
  }
};

// Сам Хук
export const useSearch = () => {
  // Сотояние input для ввода строики поиска
  const [value, setValue] = useState('');

  // Результаты поиска
  const [data, setData] = useState(null);

  // Строка поиска для запроса на сервер
  const [query, setQuery] = useState('');

  // Функция для отчистки состояния
  const resetValue = useCallback(() => {
    setValue('');
    setQuery('');
    setData(null);
  }, [setData, setQuery, setValue]);


  /**
   * Изменения строки запроса с задержкой 200мс
   * нужно для оптимизации, чтобы не делать запрос
   * при измении каждой буквы в строке поиска.
   */
  const updateQuery = useCallback(
    debounce((value) => {
      setQuery(value);
    }, 200),
    [setQuery]
  );
  

  /**
   * Вызов useEffect() в момент изменения query
   * обращается на сервер за результатами поиска
   */
  useEffect(() => {
    if (query && query.length) {
      // Метод API для запроса на сервер
      getSearch(query).then((newData) => {
        // Устанавливается результат поиска
        setData(newData);
      })
    } else {
      // Если строка поиска пуста, то результаты отчищаются
      setData(null);
    }
  }, [query]);

  // Функция для изменения значения строки поиска
  const onChange = useCallback(
    (e) => {
      const { value } = e.target;
      setValue(value);
      updateQuery(value);
    },
    [setValue]
  );

  // Возвращаются функции и значения для работы с поиском
  return [value, onChange, data, resetValue];
};

// Из хука можно возвращать любую структуру данных. 
// Чаще всего это объект или массив. Массив будет более полезен 
// для тех случаев, когда нужен простой способ для объявления разных переменных. 
// Это хорошо демонстрирует useState():

const [value1, setValue1] = useState();
const [value2, setValue2] = useState();

// Причем здесь важен порядок элементов. На первом месте всегда значение, 
// а на втором — функция для обновления значения.

// Если бы useState() возвращал объект, то было бы сложнее с ним работать. 
// Это выглядело бы примерно так: 

const { value: value1, setValue: setValue2 } = useState();
const { value: value2, setValue: setValue2 } = useState();

// Стало менее удобно. Но теперь нам не важен порядок, 
// так как мы четко указываем, какое значение получаем. 
// Учитывай эти особенности при проектировании своих хуков.

// В нашем примере формы заказа мы можем создать хук для работы с формой заказа. 
// Создадим файл /src/components/order-form/use-order-form.js 
// (в той же папке, что и сама форма) и перенесём сюда логику работы с формой, 
// валидацией и отправкой на сервер:

import { useState, useEffect } from "react";
import { parceYupError } from "../../utils/parceYupError";
import { createOrder } from "../../api/request";

export const useOrderForm = (initialState, validationSchema) => {
    const [values, setValues] = useState(initialState);
    const [schema] = useState(validationSchema);

    const [errors, setErrors] = useState({});

    const isValid = Object.keys(errors).length === 0;

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    useEffect(() => {
        schema
            .validate(values, { abortEarly: false })
            .then(() => {
                setErrors({});
            })
            .catch((yupError) => {
                const errors = parceYupError(yupError);
                setErrors(errors);
            });
    }, [values, schema]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            setLoading(true);
            createOrder(values)
                .then((data) => {
                    console.log(data);
                })
                .catch((e) => {
                    console.log(e.response);
                })
                .finally(() => setLoading(false));
        }
    };

    return {
        values,
        handleChange,
        loading,
        isValid,
        handleSubmit,
        errors
    };
};

// Входящие параметры — начальное значение формы и схема валидации. 

// Использование в компоненте выглядит вот так:

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
import { useOrderForm } from "./use-order-form";

const OrderForm = () => {
    const initialState = {
        fio: "",
        email: "",
        address: "",
        deliveryType: "",
        needLiftFloor: "",
        gifts: [],
        agreement: []
    };

    const {
        handleSubmit,
        values,
        handleChange,
        errors,
        loading
    } = useOrderForm(initialState, validationSchema);

    return (
        <FormLayout title="Оформление заказа">
            <form onSubmit={handleSubmit}>
                {/** ... */}
            </form>
        </FormLayout>
    );
};

export default OrderForm;

// Хуки создаются довольно легко, 
// и мы можем выносить часть логики компонента в них. 