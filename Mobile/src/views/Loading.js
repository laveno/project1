/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/GeneralStyles';
import { Marker } from 'react-native-maps';
import * as d3 from 'd3';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
      }
      
    componentDidMount() {
        const sstate = this
        var date = new Date().getDate() - 2;
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        if (date.toString().length === 1)
            date = "0" + date
        if (month.toString().length === 1)
            month = "0" + month
        var actual_date = month + "-" + date + "-" + year
      
        var tab = []
        var i = 0
        d3.csv('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/' + actual_date + '.csv', function(dataa, error) {
            if (dataa) {
                tab[i] = dataa
                i++
            } else {
               console.log(error)
            }
        })
    .then(function(dataa) {
        sstate.setState({data: tab})
        var confirmed_cases = 0;
        sstate.state.data.map((confirmed, index) => {
            confirmed_cases = confirmed_cases + Number(confirmed.Confirmed)
        })
        sstate.setState({totalConfirmed: confirmed_cases})
        
        var total_deaths = 0;
        sstate.state.data.map((confirmed, index) => {
            total_deaths = total_deaths + Number(confirmed.Deaths)
        })
        sstate.setState({totalDeaths: total_deaths})
        
        var tab_total_world = []
        var tab_map = []
        var tab_us = []
        var country = null
        var province = null
        var countries_nbr = 0
        var total_us_confirmed = 0
    
        sstate.state.data.map((column, index) => {
            country = column.Country_Region
            for (var x = 0; tab_total_world[x]; x++) {
                if (country === tab_total_world[x].Country) {
                    tab_total_world[x].Confirmed += Number(column.Confirmed)
                    tab_total_world[x].CountriesDeaths += Number(column.Deaths)
                    break;
                }
                if (tab_total_world[x + 1] == null) {
                    tab_total_world.push({
                        Confirmed: Number(column.Confirmed),
                        Country: country,
                        CountriesDeaths: Number(column.Deaths),
                        CountriesNbr: countries_nbr++,
                        Lat: Number(column.Lat),
                        Long: Number(column.Long_)
                    })
                break;
                }
            }
            if (tab_total_world.length === 0) {
                tab_total_world.push({
                    Confirmed: Number(column.Confirmed),
                    Country: country,
                    CountriesDeaths: Number(column.Deaths),
                    CountriesNbr: countries_nbr++,
                    Lat: Number(column.Lat),
                    Long: Number(column.Long_)
                })
            }
        })
        sstate.state.data.map((column, index) => {
            if (column.Country_Region === 'US') {
                total_us_confirmed += Number(column.Confirmed)
                province = column.Province_State
                for (var x = 0; tab_us[x]; x++) {
                    if (province === tab_us[x].Province) {
                        tab_us[x].UsConfirmed += Number(column.Confirmed)
                        tab_us[x].ProvinceDeaths += Number(column.Deaths)
                        break;
                    }
                    if (tab_us[x + 1] == null) {
                        tab_us.push({
                            UsConfirmed: Number(column.Confirmed),
                            Province: province,
                            ProvinceDeaths: Number(column.Deaths),
                        })
                        break;
                    }
                }
                if (tab_us.length === 0) {
                    tab_us.push({
                        UsConfirmed: Number(column.Confirmed),
                        Province: province,
                        ProvinceDeaths: Number(column.Deaths),
                    })
                }
            }
        })
        sstate.state.data.map((column, index) => {
            country = column.Country_Region
            for (var x = 0; tab_map[x]; x++) {
                if (tab_map[x + 1] == null) {
                    tab_map.push({
                        Confirmed: Number(column.Confirmed),
                        Country: country,
                        CountriesDeaths: Number(column.Deaths),
                        CountriesNbr: countries_nbr++,
                        Lat: Number(column.Lat),
                        Long: Number(column.Long_)
                    })
                break;
                }
            }
            if (tab_map.length === 0) {
                tab_map.push({
                    Confirmed: Number(column.Confirmed),
                    Country: country,
                    CountriesDeaths: Number(column.Deaths),
                    CountriesNbr: countries_nbr++,
                    Lat: Number(column.Lat),
                    Long: Number(column.Long_)
                })
            }
        })

        tab_total_world.sort(function(a,b){
            return parseInt(a.Confirmed)  - parseInt(b.Confirmed);
         })
        tab_total_world.reverse();
        tab_us.sort(function(a,b){
           return parseInt(a.UsConfirmed)  - parseInt(b.UsConfirmed);
        })
        tab_us.reverse();

        const world_map = tab_total_world.map((update, index) =>
            <Text key={index} style={{paddingTop: 3}}>
                <Text style={{
                    color: '#FF0000',
                    fontSize:14,
                    fontWeight:'bold'}}>
                    {update.Confirmed}
                </Text>
                <Text>    </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14,
                    fontWeight:'normal'}}>
                    {update.Country}
                </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14}}>
                    {' ('}
                </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14}}>
                    {update.CountriesDeaths}
                </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14}}>{')'}
                </Text>
            </Text>
        )

        const us_map = tab_us.map((update, index) =>
            <Text key={index} style={{paddingTop: 3}}>
                <Text style={{
                    color: '#FF0000',
                    fontSize:14,
                    fontWeight:'bold'}}>
                    {update.UsConfirmed}
                </Text>
                <Text>    </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14,
                    fontWeight:'normal'}}>
                    {update.Province}
                </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14}}>
                    {' ('}
                </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14}}>
                    {update.ProvinceDeaths}
                </Text>
                <Text style={{
                    color: '#AAAAAA',
                    fontSize:14}}>{')'}
                </Text>
            </Text>
        )

        const map_map = tab_map.map((update, index) =>
        <Marker
            key={index}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
            }}
            coordinate={{
                latitude: update.Lat,
                longitude: update.Long,
            }}
            opacity={0.7}>
            <Image source={require('../../assets/images/map_marker.png')} style={{
                height: Math.pow(update.Confirmed, (1/4)),
                width:Math.pow(update.Confirmed, (1/4)) }} />
        </Marker>
        )

        sstate.setState({totalUsConfirmed: total_us_confirmed})
        sstate.setState({mapMap: map_map})
        sstate.setState({tabUs: tab_us})
        sstate.setState({usMap: us_map})
        sstate.setState({worldMap: world_map})
        sstate.setState({nbCountry: tab_total_world.length})
        sstate.setState({totalDeaths: total_deaths})
        })
    }

    render() {
        if (this.state.totalConfirmed && this.state.totalDeaths && this.state.nbCountry && this.state.usMap && this.state.tabUs && this.state.totalUsConfirmed && this.state.mapMap)
            return (this.props.navigation.navigate('App',
            { totalConfirmed: this.state.totalConfirmed,
                totalDeaths: this.state.totalDeaths,
                totalUsConfirmed: this.state.totalUsConfirmed,
                mapMap: this.state.mapMap,
                tabUs: this.state.tabUs,
                usMap: this.state.usMap,
                totalUsConfirmed: this.state.totalUsConfirmed,
                nbCountry: this.state.nbCountry,
                worldMap: this.state.worldMap }));
        else {
            return (
                <View style={[styles.container, {flex: 1}]}>
                    <ActivityIndicator size="large" color="#ff0000" />
                </View>
            )
        }
    }
}

export default Loading;