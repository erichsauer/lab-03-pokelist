import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='poke-item'>
                {this.props.name}
                <img className='poke-image' alt={this.props.alt} src={this.props.src}></img>
            </div>
        )
    }
}
