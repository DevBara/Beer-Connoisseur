import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BeerLocator from './components/BeerLocator'
import Home from './components/Home'
import NavBar from './components/NavBar'
import HowTo from './components/HowTo'

function App() {
  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to ="/"> Home</Link>
              </li>
              <li>
                <Link to ="/BeerLocator">Beer Finder</Link>
              </li>
              <li>
                 <Link to ="/HowTo">How To</Link>
                </li>
              </ul>
                </nav>
                <Switch>
                    <Route path="/Home" component={Home} />
                    <Route path="/beerlocator" component={BeerLocator} />
                    <Route path="/howto" component={HowTo} />
                </Switch>
        </div>   
     </Router>
   
  )
}

export default App;
