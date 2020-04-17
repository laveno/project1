import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import * as d3 from 'd3';
import LastUpdate from '../components/LastUpdate';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            totalConfirmed: null,
            defaultConfirmed: null
        };
        this.setNameTarget = this.setNameTarget.bind(this);
    }

    setNameTarget(value) {
        this.setState({totalConfirmed: value})
    }

    componentDidMount() {
        const sstate = this
        var date = new Date().getDate() - 2;
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (date.toString().length === 1)
            date = "0" + date
        if (month.toString().length === 1)
            month = "0" + month
        var actual_date = month + "-" + date + "-" + year
 
        var tab = []
        var i = 0
        d3.csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + actual_date + '.csv', function(dataa, error) {
            if (dataa) {
                tab[i] = dataa
                i++
            } else {
               console.log(error)
            }
        }).then(function(dataa) {
            sstate.setState({data: tab})
            var confirmed_cases = 0;                                                // Default State of Total Confirmed Component
            sstate.state.data.map((confirmed, index) => {
                confirmed_cases = confirmed_cases + Number(confirmed.Confirmed)
            })
            console.log(confirmed_cases)
            sstate.setState({totalConfirmed: confirmed_cases})

            var tab2 = []
            var country = null
            sstate.state.data.map((column, index) => {
                country = column.Country_Region
                for (var x = 0; tab2[x]; x++) {
                    if (country === tab2[x].Country) {
                        tab2[x].Confirmed += Number(column.Confirmed)
                        break;
                    }
                    if (tab2[x + 1] == null) {
                        tab2.push({
                            Confirmed: Number(column.Confirmed),
                            Country: country
                        })
                        break;
                    }
                }
                if (tab2.length === 0) {
                    tab2.push({
                        Confirmed: Number(column.Confirmed),
                        Country: country
                    })
                }
            })
            tab2.sort(function(a,b){
                return parseInt(a.Confirmed)  - parseInt(b.Confirmed);
            })
            tab2.reverse();
            sstate.setState({defaultConfirmed: tab2})
        })
    }

    render() {
        return (
            <div className="d-flex flex-column">

                <div className="mb-2 w-25">
                    <TotalConfirmed data={this.state.data} total={this.state.totalConfirmed}/>
                </div>

                <div className="mb-2 w-25">
                    <Confirmed data={this.state.data} defaultConfirmed={this.state.defaultConfirmed} setName={this.setNameTarget}/>
                </div>

                <div className="w-25">
                    <LastUpdate data={this.state.data}/>
                </div>

            </div>
        )
    }
}