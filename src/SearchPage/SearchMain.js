import React, {Component} from 'react'
import SearchBar from './SearchBar'
import SearchContent from './SearchContent'


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

      ]
    }
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
          <SearchContent list={this.state.list}/>
        </div>
      </div>
    )
  }
}

export default SearchMain
