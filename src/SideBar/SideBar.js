import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'
import RadioButtons from '../RadioButtons/RadioButtons';

const sortByDisplayOptions = ['Name', 'Type', 'Attack', 'Defense'];
const sortByOptions = ['pokemon', 'type', 'attack', 'defense'];
const sortOrderDisplayOptions = ['Ascending', 'Descending']
const sortOrderOptions = ['asc', 'desc']
const radioButtonDisplayOptions = ['Egg Group', 'Shape', 'Weight']
const radioButtonOptions = ['eggGroup', 'shape', 'weight']

export default class SideBar extends Component {
    render() {
        return (
            <div className='SideBar'>
                <form>
                    <input
                        placeholder='🔎'
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
                    <input
                        placeholder='🔬'
                        value={this.props.state.filterBy2}
                        onChange={this.props.handleFilter2}
                    />

                    <RadioButtons
                        displayOptions={radioButtonDisplayOptions}
                        valueOptions={radioButtonOptions}
                        value={this.props.state.radio}
                        name={'radios'}
                        onChange={this.props.handleRadio}
                    />
                    <button onClick={this.props.handleClick}>Search!</button>
                </form>
            </div>
        )
    }
}
