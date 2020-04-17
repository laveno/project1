import React, { Component } from 'react';

export default class Confirmed extends Component {

    render() {
        
        if (this.props.data) {

            const display = this.props.data.map((data, index) =>
                <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" onClick={this.props.setName.bind(this, data.Confirmed)} key={index}>
                    <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"20px"}} className="font-weight-bold">{"Confirmed" + data.Confirmed ? data.Confirmed : 'unknow'}</span>
                    <span>&emsp;</span>
                    <span className="text-white">{"Combined_Key" + data.Combined_Key ? data.Combined_Key : 'unknow'}</span>
                </button>
            )

            return (
                <div className="text-left">

                    <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="">

                        <p style={{fontSize: '14px', paddingTop: '3%', paddingBottom: '3%', marginBottom: '0%'}} className="text-white font-weight-normal text-center">Confirmed Cases by <br /> Country/Region/Sovereignty</p>

                        <div style={{overflow:'auto', maxHeight:'650px'}} className="list-group">
                            {display}
                        </div>
                    </div>
                    <div className="text-center">
                        <button style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Admin0</button>
                        <button style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Admin1</button>
                        <button style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white p-1 pl-2 pr-2">Admin2</button>
                    </div>

                </div>
            )
        } else return (<div>no data</div>)
        
    }
}
