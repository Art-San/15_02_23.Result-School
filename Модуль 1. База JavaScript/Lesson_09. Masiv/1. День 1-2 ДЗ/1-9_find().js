// Метод find() возвращает значение первого найденного 
// в массиве элемента, которое удовлетворяет условию переданному 
// в callback функции. В противном случае возвращается undefined

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
  
  // Your code here...
  const macbook = computers.find(item => item.name === 'MacBook Pro 16')
  
  console.log(macbook);
  // { name: 'MacBook Pro 16', price: 300000 }

//   https://codepen.io/asava1980/pen/GRxBEdL