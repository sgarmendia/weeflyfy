import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'

class Main extends Component {
  render() {
    return (
      <Fragment>
        <h1>Parcel React boilerplate</h1>
      </Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))