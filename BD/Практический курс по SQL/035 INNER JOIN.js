// Внутреннее соединение
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

//    tab1           tab2
//  k1  data-1     k2  data-2
//   1    1         1    10
//   2    2         2    20
//   3    3         5    50
//   4    4         6    60

//                                          d1   d2
// SELECT d1, d2                             1   10
// FROM tab1                                 2   20
// INNER JOIN tab2 ON tab1.k1 = tab2.k2

//                                          d1   d2
// SELECT d1, d2                             1   10
// FROM tab1                                 2   20
// LEFT JOIN tab2 ON tab1.k1 = tab2.k2       3   NULL
//                                           4   NULL

//                                          d1   d2
// SELECT d1, d2                             1   10
// FROM tab1                                 2   20
// LEFT JOIN tab2 ON tab1.k1 = tab2.k2    NULL   50
//                                        NULL   60

// ========================  ===================================================
// SELECT product_name, suppliers.company_name, units_in_stock
// FROM products
// INNER JOIN suppliers ON products.supplier_id = suppliers.supplier_id
// ORDER BY units_in_stock DESC

// Связываем колонку продукты и поставщиков через supplier_id в каждой таблице
// В результирующем наборе получим три колонки название продукта, название компании поставщика,
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

// В результирующем наборе будет две колонки: первая колонка содержит названия категорий,
// сгруппированных по всем продуктам, относящимся к каждой категории; вторая колонка содержит
// сумму всех единиц товара на складе для каждой категории.

// Для этого мы выполняем INNER JOIN таблицы products с таблицей categories по колонке category_id,
// группируем результаты по имени категории, сортируем их по сумме единиц на складе
// в порядке убывания и ограничиваем результат пятью строками.
// ========================  ===================================================

// SELECT category_name, SUM(unit_price * units_in_stock)
// FROM products
// INNER JOIN categories ON products.category_id = categories.category_id
// WHERE discontinued <> 1
// GROUP BY category_name
// HAVING SUM(unit_price * units_in_stock) > 5000
// ORDER BY SUM(unit_price * units_in_stock) DESC

// В результирующем наборе будет две колонки: первая колонка содержит названия категорий,
// сгруппированных по всем продуктам, относящимся к каждой категории;
//  вторая колонка содержит общую стоимость всех товаров, относящихся к данной категории.
//  Выбираются только те категории, у которых общая стоимость товаров превышает 5000,
//  и результаты отсортированы в порядке убывания.

// ========================  ===================================================
// SELECT order_id, customer_id, first_name, last_name, title
// FROM orders
// INNER JOIN employees ON orders.employee_id = employees.employee_id

// В данном запросе объединяются данные из двух таблиц: orders и employees. В результате мы получаем следующие колонки:

// order_id — айди заказа.
// customer_id — айди клиента.
// first_name — имя сотрудника, связанного с этим заказом.
// last_name — фамилия сотрудника, связанного с этим заказом.
// title — должность (тайтл) сотрудника, связанного с этим заказом.
// INNER JOIN объединяет таблицы по колонке employee_id, чтобы связать заказы с соответствующими сотрудниками.

// ========================  ===================================================

// SELECT order_date, product_name, ship_country, products.unit_price, quantity, discount
// FROM orders
// INNER JOIN order_details ON orders.order_id = order_details.order_id
// INNER JOIN products ON order_details.product_id = products.product_id

// В данном запросе объединяются данные из трёх таблиц: orders, order_details и products. В результате мы получаем следующие колонки:

// order_date — дата заказа.
// product_name — название продукта.
// ship_country — страна доставки.
// products.unit_price — цена за единицу продукта.
// quantity — количество заказанного продукта.
// discount — скидка на продукт.
// INNER JOIN объединяет таблицы по соответствующим колонкам, чтобы связать заказы с их деталями и продуктами.

// ========================  ===================================================

// SELECT contact_name, company_name, phone, first_name, last_name, title,
//        order_date, product_name, ship_country, products.unit_price, quantity, discount
// FROM orders
// JOIN order_details ON orders.order_id = order_details.order_id
// JOIN products ON order_details.product_id = products.product_id
// JOIN customers ON orders.customer_id = customers.customer_id
// JOIN employees ON orders.employee_id = employees.employee_id
// WHERE ship_country = 'USA'
