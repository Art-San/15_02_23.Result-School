// Логические опраторы AND-и OR-или

// SELECT *
// FROM orders
// WHERE freight >= 20 AND freight <= 40;

// --  BETWEEN упрощает запись, эта записи эквивалентна верхней
// SELECT COUNT(*)
// FROM orders
// WHERE freight BETWEEN 20 AND 40;

// SELECT *
// FROM orders
// WHERE order_date > '1998-03-30' AND order_date < '1998-04-03'
// -- разные запросы
// SELECT *
// FROM orders
// WHERE order_date BETWEEN '1998-03-30' AND '1998-04-03'

// SELECT *
// FROM products
// WHERE unit_price > 25 AND units_in_stock > 40;

// SELECT *
// FROM customers
// WHERE city = 'Berlin' OR city = 'London' OR city = 'San Francisco';

// SELECT *
// FROM orders
// WHERE shipped_date > '1998-04-30' AND (freight < 75 OR freight > 150);
