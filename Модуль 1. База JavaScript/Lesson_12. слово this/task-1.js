// https://www.cyberforum.ru/javascript-beginners/thread2863145.html

// -----------  это отправил

// const student = {
//     stack: ["HTML"],
//     level: 1,
//     improveLevel() {
//         let fullStack = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
//         this.level++;
//         if (this.level >= 6) {
//             alert('Студент выучил все технологии!');
//         } else if (this.level <= 5) {
//             this.stack.push(fullStack[this.level - 1]);
//         }
      
//         return this
//     }
    

// }


// student

// // .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel();

// // console.log('this.stack', student.stack);
// // console.log('this.level', student.level);
// // console.log('student.level', new Set(student.stack));
// // console.log('student.level', new Set(student.stack));

// // const graduate = student.improveLevel();
// console.log(student)

// -------------- Этот тоже работает
const student = {
    stack: ["HTML"],
    level: 1,
    improveLevel() {
        this.level += 1;
        let fullStack = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
        if (this.level === 2) {
            this.stack.push(fullStack[1]);
        } if (this.level === 3) {
            this.stack.push(fullStack[2]);
        } if (this.level === 4) {
            this.stack.push(fullStack[3]);
        } if (this.level === 5) {
            this.stack.push(fullStack[4]);
        } if (this.level >= 6) {
            console.log('Студент выучил все технологии!'); 
        }
        return this
    }
}

student

// .improveLevel()
.improveLevel()
.improveLevel()
.improveLevel()
.improveLevel();

console.log(student)












//  const student = {
//     stack: ["HTML"],
//     level: 1,
//     improveLevel() {
//         let fullStack = ["HTML", "CSS", "JavaScript", "React", "NodeJS"];
//         if (this.level < 5) {
//             this.stack.push(fullStack[this.level++]);
//         } else if (this.level >= 6) {
//             console.log('Студент выучил все технологии!'); 
//         }
//         return this;
//     }
    

// };


// student
// // .improveLevel()
// // .improveLevel()
// // .improveLevel()
// .improveLevel()
// .improveLevel()
// .improveLevel();

// console.log('...student', {...student});

// else if (developerJobType === 'Full-Stack') {
    //     console.log('3500'); 

// if (currentTime > closingTime) {
//     console.log ('Магазин закрыт');
// } else {
//     console.log('Ма открыты приходите за покупками');
// }

// else {
//     alert('Студент выучил все технологии!'); 
// }


    
    

        







//    if (this.level === 2) {
//             this.stack.push(fullStack[1]);
//         } if (this.level === 3) {
//             this.stack.push(fullStack[2]);
//         } if (this.level === 4) {
//             this.stack.push(fullStack[3]);
//         } if (this.level === 5) {
//             this.stack.push(fullStack[4]);
//         } else if (this.level >= 6) {
//             console.log('Студент выучил все технологии!');
//         }
     