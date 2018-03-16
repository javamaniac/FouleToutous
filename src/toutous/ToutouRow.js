import React from 'react'
import ToutouImage from '../ToutouImage.js'
import '../App.css'

class ToutouRow extends React.Component {
  render () {
    const toutou = this.props.toutou
    const nom = toutou.nom
    return (
      <div className='toutou'>
        <ToutouImage toutou={toutou} image={toutou.imageSrcSmall} />
        <div className='nom'>{nom}</div>
      </div>
    )
  }
}

export default ToutouRow
