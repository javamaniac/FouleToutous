import React from 'react'
import FilterableToutousTable from './FilterableToutousTable.js'
import '../App.css'

class Toutous extends React.Component {
  render () {
    return (
      <div>
        <header className='App-header'>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className='App-title'>Foule toutous</h1>
          {/* <button>Ajouter un toutou</button> */}
        </header>

        <FilterableToutousTable
          selectToutou={this.props.selectToutou}
          toutous={this.props.toutous}
        />
      </div>
    )
  }
}

export default Toutous
