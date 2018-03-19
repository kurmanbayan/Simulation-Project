import React, {Component} from 'react'

class CategoryDropdown extends Component {
  render() {
    return (
      <div className="col">
        <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {this.props.name}
            <span class="sr-only"> asd </span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item">Action</a>
            <a class="dropdown-item">Another action</a>
            <a class="dropdown-item">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item">Separated link</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryDropdown
