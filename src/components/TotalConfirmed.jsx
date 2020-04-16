import React, { Component } from 'react'

export default class TotalConfirmed extends Component {

    componentDidUpdate() {

    }

    render() {
        if (this.props.total) {
            return (
                <div className="pt-4 pb-3 text-danger text-center bg-dark border border-secondary">
                    <h3 className="text-white font-weight-normal">Total Confirmed</h3>
                    <h1 className="">{this.props.total}</h1>
                </div>
            )
        } else return (<div>no data</div>)

    }
}
