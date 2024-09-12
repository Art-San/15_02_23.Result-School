// Diagnostic => DiagnosticLocation => Location
// model Diagnostic {
//   diagnosticId   Int      @id @default(autoincrement())
//   typeName       String
//   slug           String
//   description    String
//   price          Decimal  @db.Decimal(10, 2)
//   photoUrl       String

//   locations      DiagnosticLocation[]
//   results        DiagnosticResult[]
//   bookings       Booking[]
//   slots          Slot[]

//   @@map("diagnostics")
// }

// model DiagnosticLocation {
//   diagnosticLocationId   Int      @id @default(autoincrement())
//   diagnosticId           Int
//   locationId             Int

//   diagnostic              Diagnostic @relation(fields: [diagnosticId], references: [diagnosticId])
//   location                Location   @relation(fields: [locationId], references: [locationId])

//   @@map("diagnostic_locations")
// }

// model Location {
//   locationId   Int      @id @default(autoincrement())
//   name         String
//   address      String

//   doctors              Doctor[]
//   diagnosticLocations  DiagnosticLocation[]
//   bookings             Booking[]
//   workingHours         WorkingHour[]
//   slots                Slot[]

//   @@map("locations")
// }

// Diagnostic => DiagnosticLocation => Location
// вар 1
const diagnosticId = 1
const diagnostics1 = this.dbService.diagnostic.findFirst({
  where: { diagnosticId },
  select: {
    locations: {
      select: {
        locationId: true
      }
    }
  }
})
console.log(diagnostics1)

// {
// 	"locations": [
// 		{
// 			"locationId": 1
// 		},
// 		{
// 			"locationId": 2
// 		},
// 		{
// 			"locationId": 3
// 		}
// 	]
// }

const diagnostics = this.dbService.diagnostic.findFirst({
  where: { diagnosticId },
  select: {
    locations: {
      select: {
        location: {
          select: {
            locationId: true,
            name: true,
            address: true
          }
        }
      }
    }
  }
})
const locations = diagnostics.locations.map((item) => item.location)

// {
// 	"locations": [
// 		{
// 			"location": {
// 				"locationId": 1,
// 				"name": "Медицинский центр №1",
// 				"address": "ул. Тимакова, 21. Стр. 1, Томск, Томская обл., Россия, 634028"
// 			}
// 		},
// 		{
// 			"location": {
// 				"locationId": 2,
// 				"name": "Медицинский центр №2",
// 				"address": "ул. Лебедева, 78, Томск, Томская обл., Россия, 634021"
// 			}
// 		},
// 		{
// 			"location": {
// 				"locationId": 3,
// 				"name": "Медицинский центр №3",
// 				"address": "ул. Алтайская, 128б, Томск, Томская обл., Россия, 634021"
// 			}
// 		}
// 	]
// }
