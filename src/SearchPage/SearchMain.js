import React, {Component} from 'react'
import SearchBar from './SearchBar'
import SearchContent from './SearchContent'
import Pagination from './Pagination'


class SearchMain extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {
          img: "https://www.higheredjobs.com/images/AccountImages/565_2.jpg",
          title: "Harvard University",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.higheredjobs.com/images/AccountImages/565_2.jpg",
          title: "Harvard University",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
        {
          img: "https://www.androidcentral.com/sites/androidcentral.com/files/postimages/9274/mit.jpg",
          title: "Massachusetts Institute of Technology",
          description: "Opportunity Content",
          status: "Active",
          organization: "Some organization",
          country: "USA",
          deadline: "21 January",
        },
      ],
      cur_page: 0,
      resultsList: [],
    }
  }

  handlePageChange = (page) => {
    this.setState({
      cur_page: page,
    })
  }

  componentWillMount() {
    let col = []
    let list = this.state.list
    let to = parseInt(list.length % 5 === 0 ? list.length / 5 : list.length / 5 + 1, 10)
    for (let i = 0; i < to; i++) {
      let row = []
      for (let j = 5 * i; j < (5 * i + 5 <= list.length ? 5 * i + 5 : list.length); j++) {
        row.push(list[j])
      }
      col.push(row)
    }
    this.setState({
      resultsList: col
    })
  }

  render() {
    return (
      <div className="container">
        <div style={{"marginTop": "20px"}}>
          <SearchBar />
        </div>
        <div className="row">
          <div className="col" align="center" style={{"marginTop": "10px", "fontSize": "17px"}}>
            {this.state.list.length} news found
          </div>
        </div>
        <div className="row">
          <SearchContent cur_page={this.state.cur_page} list={this.state.resultsList}/>
        </div>
        <div className="row">
          <div className="col-md-12" align="center" style={{"margin": "20px"}}>
            <Pagination cur_page={this.state.cur_page} len={this.state.resultsList.length} onPageChange={this.handlePageChange}/>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchMain
