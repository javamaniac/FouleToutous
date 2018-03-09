import React from 'react'
// import logo from '../logo.svg';
// import { toutous } from "../data.js";
import ToutouImage from '../ToutouImage.js'
import '../App.css'

class FicheToutou extends React.Component {
  render () {
    console.log(this.props)
    const toutou = this.props.toutou
    const creation = this.props.creation
    return (
      <div>
        {creation ? <h1>Création</h1> : <h1>Fiche toutou!</h1>}

        <ToutouImage toutou={toutou} />

        {creation ? (
          <div>
            <label for='nom'>Nom</label>
            <input
              id='nom'
              type='text'
              className='recherche'
              value={toutou.nom}
            />
          </div>
        ) : (
          <h2>{toutou.nom}</h2>
        )}
      </div>
    )
  }
}

export default FicheToutou
