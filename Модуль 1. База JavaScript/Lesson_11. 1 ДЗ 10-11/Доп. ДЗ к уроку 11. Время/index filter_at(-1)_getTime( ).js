//  ---- Вывод заголовка 
const body = document.querySelector('body')
const heder = `отфильтрованный массив`
// const h1 = document.querySelector('h1')
// h1.append(heder)
body.innerHTML = ` <h1>${heder}</h1>`
// ===============================================================
//        Правильное решение
//=================================================================
const peopleWithVisa = [
    {
      firstName: "Stasia",
      lastName: "Ward",
      criminalRecord: true,
      passportExpiration: "19.06.2040"
    },
    {
      firstName: "Elliot",
      lastName: "Baker",
      criminalRecord: false,
      passportExpiration: "04.06.2041"
    },
    {
      firstName: "Leighann",
      lastName: "Scott",
      criminalRecord: true,
      passportExpiration: "31.07.2039"
    },
    {
      firstName: "Nick",
      lastName: "Pop",
      criminalRecord: false,
      passportExpiration: "31.12.2010"
    }
  ];

  
  const allowVisa = (people) => {
    return people.filter((person) => {
      const splittedExpirationDate = person.passportExpiration.split('.')
      // console.log("splittedExpirationDate", splittedExpirationDate);
      const day = splittedExpirationDate[0]
      // console.log('day', day);
      const month = splittedExpirationDate[1]
      // console.log("month", month);
      const year = splittedExpirationDate.at(-1)
      // console.log('year', year);
      const date = new Date(year, month - 1, day)
      // console.log('date', date);
      return (
        date.getTime() > Date.now() && !person.criminalRecord
      )
    })

  }
  
  console.log(allowVisa(peopleWithVisa));
  // console.log(peopleWithVisa);
  