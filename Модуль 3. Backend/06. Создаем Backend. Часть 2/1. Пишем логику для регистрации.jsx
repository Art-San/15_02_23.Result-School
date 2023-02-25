// Файлы к практике: ссылка
// https://vladilen.notion.site/d59208ea56ad4b50b5c9081deabcbcbb

// ApiEndpoints: ссылка
// https://vladilen.notion.site/Api-Endpoints-9c0dc0d186c84447b293c0ac986e6c00

// Доп пакеты для реализаци регистрации

// npm install bcryptjs jsonwebtoken express-validator

// npm i bcryptjs
// npm i jsonwebtoken
// npm i express-validator

// Эта функция generateUserData()возвращает объект с одним свойством,
// imageпредставляющим собой строку, содержащую URL-адрес SVG-изображения аватара,
// созданного с помощью DiceBear Avatars API.

// URL-адрес изображения аватара создается с использованием строки шаблона с Math.random()функцией,
// используемой для генерации случайного числа от 0 до 1, которое затем преобразуется 
// в строку с помощью метода toString(). Метод toString()вызывается с аргументом 36, 
// который сообщает ему преобразовать число в строку с основанием 36 
// (т. е. используя цифры 0-9 и буквы az). 
// Результирующая строка затем разрезается с помощью substring(7), 
// которая возвращает символы строки, начиная с 7-й позиции (т. е. пропуская первые 7 символов).

// Полученная строка затем используется в качестве параметра в URL-адресе API аватаров DiceBear, 
// который генерирует SVG-изображение аватара на основе ввода. 
// Сгенерированный URL-адрес возвращается как imageсвойство объекта, 
// возвращаемого функцией generateUserData().

function generateUserData() {
    return {
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`,
    }
    
}

(Math.random() + 1).toString(36).substring(7)

https://avatars.dicebear.com/api/avataaars/f7c1m.svg