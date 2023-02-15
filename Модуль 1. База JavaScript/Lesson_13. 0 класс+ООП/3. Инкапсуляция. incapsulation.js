// Инкапсуляция
//-------- Поля и методы к которым можно обращатся
//  ----  через точку называются публичными (public). 
// они доступны и в дочернем классе

//  (#salary)  private # С приватными методами и полями можем работать только внутри классов к которым они определенны

// ------ get (гетары) для получения значений которые в привате
// ------ set (сетары) для изменения приватных значений
class Developer {
    #salary
    constructor(name, programmingLanguage) {
        this.name = name;
        this.programmingLanguage = programmingLanguage;
        this.#salary = 3000;
    }

    get devSalary() {
        return this.#salary;
    }

    set setSalary(salary) {
        this.#salary = salary;
    }

    startCoding() {
        console.log(`this.#salary`, this.#salary)
        this.#printProgrammingLanguage();
        console.log(`${this.name} начинает писать код!`);
    }

    #printProgrammingLanguage() {
        console.log(`Язак програмирования ${this.programmingLanguage}`);
    }

}

class JuniorDeveloper extends Developer {
    constructor(name, programmingLanguage) {
        super(name, programmingLanguage);
    }
}

const juniorDeveloper = new JuniorDeveloper(`Игорь`, `JavaScript`);
// juniorDeveloper.printProgrammingLanguage();
    

const developer = new Developer(`Максим`, `JavaScript`);
// console.log(`developer`, developer);
// console.log(`developer name`, developer.name);
// console.log(`developer programmingLanguage`, developer.programmingLanguage);
console.log(developer.devSalary);
developer.setSalary = 5000;
console.log(developer.devSalary);
// developer.#printProgrammingLanguage();

// console.log(`developer`, #salary);




