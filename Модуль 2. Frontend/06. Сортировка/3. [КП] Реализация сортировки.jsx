// Итоговый код приложения из конспекта (получится после прочтения): 
// https://codesandbox.io/s/react-konspekty-6-sortirovka-v2umk9?file=/src/index.js

// Реализация сортировки
// Сортировка – это способ упорядочивания элементов в списке по некоторому признаку. 

// В React мы храним списки сущностей как массив объектов. 
// Ключ объекта, как правило, и есть признак. 

Для получения этого списка мы воспользовались
https://fakestoreapi.com/products

// Каждое из полей внутренних объектов может стать признаком 
// для сортировки и по-разному фильтроваться, 
// в зависимости от переданной функции сортировки. 
// Далее мы будем указывать конкретную функцию для каждого признака 
// (для цены - одна сортировка, для рейтинга - другая). 

// Чтобы увидеть это самим, создадим компонент и сделаем переключатель для сортировки:

// Файл productList.jsx
import React, { useState } from "react";
import { products as productsFromData } from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";

// Варинты выбора признака сортировки
const sortOptions = [{ value: "price", label: "Цена" }];

const ProductList = () => {
  // Наши товары
  const [products] = useState(productsFromData);
  
  // Хранение признака сортировки
  const [sortSign, setSortSign] = useState("price"); 
  
	// Метод для изменения признака сортировки
	const handleChangeSortSign = (e) => { 
    setSortSign(e.target.value);
  };

  return (
    <div className="container mt-t">
      <div>
				{/* Компонент выбора признака сортировки */}
        <SortSelect
          value={sortSign}
          options={sortOptions}
          onSort={handleChangeSortSign}
        />
      </div>
      <div className="row mt-4">
        {products.map((product) => (
					// Список товаров
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// Реализуем карточку продукта product.jsx:

import React from "react";
import PropTypes from "prop-types";

const Product = ({ id, image, title, price, description }) => {
  return (
    <div key={id} className="col-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Product;

// И сам компонент переключения сортировки sortSelect.jsx:

import React from "react";
import PropTypes from "prop-types";

const SortSelect = ({ value, options, onSort }) => {
  return (
    <div className="d-flex align-items-center mt-4">
      <span className="d-block me-2">сортировка</span>
      <select className="form-select" value={value} onChange={onSort}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

SortSelect.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sort: PropTypes.func.isRequired
    })
  ).isRequired,
  onSort: PropTypes.func.isRequired
};

export default SortSelect;

// Теперь ты можешь увидеть у себя на экране список товаров и компонент для сортировки:

// Реализуем первую сортировку. Для этого нам нужно отслеживать изменение параметра sortSign 
// и вызвать сортировку для наших товаров. А ещё нам потребуется соответствие признака 
// и метода сортировки. То есть для каждого признака сортировки своя функция:

import React, { useState, useEffect } from "react";
import { products as productsFromData } from "../data/products";
import Product from "./product";
import SortSelect from "./sortSelect";
import _ from "lodash";

const sortOptions = [
  {
    value: "price", // Признак, в sort функция для сортировки 
    label: "Цена",
		
// Фильтруем продукты в порядке возрастания 
    sort: (products) => _.orderBy(products, ["price"], ["desc"])
  }
];

const ProductList = () => {
  const [products] = useState(productsFromData);
	
// Переменная для хранения сортированных товаров
  const [sortProducts, setSortProducts] = useState(productsFromData); 
  // Установим сортировку по умолчанию
  const [sortSign, setSortSign] = useState("price");
  const handleChangeSortSign = (e) => {
    setSortSign(e.target.value);
  };

	
// отслеживаем изменение признака сортировки или списка товаров
  useEffect(() => {
		
// В sortOptions ищем признак по которому сортируем 
    const findOption = sortOptions.find(({ value }) => value === sortSign);
		
// Если такой признак есть
    if (findOption) {
			
// Вызываем нужный метод сортировки
      setSortProducts(findOption.sort(products));
    } else {
			
// Если не нашли то просто устанавливаем продукты
      setSortProducts(products);
    }
  }, [sortSign, products]);

  return (
    <div className="container mt-t">
      <div>
        <SortSelect
          value={sortSign}
          options={sortOptions}
          onSort={handleChangeSortSign}
        />
      </div>
      <div className="row mt-4">
        {sortProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

// Для сортировки мы воспользовались методом 
// orderBy() (_.orderBy(products, ["price"], ["asc"])) из lodash. 
// Посмотрим на него внимательно. Этот метод принимает:

// 1. Массив объектов
// 2. Названия полей объекта, по которым будет происходить сортировка
// 3. Типы сортировки. Если указано asc, то по возрастанию, если desc – убыванию.

// Сортировка будет происходить по значениям полей объекта, 
// указанных вторым параметром. Если указано несколько полей и типов, 
// то они будут применяться соответственно:

const users = [
    { user: 'ben',   age: 30 },
    { user: 'alex', age: 18 },
    { user: 'ben',   age: 25 },
    { user: 'alex', age: 20 }
  ];
   
  // `user` по возрастанию и `age` по убыванию.
  _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
  // [['alex', 20], ['alex', 18], ['ben', 30], ['ben', 25]]

//   Сейчас в sortOptions только один метод, и он по возрастанию сортирует наш список товаров. 
//   Сделаем для каждого случая отдельно:

// Переименовали опции и для каждой установили собственный метод.
const sortOptions = [
    {
      value: "priceASC",
      label: "Цена по возрастанию",
      sort: (products) => _.orderBy(products, ["price"], ["asc"])
    },
    {
      value: "priceDESC",
      label: "Цена по убыванию",
      sort: (products) => _.orderBy(products, ["price"], ["desc"])
    }
  ];

//   И в ProductList.jsx для sortSign также изменим значение по умолчанию, 
//   например, на "priceDESC".

// Давай добавим ещё сортировку по рейтингу. Но сперва выведем его на страницу:

import React from "react";
import PropTypes from "prop-types";

const Product = ({ id, image, title, price, description, rating }) => {
  return (
    <div key={id} className="col-4">
      <div className="card">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Buy now
          </a>
        </div>
        <div className="card-footer">
          <small className="text-muted">rating {rating.rate}</small>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired
  }).isRequired
};

export default Product;

// И добавим в sortOptions:

const sortOptions = [
    {
      value: "priceASC",
      label: "Цена по возрастанию",
      sort: (products) => _.orderBy(products, ["price"], ["asc"])
    },
    {
      value: "priceDESC",
      label: "Цена по убыванию",
      sort: (products) => _.orderBy(products, ["price"], ["desc"])
    },
    {
      value: "ratingASC",
      label: "Рейтинг по возрастанию",
      sort: (products) => _.orderBy(products, ["rating.rate"], ["asc"])
    },
    {
      value: "ratingDESC",
      label: "Рейтинг по убыванию",
      sort: (products) => _.orderBy(products, ["rating.rate"], ["desc"])
    }
  ];

//   Обрати внимание, что по ключу rating находится объект, 
//   и нужно обращаться через точку к его полям (rating.rate).

// Нативные методы

// В примерах выше мы использовали метод из библиотеки lodash. 
// В некоторых проектах использование подобных библиотек может 
// быть запрещено и тебе нужно будет самостоятельно писать методы сортировки. 
// Давай на примере цены рассмотрим, как можно написать собственную сортировку.

// В JS существует метод массива sort(), но в нем есть подвох. 

Разберёмся на примере

// Представим, что у нас есть массив чисел const arr = [1, 2, 3], и мы хотим 
// задать значения в порядке убывания. Мы вызовем метод sort() для массива. 
// В него нужно передать callback, который принимает два значения (a и b) из этого массива, 
// сравнивает их и возвращает значение:

// 1. меньше 0, если a нужно поставить по меньшему индексу
// 2. больше 0, если a нужно поставить b по меньшему индексу
// 3. 0, если нужно оставить порядок неизменным

const arr = [1, 2, 3];
const result1 = arr.sort((a, b) => b > a ? 1 : -1); // [3, 2, 1]
// или (callback будет возвращать значения больше, меньше или равно 0)
const result2 = arr.sort((a, b) => b - a); // [3, 2, 1]

// Но теперь, если мы сравним arr и result, то увидим, что они равны:

console.log(arr === result1); // true
console.log(arr === result2); // true

// Ссылка на массив не изменилась и это значит, 
// что метод sort() сортирует текущий массив, 
// а не создаёт новый, как, например, методы map() , 
// filter() или slice():

const arr = [3, 2, 1];
const a = arr.sort();
console.log(a === arr); // true

const b = arr.slice();
console.log(b === arr); // false

// Попытка воспользоваться в React-приложении метода без создания нового массива, 
// приведёт к изменению данных, которые мы не планировали менять, непредсказуемому 
// поведению и часам дебага. 

// Неверный способ:

{
  value: "priceASC",
  label: "Цена по возрастанию",
  sort: (products) =>
    products.sort((itemA, itemB) => {
      return itemA.price - itemB.price;
    })
},

// При попытке воспользоваться этим методом, мы незаметно изменим 
// массив products - это некорректно. Чтобы этого избежать, 
// нам нужно каким-то образом вернуть новый массив перед сортировкой. 
// Например, можно использовать метод массива slice():

products.slice().sort((itemA, itemB) => {
  return itemA.price - itemB.price;
})

// Подобное можно реализовать через Spread-syntax:

[...products].sort((itemA, itemB) => {
  return itemA.price - itemB.price;
})

// Итоги

// Сортировка – упорядочивание элементов в списке. 
// Для определения порядка используется некоторый метод, 
// по которому происходит сортировка. 
// Для сортировки можно использовать различные 
// библиотеки или нативный метод sort() с передачей callback 
// функции для изменения порядка. При использовании нативного 
// метода нужно помнить о том, что он мутирует (изменяет) текущий массив. 

// Полезные ссылки

// Lodash orderBy(): ссылка  https://lodash.com/docs/4.17.15#orderBy

// Array.prototype.sort(): ссылка https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Array.prototype.slice(): ссылка https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice