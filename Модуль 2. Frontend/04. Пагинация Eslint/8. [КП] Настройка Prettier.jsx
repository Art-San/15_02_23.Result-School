// https://prettier.io/docs/en/options.html#quotes
module.exports = {
	tabWidth: 4, // ширина таб пробелы 4
	singleQuote: true, // одинарные ковычки
	jsxSingleQuote: true, // jsx одинарные ковычки
	arrowParens: 'avoid', // если стрелочная функция и один аргумент то не будет скобок
	semi: false, // нет точки с запятой в конце
	trailingComma: 'none', // это последня запятая
	useTabs: true, // Делайте отступы с помощью табуляции вместо пробелов.
	bracketSameLine: true
}
// Bracket Line defoalt // false
// true
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}>
  Click Here
</button>

// false
<button
  className="prettier-class"
  id="prettier-id"
  onClick={this.handleClick}
>
  Click Here
</button>