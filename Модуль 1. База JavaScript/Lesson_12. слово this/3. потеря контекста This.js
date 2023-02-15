const user = {
    name: 'Maksim',
    programmingLanguage: 'JavaScript',
    getName() {
        return this.name;
    },
    // getProgrammingLanguage() {
    //     return this.programmingLanguage;
    // }

    // У СТРЕЛОЧНОЙ ФУНКЦИИ нет This

    // getProgrammingLanguage: () => {
    //     console.log(this);
    //     return this.programmingLanguage;
    // }
    // создавать ее надо function
    getProgrammingLanguage: function () {
        console.log(this);
        return this.programmingLanguage;
    }
}

console.log('getName', user.getName()); // максим выводится отлично, но пока не сохраним в новую переменную.


// -----   первый случай потери контекста -------------

const newGetName = user.getName  // Сохраним user.getName в новою переменную newGetName.

// console.log('newGetName', newGetName()); // Вот этот случай,
//  // исправим строкой ниже
newGetName(); так не будет работать,
можно ВОТ ТАК user.newGetName();

console.log('newGetName', newGetName()); // нечего не выводит, 
// так как вызываем newGetName() без контекста, 
// и поэтому ссылается не на user, контекст будет ссылатся на глобальный  объкт windom/
// можем исправить bind, call, apply, ниже решение
console.log('newGetName', newGetName.call(user));


// -----   ВТОРОЙ случай потери контекста -------------

console.log('getProgrammingLanguage', user.getProgrammingLanguage());  // ВЫВОДИТСЯ JavaScript', НО ПОТОМ ОН ИЗМЕНИЛ НА СТРЕЛОЧНУЮ ФУНКЦИЮ

// У СТРЕЛОЧНОЙ ФУНКЦИИ нет This
getProgrammingLanguage: () => {
    return this.programmingLanguage;
}

// создавать ее надо function
// getProgrammingLanguage: function () {
    // console.log(this);
    // return this.programmingLanguage;
// }

