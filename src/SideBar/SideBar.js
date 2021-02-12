import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'

const sortByOptions = ['Name', 'Type', 'Attack', 'Defense'];
const sortOrderOptions = ['Ascending', 'Descending']

export default class SideBar extends Component {
    render() {
        return (
            <div className='SideBar'>
                <form>
                    <input placeholder='Search by keyword' onChange={this.props.handleFilter} value={this.props.state.filterBy} />
                    <DropDown options={sortByOptions} onChange={this.props.handleSortBy} value={this.props.state.sortBy}/>
                    <DropDown options={sortOrderOptions} onChange={this.props.handleSortOrder} value={this.props.state.sortOrder}/>
                </form>
            </div>
        )
    }
}
