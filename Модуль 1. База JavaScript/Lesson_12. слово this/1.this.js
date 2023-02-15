
//  "this" - тип данных object

console.log(this) //  в консоле будет window - это объект который является глобальным 
// для JS который запускается в браузере. В этом объекте много ключей и значений. 
// Из этого понимаем что this изночально ссылается на глобальный объект

// ниже this находясь внутри объекто и поэтому будет ссылатся "user"
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
        // const age = user.calculaterAge();        // плохой способ, через this ЛУЧШЕ
        const age = this.calculaterAge();
        return `Имя: ${this.name} возраст: ${age}`;

    }
    
}
// Выше представлено два способа для создания функции внутри объекта
console.log(user.getName());
console.log(user.calculaterAge());
console.log(user.getAllInfo());




// ----------- bind, call, apply Эти методы исключительно для функци

const user2 = {
    name: 'Igor'
}

const user2Name = user.getName.call(user2);
console.log('user2Name', user2Name)

