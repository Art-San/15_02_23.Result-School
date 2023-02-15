//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'У вас есть 2 объекта dog и bird, в которых содержится их описание.'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
// const dog = {
//   name: "Чарли",
//   type: "Собака",
//   makeSound() {
//     return "Гав-Гав";
//   }
// };

// const bird = {
//   name: "Петя",
//   type: "Воробей",
//   makeSound() {
//     return "Чик-чирик";
//   }
// };

// function makeDomestic(isDomestic) {
//   console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
//   return {
//     ...this,
//     isDomestic
//   };
// }

// makeDomestic.bind(dog, true)();
// makeDomestic.call(bird, false);
// makeDomestic.apply(bird, [true]);






//    мще решение такое же как правильное 
//==============================================================
const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  }
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  }
};




// //===================================================================
function makeDomestic(isDomestic, age) {
  // Ваша реализация
  console.log('isDomestic', isDomestic)
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
  return {
    ...this,
    isDomestic,
    age
    
  }
}

// console.log(makeDomestic.bind(dog, true)()); // вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
// Выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"

// console.log(makeDomestic.call(bird, false)); // вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
// Выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"

console.log(makeDomestic.bind(dog, true, 1)())
console.log(makeDomestic.call(bird, false, 2))
console.log(makeDomestic.apply(bird, [true, 4]))
