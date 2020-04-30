import React, { Component } from 'react'

export default class LastUpdate extends Component {
    render() {
        if (this.props.data) {

            const last_update = this.props.data.slice(0,1).map((update, index) =>
                <div>{update.Last_Update}</div>
            )

            return (
                <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}}className="text-center pb-1 pt-1">
                    <span className="text-white h6 font-weight-normal">Last Updated at (YYYY/M/D)</span>
                    <span className="text-white h3">{last_update}</span>
                </div>
            )
        } else return (<div>no data</div>)
    }
}
