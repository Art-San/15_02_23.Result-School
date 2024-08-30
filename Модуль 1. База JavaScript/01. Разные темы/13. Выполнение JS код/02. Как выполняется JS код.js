function doThing() {
  function doThingInner() {
    debugger
  }
  debugger
  doThingInner
}
console.log('hello  world')
console.log('hello  world')
console.log('hello  world')
doThing()

// Js помещает для каждого блока кода в Execution Context Stack ссылку на структуру Execution Context,
// а эта структура содержит все необходимое, чтобы обеспечить работу базового единиц этого блока кода

// Execution Context Stack это не тоже самое что CALL Stack у них разные правила попадание в них чего то ни было, и как следствие  порядок выполнения тоже разный
// закончил 2:59
