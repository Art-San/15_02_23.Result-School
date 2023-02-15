const student = {
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,

};

// ---      ДОБАВление ЭЛЕМЕНТА
student.experience = 6;
console.log('добав элемент + значение experience', student);



// --------- УДАЛЕНИЕ - delete

delete student.hasExperienceInReact;
console.log('удаление hasExperienceInReact', student);



// -------  ИЗМЕНЯТЬ ЗНАЧЕНИЯ

student.experience = 12;
student.id = 2;

console.log('изменение значений', student);