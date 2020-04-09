import React, { Component } from 'react'
import * as d3 from 'd3';
import data from './04-07-2020.csv';

export default class FirstComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Active: null,
            Admin2: null,
            Combined_Key: null,
            Confirmed: null,
            Country_Region: null,
            Deaths: null,
            FIPS: null,
            Last_Update: null,
            Lat: null,
            Long_: null,
            Province_State: null,
            Recovered: null

        };
        this.convert = this.convert.bind(this);
    }

    convert() {
        const sstate = this
        d3.csv(data).then(function(data) {
            sstate.setState({ data: data})
          });
    }

    componentDidMount() {
        this.convert()
    }


    render() {
        const mapdata = this.state.data.map((alldata, index) =>
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
