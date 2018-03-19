import React, {Component} from 'react'
import CategoryDropdown from './CategoryDropdown'

class CategoryList extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.categories.map((data, index) => {
            return <CategoryDropdown key={index} name={data} />
          })
        }
      </div>
    )
  }
}

export default CategoryList
