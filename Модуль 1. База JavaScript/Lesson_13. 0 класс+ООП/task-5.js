/**
//  * Проверка аргумента на соответствие условию.
//  * Если не выполнено, то выбросить ошибку.
//  * @param {any} value Значение для проверки
//  * @param {(v:any) => boolean} predicate Функция соответствия условию или итерируемая коллекция функций
//  * @param {string} message Сообщение об ошибке
//  */
 function guard(value, predicate, message) {
    if (typeof predicate === "function") {
        if (!predicate(value))
            throw new Error(message);
    }
    else if (predicate?.[Symbol.iterator]) {
        for (let p of predicate) {
            if (!p(value))
                throw new Error(message);
        }
    }
}
const isStr = v => typeof v === "string" && v.trim().length;
const isInt = v => Number.isInteger(v) && v > 0;
 
class Developer {
    constructor(fullName, age, position) {
        guard(this, v => v.constructor !== Developer, "Attempt to create an instance of abstract class.");
        guard(fullName, isStr, "fullName must be string");
        guard(age, isInt, "age must be integer > 0");
        guard(position, isStr, "position must be string");
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = [];
    }
    code() { }
    learnNewTechnology(technology) {
        guard(technology, isStr, "technology must be string");
        if (!this.technologies.contains(technology))
            this.technologies.push(technology);
    }
}
class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior');
        this.technologies.push('HTML', 'CSS', 'JavaScript');
    }
    code() { console.log('Junior разработчик пишет код...'); }
}
class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle');
        this.technologies.push('HTML', 'CSS', 'JavaScript', 'React');
    }
    code() { console.log('Middle разработчик пишет код...'); }
}
class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Senior');
        this.technologies.push('HTML', 'CSS', 'JavaScript', 'React', 'NodeJS');
    }
    code() { console.log('Senior разработчик пишет код...'); }
}
 
// let juniorDeveloper = new JuniorDeveloper('Анастасия', 20, 'Junior'),
//     middleDeveloper = new MiddleDeveloper('Игорь', 25, 'Middle'),
//     seniorDeveloper = new SeniorDeveloper('Максим', 30, 'Senior');
 
// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код...
// seniorDeveloper.code(); // Senior разработчик пишет код...
 
// console.log(juniorDeveloper.fullName, juniorDeveloper.age,
//     juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
// console.log(middleDeveloper.fullName, middleDeveloper.age,
//     middleDeveloper.position); // 'Игорь', 25, 'Middle'
// console.log(seniorDeveloper.fullName, seniorDeveloper.age,
//     seniorDeveloper.position); // 'Максим', 30, 'Senior'
 
// console.log(juniorDeveloper.technologies);
// console.log(middleDeveloper.technologies);
// console.log(seniorDeveloper.technologies);






const juniorDeveloper = new JuniorDeveloper("Анастасия", 20);
const middleDeveloper = new MiddleDeveloper("Игорь", 25);
const seniorDeveloper = new SeniorDeveloper("Максим", 30);

juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...

// seniorDeveloper.learnNewTechnologies("Docker");

console.log(
  juniorDeveloper.fullName,
  juniorDeveloper.age,
  juniorDeveloper.position,
  juniorDeveloper.technologies
);
// 'Анастасия' 20 'Junior' ['HTML', 'CSS', 'JavaScript']

console.log(
  middleDeveloper.fullName,
  middleDeveloper.age,
  middleDeveloper.position,
  middleDeveloper.technologies
);
// 'Игорь' 25 'Middle' ['HTML', 'CSS', 'JavaScript', 'React']

console.log(
  seniorDeveloper.fullName,
  seniorDeveloper.age,
  seniorDeveloper.position,
  seniorDeveloper.technologies
);
// 'Максим' 30 'Senior' ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS', 'Docker']
