import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import BeerLocator from './components/BeerLocator'
import Home from './components/Home'
import HowTo from './components/HowTo'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
  <div className='siteContainer'>
    <Router>
        <div>
          <Header />
          <nav>
            <ul>
              <li>
                <Link className="nav" to ="/home"> Home</Link>
              </li>
              <li>
                <Link className="nav" to ="/BeerLocator">Beer Finder</Link>
              </li>
              <li>
                 <Link className="nav" to ="/HowTo">How To</Link>
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
     <Footer />
    
     
  </div>
   
  )
}

export default App;
