

// *********************************************
// *    переписал но не работает
// *********************************************
let form = document.createElement("form"),
    label1 = document.createElement("label"),
    input1 = document.createElement("input"),
    label2 = document.createElement("label"),
    input2 = document.createElement("input"),
    button = document.createElement("button");
form.classList = "create-user-form";             //classList
label1.textContent = " Имя ";
input1.type = "text";
input1.name = "userName";
input1.placeholder = "Введите ваше имя";
label2.textContent = " Пароль ";
input2.type = "password";
input2.name = "password";
input2.placeholder = "Придумайте Пароль";
button.type = "submit";
button.textContent = " Подтвердить ";
label1.append(input1);
label2.append(input2);

form.append(label1, " ", label2, " ", button);
document.body.append(form);

 


// let form = document.createElement("form"),
//     label1 = document.createElement("label"),
//     input1 = document.createElement("input"),
//     label2 = document.createElement("label"),
//     input2 = document.createElement("input"),
//     button = document.createElement("button");
// form.classList = "create-user-form";
// label1.textContent = " Имя ";
// input1.type = "text";
// input1.name = "userName";
// input1.placeholder = "Введите ваше имя";
// label2.textContent = " Пароль ";
// input2.type = "password";
// input2.name = "password";
// input2.placeholder = "Придумайте Пароль";
// button.type = "submit";
// button.textContent = " Подтвердить ";
// label1.append(input1);
// label2.append(input2);
// // Пробелы между элементами нужны, потому что в исходном шаблоне были
// // и они разделяют элементы
// form.append(label1, " ", label2, " ", button);
// document.body.append(form);








//              три поля


// let form = document.createElement("form"),
//     label1 = document.createElement("label"),
//     input1 = document.createElement("input"),
//     label2 = document.createElement("label"),
//     input2 = document.createElement("input"),
//     label3 = document.createElement("label"),
//     input3 = document.createElement("input"),
//     button = document.createElement("button");
// form.classList = "create-user-form";
// label1.textContent = " Имя ";
// input1.type = "text";
// input1.name = "userName";
// input1.placeholder = "Введите ваше имя";
// label2.textContent = " Пароль ";
// input2.type = "password";
// input2.name = "password";
// input2.placeholder = "Придумайте Пароль";
// label3.textContent = " шмароль ";
// input3.type = "pass";
// input3.name = "pass";
// input3.placeholder = "Придумайте шмароль";
// button.type = "submit";
// button.textContent = " Подтвердить ";

// label1.append(input1);
// label2.append(input2);
// label3.prepend(input3)
// // Пробелы между элементами нужны, потому что в исходном шаблоне были
// // и они разделяют элементы
// form.append(label1, " ", label2, " ", button, label3);
// document.body.append(form);


