import React, { Component } from 'react'
import request from 'superagent';

import '../App.css'

import SideBar from '../SideBar/SideBar'
import PokeList from '../PokeList/PokeList'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        totalPokemon: 0,
        pokeBall: [],
        pokeDetails: [],
        sortBy: 'pokemon',
        sortOrder: '',
        filter: '',
        filter2: 'NA',
        loading: false,
        radio: '',
        pokeBallView: false,
        currentPage: 1,
        perPage: 20,
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
    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&${this.state.radio}=${this.state.filter2}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);
    
    // set state.loading to false for loading spinner display end
    this.setState({ 
        loading: false,
        pokemon: data.body.results,
        totalPokemon: data.body.count
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

    handleDetails = (e, pokemon) => {
        const pokeDetails = this.state.pokeDetails;
        pokemon.details = true
        pokeDetails.push(pokemon);
        this.setState({ pokeDetails: pokeDetails })
    }
    
    handleExit = async (e, pokemon) => {
        const pokeDetails = this.state.pokeDetails;
        pokemon.details = false
        pokeDetails.push(pokemon);
        await this.setState({ pokeDetails: pokeDetails })
    }

    handleAddToPokeBall = (e, pokemon) => {
        const pokeBall = this.state.pokeBall;
        pokemon.inBall = true
        pokeBall.push(pokemon);
        this.setState({ pokeBall: pokeBall })
    }

    handleRemoveFromPokeBall = (e, pokemon) => {
        const pokeBall = this.state.pokeBall;
        const pokeBallFiltered = pokeBall.filter(item => { return item._id !== pokemon._id})
        pokemon.inBall = false;
        this.setState({ pokeBall: pokeBallFiltered })
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
        await this.setState({ currentPage: 1 })
        await this.loadPokemon();
    }

    handleNext = async (e) => {
        e.preventDefault();
        await this.setState({ currentPage: this.state.currentPage + 1 });
        await this.loadPokemon();
    }

    handlePrev = async (e) => {
        e.preventDefault();
        await this.setState({ currentPage: this.state.currentPage - 1 });
        await this.loadPokemon();
    }

    handlePerPage = async (e) => {
        this.setState({ perPage: e.target.value })
        await this.loadPokemon();

    }

    render() {
        const pokemonArray = this.state.pokeBall
        this.state.pokeBallView && 
            (isNaN(pokemonArray[0][this.state.sortBy]) ?
                (
                    // is sortOrder true? 
                    this.state.sortOrder === 'true' ?
                        // if so, sort ascending with localCompare
                        this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy])) :
                        // if not, sort descending with localCompare
                        this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
                ) :
                (
                    // if we're sorting by a number, is sort order true?
                    this.state.sortOrder === 'true' ?
                        // if so, sort ascending
                        this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]) :
                        // if not, sort descending
                        this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy])
                )) 

        const filteredInHouse = this.state.pokeBall.filter(pokemon => 
            // compares user input (converted to lowercase) to pokemon (which is in all lowrcase in the data structure)
            pokemon.pokemon.includes(this.state.filter.toLowerCase()))

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
                    handleNext={this.handleNext}
                    handlePrev={this.handlePrev}
                    handlePerPage={this.handlePerPage}
                />
            {!this.state.pokeBallView ?
                this.state.loading ?
                    <LoadingSpinner /> :
                    // server-side render
                    <PokeList
                        pokemon={this.state.pokemon}
                        state={this.state}
                        handleAdd={this.handleAddToPokeBall}
                        handleRemove={this.handleRemoveFromPokeBall}
                        handleExit={this.handleExit}
                        handleDetails={this.handleDetails}
                        /> :
                        // client-side render
                        <PokeList
                        pokemon={filteredInHouse}
                        state={this.state}
                        handleRemove={this.handleRemoveFromPokeBall}
                        handleDetails={this.handleDetails}
                        />
                }
            </main>
        )
    }
}
