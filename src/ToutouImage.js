import React from 'react';
import toutouPng from './images/toutou.png';
import './App.css';

class ToutouImage extends React.Component {
  render() {
    const toutou = this.props.toutou
    
    let image = (toutou.photo) ? toutou.photo : toutouPng

    return (
      <div className="images">
        <img src={image} alt={toutou.nom} style={{width: '100px'}}/> 
        {/* a{toutou.nom} */}
      </div>
    )
  }
}

export default ToutouImage;