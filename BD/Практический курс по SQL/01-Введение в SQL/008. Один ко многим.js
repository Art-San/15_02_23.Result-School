// https://www.youtube.com/watch?v=HVQNxdI6fqY&list=PLBheEHDcG7-k1Y_Uy04Dj2ylWhcfSfqoF&index=1&t=4s
// https://github.com/EngineerSpock/postgres-course-ru/tree/master/01-%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20SQL

// CREATE TABLE publisher
// (
// 	publisher_id integer PRIMARY KEY,
// 	org_name VARCHAR(128) NOT NULL,
// 	address text NOT NULL
// );

// CREATE TABLE book
// (
//     book_id integer PRIMARY KEY,
//     title text NOT NULL,
//     isbn VARCHAR(38) NOT NULL,
// 	  fk_publisher_id int REFERENCES publisher(publisher_id) NOT NULL
// )

// вставка данных

// INSERT INTO book
// VALUES
// (1, 'ВОЙНА и мир', '8765488', 2),
// (1, 'ВОЙНА и мир', '8765488', 2),
// (1, 'ВОЙНА и мир', '8765488', 1);

// INSERT INTO publisher
// VALUES
// (1, 'Три '' кита', 'Томск'), // ковычка перед ковычкой это экранирование
// (2, 'Три '' кита', 'Н/у'),
// (3, 'Три '' кита', 'Кемерово')

// получение

// SELECT *
// FROM book
