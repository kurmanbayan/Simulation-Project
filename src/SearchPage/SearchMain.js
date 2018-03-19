import React, {Component} from 'react'
import SearchBar from './SearchBar'
import SearchContent from './SearchContent'

class SearchMain extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <SearchBar />
        </div>
        <div className="row">
          <SearchContent />
        </div>
      </div>
    )
  }
}

export default SearchMain
