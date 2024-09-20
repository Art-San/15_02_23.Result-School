// SELECT *
// FROM person

// Создать таблицу
// CREATE TABLE person
// (
// 	person_id int PRIMARY KEY,
// 	first_name VARCHAR(64) NOT NULL,
// 	last_name VARCHAR(64) NOT NULL
// );

// CREATE TABLE passport
// (
// 	passport_id int PRIMARY KEY,
// 	serial_num int NOT NULL,
// 	registration text NOT NULL,
// 	fk_person_person int REFERENCES person(person_id) NOT NULL
// )

// // Заполнить поля
// INSERT INTO person
// VALUES
// (1, 'Димон', 'Медвед'),
// (2, 'Вован', 'Лексус'),
// (3, 'Сан', 'Арт');

// INSERT INTO passport
// VALUES
// (1, 12345, 'Томск', 1),
// (2, 34567, 'Кемерово',2),
// (3, 45678, 'Новосибирск',3)

// добавить столбец

// ALTER TABLE passport
// ADD COLUMN registration text NOT NULL
