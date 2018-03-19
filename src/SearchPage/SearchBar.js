import React, {Component} from 'react'
import CategoryList from './CategoryList'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      categories: ["Grants", "Conference", "Internship", "Competition", "Scholarship"]
    }
  }

  render() {
    return (
      <div className="container">
        <CategoryList
          categories={this.state.categories}
        />
      </div>
    )
  }
}

export default SearchBar
