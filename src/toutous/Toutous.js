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
          <button
            id='search'
            onClick={this.recherche}
            >⌕</button>
          {/* <button>Ajouter un toutou</button> */}
        </header>

        <FilterableToutousTable
          selectToutou={this.props.selectToutou}
          toutous={this.props.toutous}
        />
      </div>
    )
  }

  recherche () {
    const recherche = document.querySelector('.recherche')
    let display = recherche.style.display
    display = (display === 'block') ? 'none' : 'block'
    recherche.style.display = display
    recherche.focus()
  }
}

export default Toutous
