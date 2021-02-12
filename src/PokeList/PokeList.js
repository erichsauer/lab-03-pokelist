import React, { Component } from 'react'
import PokeItem from '../PokeItem/PokeItem'

export default class PokeList extends Component {
    render() {
        const renderedPokemon = this.props.filteredPokemon.map((pokemon) => {
            return <PokeItem key={pokemon.pokemon + pokemon.id} name={pokemon.pokemon} src={pokemon.url_image} alt={pokemon.pokedex}/>
        })
        return (
            <div className='results-div'>
                {renderedPokemon}
            </div>
        )
    }
}
