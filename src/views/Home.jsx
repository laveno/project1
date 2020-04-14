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
        axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-08-2020.csv')
        .then(res => {
            const data = res.data;
            const parse = readString(res.data)
            sstate.setState({ data: parse.data})
            var tab = []
            var i = 1
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][0])
            }
            sstate.setState({ FIPS: tab})
            //console.log(sstate.state.FIPS)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][1])
            }
            sstate.setState({ Admin2: tab})
            //console.log(sstate.state.Admin2)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][2])
            }
            sstate.setState({ Province_State: tab})
            //console.log(sstate.state.Province_State)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][3])
            }
            sstate.setState({ Country_Region: tab})
            //console.log(sstate.state.Country_Region)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][4])
            }
            sstate.setState({ Last_Update: tab})
            //console.log(sstate.state.Last_Update)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][5])
            }
            sstate.setState({ Lat: tab})
            //console.log(sstate.state.Lat)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][6])
            }
            sstate.setState({ Long: tab})
            //console.log(sstate.state.Long)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][7])
            }
            sstate.setState({ Confirmed: tab})
            //console.log(sstate.state.Confirmed)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][8])
            }
            sstate.setState({ Deaths: tab})
            //console.log(sstate.state.Deaths)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][9])
            }
            sstate.setState({ Recovered: tab})
            //console.log(sstate.state.Recovered)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][10])
            }
            sstate.setState({ Active: tab})
            //console.log(sstate.state.Active)
            tab = []
            for (i = 1; parse.data[i]; i++) {
                tab.push(parse.data[i][11])
            }
            sstate.setState({ Combined_Key: tab})
            //console.log(sstate.state.Combined_Key)
        })
        .catch(e => {console.log(e)});
    }

    render() {
        return (
            <div className="">
            </div>
        )
    }
}
/*<div className="mb-2 w-25"><TotalConfirmed data={this.state.data} /></div>
<div className="w-25"><Confirmed data={this.state.data} /></div>
<span className="w-50 h-100"> <MapChart /> </span>*/