import React, { Component } from 'react'

export default class TotalConfirmed extends Component {

    render() {
        if (this.props.nbCountry) {
            return (
                <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}}className="pt-4 pb-3 text-center">
                    <h2 style={{fontSize:'50px'}} className="text-white font-weight-normal">{this.props.nbCountry}</h2>
                    <h1 className="text-white font-weight-normal">countries/regions</h1>
                </div>
            )
        } else return (<div>no data</div>)

    }
}