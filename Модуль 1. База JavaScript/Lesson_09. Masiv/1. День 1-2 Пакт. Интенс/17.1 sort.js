// const goals = [8, 1, 1, 3, 2, -1, 5];
const ascendingOrderGoals2 = goals.sort((a, b) => a - b)      //  [-1, 1, 1, 2, 3, 5, 8]
// const ascendingOrderGoals = [...goals].sort((a, b) => b - a);  // [8, 5, 3, 2, 1, 1, -1]


const start = "a".charCodeAt()
const end = "z".charCodeAt()


function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
  
      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]]
    }
  
    return arr
  }

const letters = new Array(end - start + 1)
.fill("")
.map((_, index) => String.fromCharCode(start + index))

shuffle(letters)
console.log(letters.sort())

const numbers = new Array(20)
.fill('')
.map((_, index) => index + 1)

shuffle(numbers)

console.log(numbers.sort((a, b) => a - b))
console.log(numbers.sort((a, b) => b - a))

