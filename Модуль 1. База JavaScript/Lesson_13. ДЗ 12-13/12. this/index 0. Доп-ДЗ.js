//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'сделать игру, которая поразит игровую индустрию'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

// нехера не понял

const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defenderObject) {
    const attackerValues = Object.values(this);
    console.log("attackerValues", attackerValues);
    const defenderValues = Object.values(defenderObject);
    let chancesCounter = 0;
    attackerValues.forEach((value, index) => {
      if (value > defenderValues[index] && typeof value === "number") {
        chancesCounter += 1;
      }
    });

    return [chancesCounter, defenderValues.length];
  },
  improveArmy() {
    Object.entries(this).forEach((item) => {
      const key = item[0];
      const value = item[1];
      if (typeof value === "number") {
        this[key] = value + 5;
      }
    });
  },
  attack(defender) {
    const chancesValues = this.checkChancesToWin(defender);
    // console.log("chancesValues", chancesValues);
    const ourArmyChances = chancesValues[0];
    const seventyPercentChances = Math.round((chancesValues[1] * 70) / 100);
    // console.log("ourArmyChances", ourArmyChances);
    // console.log("seventyPercentChances", seventyPercentChances);
    if (ourArmyChances < seventyPercentChances) {
      console.log(
        `Наши шансы равны ${ourArmyChances}/${chancesValues[1]}. Необходимо укрепление!`
      );
      this.improveArmy();
    } else {
      console.log("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    }

    // console.log(this);
  }
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!







//    мще решение такое же как правильное 
//==============================================================





// //===================================================================

