// Select пока думаю сложный

function getBookingDetails123(bookingId: string) {
  const booking = this.dbService.booking.findUnique({
    where: { bookingId: +bookingId },
    select: {
      bookingId: true,
      bookingDateTime: true,
      doctor: {
        select: {
          fullName: true
        }
      },
      diagnostic: {
        select: {
          typeName: true
        }
      },
      location: {
        select: {
          name: true,
          address: true
        }
      }
    }
  })
}
