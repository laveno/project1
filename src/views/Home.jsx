import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import axios from 'axios'
import { readString } from 'react-papaparse'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const sstate = this
        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-08-2020.csv')
        .then(res => {
            const data = res.data;
            const parse = readString(res.data)
            console.log(res.data)
            sstate.setState({ data: parse.data})
            console.log(parse.data)
        })
        .catch(e => {console.log(e)});
    }

    render() {
        return (
            <div className="">
                <div className="mb-2 w-25"><TotalConfirmed data={this.state.data} /></div>
            </div>
        )
    }
}
/*<div className="mb-2 w-25"><TotalConfirmed data={this.state.data} /></div>
<div className="w-25"><Confirmed data={this.state.data} /></div>
<span className="w-50 h-100"> <MapChart /> </span>*/