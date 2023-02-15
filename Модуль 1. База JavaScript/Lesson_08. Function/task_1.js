const getName1 = function(name) {
    return `Имя равно ${name}`;
}

function getName2(name) {
    return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log('getName1', getName1('getName1'));
console.log('getName2', getName2('getName2'));
console.log('getName3', getName3('getName3'));











// ---------- МОЁ РЕШЕНИЕ

// function name(getName1 = 'Александр') {
//     console.log(`Имя равно ${getName1}`)
// }
// name()

// getName1, getName2, getName3.

// function name(getName1) {
//     return getName1;
// }
// const result = name('Aleks');
// console.log(`Имя равно ${result}`); 

// console.log((name)('Александр'))

// function getName1('Aleks') {
//     return getName1;
// }
// const result = getName1('Aleks');
// console.log(`Имя равно ${result}`); 

// console.log((name)('Александр'))




// function getName1(text, name = 'Aleks') {
//     return  `${text} ${name}`;
// }

// console.log(getName1('Имя равно'))


// function getName1(name = 'Aleks') {
//     return name;
// }
// console.log('Имя равно', getName1());

// console.log(getName1('Имя равно', name ))


// const getName2 = function(name) {
//     // console.log('Имя равно', name);
//     return name;
    
// }

// console.log('Имя равно', getName2('Vasya'));


// const getName3 = (name, text) => `${name} ${text}`;

// const result = getName3('Имя равно', 'Kiril');
// console.log(result);

// const result = `Имя равно ${getName3('Kiril')}`


// console.log(result)
// console.log(`Имя равно ${getName3('Kiril')}`)
