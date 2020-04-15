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
        console.log(actual_date)
 
        d3.csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + actual_date + '.csv', function(error, data) {
            if (error) {  
                console.log(error);  //Log the error.
            } else {      
                console.log(data);   //Log the data.
            }
        });

        /*axios.get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + actual_date + '.csv')
        .then(res => {
            const data = res.data;
            console.log(res.data)
            var lines=res.data.split("\n");

            var result = [];
          
            var headers=lines[0].split(",");
          
            for(var i=1;i<lines.length;i++){
          
                var obj = {};
                var currentline=lines[i].split(",");
          
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
          
                result.push(obj);
          
            }
            console.log(JSON.stringify(result))
            //return JSON.stringify(result);
        })
        .catch(e => {console.log(e)});*/
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}
/* <div className="mb-2 w-25">
                    <TotalConfirmed 
                    Confirmed={this.state.Confirmed}
                    />
                </div>

                <div className="w-25">
                    <Confirmed
                    Confirmed={this.state.Confirmed}
                    Combined_Key={this.state.Combined_Key}
                    Country_Region={this.state.Country_Region}
                    />
                </div>
*/