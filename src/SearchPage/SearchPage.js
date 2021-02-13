import React, { Component } from 'react'

import '../App.css'
import pokemonArray from '../data'

import SideBar from '../SideBar/SideBar'
import PokeList from '../PokeList/PokeList'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        sortOrder: 'true',
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
        const stateSortBy = this.state.sortBy
        // is the data type that we're sorting by a string?
        isNaN(pokemonArray[0][stateSortBy]) ?
            (
            // is sortOrder true? 
            this.state.sortOrder === 'true' ?
                // if so, sort ascending with localCompare
                this.state.pokemon.sort((a, b) => a[stateSortBy].localeCompare(b[stateSortBy])) :
                    // if not, sort descending with localCompare
                    this.state.pokemon.sort((a, b) => b[stateSortBy].localeCompare(a[stateSortBy]))
            ) : 
            (
            // if we're sorting by a number, is sort order true?
            this.state.sortOrder === 'true' ?
                // if so, sort ascending
                this.state.pokemon.sort((a, b) => a[stateSortBy] - b[stateSortBy]) :
                    // if not, sort descending
                    this.state.pokemon.sort((a, b) => b[stateSortBy] - a[stateSortBy])
            )
                
        const filteredByName = this.state.pokemon.filter(pokemon => 
            pokemon.pokemon.includes(this.state.filter))
        
        return (
            <main className='SearchPage'>
                <SideBar filteredPokemon={filteredByName} state={this.state} handleSortBy={this.handleSortBy} handleSortOrder={this.handleSortOrder} handleFilter={this.handleFilter}/>
                <PokeList filteredPokemon={filteredByName} state={this.state}/>
            </main>
        )
    }
}
