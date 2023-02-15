
// Метод fill() заполняет все элементы массива от начального до конечного индексов 
// одним значением.

const array = [1, 2, 3, 4, 5, 6, 7]

// const array1 = new Array(100).fill(0);
// // array1.fill(0, 0, 100)
// console.log('array', array1);

//+++++++++++++++++++++++++++++++++++++++++++++++++

function fill(arr, start, end) {
    const masiv = []
    for (let i = start; i < end; i++) {
        masiv.push(arr)
    }
    
    return masiv
};

console.log(fill("f", 0, 100))

// +++++++++++++++++++++++++++++++++++++++++++++++++++

function toHTML(_, index) {
    const tag = `h${index + 1 }`
    return `<${tag}>This is text</${tag}>`

}

const templete = new Array(6)
    .fill("")
    .map(toHTML)
    .join("")

// const templete = new Array(6).fill("").map((_, index) => {
//     return index + 1
// })

console.log('templete', templete)

document.body.innerHTML = templete