import React, { Component } from 'react'
import logo from '../logo.svg'
// import { toutous } from '../data.js'
import ToutouImage from '../ToutouImage.js'
import '../App.css'

class ToutousCarousel extends React.Component {
  render () {
    const filterText = this.props.filterText
    const images = []

    this.props.toutous.forEach((toutou) => {
      console.log(toutou.nom, filterText)
      if (filterText) {
        if (toutou.nom.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
          return
        }
      }

      // if (toutou.category !== lastCategory) {
      // rows.push(
      //   <ProductCategoryRow
      //     nom={toutou.nom}
      //     key={toutou.category} />
      // );
      // }
      images.push(
        <ToutouImage toutou={toutou} />
      )
      // lastCategory = toutou.category;
    })

    return (
      <div class='carousel'>
        {images}
      </div>
    )
  }
}

export default ToutousCarousel
