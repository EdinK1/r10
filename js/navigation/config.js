import React from 'react';
import GradientHeader from '../components/GradientHeader';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = ({navigation}) =>
  navigation.isFirstRouteInParent() ? (
    <Icon
      name="md-menu"
      size={25}
      color="#fff"
      onPress={navigation.openDrawer}
      style={{paddingLeft: 10}}
    />
  ) : (
    <Icon
      name="md-arrow-back"
      size={25}
      color="#fff"
      onPress={() => navigation.goBack()}
      style={{paddingLeft: 10}}
    />
  );

export const sharedNavigationOptions = navigation => ({
  headerBackTitleVisible: false,
  headerTintColor: '#fff',
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Montserrat-Regular',
    paddingBottom: 5,
  },
  ...Platform.select({
    android: {headerLeft: <Drawer navigation={navigation} />},
  }),
});
