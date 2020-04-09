import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import * as d3 from 'd3';
import axios from 'axios';

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
        this.convert = this.convert.bind(this);
    }

    convert() {
        const sstate = this
        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-08-2020.csv')
        .then((response) => {
            console.log(response.data);
            d3.csv(response.data).then(function(response) {
                //create map to pars data specifically
                const actives = response.map((active, index) => active.Active)
                const admin2s = response.map((admin2, index) => admin2.Admin2)
                const combined_keys = response.map((combined_key, index) => combined_key.Combined_Key)
                const confirmeds = response.map((confirmed, index) => confirmed.Confirmed)
                const countries = response.map((country, index) => country.Country_Region)
                const deaths = response.map((death, index) => death.Deaths)
                const fips = response.map((fip, index) =>  fip.FIPS)
                const last_updates = response.map((last_update, index) => last_update.Last_Update)
                const lats = response.map((lat, index) => lat.Lat)
                const longs = response.map((long, index) => long.Long_)
                const province_states = response.map((province_state, index) => province_state.Province_State)
                const recovereds = response.map((recovered, index) => recovered.Recovered)
                
                //setState to send the result into the state
                sstate.setState({ data: response})
                sstate.setState({Active: actives})
                sstate.setState({Admin2: admin2s})
                sstate.setState({Combined_Key: combined_keys})
                sstate.setState({Confirmed: confirmeds})
                sstate.setState({Country_Region: countries})
                sstate.setState({Deaths: deaths})
                sstate.setState({FIPS: fips})
                sstate.setState({Last_Update: last_updates})
                sstate.setState({Lat: lats})
                sstate.setState({Long_: longs})
                sstate.setState({Province_State: province_states})
                sstate.setState({Recovered: recovereds})
        
              })
        })
        .catch(error => {
            console.log(error.response)
        });
    }

    componentDidMount() {
        this.convert()
    }

    render() {
        return (
            <div className="row">
                <div className="mb-2 w-25"><TotalConfirmed data={this.state.data}/></div>
                <div className="w-25"><Confirmed data={this.state.data} /></div>
                <span className="w-50 h-100"> <MapChart /> </span>
            </div>
        )
    }
}