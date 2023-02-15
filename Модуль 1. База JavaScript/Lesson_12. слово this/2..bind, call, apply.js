// ----------- bind, call, apply -------------

const mainHero = {
    fullName: 'SpiderMan',
    health: 65,
    strength: 5,
};

const badHero = {
    fullName: 'Joker',
    health: 55,
    strength: 10,
};
function printHeroInfo(extrainfo = '') {
    console.log('this', this)

    return (`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}, ${extrainfo}`);
}

// const bindPrintHeroInfo = printHeroInfo.call(badHero, `Роль: Злодей`); // параметры в call передаются через запятую
const tyu = printHeroInfo.apply(badHero, [`Роль: Злодей`]);  // параметры в apply передаются как масив.

console.log('tyu', tyu)

// -------- bind Этот метод не вызывает функцию, он создает новую с новым контекстом

// printHeroInfo.bind(badHero, `Роль: Злодей`, 2, 3); 


// const bindPrintHeroInfo = printHeroInfo.bind(mainHero, `Роль: главный герой`, 2, 3); 

// console.log(bindPrintHeroInfo);



