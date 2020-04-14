import React, { Component } from 'react'

export default class TotalConfirmed extends Component {

    render() {
        if (this.props.Confirmed) {
            var confirmed_cases = 0;

                this.props.Confirmed.map((confirmed, index) => {
                    if (confirmed === undefined) {
                        confirmed_cases = confirmed_cases
                    } else {
                        confirmed_cases = confirmed_cases + Number(confirmed)
                    }
                })

            return (
                <div className="pt-4 pb-3 text-danger text-center bg-dark border border-secondary">
                    <h3 className="text-white font-weight-normal">Total Confirmed</h3>
                    <h1 className="">{confirmed_cases}</h1>
                </div>
            )
        } else return (<div>no data</div>)

    }
}
