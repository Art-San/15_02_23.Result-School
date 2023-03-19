// ssh root@45.146.167.111
1. ls 

2. git -v

3. если нет гита 
// apt install git

4. копируем с гита
// git clone https://github.com/Art-San/YTb_MERN-Blog_2022_Let-s_try.git

5. Теперь смотрим и видем скопированный репозиторий 
// ls --- snap  c

6. Переходим в нее
// cd YTb_MERN-Blog_2022_Let-s_try

7. Если посмотрим в ней 
// ls --- 0.dop  client  Dockerfile  server ( 0.dop-- это лишнее)

8. Проверяем наличие ДОКЕРА
// docker -v

9. А дальше мы строим образ

docker build -t mernblog .


//---------- ERROR -- ERROR---- moment
исправляем ошибку из за moment.js
// ==============================================================

1. смотрим кокие контейнеры есть
// docker ps -a

2. Если есть что нужно удалять то удаляем (это первое что удалили)
// docker rm mernblog

3. Удаляем образ IMAGE
// docker image rm mernblog

4. clear

5. Проверяем докер на наличие образов
// docker image ls

6. Получаем обновленные данные с GIT
// root@aulgsyxwup:~/YTb_MERN-Blog_2022_Let-s_try# // нужно находится примерно тут
// git pull

7. Просто так смотрим
// ls

===========================================

8. И поновой 
// docker build -t mernblog .

И так образ был построен НЕ спервого раза 

10. Теперь котейнер только надо понять 80:8080 иди 8080:8080  (80:8080 так в видео)
// docker run -d -p 80:8080 --name mernblog --rm mernblog

--rm mernblog -- Это говорим с какого образа строить контейнер