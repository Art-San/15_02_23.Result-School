// Исходные файлы: ссылка 
// https://drive.google.com/drive/folders/19sKVjE-K8M7Rp0fTNZGOvCyb6BG1TlHo?usp=sharing

// Для запуска сервера с Windows необходимоизменить команду "dev" в package.json на 
// следующую: "promise": "set DEBUG=server:* & nodemon ./bin/www"
npm run dev

// config/db.config HOST: "localhost" заменить на HOST: "127.0.0.1"
module.exports = {
    HOST: "127.0.0.1",
    PORT: 27017,
    DB: "fast-company",
};
// module.exports = {
//     HOST: "localhost",
//     PORT: 27017,
//     DB: "fast-company",
// };