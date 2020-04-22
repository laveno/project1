import React, { Component } from 'react';

export default class Deaths_Recovered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetedTab: 0,
            Deaths: [],
            Recovered: []
        };
    }

    Recovered() {
        var tab = []
        var country = null
        var recovered = null

        this.props.data.map((column, index) => {
            country = column.Country_Region
            recovered = column.Recovered
            for (var x = 0; tab[x]; x++) {
                if (recovered == tab[x].Recovered) {
                    if (recovered == 0) {
                        break
                    } else {
                    tab[x].Recovered += Number(column.Recovered)
                    break
                    }
                }
                if (tab[x + 1] == null) {
                        tab.push({
                            Recovered: Number(column.Recovered),
                            Country_Region: country
                        })
                        break
                }
            }
            if (tab.length == 0) {
                tab.push({
                    Recovered: Number(column.Recovered),
                    Country_Region: country
                })
            }
        })
        tab.sort(function(a,b){
            return parseInt(a.Recovered)  - parseInt(b.Recovered);
        })
        tab.reverse();
        this.setState({Recovered: tab})
        this.setState({targetedTab: 1})
    }

    Deaths() {
        var tab = []
        var combined_key = null
        var deaths = null

        this.props.data.map((column, index) => {
            combined_key = column.Combined_Key
            deaths = column.Deaths
            for (var x = 0; tab[x]; x++) {
                if (deaths == tab[x].Deaths) {
                    if (deaths == 0) {
                        break
                    } else {
                    tab[x].Deaths += Number(column.Deaths)
                    break
                    }
                }
                if (tab[x + 1] == null) {
                        tab.push({
                            Deaths: Number(column.Deaths),
                            Combined_Key: combined_key
                        })
                        break
                }
            }
            if (tab.length == 0) {
                tab.push({
                    Deaths: Number(column.Deaths),
                    Combined_Key: combined_key
                })
            }
        })
        tab.sort(function(a,b){
            return parseInt(a.Deaths)  - parseInt(b.Deaths);
        })
        tab.reverse();
        tab = tab.slice(0, 250)
        this.setState({Deaths: tab})
        this.setState({targetedTab: 0})
    }

    componentDidMount() {
        this.Deaths()
    }

    render() {
        if (this.props.data) {

            var display
            var total_deaths = 0
            var total_recovered = 0

            if (this.state.targetedTab === 0) {

                display = this.state.Deaths.map((data, index) => 
                    <button style={{}} href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{color: "#ffffff", fontSize:"17px"}} className="font-weight-normal">{data.Deaths ? data.Deaths : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#D3D3D3", fontSize:"17px"}} className="">deaths</span>
                        <span> <br /> </span>
                        <span style={{color: "#D3D3D3"}} className="font-weight-normal">{data.Combined_Key ? data.Combined_Key : 'unknow'}</span>
                    </button>
                )

                this.state.Deaths.map((death, index) =>
                    total_deaths = total_deaths + death.Deaths
                )

                return (

                    <div className="text-left">
                        <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="">
                        <h1 style={{paddingTop: '3%', paddingBottom: '3%', marginBottom: '0%'}} className=" h4 text-white font-weight-normal text-center">Total Deaths</h1>
                            <h1 style={{fontSize:'70px'}} className="text-white font-weight-normal text-center">{total_deaths}</h1>
                                <div style={{overflow:'auto', maxHeight:'650px'}} className="list-group">
                                    {display}
                                </div>
                        </div>
                        <div className="text-center">
                            <button onClick={this.Deaths.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Deaths</button>
                            <button onClick={this.Recovered.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Recovered</button>
                        </div>
    
                    </div>
                )
            }

            else {
                display = this.state.Recovered.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{color: "#32CD32", fontSize:"17px"}} className="font-weight-normal">{data.Recovered ? data.Recovered : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span>&thinsp;</span>
                        <span style={{color: "#32CD32", fontSize:"17px"}} className="">recovered</span>
                        <span> <br /> </span>
                        <span className="text-white font-weight-normal">{data.Country_Region ? data.Country_Region : 'unknow'}</span>
                    </button>
                )

                this.state.Recovered.map((recovered, index) =>
                    total_recovered = total_recovered + recovered.Recovered
                )

                return (
                    <div className="text-left">
    
                        <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="">
                        <h1 style={{paddingTop: '3%', paddingBottom: '3%', marginBottom: '0%'}} className=" h4 text-white font-weight-normal text-center">Total Recovered</h1>
                        <h1 style={{fontSize:'70px', color:"#32CD32"}} className="font-weight-normal text-center">{total_recovered}</h1>
                            <div style={{overflow:'auto', maxHeight:'650px'}} className="list-group">
                                {display}
                            </div>
                        </div>
                        <div className="text-center">
                            <button onClick={this.Deaths.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Deaths</button>
                            <button onClick={this.Recovered.bind(this)} style={{backgroundColor:"#24282c", border: 'solid 2px #141719'}} className="border-top-0 rounded-0 btn btn-outline-primary text-white mr-2 p-1 pl-2 pr-2">Recovered</button>
                        </div>
    
                    </div>
                )
            }
        } else return (null)
    }
}
