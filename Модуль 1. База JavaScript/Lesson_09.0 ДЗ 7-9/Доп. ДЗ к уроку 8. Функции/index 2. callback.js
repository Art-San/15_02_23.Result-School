//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'Функция, которая передается как параметр в другую функцию, называется колбэк (callback)'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================

// const showSuccessMessage = (message) => {
//     console.log(message);
//   };
  
//   const showErrorMessage = (message) => {
//     console.error(message);
//   };
  
//   const checkTextOnErrorSymbol = (
//     text,
//     errorSymbol,
//     successCallback,
//     errorCallback
//   ) => {
//     let countErrors = 0;
//     for (let i = 0; i < text.length; i += 1) {
//       const currentSymbol = text[i];
//       if (currentSymbol === errorSymbol && errorCallback) {
//         errorCallback(
//           `Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`
//         );
//         countErrors += 1;
//         console.log("countErrors", countErrors)
//       }
//     }
  
//     if (successCallback && countErrors === 0) {
//       successCallback("В данном тексте нет запрещенных символов");
//     }
//   };
  
//   const text = "Привет! Как дела! Давно мы с тобой не виделись.";
//   checkTextOnErrorSymbol(text, "а", showSuccessMessage, showErrorMessage);
  



const text = "Привет! Как дела! Давно мы с тобой не виделись.";


function showSuccessMessage(message) {
    console.log(message)
}

function showErrorMessage(message) {
    console.error(message)
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let countErrors = 0
    for(let i = 0; i < text.length; i++) {
        // console.log("text[i]", text[i])
        if (errorSymbol === text[i]) {
            errorCallback(`Найден запрещенный символ ${errorSymbol} под индексом ${i}`)
            countErrors += 1
        }
    }

    if (countErrors === 0) {
        successCallback('В данном тексте нет запрещенных символов')
    }
   
}



checkTextOnErrorSymbol(text, "g", showSuccessMessage, showErrorMessage);
