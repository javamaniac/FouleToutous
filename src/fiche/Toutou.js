import React from 'react';
import logo from '../logo.svg';
import { toutous } from '../data.js';
import ToutouImage from '../ToutouImage.js';
import '../App.css';

class FicheToutou extends React.Component {
  render() {
    console.log(this.props)
    const toutou = toutous[0] //this.props.toutou
    return (
      <div>
        <h1>Fiche toutou!</h1>
        <ToutouImage toutou={toutou} />
        <h2>{toutou.nom}</h2>
      </div>
    )
  }
}

export default FicheToutou;