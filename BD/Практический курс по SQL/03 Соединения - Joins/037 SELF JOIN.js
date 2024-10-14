// CREATE TABLE employee (
// 	employee_id int PRIMARY KEY,
// 	first_name varchar(256) NOT NULL,
// 	last_name varchar(256) NOT NULL,
// 	manager_id int,
// 	FOREIGN KEY (manager_id) REFERENCES employee(employee_id)
// );

// INSERT INTO employee
// (employee_id, first_name, last_name, manager_id)
// VALUES
// (1, 'Windy', 'Hays', NULL),
// (2, 'Ava', 'Christensen', 1),
// (3, 'Hassan', 'Conner', 1),
// (4, 'Anna', 'Reeves', 2),
// (5, 'Sau', 'Norman', 2),
// (6, 'Kelsie', 'Hays', 3),
// (7, 'Tory', 'Goff', 3),
// (8, 'Salley', 'Lester', 3);

// id  first_    last_           manager_id - ссылается на первую колонку
//  1	 "Windy"	 "Hays"	         null
//  2	 "Ava"	   "Christensen"	 1
//  3	 "Hassan"  "Conner"	       1
//  4	 "Anna"	   "Reeves"	       2
//  5	 "Sau"	   "Norman"	       2
//  6	 "Kelsie"  "Hays"	         3
//  7	 "Tory"	   "Goff"	         3
//  8	 "Salley"  "Lester"	       3

// SELECT *
// FROM employee

// SELECT e.first_name || ' ' || e.last_name AS employee,
// 	   m.first_name || ' ' || m.last_name AS manager
// FROM employee e
// LEFT JOIN employee m ON m.employee_id = e.manager_id
// ORDER BY manager;

// 1  "Anna Reeves"	    "Ava Christensen"
// 2  "Sau Norman"	    "Ava Christensen"
// 3  "Salley Lester"	  "Hassan Conner"
// 4  "Kelsie Hays"	    "Hassan Conner"
// 5  "Tory Goff"       "Hassan Conner"
// 6  "Hassan Conner"	  "Windy Hays"
// 7  "Ava Christensen"	"Windy Hays"
// 8  "Windy Hays"	     NULL
