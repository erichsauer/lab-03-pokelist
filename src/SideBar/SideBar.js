import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'

const sortByDisplayOptions = ['Name', 'Type 1', 'Type 2', 'Attack', 'Defense'];
const sortByOptions = ['pokemon', 'type_1', 'type_2', 'attack', 'defense'];
const sortOrderDisplayOptions = ['Ascending', 'Descending']
const sortOrderOptions = [true, false]

export default class SideBar extends Component {
    render() {
        return (
            <div className='SideBar'>
                <form>
                    <input placeholder='Search by keyword' onChange={this.props.handleFilter} value={this.props.state.filterBy} />
                    <DropDown options={sortByDisplayOptions} onChange={this.props.handleSortBy} value={this.props.state.sortBy} valueOptions={sortByOptions}/>
                    <DropDown options={sortOrderDisplayOptions} onChange={this.props.handleSortOrder} value={this.props.state.sortOrder} valueOptions={sortOrderOptions}/>
                </form>
            </div>
        )
    }
}
