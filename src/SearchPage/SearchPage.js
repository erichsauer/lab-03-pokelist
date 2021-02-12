import React, { Component } from 'react'

import '../App.css'
import pokemonArray from '../data'

import SideBar from '../SideBar/SideBar'
import PokeList from '../PokeList/PokeList'

export default class SearchPage extends Component {
    state = {
        pokemon: [],
        filterBy: '',
        sortAscending: true
    }
    render() {
        return (
            <main className='SearchPage'>
                <SideBar />
                <PokeList filteredPokemon={pokemonArray}/>
            </main>
        )
    }
}
