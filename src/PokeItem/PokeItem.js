import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-item'>
                <div className='poke-name'>{this.props.name}</div>
                <div className='poke-stat'>{this.props.statLabel}{this.props.stat}</div>
                <img className='poke-image' alt={this.props.alt} src={this.props.src}></img>
            </div>
        )
    }
}
