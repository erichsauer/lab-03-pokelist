import React, { Component } from 'react'
import '../App.css'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends Component {
    render() {
        return (
            <header>
                <div className='header'>
                    Geoffrey's Pokédex
                </div>
                <div className='link'>
                    <div>
                        {this.props.location.pathname !== '/pokemon' &&
                            <NavLink exact activeClassName="selected" to="/pokemon">
                                🔍
                            </NavLink>
                        }
                        {this.props.location.pathname !== '/' &&
                            <NavLink exact activeClassName="selected" to="/">
                                ⚡️
                            </NavLink>
                        }
                    </div>
                </div>
            </header>
        )
    }
})
