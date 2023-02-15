
// создание объекта и получение значений



const developer = {
    name: 'maksim',
    job: 'Front-end разработчик',
    experience: 24,
    jobAllInfo: {
        type: 'Front-end',
        framework: 'ReactJS',
    }
};


// -------------- примеры получения оз обьекта -----------------
console.log('type', developer.jobAllInfo.type); // через точки 

console.log('framework', developer['jobAllInfo'] ['framework']); // через скобки



// //-- 1 --- ПОЛУЧЕНИЕ ЗНАЧЕНИЙ ИЗ ОБЪЕКТА
// //           ЧЕРЕЗ ТОЧКУ/

console.log('имя', developer.name);
console.log('developer.jobAllInfo', developer.jobAllInfo);
console.log('developer.jobAllInfo.type', developer.jobAllInfo.type);

//  --- 2 --- Через квадратные скобки

// console.log('name2', developer['name']); // через квадрат скобки и передачи строчки как ключа
// удобнее первый способ, но внекоторых случаях как ниже исползуют второй
const key = 'name';
console.log('name2', developer[key]);