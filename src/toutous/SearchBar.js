import React from 'react'
import '../App.css'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange (e) {
    this.props.onFilterTextChange(e.target.value)
  }

  handleInStockChange (e) {
    this.props.onInStockChange(e.target.checked)
  }

  render () {
    return (
      <form>
        <input
          className='recherche'
          type='search'
          placeholder='Recherche'
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          onBlur={this.masquer}
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
    )
  }

  masquer (ev) {
    const recherche = ev.target
    recherche.style.display = 'none'
  }
}

export default SearchBar
