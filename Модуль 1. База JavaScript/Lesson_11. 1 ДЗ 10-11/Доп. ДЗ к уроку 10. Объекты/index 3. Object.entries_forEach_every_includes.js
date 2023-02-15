//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `вычислять преступника по уже известным данным`
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================


function getKiller(suspectInfo, deadPeople) {
  console.log('Object.entries(suspectInfo)', Object.entries(suspectInfo));
  let killerName = "";
  Object.entries(suspectInfo).forEach(([suspectPerson, peopleWereSeen]) => {
    // console.log('suspectInfo', suspectInfo);
    // console.log('suspectPerson', suspectPerson);
    console.log('peopleWereSeen', peopleWereSeen);
    const isKiller = deadPeople.every((deadName) =>
      peopleWereSeen.includes(deadName)
    );
    
    if (isKiller) {
      killerName = suspectPerson;
    }
  });

  return killerName;
}

console.log(
  getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"]
    },
    ["Lucas", "Bill"]
  )
); // Убийца James


// const pipl = {
//   James: ["Jacob", "Bill", "Lucas"],
//   Johnny: ["David", "Kyle", "Lucas"],
//   Peter: ["Lucy", "Kyle"]
// }
// const arr = Object.entries(pipl)
// console.log(arr)

// console.log(
//   getKiller(
//     {
//       Brad: [],
//       Megan: ["Ben", "Kevin"],
//       Finn: []
//     },
//     ["Ben"]
//   )
// ); // Убийца Megan


// const object1 = {
//   a: 'somestring',
//   b: 42
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(`${key}: ${value}`);
// }

// expected output:
// "a: somestring"
// "b: 42"
