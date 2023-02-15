//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `владельцем одной из игровых веб-платформ`
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const hero = {
  name: "Batman",
  health: 100,
  heatEnemy: (enemy) => {enemy.health = enemy.health - 10}
};
const enemy = {
  name: "Joker",
  health: 100,
  heatHero: (hero) => hero.health = hero.health - 10
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function startGame(heroPlayer, enemyPlayer) {
  console.log("heroPlayer", heroPlayer)
  console.log('enemyPlayer', enemyPlayer)
  while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
    const oneZero = getRandomNumberInRange(0, 1)
    if (oneZero === 0) {
      heroPlayer.heatEnemy(enemyPlayer)
      if (enemyPlayer.health <= 0) {
        break
      }
    } else {
      enemyPlayer.heatHero(heroPlayer)
      if (heroPlayer.health <= 0) {
        break
      }
    }
  }

  if (heroPlayer.health <= 0) {
    console.log(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
  } else {
    console.log(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
  }
  


}



startGame(hero, enemy);

// alert(`${name} победил! У него осталось ${health} здоровья`);


const oneZero = getRandomNumberInRange(0, 1)

