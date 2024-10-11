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

// С начало отрабатываю FROM и WHERE а затем SELECT, и по этому не получится применять AS(алиас- псевдоним)
// но иожно использовать в GROUP B ORDER BY

// SELECT COUNT(*) AS employees_count
// FROM employees;

// SELECT COUNT(DISTINCT country) AS country
// FROM employees;

// SELECT category_id, SUM(units_in_stock) AS units_in_stock
// FROM products
// GROUP BY category_id
// ORDER BY units_in_stock DESC
// LIMIT 5;

// SELECT category_id, SUM(unit_price * units_in_stock) AS total_price
// FROM products
// WHERE discontinued <> 1
// GROUP BY category_id
// HAVING SUM(unit_price * units_in_stock) > 5000
// ORDER BY total_price DESC;
