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
                            🏡
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        )
    }
})
