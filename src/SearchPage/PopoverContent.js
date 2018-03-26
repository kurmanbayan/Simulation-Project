import React, {Component} from 'react'
import PopoverContentDropdown from './PopoverContentDropdown'
import RightSearchBar from './RightSearchBar'

class PopoverContent extends Component {
  constructor() {
    super()
    this.state = {
      listOfDepartments: ['Discipline', 'Country', 'Eligblity', 'Extended Search'],
      statusList: [
        {
          header: "Opportunity Status",
          categories: ['Forecasted', 'Posted', 'Closed']
        },
        {
          header: "Funding instrument type",
          categories: ['Cooperative agreement', 'Grant', 'Other']
        }
      ]
    }
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="container">
              {
                this.state.listOfDepartments.map((data, index) => {
                  return <PopoverContentDropdown data={data} index={index} key={index} />
                })
              }
            </div>

          </div>
          <div className="col-md-3">
            <div className="ui vertical menu">
              {
                this.state.statusList.map((data, index) => {
                  return <RightSearchBar data={data} key={index} />
                })
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col" align="center">
            <button type="button" className="btn btn-primary btn-md"> Search </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PopoverContent
