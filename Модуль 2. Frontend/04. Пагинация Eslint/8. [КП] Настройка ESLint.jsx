// Начнём с определения понятия. Линтинг – это процесс проверки 
// исходного кода на наличие программных и стилистических ошибок.
//  Это наиболее полезно при выявлении некоторых распространённых 
//  и необычных ошибок. 

// Lint или линтер – это программа, которая реализует проверку программного кода. 
// Такие программы доступны для большинства языков. 

// На самом деле мы уже пользуемся одним линтером, который называется ESLint, 
// он есть “под капотом” приложения создаваемого через Create React App. 
// Но при стандартной настройке он отображает далеко не все ошибки, 
// а только фатальные. Нам же нужно, чтобы он так же говорил о стиле кода. 

// Установим ESLint глобально. 

// +++++++++++++++++++++++++++
// # на Windows
// npm i -g eslint     // если он глобально уже стоит переходим к следующей команде
// ++++++++++++++++++++++++
// # на Mac / Linux
// sudo npm i -g eslint

// После установки перейдем в корень нашего проекта. Вводим команду:

++++++++++++++
# В консоли
eslint --init
++++++++++++++

1 Мы хотим пользоваться им для поиска ошибок, синтаксиса и принуждённой стилизации кода. 
Далее нам задают вопрос какие модули мы используем:

2 Мы используем ES6 и поэтому выбираем import/export:

3 Выбираем, очевидно, React. 
3.1 Далее мы не используем TypeScript:

4 Исполняем код в браузере:

5 Какой стиль кода используем, выберем первый пункт:

6 Далее выбираем стандартный:

7 И выберем формат конфига JavaScript:

8 Исходя из ответов ESLint предложит установить зависимости, соглашаемся:

9 Дожидаемся установки:

10. Из менеджеров пакетов будем использовать npm.

Перезапускаем наш проект и видим множество ошибок:

Нужно править. Откроем файл .eslintrc.js.

Добавим некоторые настройки в .eslintrc.js:

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    indent: ["error", 4], // Отступ количество пробелов 
    semi: [2, "always"], // Точка с запятой в конце строки

    // Ошибка при наличии пробела при обозночении функции, уберём её
    "space-before-function-paren": ["error", "never"], 

    // Использование двойных кавычек
    quotes: ["error", "double", { allowTemplateLiterals: true }]
  }
};

******************** ЭТО вариан образовался у мене спустя 9 месяцев ************
module.exports = {
  env: {
      browser: true,
      es2021: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
      indent: ['error', 4],
      semi: ['error', 'never'],
      'space-before-function-paren': [
          'error',
          { anonymous: 'always', named: 'never' }
      ],
      'multiline-ternary': ['off'],
      quotes: [
          'error',
          'single',
          {
              allowTemplateLiterals: true
          }
      ]
  }
}
************************************************************




************************************************************

Подробнее можно ознакомиться по ссылкам:

indent: ссылка https://eslint.org/docs/latest/rules/indent
semi: https://eslint.org/docs/latest/rules/semi#require-or-disallow-semicolons-instead-of-asi-semi
space-before-function-paren: ссылка https://eslint.org/docs/latest/rules/space-before-function-paren
quotest: ссылка  https://eslint.org/docs/latest/rules/quotes

Далее, исходя из параметров ESLint, нужно настроить Prettier.
 Создаём файл .prettierrc.js:

 module.exports = {
  trailingComma: "none",
  tabWidth: 4,
  semi: true
};

*********** ЭТО вариан образовался у мене спустя 9 месяцев ************
module.exports = {
    trailingComma: 'none',
    tabWidth: 4,
    semi: false,   // точка с запятой удалить
    singleQuote: true   // двойные ковычки удалит
}
********************************************


Подробнее о опциях Prettier: ссылка  https://prettier.io/docs/en/options.html

Теперь нужно отформатировать все документы согласно правилам. Запустите:

# В консоли
npx prettier --write .

Так же её можно добавить в наши скрипты:

// В package.json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "format": "npx prettier --write ."
},

И после можно запускать.

Останется ошибка в компоненте Episode. Нужно также добавить PropTypes:

Episode.propTypes = {
  name: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired
};

Или есть вариант использовать комментарий в начале файла, 
чтобы отключить обязательное добавление PropTypes (не рекомендуется):

/* eslint-disable react/prop-types */