import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';
import Schedule from '../screens/Schedule';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Map from '../screens/Map';
import Faves from '../screens/Faves';
import Session from '../screens/Session';
import {View, Text} from 'react-native';
import {sharedNavigationOptions} from './config';

const HomeScene = createStackNavigator(
  {Schedule, Session},
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const MapScene = createStackNavigator(
  {Map},
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const AboutScene = createStackNavigator(
  {About},
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);
const FavesScene = createStackNavigator(
  {Faves},
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
    }),
  },
);

const Navigator = createDrawerNavigator({
  Schedule: HomeScene,
  Map: MapScene,
  Faves: FavesScene,
  About: AboutScene,
});

export default createAppContainer(Navigator);
