//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'отслеживать прогресс студентов в обучении веб-разработке'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================




//    мще решение такое же как правильное 
//==============================================================
class Person{
    constructor(name, age) {
        this.name = name
        this.age = age
    }

  

    compareAge(person) {
        if (this.age > person.age) {
          console.log(`${this.name} старше, чем ${person.name}`);
        } else {
          console.log(`${this.name} младше, чем ${person.name}`);
        }
      }
}


const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 23);


console.log('person1', person1)
console.log('person2', person2)
console.log('person3', person3)

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим
// //===================================================================
