import React, { Component } from 'react'
import request from 'superagent';

import '../App.css'

import SideBar from '../SideBar/SideBar'
import PokeList from '../PokeList/PokeList'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        pokeBall: [],
        sortBy: 'pokemon',
        sortOrder: 'asc',
        filter: '',
        filter2: 'NA',
        loading: false,
        radio: '',
        pokeBallView: false,
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
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&${this.state.radio}=${this.state.filter2}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`);
    
    // set state.loading to false for loading spinner display end
    this.setState({ 
      loading: false,
      pokemon: data.body.results
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

    handleFilter2 = (e) => {
        this.setState({ filter2: e.target.value })
    }

    handleRadio = (e) => {
        this.setState({ radio: e.target.value })
    }

    handleAddToPokeBall = (e, pokemon, className) => {
        const pokeBall = this.state.pokeBall;
        pokemon.class = true
        pokeBall.push(pokemon);
        this.setState({ pokeBall: pokeBall })
    }

    handlePokeBallDisplay = async (e) => {
        e.preventDefault();
        !this.state.pokeBallView ? 
        this.setState({ pokeBallView: true }) :
        this.setState({ pokeBallView: false })
    }

    handleClick = async (e) => {
        // always this if it's in a form!
        e.preventDefault();
        await this.loadPokemon();
    }

    render() {
        console.log(this.state);
        return (
            <main className='SearchPage'>
                <SideBar
                    filteredPokemon={this.state.pokemon}
                    state={this.state}
                    handleSortBy={this.handleSortBy}
                    handleSortOrder={this.handleSortOrder}
                    handleFilter={this.handleFilter}
                    handleFilter2={this.handleFilter2}
                    handleClick={this.handleClick}
                    handleRadio={this.handleRadio}
                    handlePokeBallDisplay={this.handlePokeBallDisplay}
                />
                {!this.state.pokeBallView ?
                    this.state.loading ?
                        <LoadingSpinner /> :
                        <PokeList
                            filteredPokemon={this.state.pokemon}
                            state={this.state}
                            handleAddToPokeBall={this.handleAddToPokeBall}
                        /> :
                    <PokeList
                        filteredPokemon={this.state.pokeBall}
                        state={this.state}
                        handleAddToPokeBall={this.handleAddToPokeBall}
                    />}
            </main>
        )
    }
}
