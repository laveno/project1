/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
/// Views
import Totals from './src/views/Totals';
import World from './src/views/World';
import Plot from './src/views/Plot';
import Map from './src/views/Map';
import US from './src/views/US';
import Loading from './src/views/Loading';
/// Components
//--Empty

const BottomTabNavigator = createBottomTabNavigator(
  {
    Totals: {
      screen: Totals,
    },
    World: {
      screen: World,
    },
    // Plot: {
    //   screen: Plot,
    // },
    Map: {
      screen: Map,
    },
    US: {
      screen: US,
    },
  },
  {
    initialRouteName: 'Totals',
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveBackgroundColor: '#000000',
      activeBackgroundColor: '#000000',
      labelStyle: {
        fontSize: 16,
      },
    }
  }
);

const RootNavigator = createSwitchNavigator(
  {
    Loading: Loading,
    App: BottomTabNavigator,
  },
  {
    initialRouteName: 'Loading'
  }
);

export default createAppContainer(RootNavigator);
