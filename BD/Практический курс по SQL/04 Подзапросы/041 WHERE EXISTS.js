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

// ====================== 1 ====================================
// это подзапрос, сам по себе он не работает
// SELECT customer_id
// FROM orders
// WHERE customer_id = customers.customer_id
// AND freight BETWEEN 50 AND 100

// .. В выборку попадет те для которых в под запросе будет хоть одна запись
// SELECT company_name, contact_name
// FROM customers
// WHERE EXISTS (SELECT customer_id FROM orders // EXISTS возвращает True если в под запросе есть одна и более строк, если 0 то будет false
// 				WHERE customer_id = customers.customer_id // по сути это join
// 				AND freight BETWEEN 50 AND 100)

// =========== тот же результат только без EXISTS
// SELECT company_name, contact_name
// FROM customers
// WHERE customer_id IN (SELECT DISTINCT customer_id
//                     FROM orders
//                     WHERE freight BETWEEN 50 AND 100)

// ====================== 2 ====================================
// подобие первого примера
// SELECT company_name, contact_name // Не было тут ни одного
// FROM customers
// WHERE EXISTS (SELECT customer_id FROM orders
// 				WHERE customer_id = customers.customer_id
// 				AND order_date BETWEEN '1995-02-01' AND '1995-02-15')

// .. Инвертировали с помощью NOT  // и их там куча
// SELECT company_name, contact_name
// FROM customers
// WHERE NOT EXISTS (SELECT customer_id FROM orders
//         WHERE customer_id = customers.customer_id
//         AND order_date BETWEEN '1995-02-01' AND '1995-02-15')

// ====================== 3 ====================================
// Продукты которые не покупались в периуд '1995-02-01' AND '1996-02-15'
// SELECT product_name
// FROM products
// WHERE NOT EXISTS (SELECT orders.order_id FROM orders
// 				  JOIN order_details USING(order_id)
// 				  WHERE order_details.product_id = product_id
// 				  AND order_date BETWEEN '1995-02-01' AND '1996-02-15'
// 				  )
