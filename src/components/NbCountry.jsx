import React, { Component } from 'react'

export default class TotalConfirmed extends Component {

    render() {
        if (this.props.nbCountry) {
            return (
                <div style={{color: "#D3D3D3", backgroundColor: '#141719', border:'solid 1px #484d53'}}className="pb-3 text-center">
                    <h1 style={{fontSize:'70px', WebkitTextStroke: '1px black'}} className="">{this.props.nbCountry}</h1>
                    <span className=" font-weight-normal">countries/regions</span>
                </div>
            )
        } else return (null)

    }
}