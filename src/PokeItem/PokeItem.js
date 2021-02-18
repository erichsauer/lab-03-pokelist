import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return (
            <>
                {!this.props.details ? 
                <div className={this.props.class}
                        onClick={this.props.handleDetails}>
                    <div className='text-container'>
                        <div className='poke-name'>
                            {this.props.name}</div>
                        <div className='poke-stat'>
                            {this.props.statLabel}{this.props.stat}
                        </div>
                        <div className='poke-stat'>
                            {this.props.statLabel2}{this.props.stat2}
                        </div>
                    </div>    
                    <img className={'poke-image'}
                        alt={this.props.alt}
                        src={this.props.src}>
                    </img>
                </div> : 
                    <div className={this.props.class}>
                        <div className='exit'
                            onClick={this.props.handleDetails}>ⓧ</div>
                    <div className='text-container'>
                        <div className='poke-name'>
                            {this.props.name}
                        </div>
                        <Link to={`/pokemon/${this.props.link}`}>
                            <div className='details-link'>
                                View Full Stats
                            </div>
                        </Link>
                    <div
                        className='add-link'
                        onClick={this.props.handlePokeBall}>
                        {!this.props.inBall ? 'Add To Pokeball!' : 'Remove From Pokeball'}
                            </div>
                            </div>
                    <img className={'poke-image'}
                        alt={this.props.alt}
                        src={this.props.src}
                        onClick={this.props.handlePokeBall}>
                            
                    </img>
                </div>}
            </>
        )
    }
}
