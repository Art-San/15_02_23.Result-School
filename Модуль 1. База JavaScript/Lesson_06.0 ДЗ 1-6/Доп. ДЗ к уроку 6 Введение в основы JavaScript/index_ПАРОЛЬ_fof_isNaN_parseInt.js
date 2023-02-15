

// const password = prompt("Введите пароль");
const password = "1g5fg56hngР"

// for (let i = 0; i < password.length; i += 1) {
//   const symbol = password[i]         
//   console.log("symbol", symbol)                  // symbol 1, symbol g, symbol 5, symbol f, symbol g и тд
//   const isNumberSymbol = isNaN(parseInt(symbol));
//   console.log("isNumberSymbol", isNumberSymbol) // isNumberSymbol false, isNumberSymbol true, isNumberSymbol false, isNumberSymbol true и тд
// }
const errorMessage =
  "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
const successMessage = "Пароль валидный. Добро пожаловать в аккаунт!";

if (password === null || password.length < 3 || password.length > 30) {
  alert(errorMessage);
} else {
  let hasBigSymbol = false;
  let hasNumbers = false;
  for (let i = 0; i < password.length; i += 1) {
    const symbol = password[i];
    console.log("symbol", symbol)
    const isNumberSymbol = !isNaN(parseInt(symbol));
    console.log("isNumberSymbol", isNumberSymbol)
    if (symbol === symbol.toUpperCase() && !isNumberSymbol) {
      hasBigSymbol = true;
    }
    if (isNumberSymbol) {
      hasNumbers = true;
    }
  }

  if (!hasBigSymbol || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(successMessage);
  }
}



// function roughScale(x, base) {
//     const parsed = parseInt(x, base);
//     if (isNaN(parsed)) { return 0; }
//     return parsed * 100;
//   }
  
//   console.log(roughScale(' 0xF', 16));
//   // expected output: 1500
  
//   console.log(roughScale('321', 2));