import React, { Component } from 'react';

export default class Deaths_Recovered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetedTab: -1,
            Deaths: [],
            Recovered: []
        };
    }

    Recovered() {
        var tab = []
        var province = null

        this.props.data.map((column, index) => {
            province = column.Province_State
            if (province !== "") {
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
        console.log(tab)
        this.setState({Deaths: tab})
        this.setState({targetedTab: 0})
    }

    render() {
        if (this.props.data) {

            var display

            if (this.state.targetedTab === 0) {

                display = this.state.Deaths.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"20px"}} className="font-weight-bold">{data.Deaths ? data.Deaths : 'unknow'}</span>
                        <span>&emsp;</span>
                        <span className="text-white">{data.Combined_Key ? data.Combined_Key : 'unknow'}</span>
                    </button>
                )
            }
            else {
                display = this.state.Recovered.map((data, index) => 
                    <button href="#" className="list-group-item list-group-item-action bg-dark btn btn-dark" key={index}>
                        <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"20px"}} className="font-weight-bold">{data.Recovered ? data.Recovered : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span style={{WebkitTextStroke: '0.4px black',color: "#ff0000", fontSize:"20px"}} className="">recovered</span>
                        <span> <br /> </span>
                        <span className="text-white font-weight-bold">{data.ProvinceState ? data.ProvinceState : 'unknow'}</span>
                        <span>&thinsp;</span>
                        <span className="text-white">{data.Country ? data.Country : 'unknow'}</span>
                    </button>
                )
            }

            return (
                <div className="text-left">

                    <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="">
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
        } else return (<div>no data</div>)
        
    }
}
