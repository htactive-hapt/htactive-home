import React, { Component } from 'react'
import './commitment.css'
export default class Commitment extends Component {
    render() {
        return (
            <div className="commitment">
                <p className="strive">We strive to offer the best solution for your business.</p>
                <button className="read-more">READ MORE  <i className="fa fa-info-circle"/></button>
                <button className="contact">CONTACT  <i className="fa fa-phone"/></button>
            </div>
        )
    }
}
