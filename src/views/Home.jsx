import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import axios from 'axios'
import { readString } from 'react-papaparse'
import * as d3 from 'd3';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Active: [],
            Admin2: [],
            Combined_Key: [],
            Confirmed: [],
            Country_Region: [],
            Deaths: [],
            FIPS: [],
            Last_Update: [],
            Lat: [],
            Long_: [],
            Province_State: [],
            Recovered: []
        };
    }

    componentDidMount() {
        const sstate = this
        var date = new Date().getDate() - 2;
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (date.toString().length == 1)
            date = "0" + date
        if (month.toString().length == 1)
            month = "0" + month
        var actual_date = month + "-" + date + "-" + year
 
        d3.csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + actual_date + '.csv', function(data, error) {
            if (data) {
                sstate.setState({data: data})
            } else {
               console.log(error)
            }
        });

    }

    render() {
        console.log(this.state.data)
        return (
            <div className="mb-2 w-25">
            </div>
        )
    }
}