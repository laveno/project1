/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  Dimensions,
} from 'react-native';
import styles from '../styles/GeneralStyles.js';
import { ScrollView } from 'react-native-gesture-handler';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class World extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <View style={[styles.container, {flex: 1}]}>
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={{color: '#eaeaea', fontSize:16, paddingTop:15}}>
            Confirmed Cases by Country/Regions (Deaths)
          </Text>
          <ScrollView contentContainerStyle={{
            backgroundColor: 'transparent',
            paddingTop:7,
            paddingRight:80,
            justifyContent: 'flex-start',
            alignItems: 'flex-start' }}>
            {this.props.navigation.dangerouslyGetParent().getParam('worldMap')}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default World;