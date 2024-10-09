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

// ========================  ===================================================
// SELECT product_name, suppliers.company_name, units_in_stock
// FROM products
// INNER JOIN suppliers ON products.supplier_id = suppliers.supplier_id
// ORDER BY units_in_stock DESC

// Связываем колонку продукты и постовщиков через supplier_id в каждой таблице
// В результироющем наборе получим три колонки название продукта, название компании поставщика,
// кол единиц на складе отсортировано от большего к меньшему

//     product_name,                     suppliers.company_name,              units_in_stock
// 1  "Rhönbräu Klosterbier"	           "Plutzer Lebensmittelgroßmärkte AG"	125
// 2  "Boston Crab Meat"	                "New England Seafood Cannery"	      123
// 3  "Grandma's Boysenberry Spread"	    "Grandma Kelly's Homestead"	        120
// ========================  ===================================================

// SELECT category_name, SUM(units_in_stock)
// FROM products
// INNER JOIN categories ON products.category_id = categories.category_id
// GROUP BY category_name
// ORDER BY SUM(units_in_stock) DESC
// LIMIT 5

// SELECT category_name, SUM(unit_price * units_in_stock)
// FROM products
// INNER JOIN categories ON products.category_id = categories.category_id
// WHERE discontinued <> 1
// GROUP BY category_name
// HAVING SUM(unit_price * units_in_stock) > 5000
// ORDER BY SUM(unit_price * units_in_stock) DESC

// SELECT order_id, customer_id, first_name, last_name, title
// FROM orders
// INNER JOIN employees ON orders.employee_id = employees.employee_id

// SELECT order_date, product_name, ship_country, products.unit_price, quantity, discount
// FROM orders
// INNER JOIN order_details ON orders.order_id = order_details.order_id
// INNER JOIN products ON order_details.product_id = products.product_id

// SELECT contact_name, company_name, phone, first_name, last_name, title,
//        order_date, product_name, ship_country, products.unit_price, quantity, discount
// FROM orders
// JOIN order_details ON orders.order_id = order_details.order_id
// JOIN products ON order_details.product_id = products.product_id
// JOIN customers ON orders.customer_id = customers.customer_id
// JOIN employees ON orders.employee_id = employees.employee_id
// WHERE ship_country = 'USA'
