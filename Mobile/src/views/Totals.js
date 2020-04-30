/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import styles from '../styles/GeneralStyles.js';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class Totals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, {flex: 1}]}>
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={{color: '#eaeaea', fontSize:40, paddingTop:20}}>
            Total Confirmed
          </Text>
          <Text style={{color: '#e60000', fontSize:70, fontWeight:'bold'}}>
            {this.props.navigation.dangerouslyGetParent().getParam('totalConfirmed')}
          </Text>
          <Text style={{color: '#eaeaea', fontSize:3, paddingTop:20}}>
            ___________________________________________________________
            ___________________________________________________________
            ___________________________________________________________
            ____________________________
          </Text>
          <Text style={{color: '#999999', fontSize:30, paddingTop:30}}>
            Total Deaths
          </Text>
          <Text style={{color: '#999999', fontSize:50, fontWeight:'bold'}}>
            {this.props.navigation.dangerouslyGetParent().getParam('totalDeaths')}
          </Text>
          <Text style={{color: '#eaeaea', fontSize:3, paddingTop:30}}>
            ___________________________________________________________
            ___________________________________________________________
            ___________________________________________________________
            ____________________________
          </Text>
          <Text style={{color: '#64d381', fontSize:45, paddingTop:23, fontWeight:'bold'}}>
            {this.props.navigation.dangerouslyGetParent().getParam('nbCountry')}
          </Text>
          <Text style={{color: '#64d381', fontSize:25}}>
            countries/regions
          </Text>
        </View>
      </View>
    );
  }
}

export default Totals;