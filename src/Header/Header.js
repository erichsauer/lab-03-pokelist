import React, { Component } from 'react'
import '../App.css'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <div className='Header'>
                Pokédex Lyfe
                <div className='link'>
                    <div>
                        {this.props.location.pathname !== '/search' &&
                            <NavLink exact activeClassName="selected" to="/search">
                                🔍
                            </NavLink>
                        }
                        {this.props.location.pathname !== '/' &&
                            <NavLink exact activeClassName="selected" to="/">
                                <img alt='pokeball' className='pokeball' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795ipeio.png&f=1&nofb=1'></img>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        )
    }
})
