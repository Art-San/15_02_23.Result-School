// Дапустим внесли изменнение в проэкт и нам нужно их внести на бегет
// для этого нужно на виртуальной машине очистить все что связанно DOCKER
//===================================================================================
сначала 
docker ps -a  // смотрим каккие контейнеры есть

CONTAINER ID   IMAGE     COMMAND                  CREATED       STATUS       PORTS                                   NAMES
2c74558df358   jfd       "docker-entrypoint.s…"   2 hours ago   Up 2 hours   0.0.0.0:80->8080/tcp, :::80->8080/tcp   jfd

docker rm jfd // это первое что мы сделали

docker Image rm jfd // удаляем образ
clear
// теперь там нет ни чего чтоб относилось dockery
docker image ls // все пустое
//========================================================================================


// дальше по видео пошли создавать файл 

в папке /server/config/ создаем production.json

и из /server/config/default.json копируем объект

{
  "port": 8080,
  "mongoUri": "mongodb://ubqfncdgufh0j9uzjobw:nwUUiw2p0LnPSWtRs9yq@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/b1ttkso38p83shp?replicaSet=rs0",
  "accessSecret": "super secret from backend",
  "refreshSecret": "super refresh key"
}

// дальше переходи в консол и пишем

git pull  // и получаем данные с добавленным файлом

// можем даже посмотреть
ls  // Dockerfile client server
cd server/ // переходим в папку сервер
ls  // смотрим какие есть файлы 
cd config/ // перешли в конфиг
ls  // видим default.json и production.json

nano production.json // чтоб выйти нажимаем Ctrl X

cd .. // наверх
cd .. // еще раз наверх

clear // очистим консоль чтоб было понятние..

ЧИСТИТЬ ВСЕ ОБРАЗЫ БЫЛО НЕ ОБЯЗАТЕЛЬНО

СТРОИМ 
docker build -t jfd . // jfd - название, точка в конце потомучто мы находимся в этой папке
ОБРАз построен

docker run -d -p 80:8080 --name jfd --rm jfd // это говорим скакого IMAGE запускать

