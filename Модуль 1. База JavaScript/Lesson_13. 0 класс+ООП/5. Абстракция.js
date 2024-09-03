// Абстракция - это использования только тех характеристок объекта,
//  которые с наиболей точностью предстовляют его в какойто определеннлй системе.

class Footballer {
  constructor(name, club) {
    this.name = name
    this.club = club
  }

  shoot() {}
  celebrateGool() {}
  pass() {}
}

class Forward extends Footballer {
  constructor(name, club) {
    super(name, club)
  }
  shoot() {
    console.log(`Очень сильный удар`)
  }
  celebrateGaol() {
    console.log(`Даа! я забил гол!`)
  }
  pass() {
    console.log(`Средний пас`)
  }
}

const nigary = new Forward('Чел', 'Нигару')
nigary.shoot()
nigary.celebrateGaol()

var spartak = new Forward('Максим', 'Спартак')

spartak.shoot()
spartak.celebrateGaol()
