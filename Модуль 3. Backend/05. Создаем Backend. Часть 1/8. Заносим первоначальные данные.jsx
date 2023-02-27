// Файлы к практике: ссылка
// https://vladilen.notion.site/d59208ea56ad4b50b5c9081deabcbcbb

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateUserData() {
  return {
    rate: getRandomInt(1, 5),
    completedMeetings: getRandomInt(0, 200),
    image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
      .toString(36)
      .substring(7)}.svg`,
  }
}

module.exports = {
  generateUserData
}

[
    { "_id": "67rdca3eeb7f6fgeed471818", "name": "Доктор" },
    { "_id": "67rdca3eeb7f6fgeed471820", "name": "Официант" },
    { "_id": "67rdca3eeb7f6fgeed471814", "name": "Физик" },
    { "_id": "67rdca3eeb7f6fgeed471822", "name": "Инженер" },
    { "_id": "67rdca3eeb7f6fgeed471824", "name": "Актер" },
    { "_id": "67rdca3eeb7f6fgeed471829", "name": "Повар" }
  ]

  [
    {
      "_id": "67rdca3eeb7f6fgeed471198",
      "name": "Нудила",
      "color": "primary"
    },
    {
      "_id": "67rdca3eeb7f6fgeed471100",
      "name": "Странный",
      "color": "secondary"
    },
    {
      "_id": "67rdca3eeb7f6fgeed4711012",
      "name": "Троль",
      "color": "success"
    },
    {
      "_id": "67rdca3eeb7f6fgeed471101",
      "name": "Алкоголик",
      "color": "danger"
    },
    {
      "_id": "67rdca3eeb7f6fgeed471102",
      "name": "Красавчик",
      "color": "info"
    },
    {
      "_id": "67rdca3eeb7f6fgeed471103",
      "name": "Неуверенный",
      "color": "dark"
    }
  ]