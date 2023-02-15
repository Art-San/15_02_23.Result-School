// https://www.cyberforum.ru/javascript-beginners/thread2863151.html


function makeDomestic(isDomestic, a) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    // return Object.assign({ isDomestic }, this);
    return {
        ...this,
        isDomestic
    }
}
const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
};
 
const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
};
 
let obj1 = makeDomestic.bind(dog)(true);
console.log(obj1);


// let obj2 = makeDomestic.call(bird, false);
// console.log(obj2);
// let obj3 = makeDomestic.apply(bird, [false]);
// console.log(obj3);

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//   }
  
//   function giveJobToStudent(student, jobName) {
//     alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
//     return {
//         ...student,    // на втрой менуте урока 5. объединения бал дан ответ.
//         job: jobName,
//     }
//   }
  
//   const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
//   console.log('updatedStudent', updatedStudent);
  