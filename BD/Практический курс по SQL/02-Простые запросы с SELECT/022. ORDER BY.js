// 1. ASC в порядке возрастания сортирует от низких значений к высоким.
// 2. DESC устанавливает порядок сортировки по убыванию, от больших значений к меньшим.
// 3. Порядок сортировки по умолчанию — ASC.

// SELECT DISTINCT country
// FROM customers
// ORDER BY country  // по умолчанию стоит ASC

// SELECT DISTINCT country
// FROM customers
// ORDER BY country DESC

// SELECT DISTINCT country, city
// FROM customers
// ORDER BY country DESC, city DESC

//  в customers для country, city с помощью DISTINCT выводим значение без дублей,
// при этом поле country DESC сортируем в порядке убывания, а city ASC
// SELECT DISTINCT country, city
// FROM customers
// ORDER BY country DESC, city ASC
