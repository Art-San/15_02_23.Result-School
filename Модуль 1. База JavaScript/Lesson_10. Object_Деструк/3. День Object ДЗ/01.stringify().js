// JSON.stringify()
// Возвращает строку JSON, соответствующую указанному значению, 
// возможно с включением только определённых свойств или 
// с заменой значений свойств определяемым пользователем способом.

const person = {
    name: 'Владислав',
    age: 27,
    profession: 'Frontend-developer',
    favorite_activity: 'Watch TV series',
  };
  
  // Your code here...
  const jsonPerson = JSON.stringify(person)

  
  console.log(jsonPerson);
  
  // Вывод:
  // '{"name":"Владислав","age":27,"profession":"Frontend-developer","favorite_activity":"Watch TV series"}'