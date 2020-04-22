import React, { Component } from 'react'
import Beer from '../images/beers.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
               <div className="beerImage">
                    <img src={Beer} alt='beer cup'></img>
               </div>
                
            </div>
        )
    }
}
