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
const footballer = {
  fullName: "Cristiano Ronaldo",
  attack: function () {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`);
    this.celebrate(sound);
  },
  celebrate(sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  }
};
const attack = footballer.attack;
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;
attack.bind(footballer)();
score.call(footballer, "Сиииии")
substitute.apply(footballer, ["Paulo Dibala"]);






//    мще решение такое же как правильное 
//==============================================================




// //===================================================================

