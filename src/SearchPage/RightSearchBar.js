import React, {Component} from 'react'

class RightSearchBar extends Component {
  render() {
    return (
      <div className="item">
        <h4 className="ui header"> {this.props.data.header} </h4>
        {
          this.props.data.categories.map((data, index) => {
            return <div>
              <input key={index} type="checkbox" style={{"marginRight": "10px", "marginBottom": "5px"}}/> {data} <br />
            </div>
          })
        }
      </div>
    )
  }
}

export default RightSearchBar
