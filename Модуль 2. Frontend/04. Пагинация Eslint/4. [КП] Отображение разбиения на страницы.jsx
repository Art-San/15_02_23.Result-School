<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

// У нас есть обёртка <nav> c <ul> и несколько элементов <li> с <a>. 
// Элементы <li> повторяются, их нужно будет вывести с помощью цикла. 
// Но сперва перенесём верстку:

const Pagination = (props) => {
    return (
      <nav>
        <ul className="pagination">
          {/* li будут повторяться */}
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
        </ul>
      </nav>
    );
  };

//   Теперь давайте разберёмся, как получить первоначальный массив страниц.


// У нас есть переменные pageSize (количество элементов на странице) и itemsCount 
// (всего элементов) в props. Чтобы получить количество страниц, 
// нужно разделить количество всех записей на количество записей на странице.  
// Но нужно не забыть, что мы можем получить нечётное число, 
// поэтому нужно округлить получившееся значение в большую сторону. 

const Pagination = (props) => {
    const { itemsCount, pageSize } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    console.log({ pageCount }); // 3
  
    return (
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link">1</a>
          </li>
        </ul>
      </nav>
    );
  };

//   * Можно выводить переменные в консоль как объект. 
//   Таким образом вы сразу имя выводимой переменной.

// Далее мы должны создать массив из нашего числа, 
// чтобы потом выводить кнопки для переключения. 
Для этого используем библиотеку Lodash. Установим её через консоль: npm i lodash@4.17.15

// После установки воспользуемся методом range() из библиотеки. 
// Если в этот метод мы передадим 2 аргумента, то первый будет начальным значением массива,
//  а второй - конечным числом. Значениями массива будут числа 
//  в промежутке между начальным и конечным (не включая конечное). 

_.range(1, 5) // => [1, 2, 3, 4]

// Создадим массив элементов в нашем компоненте и выведем все кнопки

import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pageCount = Math.ceil(itemsCount / pageSize); // 3

  const pages = _.range(1, pageCount + 1); // [1, 2, 3]

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

// Наш pageCount равен 3, и мы хотим получить 3 элемента в массиве. 
// Чтобы это сделать, вторым параметром в метод range(), мы передаём pageCount + 1 
// (так как в данном методе второй параметр не включается в массив). 


// Иногда могут быть случаи, что pageSize больше, чем количество элементов в хранилище. 
// Тогда нет никакого смысла выводить кнопки. Давай допишем проверку для этого случая 
// и не будем выводить компонент. 

const Pagination = (props) => {
    const { itemsCount, pageSize } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page} className="page-item">
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

//   Если pageCount равна 1, то ничего не выводим. 