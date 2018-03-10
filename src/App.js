import React, { Component } from "react";
import Toutous from "./toutous/Toutous.js";
import FicheToutou from "./fiche/Toutou.js";
import "./App.css";
import fireb from './fireb';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toutou: null,
      creation: false,
      toutous: [],
    };

    window.onpopstate = ev => {
      this.setState({
        toutou: null
      })
    }

    window.App = this
  }

  componentWillMount () {
    this.chargerToutous()
  }

  chargerToutous () {
    const toutousRef = fireb.database().ref('toutous') //.orderByKey().limitToLast(100);
    toutousRef.on('value', snapshot => {
      this.setState({ toutous: snapshot.val() })
    })
  }

  selectToutou = (toutou) => {
    // FIXME mettre le state dans un js à part
    this.setState({ toutou });
  }

  render() {
    return (
      <div className="App">
        {this.state.toutou ? (
          <FicheToutou
            toutou={this.state.toutou}
            creation={this.state.creation}
            ajoutToutou={this.ajoutToutou}
          />
        ) : (
          <Toutous
            selectToutou={this.selectToutou}
            tout={this.toutou}
            toutous={this.state.toutous}
            />
        )}
      </div>
    )
  }
}

export default App
