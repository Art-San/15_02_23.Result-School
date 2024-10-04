// получили две колонки город дата из заказов
// для города Лондон с сортировко по ASC в колнке дата
// SELECT ship_city, order_date
// FROM orders
// WHERE ship_city = 'London'
// ORDER BY order_date

// получаем одну старую дату для города Лондон, из заказов (1996-04-29)
// SELECT MIN(order_date)
// FROM orders
// WHERE ship_city = 'London'

// получаем одну свежую дату, из заказов (1998-04-29)
// SELECT MAX(order_date)
// FROM orders
// WHERE ship_city = 'London'

// получаем среднее значение из столбца unit_price,
// только для тех строк у которых в строке discontinued не стоит 1
// SELECT AVG(unit_price)
// FROM products
// WHERE discontinued != 1

// Считаем общее количество (штук) товара, не включая те товары у которых discontinued стоит 1
// SELECT SUM(units_in_stock) // 2962
// FROM products
// WHERE discontinued <> 1
