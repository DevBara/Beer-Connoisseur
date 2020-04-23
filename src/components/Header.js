import React, { Component } from 'react'
import BeerLogo from '../images/BEER_2-512.png'

export default class Header extends Component {
    render() {
        return (
            <div className="titleParent">
               <img className="logo" src={BeerLogo} alt="beer logo" />
                <h1 className="title">Beer Connoisseur</h1>
                <p className="subtitle">Get info about your favorite beer and even food pairings</p>
            </div>
        )
    }
}
