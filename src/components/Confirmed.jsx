import React, { Component } from 'react';

export default class Confirmed extends Component {

    render() {
        
        if (this.props.Confirmed && this.props.Combined_Key && this.props.Country_Region) {
            let data = []
            let tab = []
            /*this.props.Confirmed.map((confirmed, index) =>
                data.push(confirmed)
            )
            this.props.Combined_Key.map((combined_key, index) =>
                data.push(combined_key)
            )*/
            for (var i = 0; this.props.Confirmed[i]; i++) {
                tab.push(this.props.Confirmed[i])
                tab.push(this.props.Combined_Key[i])
                data.push(tab)
                tab = []
            }

            // this.props.Confirmed.map((combined_key, index) =>
            //     <button className="text-center p-0 m-0 list-group-item list-group-item-action list-group-item-dark" key={this.props.Country_Region + index}>
            //         <span className="text-danger">{"Confirmed" + confirmed ? confirmed : 'unknow'}</span>
            //         <span>&emsp;</span>
            //         <span className="text-dark">{"Combined_Key" + this.props.Combined_Key ? this.props.Combined_Key : 'unknow'}</span>
            //     </button>
            // )

            return (
                <div className='text-danger text-center bg-dark w-100 border border-secondary'>
                    <div className="">
                        <h6 className="p-3 text-white-50 font-weight-normal">Confirmed Cases by <br /> Country/Region/Sovereignty</h6>
                        <div className=""></div>
                    </div>
                </div>
            )
        } else return (<div>no data</div>)
        
    }
}
