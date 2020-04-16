import React, { Component } from 'react';

export default class Confirmed extends Component {

    render() {
        
        if (this.props.data) {

            const display = this.props.data.map((data, index) =>
                <button className="text-center p-0 m-0 list-group-item list-group-item-action list-group-item-dark" key={index}>
                    <span className="text-danger">{"Confirmed" + data.confirmed ? data.confirmed : 'unknow'}</span>
                    <span>&emsp;</span>
                    <span className="text-dark">{"Combined_Key" + data.Combined_Key ? data.Combined_Key : 'unknow'}</span>
                </button>
            )

            return (
                <div className='text-danger text-center bg-dark w-100 border border-secondary'>
                    <div className="">
                        <h6 className="p-3 text-white-50 font-weight-normal">Confirmed Cases by <br /> Country/Region/Sovereignty</h6>
            <div className="">{display}</div>
                    </div>
                </div>
            )
        } else return (<div>no data</div>)
        
    }
}
