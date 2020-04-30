/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import styles from '../styles/GeneralStyles.js';
import MapView from 'react-native-maps';
import MapStyle from '../styles/MapStyle.json'

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

const initialRegion = {
  latitude: 26.72825,
  longitude: 2.4324,
  latitudeDelta: 90,
  longitudeDelta: 90
};

class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView style={styles.map} initialRegion={initialRegion} customMapStyle={MapStyle}>
          {this.props.navigation.dangerouslyGetParent().getParam('mapMap')}
        </MapView>
      </View>
    );
  }
}

export default Map;