import React, { Component } from 'react'
import BeerLogo from '../images/BEER_2-512.png'

export default class Header extends Component {
    render() {
        return (
            <table className="titleParent">
                <tbody>
                    <tr>
                        <td>
                            <img className="logo" src={BeerLogo} alt="beer logo" />
                        </td>
                        <td>
                            <h1 className="title">Beer Connoisseur</h1>
                            <p className="subtitle">Get info about your favorite beer and even food pairings</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
