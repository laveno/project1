import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList, Scatter, ScatterChart, Bar, BarChart } from 'recharts';
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetedTab: 0,
            options: {}
        };
    }

    confirmed() {
        this.setState({targetedTab: 0})
    }

    logarithmic() {
        const optionss = {
			animationEnabled: true,
			theme: "light2",
			title: {
				text: ""
			},
			axisY: {
				title: "",
				logarithmic: true,
				includeZero: false
			},
			data: [{
				type: "spline",
				showInLegend: true,
				legendText: "",
				dataPoints: [this.props.data]
			}]
        }
        this.setState({options: optionss})
        this.setState({targetedTab: 1})
    }

    dailycases() {
        this.setState({targetedTab: 2})
    }


    render() {
        console.log(this.props.data_daily)

        var display

        if (this.props.data) {

            if (this.state.targetedTab === 0) {
                display = <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}}>
                        <ScatterChart height={400} width={600} className="text-white font-weight-normal"
                            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Day" name="Month" hide="false"/>
                            <YAxis dataKey="Cases" name="Cases" />
                            <Tooltip cursor={{ stroke: 'red', strokeDasharray:"3 3" }} itemStyle={{color:"#ffffff"}} contentStyle={{backgroundColor: '#141719', border:'solid 1px #484d53'}}/>
                            <Scatter name="Day" data={this.props.data} fill="#ff0000" />
                        </ScatterChart>
                    </div>
                
            }

            else if (this.state.targetedTab === 1) {

                    display = <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}}>
                        <CanvasJSChart options = {this.state.options} 
				            /* onRef={ref => this.chart = ref} */
			            />
                    </div>
            }

            else if (this.state.targetedTab === 2) {
                    display = <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}}>
                            <BarChart
                                height={400}
                                width={600}
                                className="text-white font-weight-normal"
                                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                data={this.props.data_daily}
                                >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="Day" hide="false"/>
                                <YAxis />
                                <Tooltip cursor={{ stroke: 'red', strokeDasharray:"3 3" }} itemStyle={{color:"#ffffff"}} contentStyle={{backgroundColor: '#141719', border:'solid 1px #484d53'}}/>
                                <Bar dataKey="Cases" fill="#ff0000"/>
                            </BarChart>
                        </div>
            }

            return (
                <div>
                    {display}
                    <div className="text-center">
                        <button onClick={this.confirmed.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Confirmed</button>
                        <button onClick={this.logarithmic.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Logarithmic</button>
                        <button onClick={this.dailycases.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white p-1 pl-2 pr-2">Daily Cases</button>
                    </div>
                </div>
            )

        } else return (null)
    }
}
