import React, { Component } from 'react'
import Sleekbeer from '../images/Sleekbeer.jpg'
import { NavLink } from 'react-router-dom';



export default class Home extends Component {
    render() {
        return (
            <div className="homeParent">
               <div className="beerImage">
                    <img className='beer' src={Sleekbeer} alt='beer cup'></img>
               </div>

               <div className='mainDescription'>
                   <h3> Gone are the days of having to guess what is in the beer you are drinking,
                        not knowing whats in it, and if you are cooking for 2, what beers would go great
                        with dinner               
                   </h3>
                   <h3>
                       We created this website with that in mind. The objective is to help
                       beer lovers become even more enthused about BEER! 
                       Our search too is designed to help you easily find beers so you can either showoff
                       to your friends or show 
                   </h3>
                   <p>Are you ready to locate the perfect beer?</p>
                   <NavLink to="/beerlocator">Search Beers</NavLink>
               </div>
                
            </div>
        )
    }
}
