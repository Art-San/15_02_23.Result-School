//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `интернет-магазин по доставке еды `
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================


function getWinner(applicants, winnerObject) {
  
  const numbersUchastnicov = Object.keys(applicants)
  console.log('nomeraUchastnicov', numbersUchastnicov)
  const sluchaNum = getRandomNumberInRange(0, numbersUchastnicov.length)
  console.log('sluchaNum', sluchaNum)
  const numUshastnica = numbersUchastnicov[sluchaNum]
  console.log('numUshastnica', numUshastnica)
  const pobeditel = applicants[numUshastnica]
  console.log('pobeditel', pobeditel)
  return {
    ...winnerObject,
    ...pobeditel
  }
}

const todaysWinner = {
  prize: "10 000$"
};

const winnerApplicants = {
  "001": {
    name: "Максим",
    age: 25
  },
  "201": {
    name: "Светлана",
    age: 20
  },
  "304": {
    name: "Екатерина",
    age: 35
  }
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner);
// { prize: '10 000$', name: 'Максим', age: 25 }


console.log('applicants.length', winnerApplicants.length)

