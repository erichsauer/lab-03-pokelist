import React, { Component } from 'react'

export default class RadioButtons extends Component {
    render() {
        const options = this.props.displayOptions.map((option, i) => {
            return <label key={option} className='radio-label'>
                {option}
                <input key={option}
                    type='radio'
                    className='radio-option'
                    name={this.props.name}
                    value={this.props.valueOptions[i]}
                    checked={this.props.value ===
                        this.props.valueOptions[i]}
                    onChange={this.props.onChange}>
                </input>
            </label>
        })
        return (
            <>
                {options}
            </>
        )
    }
}
