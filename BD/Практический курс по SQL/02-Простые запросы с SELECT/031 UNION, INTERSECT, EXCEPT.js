// UNION - объединяет два селекта удаляет дубликаты
// INTERSECT - пересечение двух селектов
// EXCEPT  --  исключение или разница, это операция накладыват DISTINCT на результат из левой части выражения

// SELECT country
// FROM customers
// UNION
// SELECT country
// FROM employees

// 1 "Italy"
// 2 "Venezuela"
// 3 "Sweden"
// 4 "USA"
// 5 "Ireland"
// 6 "Germany"
// 7 "Canada"

// SELECT country
// FROM customers
// UNION ALL       // будут дубли
// SELECT country
// FROM employees

//=========================  INTERSECT  =====================================

// SELECT country
// FROM customers
// INTERSECT
// SELECT country
// FROM suppliers

// 1 "Spain"
// 2 "Italy"
// 3 "Norway"
// 4 "Sweden"
// Spain и другие здесь только потому что customers и suppliers из этих мест

//=========================  EXCEPT  =====================================

// SELECT country
// FROM customers
// EXCEPT
// SELECT country
// FROM suppliers

// в табличке customers есть только 9 стран в которых не проживают suppliers,
// то есть в табличке suppliers этих стран нет

// будет такой же список но с дубликатоми
// SELECT country
// FROM customers
// EXCEPT ALL
// SELECT country
// FROM suppliers
