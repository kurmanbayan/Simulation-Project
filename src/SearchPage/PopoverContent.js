import React, {Component} from 'react'


class PopoverContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">

            <div className="container">
              <div className="row">
                <div className="col-md-9">
                  Discipline
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  Country
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  Eligblity
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  Extended search
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-3">
            <div className="row">
              Opportunity Status:
            </div>
            <div className="row">
              <input type="checkbox"/>  I have a bike<br/>
            </div>
          </div>
        </div>
        <div className="row">
          <button type="button" className="btn btn-primary btn-md"> Search </button>
        </div>
      </div>
    )
  }
}

export default PopoverContent
