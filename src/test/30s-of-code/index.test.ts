function accumulate(...nums) {
  return nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], [])
}
function addMinutesToDate(date, n) {
  const d = new Date(date)
  d.setTime(d.getTime() + n * 60 * 1000)
  return d.toISOString().split('.')[0].replace('T', ' ')
}

function addWeekDays(startDate, count) {
  return Array.from({ length: count }).reduce((date) => {
    date = new Date(date.setDate(date.getDate() + 1))
    if (date.getDay() % 6 === 0)
      date = new Date(date.setDate(date.getDate() + (date.getDay() / 6 + 1)))
    return date
  }, startDate)
}

const all = (arr, fn = Boolean) => arr.every(fn)

if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest
  describe('30s-of-code', () => {
    it('accumulate', () => {
      expect(accumulate(1, 2, 3, 4)).toEqual([1, 3, 6, 10])
      expect(accumulate(1, 2, 3, 4, 5)).toEqual([1, 3, 6, 10, 15])
    })

    it('addMinutesToDate', () => {
      expect(addMinutesToDate('2020-10-19', -10)).toEqual('2020-10-18 23:50:00')
    })

    it('addWeekDays', () => {
      expect(addWeekDays(new Date('2020-10-19'), 5)).toEqual(new Date('2020-10-26'))
      expect(addWeekDays(new Date('Oct 12, 2020'), 5)).toEqual(new Date('Oct 19, 2020'))
    })

    it('all', () => {
      expect(all([4, 2, 3], x => x > 1)).toEqual(true)
    })
  })
}
