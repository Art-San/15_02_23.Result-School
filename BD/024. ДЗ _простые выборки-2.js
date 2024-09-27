// https://github.com/EngineerSpock/postgres-course-ru/blob/master/02-%D0%9F%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5%20%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B%20%D1%81%20SELECT/12-%D0%94%D0%97-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5%20%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%BA%D0%B8%202-%D0%A0%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D0%B5.sql

// 1. Выбрать все заказы из стран France, Austria, Spain
// SELECT *
// FROM orders
// WHERE ship_country IN('France', 'Austria', 'Spain')

// SELECT *
// FROM orders
// WHERE ship_country = 'France' OR ship_country = 'Austria' OR ship_country = 'Spain'

// 2. Выбрать все заказы, отсортировать по requited_date (по убыванию)
// и отсортировать по дате отгрузке (по возрастанию)
// SELECT *
// FROM orders
// ORDER BY required_date DESC, shipped_date ASC

// 3. Выбрать минимальную цену среди тех продуктов, которых в продаже более 30 единиц
// SELECT MIN(unit_price)
// FROM products
// WHERE units_in_stock > 30

// 4 выбираем товары у которых цена больше 30,
// и находим среди них вариант с большем числом на остатке
// SELECT MAX(units_in_stock)
// FROM products
// WHERE unit_price > 30

// 5. Найти среднее значение дней уходящих на доставку с даты формирования заказа в USA
// SELECT AVG(shipped_date - order_date)
// FROM orders
// WHERE ship_country = 'USA'

// 6. Найти сумму, на которую имеется товаров (кол-во * цену) причём таких,
// которые планируется продавать и в будущем (см. на поле discontinued)
// SELECT SUM(unit_price * units_in_stock)
// FROM products
// WHERE discontinued <> 1
