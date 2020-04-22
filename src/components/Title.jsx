import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#141719', border:'solid 1px #484d53'}} className="pb-1 pt-2">
                <h3 className="ml-5 pl-5 text-white font-weight-normal">COVID-19 Dashboard by the Center for Systems
                    Science and Engineering (CSSE) at Johns Hopkins University (JHU)
                </h3>
            </div>
        )
    }
}
