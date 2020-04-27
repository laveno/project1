import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
    Label, LabelList, Scatter, ScatterChart } from 'recharts';

export default class Graphs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetedTab: 0,
        };
    }

    render() {

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

            else if (this.state.targetedTab === 2) {
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

            return (
                <div>
                    {display}
                    <div className="text-center">
                        <button style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Confirmed</button>
                        <button  style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Logarithmic</button>
                        <button  style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white p-1 pl-2 pr-2">Daily Cases</button>
                    </div>
                </div>
            )

        } else return (null)
    }
}
