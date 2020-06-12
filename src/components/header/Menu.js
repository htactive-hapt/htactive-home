import React, { Component } from 'react';
import MenuItem from './MenuItem';
import logo_red from './logo_red.png';
import './menu.css'

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            menuArr: [{
                label: 'HOME',
                url: '/home'
            }, {
                label: 'SERVICES',
                url: '/services'
            }, {
                label: 'PORTFOLIOS',
                url: '/portfolios'
            }, {
                label: 'BLOGS',
                url: '/blogs'
            }, {
                label: 'CONTACT',
                url: '/contact'
            }]
        }
    }
    render() {
        return (
            <div className="header" id="myHeader">
                <div className="banner" id="banner">
                    <div><img src={logo_red} alt="not found" id="logo_red" classname="logo" /></div>
                    <div id="slogant"><i>Your Satisfaction Is Our Success</i> </div>
                </div>
                <div id="topnav">
                    {
                        this.state.menuArr.map((item) =>
                            <MenuItem item={item} />
                        )
                    } 
                </div>
            </div >
        )
    }
}