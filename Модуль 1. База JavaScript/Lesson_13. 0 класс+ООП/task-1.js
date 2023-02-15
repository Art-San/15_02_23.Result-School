// Ваша задача состоит в том, чтобы переписать данную функцию на класс (class).

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = "Junior";
//     this.setTechnologies = function (technologies) {
//       this.technologies = [...this.technologies, ...technologies];
//     };
//     this.setNewStatus = function (newStatus) {
//       this.status = newStatus;
//     };
//   }
//   const student = new Student("Maxim", 20);
//   student.setTechnologies(["HTML", "CSS", "JavaScript"]);
//   student.setNewStatus("Middle");
//   console.log(student);
  
// Начал сам затем списал

class Student {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    this.technologies = [];
    this.status = "Junior";
    }
    setTechnologies (technologies) {
      this.technologies = [...this.technologies, ...technologies];
    }
    setNewStatus (newStatus) {
      this.status = newStatus;
    };
  }
  const student = new Student("Maxim", 20);
  student.setTechnologies(["HTML", "CSS", "JavaScript"]);
  student.setNewStatus("Middle");
  console.log(student);
  
// --------- Это списанный вариант
// https://www.cyberforum.ru/javascript-beginners/thread2864002.html

// class Student {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.technologies = [];
//       this.status = "Junior";
//     }
//     setTechnologies(technologies) {
//       this.technologies = [...this.technologies, ...technologies];
//     }
//     setNewStatus(newStatus) {
//       this.status = newStatus;
//     }
//   }
//   const student = new Student("Maxim", 20);
//   student.setTechnologies(["HTML", "CSS", "JavaScript"]);
//   student.setNewStatus("Middle");
//   console.log(student);

// это еще один вариант
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




