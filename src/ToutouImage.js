import React from 'react'
import toutouPng from './images/toutou.png'
import './App.css'

class ToutouImage extends React.Component {
  render () {
    const toutou = this.props.toutou

    let image = (toutou.imageSrc) ? toutou.imageSrc : toutouPng

    return (
      <div className='images'>
        <img src={image} alt={toutou.nom} />
        {/* a{toutou.nom} */}
      </div>
    )
  }
}

export default ToutouImage
