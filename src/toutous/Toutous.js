import React, { Component } from 'react';
import logo from '../logo.svg';
import { toutous } from '../data.js';
import ToutouImage from '../ToutouImage.js';
import '../App.css';

class ToutouRow extends React.Component {
  render() {
    const toutou = this.props.toutou;
    // const nom = toutou.stocked ?
    //   toutou.nom :
    //   <span style={{color: 'red'}}>
    //     {toutou.nom}
    //   </span>;
    const nom = toutou.nom
    

    {/* const image = toutou.photo ? 
      (
      <img src={toutou.photo}> 
      )
      : '' */}

    return (
      <tr>
        <td>{nom}</td>
        <td><ToutouImage toutou={toutou} /></td>
      </tr>
    );
  }
}

class ToutousTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    
    this.props.toutous.forEach((toutou) => {
      console.log(toutou.nom, filterText)
      if (filterText) {
        if (toutou.nom.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
          return;
        }

      }

      // if (toutou.category !== lastCategory) {
        // rows.push(
        //   <ProductCategoryRow
        //     nom={toutou.nom}
        //     key={toutou.category} />
        // );
      // }
      rows.push(
        <ToutouRow
          toutou={toutou}
          key={toutou.nom} />
      );
      // lastCategory = toutou.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class ToutousCarousel extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const images = [];
    let lastCategory = null;
    
    this.props.toutous.forEach((toutou) => {
      console.log(toutou.nom, filterText)
      if (filterText) {
        if (toutou.nom.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) === -1) {
          return;
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
      );
      // lastCategory = toutou.category;
    });

    return (
      <div class="carousel">
        {images}
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        {/* <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p> */}
      </form>
    );
  }
}

class FilterableToutousTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar 
        filterText={this.state.filterText}
        onFilterTextChange={this.handleFilterTextChange}
        />
        <ToutousTable 
        toutous={this.props.toutous} 
        filterText={this.state.filterText}/>
      </div>
    );
  }
}

class Toutous extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Foule toutous</h1>
          <button>Ajouter un toutou</button>
        </header>
        {/* <p className="App-intro"></p> */}

        {/* <ToutousCarousel toutous={toutous} /> */}

        <FilterableToutousTable toutous={toutous} />

        {/* <FicheToutou toutou={toutous[0]} /> */}
      </div>
    )
  }
}

export default Toutous;