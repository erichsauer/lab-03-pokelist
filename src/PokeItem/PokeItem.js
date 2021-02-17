import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className={this.props.class}
                onClick={this.props.onClick}
            >
                <div className='poke-name'>
                    {this.props.name}</div>
                <div className='poke-stat'>
                    {this.props.statLabel}{this.props.stat}
                </div>
                <div className='poke-stat'>
                    {this.props.statLabel2}{this.props.stat2}
                </div>
                <img className={'poke-image'}
                    alt={this.props.alt}
                    src={this.props.src}>
                </img>
            </div>
        )
    }
}
