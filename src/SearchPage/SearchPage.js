import React, { Component } from 'react'
import '../App.css'
import SideBar from '../SideBar/SideBar'

export default class SearchPage extends Component {
    render() {
        return (
            <main className='SearchPage'>
                <SideBar />
                <div className='results-div'>
                    <div className='poke-item'>Pokemon</div>
                </div>
            </main>
        )
    }
}
