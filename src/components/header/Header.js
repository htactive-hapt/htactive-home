import React, { Component } from 'react'
import './header.css'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="hd">
                <div className="header-top">
                    <div className="top">
                        <ul className="header-social" style={{ marginTop: '-7px' }}>
                            {/* <Link to="/">Redux example</Link> */}
                            <li>
                                <a target="_blank" href="facebook.com"><i className="fa fa-twitter" /></a>
                            </li>
                            <li className="skype"><a target="_blank" href="skype.com"><i className="fa fa-skype" /></a></li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/in/hoang-pham-6236b8b7"><i className="fa fa-linkedin" /></a>
                            </li>
                            <li className="googleplus">
                                <a target="_blank" href="https://plus.google.com/u/0/117715430853979848085"><i className="fa fa-google-plus" /></a>
                            </li>
                            <li className="youtube">
                                <a target="_blank" href="http://www.youtube.com">
                                    <i className="fa fa-youtube-play" />
                                </a>
                            </li>
                            <li className="flickr"><a target="_blank" href="https://www.flickr.com/photos/124606867@N06/"><i className="fa fa-flickr" /></a></li>
                            <li className="facebook">
                                <a target="_blank" href="https://www.facebook.com/htactive"><i className="fa fa-facebook" /></a>
                            </li>
                            <li className="pinterest">
                                <a target="_blank" href="https://www.pinterest.com/vhhoang/">
                                    <i className="fa fa-pinterest" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button className="dropbtn"><i className="fa fa-globe" aria-hidden="true" /> English
                            <i className="fa fa-caret-down" />
                            </button>
                            <div className="dropdown-content">
                                <a href="#">English </a>
                                <a href="#">Vietnamese </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
