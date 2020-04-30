/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Image,
  Button,
  StatusBar,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import styles from '../styles/GeneralStyles.js';
import { ScrollView } from 'react-native-gesture-handler';
import * as d3 from 'd3';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class US extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View style={[styles.container, {flex: 1}]}>
          <View style={{flex: 1, alignItems:'center'}}>
            <Text style={{color: '#999999', fontSize:20, paddingTop:10}}>
              Total Confirmed
            </Text>
            <Text style={{color: '#e60000', fontSize:60, fontWeight:'bold'}}>
             {this.props.navigation.dangerouslyGetParent().getParam('totalUsConfirmed')}
            </Text>
            <Text style={{color: '#999999', fontSize:20}}>
              in the US
            </Text>
            <Text style={{color: '#eaeaea', fontSize:3, paddingTop:10}}>
              ___________________________________________________________
              ___________________________________________________________
              ___________________________________________________________
              ____________________________
            </Text>
            <Text style={{color: '#e60000', fontSize:18, paddingTop:15, fontWeight:'bold', paddingRight:65}}>
              {'Confirmed '}
              <Text style={{color: '#999999'}}>
                per US State (Deaths)
              </Text>
            </Text>
            <ScrollView contentContainerStyle={{ backgroundColor: 'transparent', paddingTop:7, paddingRight:110, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              {this.props.navigation.dangerouslyGetParent().getParam('usMap')}
            </ScrollView>
          </View>
        </View>
      );
  }
}

export default US;