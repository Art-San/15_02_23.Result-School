// ngrok.yml
// version: 1
// authtoken: YOU NJRTN
// tunnels:
//   first_tunnel:
//     proto: http
//     addr: 5173
//   second_tunnel:
//     proto: http
//     addr: 3001

// Положил этот файл
// C:\Users\Aleksandr\.ngrok2\ngrok.yml

// Этой командой запускал
// ngrok start --all --config=C:\Users\Aleksandr\.ngrok2\ngrok.yml

// Эта не сработала
// ngrok start --all

// ngrok start foo bar baz

// EXAMPLES:
//   ngrok http 80                           # безопасный общедоступный URL-адрес для веб-сервера порта 80
//   ngrok http --domain baz.ngrok.dev 8080  # порт 8080 доступен на baz.ngrok.dev
//   ngrok http foo.dev:80                   # туннель к хосту: порт вместо локального хоста
//   ngrok http https://localhost            # открыть локальный https-сервер
//   ngrok tcp 22                            # туннелировать произвольный TCP-трафик на порт 22
//   ngrok tls --domain=foo.com 443          # TLS-трафик для foo.com на порт 443
//   ngrok start foo bar baz                 # запускать туннели из файла конфигурации

// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';

// SkipBrowserWarningMiddleware.ts
// @Injectable()
// export class SkipBrowserWarningMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     res.setHeader('ngrok-skip-browser-warning', 'true'); // Устанавливаем заголовок ngrok-skip-browser-warning
//     // Или установите пользовательский заголовок User-Agent, если предпочтительнее
//     // res.setHeader('User-Agent', 'MyCustomAgent');
//     next(); // Продолжаем обработку запроса
//   }
// }

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SkipBrowserWarningMiddleware } from './skip-browser-warning.middleware' // Импортируем наш middleware

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(SkipBrowserWarningMiddleware) // Применяем middleware
  await app.listen(3000)
}
bootstrap()
