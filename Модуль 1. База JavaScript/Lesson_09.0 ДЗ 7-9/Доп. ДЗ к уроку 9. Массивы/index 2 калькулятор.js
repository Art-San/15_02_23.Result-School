//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'мини-калькулятор математических выражений'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];
const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a));
console.log("isNumber", isNumber);

const getMathResult = (expression) => {
  let resultExpression = [...expression];
  console.log("resultExpression", resultExpression);
  if (expression.length > 3) {
    resultExpression = resultExpression.filter(
      (item) => isNumber(item) || possibleMathSigns.includes(item)
    );
  }
  const firstDigit = Number(resultExpression[0]);
  const secondDigit = Number(resultExpression[resultExpression.length - 1]);
  const mathSign = resultExpression[1];

  if (
    resultExpression.length < 3 ||
    expression.length < 3 ||
    !isNumber(firstDigit) ||
    !isNumber(secondDigit) ||
    !possibleMathSigns.includes(mathSign)
  ) {
    return "Ошибка";
  }

  switch (mathSign) {
    case ">":
      return firstDigit > secondDigit;
    case "<":
      return firstDigit < secondDigit;
    case "=":
      return firstDigit === secondDigit;
    case "+":
      return firstDigit + secondDigit;
    case "-":
      return firstDigit - secondDigit;
    case "*":
      return firstDigit * secondDigit;
    case "/":
      return firstDigit / secondDigit;
    default:
      return "Ошибка";
  }
};

// const result = getMathResult(["100", "hello", "javascript", "help200", "+", 4]);
// console.log("result", result);

console.log(getMathResult(["200", "+", 300])); // 500
// getMathResult(["20", "-", "5"]); // 15
// getMathResult([100, "/", 100]); // 1
// getMathResult([2, "-", 2]); // 0
// getMathResult(["5", ">", "10"]); // false
// getMathResult(["5", "<", "10"]); // true
// getMathResult(["1", "=", 1]); // true
// getMathResult(["1", "**", 1]); // 'Ошибка'
