const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary;
debugger

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
  const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage) / 100;
  debugger
  totalJuniorDevelopersSalary = totalJuniorDevelopersSalary + salaryWithTax
  debugger
  
}
console.log("totalJuniorDevelopersSalary", totalJuniorDevelopersSalary);
