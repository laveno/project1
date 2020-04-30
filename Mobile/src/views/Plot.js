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

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

class Plot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={[styles.container, {flex: 1}]}>
        <View style={{flex: 1, alignItems:'center'}}>
          <Text style={{color: '#eaeaea', fontSize:40, paddingTop:20}}>
            PLOT : TODO
          </Text>
        </View>
      </View>
    );
  }
}

export default Plot;