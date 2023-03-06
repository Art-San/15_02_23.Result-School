docker -v

docker build -t jfd . //(-t-называем, (.)-в конце указывает где искать файл инструкцию Dockerfile (в этой папке))

clear

docker image ls
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
jfd          latest    033bab48ced6   3 hours ago   196MB

строим контейнер 

docker run -d -p 3000:8080 --name jfd --rm jfd  // тест какойто

docker ps -a

docker stop jfd

clear

docker run -d -p 80:8080 --name jfd --rm jfd // Запускаем с привычным портом 8080:8080

docker stop jfd // ФИНАЛ УРОКА

// ===========================================================
Сохраните изменения в вашем Dockerfile, 
а затем попробуйте снова создать образ с помощью команды        // ПОМОЩЬ ИИ
docker build -t my-image-name .. Это должно работать сейчас.
// ==================================================================


// => CANCELED [stage-1 4/6] RUN npm instal                                                                               7.9s 
// => ERROR [client 4/6] RUN npm instal    