export function checkIsWeekend(date: Date) {
  const day = date.getDay()
  return day === 6 || day === 0
}
const businessHours = [9, 17]

export function purchase() {
  const currentHour = new Date().getHours()
  const [open, close] = businessHours

  if (currentHour > open && currentHour < close)
    return { message: 'Success' }

  return { message: 'Error' }
}
