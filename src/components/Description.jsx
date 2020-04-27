import React, { Component } from 'react'

export default class Description extends Component {
    render() {
        return (
            <div style={{color: "#D3D3D3", backgroundColor: '#141719', border:'solid 1px #484d53', overflow:'auto', maxHeight:'131px'}} className="p-2">
                <p>
                Lancet Inf Dis Article: Here. Mobile Version: Here.<br></br>
                Lead by JHU CSSE. Automation Support: Esri Living Atlas team and JHU APL. Contact US. FAQ.<br></br>
                Data sources: WHO, CDC, ECDC, NHC, DXY, 1point3acres, Worldometers.info, BNO, the COVID Tracking Project (testing and<br></br>
                hospitalizations), state and national government health departments, and local media reports. Read more in this blog.<br></br>
                <br></br>
                Downloadable database: GitHub: Here. Feature layer: Here.<br></br>
                <br></br>
                Confirmed cases include presumptive positive cases and probable cases, in accordance with CDC guidelines as of April 14.<br></br>
                Death totals in the US include confirmed and probable, in accordance with CDC guidelines as of April 14.<br></br>
                Recovered cases outside China are estimates based on local media reports, and state and local reporting when available, and<br></br>
                therefore may be substantially lower than the true number.<br></br>
                Active cases = total confirmed - total recovered - total deaths.<br></br>
                Incidence Rate = confirmed cases per 100,000 persons.<br></br>
                Case-Fatality Ratio (%) = Number recorded deaths / Number confirmed cases.<br></br>
                US Testing Rate = total tested per 100,000 persons.<br></br>
                US Hospitalization Rate (%) = Total number hospitalized / Number confirmed cases.<br></br>
                <br></br>
                Point level: County level - US; Province/State level - China, Canada, Australia; Country level - other countries. All points (except for<br></br>
                Australia) shown on the map are based on geographic centroids, and are not representative of a specific address, building or any<br></br>
                location at a spatial scale finer than a province/state. Australian dots are located at the centroid of the largest city in each state.<br></br>
                <br></br>
                Time Zones: lower-left corner indicator - your local time; lower-right corner plot - UTC.<br></br>
                <br></br>
                Note: All cases of COVID-19 in repatriated US citizens from the Diamond Princess are grouped together. These individuals have been<br></br>
                assigned to various quarantine locations (in military bases and hospitals) around the US. This grouping is consistent with the CDC.<br></br>
                <br></br>
                *The names of locations included on the Website correspond with the official designations used by the U.S. Department of State.<br></br>
                <br></br>
                Terms and Conditions of Website Use:  This website and its contents herein, including all data, mapping, and analysis (“Website”),<br></br>
                copyright 2020 Johns Hopkins University, all rights reserved, is provided to the public strictly for public health, educational, and<br></br>
                academic research purposes. Redistribution of the Website or the aggregated data set underlying the Website is strictly prohibited.<br></br>
                You are welcome to link to the Website, however.  The Website relies upon publicly available data from multiple sources that do not<br></br>
                always agree. The Johns Hopkins University hereby disclaims any and all representations and warranties with respect to the Website,<br></br>
                including accuracy, fitness for use, reliability, and non-infringement. Reliance on the Website for medical guidance or use of the<br></br>
                Website in commerce is strictly prohibited.  Any use of the Johns Hopkins’ names, logos, trademarks, and trade dress for promotional<br></br>
                or commercial purposes is strictly prohibited.<br></br>
                <br></br>
                Visit the Johns Hopkins Coronavirus Resource Center where our experts help to advance understanding of the virus, inform the public,<br></br>
                and brief policymakers in order to guide a response, improve care, and save lives.
                </p>
            </div>
        )
    }
}
