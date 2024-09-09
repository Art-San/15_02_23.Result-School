// Асинхронность
// многопоточность
// параллелизм
// опредиление этим терминам в ECMAScript нет, говорит на 2:23 .. https://www.youtube.com/watch?v=vFSvq_ablAM&t=19s
//
// Остановился 2:39:00

async function fetchData() {
  console.log('Перед ожиданием')
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve('данные с сервера'), 3000)
  )
  console.log('После ожидания:', data)
}

fetchData()
console.log('Этот код выполнится до завершения fetchData')
