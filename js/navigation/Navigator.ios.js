import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About';
import Schedule from '../screens/Schedule';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Map from '../screens/Map';
import Faves from '../screens/Faves';
import Session from '../screens/Session';
import {View, Text} from 'react-native';
import {sharedNavigationOptions} from './config';
import Icon from 'react-native-vector-icons/Ionicons';
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

const Navigator = createBottomTabNavigator(
  {
    Schedule: {
      screen: HomeScene,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-calendar" size={25} color={tintColor} />
        ),
      },
    },
    Map: {
      screen: MapScene,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-map" size={25} color={tintColor} />
        ),
      },
    },
    Faves: {
      screen: FavesScene,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-heart" size={25} color={tintColor} />
        ),
      },
    },
    About: {
      screen: AboutScene,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-information-circle" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      labelPosition: 'below-icon',
      style: {
        backgroundColor: '#000',
        height: 65,
      },
      labelStyle: {
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Montserrat-Regular',
      },
    },
    initialRouteName: 'Schedule',
  },
);

export default createAppContainer(Navigator);
