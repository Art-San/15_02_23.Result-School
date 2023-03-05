// Обрати внимание!

// При использовании самой слабой конфигурации сервера проект может 
// не запуститься из-за нехватки ресурсов. Рекомендуем использовать 
// конфигурацию минимум с 2 ГБ оперативной памяти.

// Дополнительные материалы:

// Генерация SSH для MacOC: ссылка
// Генерация SSH для Windows: ссылка
https://selectel.ru/blog/tutorials/how-to-generate-ssh/


SSH-ключ для Linux/MacOS

Откройте терминал и выполните команду:
$ ssh-keygen -t rsa

На консоль будет выведен следующий диалог:
Enter file in which to save the key (/home/user/.ssh/id_rsa):

Нажмите на клавишу Enter.  Далее система предложит 
ввести кодовую фразу для дополнительной защиты SSH-подключения:
Enter passphrase (empty for no passphrase):

Этот шаг можно пропустить. При ответе на этот и 
следующий вопрос просто нажмите клавишу Enter.

После этого ключ будет создан, 
а на консоль будет выведено следующее сообщение:

Далее выполните в терминале команду:
$ cat ~/.ssh/id_rsa.pub