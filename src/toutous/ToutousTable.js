import React from 'react';
// import logo from '../logo.svg';
// import { toutous } from '../data.js';
import ToutouRow from './ToutouRow.js';
import '../App.css';

class ToutousTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    // const inStockOnly = this.props.inStockOnly;

    const toutous = [];
    // let lastCategory = null;
    
    this.props.toutous.forEach((toutou) => {
      console.log(toutou.nom, filterText)
      if (filterText) {
        if (toutou.nom.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
          return;
        }
      }
      
      toutous.push(
        <span 
          onClick={this._ficheToutou.bind(this, toutou, 'name')}>

        <ToutouRow
          toutou={toutou}
          key={toutou.nom} 
          />
        </span>
      );
    });

    if (filterText.length > 2) {
      const nouveau = {
        nom: 'Créer : ' + filterText
      }
      toutous.push(
        <span
          onClick={this._nouveauToutou.bind(this, nouveau, 'name')}>
          <ToutouRow toutou={nouveau}
            key={nouveau.nom} />
        </span>
      );
    }    

    return (
      <div>
        {toutous}

        {/* <button onClick={this.handleClick}>
        Click me
      </button> */}
      </div>      
    );
  }

  _nouveauToutou (toutou) {
    window.history.pushState({}, '', `/creation/${toutou.nom}`)
  }

  _ficheToutou = (toutou) => {
    window.history.pushState({}, '', `/fiche/${toutou.nom}`)
  }
}


export default ToutousTable;