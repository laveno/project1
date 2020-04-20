import React, { Component } from 'react'
import Confirmed from "../components/Confirmed"
import TotalConfirmed from "../components/TotalConfirmed"
import MapChart from "../components/MapChart"
import * as d3 from 'd3';
import LastUpdate from '../components/LastUpdate';
import NbCountry from '../components/NbCountry';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            totalConfirmed: null,
            defaultConfirmed: null,
            nbCountry: null
        };
        this.setNameTarget = this.setNameTarget.bind(this);
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
    }

    render() {
        return (
            <div className="">
                <Container fluid>
                        <Col>
                            <div className="mb-2">
                                <TotalConfirmed data={this.state.data} total={this.state.totalConfirmed} setName={this.setNameTarget}/>
                            </div>
                        </Col>
                        <Col>
                            <div className="mb-2">
                                <Confirmed data={this.state.data} defaultConfirmed={this.state.defaultConfirmed} setName={this.setNameTarget}/>
                            </div>
                        </Col>
                    <Row>
                        <Col>
                            <div className="">
                                <LastUpdate data={this.state.data}/>
                            </div>
                        </Col>

                        <Col>
                            <div className="">
                                <NbCountry nbCountry={this.state.nbCountry}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}