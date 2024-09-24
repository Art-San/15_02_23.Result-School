// Логические опраторы AND-и OR-или

// это из видео

// SELECT *
// FROM products
// WHERE unit_price > 25 AND units_in_stock > 40

// SELECT *
// FROM customers
// WHERE city = 'London' OR city = 'Berlin' OR city = 'San Francisco'

// SELECT *
// FROM orders
// WHERE shipped_date > '1998-04-30' AND (freight < 70 OR freight > 150)

//=======================================================================
// это из ютуб

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
