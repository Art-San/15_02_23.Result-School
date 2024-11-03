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

//============== Пример 1 =========================
// Запрос с под запрос
// SELECT company_name, country
// FROM suppliers
// WHERE country IN (SELECT DISTINCT country
//                   FROM customers)
// ORDER BY company_name

// В данном запросе мы получаем список компаний-поставщиков и стран,
// в которых они находятся. Запрос состоит из двух частей:
// 1. Подзапрос:

// *SELECT DISTINCT country FROM customers
// * Этот подзапрос выбирает все уникальные страны из таблицы customers.

// 2. Основной запрос:

// * SELECT company_name, country FROM suppliers
// * В основном запросе выбираются названия компаний и страны из таблицы suppliers.
// * Условие WHERE country IN (...) фильтрует поставщиков, оставляя только тех,
// которые находятся в странах, представленных в таблице customers.
// * ORDER BY company_name сортирует результат по названиям компаний
// в алфавитном порядке (от меньшего к большему).

// В результате запроса мы получаем две колонки: название компании
// (company_name) и страна (country), отсортированные по названию компании.

// Запрос с под запрос переписали с помощью INNER JOIN
// SELECT DISTINCT suppliers.company_name, suppliers.country
// FROM suppliers
// JOIN customers ON customers.country = suppliers.country
// ORDER BY suppliers.company_name

//============== Пример 2 =========================
// Выдуманый пример для демонстрации вычисляемого под запроса
// SELECT category_name, SUM(units_in_stock)
// FROM products
// INNER JOIN categories USING(category_id)
// GROUP BY category_name
// ORDER BY SUM(units_in_stock) DESC
// LIMIT (SELECT MIN(product_id + 4) FROM products)

// В данном запросе объединяются данные из таблиц products и categories,
// чтобы получить суммарное количество единиц товара на складе для каждой категории.
// Затем результат сортируется и ограничивается числом строк, которое вычисляется в подзапросе.

// 1. Выбор колонок:
// *category_name — название категории.
// *SUM(units_in_stock) — суммарное количество единиц товара на складе для каждой категории.

// 2. Соединение таблиц:
// * Выполняется INNER JOIN таблиц products и categories с использованием USING(category_id),
// что упрощает синтаксис объединения по общему столбцу category_id.

// 3. Группировка данных:
// * Данные группируются по колонке category_name, чтобы агрегировать информацию по категориям.

// 4. Сортировка результатов:
// * Результаты сортируются по суммарному количеству единиц товара на складе (SUM(units_in_stock)) в порядке убывания (DESC).

// 5. Ограничение количества строк:
// *Число строк, возвращаемых в результате, ограничивается значением, вычисленным в подзапросе:
// (SELECT MIN(product_id + 4) FROM products)

// *Этот подзапрос выбирает минимальное значение product_id из таблицы products и прибавляет к нему 4.

// В результате выполнения запроса мы получаем список категорий
// с их суммарным количеством единиц товара на складе, отсортированный
// по убыванию этого количества, с ограничением на количество строк,
// основанным на вычисленном значении из подзапроса.

//============== Пример 3 =========================
// с начала нащупали то что нужно
// SELECT AVG(units_in_stock)
// FROM products

// а затем вставили в качестве под запроса
// SELECT product_name, units_in_stock
// FROM products
// WHERE units_in_stock > (SELECT AVG(units_in_stock)
//                         FROM products)
// ORDER BY units_in_stock
