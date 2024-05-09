// dev-content-nginx:
// image: nginx:latest
// ports:
//   - "4000:80"
// volumes:
//   - ./nginx/dev-content.conf:/etc/nginx/conf.d/default.conf
//   - ../staging-content:/usr/share/nginx/html

// 1. Проверьте, запущен ли контейнер
//  1.1 docker-compose ps
//  1.2 docker ps

// 2. запустите его с помощью
//  2.1 docker-compose up -d
//  Определенный
//  2.2 docker-compose up -d dev-content-nginx

// 3. Остановить и удалить  // Removed всего произошел
//  3.1 docker-compose down
//  только определенные контейнеры
//  3.2 docker-compose down dev-content-nginx

// core
//  db_micro_course
//  core-dev-content-nginx-1
//  core-minio-1
//  core-createbuckets-1
