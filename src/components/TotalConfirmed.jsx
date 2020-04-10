import React, { Component } from 'react'

export default class TotalConfirmed extends Component {

    render() {

        if (this.props.data) {
            var confirmed_cases = 0;

            const confirmeds = this.props.data.map((confirmed, index) =>
                confirmed_cases = confirmed_cases + Number(confirmed.Confirmed)
            )

            return (
                <div className="pt-4 pb-3 text-danger text-center bg-dark border border-secondary">
                    <h3 className="text-white font-weight-normal">Total Confirmed</h3>
                    <h1 className="">{confirmed_cases}</h1>
                </div>
            )
        } else return (<div>no data</div>)

    }
}
