// Object.entries() метод возвращает массив собственных перечисляемых свойств 
// указанного объекта в формате [key, value], в том же порядке, 
// что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки 
//     прототипов). Порядок элементов в массиве который возвращается Object.entries() 
//     не зависит от того как объект объявлен. 
//     Если существует необходимость в определённом порядке, 
//     то массив должен быть отсортирован до вызова метода, 
//     например Object.entries(obj).sort((a, b) => a[0] - b[0]);.

// Интерактивный пример
const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  
  // expected output:
  // "a: somestring"
  // "b: 42"


//  Применение в доп ДЗ про объекты
const arr = {
    James: ["Jacob", "Bill", "Lucas"],
  }
  
  console.log(Object.entries(arr)) // ['James', Array(3)]
  


function getKiller(suspectInfo, deadPeople) {
    // Your code...
    let killer = ''
    Object.entries(suspectInfo).forEach(([suspectPerson, peopleWereSeen]) => {
      const kil = deadPeople.every((name) => 
      peopleWereSeen.includes(name)
      )
      console.log('name', name)
      if (kil) {
        killer = suspectPerson
      }
    })
    return killer
   
  }
  
  console.log("убийц",
    getKiller(
      {
        James: ["Jacob", "Bill", "Lucas"],
        Johnny: ["David", "Kyle", "Lucas"],
        Peter: ["Lucy", "Kyle"]
      },
      ["Lucas", "Bill"]
    )
  ); // Убийца James

