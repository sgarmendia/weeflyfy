import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const Day = props => {
  const [edit, setedit] = useState(false)
  const inputEl = useRef(null)

  useEffect(() => {
    if (edit) { inputEl.current.focus() }
  }, [edit])

  const renderInput = () => (
    <textarea className={'note-text'}
      ref={inputEl} type="text" cols="20"
      placeholder={'Hover to take a note...'}
      disabled={!edit}
      name={props.name} 
      id={props.date}
      onChange={props.editDay}
      onMouseOver={() => setedit(true)}
      onBlur={() => setedit(false)}
      value={props.note}
    />
  )
  
  const today = new Date().getDate()

  return (
    <div className={`day ${(props.date === today) && 'today'}`}>
      <h3>{props.name}</h3>
      <p>{props.date}</p>
      {renderInput()}
    </div>
  )
}

Day.propTypes = {
  editDay: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
}

const areNotesEqual = (prevProps, nextProps) => prevProps.note === nextProps.note

export default React.memo(Day, areNotesEqual)
