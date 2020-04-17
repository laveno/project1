import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';

export default class Confirmed extends Component {

    render() {
        
        if (this.props.data) {

            const display = this.props.data.map((data, index) =>
                <a data-toggle="list" href="#" className="list-group-item list-group-item-action bg-dark" onClick={this.props.setName.bind(this, data.Confirmed)} key={index}>
                    <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"20px"}} className="font-weight-bold">{"Confirmed" + data.Confirmed ? data.Confirmed : 'unknow'}</span>
                    <span>&emsp;</span>
                    <span className="text-white">{"Combined_Key" + data.Combined_Key ? data.Combined_Key : 'unknow'}</span>
                </a>
            )

            return (
                <div className="text-left">

                    <div style={{border: "solid #141719 2px"}} className="">

                        <p style={{backgroundColor: '#141719',fontSize: '14px', paddingTop: '3%', paddingBottom: '3%', marginBottom: '0%'}} className="text-white font-weight-normal text-center">Confirmed Cases by <br /> Country/Region/Sovereignty</p>

                        <div className="list-group">
                            {display}
                        </div>

                    </div>

                </div>
            )
        } else return (<div>no data</div>)
        
    }
}
