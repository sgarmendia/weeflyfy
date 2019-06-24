import React, { Component } from 'react';

import Week from './components/Week'
import { month } from './resources/data'
import './scss/main.scss'

class App extends Component {
  render() {
    return (
      <>
        <h1>Weeklyfy</h1>
        <h2>{month}</h2>
        <Week />
      </>
    )
  }
}

export default App;