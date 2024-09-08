async function fetchData() {
  console.log('Перед ожиданием')
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve('данные с сервера'), 3000)
  )
  console.log('После ожидания:', data)
}

fetchData()
console.log('Этот код выполнится до завершения fetchData')
