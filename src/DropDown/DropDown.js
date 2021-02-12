import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        const options = this.props.options.map((option, i) => {
            return <option key={option} value={this.props.valueOptions[i]}>{option}</option>
        })
        return (
            <select onChange={this.props.onChange} value={this.props.value}>
                <option value=''>Select</option>
                {options}
            </select>
        )
    }
}
