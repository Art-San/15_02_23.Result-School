// Пост фильтр
// HAVING - фильтр вторичный
// ставиться перед ORDER BY

// SELECT category_id, SUM(unit_price * units_in_stock)
// FROM products
// WHERE discontinued <> 1
// GROUP BY category_id
// HAVING SUM(unit_price * units_in_stock) > 5000
// ORDER BY SUM(unit_price * units_in_stock) //

// id k SUM
// 1  5	5230.5
// 2  3	10392.200072288513
// 3  4	11271.199989318848
// 4  1	11365.25
// 5  2	11926.04999923706
// 6  8	13010.349914550781
