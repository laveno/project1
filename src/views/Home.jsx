import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import * as d3 from 'd3';
import data from '../components/04-07-2020.csv';

export default class Home extends Component {
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
        return (
            <div>
                <TotalConfirmed />
                <Confirmed data={this.state.data}/>
            </div>
        )
    }
}
