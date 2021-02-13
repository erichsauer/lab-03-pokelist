import React, { Component } from 'react'
import PokeItem from '../PokeItem/PokeItem'

export default class PokeList extends Component {
    render() {
        const renderedPokemon = this.props.filteredPokemon.map((pokemon) => {
            return <PokeItem
                key={pokemon.pokemon + pokemon.id}
                name={pokemon.pokemon.toUpperCase()}
                src={pokemon.url_image}
                alt={pokemon.pokedex}
                // if the selected 'sort by' is 'pokemon' then don't display it or the stat on the pokedex card
                statLabel={this.props.state.sortBy === 'pokemon' ? '' :
                    // also replace the _ for good measure
                    this.props.state.sortBy.replace('_', ' ') + ': '}
                stat={this.props.state.sortBy === 'pokemon' ? '' : pokemon[this.props.state.sortBy]}
                />
        })
        return (
            <div className='results-div'>
                {renderedPokemon}
            </div>
        )
    }
}
