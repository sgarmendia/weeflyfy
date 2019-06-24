const today = new Date()
const dateOfMonth = today.getDate()
const dayOfWeek = today.getDay()

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const month = months[today.getMonth()]

export const week = [
  {
    name: 'Sunday',
    note: '',
  },
  {
    name: 'Monday',
    note: '',
  },
  {
    name: 'Tuesday',
    note: '',
  },
  {
    name: 'Wednesday',
    note: '',
  },
  {
    name: 'Thursday',
    note: '',
  },
  {
    name: 'Friday',
    note: '',
  },
  {
    name: 'Saturday',
    note: '',
  },
].map((_day, i) => {
  if (dayOfWeek > i) {

    const _date = new Date()
    _date.setDate(_date.getDate() - (dayOfWeek - i))
    const date = _date.getDate()
    return { ..._day, date }

  } else if (dayOfWeek < i) {

    const _date = new Date()
    _date.setDate(_date.getDate() + (i - dayOfWeek))
    const date = _date.getDate()
    return { ..._day, date }

  } else {

    return { ..._day, date: dateOfMonth, today: true }

  }
})

 