// При создании компонентов нам нужно учитывать, что мы не всегда можем помнить, 
// какие параметры нужно передавать и каких типов они должны быть. 
// Также компоненты можем использовать не мы, а наши коллеги. 
// Нам очень важно передавать параметры правильно, чтобы всё отображалось и работало корректно. 
// Для этого существует пакет PropTypes. 

// Чтобы его использовать, нужно компоненту добавить свойство propTypes. 
// Установим библиотеку и используем для компонента Pagination.

npm i prop-types

impt - имрорт проп тайпса

// pagination.jsx
import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types';

const Pagination = (props) => {
  // ...
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired, 
    currentPage: PropTypes.number.isRequired,
}

// В объекте propTypes перечислены атрибуты компонента и их типы:

// itemsCount – число, как и pageSize с currentPage
// onPageChange – функция

// Свойство isRequired указывает, что параметр обязательный. 

// Теперь, если мы попытаемся вызвать компонент с неправильными данными, 
// то увидим ошибку. Например, если заменить itemsCount на строку, 
// то в консоли появится предупреждение: 

// Подробнее о PropTypes вы можете прочитать на данной странице:

// https://www.npmjs.com/package/prop-types
