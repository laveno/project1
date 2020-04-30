import React, { Component } from 'react'

export default class TotalConfirmed extends Component {

    render() {
        if (this.props.total) {
            return (
                <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}}className="pt-4 pb-3 text-center">
                    <h3 className="text-white font-weight-normal">Total Confirmed</h3>
                    <h1 style={{color: "#ff0000", fontSize:'70px', WebkitTextStroke: '1px black'}} className="">{this.props.total}</h1>
                </div>
            )
        } else return (<div>no data</div>)

    }
}
