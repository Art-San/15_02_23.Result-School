// 1. Использование getServerSideProps или getStaticProps
// для обработки ошибок: В Next.js, когда вы используете getServerSideProps
// или getStaticProps для получения данных на сервере, вы можете возвращать
// объект с полем notFound, чтобы указать, что страница не найдена.

//    export async function getServerSideProps(context) {
//      const data = await fetchData(context.params.id);
//      if (!data) {
//        return {
//          notFound: true,
//        };
//      }
//      return {
//        props: { data },
//      };
//    }

// 2 Использование getInitialProps для обработки ошибок:
// Если вы используете getInitialProps для получения данных на сервере,
// вы можете возвращать объект с полем error, чтобы указать на ошибку.

//    MyPage.getInitialProps = async (ctx) => {
//      const data = await fetchData(ctx.query.id);
//      if (!data) {
//        return {
//          error: 'Data not found',
//        };
//      }
//      return { data };
//    };

// 3 Использование пользовательских ошибок:
// Вы можете создавать собственные классы ошибок, которые наследуются
// от стандартного класса Error в JavaScript. Это позволяет вам определить
// специфические типы ошибок и обрабатывать их соответствующим образом.

class NotFoundError extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotFoundError'
  }
}

// Использование NotFoundError
if (!data) {
  throw new NotFoundError('Data not found')
}

// 4. Использование next/error для отображения страницы ошибки:
// Next.js предоставляет встроенный компонент Error,
// который можно использовать для отображения страницы ошибки с
// пользовательским сообщением.

//    import Error from 'next/error';

//    function MyPage({ error }) {
//      if (error) {
//        return <Error statusCode={error.statusCode} title={error.message} />;
//      }
//      // Остальной код компонента
//    }

// 5. Использование next/router для перенаправления:
// Если вы хотите перенаправить пользователя на другую страницу в случае ошибки,
// вы можете использовать next/router для программного перенаправления.

//    import { useRouter } from 'next/router';

//    function MyPage() {
//      const router = useRouter();

//      const handleError = () => {
//        router.push('/error');
//      };
//    }
