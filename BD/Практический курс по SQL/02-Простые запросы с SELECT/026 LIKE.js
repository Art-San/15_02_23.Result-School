// % - placeholder (заполнитель) означающий 0, 1 и более символов
// _ - ровно 1 символ

// * LIKE 'U%' - строки начинающиеся с U
// * LIKE '%a' - строки, кончающиеся на а
// * LIKE '%Коля%' - строки, содержащие Коля
// * LIKE 'К%я' - строки, начинающиеся на К, и кончающиеся
// * LIKE '_oh_' - строки, где 2, 3 символы - oh, а первый(1) и последний(4) любые
// * LIKE '_oh%' - строки, где 2, 3 символы - oh, первый - любой и в конце 0, 1 и более любых символов

// SELECT last_name, first_name
// FROM employees
// WHERE first_name LIKE '%n'

// SELECT last_name, first_name
// FROM employees
// WHERE last_name LIKE 'B%'

// SELECT last_name, first_name
// FROM employees
// WHERE last_name LIKE 'Buc%'

// SELECT last_name, first_name
// FROM employees
// WHERE last_name LIKE '_uc%'
