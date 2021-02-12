import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        const options = this.props.options.map((option) => {
            return <option key={option}>{option}</option>
        })
        return (
            <select onChange={this.props.onChange} value={this.props.value}>
                <option>Select</option>
                {options}
            </select>
        )
    }
}
