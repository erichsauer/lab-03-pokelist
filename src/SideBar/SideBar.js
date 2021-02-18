import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'
import RadioButtons from '../RadioButtons/RadioButtons';

const sortByDisplayOptions = ['Name', 'Type', 'Attack', 'Defense', 'Weight'];
const sortByOptions = ['pokemon', 'type', 'attack', 'defense', 'weight'];
const sortOrderDisplayOptions = ['Ascending', 'Descending']
const sortOrderOptions = ['asc', 'desc']
const radioButtonDisplayOptions = ['None', 'Egg Group', 'Shape']
const radioButtonOptions = ['', 'eggGroup', 'shape']
const perPage = [10, 25, 50, 100]
const perPageDisplay = ['10 per page', '25 per page', '50 per page', '100 per page']

export default class SideBar extends Component {
    render() {
        const lastPage = Math.ceil(this.props.state.totalPokemon / this.props.state.perPage);
        console.log(this.props.state)
        return (
            <div className='SideBar'>
                <form>
                    <input
                        placeholder='search🔎'
                        value={this.props.state.filterBy}
                        onChange={this.props.handleFilter}
                    />
                    <div className='label'>
                        Sort by
                    </div>
                    <DropDown
                        displayOptions={sortByDisplayOptions}
                        valueOptions={sortByOptions}
                        value={this.props.state.sortBy}
                        onChange={this.props.handleSortBy}
                    />
                    <DropDown
                        displayOptions={sortOrderDisplayOptions}
                        valueOptions={sortOrderOptions}
                        value={this.props.state.sortOrder}
                        onChange={this.props.handleSortOrder}
                    />
                    <div className='divider'></div>
                    <input
                        placeholder='really search🔬'
                        value={this.props.state.filterBy2}
                        onChange={this.props.handleFilter2}
                    />
                    <div className='radio-container'>
                        <RadioButtons
                            displayOptions={radioButtonDisplayOptions}
                            valueOptions={radioButtonOptions}
                            value={this.props.state.radio}
                            name={'radios'}
                            onChange={this.props.handleRadio}
                        />
                    </div>
                    <div className='divider'>
                    </div>
                    <button onClick={this.props.handleClick}>
                        Go!
                    </button>
                    <DropDown
                        displayOptions={perPageDisplay}
                        valueOptions={perPage}
                        value={this.props.state.perPage}
                        onChange={this.props.handlePerPage}
                    />
                    <button
                        onClick={this.props.handlePrev}
                        disabled={this.props.state.currentPage === 1}>
                        Previous
                    </button>
                    <button
                        onClick={this.props.handleNext}
                        disabled={this.props.state.currentPage === lastPage}>
                        Next
                    </button>
                    <div className='divider'>

                    </div>
                    <div className='pokeball-container'>
                    Pokeball: {this.props.state.pokeBall.length}
                    <img alt='pokeball'
                        onClick={this.props.handlePokeBallDisplay}
                        className='pokeball'
                            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825795ipeio.png&f=1&nofb=1'></img>
                        </div>
                </form>
            </div>
        )
    }
}
