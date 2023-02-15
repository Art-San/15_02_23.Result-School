const firstArray = ['J', 'a', 'v', 'a'];
const secondArray = ['S', 'c', 'r', 'i', 'p', 't'];

// Your code here...

// const concatedArray = [...firstArray, ...secondArray];
const concatedArray = firstArray.concat(secondArray);



console.log(concatedArray); 
// ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']

console.log(concatedArray.join('')); // JavaScript