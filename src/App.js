import React, { Component } from "react";
import Toutous from "./toutous/Toutous.js";
import FicheToutou from "./fiche/Toutou.js";
import "./App.css";
import fireb from "./fireb";
import { transform } from './Transformation'

class App extends Component {
  constructor(props) {
    super(props);

    this.onValueChanged = this.onValueChanged.bind(this);
    this.chargerImages = this.chargerImages.bind(this);


    this.state = {
      toutou: null,
      toutouKey: null,
      creation: false,
      toutous: [],
      toutousImages: []
    };

    window.onpopstate = ev => {
      this.setState({
        toutou: null
      })
    };

    window.App = this;
  }

  componentWillMount() {
    this.chargerToutous();
    // transform();
  }

  chargerToutous() {
    const toutousRef = fireb.database().ref("toutous"); //.orderBy('nom') //.limitToLast(100);
    const state = this.state;
    toutousRef.once('value').then(this.onValueChanged);
    setTimeout(() => {
      const imagesRef = fireb.database().ref("toutousImages"); //.orderBy('nom') //.limitToLast(100);
      const state = this.state;
      imagesRef.once('value').then(this.chargerImages);
    }, 2000)
  }

  onValueChanged(snapshot) {
    if (this.state.toutous.length === 0) {
      window.dispatchEvent(new CustomEvent("chargement", { detail: true }));
      this.setState({ toutous: snapshot.val() });
      window.dispatchEvent(new CustomEvent("chargement", { detail: false }));
    }
  }

  chargerImages (snapshot) {
    this.setState({ toutousImages: snapshot.val() });
    console.log('images chargées!')
  }

  selectToutou = (toutou, toutouKey) => {
    // FIXME mettre le state dans un js à part
    this.setState({ toutou, toutouKey });
  };

  next = () => {
    // FIXME next
    this.setState({ toutou, toutouKey });
  };

  render() {
    return (
      <div className="App">
        {
          this.state.toutou ? (
          <FicheToutou
            toutou={this.state.toutou}
            toutouImage={this.state.toutousImages[this.state.toutouKey].imageSrc}
            creation={this.state.creation}
            ajoutToutou={this.ajoutToutou}
            next={this.next}
          />
        ) : (
          <Toutous
            selectToutou={this.selectToutou}
            tout={this.toutou}
            toutous={this.state.toutous}
          />
        )}
      </div>
    );
  }
}

export default App;
