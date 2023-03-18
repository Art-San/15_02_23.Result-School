переходим на клиент "cd client"
убеждаемся что на клиентье есть все папки и файлы

1. Делаем билд client 
"npm run build"

2. Идем в Сервер в app.js

пишем такую логику не забываем про пути
Пришлось добавить доп импорты из урока MERN-Blog 2022 к уроку Владилена

import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static(path.join(__dirname, 'client')))
  
//     const indexPath = path.join(__dirname, 'client', 'index.html')
  
//     app.get('*', (req, res) => {
//       res.sendFile(indexPath)
//     })
//   }

3. Идем в КЛИЕНТ копируем содержимое папки билд
и вносим в папку CLIENT2 уже на сервере 
(это временное решение для проверки что север может отдавать клиентскую часть)

4. после добавления импортов path, { dirname } и fileURLToPath заработало
запвстили приложение "npm start". 

5. Удаляем папку client из cerver