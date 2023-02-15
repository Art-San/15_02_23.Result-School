const nameMen = 'Aleks'

// Function declaration
console.log(getName1(nameMen))
function getName1(name) {
    return name
}


// Function expression
const getName2 = function (name) {
    return name
}
console.log(getName2(nameMen))

// Arrow function expression
const getName3 = name => {return name}
console.log(getName3(nameMen))



// -------------------- ПРАВИЛЬНЫЕ ОТВЕТЫ -------------------Ъ
// Function expression
const getName4 = function (name) {
    return `Имя равно ${name}`;
  };
  
  // Function declaration
  function getName5(name) {
    return `Имя равно ${name}`;
  }
  // Arrow function expression
  const getName6 = (name) => `Имя равно ${name}`;
  
  console.log("getName4", getName4("getName4"));
  console.log("getName5", getName5("getName5"));
  console.log("getName6", getName6("getName6"));
  