import React, { Component } from 'react'
import Beers from '../images/Beers.jpeg'
import Sleekbeer from '../images/Sleekbeer.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
               <div className="beerImage">
                    <img className='beer' src={Sleekbeer} alt='beer cup'></img>
               </div>
                
            </div>
        )
    }
}
