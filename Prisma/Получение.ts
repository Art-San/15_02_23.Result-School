// model WorkingHour {
//   workingHourId   Int  @id @default(autoincrement())
//   locationId      Int
//   startTime       String? // может быть null
//   endTime         String?
//   weekdayIndex    Int

//   location        Location @relation(fields: [locationId], references: [locationId])

//   @@map("working_hours")
// }
const locationId = 1
const allHoursForLocation = this.dbService.workingHour.findMany({
  where: {
    locationId: locationId,
    startTime: {
      // Условие для проверки, что startTime не равно null
      not: null
    }
  },
  orderBy: {
    // workingHourId: 'asc',
    weekdayIndex: 'asc'
  }
})

// ======= include
// model Location {
//   locationId   Int      @id @default(autoincrement())
//   name         String

//   doctors              Doctor[]
//   workingHours         WorkingHour[]

//   @@map("locations")
// }

// model WorkingHour {
//   workingHourId   Int  @id @default(autoincrement())
//   locationId      Int
//   startTime       String // Изменить на String или Time в зависимости от вашего предпочтения

//   location        Location @relation(fields: [locationId], references: [locationId])

//   @@map("working_hours")
// }

// Пример получения Location include с загруженными рабочими часами
const someLocationId = 1
const locationWithWorkingHours = this.dbService.location.findUnique({
  where: {
    locationId: someLocationId
  },
  include: {
    workingHours: true // Получили массив с объектами (часы работы) для этой локации
  }
})

console.log(locationWithWorkingHours)

// {
// 	"locationId": 1,
// 	"name": "Медицинский центр №1",
// 	"address": "ул. Кулагина, д. 3",
// 	"workingHours": [
// 		{
// 			"workingHourId": 8,
// 			"locationId": 1,
// 			"startTime": "07",
// 			"endTime": "12",
// 			"weekdayIndex": 0
// 		},
// 		{
// 			"workingHourId": 9,
// 			"locationId": 1,
// 			"startTime": "14",
// 			"endTime": "18",
// 			"weekdayIndex": 1
// 		},
// 	],
// 	"doctors": [
// 		{
// 			"doctorId": 1,
// 			"locationId": 1,
// 			"fullName": "Анна Андреева",
// 			"specialtyId": 1,
// 			"price": "1500",
// 			"photoUrl": "/images/doctors-listing/profiles/4.png",
// 			"experience": "With a robust experience in diagnosing and treating a variety of neurological conditions such as epilepsy, Alzheimer's disease, and migraine, I ensure a thorough examination and tailored treatment plans for every patient.",
// 			"certificates": "Board Certified in Neurology, Fellowship in Epilepsy.",
// 			"services": "Услуга 1"
// 		}
// 	]
// }

// Пример использования select:
const locationWithSelectedWorkingHours = this.dbService.location.findUnique({
  where: {
    locationId: someLocationId
  },
  select: {
    locationId: true,
    name: true,
    workingHours: {
      select: {
        startTime: true,
        endTime: true,
        weekdayIndex: true // если нужно
      }
    }
  }
})
console.log(locationWithSelectedWorkingHours)

// {
// 	"locationId": 1,
// 	"name": "Медицинский центр №1",
// 	"workingHours": [
// 		{
// 			"startTime": "07",
// 			"endTime": "12",
// 			"weekdayIndex": 0
// 		},
// 		{
// 			"startTime": "14",
// 			"endTime": "18",
// 			"weekdayIndex": 1
// 		},
// 		{
// 			"startTime": "14",
// 			"endTime": "18",
// 			"weekdayIndex": 2
// 		},
// 		{
// 			"startTime": "10",
// 			"endTime": "16",
// 			"weekdayIndex": 3
// 		},
// 		{
// 			"startTime": "15",
// 			"endTime": "20",
// 			"weekdayIndex": 4
// 		},
// 		{
// 			"startTime": "15",
// 			"endTime": "20",
// 			"weekdayIndex": 5
// 		},
// 		{
// 			"startTime": "15",
// 			"endTime": "20",
// 			"weekdayIndex": 6
// 		}
// 	]
// }
