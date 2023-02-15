// const computers = [
//     {
//       name: 'MacBook Pro 13',
//       price: 150000
//     },
//     {
//       name: 'MacBook Pro 14',
//       price: 200000
//     },
//     {
//       name: 'MacBook Pro 16',
//       price: 300000
//     },
//   ];
  
  // Your code here...
//   let searchName = 'MacBook Pro 13';

//   let index = computers.findIndex(el => el.name === searchName);
//   computers.splice(index, 1)
  
//   console.log("computers", computers);
  /*
  [ 
    {name: 'MacBook Pro 14', price: 200000},
    {name: 'MacBook Pro 16', price: 300000}
  ]
  */
//   https://codepen.io/asava1980/pen/ExEpXGQ



// https://ru.stackoverflow.com/questions/760579/%D0%9A%D0%B0%D0%BA-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2
// https://ru.stackoverflow.com/questions/760579/%D0%9A%D0%B0%D0%BA-%D0%BD%D0%B0%D0%B9%D1%82%D0%B8-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D0%B2-%D0%BC%D0%B0%D1%81%D1%81%D0%B8%D0%B2%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2

let inputArr = [{name:'bruce', age:40, city:'gotham'},
                {name:'barry', age:25, city:'fallville'},
                {name:'diana', age:30, city:'themyscira'}
               ];
// **********************************************************************
let searchName1 = 'barry';
let index1 = inputArr.findIndex(el => el.name === searchName1);

// ****************************************************************************


let searchName2 = 'barry';
let index2 = inputArr.map(el => el.name).indexOf(searchName2);

// ********************************************************************************
function arrayObjectIndexOf(myArray, property, searchTerm) {
    for(let i = 0; i < myArray.length; i++) {
        if (myArray[i][property] === searchTerm) 
            return i;
    }

    return -1;
}

let index3 = arrayObjectIndexOf(inputArr, 'name', 'diana');
console.log(index3);