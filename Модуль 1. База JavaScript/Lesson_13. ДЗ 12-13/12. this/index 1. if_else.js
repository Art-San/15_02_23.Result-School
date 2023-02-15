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
// const student = {
//   stack: ["HTML"],
//   level: 1,
//   improveLevel() {
//     this.level += 1;
//     if (this.level === 2) {
//       this.stack.push("CSS");
//     } else if (this.level === 3) {
//       this.stack.push("JavaScript");
//     } else if (this.level === 4) {
//       this.stack.push("React");
//     } else if (this.level === 5) {
//       this.stack.push("NodeJS");
//     } else {
//       alert("Студент выучил все технологии!");
//       console.log(this);
//     }

//     return this;
//   }
// };

// student
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel()
//   .improveLevel();






//    мще решение такое же как правильное 
//==============================================================
// const arr = ["CSS", "JavaScript", "React", "NodeJS"]
//  const student = {
//   stack: ['HTML'],
//   level: 1,
//   improveLevel: function() {
//     this.level++
//     if (this.level === 2) {
//       this.stack.push(arr[0])
//     } else if (this.level === 3) {
//       this.stack.push(arr[1])
//     } else if (this.level === 4) {
//       this.stack.push(arr[2])
//     } else if (this.level === 5) {
//       this.stack.push(arr[3])
//     } else {
//       {console.log(`Студент выучил все технологии!`)}
//       console.log('v', this)
//     }
//     return this
//   }
//  }

// student.improveLevel()
// student.improveLevel()
// student.improveLevel()
// student.improveLevel()
// student.improveLevel()


// //===================================================================
let fullStack = ["CSS", "JavaScript", "React", "NodeJS"];
const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel() {
      this.level++;
      if (this.level >= 6) {
          console.log('Студент выучил все технологии!');
      } else if (this.level <= 5) {
          this.stack.push(fullStack[this.level-2]);
      }
      console.log('student.stack',student.stack)
    
      return this
  }
  

}

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()

  // console.log('student.stack',student.stack)
  console.log('student.level', student.level)