import React, {Component} from 'react'

class SearchContent extends Component {
  render() {
    return (
      <div className="list-group list-group-flush" style={{"marginTop": "30px"}}>
        {
          this.props.list[this.props.cur_page].map((data, index) => {
            return <div key={index} className="list-group-item">
              <div className="container" style={{"marginBottom": "20px", "marginTop": "20px"}}>
                <div className="row">
                  <div className="col-md-3">
                    <img src={data.img} alt="" className="img-fluid"/>
                  </div>
                  <div className="col-md-7">
                    <div className="container">
                      <div className="row">
                        {data.title}
                      </div>
                      <div className="row">
                        {data.description}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="row">
                      <button type="button" style={{"marginBottom": "5px"}} className="btn btn-primary btn-sm btn-block"> {data.status} </button>
                    </div>
                    <div className="row">
                      <button type="button" style={{"marginBottom": "5px"}} className="btn btn-primary btn-sm btn-block"> {data.country} </button>
                    </div>
                    <div className="row">
                      <button type="button" className="btn btn-primary btn-sm btn-block"> {data.deadline} </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })
        }
      </div>
    )
  }
}

export default SearchContent
