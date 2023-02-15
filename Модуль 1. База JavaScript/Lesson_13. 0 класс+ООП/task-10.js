
// https://www.cyberforum.ru/javascript-beginners/thread2864002.html

class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.technologies = [];
      this.status = "Junior";
    }
    setTechnologies(technologies) {
      this.technologies = [...this.technologies, ...technologies];
    }
    setNewStatus(newStatus) {
      this.status = newStatus;
    }
  }
  const student = new Student("Maxim", 20);
  student.setTechnologies(["HTML", "CSS", "JavaScript"]);
  student.setNewStatus("Middle");
  console.log(student);


//   Здравствуйте.
// Nas589, DrType, если есть возможность не создавать новый экземпляр массива, то лучше не создавать.

class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.technologies = [];
      this.status = "Junior";
    }
    setTechnologies(technologies) {
      this.technologies.push(...technologies);
    }
    setNewStatus(newStatus) {
      this.status = newStatus;
    }
  }

// --------------------------- 2 ------------------

// https://www.cyberforum.ru/javascript-beginners/thread2864003.html

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(other) {
        alert(this.age > other.age
            ? this.name + " старше, чем " + other.name
            : this.age < other.age
                ? this.name + " младше, чем " + other.name
                : this.name + " одного возраста с " + other.name
        );
    }
}
const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим

// ---------------------------- 3
// https://www.cyberforum.ru/javascript-beginners/thread2862610.html

class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {};
    }
    add(word, description) {
        if (!this.words.hasOwnProperty(word))
            this.words[word] = { word, description };
    }
    remove(word) {
        delete this.words[word];
    }
    get(word) {
        return this.words[word];
    }
    showAllWords() {
        for (let key of Object.keys(this.words))
            console.log(`${key} - ${this.words[key].description}`);
    }
}
 
const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
 
dictionary.remove('JavaScript');
dictionary.showAllWords();



// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает
// и дополняет существующие

// ------------------------------ 4
// https://www.cyberforum.ru/javascript-beginners/thread2862798.html


// ----------------------------- 5

// https://www.cyberforum.ru/javascript-beginners/thread2862594.html

/**
 * Проверка аргумента на соответствие условию.
 * Если не выполнено, то выбросить ошибку.
 * @param {any} value Значение для проверки
 * @param {(v:any) => boolean} predicate Функция соответствия условию или итерируемая коллекция функций
 * @param {string} message Сообщение об ошибке
 */
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
 
let juniorDeveloper = new JuniorDeveloper('Анастасия', 20, 'Junior'),
    middleDeveloper = new MiddleDeveloper('Игорь', 25, 'Middle'),
    seniorDeveloper = new SeniorDeveloper('Максим', 30, 'Senior');
 
juniorDeveloper.code(); // Junior разработчик пишет код...
middleDeveloper.code(); // Middle разработчик пишет код...
seniorDeveloper.code(); // Senior разработчик пишет код...
 
console.log(juniorDeveloper.fullName, juniorDeveloper.age,
    juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
console.log(middleDeveloper.fullName, middleDeveloper.age,
    middleDeveloper.position); // 'Игорь', 25, 'Middle'
console.log(seniorDeveloper.fullName, seniorDeveloper.age,
    seniorDeveloper.position); // 'Максим', 30, 'Senior'
 
console.log(juniorDeveloper.technologies);
console.log(middleDeveloper.technologies);
console.log(seniorDeveloper.technologies);