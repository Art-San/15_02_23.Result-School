let searchName = 'MacBook Pro 13';
const computers = [
  {
    name: 'MacBook Pro 13',
    price: 150000
  },
  {
    name: 'MacBook Pro 14',
    price: 200000
  },
  {
    name: 'MacBook Pro 16',
    price: 300000
  },
];

function findIndex(arr, callbackFn) {
    for (let i = 0; i < arr.length; i++) {
     const doesExist = callbackFn(arr[i])
     if (doesExist) {
      return i
     }
    }
    return -1
  
  };
  
  const res = findIndex(computers, item => item.name === searchName);
  computers.splice(res, 1)
  
  console.log("computers", computers);













