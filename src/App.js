import React, { Component } from "react";
import Toutous from "./toutous/Toutous.js";
import FicheToutou from "./fiche/Toutou.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toutou: null,
      creation: false
    };

    window.onpopstate = ev => {
      // location.pathname
      this.setState({ toutou: null });
    };
  }

  selectToutou = (toutou, creation = false) => {
    this.setState({ toutou, creation });
  };

  render() {
    return (
      <div className="App">
        {this.state.toutou ? (
          <FicheToutou
            toutou={this.state.toutou}
            creation={this.state.creation}
          />
        ) : (
          <Toutous selectToutou={this.selectToutou} tout={this.toutou} />
        )}
      </div>
    );
  }
}

export default App;
