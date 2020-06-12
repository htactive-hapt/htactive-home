import React, { Component } from 'react'
import './menu.css'

export default class MenuItem extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <a href={this.props.item.url}><b> {this.props.item.label }</b></a>
        )
    }
}