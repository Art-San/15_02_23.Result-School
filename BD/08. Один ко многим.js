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
