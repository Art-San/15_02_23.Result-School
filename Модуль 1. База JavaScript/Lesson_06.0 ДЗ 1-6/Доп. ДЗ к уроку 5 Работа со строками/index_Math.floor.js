// const javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений."

// const pruning = javaScriptDescription.slice(1, Math.floor(javaScriptDescription.length / 2))

// const characterReplacement = pruning.replaceAll('а', 'А')

// const removeSpaces = characterReplacement.replaceAll(' ', '')

// const duplicateThreeTimes = removeSpaces.repeat(3)

// console.log('symbol in the middle', duplicateThreeTimes[Math.floor(duplicateThreeTimes.length / 2)])
// console.log('конечный результат', duplicateThreeTimes)

let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
const middleIndex = Math.floor(javaScriptDescription.length / 2);
javaScriptDescription = javaScriptDescription
    .slice(0, middleIndex)
    .replaceAll('а', 'А')
    .replaceAll(' ', '')
    .repeat(3)
const updatedMiddleIndex = Math.floor(javaScriptDescription.length / 2);
console.log(javaScriptDescription[updatedMiddleIndex]);
console.log(javaScriptDescription);