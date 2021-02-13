import React, { Component } from 'react'
import request from 'superagent';

import '../App.css'
import pokemonArray from '../data'

import SideBar from '../SideBar/SideBar'
import PokeList from '../PokeList/PokeList'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        sortOrder: 'true',
        filter: '',
        loading: false
    }
    // everything containing an await must be declared async
    componentDidMount = async () => {
        await this.loadPokemon();
    }
    
    // everything containing an await must be declared async
    loadPokemon = async () => {  
    // set state.loading to true for loading spinner display
    this.setState({ 
        loading: true,
    });
    // sends request to pokemon api and awaits pokemon list load!
    // (superagent must be installed)
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    
    // set state.loading to false for loading spinner display end
    this.setState({ 
      loading: false,
      pokemon: data.body
     });
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
            // compares user input (converted to lowercase) to pokemon (which is in all lowrcase in the data structure)
            pokemon.pokemon.includes(this.state.filter.toLocaleLowerCase()))
        
        return (
            <main className='SearchPage'>
                <SideBar filteredPokemon={filteredByName} state={this.state} handleSortBy={this.handleSortBy} handleSortOrder={this.handleSortOrder} handleFilter={this.handleFilter}/>
                <PokeList filteredPokemon={filteredByName} state={this.state}/>
            </main>
        )
    }
}
