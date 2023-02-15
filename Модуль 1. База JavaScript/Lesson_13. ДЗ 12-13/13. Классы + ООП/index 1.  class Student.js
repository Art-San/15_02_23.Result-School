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
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
//   this.technologies = [];
//   this.status = "Junior";

//   this.setTechnologies = function (technologies) {
//     this.technologies = [...this.technologies, ...technologies];
//   };
//   this.setNewStatus = function (newStatus) {
//     this.status = newStatus;
//   };
// }
// const student = new Student("Maxim", 20);
// student.setTechnologies(["HTML", "CSS", "JavaScript"]);
// student.setNewStatus("Middle");
// console.log(student);


//    мще решение такое же как правильное 
//==============================================================
class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
    
    this.technologies = []
    this.status = "Junior"
  }

  setTechnologies(technologies) {
    this.technologies = [...this.technologies, ...technologies]
  }

  setNewStatus(newStatus) {
    this.status = newStatus;
  }

}

const student = new Student("Maxim", 20);
student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewStatus("Middle");
console.log(student);



// //===================================================================
