import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About/';
import Schedule from '../screens/Schedule/';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Map from '../screens/Map/';
import {Image} from 'react-native';
const HomeScene = createStackNavigator({Schedule});
const MapScene = createStackNavigator({Map});
const AboutScene = createStackNavigator({About});

const Navigator = createBottomTabNavigator(
  {
    Schedule: HomeScene,
    Map: MapScene,
    About: AboutScene,
  },
  {
    initialRouteName: 'Schedule',
    tabBarOptions: {
      backBehaviour: 'initialRoute',
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      labelPosition: 'below-icon',
      style: {
        backgroundColor: '#000',
      },
      labelStyle: {
        fontSize: 14,
        fontWeight: '600',
      },
    },
  },
);

export default createAppContainer(Navigator);
