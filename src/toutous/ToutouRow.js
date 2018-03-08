import React from 'react';
// import logo from '../logo.svg';
// import { toutous } from '../data.js';
import ToutouImage from '../ToutouImage.js';
import '../App.css';

class ToutouRow extends React.Component {
  render() {
    const toutou = this.props.toutou
    const nom = toutou.nom 
    return (
      <div className="toutou">
        <ToutouImage toutou={toutou} />
        <div className="nom">{nom}</div>
      </div>
    );
  }
}

export default ToutouRow;