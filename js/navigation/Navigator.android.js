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

const Navigator = createDrawerNavigator(
  {
    Schedule: {
      screen: HomeScene,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Text>⏱</Text>
          </View>
        ),
      },
    },
    Map: {
      screen: MapScene,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Text>🗺</Text>
          </View>
        ),
      },
    },
    Faves: {
      screen: FavesScene,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Text>⭐️</Text>
          </View>
        ),
      },
    },
    About: {
      screen: AboutScene,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Text>ℹ️</Text>
          </View>
        ),
      },
    },
  },
  // {
  //   tabBarOptions: {
  //     activeTintColor: '#fff',

  //     inactiveTintColor: '#999',
  //     labelPosition: 'below-icon',
  //     style: {
  //       backgroundColor: '#000',
  //     },
  //     labelStyle: {
  //       fontSize: 14,
  //       fontWeight: '600',
  //       fontFamily: 'Montserrat-Regular',
  //     },
  //   },
  //   initialRouteName: 'Schedule',
  // },
);

export default createAppContainer(Navigator);
