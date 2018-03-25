import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SearchMain from './SearchPage/SearchMain'

function About() {
  return <h2> Hello world </h2>
}

class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Logo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/"> Home </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/about"> About </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <Route exact path="/" component={SearchMain} />
            <Route path="/about" component={About} />
          </div>
        </Router>
    );
  }
}

export default App;
