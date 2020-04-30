import React, { Component } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

export default class Map extends Component {
    render() {
        if (this.props.data) {
          var markers = []
            const country_info = this.props.data.map((country, index) =>
                markers.push({
                  markerOffset: 25,
                  name : "",
                  coordinates : [country.Long_, country.Lat]
                })
            )

            return (
              <ComposableMap data-tip="" projectionConfig={{ scale: 160 }}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                      }}
                      style={{
                        default: {
                          fill: "#D6D6DA",
                          outline: "none"
                        },
                        hover: {
                          fill: "#F53",
                          outline: "none"
                        },
                        pressed: {
                          fill: "#E42",
                          outline: "none"
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
            {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {name}
              </text>
            </Marker>
          ))}
    
          </ComposableMap>
            )
        } else return (<div>no data</div>)
    }
}


const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

/*  const markers = [
    {
      markerOffset: -15,
      name: "",
      coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: -15, name: "", coordinates: [-68.1193, -16.4897] },
    { markerOffset: 25, name: "", coordinates: [-47.8825, -15.7942] },
    { markerOffset: 25, name: "", coordinates: [-70.6693, -33.4489] },
    { markerOffset: 25, name: "", coordinates: [-74.0721, 4.711] },
    { markerOffset: 25, name: "", coordinates: [-78.4678, -0.1807] },
    { markerOffset: -15, name: "", coordinates: [-58.1551, 6.8013] },
    { markerOffset: -15, name: "", coordinates: [-57.5759, -25.2637] },
    { markerOffset: 25, name: "", coordinates: [-55.2038, 5.852] },
    { markerOffset: 25, name: "", coordinates: [-56.1645, -34.9011] },
    { markerOffset: -15, name: "", coordinates: [-66.9036, 10.4806] },
    { markerOffset: -15, name: "", coordinates: [-77.0428, -12.0464] }
  ];
  */

/*
const MapChart = () => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                  }}
                  style={{
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}

      </ComposableMap>
    </>
  );
};
*/