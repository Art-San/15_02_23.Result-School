let a: number = 4
a = 5
// a = 'f'
let b: string = 'строка'
let c: boolean = true

// const d = a + c

let d: string[] = ['art', 'dart', 'var']

let e: any = 3
e = 'eny'

function test(a: string): number | string | Boolean {
  return true
}

const test2 = (a: number): string => {
  return String(a * 2)
}

d = d.map((x: string) => x.toUpperCase())

function countCoord(coord: { lat: number; long?: number }) {}

function printIt(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toString())
  } else if (typeof id === 'string') {
    console.log(id.toUpperCase)
  }
}

function getSum(a: number | number[]) {
  if (Array.isArray(a)) {
    // тут проходит проверка
    a.join() // а тут теперь доступны методы массива
  }
}

function voidi(a: string): void {
  // void означает что функция ни чего не возвращает
  return
}

const z: undefined = undefined
const x: null = null
