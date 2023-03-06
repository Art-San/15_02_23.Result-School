Дополнительные материалы:

Исходный код: ссылка https://drive.google.com/drive/folders/1H0zYxQxsAGT3b2xgK-_OluIofCXGTVza?usp=sharing

// на гит хабе обновили файлы

docker stop jfd // останавливаем

git pull  // и получаем данные с добавленным или измененым файлом

docker build -t jfd . //(-t-называем, (.)-в конце указывает где искать файл инструкцию Dockerfile (в этой папке))

если не в первый раз дана команда "docker build -t jfd ." то поцесс будет быстрее так как часть была закашированны

"docker build -t jfd ."  - ПРОДАКШЕН БИЛД

docker run -d -p 80:8080 --name jfd --rm jfd // Запускаем с привычным портом 8080:8080
