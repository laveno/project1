import React, { Component } from 'react';

export default class Confirmed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetedTab: -1,
            admin0Data: [],
            admin1Data: [],
            admin2Data: []
        };
    }

    admin2Data() {
        var tab = []
        var province = null

        this.props.data.map((column, index) => {
            province = column.Province_State
            if (province === "New York") {
                tab.push({
                    Confirmed: Number(column.Confirmed),
                    Country: column.Country_Region,
                    ProvinceState: column.Province_State,
                    Admin2: column.Admin2
                })
            }
        })
        tab.sort(function(a,b){
            return parseInt(a.Confirmed)  - parseInt(b.Confirmed);
        })
        tab.reverse();
        console.log(tab)
        this.setState({admin2Data: tab})
        this.setState({targetedTab: 2})
    }

    admin1Data() {
        var tab = []
        var province = null

        this.props.data.map((column, index) => {
            province = column.Province_State
            if (province != "") {
                for (var x = 0; tab[x]; x++) {
                    if (province === tab[x].ProvinceState) {
                        tab[x].Confirmed += Number(column.Confirmed)
                        break;
                    }
                    if (tab[x + 1] == null) {
                        tab.push({
                            Confirmed: Number(column.Confirmed),
                            Country: column.Country_Region,
                            ProvinceState: column.Province_State
                        })
                        break;
                    }
                }
                if (tab.length === 0) {
                    tab.push({
                        Confirmed: Number(column.Confirmed),
                        Country: column.Country_Region,
                        ProvinceState: column.Province_State
                    })
                }
            }
        })
        tab.sort(function(a,b){
            return parseInt(a.Confirmed)  - parseInt(b.Confirmed);
        })
        tab.reverse();
        tab = tab.slice(0, 75)
        console.log(tab)
        this.setState({admin1Data: tab})
        this.setState({targetedTab: 1})
    }

    admin0Data() {
        var tab = []
        var country = null

        this.props.data.map((column, index) => {
            country = column.Country_Region
            for (var x = 0; tab[x]; x++) {
                if (country === tab[x].Country) {
                    tab[x].Confirmed += Number(column.Confirmed)
                    break;
                }
                if (tab[x + 1] == null) {
                    tab.push({
                        Confirmed: Number(column.Confirmed),
                        Country: country
                    })
                    break;
                }
            }
            if (tab.length === 0) {
                tab.push({
                    Confirmed: Number(column.Confirmed),
                    Country: country
                })
            }
        })
        tab.sort(function(a,b){
            return parseInt(a.Confirmed)  - parseInt(b.Confirmed);
        })
        tab.reverse();
        console.log(tab)
        this.setState({admin0Data: tab})
        this.setState({targetedTab: 0})
    }
    render() {
        
        if (this.props.data && this.props.defaultConfirmed) {

            var display

            if (this.state.targetedTab === -1) {

                display = this.props.defaultConfirmed.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" onClick={this.props.setName.bind(this, data.Confirmed, data.Country)} key={index}>
                        <span style={{color: "#ff0000", fontSize:"17px", WebkitTextStroke: "0.3px black"}} className="font-weight-bold">{data.Confirmed ? data.Confirmed : 'unknow'}</span>
                        <span>&emsp;</span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="">{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }
            else if (this.state.targetedTab === 0) {

                display = this.state.admin0Data.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" onClick={this.props.setName.bind(this, data.Confirmed, data.Country)} key={index}>
                        <span style={{color: "#ff0000", fontSize:"17px", WebkitTextStroke: "0.4px black"}} className="font-weight-bold">{data.Confirmed ? data.Confirmed : 'unknow'}</span>
                        <span>&emsp;</span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="">{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }
            else if (this.state.targetedTab === 1) {
                display = this.state.admin1Data.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" onClick={this.props.setName.bind(this, data.Confirmed, data.Country, data.ProvinceState)} key={index}>
                        <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"17px"}} className="font-weight-bold">{data.Confirmed ? data.Confirmed : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#ff0000", fontSize:"17px"}} className="">confirmed</span>
                        <span> <br /> </span>
                        <span style={{color: "#ffffff", fontSize:"17px"}} className="font-weight-bold">{data.ProvinceState ? data.ProvinceState : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="font-weight-normal">{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }
            else {
                display = this.state.admin2Data.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" onClick={this.props.setName.bind(this, data.Confirmed, data.ProvinceState, data.Country, data.Admin2)} key={index}>
                        <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"17px"}} className="font-weight-bold">{data.Confirmed ? data.Confirmed : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#ff0000", fontSize:"17px"}} className="">confirmed</span>
                        <span> <br /> </span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="font-weight-normal">{"Combined_Key" + data.Admin2 ? data.Admin2 : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span className="text-white font-weight-bold">{data.ProvinceState ? data.ProvinceState : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="font-weight-normal">{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }

            return (
                <div className="text-left">

                    <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="">

                        <p style={{fontSize: '14px', paddingTop: '3%', paddingBottom: '3%', marginBottom: '0%'}} className="text-white font-weight-normal text-center">Confirmed Cases by <br /> Country/Region/Sovereignty</p>

                        <div style={{overflow:'auto', maxHeight:'650px'}} className="list-group">
                            {display}
                        </div>
                    </div>
                    <div className="text-center">
                        <button onClick={this.admin0Data.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Admin0</button>
                        <button onClick={this.admin1Data.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Admin1</button>
                        <button onClick={this.admin2Data.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white p-1 pl-2 pr-2">Admin2</button>
                    </div>

                </div>
            )
        } else return (null)
    }
}
