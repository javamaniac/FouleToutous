import React from 'react'
import toutouPng from './images/toutou.png'
import './App.css'

class ToutouImage extends React.Component {
  render () {
    const toutou = this.props.toutou
    const imageSrc = (this.props.image) || toutouPng

    return (
      <div>
        <div className='images'>
          <img src={imageSrc} alt={toutou.nom} />
          {/* a{toutou.nom} */}
        </div>
      </div>
    )
  }
}

export default ToutouImage
