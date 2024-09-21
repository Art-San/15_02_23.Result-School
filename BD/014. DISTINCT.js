// https://www.youtube.com/watch?v=QlTKtC0_Wgk&list=PLBheEHDcG7-k1Y_Uy04Dj2ylWhcfSfqoF&index=6
// https://github.com/EngineerSpock/postgres-course-ru/tree/master/02-%D0%9F%D1%80%D0%BE%D1%81%D1%82%D1%8B%D0%B5%20%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B%20%D1%81%20SELECT

// SELECT city
// FROM employees

// "Seattle"
// "Tacoma"
// "Kirkland"
// "Redmond"
// "London"
// "London"
// "London"
// "Seattle"
// "London"

// SELECT DISTINCT city
// FROM employees
'Redmond'
'London'
'Tacoma'
'Kirkland'
'Seattle'

// две колонки
// SELECT city, country
// FROM employees

// "Seattle"	 "USA"
// "Tacoma"	   "USA"
// "Kirkland"	 "USA"
// "Redmond"	 "USA"
// "London"	   "UK"
// "London"	   "UK"
// "London"	   "UK"
// "Seattle"	 "USA"
// "London"	   "UK"

// SELECT DISTINCT city, country
// FROM employees
// "Seattle"	"USA"
// "Kirkland"	"USA"
// "London"	"UK"
// "Redmond"	"USA"
// "Tacoma"	"USA"
