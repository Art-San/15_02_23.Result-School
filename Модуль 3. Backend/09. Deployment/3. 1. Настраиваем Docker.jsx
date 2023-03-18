cd .. // выход на один уровень вверх
docker -v

// .dockerignore - nod_mudules и другие
// Dockerfile - инструкция для докера
=========================================================
1. Сщздаем 2шт .dockerignore 
Один в client

// node_modules  // такие значения
// build

Другой  в cerver

// node_modules
=====================================================

2. В корень проэкта создаем Dockerfile 
и пишим инструкциию
...........................

FROM node:14 as client

WORKDIR /app/client  // с помощью ключевого WORKDIR обозначаем рабочю папку сейчас
                     // сами придумываем путь /app

COPY client/package.json /app/client // копируем package.json в образ /app/client самого докера

RUN npm install // устанавливаем зависимости из package.json

COPY client /app/client // после установки зависимостей копируем всю папку client в образ /app/client
// на этом этапе в образе присутствуют все файлы вкльчая node_modules

RUN npm run build // делаем билд

.......... вторая часть инструкции для докера............

FROM node:16-alpine

WORKDIR /app

COPY server/package.json /app  // копируем пакетж

RUN npm install   // ставим зависимости

COPY server /app  // сопируем  все файлы из папки server  в корень app

COPY --from=client /app/client/build /app/client // 
// --from=client ключевое слово client совподает с этим FROM node:14 as client 
// --from=client говорим откуда хотим скопировать
// /app/client/build  говорим что хотим скопировать
// /app/client  говорим куда (тоесть содержимое папки build в папку client  )

EXPOSE 8080  // говорим какой порт работает в докер контейнере

CMD [ "npm", "start" ] // команда для запуска продакшен мода