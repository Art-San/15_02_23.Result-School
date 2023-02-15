
// Решение от владилена гораздо проще.

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
  alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
  return {
      ...student,    // на втрой менуте урока 5. объединения бал дан ответ.
      job: jobName,
  }
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log('updatedStudent', updatedStudent);










// -------------------------------------------------------------------------

// https://www.cyberforum.ru/javascript-beginners/thread2862654.html

// function sayHello() {
//     console.log(`hello world`);
// }
// sayHello(); 

// const student = {
//     fullName: 'Максим',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//     }
    

// const giveJobToStudent = (student, jobName) => {
//   alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
//   return (student.job = jobName, student);
// }
 
// const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

// // console.log('updatedStudent', updatedStudent)


// // console.log('{...updatedStudent}', {...updatedStudent});
// console.log('student', student);
// console.log('{...updatedStudent}', updatedStudent);

