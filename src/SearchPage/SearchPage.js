import React, { Component } from 'react'

import '../App.css'
import pokemonArray from '../data'

import SideBar from '../SideBar/SideBar'
import PokeList from '../PokeList/PokeList'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        sortOrder: true,
        filter: ''
    }

    componentDidMount = () => {
        this.setState({ pokemon: pokemonArray })
    }

    handleSortBy = (e) => {
        this.setState({ sortBy: e.target.value })
    }
    
    handleSortOrder = (e) => {
        this.setState({ sortOrder: e.target.value })
    }
    
    handleFilter = (e) => {
        this.setState({ filter: e.target.value })
    }
            
    render() {
        // (isNaN(this.state.sortBy) && this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])))

        // (isNaN(this.state.sortBy) && this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]))

        const filteredByName = this.state.pokemon.filter(pokemon => 
            pokemon.pokemon.includes(this.state.filter))
        
        return (
            <main className='SearchPage'>
                <SideBar filteredPokemon={filteredByName} state={this.state} handleSortBy={this.handleSortBy} handleSortOrder={this.handleSortOrder} handleFilter={this.handleFilter}/>
                <PokeList filteredPokemon={filteredByName}/>
            </main>
        )
    }
}
