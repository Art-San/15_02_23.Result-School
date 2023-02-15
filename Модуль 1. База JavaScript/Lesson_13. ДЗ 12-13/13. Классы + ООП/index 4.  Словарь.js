//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = 'отслеживать прогресс студентов в обучении веб-разработке'
// const h1 = document.querySelector('h1')
// h1.append(heder)
console.log('heder', heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description
      };
    }
  }

  remove(word) {
    delete this.words[word];
  }

  get(word) {
    return this.words[word];
  }

  showAllWords() {
    Object.values(this.words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`);
    });
  }
}

class HardWordsDictionary extends Dictionary {
  add(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
        isDifficult: true
      };
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);
hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);
hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.




//    мще решение такое же как правильное 
//==============================================================




// //===================================================================
