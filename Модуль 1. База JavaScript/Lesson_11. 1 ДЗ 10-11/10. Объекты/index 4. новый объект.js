//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'новый объект'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

// const message = `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он jobName`
const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"]
};

const giveJobToStudent = (student, jobName) => {
  console.log(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`
  )
  return {
    ...student,
    job: jobName
  }
}







const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log('updatedStudent', updatedStudent)

/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/