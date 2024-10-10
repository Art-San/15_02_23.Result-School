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

// Внешние соединение

// -- ========= LEFT JOIN и INNER JOIN выводят одинаковый набор ============
// SELECT company_name, product_name
// FROM suppliers
// LEFT JOIN products ON suppliers.supplier_id = products.supplier_id

// SELECT company_name, product_name
// FROM suppliers
// INNER JOIN products ON suppliers.supplier_id = products.supplier_id
// -- ======================================================================

// SELECT company_name, order_id
// FROM customers
// INNER JOIN orders ON orders.customer_id = customers.customer_id
// WHERE order_id IS NULL

// SELECT company_name, order_id
// FROM customers
// LEFT JOIN orders ON orders.customer_id = customers.customer_id
// WHERE order_id IS NULL

// -- ========================  LEFT ======================================

// SELECT last_name, order_id
// FROM employees
// LEFT JOIN orders ON orders.employee_id = employees.employee_id
// WHERE order_id IS NULL

// SELECT COUNT(*)
// FROM employees
// LEFT JOIN orders ON orders.employee_id = employees.employee_id
// WHERE order_id IS NULL

// -- ======================== RIGHT  =====================================

// SELECT company_name, order_id
// FROM orders
// RIGHT JOIN customers ON orders.customer_id = customers.customer_id
// WHERE order_id IS NULL
