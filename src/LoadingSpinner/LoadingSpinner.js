import React, { Component } from 'react'

export default class LoadingSpinner extends Component {
    render() {
        return (
            <div className='spinner-container'>
                <img alt='pokeball'
                    className='loading-spinner'
                    src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795ipeio.png&f=1&nofb=1'></img>
            </div>
        )
    }
}
