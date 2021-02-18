import React, { Component } from 'react'
import request from 'superagent';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import '../App.css'

export default class DetailPage extends Component {
    state = {
        pokemon: {},
        loading: false
    }

    componentDidMount = async () => {
        this.setState({ loading: true });

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.name}`);

        const pokemon = data.body.results.find(item => item.pokemon === this.props.match.params.name);

        this.setState({
            loading: false,
            pokemon: pokemon
        });
    }

    
    render() {
        const { pokemon } = this.state
        const statLabels = [
            'Abilities',
            'Egg Group(s)',
            'Base Experience',
            'Defense',
            'Attack',
            'Height',
            'Weight',
            'HP',
            'ID',
            'Speed',
            'Shape',
        ]
        const pokeStats = [
            `${pokemon.ability_1}, ${pokemon.ability_2},
            ${pokemon.ability_hidden} (hidden)`, `${pokemon.egg_group_1} & ${pokemon.egg_group_2}`,
            `${pokemon.base_experience}`,
            `${pokemon.defense}`,
            `${pokemon.attack}`,
            `${pokemon.height}`,
            `${pokemon.weight}`,
            `${pokemon.hp}`,
            `${pokemon.id}`,
            `${pokemon.speed}`,
            `${pokemon.shape}`
        ]
        const mappedStats = statLabels.map((label, i) => {
            return  <div key={label + pokeStats[i]} className='detail-stat'>
                {label}: {pokeStats[i]}
                </div>
        })
        return (
            <div className='DetailPage'>
                {!this.state.loading ? 
            <div className='detail-div'>
                <div className='detail-name'>
                {pokemon.pokemon}</div>
                <div key={ pokemon.pokemon } className='detail-item'>
                    <div className='detail-container'>
                    {mappedStats}
                    </div>    
                <img className={'poke-image'}
                    alt={pokemon.pokemon}
                    src={pokemon.url_image}>
                </img>
                </div>
                </div> :
                <LoadingSpinner />}
        </div>
        )
    }
}
