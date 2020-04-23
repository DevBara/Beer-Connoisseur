import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footerParent">
                <div className="footer-child">
                    <div className='footer-titles-parent'>
                        <h3 className="footer-titles">Want news of all Things beer?</h3>
                        <p className="footer-titles">Sign up for our weekly newsletter</p>
                    </div>
                    <div className="footer-newsletter-elements">
                        <input className="footer-input" type="text" placeholder="email"></input>
                        <button className="footer-button" type="submit">Submit</button>
                    </div>
                </div>
                
            </div>
        )
    }
}
