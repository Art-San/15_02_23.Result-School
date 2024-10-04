// Групируем страны а в них количество заказов которые превышают вес 50 кг
// SELECT ship_country, COUNT(*)
// FROM orders
// WHERE freight > 50
// GROUP BY ship_country
// ORDER BY COUNT(*) DESC

// 1 "USA"	    61
// 2 "Germany"	58
// 3 "Austria"	33

// групируем по котегории и и считаем количество единиц товара,
// SELECT category_id, SUM(units_in_stock)
// FROM products
// GROUP BY category_id
// ORDER BY SUM(units_in_stock) DESC

// id k SUM
// 1. 8	701
// 2. 1	559
// 3. 2	507
// 4. 4	393

// SELECT category_id, SUM(unit_price * units_in_stock)
// FROM products
// WHERE discontinued <> 1
// GROUP BY category_id

// id k SUM
// 1  8	13010.349914550781
// 2  7	2363.75
// 3  1	11365.25
// 4  5	5230.5
// 5  4	11271.199989318848
