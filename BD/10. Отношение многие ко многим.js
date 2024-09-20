// SELECT *
// FROM person

// DROP TABLE IF EXISTS book;
// DROP TABLE IF EXISTS author; // удалить если существует

// CREATE TABLE book
// (
// 	book_id int PRIMARY KEY,
// 	title text NOT NULL,
// 	isbn text NOT NULL
// );

// INSERT INTO book
// VALUES
// (1, 'Война и мир', '123456'),
// (2, 'Лечтница в небо', '453456'),
// (3, 'Воспоминания о будущем', '974523'),
// (4, 'Улисс', '123346');

// ============================================
// CREATE TABLE author
// (
// 	author_id int PRIMARY KEY,
// 	full_name text NOT NULL,
// 	rating real
// );

// INSERT INTO author
// VALUES
// (1, 'Джеймс Джойс', 5.0),
// (2, 'Лев Толстой', 5.0),
// (3, 'Михаил Хазин', 4.5),
// (4, 'Сергей Щеглов', 4.5);

// ============================================
// CREATE TABLE book_author
// (
// 	book_id int REFERENCES book(book_id),
// 	author_id int REFERENCES author(author_id),

// 	CONSTRAINT book_author_pkey PRIMARY KEY(book_id, author_id) -- composite key
// );

// INSERT INTO book_author
// VALUES
// (1, 2),
// (2, 3),
// (2, 4),
// (3, 3),
// (4, 1);
