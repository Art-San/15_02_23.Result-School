// -----------  первы ВАРИАНТ  -----------

// calculaterAge() {

// }
    

// -----------  ВТОРОЙ ВАРИАНТ  -----------

// getAllInfo: function() {
        
//     }


const user = {
    name: 'Maksim',
    dateOfBirth: 2001,
    getName() {
        // return user.name;  // нет уневерсальности в этом методе
        return this.name;
    },
    calculaterAge() {
        const currentYear = new Date().getFullYear();
        // return currentYear - user.dateOfBirth;    // нет уневерсальности в этом методе
        return currentYear - this.dateOfBirth;
    },
    getAllInfo: function() {
        // const age = user.calculaterAge();        // плохой способ через this ЛУЧШЕ
        const age = this.calculaterAge();
        return `Имя: ${this.name} возраст: ${age}`;

    }
    
}
console.log(user.getName());
console.log(user.calculaterAge());
console.log(user.getAllInfo());

