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

// SELECT customer_id
// FROM orders
// WHERE customer_id = customers.customer_id
// AND freight BETWEEN 50 AND 100

// SELECT company_name, contact_name
// FROM customers
// WHERE EXISTS (SELECT customer_id FROM orders
// 				WHERE customer_id = customers.customer_id
// 				AND freight BETWEEN 50 AND 100)

// SELECT company_name, contact_name
// FROM customers
// WHERE EXISTS (SELECT customer_id FROM orders
// 				WHERE customer_id = customers.customer_id
// 				AND order_date BETWEEN '1995-02-01' AND '1997-03-01')

// SELECT product_name
// FROM products
// WHERE NOT EXISTS (SELECT orders.order_id FROM orders
// 				  JOIN order_details USING(order_id)
// 				  WHERE order_details.product_id = product_id
// 				  AND order_date BETWEEN '1995-02-01' AND '1996-02-15'
// 				  )
