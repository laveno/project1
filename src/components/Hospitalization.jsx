import React, { Component } from 'react';

export default class Hospitalization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetedTab: -1,
            total: null,
            admin0Data: [],
            admin1Data: [],
            targetedSentence: "Total Test Conducted in U.S."
        };
    }

    Hospitalization() {
        var tab2Us = []
        var province = null
        var totalUsHospi = 0
        this.props.data.map((column, index) => {
            if (column.Country_Region === "US") {
                province = column.Province_State
                totalUsHospi += Number(column.People_Hospitalized)
                tab2Us.push({
                    Hospitalized: Number(column.People_Hospitalized),
                    Country: column.Country_Region,
                    ProvinceState: column.Province_State
                })
            }
        })
        tab2Us.sort(function(a,b){
            return parseInt(a.Hospitalized)  - parseInt(b.Hospitalized);
        })
        tab2Us.reverse();
        console.log(tab2Us)
        this.props.setTotalHospi(totalUsHospi)
        this.setState({admin1Data: tab2Us})
        this.setState({targetedSentence: "Total Hospitalized in the US"})
        this.setState({targetedTab: 1})
    }

    Tested() {
        var tab2Us = []
        var province = null
        var totalUsHospi = 0
        this.props.data.map((column, index) => {
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
        this.props.setTotalHospi(totalUsHospi)
        this.setState({admin0Data: tab2Us})
        this.setState({targetedSentence: "Total Test Conducted in U.S."})
        this.setState({targetedTab: 0})
    }

    render() {
        
        if (this.props.data && this.props.defaultHospi) {

            var display

            if (this.state.targetedTab === -1) {

                display = this.props.defaultHospi.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{color: "#0779e4", fontSize:"17px"}} className="font-weight-normal">{data.Tested ? data.Tested : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#0779e4", fontSize:"17px"}} className="">tested</span>
                        <span> <br /> </span>
                        <span className="text-white font-weight-normal">{data.ProvinceState ? data.ProvinceState : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3"}}>{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }
            else if (this.state.targetedTab === 0) {

                display = this.state.admin0Data.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{color: "#0779e4", fontSize:"17px"}} className="font-weight-normal">{data.Tested ? data.Tested : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#0779e4", fontSize:"17px"}} className="">tested</span>
                        <span> <br /> </span>
                        <span className="text-white font-weight-normal">{data.ProvinceState ? data.ProvinceState : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3"}}>{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }
            else {
                display = this.state.admin1Data.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="font-weight-normal">{data.Hospitalized ? data.Hospitalized : ''}</span>
                        <span>&thinsp;</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="">hospitalized</span>
                        <span> <br /> </span>
                        <span className="text-white font-weight-normal">{data.ProvinceState ? data.ProvinceState : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3"}}>{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }

            return (
                <div className="text-left">

                    <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="">

                    <h1 style={{paddingTop: '3%', paddingBottom: '3%', marginBottom: '0%'}} className=" h4 text-white font-weight-normal text-center">{this.state.targetedSentence} <br /></h1>
                    <h1 style={{fontSize:'70px', color:"#0779e4"}} className="font-weight-normal text-center">{this.props.defaultTotal} <br /></h1>

                        <div style={{overflow:'auto', maxHeight:'650px'}} className="list-group">
                            {display}
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={this.Tested.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">US Tested</button>
                        <button onClick={this.Hospitalization.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">US Hospitalization</button>
                    </div>

                </div>
            )
        } else return (<div>no data</div>)
        
    }
}
