import React from "react";
import ToutouRow from "./ToutouRow.js";
import "../App.css";
import fireb from '../fireb';

class ToutousTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const toutous = [];

    const keys = Object.keys(this.props.toutous)

    const toutousTries = keys.sort((a, b) => {
      a = this.props.toutous[a].nom
      b = this.props.toutous[b].nom
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
    toutousTries.forEach(toutouKey => {
      const toutou = this.props.toutous[toutouKey]
      if (filterText) {
        if (
          toutou.nom
            .toLocaleLowerCase()
            .indexOf(filterText.toLocaleLowerCase()) === -1
        ) {
          return;
        }
      }

      toutous.push(
        <span key={toutouKey} onClick={this._ficheToutou.bind(this, toutouKey, toutou, "name")}>
          <ToutouRow toutou={toutou} key={toutou.nom} />
        </span>
      );
    });

    if (filterText.length > 2) {
      const nouveau = {
        nom: filterText
      };
      toutous.push(
        <div
          key={nouveau.nom}
          className="toutou"
          onClick={this._nouveauToutou.bind(this, nouveau, "name")}
        >
          <div className="images">
            <span className="nouveau">+</span>
          </div>
          <div className="nom">Créer {nouveau.nom}</div>
        </div>
      );
    }

    return (
      <div>
        {toutous}
      </div>
    );
  }

  _nouveauToutou (toutouConfig) {
    const toutou = fireb.database().ref('toutous').push(toutouConfig);
    window.history.pushState({ key: toutou.key }, "", `/fiche/${toutouConfig.nom}`);
    this.props.selectToutou(toutou);
  }

  _ficheToutou = (toutouKey, toutou) => {
    window.history.pushState({key: toutouKey}, "", `/fiche/${toutou.nom}`);
    this.props.selectToutou(toutou);
  };
}

export default ToutousTable;
