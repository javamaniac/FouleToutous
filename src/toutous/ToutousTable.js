import React from "react";
import ToutouRow from "./ToutouRow.js";
import "../App.css";

class ToutousTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const toutous = [];

    this.props.toutous.forEach(toutou => {
      console.log(toutou.nom, filterText);
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
        <span onClick={this._ficheToutou.bind(this, toutou, "name")}>
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

  _nouveauToutou(toutou) {
    window.history.pushState({}, "", `/creation/${toutou.nom}`);
    this.props.selectToutou(toutou, true);
  }

  _ficheToutou = toutou => {
    window.history.pushState({}, "", `/fiche/${toutou.nom}`);
    this.props.selectToutou(toutou, false);
  };
}

export default ToutousTable;
