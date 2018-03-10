import React from 'react'
import SearchBar from './SearchBar.js'
import ToutousTable from './ToutousTable.js'
import '../App.css'

class FilterableToutousTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    }

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleInStockChange = this.handleInStockChange.bind(this)
  }

  handleFilterTextChange (filterText) {
    this.setState({
      filterText: filterText
    })
  }

  handleInStockChange (inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render () {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ToutousTable
          selectToutou={this.props.selectToutou}
          toutous={this.props.toutous}
          filterText={this.state.filterText} />
      </div>
    )
  }
}

export default FilterableToutousTable
