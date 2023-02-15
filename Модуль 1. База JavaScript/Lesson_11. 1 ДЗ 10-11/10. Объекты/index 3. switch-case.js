//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'функцию, которая будет работать с объектами'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

const handleObject = (obj, key, action = "get") => {
  switch (action) {
    case "get":
      return obj[key];
    case "delete":
      delete obj[key];
      return obj;
    case "add":
      obj[key] = "";
      return obj;
    default:
      return obj;
  }
};


// const handleObject = (obj, key, action) => {
//   switch (action) {
//     case "get":
//       return obj[key]
//     case "add":
//       obj[key] = ""
//       return obj
//     case "delete":
//       delete obj[key]
//       default:
//         return obj
//   }
// }


const student = {
  name: "Maxim",
  programmingLanguage: "JavaScript"
};

// function handleObject(obj, key, action) {
//   // console.log('obj.key', key)
//   if (action === "get") {
//     return obj[key]
//   } else if (action === "add") {
//     obj[key] = ""
//     return obj
//   } else if (action === "delete") {
//     delete obj[key]
//     return obj
//   } else {return obj}
// }


// const result = handleObject(student, "name", "get");
// const result1 = handleObject(student, "age", "add");
const result2 = handleObject(student, "programmingLanguage", "delete");

// console.log("result", result); 
// console.log("result1", result1); 
console.log("result2", result2); // { name: 'Maxim' }


// delete student.hasExperienceInReact;
// console.log('удаление hasExperienceInReact', student);