import React, { Component } from 'react'
import PokeItem from '../PokeItem/PokeItem'

export default class PokeList extends Component {
    render() {
        const renderedPokemon = this.props.filteredPokemon.map((pokemon) => {
            return <PokeItem
                key={pokemon.pokemon + pokemon._id}
                name={pokemon.pokemon.toUpperCase()}
                src={pokemon.url_image}
                alt={pokemon.pokedex}
                onClick={(e) => this.props.handleAddToPokeBall(e, pokemon)}
                class={pokemon.class ? 'poke-ball-item' : 'poke-item'}
                // if the selected 'sort by' is 'pokemon' then don't display it or the stat on the pokedex card
                statLabel={this.props.state.sortBy === 'pokemon' ?
                    '' :
                    this.props.state.sortBy === 'type' ?
                    '' : 
                    this.props.state.sortBy + ': '}
                stat={this.props.state.sortBy === 'pokemon' ?
                    '' :
                    this.props.state.sortBy === 'type' ?
                        pokemon.type_1 === 'N/A' || 'NA' ?
                            'Type: ' + pokemon.type_2 :
                            pokemon.type_1 === 'N/A' || 'NA' ?
                                'Type: ' + pokemon.type_1 :
                        'Type: ' + pokemon.type_1 + ', ' + pokemon.type_2 :
                        pokemon[this.props.state.sortBy]}
                
                statLabel2={this.props.state.radio === '' ?
                    '' :
                    this.props.state.radio === 'eggGroup' ?
                    '' : this.props.state.radio + ': '}
                stat2={this.props.state.radio === 'eggGroup' ?
                    pokemon.egg_group_1 === 'NA' ?
                    'Egg: ' + pokemon.egg_group_2 :
                        pokemon.egg_group_2 === 'NA' ?
                        'Egg: ' +  pokemon.egg_group_1 :
                        'Egg: ' +  pokemon.egg_group_1 + ', ' + pokemon.egg_group_2 : pokemon[this.props.state.radio]}
                />
        })
        return (
            <div className='results-div'>
                {renderedPokemon}
            </div>
        )
    }
}
