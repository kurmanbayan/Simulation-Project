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
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Logo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item active">
                      <Link class="nav-link" to="/"> Home </Link>
                    </li>
                    <li class="nav-item active">
                      <Link class="nav-link" to="/about"> About </Link>
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
