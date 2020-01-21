import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/About/';
import Schedule from '../screens/Schedule/';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Map from '../screens/Map/';
import Faves from '../screens/Faves/';
import Session from '../screens/Session/';
import {View, Text} from 'react-native';

const HomeScene = createStackNavigator({
  Schedule,
  Session: {
    screen: Session,
    navigationOptions: {
      headerBackTitleVisible: false,
    },
  },
});
const MapScene = createStackNavigator({Map});
const AboutScene = createStackNavigator({About});
const FavesScene = createStackNavigator({Faves});

const Navigator = createBottomTabNavigator(
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
  {
    tabBarOptions: {
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
    initialRouteName: 'Schedule',
  },
);

export default createAppContainer(Navigator);
