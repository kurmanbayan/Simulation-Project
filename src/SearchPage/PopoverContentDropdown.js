import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react'

class PopoverContentDropdown extends Component {
  constructor() {
    super()
    this.state = {
      options: [
        [
          { key: 'ag&fr', value: 'ag&fr', text: 'Agriculture & Forestry' },
          { key: 'apsc&pr', value: 'apsc&pr', text: 'Applied Sciences & Professions' },
        ],
        [
          { key: 'kz', value: 'kz', flag: 'kz', text: 'Kazakhstan'},
          { key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
          { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
          { key: 'cn', value: 'cn', flag: 'cn', text: 'China' },
          { key: 'de', value: 'de', flag: 'de', text: 'Germany'},
          { key: 'it', value: 'it', flag: 'it', text: 'Italy'},
          { key: 'no', value: 'no', flag: 'no', text: 'Norway'},
          { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland'},
        ],
        [
          { key: 'citogo', value: 'citogo', text: 'City of township goverments'},
          { key: 'cogo', value: 'cogo', text: 'Country governments'},
        ],
        []
      ]
    }
  }

  render() {
    const renderLabel = label => ({
      color: 'blue',
      content: `${label.text}`,
    })

    return (
      <div className="row">
        <div className="col-md-2" style={{"marginBottom": "30px", fontSize: "18px"}}>
          <a href=""> {this.props.data} </a>
        </div>
        <div className="col-md-10">
          <Dropdown renderLabel={renderLabel} placeholder={this.props.data.toLowerCase()} multiple search selection options={this.state.options[this.props.index]} />
        </div>
      </div>
    )
  }
}

export default PopoverContentDropdown
