import React, { Component } from 'react';
import Toutous from './toutous/Toutous.js';
import FicheToutou from './fiche/Toutou.js';

import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        {
          (this.props.selection) ?
            <FicheToutou /> :
            <Toutous />
        }
      </div>
    );
  }
}

export default App;
