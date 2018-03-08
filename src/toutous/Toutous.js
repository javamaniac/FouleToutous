import React from 'react';
import logo from '../logo.svg';
import { toutous } from '../data.js';
// import ToutouImage from '../ToutouImage.js';
import FilterableToutousTable from './FilterableToutousTable.js';
import '../App.css';

class Toutous extends React.Component {

  handleClick = () => {
    debugger
    console.log('this is:', this);
  }

  rrender() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Foule toutous</h1>
          <button>Ajouter un toutou</button>
        </header>
        {/* <p className="App-intro"></p> */}

        {/* <ToutousCarousel toutous={toutous} /> */}

        <FilterableToutousTable toutous={toutous} />

        {/* <FicheToutou toutou={toutous[0]} /> */}
      </div>
    )
  }
}

export default Toutous;