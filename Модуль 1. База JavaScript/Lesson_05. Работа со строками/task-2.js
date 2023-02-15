// let programmingLanguage = 'JavaScript';
// let myInfoText = `Всем привет! Меня зовут, Aleksander. 
// Сейчас я изучаю язык програмирования ${programmingLanguage} на курсе по JavaScript у Vladilen. 
// Я хочу стать веб-разработчиком, потому что новая специальность пригодится. 
// До этого я изучал ${programmingLanguage} 0 месяццев. Я уверен, что пройду данный курс до конца!`;
// // myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');



const myName = 'Aleksander';
const programmingLanguage = 'JavaScript';
const courceCretorName = 'Vladilen';
const reasonText = 'Новая специальность пригодится';
const numberOfMonth = 0;
const result1 = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык програмирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courceCretorName}.`;
const result2 = `Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяццев. Я уверен, что пройду данный курс до конца!`;
let myInfoText = `${result1} ${result2}`;
myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');

console.log(myInfoText);

let stringLength = myInfoText.length - 1;
// stringLength -= 1



console.log(stringLength);

// console.log(myInfoText.length);


console.log(myInfoText[0], myInfoText[stringLength -1]);
