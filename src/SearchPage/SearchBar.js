import React, {Component} from 'react'
import { Tab } from 'semantic-ui-react'
import PopoverContent from './PopoverContent'

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      categories: ["Grants", "Conferences", "Internships", "Competitions", "Scholarships"],
      panes: []
    }
  }

  componentDidMount() {
    let panes = []
    let array = this.state.categories
    for (let i = 0; i < array.length; i++) {
      panes.push({menuItem: array[i], render: () => <Tab.Pane style={{"fontSize": "14px"}} attached={false}> <PopoverContent /> </Tab.Pane> })
    }
    this.setState({
      panes: panes
    })
  }

  render() {
    return (
      <div>
        <Tab menu={{ pointing: true}} panes={this.state.panes} />
      </div>
    )
  }
}

export default SearchBar
