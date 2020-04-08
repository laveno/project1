import React, { Component } from 'react'
import * as d3 from 'd3';
import data from './04-07-2020.csv';

export default class FirstComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.convert = this.convert.bind(this);
      }

    convert() {
        d3.csv(data, function(data) { console.log(data); });
    }

    render() {
        return (
            <div>
                Here is the first component
                <button onClick={this.convert}>
                  Click me!
                </button>
            </div>
            
        )
    }
}
