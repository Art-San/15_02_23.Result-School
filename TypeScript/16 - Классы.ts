// отвечает strictPropertyInitialization
// можем  его сделать false если хотим использовать class как интерфейс
// class Point1 {
//   x!: number // ! означает что мы обязуемся как то за инициализировать это свойство
//   y!: number
// }

// ===================================

// class Point1 {
//   x: number // ! означает что мы обязуемся как то за инициализировать это свойство
//   y: number
// }

// const point = new Point1()
// point.x = 1

// =======================================

// class Point1 {
//   x: number
//   y: number

//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
// }

// const point = new Point1(0, 0)
// console.log(point.y) // => 0

// =============== Свойства класса
// class Point1 {
//   // private x: number // private будет доступно только внутри объекта класса
//   readonly x: number // можем только читать но не записывать
//   y: number

//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }

//   fun0() {
//     this.x = 10 // тут можем только Читать, но не записывать
//   }
//  private fun1() {
//     this.x = 10 // тут можем только Читать, но не записывать
//   }

// }

// const point = new Point1(0, 0)
// console.log(point.)

// ====== Экстендить

// class Point1 {
//   x: number
//   y: number

//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }
// }

// class D4Point extends Point1 {
//   z: number

//   constructor(x: number, y: number, z: number) {
//     super(x, y)
//     this.z = z
//   }
// }

// const point = new D4Point(0, 0, 0)
// // point. // x y z
// ====== Экстендить немного про методы доступность

// class Point1 {
//   x: number
//   y: number

//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }

//  protected a() {} // Не будет доступен с наружи, но будет доступен в конструкторе класса D4Point
// }

// class D4Point extends Point1 {
//   z: number

//   constructor(x: number, y: number, z: number) {
//     super(x, y)
//     this.z = z

//   }
// }

// const point = new D4Point(0, 0, 0)
// point. // x y z

// ====== Экстендить немного про методы переопределять
class Point1 {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  a() {}
}

class D4Point extends Point1 {
  z: number

  constructor(x: number, y: number, z: number) {
    super(x, y)
    this.z = z
  }
  a(name?: string) {}
}

const point = new D4Point(0, 0, 0)
// point. // x y z

// ============== static
class StaticTest {
  static c = 'pet'

  static test() {
    console.log('test')
  }
}

const zx = StaticTest.c
const zxTest = StaticTest.test()

// ===================

abstract class Test3 {
  method() {
    console.log('method')
  }
}

// const abs = new Test3() // не можем так сделать так как это Test3() абстракт

class Test4 extends Test3 {
  method4() {
    console.log('method')
  }
}

const test4 = new Test4()
// test4. // method и method4

// ==========  имплеминтация

class Point2 {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  a() {}
}

class D4Point1 extends Point1 {
  z: number

  constructor(x: number, y: number, z: number) {
    super(x, y)
    this.z = z
  }
  a(name?: string) {}
}

interface IC {
  test: () => number // variant 2
  // test: () => void // variant 1
}

class D implements IC {
  test() {
    return 3
  } // variant 2
  // test() {ни чего} // variant 1
}
