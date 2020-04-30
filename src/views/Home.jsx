import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import Graphs from "../components/Graphs"
import Deaths_Recovered from "../components/Deaths_Recovered"
import * as d3 from 'd3';
import LastUpdate from '../components/LastUpdate';
import NbCountry from '../components/NbCountry';
import Hospitalization from "../components/Hospitalization"
import Title from "../components/Title"
import Description from "../components/Description"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import axios from 'axios';
import Papa from 'papaparse'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            dataUs: null,
            totalConfirmed: null,
            defaultConfirmed: null,
            defaultTotalUsHospi: null,
            nbCountry: null,
            defaultHospi: null,
            graphData: null,
            graphDaily: null
        };
        this.setNameTarget = this.setNameTarget.bind(this);
        this.setTotalHospi = this.setTotalHospi.bind(this);
    }

    setTotalHospi(value) {
        this.setState({defaultTotalUsHospi: value})
    }

    setNameTarget(value) {
        if (value === "reset") {
            var world_cases = 0;
            this.state.data.map((confirmed, index) => {
                world_cases = world_cases + Number(confirmed.Confirmed)
            })
            this.setState({totalConfirmed: world_cases})
            return;
        }
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
            sstate.setState({nbCountry: tab2.length})
        })

        var tabUs = []
        var iUs = 0
        d3.csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports_us/' + actual_date + '.csv', function(dataaUs, error) {
            if (dataaUs) {
                tabUs[iUs] = dataaUs
                iUs++
            } else {
               console.log(error)
            }
        }).then(function(dataaUs) {
            sstate.setState({dataUs: tabUs})
            var tab2Us = []                                                           //Default State of Hospitalization Component
            var province = null
            var totalUsHospi = 0
            sstate.state.dataUs.map((column, index) => {
                if (column.Country_Region === "US") {
                    province = column.Province_State
                    totalUsHospi += Number(column.People_Tested)
                    tab2Us.push({
                        Tested: Number(column.People_Tested),
                        Country: column.Country_Region,
                        ProvinceState: column.Province_State
                    })
                }
            })
            tab2Us.sort(function(a,b){
                return parseInt(a.Tested)  - parseInt(b.Tested);
            })
            tab2Us.reverse();
            tab2Us = tab2Us.slice(0, 50)
            sstate.setState({defaultHospi: tab2Us})
            sstate.setState({defaultTotalUsHospi: totalUsHospi})
        })

        var end = []
        var y = 0
        var x = 4
        var totalDay = 0
        axios.get(`https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`)
        .then(res => {
            var results = Papa.parse(res.data);
            for (; results.data[0][x]; x++) {
                totalDay = 0
                for (y = 1; results.data[y][x]; y++) {
                    totalDay += Number(results.data[y][x])
                }
                end.push({
                    Day: results.data[0][x],
                    Cases: totalDay
                })
            }
            sstate.setState({graphData: end})

            x = end.length - 1
            var dailyCases = []
            for (; end[x - 1]; x--) {
                dailyCases.push({
                    Day: end[x].Day,
                    Cases: end[x].Cases - end[x - 1].Cases
                })
            }
            dailyCases.push({
                Day: end[x].Day,
                Cases: end[x].Cases
            })
            dailyCases.reverse()
            sstate.setState({graphDaily: dailyCases})
        })
    }

    render() {

        if (this.state.data) {
            return (
                <div className="">
                    <Container fluid className="mb-2">
                        <Title />
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col style={{maxWidth:"26em"}}>
                                <div className="mb-2">
                                    <TotalConfirmed data={this.state.data} total={this.state.totalConfirmed} setName={this.setNameTarget}/>
                                </div>
                                <div className="mb-2">
                                    <Confirmed data={this.state.data} defaultConfirmed={this.state.defaultConfirmed} setName={this.setNameTarget}/>
                                </div>
                            </Col>
                            <Col style={{maxWidth:"26em"}}>
                                <div className="mb-2">
                                    <Deaths_Recovered data={this.state.data} />
                                </div>
                            </Col>
                            <Col style={{maxWidth:"26em"}}>
                                <div className="mb-2">
                                <Hospitalization data={this.state.dataUs} defaultHospi= {this.state.defaultHospi} defaultTotal={this.state.defaultTotalUsHospi} setTotalHospi={this.setTotalHospi}/>
                                </div>
                            </Col>
                            <Col style={{flexGrow:"0"}}>
                                <Graphs data={this.state.graphData} data_daily={this.state.graphDaily}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{flexGrow:"", maxWidth:"26em", marginTop:"56px"}}>
                                <div className="mb-2">
                                    <LastUpdate data={this.state.data}/>
                                </div>
                            </Col>
                            <Col style={{flexGrow:"", maxWidth:"12em"}}>
                                <div className="">
                                    <NbCountry nbCountry={this.state.nbCountry}/>
                                </div>
                            </Col>
                            <Col style={{flexGrow:"", maxWidth:"64em"}}>
                                <div className="">
                                    <Description />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        } else {
            return (
                    <div style={{left:"50%",top:"50%",position:"fixed"}} className="spinner-border text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
            )
        }
    }
}