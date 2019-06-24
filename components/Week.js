import React, { useState, useEffect } from 'react'

import Day from './Day'
import { week } from '../resources/data'

const Week = () => {
  const [days, setDays] = useState(week)

  useEffect(() => {
    const lastDay = localStorage.getItem('weeklyfyLastDay')
    const today = new Date().getDate()
    
    if ((today === +lastDay) && localStorage.getItem('week')) {
      setDays(JSON.parse(localStorage.getItem('week')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('week', JSON.stringify(days))
    localStorage.setItem('weeklyfyLastDay', new Date().getDate())
  }, [days])

  const editDay = ({ target }) => {
    const { name, value, id } = target
    const dayToEdit = { name, note: value, date: +id }
    setDays(days => days.map(day => day.date === dayToEdit.date ? dayToEdit : day))
  }

  return (
    <div className={'week'}>
      {days.map(day => <Day key={day.name} editDay={editDay} {...day} /> )}
    </div>
  )
}

export default Week
