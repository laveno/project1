import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import Deaths_Recovered from "../components/Deaths_Recovered"
import * as d3 from 'd3';
import LastUpdate from '../components/LastUpdate';
import NbCountry from '../components/NbCountry';
import Hospitalization from "../components/Hospitalization"
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


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
        };
        this.setNameTarget = this.setNameTarget.bind(this);
        this.setTotalHospi = this.setTotalHospi.bind(this);
    }

    setTotalHospi(value) {
        console.log("change total hospi")
        this.setState({defaultTotalUsHospi: value})
    }

    setNameTarget(value) {
        console.log("change total")
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
        console.log(actual_date)
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
            console.log(tab2Us)
            sstate.setState({defaultHospi: tab2Us})
            sstate.setState({defaultTotalUsHospi: totalUsHospi})
        })

        d3.csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv', function(data, error) {
            if (data) {

            } else {
               console.log(error)
            }
        }).then(function(dataaUs) {
        })
    }

    render() {

        if (this.state.data) {
            return (
                <div className="">
                    <Container fluid className="mb-2">
                        <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="pb-1 pt-2">
                            <h3 className="ml-5 pl-5 text-white font-weight-normal">COVID-19 Dashboard by the Center for Systems
                                Science and Engineering (CSSE) at Johns Hopkins University (JHU)
                            </h3>
                        </div>
                    </Container>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div style={{maxWidth:"26em"}} className="mb-2">
                                    <TotalConfirmed data={this.state.data} total={this.state.totalConfirmed} setName={this.setNameTarget}/>
                                </div>
                                <div style={{maxWidth:"26em"}} className="mb-2">
                                    <Confirmed data={this.state.data} defaultConfirmed={this.state.defaultConfirmed} setName={this.setNameTarget}/>
                                </div>
                            </Col>
                            <Col>
                                <div style={{maxWidth:"26em"}} className="mb-2">
                                    <Deaths_Recovered data={this.state.data} />
                                </div>
                            </Col>
                            <Col>
                                <div style={{maxWidth:"26em"}} className="mb-2">
                                <Hospitalization data={this.state.dataUs} defaultHospi= {this.state.defaultHospi} defaultTotal={this.state.defaultTotalUsHospi} setTotalHospi={this.setTotalHospi}/>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div style={{maxWidth:"26em"}} className="mb-2">
                                    <LastUpdate data={this.state.data}/>
                                </div>
                            </Col>
                            <Col>
                                <div style={{maxWidth:"12em"}} className="">
                                    <NbCountry nbCountry={this.state.nbCountry}/>
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