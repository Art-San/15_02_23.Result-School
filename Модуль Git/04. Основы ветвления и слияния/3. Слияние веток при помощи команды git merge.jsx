git branch --- ПРОВЕРКА НАЛИЧИЕ ВЕТОК

git branch 'Название ветки  --- создание ветки

git checkout develop 'переключение на веткe develop'

git branch -d develop 'удаление ветки develop'

// после  изменнения в новой ветке
// -----------------------------------
git status // для проверки изхменненых файлов

git add . //точка указывает на то чтоб добавить все файлы в стейдж

git commit -m "пишем осозннаные слова"  // добовляем коментарий

git push origin mainpage // mainpage - это название ветки --- добавили ветку на гит хаб

// теперь надо из ветки  mainpage перенести все именения в ветку МАСТЕР
// для этого переключаемся на ветку МАСТЕР

// после  этого пишем команду git merge и название ветки из которой берем изминения

git merge mainpage