import React from 'react';
// import logo from '../logo.svg';
// import { toutous } from '../data.js';
// import ToutouImage from '../ToutouImage.js';
import '../App.css';

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
          className="recherche"
          type="search"
          placeholder="Recherche"
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

export default SearchBar;