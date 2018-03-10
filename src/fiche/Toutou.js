import React from 'react'
// import logo from '../logo.svg';
// import { toutous } from "../data.js";
import ToutouImage from '../ToutouImage.js'
import '../App.css'
import fireb from '../fireb'

class FicheToutou extends React.Component {
  render () {
    console.log(this.props)
    const toutou = this.props.toutou
    const creation = this.props.creation

    // this.props.ajoutToutou({nom: 'dd'})

    return (
      <div>
        {creation ? <h1>Création</h1> : <h1>Fiche toutou!</h1>}

        <ToutouImage toutou={toutou} />

        {creation ? (
          <div>
            <label htmlFor='nom'>Nom</label>
            <input
              id='nom'
              type='text'
              className='recherche'
              value={toutou.nom}
              onChange={this.onChange}
            />
            <button onClick={this.ajout.bind(this, toutou)}>Ajout</button>
          </div>
        ) : (
          <div>
            <h2>{toutou.nom}</h2>
            <button onClick={this.supprimer.bind(this, toutou)}>Suppression</button>
          </div>
        )}
      </div>
    )
  }

  onChange () {
    return true
  }

  ajout (toutou) {
    // debugger
    console.log(toutou)
    console.log(this.props)
    this.props.ajoutToutou(toutou)
    // this.props.selectToutou(toutou, true)
    // this.props.ajoutToutou({nom: 'dd'})
  }

  supprimer (toutou) {
    // debugger
    console.log(toutou)
    console.log(this.props)
    // this.props.ajoutToutou(toutou)
    // this.props.selectToutou(toutou, true)
    // this.props.ajoutToutou({nom: 'dd'})
    window.fireb = fireb
    // debugger
    fireb.database().ref('toutous/' + window.history.state.key).set(null, (resolve, reject) => {
      document.location.replace('/')
    })
    // fireb.database().ref('toutous').remove(history.state.key)
    // fireb.database().ref('toutous').push(toutouConfig)
  }
}

export default FicheToutou
