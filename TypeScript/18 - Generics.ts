// Т-- это дженерикс тип

function logTime<T>(num: T): T {
  console.log(new Date())
  return num
}
// function logTimeString(num: string): string {
//     console.log(new Date())
//     return num
// }

logTime<string>('try')
logTime<number>(1)

function logTime2<T>(num: T): T {
  if (typeof num === 'string') {
    num.toLowerCase()
  } else if (typeof num === 'number') {
    num.toString()
  }
  return num
}

// использование дженерикс в описании интерфайса

interface MyInterface {
  // transformer: (a: number) => number // хотим использовать со стрингой, не проблема
  //   transformer: <T>(a: T) => T // но если на вход тип Т, а на выходе другой тип тоже не проблема
  transformer: <T, G>(a: T) => G
}

class MyGenClass<T> {
  value: T
}

const a1 = new MyGenClass<number>()
a1.value
const a2 = new MyGenClass<string>()
a2.value

// дженерики как и другие типы могут экстендить

interface TimeStamp {
  stamp: number
}

function LogTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp)
  return num
}
