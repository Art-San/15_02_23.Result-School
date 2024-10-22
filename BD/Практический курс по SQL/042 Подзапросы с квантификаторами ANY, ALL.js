// ВИДЕО https://www.youtube.com/watch?v=_3rTKVFXz10&t=46s
// categories      -
// customers       - клиент
// employees       - сотрудники
// order_details   -
// region          - ренион
// shippers        - грузоотправители
// suppliers       - поставщики
// territories     - территории
// us_states       - США штаты
// quantity        - количество
// discount        - скидка
// units_in_stock  -единиц на складе

// SELECT DISTINCT customers.company_name
// FROM customers
// JOIN orders USING(customer_id)
// JOIN order_details USING(order_id)
// WHERE quantity > 40

// SELECT DISTINCT customers.company_name
// FROM customers
// WHERE customer_id = ANY(
// 	SELECT customer_id
// 	FROM orders
//     JOIN order_details USING(order_id)
// 	WHERE quantity > 40
// )

// -- Подзапрс
// SELECT AVG(quantity)
// FROM order_details

// SELECT DISTINCT product_name, quantity
// FROM products
// JOIN order_details USING(product_id)
// WHERE quantity > (
// 	SELECT AVG(quantity)
// 	FROM order_details
// )
// ORDER BY quantity

// -- Подзапрс
// SELECT AVG(quantity)
// FROM order_details
// GROUP BY product_id

// SELECT DISTINCT product_name, quantity
// FROM products
// JOIN order_details USING(product_id)
// WHERE quantity > ALL (
// 					SELECT AVG(quantity)
// 					FROM order_details
// 					GROUP BY product_id)
// ORDER BY quantity
