import React, { Component } from 'react'
import {BrowserRouter, Route, Switch, Link, Router} from 'react-router-dom'
import Home from './Home'
import BeerLocator from './BeerLocator'
import HowTo from './HowTo'

export default class NavBar extends Component {
    render() {
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








           





              </div>   
           </Router>
        )
    }
}
