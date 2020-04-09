import React, { Component } from 'react';

export default class Confirmed extends Component {

    render() {
        const mapdata = this.props.data.map((alldata, index) =>
            <button className="text-center w-100 p-0 m-0 list-group-item list-group-item-action list-group-item-secondary" key={alldata.Country_Region + index}>
                        <span className="text-danger">{"Confirmed" + alldata.Confirmed ? alldata.Confirmed : 'unknow'}</span>
                        <span>&emsp;</span>
                        <span className="text-dark">{"Combined_Key" + alldata.Combined_Key ? alldata.Combined_Key : 'unknow'}</span>
            </button>
        )

        return (
            <div className='container'>
                <div className="list-group h-25  mh-25 d-inline-block">
                    <div className="list-group-item pt-2 pb-2">Confirmed Cases by Country/Region/Sovereignty</div>
                    <div className="">{mapdata}</div>
                </div>
            </div>
        )
    }
}
