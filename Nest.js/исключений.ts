// https://docs.nestjs.com/exception-filters#built-in-http-exceptions:~:text=)%3B%0A%7D-,Built%2Din%20HTTP%20exceptions,-%23
// 1
throw new Error(error)
// Это общий класс исключений в JavaScript, используемый 
// для создания пользовательских исключений. 
// В данном случае, если происходит ошибка, которая 
// не соответствует ни одному из вышеупомянутых типов исключений, 
// будет создано исключение с сообщением, переданным в конструктор Error. 
// Однако, использование Error напрямую может быть не лучшим выбором в контексте Nest.js,
// так как фреймворк предоставляет специализированные 
// классы исключений для более тонкой настройки ответов.
1. throw new NotFoundException('Актер не найден')

2. throw new UnauthorizedException('Пожалуйста войдите в систему')

3. throw new BadRequestException('Юзер с таким email есть уже в системе')



import { 
 NotFoundException, 
 UnauthorizedException, 
 BadRequestException, 
 ForbiddenException, 
 InternalServerErrorException, 
 NotImplementedException, 
 ServiceUnavailableException, 
 ConflictException, 
 HttpException, 
 ValidationException,
 NotAcceptableException
} from '@nestjs/common';

// 2. Пример использования NotFoundException
throw new NotFoundException('Актер не найден')
// Это исключение генерируется, когда ресурс, который пользователь пытается получить, не найден. 
// В данном случае, если актер не найден в базе данных, 
// будет возвращено сообщение "Актер не найден" с HTTP-статусом 404.

// 3. Пример использования UnauthorizedException
// throw new UnauthorizedException('Доступ запрещен')
throw new UnauthorizedException('Пожалуйста войдите в систему')
// Исключение UnauthorizedException используется для ситуаций, 
// когда пользователь пытается получить доступ к защищенному ресурсу 
// без соответствующих прав доступа. В данном случае, если пользователь не авторизован, 
// будет возвращено сообщение "Пожалуйста войдите в систему" с HTTP-статусом 401.

// 4. Пример использования BadRequestException
throw new BadRequestException('Некорректный запрос');
throw new BadRequestException('Юзер с таким email есть уже в системе')
// BadRequestException генерируется, когда запрос пользователя некорректен 
// или не может быть обработан. В данном случае, если пользователь 
// пытается зарегистрироваться с email, который уже используется, 
// будет возвращено сообщение "Юзер с таким email есть уже в системе" 
// с HTTP-статусом 400.

// 5. Пример использования ForbiddenException
throw new ForbiddenException('Нет права для этой операции');
// ForbiddenException: Используется для ситуаций, когда пользователь 
// имеет доступ к ресурсу, но не имеет права на выполнение определенного 
// действия. Возвращает HTTP-статус 403.

// Пример использования InternalServerErrorException
throw new InternalServerErrorException('Внутренняя ошибка сервера');
// InternalServerErrorException: Используется для ситуаций, когда в приложении происходит 
// непредвиденная ошибка. Возвращает HTTP-статус 500.

// Пример использования NotImplementedException
throw new NotImplementedException('Функциональность не реализована');
// NotImplementedException: Используется для ситуаций, когда функциональность 
// еще не реализована. Возвращает HTTP-статус 501.

// Пример использования ServiceUnavailableException
throw new ServiceUnavailableException('Сервис временно недоступен');
// ServiceUnavailableException: Используется для ситуаций, 
// когда сервис временно недоступен. Возвращает HTTP-статус 503.

// Пример использования ConflictException
throw new ConflictException('Конфликт');
// ConflictException: Используется для ситуаций, когда запрос 
// не может быть выполнен из-за конфликта, например, при попытке создать ресурс, 
// который уже существует. Возвращает HTTP-статус 409.

// Пример использования HttpException с произвольным статусом
throw new HttpException('Сообщение об ошибке', 418);
// HttpException: Базовый класс для всех HTTP-исключений в Nest.js. 
// Позволяет создавать пользовательские исключения 
// с произвольным HTTP-статусом и сообщением.

// Пример использования ValidationException
throw new ValidationException([
 {
    property: 'email',
    constraints: { isEmail: 'email должен быть действительным адресом электронной почты' },
    children: [],
 },
]);
// ValidationException: Используется в связке с валидацией данных, 
// например, при использовании классов-валидаторов. 
// Возвращает HTTP-статус 400 и содержит информацию 
// о неверно переданных данных.

// Пример использования NotAcceptableException
throw new NotAcceptableException('The requested data format is not supported.')
// сервер генерирует ответ с кодом 
// состояния 406 и сообщением об ошибке, 
// указывающим на то, что запрошенный формат данных не поддерживается.





