import React, {Component} from 'react'

class Pagination extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: [],
    }
  }

  componentWillMount() {
    let pages = []
    for (let ind = 0; ind < this.props.len; ind++) {
      pages.push(ind + 1);
    }
    this.setState({
        pages: pages
    })
  }

  render() {
    return (
      <div className="ui pagination menu">
        {
          this.state.pages.map((data, index) => {
            let className = "item" + (index === this.props.cur_page ? " active" : "")
            return <a onClick={() => this.props.onPageChange(index)} key={index} className={className}>
                {data}
            </a>
          })
        }
      </div>
    )
  }
}

export default Pagination
