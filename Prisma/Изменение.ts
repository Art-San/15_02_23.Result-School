// После изменения файла `schema.prisma`

// **1: Создание миграции**
// ====>  npx prisma migrate dev --name your_migration_name <=====

// **2: Применение миграции**
//   1. Примените миграцию к вашей базе данных. Если вы уже выполнили шаг 1, Prisma автоматически применит миграцию в режиме разработки (`dev`). Это обновит схему вашей базы данных, добавив новые таблицы, поля или изменив существующие.

// **3: Обновление Prisma Client**
//   1. После применения миграции обновите Prisma Client, чтобы он соответствовал новой схеме базы данных. Выполните следующую команду:
//  ===> npx prisma generate <====

// **4: Тестирование**
//   1. Проверьте, что ваше приложение корректно работает с обновленной базой данных. Убедитесь, что все новые модели и поля доступны и работают как ожидается.

// **5: Развертывание (если необходимо)**
//   1. Если вы развертываете изменения в продакшн, убедитесь, что вы также применили миграции на сервере. Для этого используйте команду:
// ====>  npx prisma migrate deploy <====
